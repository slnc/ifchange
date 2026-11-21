#!/usr/bin/env bash
set -euo pipefail

script_dir=$(cd "$(dirname "$0")" && pwd)
test_dir=$(mktemp -d)
trap 'rm -rf "$test_dir"' EXIT
shared_target="$test_dir/shared target"

create_checkout() {
    local name=$1
    local repo="$test_dir/$name"
    mkdir -p "$repo/benches" "$repo/scripts/perf"
    cp "$script_dir/bench.sh" "$repo/scripts/perf/bench.sh"
    cat > "$repo/Cargo.toml" <<'MANIFEST'
[package]
name = "cache-probe"
version = "0.1.0"
edition = "2021"
[[bench]]
name = "sentinel"
harness = false
MANIFEST
    printf 'fn main() { println!("%s"); }\n' "$name" > "$repo/benches/sentinel.rs"
    # Old mtimes reproduce Cargo's cross-checkout artifact reuse.
    touch -t 202009131226.40 "$repo/Cargo.toml" "$repo/benches/sentinel.rs"
    git init -q "$repo"
}

run_bench() {
    local name=$1
    shift
    local output
    output=$(CARGO_TARGET_DIR="$shared_target" bash "$test_dir/$name/scripts/perf/bench.sh" "$@" --bench sentinel)
    if [[ "$output" != "$name" ]]; then
        printf 'Expected benchmark from %s, got %s\n' "$name" "$output" >&2
        exit 1
    fi
}

create_checkout "baseline checkout"
create_checkout "candidate checkout"
run_bench "baseline checkout"
targets=("$shared_target/ifchange-bench/"*)
target=${targets[0]}
run_bench "candidate checkout"
mkdir -p "$target/criterion"
printf 'stale' > "$target/criterion/stale-results"
printf 'cached' > "$target/release/keep-cache"
run_bench "baseline checkout" --fresh-results
[[ ! -e "$target/criterion" ]]
[[ $(cat "$target/release/keep-cache") == cached ]]
printf 'Benchmark checkout isolation and cache preservation checks passed.\n'
