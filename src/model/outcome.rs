/// Result of linting: collected errors and output messages.
pub struct LintResult {
    pub exit_code: i32,
    pub messages: Vec<String>,
    pub debug_messages: Vec<String>,
    pub pairs_checked: usize,
    pub files_checked: usize,
}
