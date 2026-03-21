use clap::Parser;
use ignore::overrides::OverrideBuilder;
use ignore::WalkBuilder;
use is_terminal::IsTerminal;
use rayon::prelude::*;
use std::io::Read;
use std::process;
use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};
use std::sync::Mutex;

use crate::diff::parse_changed_lines;
use crate::directive::{
    collect_label_names, directives_have_label, parse_directives_from_content,
    validate_directive_pairing, validate_directive_uniqueness,
};
use crate::engine::{find_repo_root, lint_diff, normalize_path_str, split_target_label};

static COLOR_ENABLED: AtomicBool = AtomicBool::new(false);

fn setup_color() {
    let enabled = std::io::stderr().is_terminal() && std::env::var_os("NO_COLOR").is_none();
    COLOR_ENABLED.store(enabled, Ordering::Relaxed);
}

fn red(s: &str) -> String {
    if COLOR_ENABLED.load(Ordering::Relaxed) {
        format!("\x1b[31m{}\x1b[0m", s)
    } else {
        s.to_string()
    }
}

fn dim(s: &str) -> String {
    if COLOR_ENABLED.load(Ordering::Relaxed) {
        format!("\x1b[2m{}\x1b[0m", s)
    } else {
        s.to_string()
    }
}

#[derive(Parser)]
#[command(
    name = "ifchange",
    version,
    about = "Linter for enforcing conditional change directives",
    after_help = "\
Directives:
  Mark related code with comment directives (use your language's comment style):

  # LINT.IfChange                             Open a guarded section
  env:
    DATABASE_URL: postgres://prod:5432/myapp
  # LINT.ThenChange(src/config.py#env)        Close it; list files that must co-change

  # LINT.Label(env)                           Named target section
  DATABASE_URL = os.environ[\"DATABASE_URL\"]
  # LINT.EndLabel

  Multiple targets: LINT.ThenChange(a.py#foo, b.py)
  Self-reference:   LINT.ThenChange(#other-label)

Examples:
  git diff HEAD~1 | ifchange                  Lint a diff from stdin
  ifchange changes.diff                       Lint a diff file
  ifchange --no-lint                          Validate directive syntax only
  ifchange --no-lint -s ./src                 Scan a specific directory
  git diff HEAD~1 | ifchange --no-scan        Lint only, skip syntax scan
  ifchange -i '**/*.sql' f.diff               Ignore files matching a glob
  ifchange -i 'config.toml#db' f.diff         Ignore a labeled section

Exit codes: 0 = ok, 1 = lint errors, 2 = fatal error"
)]
pub struct Cli {
    /// Diff file path, or '-' / omit to read from stdin
    pub diff_file: Option<String>,

    /// Warn on lint errors but exit with code 0
    #[arg(short = 'w', long = "warn")]
    pub warn: bool,

    /// Show processing details and validation summary
    #[arg(short = 'v', long = "verbose")]
    pub verbose: bool,

    /// Show per-file processing details (implies --verbose)
    #[arg(short = 'd', long = "debug")]
    pub debug: bool,

    /// Number of parallel tasks (0 for auto-detect based on CPU cores)
    #[arg(short = 'j', long = "jobs", default_value = "0")]
    pub jobs: usize,

    /// Ignore specified file or file#label during linting (repeatable)
    #[arg(short = 'i', long = "ignore")]
    pub ignore: Vec<String>,

    /// Scan directory for LINT directive errors (default: current directory)
    #[arg(short = 's', long = "scan")]
    pub scan: Option<String>,

    /// Skip directive syntax scan
    #[arg(long = "no-scan")]
    pub no_scan: bool,

    /// Skip diff-based lint
    #[arg(long = "no-lint")]
    pub no_lint: bool,
}

pub fn run(cli: Cli) -> i32 {
    setup_color();

    if cli.no_scan && cli.no_lint {
        eprintln!(
            "{} --no-scan and --no-lint cannot both be set",
            red("Error:")
        );
        return 2;
    }

    let debug = cli.debug;
    let verbose = cli.verbose || debug;

    // Discover repo root for resolving repo-relative paths.
    let cwd = std::env::current_dir().ok();
    let repo_root = cwd.as_ref().and_then(|c| find_repo_root(c));

    let root_display = if verbose {
        repo_root.as_ref().map(|root| {
            if cwd.as_ref() == Some(root) {
                ".".to_string()
            } else {
                root.display().to_string()
            }
        })
    } else {
        None
    };

    let root = repo_root
        .or(cwd)
        .unwrap_or_else(|| std::path::PathBuf::from("."));

    run_inner(cli, verbose, debug, &root, root_display.as_deref())
}

fn run_inner(
    cli: Cli,
    verbose: bool,
    debug: bool,
    repo_root: &std::path::Path,
    root_display: Option<&str>,
) -> i32 {
    if cli.jobs > 0 {
        rayon::ThreadPoolBuilder::new()
            .num_threads(cli.jobs)
            .build_global()
            .ok();
    }

    if verbose {
        let n = if cli.jobs > 0 {
            cli.jobs
        } else {
            rayon::current_num_threads()
        };
        if let Some(rd) = root_display {
            eprintln!("{}", dim(&format!("root: {} | jobs: {}", rd, n)));
        } else {
            eprintln!("{}", dim(&format!("jobs: {}", n)));
        }
        if debug {
            eprintln!();
        }
    }

    let mut exit_code = 0;
    let mut scan_errors = 0usize;
    let mut lint_errors = 0usize;

    if !cli.no_scan {
        let scan_dir = cli.scan.as_deref().unwrap_or(".");
        let scan_root = if cli.scan.is_some() {
            let scan_path = std::path::Path::new(scan_dir);
            let scan_abs = if scan_path.is_absolute() {
                scan_path.to_path_buf()
            } else {
                repo_root.join(scan_path)
            };
            find_repo_root(&scan_abs).unwrap_or(scan_abs)
        } else {
            repo_root.to_path_buf()
        };
        let (scan_exit, scan_err_count) = run_scan(scan_dir, verbose, debug, &scan_root);
        scan_errors = scan_err_count;
        exit_code = exit_code.max(scan_exit);
    }

    if !cli.no_lint {
        let (lint_exit, lint_err_count) = match run_lint_phase(&cli, verbose, debug, repo_root) {
            Ok(result) => result,
            Err(fatal) => return fatal,
        };
        lint_errors = lint_err_count;
        exit_code = exit_code.max(lint_exit);
    }

    print_error_summary(scan_errors, lint_errors);
    exit_code
}

/// Read diff text from a file path or stdin.
fn read_diff(diff_file: Option<&str>) -> Result<String, i32> {
    match diff_file {
        Some(path) if path != "-" => std::fs::read_to_string(path).map_err(|e| {
            eprintln!("{} {}", red("Error:"), e);
            2
        }),
        _ => {
            let mut buf = String::new();
            std::io::stdin().read_to_string(&mut buf).map_err(|e| {
                eprintln!("{} reading stdin: {}", red("Error:"), e);
                2
            })?;
            Ok(buf)
        }
    }
}

/// Validate that diff text looks like a real unified diff.
fn validate_diff(diff_text: &str) -> Result<(), i32> {
    let trimmed = diff_text.trim();
    if trimmed.is_empty() {
        return Ok(());
    }
    let changes = parse_changed_lines(diff_text);
    if changes.is_empty() {
        let has_valid =
            trimmed.contains("---") || trimmed.contains("diff --git") || trimmed.contains("index ");
        if !has_valid {
            let snippet: String = trimmed.chars().take(100).collect();
            let snippet = snippet.replace('\n', "\\n");
            eprintln!(
                "{} Invalid diff input: no file changes detected (snippet: \"{}...\")",
                red("Error:"),
                snippet
            );
            return Err(2);
        }
    }
    Ok(())
}

/// Run the lint phase: read diff, validate, lint, and print results.
/// Returns `Ok((exit_code, error_count))` or `Err(fatal_exit_code)`.
fn run_lint_phase(
    cli: &Cli,
    verbose: bool,
    debug: bool,
    repo_root: &std::path::Path,
) -> Result<(i32, usize), i32> {
    let diff_text = read_diff(cli.diff_file.as_deref())?;
    validate_diff(&diff_text)?;

    let result = lint_diff(&diff_text, verbose, debug, &cli.ignore, repo_root);
    let lint_errors = result.messages.len();

    if verbose {
        print_lint_summary(&result, lint_errors, debug);
    }

    if verbose && !result.messages.is_empty() {
        eprintln!();
    }
    for msg in &result.messages {
        eprintln!("{}", red(msg));
    }

    let exit = if cli.warn && result.exit_code == 1 {
        0
    } else {
        result.exit_code
    };
    Ok((exit, lint_errors))
}

fn print_lint_summary(result: &crate::model::LintResult, lint_errors: usize, debug: bool) {
    eprintln!();
    if debug {
        eprintln!();
    }
    let header = if result.files_checked > 0 {
        format!(
            "Lint summary: {} {} checked, {} {} in diff",
            result.files_checked,
            if result.files_checked == 1 {
                "file"
            } else {
                "files"
            },
            result.pairs_checked,
            if result.pairs_checked == 1 {
                "pair"
            } else {
                "pairs"
            },
        )
    } else {
        format!(
            "Lint summary: {} {} in diff",
            result.pairs_checked,
            if result.pairs_checked == 1 {
                "pair"
            } else {
                "pairs"
            },
        )
    };
    if lint_errors > 0 {
        let error_part = format!(
            ", {} {}",
            lint_errors,
            if lint_errors == 1 { "error" } else { "errors" },
        );
        eprintln!("{}{}", dim(&header), red(&error_part));
    } else {
        eprintln!("{}", dim(&header));
    }

    for msg in &result.verbose_messages {
        eprintln!("{}", dim(msg));
    }
}

fn print_error_summary(scan_errors: usize, lint_errors: usize) {
    let total_errors = scan_errors + lint_errors;
    if total_errors > 0 {
        let mut parts: Vec<String> = Vec::new();
        if scan_errors > 0 {
            parts.push(format!("{} scan", scan_errors));
        }
        if lint_errors > 0 {
            parts.push(format!("{} lint", lint_errors));
        }
        eprintln!(
            "\n{}",
            red(&format!(
                "found {} {} ({})",
                total_errors,
                if total_errors == 1 { "error" } else { "errors" },
                parts.join(", ")
            ))
        );
    }
}

fn validate_thenchange_targets(
    directives: &[crate::model::Directive],
    parent: &std::path::Path,
    repo_root: &std::path::Path,
    file_path: &str,
) -> Vec<String> {
    use std::collections::HashMap;

    let mut errors = Vec::new();
    // Cache parsed target files to avoid N+1 reads when multiple directives
    // reference labels in the same file.
    let mut target_cache: HashMap<
        std::path::PathBuf,
        Result<Vec<crate::model::Directive>, String>,
    > = HashMap::new();

    for d in directives {
        if let crate::model::Directive::ThenChange { line, target } = d {
            let (target_name, label) = split_target_label(target);

            // Self-reference: validate label exists in own file
            if target_name.is_empty() {
                if let Some(label_name) = label {
                    if !directives_have_label(directives, label_name) {
                        errors.push(format!(
                            "error: {}:{}: self-reference label '{}' not found in file",
                            file_path, line, label_name
                        ));
                    }
                }
                continue;
            }

            let resolved = if let Some(stripped) = target_name.strip_prefix('/') {
                let normalized = normalize_path_str(stripped.trim_start_matches('/'));
                repo_root.join(normalized)
            } else {
                parent.join(target_name)
            };
            if target_name.ends_with('/') {
                // Directory target
                if label.is_some() {
                    errors.push(format!(
                        "error: {}:{}: labels are not supported for directory targets ('{}')",
                        file_path, line, target_name
                    ));
                } else if !resolved.is_dir() {
                    errors.push(format!(
                        "error: {}:{}: ThenChange target '{}' does not exist",
                        file_path, line, target_name
                    ));
                }
            } else if resolved.is_dir() {
                errors.push(format!(
                    "error: {}:{}: ThenChange target '{}' is a directory; add trailing '/' if intentional",
                    file_path, line, target_name
                ));
            } else if !resolved.is_file() {
                errors.push(format!(
                    "error: {}:{}: ThenChange target '{}' does not exist",
                    file_path, line, target_name
                ));
            } else if let Some(label_name) = label {
                // File exists, check if the referenced label exists in target.
                // Use cache to avoid re-reading the same file for multiple label refs.
                let target_directives = target_cache.entry(resolved.clone()).or_insert_with(|| {
                    let resolved_str = resolved.to_string_lossy().into_owned();
                    std::fs::read_to_string(&resolved)
                        .map_err(|e| {
                            format!(
                                "error: {}:{}: failed to read '{}': {}",
                                file_path, line, target_name, e
                            )
                        })
                        .and_then(|content| {
                            parse_directives_from_content(&content, &resolved_str).map_err(|e| {
                                format!(
                                    "error: {}:{}: failed to parse '{}': {}",
                                    file_path, line, target_name, e
                                )
                            })
                        })
                });
                match target_directives {
                    Ok(ref tds) => {
                        if !directives_have_label(tds, label_name) {
                            let available = collect_label_names(tds);
                            let avail_str = if available.is_empty() {
                                "none".to_string()
                            } else {
                                available.join(", ")
                            };
                            errors.push(format!(
                                "error: {}:{}: label '{}' not found in '{}' (available: {})",
                                file_path, line, label_name, target_name, avail_str
                            ));
                        }
                    }
                    Err(err) => errors.push(err.clone()),
                }
            }
        }
    }
    errors
}

fn run_scan(dir: &str, verbose: bool, debug: bool, repo_root: &std::path::Path) -> (i32, usize) {
    let errors: Mutex<Vec<String>> = Mutex::new(Vec::new());
    let verbose_lines: Mutex<Vec<String>> = Mutex::new(Vec::new());
    let file_count = AtomicUsize::new(0);
    let directive_pair_count = AtomicUsize::new(0);
    let label_count = AtomicUsize::new(0);

    let overrides = OverrideBuilder::new(dir)
        .add("!.git")
        .expect("valid glob")
        .build()
        .expect("valid overrides");
    let entries: Vec<_> = WalkBuilder::new(dir)
        .hidden(false)
        .overrides(overrides)
        .build()
        .filter_map(|entry| entry.ok())
        .filter(|entry| entry.file_type().is_some_and(|ft| ft.is_file()))
        .collect();

    let walked_count = entries.len();

    entries.par_iter().for_each(|entry| {
        let path = entry.path();
        let file_path = path.to_string_lossy().to_string();

        if debug {
            eprintln!("{}", dim(&format!("Scanning: {}", file_path)));
        }

        let content = match std::fs::read_to_string(path) {
            Ok(c) => c,
            Err(_) => return,
        };

        if !content.as_bytes().windows(6).any(|w| {
            w[..5].eq_ignore_ascii_case(b"LINT.")
                && matches!(w[5] | 0x20, b'i' | b't' | b'l' | b'e')
        }) {
            return;
        }

        file_count.fetch_add(1, Ordering::Relaxed);

        match parse_directives_from_content(&content, &file_path) {
            Ok(directives) => {
                let pair_count = directives
                    .iter()
                    .filter(|d| matches!(d, crate::model::Directive::IfChange { .. }))
                    .count();
                let lbl_count = directives
                    .iter()
                    .filter(|d| matches!(d, crate::model::Directive::Label { .. }))
                    .count();
                directive_pair_count.fetch_add(pair_count, Ordering::Relaxed);
                label_count.fetch_add(lbl_count, Ordering::Relaxed);

                if verbose && (pair_count > 0 || lbl_count > 0) {
                    let mut parts = Vec::new();
                    if pair_count > 0 {
                        parts.push(format!(
                            "{} {}",
                            pair_count,
                            if pair_count == 1 { "pair" } else { "pairs" }
                        ));
                    }
                    if lbl_count > 0 {
                        parts.push(format!(
                            "{} {}",
                            lbl_count,
                            if lbl_count == 1 { "label" } else { "labels" }
                        ));
                    }
                    verbose_lines.lock().unwrap().push(format!(
                        "  {}: {}",
                        file_path,
                        parts.join(", ")
                    ));
                }

                let dup_errors = validate_directive_uniqueness(&directives, &file_path);
                if !dup_errors.is_empty() {
                    let mut errs = errors.lock().unwrap();
                    for err in dup_errors {
                        errs.push(err);
                    }
                }

                let pairing_errors = validate_directive_pairing(&directives, &file_path);
                if !pairing_errors.is_empty() {
                    let mut errs = errors.lock().unwrap();
                    errs.extend(pairing_errors);
                }

                let parent = path.parent().unwrap_or(std::path::Path::new("."));
                let target_errors =
                    validate_thenchange_targets(&directives, parent, repo_root, &file_path);
                if !target_errors.is_empty() {
                    let mut errs = errors.lock().unwrap();
                    errs.extend(target_errors);
                }
            }
            Err(e) => {
                errors.lock().unwrap().push(e.to_string());
            }
        }
    });

    let errors = errors.into_inner().unwrap();
    let mut verbose_lines = verbose_lines.into_inner().unwrap();
    verbose_lines.sort();
    let err_count = errors.len();

    if verbose {
        eprintln!();
        let files = file_count.load(Ordering::Relaxed);
        let pairs = directive_pair_count.load(Ordering::Relaxed);
        let labels = label_count.load(Ordering::Relaxed);
        let header = format!(
            "Scan summary: {} files walked ({} with directives), {} directive {}, {} {}",
            walked_count,
            files,
            pairs,
            if pairs == 1 { "pair" } else { "pairs" },
            labels,
            if labels == 1 { "label" } else { "labels" },
        );

        if !verbose_lines.is_empty() {
            eprintln!("{}", dim("Files with directives:"));
            for line in &verbose_lines {
                eprintln!("{}", dim(line));
            }
            eprintln!();
        }

        if err_count > 0 {
            let error_part = format!(
                ", {} {}",
                err_count,
                if err_count == 1 { "error" } else { "errors" },
            );
            eprintln!("{}{}", dim(&header), red(&error_part));
        } else {
            eprintln!("{}", dim(&header));
        }
    }

    // Errors at column 0
    if verbose && !errors.is_empty() {
        eprintln!();
    }
    for err in &errors {
        eprintln!("{}", red(err));
    }

    let exit_code = if errors.is_empty() { 0 } else { 1 };
    (exit_code, err_count)
}

pub fn run_from_env() -> ! {
    let cli = Cli::parse();
    process::exit(run(cli));
}
