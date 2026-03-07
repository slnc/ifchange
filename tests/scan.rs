mod common;

use common::*;
use std::fs;
use std::process::Command;
use tempfile::TempDir;

#[test]
fn scan_mode_duplicate_labels() {
    let dir = TempDir::new().unwrap();
    write_files(
        dir.path(),
        &[(
            "dup.ts",
            "// LINT.IfChange(\"foo\")\n// LINT.IfChange(\"bar\")\n// LINT.IfChange(\"foo\")\n",
        )],
    );
    let output = Command::new(binary_path())
        .args(["-s", &dir.path().to_string_lossy()])
        .output()
        .unwrap();
    assert_eq!(output.status.code().unwrap(), 1);
}

#[test]
fn scan_mode_unique_labels() {
    let dir = TempDir::new().unwrap();
    write_files(
        dir.path(),
        &[(
            "ok.ts",
            "// LINT.IfChange(\"a\")\n// LINT.IfChange(\"b\")\n",
        )],
    );
    let output = Command::new(binary_path())
        .args(["-s", &dir.path().to_string_lossy()])
        .output()
        .unwrap();
    assert_eq!(output.status.code().unwrap(), 0);
}

#[test]
fn scan_mode_skips_non_lint_files() {
    let dir = TempDir::new().unwrap();
    write_files(dir.path(), &[("plain.ts", "const x = 1;\n")]);
    let output = Command::new(binary_path())
        .args(["-s", &dir.path().to_string_lossy()])
        .output()
        .unwrap();
    assert_eq!(output.status.code().unwrap(), 0);
}

#[cfg(unix)]
#[test]
fn scan_mode_unreadable_file_is_skipped() {
    use std::os::unix::fs::PermissionsExt;
    let dir = TempDir::new().unwrap();
    let path = dir.path().join("secret.ts");
    fs::write(&path, "// LINT.IfChange\n").unwrap();
    let mut perms = fs::metadata(&path).unwrap().permissions();
    perms.set_mode(0o000);
    fs::set_permissions(&path, perms).unwrap();

    let output = Command::new(binary_path())
        .args(["-s", &dir.path().to_string_lossy()])
        .output()
        .unwrap();

    // Restore permissions for temp dir cleanup.
    let mut restore = fs::metadata(&path).unwrap().permissions();
    restore.set_mode(0o644);
    fs::set_permissions(&path, restore).unwrap();

    assert_eq!(output.status.code().unwrap(), 0);
}

#[test]
fn scan_mode_debug_and_parse_error() {
    let dir = TempDir::new().unwrap();
    write_files(dir.path(), &[("bad.ts", "// LINT.ThenChange(\n")]);
    let output = Command::new(binary_path())
        .args(["-s", &dir.path().to_string_lossy(), "--debug"])
        .output()
        .unwrap();
    assert_eq!(output.status.code().unwrap(), 1);
    let stderr = String::from_utf8_lossy(&output.stderr);
    assert!(stderr.contains("Validating file:"), "stderr: {}", stderr);
    assert!(
        stderr.contains("Malformed LINT.ThenChange"),
        "stderr: {}",
        stderr
    );
}

#[test]
fn scan_mode_skips_binary_files() {
    let dir = TempDir::new().unwrap();
    fs::write(dir.path().join("binary.rs"), b"\x00\x01\x02\x03\xff\xfe").unwrap();
    let output = Command::new(binary_path())
        .arg("--scan")
        .arg(dir.path().join("binary.rs").to_string_lossy().to_string())
        .output()
        .unwrap();
    let code = output.status.code().unwrap_or(-1);
    assert!(code == 0 || code == 2, "unexpected exit code: {code}");
}

#[test]
fn scan_mode_lowercase_directives() {
    let dir = TempDir::new().unwrap();
    write_files(
        dir.path(),
        &[(
            "lower.ts",
            "// lint.ifchange(\"lbl\")\nconst v = 1;\n// lint.thenchange(\"other.ts\")\n",
        )],
    );
    let output = Command::new(binary_path())
        .args(["--no-lint", "-s", &dir.path().to_string_lossy(), "-v"])
        .output()
        .unwrap();
    assert_eq!(output.status.code().unwrap(), 0);
    let stderr = String::from_utf8_lossy(&output.stderr);
    assert!(
        stderr.contains("1 file") || stderr.contains("1 directive"),
        "scan should detect lowercase directives, stderr: {}",
        stderr
    );
}

#[test]
fn scan_mode_lowercase_duplicate_labels() {
    let dir = TempDir::new().unwrap();
    write_files(
        dir.path(),
        &[(
            "dup_lower.ts",
            "// lint.ifchange(\"foo\")\n// lint.ifchange(\"foo\")\n",
        )],
    );
    let output = Command::new(binary_path())
        .args(["--no-lint", "-s", &dir.path().to_string_lossy()])
        .output()
        .unwrap();
    assert_eq!(
        output.status.code().unwrap(),
        1,
        "duplicate lowercase labels should be detected as errors"
    );
}

#[test]
fn scan_verbose_shows_summary() {
    let dir = TempDir::new().unwrap();
    write_files(
        dir.path(),
        &[(
            "a.ts",
            "// LINT.IfChange\nconst v = 1;\n// LINT.ThenChange(\"b.ts\")\n",
        )],
    );
    let output = Command::new(binary_path())
        .args(["--no-lint", "-s", &dir.path().to_string_lossy(), "-v"])
        .output()
        .unwrap();
    assert_eq!(output.status.code().unwrap(), 0);
    let stderr = String::from_utf8_lossy(&output.stderr);
    assert!(
        stderr.contains("scan:"),
        "scan verbose should show summary, stderr: {}",
        stderr
    );
    assert!(
        stderr.contains("directive pair"),
        "scan verbose should mention directive pairs, stderr: {}",
        stderr
    );
}
