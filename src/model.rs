use std::collections::HashSet;

/// The kinds of lint directives supported in source files.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Directive {
    IfChange { line: usize, label: Option<String> },
    ThenChange { line: usize, target: String },
    Label { line: usize, name: String },
    EndLabel { line: usize },
}

/// Represents the added and removed line numbers for a file in a diff.
#[derive(Debug, Clone)]
pub struct FileChanges {
    pub added_lines: HashSet<usize>,
    pub removed_lines: HashSet<usize>,
}

/// Inclusive range of line numbers in a target file's labeled section.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct LineRange {
    pub start_line: usize,
    pub end_line: usize,
}

/// Result of linting: collected errors and output messages.
pub struct LintResult {
    pub exit_code: i32,
    pub messages: Vec<String>,
    pub debug_messages: Vec<String>,
    pub pairs_checked: usize,
    pub files_checked: usize,
}
