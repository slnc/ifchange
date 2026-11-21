#!/usr/bin/env python3
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest


class BenchRunnerTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="ifchange-bench-")
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.shared = self.root / "shared target"
        self.env = dict(os.environ, CARGO_TARGET_DIR=str(self.shared))

    def checkout(self, name):
        repo = self.root / name
        (repo / "benches").mkdir(parents=True)
        runner = repo / "scripts/perf/bench.sh"
        runner.parent.mkdir(parents=True)
        shutil.copyfile(Path(__file__).with_name("bench.sh"), runner)
        (repo / "Cargo.toml").write_text(
            '[package]\nname="cache-probe"\nversion="0.1.0"\nedition="2021"\n'
            '[[bench]]\nname="sentinel"\nharness=false\n'
        )
        source = repo / "benches/sentinel.rs"
        source.write_text(f'fn main() {{ println!("{name}"); }}\n')
        # Old mtimes reproduce Cargo's cross-checkout artifact reuse.
        for path in [source, repo / "Cargo.toml"]:
            os.utime(path, (1_600_000_000, 1_600_000_000))
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        return repo

    def run_bench(self, repo, *args):
        result = subprocess.run(
            ["bash", str(repo / "scripts/perf/bench.sh"), *args, "--bench", "sentinel"],
            cwd=repo,
            env=self.env,
            text=True,
            capture_output=True,
        )
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(result.stdout.strip(), repo.name)

    def test_shared_target_runs_each_checkouts_own_code(self):
        checkouts = [self.checkout(name) for name in ["baseline checkout", "candidate checkout"]]
        for repo in checkouts:
            self.run_bench(repo)
        self.assertEqual(len(list((self.shared / "ifchange-bench").iterdir())), 2)

    def test_fresh_results_preserves_compiled_artifacts(self):
        repo = self.checkout("checkout")
        self.run_bench(repo)
        target = next((self.shared / "ifchange-bench").iterdir())
        results = target / "criterion"
        results.mkdir()
        (results / "stale-results").write_text("stale")
        artifact = target / "release/keep-cache"
        artifact.write_text("cached")
        self.run_bench(repo, "--fresh-results")
        self.assertFalse(results.exists())
        self.assertEqual(artifact.read_text(), "cached")


if __name__ == "__main__":
    unittest.main()
