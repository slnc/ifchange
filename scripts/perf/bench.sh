#!/usr/bin/env bash
set -euo pipefail

repo_root=$(git -C "$(dirname "$0")" rev-parse --show-toplevel)
checkout_key=$(printf '%s' "$repo_root" | git hash-object --stdin)
# Cargo can reuse another checkout's executable when source mtimes predate it.
export CARGO_TARGET_DIR="${CARGO_TARGET_DIR:-"$repo_root/target"}/ifchange-bench/$checkout_key"

if [[ "${1:-}" == "--fresh-results" ]]; then
    rm -rf "$CARGO_TARGET_DIR/criterion"
    shift
fi

exec cargo bench --manifest-path "$repo_root/Cargo.toml" "$@"
