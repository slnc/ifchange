# Contributing

## Setup

```bash
just setup
```

Requires [`just`](https://github.com/casey/just) (`cargo install just`).

## Testing

```bash
just test      # 28 unit + 19 integration
just perf      # criterion benchmarks
```

`just perf` namespaces Cargo benchmark artifacts by checkout, including when
`CARGO_TARGET_DIR` is shared. CI uses the same runner with `--fresh-results` to
clear Criterion measurements while retaining compiled artifacts. To pass
Criterion options, use the runner directly:

```bash
./scripts/perf/bench.sh --bench lint_bench -- --save-baseline before
python3 scripts/perf/test_bench_runner.py
```
