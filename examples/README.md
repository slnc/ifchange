# Examples

Ready-to-copy setup snippets for projects that use `ifchange`.

<!-- LINT.IfChange("action") -->
## GitHub Action (recommended)

The simplest way to add ifchange to your CI:

```yaml
- uses: slnc/ifchange@v1
```

See [`workflows/ifchange.yml`](workflows/ifchange.yml) for a complete workflow file.

| Input | Description | Default |
|-------|-------------|---------|
| `version` | Release tag to install (e.g. `v1.0.0`). Empty means latest. | latest |
| `args` | Extra arguments passed to ifchange | |
| `diff` | Path to a pre-built diff file. If empty, the action generates one. | |
| `token` | GitHub token for downloading release assets | `github.token` |
<!-- LINT.ThenChange("../action.yml#inputs") -->

## Pre-commit hook

Copy the local Git hook to lint staged changes before each commit:

- `hooks/pre-commit.ifchange.sh`

## What runs by default

Every invocation runs both **directive syntax checking** (validates structure across the repo) and **diff-based linting** (validates cross-file dependencies). Use `--no-scan` or `--no-lint` to skip either phase.
