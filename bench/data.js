window.BENCHMARK_DATA = {
  "lastUpdate": 1779096854511,
  "repoUrl": "https://github.com/slnc/ifchange",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "f53080ce4381fbb0728ad1693c15789174ccbdac",
          "message": "fix: benchmark CI output format for parser\n\n## Why\n`benchmark-action` with `tool: cargo` expects libtest format, not\nCriterion's default output. The benchmark workflow has never passed.\n\n## What\n- Add `--output-format bencher` to emit libtest-compatible output",
          "timestamp": "2026-03-07T08:15:35+01:00",
          "tree_id": "e4cf9badb1ba030c0a226a1bb90e31affb3f8941",
          "url": "https://github.com/slnc/ifchange/commit/f53080ce4381fbb0728ad1693c15789174ccbdac"
        },
        "date": 1772867879510,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 1952263,
            "range": "± 44767",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6042646,
            "range": "± 32801",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 33097780,
            "range": "± 1051678",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 37141299,
            "range": "± 403167",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "86dd078bca9a4ef253952a4663c1bc77de16f8fb",
          "message": "ci: add release-please automation and commitlint enforcement\n\n- Add release-please workflow and config for automated versioning,\n  changelog generation, and Release PR creation\n- Add commitlint workflow to validate PR titles against conventional\n  commit format\n- Add x-release-please-version marker to pypi/pyproject.toml\n- Disable generate_release_notes in release-binaries (release-please\n  handles release notes)\n- Add docs/RELEASE.md documenting the release workflow\n- Narrow IfChange block in README to only guard the language table\n- Include pending README, test refactoring changes",
          "timestamp": "2026-03-07T09:20:43+01:00",
          "tree_id": "5f66db125cff77c457110539bf9b27a7dc4f5d6c",
          "url": "https://github.com/slnc/ifchange/commit/86dd078bca9a4ef253952a4663c1bc77de16f8fb"
        },
        "date": 1772871767302,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2114935,
            "range": "± 9314",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7038470,
            "range": "± 275267",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 35971602,
            "range": "± 1452411",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58163055,
            "range": "± 416613",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "83a8147f113b0f2eccabc1042a014b192e2f1f40",
          "message": "fix: correct release-please-action pinned SHA",
          "timestamp": "2026-03-07T09:26:32+01:00",
          "tree_id": "c9384fa5dc1cba3e2b8e5e58398136c563a08216",
          "url": "https://github.com/slnc/ifchange/commit/83a8147f113b0f2eccabc1042a014b192e2f1f40"
        },
        "date": 1772872117540,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2109496,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7044945,
            "range": "± 53304",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36189737,
            "range": "± 1356649",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58684161,
            "range": "± 866085",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "5efb026be02fc3976af9379fb0d4a2c632957a8a",
          "message": "ci: re-trigger release-please",
          "timestamp": "2026-03-07T09:28:36+01:00",
          "tree_id": "c9384fa5dc1cba3e2b8e5e58398136c563a08216",
          "url": "https://github.com/slnc/ifchange/commit/5efb026be02fc3976af9379fb0d4a2c632957a8a"
        },
        "date": 1772872231691,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2023887,
            "range": "± 45603",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 5791646,
            "range": "± 218333",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 32629076,
            "range": "± 507668",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 37577162,
            "range": "± 101210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "7b48f487100afba04b7e35f62c70dcbff5bc0239",
          "message": "ci: set release-please manifest to 0.0.0 for initial release",
          "timestamp": "2026-03-07T09:32:44+01:00",
          "tree_id": "f92d6cd2e852c0b381b7afb15db045e5db1111ed",
          "url": "https://github.com/slnc/ifchange/commit/7b48f487100afba04b7e35f62c70dcbff5bc0239"
        },
        "date": 1772872471861,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2108655,
            "range": "± 5808",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7039118,
            "range": "± 56998",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37026536,
            "range": "± 1499495",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60815664,
            "range": "± 1001046",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bc8ef7138e1fa02ea76ecb5054385ea37c0597b",
          "message": "chore: release ifchange 0.1.0 (#7)",
          "timestamp": "2026-03-07T09:35:56+01:00",
          "tree_id": "eac93fcb5f16a34e66e47c9bbea8a511aa332b5f",
          "url": "https://github.com/slnc/ifchange/commit/3bc8ef7138e1fa02ea76ecb5054385ea37c0597b"
        },
        "date": 1772872663950,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2110725,
            "range": "± 10609",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7018923,
            "range": "± 65054",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36858331,
            "range": "± 1294051",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60247679,
            "range": "± 832062",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "20e695f0d0cc511ce8500499fc4cad08bd84f655",
          "message": "ci: reset manifest to 0.0.0 for clean initial release",
          "timestamp": "2026-03-07T09:42:09+01:00",
          "tree_id": "d909bbb08b437559606bc17694ce5e006ccf44d5",
          "url": "https://github.com/slnc/ifchange/commit/20e695f0d0cc511ce8500499fc4cad08bd84f655"
        },
        "date": 1772873051672,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2114214,
            "range": "± 85287",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7032927,
            "range": "± 292778",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36384262,
            "range": "± 1309885",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59654602,
            "range": "± 468901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "860af68fbdd48baed7866002adce016a95304303",
          "message": "feat: initial release of ifchange",
          "timestamp": "2026-03-07T09:43:46+01:00",
          "tree_id": "4872f3460f1cae3bb90653611c6ec4c8269027fb",
          "url": "https://github.com/slnc/ifchange/commit/860af68fbdd48baed7866002adce016a95304303"
        },
        "date": 1772873318992,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2111394,
            "range": "± 62544",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7158866,
            "range": "± 87419",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37877000,
            "range": "± 1142752",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60786185,
            "range": "± 717259",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f518f768e88f1932c2762337fdab39d0f332ebe3",
          "message": "chore(main): release 0.1.0 (#10)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-07T09:51:07+01:00",
          "tree_id": "10ea106dff07decd29852a32ef233387db1bd540",
          "url": "https://github.com/slnc/ifchange/commit/f518f768e88f1932c2762337fdab39d0f332ebe3"
        },
        "date": 1772873575928,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2110850,
            "range": "± 11238",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7051532,
            "range": "± 336487",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38576291,
            "range": "± 1707462",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 62027414,
            "range": "± 404876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "2b3bb38ed02feeb9daf4bb6dd9eec0b3953ed988",
          "message": "ci: chain release-binaries from release-please\n\nGITHUB_TOKEN actions don't trigger other workflows, so the v* tag\ncreated by release-please never triggered release-binaries. Fix by\nhaving release-please call release-binaries via workflow_call when\na release is created.",
          "timestamp": "2026-03-07T09:56:36+01:00",
          "tree_id": "bcda513dc236c123635084c3d7ac5e46d0be518c",
          "url": "https://github.com/slnc/ifchange/commit/2b3bb38ed02feeb9daf4bb6dd9eec0b3953ed988"
        },
        "date": 1772873904032,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2202626,
            "range": "± 28845",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7397559,
            "range": "± 57302",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38332446,
            "range": "± 1567639",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 70335476,
            "range": "± 655046",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "4a17adb7ac03418ed74debb10d76f0f6db3f9657",
          "message": "fix: configure git identity for tag operations in release workflow",
          "timestamp": "2026-03-07T10:01:22+01:00",
          "tree_id": "a751c795b5430570a68ab6291f764e2c6f2cbb94",
          "url": "https://github.com/slnc/ifchange/commit/4a17adb7ac03418ed74debb10d76f0f6db3f9657"
        },
        "date": 1772874187837,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2111485,
            "range": "± 20940",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7067859,
            "range": "± 39546",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36750686,
            "range": "± 1278693",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58986375,
            "range": "± 406853",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "dc0e1f1a4e98ddfd68019a117ecccae42d89c6a7",
          "message": "fix: default installer version channel to latest",
          "timestamp": "2026-03-07T11:43:24+01:00",
          "tree_id": "9485fbe879d1259b4070fe9422e715df4a307fd6",
          "url": "https://github.com/slnc/ifchange/commit/dc0e1f1a4e98ddfd68019a117ecccae42d89c6a7"
        },
        "date": 1772880741512,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2115715,
            "range": "± 8423",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7156878,
            "range": "± 67282",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38390362,
            "range": "± 1784006",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60625551,
            "range": "± 786227",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "6792b48493cc156330c822efedb6a11720e1dbcf",
          "message": "ci: update action.yml",
          "timestamp": "2026-03-07T11:55:04+01:00",
          "tree_id": "a9ace8a85da939cc9bdeb17c4190bdd32bfcab57",
          "url": "https://github.com/slnc/ifchange/commit/6792b48493cc156330c822efedb6a11720e1dbcf"
        },
        "date": 1772881010241,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2119763,
            "range": "± 78418",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7054446,
            "range": "± 279322",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36554125,
            "range": "± 1575393",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59447464,
            "range": "± 642670",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "97cb88ecd3b7c8110e39d162cbe6f0f02ed991e4",
          "message": "ci: fix release-please",
          "timestamp": "2026-03-07T12:04:12+01:00",
          "tree_id": "06b5d1b7d8a57f5beafae1ae039f2efaf37d2a2a",
          "url": "https://github.com/slnc/ifchange/commit/97cb88ecd3b7c8110e39d162cbe6f0f02ed991e4"
        },
        "date": 1772881562412,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2120774,
            "range": "± 46003",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7206996,
            "range": "± 305807",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38571923,
            "range": "± 1211293",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 62936909,
            "range": "± 1783074",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "7fea561b4e3c2bfe2a58ddcfd57225be3eb16b77",
          "message": "ci: move benchmark job into test workflow",
          "timestamp": "2026-03-07T12:08:33+01:00",
          "tree_id": "6c0e2250dfd3c8229660199da924a7795f249f42",
          "url": "https://github.com/slnc/ifchange/commit/7fea561b4e3c2bfe2a58ddcfd57225be3eb16b77"
        },
        "date": 1772881914016,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2112701,
            "range": "± 5809",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7022009,
            "range": "± 50171",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 35931026,
            "range": "± 450920",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58882526,
            "range": "± 472420",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "584112a4819e79fb0118f40a41ec333f8caa3229",
          "message": "fix: avoid direct interpolation of user args in action runner (#12)",
          "timestamp": "2026-03-07T12:43:10+01:00",
          "tree_id": "a87a70204db5a4d106181ed6050f45c46f41b246",
          "url": "https://github.com/slnc/ifchange/commit/584112a4819e79fb0118f40a41ec333f8caa3229"
        },
        "date": 1772883954407,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2110159,
            "range": "± 66883",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7107671,
            "range": "± 434535",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37528956,
            "range": "± 1399038",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60426113,
            "range": "± 666725",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "ef0e00f826db5d6e86d8626b4bd68b2fe2eee194",
          "message": "ci: consolidate checks into CI workflow",
          "timestamp": "2026-03-07T12:44:39+01:00",
          "tree_id": "142d08a094675d4aa560c47c847183a9079c90f4",
          "url": "https://github.com/slnc/ifchange/commit/ef0e00f826db5d6e86d8626b4bd68b2fe2eee194"
        },
        "date": 1772884045440,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2116391,
            "range": "± 10009",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7055516,
            "range": "± 138680",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37556846,
            "range": "± 1274226",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 61071360,
            "range": "± 1829139",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a32ef6afab4ba4bb5ececfdc5991359d9a814d4a",
          "message": "ci: gate expensive jobs on test matrix (#16)\n\n* fix: pin workflow dependencies to immutable SHAs\n\n* ci: gate expensive jobs on test matrix",
          "timestamp": "2026-03-07T13:05:49+01:00",
          "tree_id": "bc98f7197a9da187c11e7dab1441df767fb52339",
          "url": "https://github.com/slnc/ifchange/commit/a32ef6afab4ba4bb5ececfdc5991359d9a814d4a"
        },
        "date": 1772885337790,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 2112414,
            "range": "± 11736",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7105816,
            "range": "± 309709",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37256203,
            "range": "± 1383410",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60032792,
            "range": "± 654589",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "82c298977e072f7f353cca915ba4864ca4ac6139",
          "message": "fix: use new-file coordinates for removal trigger check\n\nRemoved lines in a unified diff use old-file line numbers, but directive\npositions (if_line, then_line) use new-file coordinates. Merging both\ninto one list caused false positives when lines were removed before an\nIfChange block — their old-file numbers could overlap with the block's\nnew-file range.\n\nTrack removal positions in new-file coordinates (the gap where the\ndeletion occurred) and use a strict lower bound (> if_line) for removals\nvs inclusive (>= if_line) for additions.",
          "timestamp": "2026-03-07T15:18:16+01:00",
          "tree_id": "e9a64ea00b773491d7f54858fc78cd48a6e80385",
          "url": "https://github.com/slnc/ifchange/commit/82c298977e072f7f353cca915ba4864ca4ac6139"
        },
        "date": 1772893341524,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3251611,
            "range": "± 42024",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7523599,
            "range": "± 383622",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39678745,
            "range": "± 755596",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58774818,
            "range": "± 952303",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "455f15e6ac58240c9a29ed92986a008fdd1c827f",
          "message": "refactor: merge --debug into --verbose\n\n- Remove `--debug` flag, fold all debug output into `--verbose`\n- Simplify error messages (\"unchanged\" instead of verbose phrases)\n- Add `IFCHANGE_DISABLED` env var to pre-commit hook\n- Add `version` to clap CLI\n\n`--verbose` added very little over default output. `--debug` had all\nthe useful detail. Two levels of verbosity weren't justified — merge\nthem into one.",
          "timestamp": "2026-03-07T15:50:27+01:00",
          "tree_id": "b286ae0fe3383c012386e52d52e131639075e584",
          "url": "https://github.com/slnc/ifchange/commit/455f15e6ac58240c9a29ed92986a008fdd1c827f"
        },
        "date": 1772895226287,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3319591,
            "range": "± 70502",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7397714,
            "range": "± 336275",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 40078618,
            "range": "± 1446589",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60905544,
            "range": "± 823371",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "46290e6ca4bff98e10bfff973ac11fb11ffb00dc",
          "message": "docs: update table",
          "timestamp": "2026-03-07T15:55:02+01:00",
          "tree_id": "f9ed033e4ca95f96188b05d78d0b8ee66df9fd0e",
          "url": "https://github.com/slnc/ifchange/commit/46290e6ca4bff98e10bfff973ac11fb11ffb00dc"
        },
        "date": 1772895496417,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3248503,
            "range": "± 33352",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7407935,
            "range": "± 57573",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38878178,
            "range": "± 1224935",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59175319,
            "range": "± 996771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "1af31bcb7212079857c980765098e6205b93a19b",
          "message": "refactor: improve lint & scan summary lines\n\n## What\n- Lint summary: lead with files checked, then pairs \"in diff\"\n- Scan summary: `N files walked (M with directives), X directive pairs, Y labels`\n- Color error counts in red, separate from dim header\n- Add label counting to scan phase\n- Add --debug flag, merge verbose/debug output levels\n- Simplify error message format in lint engine\n- Docs cleanups (README, CHANGELOG, RELEASE)\n\n## Verify\n- [ ] `git diff | ifchange -v` from a project directory\n- [ ] `ifchange --no-lint -v` to check scan summary with labels",
          "timestamp": "2026-03-07T16:53:03+01:00",
          "tree_id": "336bbdc96d33e28aa75a6c674a1b314463e88d3e",
          "url": "https://github.com/slnc/ifchange/commit/1af31bcb7212079857c980765098e6205b93a19b"
        },
        "date": 1772898988423,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3479080,
            "range": "± 38210",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7498328,
            "range": "± 64263",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 41103930,
            "range": "± 1553682",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59330485,
            "range": "± 625827",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "bcb3213941a2cb003e84884ecd00e0c5e5b790c1",
          "message": "fix: print verbose lines before scan summary\n\n## Why\nVerbose output was printed after the summary, burying the\nheader line. Moving it before makes the summary the last thing\nthe user sees.",
          "timestamp": "2026-03-07T17:09:43+01:00",
          "tree_id": "9505443fca6d3939dc5a4460900aa9a49c89c8f4",
          "url": "https://github.com/slnc/ifchange/commit/bcb3213941a2cb003e84884ecd00e0c5e5b790c1"
        },
        "date": 1772900090478,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3483176,
            "range": "± 23387",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7523469,
            "range": "± 62847",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 41223861,
            "range": "± 1342936",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60805000,
            "range": "± 547079",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "c608220374c892889835a7e7098d905c08b7ff06",
          "message": "chore: update docs and tweak verbose output\n\n## What\n- Update performance table with latest bench numbers (~17ms lint, ~33ms scan)\n- Rename CI workflow test.yml → ci.yml\n- Add blank line before verbose summary headers\n- Fix ARCHITECTURE.md extension count, CONTRIBUTING.md bench command\n\n## Verify / Risk\n- [ ] `just test` passes\n- Cosmetic changes only, no logic risk",
          "timestamp": "2026-03-07T17:22:56+01:00",
          "tree_id": "5d056b3d02d187282d403ea53a6a976fae67ee86",
          "url": "https://github.com/slnc/ifchange/commit/c608220374c892889835a7e7098d905c08b7ff06"
        },
        "date": 1772900826371,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3478425,
            "range": "± 61408",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7475250,
            "range": "± 318653",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 40361023,
            "range": "± 1593706",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59516235,
            "range": "± 647762",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "7769876451d8f8ff101def833cc4e5b15ae3a4c8",
          "message": "docs: update",
          "timestamp": "2026-03-07T17:35:13+01:00",
          "tree_id": "c3d0263cb9eccf24c0fffbafee29d676f1ebfbe8",
          "url": "https://github.com/slnc/ifchange/commit/7769876451d8f8ff101def833cc4e5b15ae3a4c8"
        },
        "date": 1772901514591,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3493682,
            "range": "± 55109",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7546508,
            "range": "± 326543",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 41637446,
            "range": "± 1191670",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 61451735,
            "range": "± 611512",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "2ef2e004ff435f508faeccd84b60226b25f20409",
          "message": "feat: implements ifchange",
          "timestamp": "2026-03-07T17:38:43+01:00",
          "tree_id": "d975a447a3de4396841c49cd42d99d78ecac1f52",
          "url": "https://github.com/slnc/ifchange/commit/2ef2e004ff435f508faeccd84b60226b25f20409"
        },
        "date": 1772901717447,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3478294,
            "range": "± 68193",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7478114,
            "range": "± 278381",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38882556,
            "range": "± 1476688",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58146794,
            "range": "± 360627",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "4c5c289d8191f005e0ba6450d1ef5c72dc4d1922",
          "message": "feat: implements ifchange",
          "timestamp": "2026-03-07T17:44:23+01:00",
          "tree_id": "ab137353e4c27d66dbfeb244fb5bcd28f33bfa1b",
          "url": "https://github.com/slnc/ifchange/commit/4c5c289d8191f005e0ba6450d1ef5c72dc4d1922"
        },
        "date": 1772902047424,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3326008,
            "range": "± 28373",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 5870136,
            "range": "± 198040",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 31290083,
            "range": "± 780679",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 36994689,
            "range": "± 734997",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "2d764b7176c1b043c405a32cfe0cb8af79e5c290",
          "message": "feat: implements ifchange",
          "timestamp": "2026-03-07T17:49:48+01:00",
          "tree_id": "b8ca1af4c0c23e5074c7842e085e63c52db627f3",
          "url": "https://github.com/slnc/ifchange/commit/2d764b7176c1b043c405a32cfe0cb8af79e5c290"
        },
        "date": 1772902380988,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3491964,
            "range": "± 100017",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7410855,
            "range": "± 60373",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 40268290,
            "range": "± 1152167",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 61563648,
            "range": "± 908879",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "311aaee7ab8a3779bba2f58b91daa6836c1523da",
          "message": "feat: implements ifchange",
          "timestamp": "2026-03-07T17:54:52+01:00",
          "tree_id": "b4f7b72cf850f2522374f2b828daf521e48456d0",
          "url": "https://github.com/slnc/ifchange/commit/311aaee7ab8a3779bba2f58b91daa6836c1523da"
        },
        "date": 1772902684261,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3475280,
            "range": "± 97443",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7451432,
            "range": "± 279430",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39973679,
            "range": "± 1319279",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60971430,
            "range": "± 904763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8ef579701f0f17601f35f03388a2d5cccd0b9b5",
          "message": "chore(main): release 0.1.0 (#18)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-07T18:01:59+01:00",
          "tree_id": "8de2202d7e1135ec1fbf14c129696f89736bd2c3",
          "url": "https://github.com/slnc/ifchange/commit/b8ef579701f0f17601f35f03388a2d5cccd0b9b5"
        },
        "date": 1772903142512,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3478630,
            "range": "± 35164",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7538052,
            "range": "± 51124",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39467267,
            "range": "± 1133747",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58949194,
            "range": "± 874483",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "0410dbfbf6a7e5449683c8ae753363f0336dc785",
          "message": "fix: pass client_payload as JSON object in repository dispatch",
          "timestamp": "2026-03-07T18:10:10+01:00",
          "tree_id": "0ab3971e0add5dfa2421e24c9dfa790c14355eec",
          "url": "https://github.com/slnc/ifchange/commit/0410dbfbf6a7e5449683c8ae753363f0336dc785"
        },
        "date": 1772903604911,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3486059,
            "range": "± 13795",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7506673,
            "range": "± 274598",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 40650636,
            "range": "± 1683609",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59955000,
            "range": "± 383716",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "juan@juanalonso.com",
            "name": "slnc",
            "username": "slnc"
          },
          "distinct": true,
          "id": "9a181a55dd49b73691451e2b3c065776d6123468",
          "message": "fix: decouple publish from provenance to prevent cascading failures",
          "timestamp": "2026-03-07T18:19:40+01:00",
          "tree_id": "d6cb27a6596d82c4f570483e835d74103b2a4297",
          "url": "https://github.com/slnc/ifchange/commit/9a181a55dd49b73691451e2b3c065776d6123468"
        },
        "date": 1772904167085,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3483858,
            "range": "± 58035",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7594656,
            "range": "± 537887",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 42212631,
            "range": "± 2006476",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59496711,
            "range": "± 1150052",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7509c48c0d6aecc9ea74907aa4495a68d3673bfe",
          "message": "chore: rename npm package to @slnc/ifchange scoped package (#20)",
          "timestamp": "2026-03-07T20:15:45+01:00",
          "tree_id": "28518e895228faae3ecc70bc7fc656e9ba980864",
          "url": "https://github.com/slnc/ifchange/commit/7509c48c0d6aecc9ea74907aa4495a68d3673bfe"
        },
        "date": 1772911145235,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3514226,
            "range": "± 95425",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 8220463,
            "range": "± 1238346",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 44023661,
            "range": "± 1829873",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 62215986,
            "range": "± 2671256",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb485382ef859b87545c0a349df3a8d0fd01bce2",
          "message": "feat: add repo-root-relative paths support in ThenChange (#21)\n\n* feat: repo-root-relative paths in ThenChange\n\n`ThenChange(/src/api.py)` didn't work — the leading `/` was treated as\nfilesystem-absolute, never matching any diff path.\n\n- Leading `/` in ThenChange targets now resolves from the repo root\n- CLI detects repo root (`.git`, `.hg`, `.jj`, `.svn`, `.pijul`, `.fossil`) and chdirs to it at startup\n- File args resolved to absolute paths before chdir to avoid breakage\n- Path traversal (`/../../etc/passwd`) clamped — can't escape repo root\n- Docs: new \"Absolute paths\" section in README, \"Path Resolution\" table in DIRECTIVES.md\n\n- [ ] `cargo test` — 16 new integration tests, 13 new unit tests\n- chdir at startup could affect plugins/hooks that depend on CWD\n\n* fix: address PR review comments\n\n## Why\nPR #21 had several correctness issues flagged by reviewers.\n\n## What\n- Restore original CWD after chdir to repo root in `cli::run`\n- Propagate `set_current_dir` failures instead of ignoring them\n- Fix Fossil SCM markers (`.fslckout`/`_FOSSIL_` instead of `.fossil`)\n- Strip all leading slashes in repo-relative paths (`//src` → `src`)\n- Fix `synchronize` typo in CI commitlint trigger\n- Strengthen test assertions\n\n* chore: commit unstaged changes\n\n* chore: commit remaining unstaged change\n\n* test: cover repo-root resolution branches\n\n* chore: loosen .githooks/commit-msg\n\n* test: fix macos canonicalization\n\n* test: fix repo root test on Windows\n\n## Why\n`std::fs::canonicalize` adds a `\\\\?\\` prefix on Windows that\n`current_dir()` does not, causing a path mismatch assertion failure.\n\n## What\n- Use `dunce::canonicalize` to resolve symlinks without the `\\\\?\\` prefix\n- Added `dunce` as a dev-dependency\n\n## Verify / Risk\n- [ ] CI passes on all platforms (linux, macos, windows)",
          "timestamp": "2026-03-10T20:42:48+01:00",
          "tree_id": "8280b09cab67f2e54c754fa1d22bcac8139fa69a",
          "url": "https://github.com/slnc/ifchange/commit/bb485382ef859b87545c0a349df3a8d0fd01bce2"
        },
        "date": 1773171984473,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3311790,
            "range": "± 66243",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7340097,
            "range": "± 521449",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39042537,
            "range": "± 1382592",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59491307,
            "range": "± 744165",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "090cf317299ac466cefbf34713cf7ef48d2e216b",
          "message": "deps: update dependency node to v24 (#23)",
          "timestamp": "2026-03-10T19:49:51Z",
          "tree_id": "df08c26265bab654aa3694cbd0c1c07634f97248",
          "url": "https://github.com/slnc/ifchange/commit/090cf317299ac466cefbf34713cf7ef48d2e216b"
        },
        "date": 1773172435730,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3314496,
            "range": "± 94944",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7368615,
            "range": "± 268549",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38377184,
            "range": "± 1073141",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59239888,
            "range": "± 653138",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4db11bea7907907dc3c2ee2cf8adb4185d4d23d6",
          "message": "deps: update all non-security dependencies (#22)\n\n* chore(deps): update all non-security dependencies\n\n* ci: set explicit rust toolchain for dtolnay action\n\n---------\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>\nCo-authored-by: slnc <69429+slnc@users.noreply.github.com>\nCo-authored-by: slnc <juan@juanalonso.com>",
          "timestamp": "2026-03-10T20:01:48Z",
          "tree_id": "121970c745236f70cb1c81248bbae7fb4b1ececf",
          "url": "https://github.com/slnc/ifchange/commit/4db11bea7907907dc3c2ee2cf8adb4185d4d23d6"
        },
        "date": 1773173154717,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3324043,
            "range": "± 14328",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7516552,
            "range": "± 166837",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 41704265,
            "range": "± 1730770",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 61868284,
            "range": "± 1012174",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27ba06e92e7bd0901fb799881be71b82923dbd2e",
          "message": "chore(main): release 0.2.0 (#19)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\nCo-authored-by: slnc <69429+slnc@users.noreply.github.com>",
          "timestamp": "2026-03-10T20:08:18Z",
          "tree_id": "9f7e4ae3a3a2e128ead7e1047d68ed289ffbba8a",
          "url": "https://github.com/slnc/ifchange/commit/27ba06e92e7bd0901fb799881be71b82923dbd2e"
        },
        "date": 1773173501573,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3382767,
            "range": "± 79460",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7425671,
            "range": "± 384804",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39054821,
            "range": "± 1226236",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 59704244,
            "range": "± 567444",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c644f07580004e0032c5ca6211c210c226118c89",
          "message": "ci: resolve release tag from dispatch payload (#24)\n\n* fix: resolve release tag from dispatch payload instead of github.ref_name\n\nrepository_dispatch events always set github.ref_name to \"main\", not the\nrelease tag. This caused publish-npm, publish-pypi, and publish-crate to\nfail because they received \"main\" as the version string.\n\nAdd a resolve-tag job that extracts the tag from client_payload.tag for\nrepository_dispatch events, with a guard against accidentally releasing\nwith \"main\" as the version.\n\n* refactor: use RELEASE_TAG env var consistently in publish jobs\n\nUse env block pattern for publish-npm and publish-pypi jobs, consistent\nwith build and update-action-tag jobs.\n\n* fix: prevent script injection in resolve-tag step\n\nPass github.event.client_payload.tag through env var instead of direct\n${{ }} interpolation to prevent shell injection from untrusted dispatch\npayloads.",
          "timestamp": "2026-03-11T05:10:13+01:00",
          "tree_id": "9b736d222a975051bb3cd653ba23beb9b48e6f37",
          "url": "https://github.com/slnc/ifchange/commit/c644f07580004e0032c5ca6211c210c226118c89"
        },
        "date": 1773202426070,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3250495,
            "range": "± 16005",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6420788,
            "range": "± 248457",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36297261,
            "range": "± 1075785",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 38099304,
            "range": "± 263823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6b314bbe5e243a28b743dd67b2db30a1bfdb1fb",
          "message": "fix: exclude directive lines from co-change trigger range (#25)\n\n## Why\nChanging only IfChange/ThenChange directives (e.g. updating a target\npath or adding a label) falsely triggered the co-change check, forcing\nusers to make meaningless edits to target files.\n\n## What\n- Additions on directive lines (`if_line`, `then_line`) are now excluded\nfrom the trigger range\n- Removals at `then_line` are only counted as content changes when\nThenChange is not being replaced\n- 12 new edge-case tests for directive-only changes\n- 4 existing tests updated to use actual content changes instead of\nrelying on the buggy behavior\n\n## Verify / Risk\n- [x] `cargo test` — 245 tests pass\n- Low risk: only narrows what counts as a trigger; real content changes\nare unaffected",
          "timestamp": "2026-03-15T11:03:30+01:00",
          "tree_id": "52409ab2b9aa4398a60e187a75beab9f714c3029",
          "url": "https://github.com/slnc/ifchange/commit/b6b314bbe5e243a28b743dd67b2db30a1bfdb1fb"
        },
        "date": 1773569217337,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4291804,
            "range": "± 67221",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7498384,
            "range": "± 63444",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39812785,
            "range": "± 1495858",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 61865307,
            "range": "± 1755192",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "648f920060f1cdafa87d6859d4f62468b51d8b29",
          "message": "chore(main): release 0.2.1 (#26)\n\n:robot: I have created a release *beep* *boop*\n---\n\n\n## [0.2.1](https://github.com/slnc/ifchange/compare/v0.2.0...v0.2.1)\n(2026-03-15)\n\n\n### Bug Fixes\n\n* exclude directive lines from co-change trigger range\n([#25](https://github.com/slnc/ifchange/issues/25))\n([b6b314b](https://github.com/slnc/ifchange/commit/b6b314bbe5e243a28b743dd67b2db30a1bfdb1fb))\n\n---\nThis PR was generated with [Release\nPlease](https://github.com/googleapis/release-please). See\n[documentation](https://github.com/googleapis/release-please#release-please).\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-15T10:36:37Z",
          "tree_id": "85124d5513003fe8a1a2dbe0f61336dd26605bbd",
          "url": "https://github.com/slnc/ifchange/commit/648f920060f1cdafa87d6859d4f62468b51d8b29"
        },
        "date": 1773571193014,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4360794,
            "range": "± 54620",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7539674,
            "range": "± 357003",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 40724566,
            "range": "± 1586265",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 61216269,
            "range": "± 302888",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55686c86234007bf1be0e8c6fe21fee596a49006",
          "message": "docs: include README in PyPI and npm packages (#27)\n\n## Why\nPyPI and npm package pages are empty because neither package includes\nthe project README.\n\n## What\n- Add `readme` field to `pypi/pyproject.toml` pointing to root README\n- Copy root README into `npm/` before publish in CI workflow\n\n## Verify\n- [ ] Next release publishes with README visible on both package pages",
          "timestamp": "2026-03-16T14:20:44+01:00",
          "tree_id": "cdd752f7223aefeec7ffac7f4587c5f50f99e020",
          "url": "https://github.com/slnc/ifchange/commit/55686c86234007bf1be0e8c6fe21fee596a49006"
        },
        "date": 1773667449053,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4299772,
            "range": "± 75473",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7505021,
            "range": "± 271347",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37050463,
            "range": "± 1463108",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58224789,
            "range": "± 481172",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aac4af8efd377e72c638d98773a542b3299acc8a",
          "message": "fix: platform-specific npm packages for binary distribution (#33)\n\n## Why\nThe `postinstall` script downloads binaries from GitHub releases at\n`yarn install` time. GitHub `ETIMEDOUT` on CI runners causes\nintermittent install failures that block entire CI pipelines.\n\n## What\n- Replace postinstall GitHub download with platform-specific npm\npackages (same pattern as biome/esbuild/swc)\n- 5 platform packages:\n`@slnc/ifchange-{linux-x64,linux-arm64,darwin-x64,darwin-arm64,win32-x64}`\n- Each declares `os`, `cpu`, `libc`, `files`, and `preferUnplugged`\nconstraints\n- Binaries come from the npm registry alongside all other packages (no\nseparate GitHub download)\n- Thin `bin/ifchange` resolver script with `IFCHANGE_BINARY` env\noverride\n- Release workflow: idempotent publish + registry propagation check\nbefore main package\n\n## Verify / Risk\n- [x] 55 Node.js tests pass (package consistency, resolver, signal\nhandling, e2e)\n- [x] Workflow YAML validated\n- [ ] First release will publish 5 new `@slnc/*` packages to npm\n\n## Other notes\n- Consumers on `^0.2.x` will get this on next install; resolver\ngracefully errors if platform package is missing\n- Yarn PnP: `preferUnplugged: true` ensures binary is extracted from zip\n- Partial publish recovery: idempotent publish step allows workflow\nre-runs",
          "timestamp": "2026-03-21T08:54:34+01:00",
          "tree_id": "b5a6ad5124eb0cd1273703edcc0e683593ddfcb2",
          "url": "https://github.com/slnc/ifchange/commit/aac4af8efd377e72c638d98773a542b3299acc8a"
        },
        "date": 1774079972075,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4266718,
            "range": "± 45710",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7655310,
            "range": "± 335470",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39982680,
            "range": "± 1615777",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60310546,
            "range": "± 1121857",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bcb8bf3e37be058dd861551a745712db3fc8c04",
          "message": "feat: add go.mod support (#30)\n\n## Summary\n- Add `go.mod` as a recognized special filename with `//` line-only\ncomment support\n- Include README in PyPI and npm packages\n\n## What\n- Handle `go.mod` in `effective_extension()` (same pattern as\nDockerfile)\n- Add to `C_LINE_ONLY_EXTS` so only `//` comments are recognized (no `/*\n*/`)\n- Update README supported-languages special files list\n- Copy README into pypi/ for PyPI package distribution\n- Remove `go.sum` support: go.sum files don't support comments\n\n## Test plan\n- [x] Unit tests for comment extraction, directive parsing,\neffective_extension\n- [x] Full test suite passes (146 unit + 115 integration)\n- [x] `cargo fmt` + `cargo clippy` clean",
          "timestamp": "2026-03-21T09:22:53+01:00",
          "tree_id": "6c3d5d08be0cc127f7acb70512eed642cf541f85",
          "url": "https://github.com/slnc/ifchange/commit/8bcb8bf3e37be058dd861551a745712db3fc8c04"
        },
        "date": 1774081582483,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4423359,
            "range": "± 27495",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7486070,
            "range": "± 46336",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37148729,
            "range": "± 1649810",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58769540,
            "range": "± 377806",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af149f581ecce4cdf63263fe871789890cd3039e",
          "message": "feat: support multi-line ThenChange (#31)\n\n## Why\nMulti-line `LINT.ThenChange(` spanning consecutive single-line comments\nonly worked with bracket syntax `[...]`. Users want the bracket-free\nstyle:\n```\n// LINT.ThenChange(\n//   'apps/marketplace/app.config.ts#version',\n//   'apps/marketplace/public/version.json',\n//   'apps/marketplace/package.json',\n// )\n```\n\n## What\n- Add fallback path in multi-line accumulation to parse bracket-free\nquoted/unquoted targets via `parse_array_targets`\n- Fix off-by-one in `comment_idx` advancement that skipped directives\nimmediately following a multi-line block\n- Add 15 unit tests covering `//`, `#`, `--` comments, mixed quotes,\nsingle target, close-on-same-line, unclosed errors, and regression for\nexisting bracket syntax\n- Add 4 integration tests for lint engine behavior with multi-line\nThenChange\n\n## Verify\n- [x] All 236 tests pass\n- [x] `just perf` shows no regressions\n- [x] `just check_fix` passes (fmt + clippy clean)",
          "timestamp": "2026-03-21T09:58:37+01:00",
          "tree_id": "9621f6d4cb8aec5ddb4ff534a061c6d9ab0d842c",
          "url": "https://github.com/slnc/ifchange/commit/af149f581ecce4cdf63263fe871789890cd3039e"
        },
        "date": 1774083711747,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4252579,
            "range": "± 44451",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7559566,
            "range": "± 61651",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37631872,
            "range": "± 1963306",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 58865037,
            "range": "± 416719",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "685adddea6dfb57cf6abbc1bf75a6fddd247aedb",
          "message": "feat: validate ThenChange targets and support directory targets (#32)\n\n## Why\nThenChange target files were never validated during scan, so dangling\nreferences (after renames/deletes) went undetected. Additionally,\ndirectory targets like `ThenChange(lib/)` silently passed `.exists()`\nchecks but produced no useful enforcement.\n\n## What\n\n### Validate ThenChange targets exist during scan\n- Resolve each ThenChange target path and report an error if the file is\nmissing\n- Handle both relative and repo-root-absolute (`/`) target paths\n- Bare directories without trailing `/` produce an error with a\nsuggestion\n- Extract `validate_thenchange_targets` helper for clarity\n\n### Support ThenChange directory targets\n- Trailing slash convention (like `.gitignore`): `ThenChange(lib/)` =\ndirectory target\n- Lint mode: prefix-matches changed files against dir path (recursive)\n- Scan mode: validates directory exists, rejects bare dirs without `/`\n- Labels rejected for directory targets (`ThenChange(lib/#label)` is an\nerror)\n- Deleted directory targets error (consistent with deleted file targets)\n- Mixed targets supported: `ThenChange(lib/, config.py)`\n\n### Fix scan repo root resolution for remote `-s` paths\n- When `-s /abs/path` is used, discover repo root from the scan target\ninstead of the launcher CWD\n- Fixes absolute ThenChange targets resolving against the wrong repo\n\n### Other\n- Add pre-commit scenario test for deleted target files\n- Update README with directory target syntax and rules\n\n## Verify / Risk\n- [x] 306 tests pass (42 new)\n- [x] No performance regression (benchmarks unchanged)\n- [x] `cargo fmt` + `cargo clippy` clean\n- Low risk: scan validation is additive; directory targets are a new\nsyntax",
          "timestamp": "2026-03-21T11:30:06+01:00",
          "tree_id": "9ef65956d32977d32e88f1252cfafae899d38bd5",
          "url": "https://github.com/slnc/ifchange/commit/685adddea6dfb57cf6abbc1bf75a6fddd247aedb"
        },
        "date": 1774089242076,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4179369,
            "range": "± 90327",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7573661,
            "range": "± 322128",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37280261,
            "range": "± 1692468",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 57749469,
            "range": "± 1310528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c28d832556c19ff8d2ec3ef2da396210096b8e4c",
          "message": "fix: scan validates pairing, labels, and orphans (#36)\n\n## Why\nScan mode only checked for parse errors, duplicate labels, and missing\ntarget files. Orphan directives, missing labels in targets, and\nself-reference label errors went undetected until lint time.\n\n## What\n- Add `validate_directive_pairing` to detect orphan IfChange/ThenChange\nand consecutive IfChange without intervening ThenChange\n- Scan now validates that referenced labels exist in target files\n- Scan validates self-reference labels (`#label`) exist in the same file\n- Lint test helpers (`run_lint`, `run_lint_stdin`) pass `--no-scan` to\nisolate lint tests from scan-phase side effects\n- 16 new integration tests covering all identified gaps\n\n## Verify\n- [x] `just test`: 322 passed (vs 306 on origin/main), 0 failed\n- [x] `just check`: fmt + clippy clean",
          "timestamp": "2026-03-21T14:12:45+01:00",
          "tree_id": "39d0d0ebdb5a81522a852e01c06cf3854eb61724",
          "url": "https://github.com/slnc/ifchange/commit/c28d832556c19ff8d2ec3ef2da396210096b8e4c"
        },
        "date": 1774098951286,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4394936,
            "range": "± 98187",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6441828,
            "range": "± 283989",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37469367,
            "range": "± 979568",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 37685623,
            "range": "± 1094225",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bc38783b8d50647084110d8b6eb09dbba1a0de2",
          "message": "chore(main): release 0.3.0 (#35)\n\n## [0.3.0](https://github.com/slnc/ifchange/compare/v0.2.1...v0.3.0)\n(2026-03-21)\n\n\n### Features\n\n* add go.mod support ([#30](https://github.com/slnc/ifchange/issues/30))\n([8bcb8bf](https://github.com/slnc/ifchange/commit/8bcb8bf3e37be058dd861551a745712db3fc8c04))\n* support multi-line ThenChange\n([#31](https://github.com/slnc/ifchange/issues/31))\n([af149f5](https://github.com/slnc/ifchange/commit/af149f581ecce4cdf63263fe871789890cd3039e))\n* validate ThenChange targets and support directory targets\n([#32](https://github.com/slnc/ifchange/issues/32))\n([685addd](https://github.com/slnc/ifchange/commit/685adddea6dfb57cf6abbc1bf75a6fddd247aedb))\n\n\n### Bug Fixes\n\n* platform-specific npm packages for binary distribution\n([#33](https://github.com/slnc/ifchange/issues/33))\n([aac4af8](https://github.com/slnc/ifchange/commit/aac4af8efd377e72c638d98773a542b3299acc8a))\n* scan validates pairing, labels, and orphans\n([#36](https://github.com/slnc/ifchange/issues/36))\n([c28d832](https://github.com/slnc/ifchange/commit/c28d832556c19ff8d2ec3ef2da396210096b8e4c))\n\n---\nThis PR was generated with [Release\nPlease](https://github.com/googleapis/release-please). See\n[documentation](https://github.com/googleapis/release-please#release-please).\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-21T14:28:08+01:00",
          "tree_id": "16342c3f2c165cc43aca8d715a6dd40ab63c106e",
          "url": "https://github.com/slnc/ifchange/commit/9bc38783b8d50647084110d8b6eb09dbba1a0de2"
        },
        "date": 1774099895139,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4288129,
            "range": "± 41636",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7952407,
            "range": "± 410322",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 41847883,
            "range": "± 1723048",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 62628898,
            "range": "± 348942",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "69429+slnc@users.noreply.github.com",
            "name": "slnc",
            "username": "slnc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0430ff258abc9762230705ea606c626d7036866d",
          "message": "refactor: clean up tests + stop doing redundant CI runs (#37)\n\n## Why\nCI runs on push to main duplicate the PR checks, wasting resources.\n\n## What\n- Remove `push` trigger from `ci.yml` (PR-only now)\n- Extract benchmark publish and sonarqube main-branch scan into new\n`post-merge.yml`\n- Simplify `if` conditions now that push events are gone\n- Drop unnecessary permissions from PR benchmark job\n- Point release-please trigger to `Post-merge` workflow\n\n## Verify\n- [x] CI passes on this PR\n- [ ] After merge, `post-merge.yml` runs benchmark publish + sonarqube\n- [ ] After merge, release-please triggers from `Post-merge` workflow",
          "timestamp": "2026-03-21T17:19:09+01:00",
          "tree_id": "46702a928e537583f000213c133263e518857e72",
          "url": "https://github.com/slnc/ifchange/commit/0430ff258abc9762230705ea606c626d7036866d"
        },
        "date": 1774110066955,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4474825,
            "range": "± 27549",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7609050,
            "range": "± 38229",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 39184663,
            "range": "± 1377763",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 60658555,
            "range": "± 1103919",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86e6e598c7b3e989b821e0d36cca6a39524fe407",
          "message": "chore(deps): update all non-security dependencies (#38)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change | Pending |\n|---|---|---|---|---|\n| [Swatinem/rust-cache](https://redirect.github.com/Swatinem/rust-cache)\n([changelog](https://redirect.github.com/Swatinem/rust-cache/compare/c19371144df3bb44fab255c43d04cbc2ab54d1c4..e18b497796c12c097a38f9edb9d0641fb99eee32))\n| action | digest | `c193711` → `e18b497` | |\n| [clap](https://redirect.github.com/clap-rs/clap) | dependencies |\nminor | `4.5.60` → `4.6.0` | |\n|\n[codecov/codecov-action](https://redirect.github.com/codecov/codecov-action)\n([changelog](https://redirect.github.com/codecov/codecov-action/compare/1af58845a975a7985b0beb0cbe6fbbb71a41dbad..75cd11691c0faa626561e295848008c8a7dddffe))\n| action | digest | `1af5884` → `75cd116` | |\n|\n[dtolnay/rust-toolchain](https://redirect.github.com/dtolnay/rust-toolchain)\n| action | digest | `efa25f7` → `29eef33` | |\n|\n[renovatebot/github-action](https://redirect.github.com/renovatebot/github-action)\n| action | patch | `v46.1.5` → `v46.1.6` | `v46.1.7` |\n| [rstest](https://redirect.github.com/la10736/rstest) |\ndev-dependencies | minor | `0.24` → `0.26` | |\n|\n[rust-lang/crates-io-auth-action](https://redirect.github.com/rust-lang/crates-io-auth-action)\n| action | patch | `v1.0.3` → `v1.0.4` | |\n|\n[sigstore/cosign-installer](https://redirect.github.com/sigstore/cosign-installer)\n| action | patch | `v4.1.0` → `v4.1.1` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `a7e592b` → `c92986c` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `a7e592b` → `af0933f` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `a7e592b` → `be536a1` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `a7e592b` → `2205112` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `a7e592b` → `2ab0b06` | |\n| [tempfile](https://stebalien.com/projects/tempfile-rs/)\n([source](https://redirect.github.com/Stebalien/tempfile)) |\ndev-dependencies | minor | `3.26.0` → `3.27.0` | |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>clap-rs/clap (clap)</summary>\n\n###\n[`v4.6.0`](https://redirect.github.com/clap-rs/clap/blob/HEAD/CHANGELOG.md#460---2026-03-12)\n\n[Compare\nSource](https://redirect.github.com/clap-rs/clap/compare/v4.5.61...v4.6.0)\n\n##### Compatibility\n\n- Update MSRV to 1.85\n\n###\n[`v4.5.61`](https://redirect.github.com/clap-rs/clap/blob/HEAD/CHANGELOG.md#4561---2026-03-12)\n\n[Compare\nSource](https://redirect.github.com/clap-rs/clap/compare/v4.5.60...v4.5.61)\n\n##### Internal\n\n- Update dependencies\n\n</details>\n\n<details>\n<summary>renovatebot/github-action (renovatebot/github-action)</summary>\n\n###\n[`v46.1.6`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.6)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.5...v46.1.6)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.5\n([f73dab3](https://redirect.github.com/renovatebot/github-action/commit/f73dab362b50de913592fbc629e60358fb20189a))\n\n##### Miscellaneous Chores\n\n- **deps:** update actions/cache action to v5.0.4\n([5d78527](https://redirect.github.com/renovatebot/github-action/commit/5d785279ab3b77c0332cc94f632be0ab6304a25b))\n- **deps:** update commitlint monorepo to v20.4.4\n([797b143](https://redirect.github.com/renovatebot/github-action/commit/797b1434a8740960b925aa73e0594ef2ad81bf0a))\n- **deps:** update commitlint monorepo to v20.5.0\n([1f1c4d0](https://redirect.github.com/renovatebot/github-action/commit/1f1c4d0325b8fa8417e67faba7545c988789725e))\n- **deps:** update dependency esbuild to v0.27.4\n([f5e1677](https://redirect.github.com/renovatebot/github-action/commit/f5e1677a888c5ac11e512e28059979cf5b1769df))\n- **deps:** update dependency lint-staged to v16.3.3\n([a40b316](https://redirect.github.com/renovatebot/github-action/commit/a40b31673d1d53672f7cf3e5dcd053ab15361d00))\n- **deps:** update dependency lint-staged to v16.3.4\n([db5bf53](https://redirect.github.com/renovatebot/github-action/commit/db5bf53077b38b60039f82ed2424f77e1b85fff7))\n- **deps:** update dependency lint-staged to v16.4.0\n([24e6832](https://redirect.github.com/renovatebot/github-action/commit/24e6832a0e1a72db47a60c51231b5816da564745))\n- **deps:** update dependency typescript-eslint to v8.57.0\n([5c3cd2d](https://redirect.github.com/renovatebot/github-action/commit/5c3cd2d069fe625dd1d6430adc1fdb22fd1fa37d))\n- **deps:** update pnpm to v10.32.0\n([f8ce6e7](https://redirect.github.com/renovatebot/github-action/commit/f8ce6e7946c9300a8f19df4aa8ece07d3c4327de))\n- **deps:** update pnpm to v10.32.1\n([75912db](https://redirect.github.com/renovatebot/github-action/commit/75912db4646e8d56249b8ab9f0c28c518cf6fb4d))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([f21c5d7](https://redirect.github.com/renovatebot/github-action/commit/f21c5d739ee5f458e5f4415042ab5e962fda3ac1))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.76.3\n([c2bf9c6](https://redirect.github.com/renovatebot/github-action/commit/c2bf9c6a4ab438b904cfb7d066501d5da61f2f88))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.76.4\n([85642ee](https://redirect.github.com/renovatebot/github-action/commit/85642eefff81c01d8bb260dd60b885654c8591ba))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.76.5\n([5455749](https://redirect.github.com/renovatebot/github-action/commit/5455749f783c665462187f25d268f9595f777c94))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.77.0\n([85690d1](https://redirect.github.com/renovatebot/github-action/commit/85690d1bd26d70719be880186f7955e5e6011ae6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.77.2\n([ac501fb](https://redirect.github.com/renovatebot/github-action/commit/ac501fb1e4e6b5bd571c41a34b353e332e69fcc8))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.77.3\n([0ef243b](https://redirect.github.com/renovatebot/github-action/commit/0ef243bf6fc5099de9c92f0b62393cd513032ffb))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.77.7\n([c8dff7c](https://redirect.github.com/renovatebot/github-action/commit/c8dff7c136c705caaad71e00d4f5590680d282cb))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.77.8\n([79f4351](https://redirect.github.com/renovatebot/github-action/commit/79f43511d36fad5d0ceaa7168ef9fb68d341f090))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.78.0\n([8235b3d](https://redirect.github.com/renovatebot/github-action/commit/8235b3d65ea121d767efd73b2a0c9cf36861996f))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.80.0\n([d443207](https://redirect.github.com/renovatebot/github-action/commit/d4432070f48d9311c9b7eeabd3a263780e83e597))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.82.0\n([a397fd4](https://redirect.github.com/renovatebot/github-action/commit/a397fd48db962f4b1d03ef095c4610a052253e2f))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.83.0\n([c026742](https://redirect.github.com/renovatebot/github-action/commit/c026742984bd484f00804c91c57bb0a31e3b0c76))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.83.1\n([2efa726](https://redirect.github.com/renovatebot/github-action/commit/2efa7267f125b2c5f1ec9a5a05f1a75a21d71403))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.84.0\n([c7f12c5](https://redirect.github.com/renovatebot/github-action/commit/c7f12c5f94ce13bf1fcdc7b8bd189db51dbdbea6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.84.1\n([d9cd99e](https://redirect.github.com/renovatebot/github-action/commit/d9cd99e12b5a66ddbe3ff9c92b74438b10a4fc52))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.84.2\n([72d5379](https://redirect.github.com/renovatebot/github-action/commit/72d5379cc600b3fc69dde90d8456b4c171a55e82))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.85.0\n([12252d0](https://redirect.github.com/renovatebot/github-action/commit/12252d0ffb7a0904d44a01bada897b3f0c26cb07))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.86.0\n([6bf1d8f](https://redirect.github.com/renovatebot/github-action/commit/6bf1d8f3aa24a079d3bb0b20246a977ad4c661f4))\n\n</details>\n\n<details>\n<summary>la10736/rstest (rstest)</summary>\n\n###\n[`v0.26.1`](https://redirect.github.com/la10736/rstest/blob/HEAD/CHANGELOG.md#0261-2025727)\n\n[Compare\nSource](https://redirect.github.com/la10736/rstest/compare/v0.26.0...v0.26.1)\n\n##### Fixed\n\n- Docs\n\n###\n[`v0.26.0`](https://redirect.github.com/la10736/rstest/blob/HEAD/CHANGELOG.md#0260-2025726)\n\n[Compare\nSource](https://redirect.github.com/la10736/rstest/compare/v0.25.0...v0.26.0)\n\n##### Changed\n\n- The `#[files(...)]` attribute now ignores matched directory paths by\ndefault.\nSee [#&#8203;306](https://redirect.github.com/la10736/rstest/pull/306)\nthanks to [@&#8203;Obito-git](https://redirect.github.com/Obito-git).\n\n##### Add\n\n- Introduced the `#[dirs]` attribute, which can be used with\n`#[files(...)]` to explicitly include directory paths.\nSee [#&#8203;306](https://redirect.github.com/la10736/rstest/pull/306)\nthanks to [@&#8203;Obito-git](https://redirect.github.com/Obito-git).\n- The CI now runs builds and tests on Windows, as well.\n- `#[test_attr]` to define test attribute explicit and also enable the\nuse of\n  `#[macro_rules_attribute::apply(<macro>)]`: naw also `smol` works. See\n  [#&#8203;303](https://redirect.github.com/la10736/rstest/pull/303)\n  [#&#8203;311](https://redirect.github.com/la10736/rstest/pull/311)\n  [#&#8203;315](https://redirect.github.com/la10736/rstest/pull/315)\nthanks to [@&#8203;coriolinus](https://redirect.github.com/coriolinus).\n\n##### Fixed\n\n- Removed unsued trait and impl spotted out on `1.89.0-nightly`\n- Add missed tests about ignore attribute's args in `rstest` expansion.\n  See [#&#8203;313](https://redirect.github.com/la10736/rstest/pull/313)\n- The `#[files(...)]` attribute now works reliably on Windows.\n- Now global attributes can go everywhere in the list also where case is\nused\n\n###\n[`v0.25.0`](https://redirect.github.com/la10736/rstest/blob/HEAD/CHANGELOG.md#0250-202532)\n\n[Compare\nSource](https://redirect.github.com/la10736/rstest/compare/v0.24.0...v0.25.0)\n\n##### Changed\n\n- Append generated test macro so next test macros are aware of it\n(see [#&#8203;291](https://redirect.github.com/la10736/rstest/pull/291)\nthanks to [@&#8203;kezhuw](https://redirect.github.com/kezhuw)).\n\n##### Add\n\n- Added a `#[mode = ...]` attribute to be used with the `#[files(...)]`\nattribute to change the way\n  the files get passed to the test.\n(see\n[#&#8203;295](https://redirect.github.com/la10736/rstest/issues/295)\nthanks to\n[@&#8203;lucascool12](https://redirect.github.com/lucascool12))\n\n</details>\n\n<details>\n<summary>rust-lang/crates-io-auth-action\n(rust-lang/crates-io-auth-action)</summary>\n\n###\n[`v1.0.4`](https://redirect.github.com/rust-lang/crates-io-auth-action/releases/tag/v1.0.4)\n\n[Compare\nSource](https://redirect.github.com/rust-lang/crates-io-auth-action/compare/v1.0.3...v1.0.4)\n\n#### What's Changed\n\n- Update Renovate GitHub Action digest pinning configuration by\n[@&#8203;marcoieni](https://redirect.github.com/marcoieni) in\n[#&#8203;205](https://redirect.github.com/rust-lang/crates-io-auth-action/pull/205)\n- update tsdown to v0.21 by\n[@&#8203;marcoieni](https://redirect.github.com/marcoieni) in\n[#&#8203;211](https://redirect.github.com/rust-lang/crates-io-auth-action/pull/211)\n- update to node 24 by\n[@&#8203;marcoieni](https://redirect.github.com/marcoieni) in\n[#&#8203;212](https://redirect.github.com/rust-lang/crates-io-auth-action/pull/212)\n- update to actions core 3 by\n[@&#8203;marcoieni](https://redirect.github.com/marcoieni) in\n[#&#8203;213](https://redirect.github.com/rust-lang/crates-io-auth-action/pull/213)\n- Other dependencies updates\n\n**Full Changelog**:\n<https://github.com/rust-lang/crates-io-auth-action/compare/v1.0.3...v1.0.4>\n\n</details>\n\n<details>\n<summary>sigstore/cosign-installer (sigstore/cosign-installer)</summary>\n\n###\n[`v4.1.1`](https://redirect.github.com/sigstore/cosign-installer/releases/tag/v4.1.1)\n\n[Compare\nSource](https://redirect.github.com/sigstore/cosign-installer/compare/v4.1.0...v4.1.1)\n\n#### What's Changed\n\n- chore: update default cosign-release to v3.0.5 in\n[#&#8203;223](https://redirect.github.com/sigstore/cosign-installer/pull/223)\n\n**Full Changelog**:\n<https://github.com/sigstore/cosign-installer/compare/v4.1.0...v4.1.1>\n\n</details>\n\n<details>\n<summary>Stebalien/tempfile (tempfile)</summary>\n\n###\n[`v3.27.0`](https://redirect.github.com/Stebalien/tempfile/blob/HEAD/CHANGELOG.md#3270)\n\n[Compare\nSource](https://redirect.github.com/Stebalien/tempfile/compare/v3.26.0...v3.27.0)\n\nThis release adds `TempPath::try_from_path` and deprecates\n`TempPath::from_path`.\n\nPrior to this release, `TempPath::from_path` made no attempts to convert\nrelative paths into absolute paths. The following code would have\ndeleted the wrong file:\n\n```rust\nlet tmp_path = TempPath::from_path(\"foo\")\nstd::env::set_current_dir(\"/some/other/path\").unwrap();\ndrop(tmp_path);\n```\n\nNow:\n\n1. `TempPath::from_path` will attempt to convert relative paths into\nabsolute paths. However, this isn't always possible as we need to call\n`std::env::current_dir`, which can fail. If we fail to convert the\nrelative path to an absolute path, we simply keep the relative path.\n2. The `TempPath::try_from_path` behaves exactly like\n`TempPath::from_path`, except that it returns an error if we fail to\nconvert a relative path into an absolute path (or if the passed path is\nempty).\n\nNeither function attempt to verify the existence of the file in\nquestion.\n\nThanks to [@&#8203;meng-xu-cs](https://redirect.github.com/meng-xu-cs)\nfor reporting this issue.\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: Branch creation - \"on monday\" in timezone UTC, Automerge\n- At any time (no schedule defined).\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n👻 **Immortal**: This PR will be recreated if closed unmerged. Get\n[config\nhelp](https://redirect.github.com/renovatebot/renovate/discussions) if\nthat's undesired.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Renovate\nBot](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My44Ni4wIiwidXBkYXRlZEluVmVyIjoiNDMuMTAxLjIiLCJ0YXJnZXRCcmFuY2giOiJtYWluIiwibGFiZWxzIjpbXX0=-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-31T19:38:22+02:00",
          "tree_id": "6a6e5a59eaeb24ce5009da0a617b1c0de34b4c0e",
          "url": "https://github.com/slnc/ifchange/commit/86e6e598c7b3e989b821e0d36cca6a39524fe407"
        },
        "date": 1774978837992,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4455631,
            "range": "± 32131",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6978640,
            "range": "± 167502",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 35491194,
            "range": "± 794496",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 52006101,
            "range": "± 594103",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0daa25ea9bb8e48bef723c1df357f555ff3fdf83",
          "message": "chore(deps): update all non-security dependencies (#39)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change | Pending |\n|---|---|---|---|---|\n|\n[SonarSource/sonarqube-scan-action](https://redirect.github.com/SonarSource/sonarqube-scan-action)\n([changelog](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/a31c9398be7ace6bbfaf30c0bd5d415f843d45e9..299e4b793aaa83bf2aba7c9c14bedbb485688ec4))\n| action | digest | `a31c939` → `299e4b7` | |\n|\n[renovatebot/github-action](https://redirect.github.com/renovatebot/github-action)\n| action | patch | `v46.1.6` → `v46.1.7` | `v46.1.8` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `c92986c` → `67ba421` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `af0933f` → `c2eca42` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `be536a1` → `bb8b1ba` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `2205112` → `68f3344` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n| action | digest | `2ab0b06` → `7c918e4` | |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>renovatebot/github-action (renovatebot/github-action)</summary>\n\n###\n[`v46.1.7`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.7)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.6...v46.1.7)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.6\n([3afa29f](https://redirect.github.com/renovatebot/github-action/commit/3afa29f3bacded0f3a8194151e51c09e06c74a06))\n\n##### Miscellaneous Chores\n\n- **deps:** update dependency typescript-eslint to v8.57.1\n([3a47fac](https://redirect.github.com/renovatebot/github-action/commit/3a47faccdec3530f8dbbfe76ce2f34538a3cfbfe))\n- **deps:** update node.js to v24.14.1\n([28bb013](https://redirect.github.com/renovatebot/github-action/commit/28bb013b092ff7122af047f9b120c360620e8d29))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([be2fc08](https://redirect.github.com/renovatebot/github-action/commit/be2fc0808e1a260d5bc8007799cfb101e39bad4c))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.86.1\n([8795f0b](https://redirect.github.com/renovatebot/github-action/commit/8795f0bb9f436068f48f1fa0063c00fe8c0fd8f4))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.86.2\n([9853f69](https://redirect.github.com/renovatebot/github-action/commit/9853f690fa09cdc8e71f7dc2d6d070c604d6d345))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.87.0\n([f43553b](https://redirect.github.com/renovatebot/github-action/commit/f43553b66b5a31917185e319d54b543e5ffe6a56))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.87.1\n([266e52c](https://redirect.github.com/renovatebot/github-action/commit/266e52c849d9142e6ea54b705139cdf7b62d713c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.0\n([15d8db4](https://redirect.github.com/renovatebot/github-action/commit/15d8db463f3dd951f349ad5e45e0b43a380ef2ef))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.1\n([b711f08](https://redirect.github.com/renovatebot/github-action/commit/b711f088eca6b9ed15159f21c6ea4d577411be83))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.2\n([06c1ac0](https://redirect.github.com/renovatebot/github-action/commit/06c1ac0e886948214e40190f68507fac183b5a91))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.3\n([4509fbc](https://redirect.github.com/renovatebot/github-action/commit/4509fbc16b3781a900a999554df2ba5a5e523780))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.4\n([8dd874b](https://redirect.github.com/renovatebot/github-action/commit/8dd874b6532383a8c7298eafe9ff01357e18fc2e))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.5\n([908aecf](https://redirect.github.com/renovatebot/github-action/commit/908aecfd19e0925aae759c3e16b801663c21aed1))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.6\n([1a40ecc](https://redirect.github.com/renovatebot/github-action/commit/1a40ecc29a17caa1adb718a6b295517a9bc54113))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.89.8\n([82662d1](https://redirect.github.com/renovatebot/github-action/commit/82662d1770556f248643f0fe296a4d0b1326a144))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.91.1\n([40328d7](https://redirect.github.com/renovatebot/github-action/commit/40328d7e613335eb23db339081b7d6127753fa22))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.91.4\n([977b086](https://redirect.github.com/renovatebot/github-action/commit/977b086a6ccfc1bdbcef357eaf9c7e9c64c7234d))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.91.5\n([398a399](https://redirect.github.com/renovatebot/github-action/commit/398a3994fb642171a0af715dda9fa6e537af318b))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.91.6\n([a416aeb](https://redirect.github.com/renovatebot/github-action/commit/a416aebb8071878818e0befb5c5da3397853e176))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.92.1\n([8c59289](https://redirect.github.com/renovatebot/github-action/commit/8c59289af20bffcdc0c36f2c79f03a331c317e32))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.95.0\n([5312d97](https://redirect.github.com/renovatebot/github-action/commit/5312d97f8aeda49f74d4ff943807c8c509b856c0))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.96.0\n([6016202](https://redirect.github.com/renovatebot/github-action/commit/601620233fecdefc057851a1d91a7bb0056d7d3c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.98.0\n([d4812c2](https://redirect.github.com/renovatebot/github-action/commit/d4812c218043a1edcd62eebafd3d74d93325e315))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.99.0\n([47f20b6](https://redirect.github.com/renovatebot/github-action/commit/47f20b6cd111a5cf9f5dd1575329614b69105ac6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.99.1\n([dadfa2f](https://redirect.github.com/renovatebot/github-action/commit/dadfa2fcc3c1cbadeac6869d9aeba7f815a47f31))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: (in timezone UTC)\n\n- Branch creation\n  - \"on monday\"\n- Automerge\n  - At any time (no schedule defined)\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n👻 **Immortal**: This PR will be recreated if closed unmerged. Get\n[config\nhelp](https://redirect.github.com/renovatebot/renovate/discussions) if\nthat's undesired.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Renovate\nBot](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My4xMDQuNSIsInVwZGF0ZWRJblZlciI6IjQzLjEwNC44IiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-08T03:58:59+02:00",
          "tree_id": "b7e3cf3ba880547453f93d31cd45bd8cef832347",
          "url": "https://github.com/slnc/ifchange/commit/0daa25ea9bb8e48bef723c1df357f555ff3fdf83"
        },
        "date": 1775613640359,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4470895,
            "range": "± 74759",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6954822,
            "range": "± 259472",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 38113373,
            "range": "± 1904339",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 53679588,
            "range": "± 736580",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91c953a9d68e35624f34a00384428a77123e2ad2",
          "message": "chore(deps): update codecov/codecov-action action to v6 (#40)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change |\n|---|---|---|---|\n|\n[codecov/codecov-action](https://redirect.github.com/codecov/codecov-action)\n| action | major | `v5` → `v6` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>codecov/codecov-action (codecov/codecov-action)</summary>\n\n###\n[`v6`](https://redirect.github.com/codecov/codecov-action/compare/v5...v6)\n\n[Compare\nSource](https://redirect.github.com/codecov/codecov-action/compare/v5...v6)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: (in timezone UTC)\n\n- Branch creation\n  - \"on monday\"\n- Automerge\n  - At any time (no schedule defined)\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n🔕 **Ignore**: Close this PR and you won't be reminded about this update\nagain.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Renovate\nBot](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My4xMDQuNSIsInVwZGF0ZWRJblZlciI6IjQzLjEwNC41IiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>\nCo-authored-by: slnc <69429+slnc@users.noreply.github.com>",
          "timestamp": "2026-04-08T02:00:45Z",
          "tree_id": "d86b250a7c5d2be75283c382eac88619331d0d4d",
          "url": "https://github.com/slnc/ifchange/commit/91c953a9d68e35624f34a00384428a77123e2ad2"
        },
        "date": 1775613755799,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4485025,
            "range": "± 33415",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 7231306,
            "range": "± 344133",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 37513885,
            "range": "± 2013558",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 54317521,
            "range": "± 437206",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4003569f14465c36c1b010438248f6f2cb5da315",
          "message": "chore(deps): update all non-security dependencies (#41)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change | Pending |\n|---|---|---|---|---|\n|\n[SonarSource/sonarqube-scan-action](https://redirect.github.com/SonarSource/sonarqube-scan-action)\n([changelog](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/299e4b793aaa83bf2aba7c9c14bedbb485688ec4..55e44800a8f495208cce6e4e82f5dedb45fcf0ef))\n| action | digest | `299e4b7` → `55e4480` | |\n|\n[actions/create-github-app-token](https://redirect.github.com/actions/create-github-app-token)\n([changelog](https://redirect.github.com/actions/create-github-app-token/compare/f8d387b68d61c58ab83c6c016672934102569859..1b10c78c7865c340bc4f6099eb2f838309f1e8c3))\n| action | digest | `f8d387b` → `1b10c78` | |\n| [actions/setup-node](https://redirect.github.com/actions/setup-node)\n([changelog](https://redirect.github.com/actions/setup-node/compare/53b83947a5a98c8d113130e565377fae1a50d02f..48b55a011bda9f5d6aeb4c2d9c7362e8dae4041e))\n| action | digest | `53b8394` → `48b55a0` | |\n|\n[actions/upload-artifact](https://redirect.github.com/actions/upload-artifact)\n([changelog](https://redirect.github.com/actions/upload-artifact/compare/bbbca2ddaa5d8feaa63e36b76fdaad77386f024f..043fb46d1a93c77aae656e7c1c64a875d1fc6a0a))\n| action | digest | `bbbca2d` → `043fb46` | |\n| [clap](https://redirect.github.com/clap-rs/clap) | dependencies |\npatch | `4.6.0` → `4.6.1` | |\n|\n[googleapis/release-please-action](https://redirect.github.com/googleapis/release-please-action)\n([changelog](https://redirect.github.com/googleapis/release-please-action/compare/16a9c90856f42705d54a6fda1823352bdc62cf38..5c625bfb5d1ff62eadeeb3772007f7f66fdcf071))\n| action | digest | `16a9c90` → `5c625bf` | |\n|\n[pypa/gh-action-pypi-publish](https://redirect.github.com/pypa/gh-action-pypi-publish)\n([changelog](https://redirect.github.com/pypa/gh-action-pypi-publish/compare/ed0c53931b1dc9bd32cbe73a98c7f6766f8a527e..cef221092ed1bacb1cc03d23a2d87d1d172e277b))\n| action | digest | `ed0c539` → `cef2210` | |\n| [rayon](https://redirect.github.com/rayon-rs/rayon) | dependencies |\nminor | `1.11.0` → `1.12.0` | |\n|\n[renovatebot/github-action](https://redirect.github.com/renovatebot/github-action)\n| action | patch | `v46.1.7` → `v46.1.10` | `v46.1.12` (+1) |\n|\n[softprops/action-gh-release](https://redirect.github.com/softprops/action-gh-release)\n([changelog](https://redirect.github.com/softprops/action-gh-release/compare/153bb8e04406b158c6c84fc1615b65b24149a1fe..3bb12739c298aeb8a4eeaf626c5b8d85266b0e65))\n| action | digest | `153bb8e` → `3bb1273` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/67ba421220842957ca0cd55182d4b2cf3e7c0614..ff869c26e4a7acc3087d9d6c1163a80d3957bca7))\n| action | digest | `67ba421` → `ff869c2` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/c2eca42f131dcb54826dc4165d271d34154a5641..3727a22028e8880324c709d651489ab3b1360e13))\n| action | digest | `c2eca42` → `3727a22` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/bb8b1bac045647fa8c87711be1f5b9a84d81086a..f212ee79f9324d678b0d9270422b8800f0a3f002))\n| action | digest | `bb8b1ba` → `f212ee7` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/68f3344b4246e8381afe2c161fd15efa0cbfbd66..11706c4fa057f0949e593c636f1d948f143d3eb1))\n| action | digest | `68f3344` → `11706c4` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/7c918e486f4a18284b47a7f0718a1816a897706b..9ed832ec9b05207a87c28eab74dbfb661ff969d3))\n| action | digest | `7c918e4` → `9ed832e` | |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>clap-rs/clap (clap)</summary>\n\n###\n[`v4.6.1`](https://redirect.github.com/clap-rs/clap/blob/HEAD/CHANGELOG.md#461---2026-04-15)\n\n[Compare\nSource](https://redirect.github.com/clap-rs/clap/compare/v4.6.0...v4.6.1)\n\n##### Fixes\n\n- *(derive)* Ensure rebuilds happen when an read env variable is changed\n\n</details>\n\n<details>\n<summary>rayon-rs/rayon (rayon)</summary>\n\n###\n[`v1.12.0`](https://redirect.github.com/rayon-rs/rayon/blob/HEAD/RELEASES.md#Release-rayon-1120-2026-04-13)\n\n[Compare\nSource](https://redirect.github.com/rayon-rs/rayon/compare/v1.11.0...v1.12.0)\n\n- Fixed a bug in parallel `Range<char>` when the end is 0xE000, just\npast the\nsurrogate boundary, which was unsafely producing invalid `char` values.\n- The new method `ParallelSlice::par_array_windows` works like\n`par_windows`\n  but with a constant length, producing `&[T; N]` items.\n\n</details>\n\n<details>\n<summary>renovatebot/github-action (renovatebot/github-action)</summary>\n\n###\n[`v46.1.10`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.10)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.9...v46.1.10)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.9\n([ed96e8a](https://redirect.github.com/renovatebot/github-action/commit/ed96e8aad810082cbb5e478524fbb7c31346e155))\n\n##### Miscellaneous Chores\n\n- **deps:** update actions/cache action to v5.0.5\n([0b43175](https://redirect.github.com/renovatebot/github-action/commit/0b43175137ace0f8fc8c429013c40e9e7813b15a))\n- **deps:** update dependency globals to v17.5.0\n([429b645](https://redirect.github.com/renovatebot/github-action/commit/429b645cc1dbadef8d85c409b9f35270e277613c))\n- **deps:** update dependency prettier to v3.8.2\n([8bfc8a3](https://redirect.github.com/renovatebot/github-action/commit/8bfc8a3287f61140adf470199644b7885ebb7326))\n- **deps:** update dependency typescript-eslint to v8.58.1\n([#&#8203;1026](https://redirect.github.com/renovatebot/github-action/issues/1026))\n([f0c5d61](https://redirect.github.com/renovatebot/github-action/commit/f0c5d61b2b12e14618383ff7067f123216db1e95))\n- **deps:** update node.js to v24.15.0\n([c493ede](https://redirect.github.com/renovatebot/github-action/commit/c493ede7571b32f51ac3de55f088f9d408f2868d))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([5f318b8](https://redirect.github.com/renovatebot/github-action/commit/5f318b89bb2322a09b40ffa65843a00807301a4f))\n\n##### Continuous Integration\n\n- add Zizmor for GitHub Actions linting\n([#&#8203;1025](https://redirect.github.com/renovatebot/github-action/issues/1025))\n([3ce6ef9](https://redirect.github.com/renovatebot/github-action/commit/3ce6ef9ac426901e6e081dda07fd4704b50cc8ad))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.111.1\n([77016cf](https://redirect.github.com/renovatebot/github-action/commit/77016cf243c8ee988d767a4f09f2dfe676ac2fb3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.111.2\n([d4ee47a](https://redirect.github.com/renovatebot/github-action/commit/d4ee47aa28260db405bc067c68b323c0aebe5ba3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.111.3\n([9533edc](https://redirect.github.com/renovatebot/github-action/commit/9533edc2bae9d6fa58aff66ae320998b5101c3b6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.113.0\n([7028a3e](https://redirect.github.com/renovatebot/github-action/commit/7028a3e61a3c103e0905e7cab1081766178cc05e))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.115.1\n([00ae40b](https://redirect.github.com/renovatebot/github-action/commit/00ae40bc962c14f3acf69d82d4cde48ea1bea09a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.123.0\n([4d39d22](https://redirect.github.com/renovatebot/github-action/commit/4d39d2285e31f24af18a76dcb406d03ec603b1c9))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.123.3\n([06b71b8](https://redirect.github.com/renovatebot/github-action/commit/06b71b8eb552f8a0d58ee67dc4e94f32f51814a1))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.123.4\n([bd145c9](https://redirect.github.com/renovatebot/github-action/commit/bd145c9b3f53b0abf9deb4a3c5c3e5f3d2c20565))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.123.5\n([59cbcc3](https://redirect.github.com/renovatebot/github-action/commit/59cbcc3737f7e1d6d9860d437b7c579fc86fb2cf))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.123.6\n([195ddbe](https://redirect.github.com/renovatebot/github-action/commit/195ddbe0ac336dcbe00b7899ea53e128b3222935))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.123.8\n([9286cb7](https://redirect.github.com/renovatebot/github-action/commit/9286cb7107e487a5e125560531d69456530a7481))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.124.1\n([dbcd02c](https://redirect.github.com/renovatebot/github-action/commit/dbcd02c8a04a7063a10327b98723b3c46bc8e260))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.125.0\n([754b499](https://redirect.github.com/renovatebot/github-action/commit/754b499321fdc55253594dc0630b816f1e78097f))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.125.1\n([5ee1022](https://redirect.github.com/renovatebot/github-action/commit/5ee10227800b184edae258b8dfa3016fc5475af7))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.126.0\n([a4188be](https://redirect.github.com/renovatebot/github-action/commit/a4188bea7dc4a67edad79afa3ae90336d5ec1468))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.127.2\n([#&#8203;1027](https://redirect.github.com/renovatebot/github-action/issues/1027))\n([b962e40](https://redirect.github.com/renovatebot/github-action/commit/b962e40a50c4d371afaad961eb7402b94f099f50))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.127.3\n([6e1df28](https://redirect.github.com/renovatebot/github-action/commit/6e1df286c9ea8c4f6dbdc5757faff8c9e10c628c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.128.1\n([5429eaa](https://redirect.github.com/renovatebot/github-action/commit/5429eaa122afe4ff9b9e00fe6f746b0d47d71b52))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.129.0\n([9f025e5](https://redirect.github.com/renovatebot/github-action/commit/9f025e58a7ee9ba1ca4f08883e63b9deb590218f))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.130.1\n([#&#8203;1028](https://redirect.github.com/renovatebot/github-action/issues/1028))\n([0f49bd4](https://redirect.github.com/renovatebot/github-action/commit/0f49bd4d34596cff71f02a4f5d982cce90949526))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.131.0\n([8c3b0ff](https://redirect.github.com/renovatebot/github-action/commit/8c3b0ff0daae9b35a2684151c82808ea0dfbfde0))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.132.0\n([81c8ffb](https://redirect.github.com/renovatebot/github-action/commit/81c8ffbe0dd325fdd298929a082d96a5ec8515c2))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.132.1\n([f84cc28](https://redirect.github.com/renovatebot/github-action/commit/f84cc284f41e89f83c6f74d7a1035596efa86c1b))\n\n###\n[`v46.1.9`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.9)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.8...v46.1.9)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.8\n([65fadb1](https://redirect.github.com/renovatebot/github-action/commit/65fadb148a0cb437ed338150090bcc6918283314))\n\n##### Miscellaneous Chores\n\n- **deps:** update dependency\n[@&#8203;types/node](https://redirect.github.com/types/node) to v24.12.1\n([574fb8e](https://redirect.github.com/renovatebot/github-action/commit/574fb8eb0fe7ade9347753a2d6df62873727e1e8))\n- **deps:** update dependency\n[@&#8203;types/node](https://redirect.github.com/types/node) to v24.12.2\n([8eec7f0](https://redirect.github.com/renovatebot/github-action/commit/8eec7f01f329bc8953da1ce36d1c3cda2b1ade9b))\n- **deps:** update dependency esbuild to v0.27.5\n([fb75c7e](https://redirect.github.com/renovatebot/github-action/commit/fb75c7e565ec08a0a9017ea6684a5d0630b629d5))\n- **deps:** update dependency esbuild to v0.27.7\n([709e29c](https://redirect.github.com/renovatebot/github-action/commit/709e29c55b6390e4262ba7d4d8b6f62e7c880152))\n- **deps:** update dependency esbuild to v0.28.0\n([143a7fb](https://redirect.github.com/renovatebot/github-action/commit/143a7fb7db0606e8d68bebdd6ac4008334324723))\n- **deps:** update dependency typescript-eslint to v8.58.0\n([20ecf26](https://redirect.github.com/renovatebot/github-action/commit/20ecf269993fe34f21814bba3bb99484ffa26df1))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([646e9b0](https://redirect.github.com/renovatebot/github-action/commit/646e9b0ef5960bc4a1a3784632530cabf5a20820))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.6\n([e6e6157](https://redirect.github.com/renovatebot/github-action/commit/e6e6157846f5cb6e0f038935d504d7ad10831061))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.7\n([38c3a5d](https://redirect.github.com/renovatebot/github-action/commit/38c3a5dd5dca35cf7ef74fcb72f186a9df30699a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.8\n([34a118b](https://redirect.github.com/renovatebot/github-action/commit/34a118b05750b2c5baee87e942313d579bf895b5))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.108.1\n([d946ea8](https://redirect.github.com/renovatebot/github-action/commit/d946ea817d1175eff63d8d64e4ff0826822356f3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.109.0\n([16020af](https://redirect.github.com/renovatebot/github-action/commit/16020af9fcbb8259ebf2cba1a8bec8c4f2cc129f))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.109.1\n([22a6725](https://redirect.github.com/renovatebot/github-action/commit/22a6725add733583afe0044f8b5a9cc4859aaead))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.109.3\n([f9ce60c](https://redirect.github.com/renovatebot/github-action/commit/f9ce60c6dfa1eafad8149863f39bbdce2340a1ea))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.10\n([8e63580](https://redirect.github.com/renovatebot/github-action/commit/8e6358061d367838da878a6e42ce8b6d2b01bf09))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.12\n([4700a42](https://redirect.github.com/renovatebot/github-action/commit/4700a42f8132eb9307f291e1153d3c5729d373b2))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.13\n([2155516](https://redirect.github.com/renovatebot/github-action/commit/21555169861b801e638b6cbe9172689a12a3d9de))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.14\n([747253b](https://redirect.github.com/renovatebot/github-action/commit/747253b8ae605cd3b86aaf5954c834936d0405fe))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.16\n([84e3bcc](https://redirect.github.com/renovatebot/github-action/commit/84e3bcc357c4cf02f654ec826765cce4ecf46ab0))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.17\n([b649498](https://redirect.github.com/renovatebot/github-action/commit/b649498283ba48017f739021e5adb56b56699246))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.2\n([c149fdf](https://redirect.github.com/renovatebot/github-action/commit/c149fdf55c303e4be9ef3fd8c295b1a2474156a3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.4\n([9deca28](https://redirect.github.com/renovatebot/github-action/commit/9deca28377446413f5e1289e923fee31453f7662))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.7\n([eb7409a](https://redirect.github.com/renovatebot/github-action/commit/eb7409a9ca79446d22bc7c440c207b78d3165cf1))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.8\n([2e39b3e](https://redirect.github.com/renovatebot/github-action/commit/2e39b3e1871afb67b246ecb0d3501a5792507e4c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.110.9\n([b45c6e7](https://redirect.github.com/renovatebot/github-action/commit/b45c6e706b7cc4c5d8d98ad23c980b3d8e2e41f3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.111.0\n([9feb404](https://redirect.github.com/renovatebot/github-action/commit/9feb404915492a6a1ef5537b50d51b61192ca142))\n\n###\n[`v46.1.8`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.8)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.7...v46.1.8)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.7\n([784cabc](https://redirect.github.com/renovatebot/github-action/commit/784cabc08e71c4644c95607166d9df479af679c1))\n\n##### Miscellaneous Chores\n\n- configure pnpm\n([42adbac](https://redirect.github.com/renovatebot/github-action/commit/42adbacebc5dc4bc52dc1ad297be82261663cf3a))\n- **deps:** update dependency conventional-changelog-conventionalcommits\nto v9.3.1\n([0dd322f](https://redirect.github.com/renovatebot/github-action/commit/0dd322f719ce87efc20d031a746000777a630832))\n- **deps:** update dependency typescript-eslint to v8.57.2\n([91d6038](https://redirect.github.com/renovatebot/github-action/commit/91d6038948a3a0725f646c81828fd571140b3f11))\n- **deps:** update pnpm to v10.33.0\n([10556c1](https://redirect.github.com/renovatebot/github-action/commit/10556c14cfb2dc7934f175599eae87cdd1b5b16c))\n- **deps:** update pnpm/action-setup action to v5\n([#&#8203;1022](https://redirect.github.com/renovatebot/github-action/issues/1022))\n([97c4175](https://redirect.github.com/renovatebot/github-action/commit/97c4175c4ed077aadd1779306d0e130a87e5055f))\n- update lodash to v4.18.1\n([8a6b3d7](https://redirect.github.com/renovatebot/github-action/commit/8a6b3d79d0def4affa1e38541f3b8a882066fb0d))\n- update lodash-es to v4.18.1\n([b99db03](https://redirect.github.com/renovatebot/github-action/commit/b99db037c99445b0da44f5967d9fdfacd5b666bd))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([768a348](https://redirect.github.com/renovatebot/github-action/commit/768a348db8272c8871d6bbb7fc2c7b0339ad380b))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.100.0\n([9cf5ad2](https://redirect.github.com/renovatebot/github-action/commit/9cf5ad26d66142061dfd458def096300481aef5f))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.101.1\n([b404d85](https://redirect.github.com/renovatebot/github-action/commit/b404d853ec8442df7c8dc619ca3be83c62b3f055))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.101.2\n([7045453](https://redirect.github.com/renovatebot/github-action/commit/7045453f7f0c94551b1e4b5ae195d86c3b42cc16))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.101.4\n([b48791f](https://redirect.github.com/renovatebot/github-action/commit/b48791f189886a363c957b92fca90cddf3a7399a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.101.7\n([e606f42](https://redirect.github.com/renovatebot/github-action/commit/e606f429ea1c44341037462d71265236988c38cf))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.0\n([4ec3adc](https://redirect.github.com/renovatebot/github-action/commit/4ec3adc1fe417cb91cc46dcbbfd68741f99556bf))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.10\n([a064167](https://redirect.github.com/renovatebot/github-action/commit/a064167f89f1cdef7160ba29d8e2d7221bb5484a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.11\n([5bae778](https://redirect.github.com/renovatebot/github-action/commit/5bae7781fbde0f432e9db9d28be120e7117db6d6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.2\n([9d053ec](https://redirect.github.com/renovatebot/github-action/commit/9d053ec3a19109b06c0e0428aca8d3261d5babcc))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.3\n([641d4cb](https://redirect.github.com/renovatebot/github-action/commit/641d4cb043cc30a53b31f0b1835ef98fd715f0d8))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.6\n([e59ffc6](https://redirect.github.com/renovatebot/github-action/commit/e59ffc6a1fb44dbffc090f8480f76105624d5ff7))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.102.8\n([234aba7](https://redirect.github.com/renovatebot/github-action/commit/234aba7af67c0ba7727c214a66d6105051d8480d))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.103.0\n([36d2aba](https://redirect.github.com/renovatebot/github-action/commit/36d2abac4eb00848538e78e35613de2d09e0480a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.0\n([4cea95b](https://redirect.github.com/renovatebot/github-action/commit/4cea95ba050ba5385ea7cc02596e422292dd5254))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.1\n([5274e54](https://redirect.github.com/renovatebot/github-action/commit/5274e542658d0cd09a34fd127ecb7f0950d9d224))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.2\n([2ef116f](https://redirect.github.com/renovatebot/github-action/commit/2ef116f6f2aad70822f53cbc8dd3f74ee7b26982))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.3\n([db16b25](https://redirect.github.com/renovatebot/github-action/commit/db16b25e58b044a36fa8a74191aaf8674667e478))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.104.4\n([a45eeac](https://redirect.github.com/renovatebot/github-action/commit/a45eeace37522319a6e7c9b47f5878f8fe8d6489))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: (in timezone UTC)\n\n- Branch creation\n  - \"on monday\"\n- Automerge\n  - At any time (no schedule defined)\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n👻 **Immortal**: This PR will be recreated if closed unmerged. Get\n[config\nhelp](https://redirect.github.com/renovatebot/renovate/discussions) if\nthat's undesired.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Mend\nRenovate](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My4xMTEuMCIsInVwZGF0ZWRJblZlciI6IjQzLjE1MC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-30T05:35:21+02:00",
          "tree_id": "e98f267ced7dfa0f93db92abdb49c98dfd371bec",
          "url": "https://github.com/slnc/ifchange/commit/4003569f14465c36c1b010438248f6f2cb5da315"
        },
        "date": 1777520256987,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3493689,
            "range": "± 18457",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 5360550,
            "range": "± 171326",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 29956612,
            "range": "± 1075340",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 47578522,
            "range": "± 461553",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f342f5924dd3a7d61b276c993b86f8df435cbc43",
          "message": "chore(deps): update all non-security dependencies (#43)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change | Pending |\n|---|---|---|---|---|\n|\n[SonarSource/sonarqube-scan-action](https://redirect.github.com/SonarSource/sonarqube-scan-action)\n([changelog](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/55e44800a8f495208cce6e4e82f5dedb45fcf0ef..c7ee0f9df90b7aa20e8dcf9695dcfe2e7da5b4f2))\n| action | digest | `55e4480` → `c7ee0f9` | |\n|\n[renovatebot/github-action](https://redirect.github.com/renovatebot/github-action)\n| action | patch | `v46.1.10` → `v46.1.12` | `v46.1.13` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/ff869c26e4a7acc3087d9d6c1163a80d3957bca7..1c95de87e1be659ee8db85275ffcf7b0ddaf320b))\n| action | digest | `ff869c2` → `1c95de8` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/3727a22028e8880324c709d651489ab3b1360e13..94cf54928bb4181ff5cb48ff27304503c9db4050))\n| action | digest | `3727a22` → `94cf549` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/f212ee79f9324d678b0d9270422b8800f0a3f002..c883cf2e122b1a3caf2f74c7aa62527685828fde))\n| action | digest | `f212ee7` → `c883cf2` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/11706c4fa057f0949e593c636f1d948f143d3eb1..d4c2ca7660e25ec0bb6ef4422b6c623acab477cd))\n| action | digest | `11706c4` → `d4c2ca7` | |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/9ed832ec9b05207a87c28eab74dbfb661ff969d3..f7e9f60cbb6fd0974db97e1044fe80439a7d98a5))\n| action | digest | `9ed832e` → `f7e9f60` | |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>renovatebot/github-action (renovatebot/github-action)</summary>\n\n###\n[`v46.1.12`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.12)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.11...v46.1.12)\n\n##### Bug Fixes\n\n- **deps:** update dependency\n[@&#8203;actions/core](https://redirect.github.com/actions/core) to\nv3.0.1\n([e8a6055](https://redirect.github.com/renovatebot/github-action/commit/e8a6055d6d0dc2ca2280adc33c7b58f3fb124d12))\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.11\n([317011a](https://redirect.github.com/renovatebot/github-action/commit/317011a6efe6b58d6056f58ca8b431233eb718ab))\n\n##### Miscellaneous Chores\n\n- **deps:** update dependency typescript-eslint to v8.59.0\n([8e3560a](https://redirect.github.com/renovatebot/github-action/commit/8e3560ab95742bc3c7aaec7c2dd1cc3d0d276ae5))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.142.0\n([0fee00d](https://redirect.github.com/renovatebot/github-action/commit/0fee00dc59830af7f44ea0636b251550e54f5003))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.142.1\n([c7cfc88](https://redirect.github.com/renovatebot/github-action/commit/c7cfc8825059e6fa4bd036b39a06e0477d58f403))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.144.0\n([39e7d09](https://redirect.github.com/renovatebot/github-action/commit/39e7d09c7b2ce19c8c834ffe556e9965c119c885))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.145.0\n([0bbd415](https://redirect.github.com/renovatebot/github-action/commit/0bbd415a9c49a001a228460b287027d8a3739e8a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.146.0\n([889c739](https://redirect.github.com/renovatebot/github-action/commit/889c7399cadabbf2657b872978141f03c9376640))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.147.0\n([7addce6](https://redirect.github.com/renovatebot/github-action/commit/7addce6f1e02342b36c2cb1a66db30345a2f109d))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.150.0\n([804ce16](https://redirect.github.com/renovatebot/github-action/commit/804ce1618f0c132478fd9c086d6febd009a723d0))\n\n###\n[`v46.1.11`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.11)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.10...v46.1.11)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.10\n([0b264d2](https://redirect.github.com/renovatebot/github-action/commit/0b264d27f89fd1eb163fba418b0dbfe86c041395))\n\n##### Miscellaneous Chores\n\n- **deps:** update actions/setup-node action to v6.4.0\n([951a814](https://redirect.github.com/renovatebot/github-action/commit/951a81487afda3e08b127fef395e29498fd9d06c))\n- **deps:** update dependency prettier to v3.8.3\n([a763833](https://redirect.github.com/renovatebot/github-action/commit/a763833a7d8da309d202e5fc67bc794efc7dc115))\n- **deps:** update dependency typescript-eslint to v8.58.2\n([119d68e](https://redirect.github.com/renovatebot/github-action/commit/119d68e8f6114a37630c0a3a61aac696d593aa52))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([f82feed](https://redirect.github.com/renovatebot/github-action/commit/f82feedb561edc809d01476b568febf8d256a51a))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.132.3\n([99cc805](https://redirect.github.com/renovatebot/github-action/commit/99cc805d7583672991fd1bfe2ce488eac225f8f0))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.133.0\n([a63d39b](https://redirect.github.com/renovatebot/github-action/commit/a63d39be1e95f4aaa26c72acbdf1c65673468261))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.135.0\n([955b000](https://redirect.github.com/renovatebot/github-action/commit/955b0000ba399f944be088f7a4409a4c8fc0b699))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.136.0\n([65167cd](https://redirect.github.com/renovatebot/github-action/commit/65167cdb3f2b345241ea67249f4b238934933bcc))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.136.1\n([7b21b86](https://redirect.github.com/renovatebot/github-action/commit/7b21b86cedd4f06966dca17027c7c67625e599cd))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.136.3\n([28a2dc0](https://redirect.github.com/renovatebot/github-action/commit/28a2dc07b816f5893a6496d35b4b02742445c3c4))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.137.0\n([b0cf2a4](https://redirect.github.com/renovatebot/github-action/commit/b0cf2a4c9132b74c57aae8fcbb45a6aacd414022))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.138.0\n([3700882](https://redirect.github.com/renovatebot/github-action/commit/3700882c45d6eda087650c0edc72ba408f5b7a2e))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.138.1\n([f516ce2](https://redirect.github.com/renovatebot/github-action/commit/f516ce2f9261f68e96edd1499111ddb5077033bb))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.138.3\n([3411548](https://redirect.github.com/renovatebot/github-action/commit/3411548d9c9b822a7473c563535824c03a19df6a))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.0\n([5201886](https://redirect.github.com/renovatebot/github-action/commit/5201886b45291615a4f0b21fd08181cfe8123ba6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.1\n([5856263](https://redirect.github.com/renovatebot/github-action/commit/5856263af8004562a8d50daf5c18b7a1a71920f8))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.4\n([999691d](https://redirect.github.com/renovatebot/github-action/commit/999691d7f3780b09bcd4e90e081bbce6b452ab25))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.5\n([f703a54](https://redirect.github.com/renovatebot/github-action/commit/f703a541309bb776377323a91735fa747d6efc39))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.6\n([3ba85c2](https://redirect.github.com/renovatebot/github-action/commit/3ba85c2979436007460d9ccf3f87bd0a4ef5e1ea))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.7\n([96f2f09](https://redirect.github.com/renovatebot/github-action/commit/96f2f09b9d7c8e6946b489aab3ca6f713a3bfbdc))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.139.8\n([5af45e5](https://redirect.github.com/renovatebot/github-action/commit/5af45e5b84b145ee1e14929493f8f054d922b441))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.140.0\n([01e9139](https://redirect.github.com/renovatebot/github-action/commit/01e91393d3c71fe95aec074539d4a0d9dc57068b))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.141.0\n([814a2a4](https://redirect.github.com/renovatebot/github-action/commit/814a2a47c0d23dad8d1f7302ade33a5bd966a8c7))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.141.1\n([fb3abdf](https://redirect.github.com/renovatebot/github-action/commit/fb3abdf7fa349ce51fd43364aa917f213f4d476c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.141.2\n([e3a9af5](https://redirect.github.com/renovatebot/github-action/commit/e3a9af55ac512810165fe6f630d88fa4b02f0dca))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.141.5\n([4f14b2f](https://redirect.github.com/renovatebot/github-action/commit/4f14b2f81dd01dfd999aed7088db38a5e8042f08))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.141.6\n([2357784](https://redirect.github.com/renovatebot/github-action/commit/23577849552717b7ae5cdbb05082e5cc99e25dce))\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: (in timezone UTC)\n\n- Branch creation\n  - \"on monday\"\n- Automerge\n  - At any time (no schedule defined)\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n👻 **Immortal**: This PR will be recreated if closed unmerged. Get\n[config\nhelp](https://redirect.github.com/renovatebot/renovate/discussions) if\nthat's undesired.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Mend\nRenovate](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My4xNjAuNyIsInVwZGF0ZWRJblZlciI6IjQzLjE2NC4wIiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-05T20:45:06+02:00",
          "tree_id": "633ee212f1327d3eb0ff706db2f496f9355652c3",
          "url": "https://github.com/slnc/ifchange/commit/f342f5924dd3a7d61b276c993b86f8df435cbc43"
        },
        "date": 1778006825341,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4344642,
            "range": "± 26230",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6895542,
            "range": "± 58888",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 36705910,
            "range": "± 1557485",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 52434378,
            "range": "± 766865",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5399fb14c3df89feae24f44c802e7d73c077f520",
          "message": "chore(deps): update all non-security dependencies (major) (#42)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change |\n|---|---|---|---|\n|\n[SonarSource/sonarqube-scan-action](https://redirect.github.com/SonarSource/sonarqube-scan-action)\n| action | major | `v7` → `v8` |\n|\n[googleapis/release-please-action](https://redirect.github.com/googleapis/release-please-action)\n| action | major | `v4` → `v5` |\n|\n[softprops/action-gh-release](https://redirect.github.com/softprops/action-gh-release)\n| action | major | `v2` → `v3` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>SonarSource/sonarqube-scan-action\n(SonarSource/sonarqube-scan-action)</summary>\n\n###\n[`v8`](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v8.0.0...v8.0.0)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v8.0.0...v8.0.0)\n\n###\n[`v8.0`](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v8.0.0...v8.0.0)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v8.0.0...v8.0.0)\n\n###\n[`v8.0.0`](https://redirect.github.com/SonarSource/sonarqube-scan-action/releases/tag/v8.0.0)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.2.1...v8.0.0)\n\n##### What's Changed\n\n##### Breaking change\n\n- SQSCANGHA-145 Set skipSignatureVerification default value to false by\n[@&#8203;antoine-vinot-sonarsource](https://redirect.github.com/antoine-vinot-sonarsource)\nin\n[#&#8203;241](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/241)\n\n**Full Changelog**:\n<https://github.com/SonarSource/sonarqube-scan-action/compare/v7...v8.0.0>\n\n###\n[`v7.2.1`](https://redirect.github.com/SonarSource/sonarqube-scan-action/releases/tag/v7.2.1)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.2...v7.2.1)\n\n##### What's Changed\n\n- SQSCANGHA-140 Set skipSignatureVerification default value to true to\navoid breaking change by\n[@&#8203;gmmcal](https://redirect.github.com/gmmcal) in\n[#&#8203;240](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/240)\n\n**Full Changelog**:\n<https://github.com/SonarSource/sonarqube-scan-action/compare/v7...v7.2.1>\n\n###\n[`v7.2.0`](https://redirect.github.com/SonarSource/sonarqube-scan-action/releases/tag/v7.2.0)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.2...v7.2)\n\n##### What's Changed\n\n- SQSCANGHA-133 Upgrade the Node version used in UTs + contribution\nguide by\n[@&#8203;claire-villard-sonarsource](https://redirect.github.com/claire-villard-sonarsource)\nin\n[#&#8203;226](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/226)\n- SC-45750 Migrate to dateless license headers by\n[@&#8203;claire-villard-sonarsource](https://redirect.github.com/claire-villard-sonarsource)\nin\n[#&#8203;229](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/229)\n- SQSCANGHA-134 Upgrade the libraries to latest version by\n[@&#8203;claire-villard-sonarsource](https://redirect.github.com/claire-villard-sonarsource)\nin\n[#&#8203;227](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/227)\n- SQSCANGHA-138 Update dist and add ci test by\n[@&#8203;antoine-vinot-sonarsource](https://redirect.github.com/antoine-vinot-sonarsource)\nin\n[#&#8203;233](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/233)\n- SQSCANGHA-140 Add OpenPGP signature verification for scanner downloads\nby\n[@&#8203;claire-villard-sonarsource](https://redirect.github.com/claire-villard-sonarsource)\nin\n[#&#8203;235](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/235)\n\n**Full Changelog**:\n<https://github.com/SonarSource/sonarqube-scan-action/compare/v7...v7.2.0>\n\n###\n[`v7.2`](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.1.0...v7.2)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.1.0...v7.2)\n\n###\n[`v7.1`](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.1.0...v7.1.0)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7.1.0...v7.1.0)\n\n###\n[`v7.1.0`](https://redirect.github.com/SonarSource/sonarqube-scan-action/releases/tag/v7.1.0)\n\n[Compare\nSource](https://redirect.github.com/SonarSource/sonarqube-scan-action/compare/v7...v7.1.0)\n\n##### What's Changed\n\n- SQSCANGHA-128 NO-JIRA Bump actions/cache from 4 to 5 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;219](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/219)\n- SQSCANGHA-130 Bump rollup from 4.50.1 to 4.59.0 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;221](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/221)\n- SQSCANGHA-131 Bump picomatch from 4.0.3 to 4.0.4 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;223](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/223)\n- SQSCANGHA-132 Upgrade Node to 24 by\n[@&#8203;claire-villard-sonarsource](https://redirect.github.com/claire-villard-sonarsource)\nin\n[#&#8203;224](https://redirect.github.com/SonarSource/sonarqube-scan-action/pull/224)\n\n**Full Changelog**:\n<https://github.com/SonarSource/sonarqube-scan-action/compare/v7...v7.1.0>\n\n</details>\n\n<details>\n<summary>googleapis/release-please-action\n(googleapis/release-please-action)</summary>\n\n###\n[`v5`](https://redirect.github.com/googleapis/release-please-action/compare/v5.0.0...v5.0.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v5.0.0...v5.0.0)\n\n###\n[`v5.0`](https://redirect.github.com/googleapis/release-please-action/compare/v5.0.0...v5.0.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v5.0.0...v5.0.0)\n\n###\n[`v5.0.0`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v5.0.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.4.1...v5.0.0)\n\n##### ⚠ BREAKING CHANGES\n\n- upgrade to node24\n([#&#8203;1188](https://redirect.github.com/googleapis/release-please-action/issues/1188))\n\n##### Features\n\n- upgrade to node24\n([#&#8203;1188](https://redirect.github.com/googleapis/release-please-action/issues/1188))\n([46dfc01](https://redirect.github.com/googleapis/release-please-action/commit/46dfc01594fc6ec99626bc73e479c52bdf554f88))\n\n##### Bug Fixes\n\n- bump release-please from 17.3.0 to 17.6.0\n([#&#8203;1199](https://redirect.github.com/googleapis/release-please-action/issues/1199))\n([f533c26](https://redirect.github.com/googleapis/release-please-action/commit/f533c26b74c2778db7edc90c96b63a7d08035765))\n\n###\n[`v4.4.1`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.4.1)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.4...v4.4.1)\n\n##### Bug Fixes\n\n- bump release-please from 17.1.3 to 17.3.0\n([#&#8203;1183](https://redirect.github.com/googleapis/release-please-action/issues/1183))\n([ef9c274](https://redirect.github.com/googleapis/release-please-action/commit/ef9c2745dbfb629d38ebfafa3347a81ab2d51409))\n\n###\n[`v4.4.0`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.4.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.4...v4.4)\n\n##### Features\n\n- add ability to select versioning-strategy and release-as\n([#&#8203;1121](https://redirect.github.com/googleapis/release-please-action/issues/1121))\n([ee0f5ba](https://redirect.github.com/googleapis/release-please-action/commit/ee0f5bae453367755be0c4340193531b3f538374))\n\n##### Bug Fixes\n\n- `changelog-host` parameter ignored when using manifest configuration\n([#&#8203;1151](https://redirect.github.com/googleapis/release-please-action/issues/1151))\n([535c413](https://redirect.github.com/googleapis/release-please-action/commit/535c4130c1030110bdacd1b3076f98c046c3a227))\n- bump mocha from 11.7.1 to 11.7.2 in the npm\\_and\\_yarn group across 1\ndirectory\n([#&#8203;1149](https://redirect.github.com/googleapis/release-please-action/issues/1149))\n([3612a99](https://redirect.github.com/googleapis/release-please-action/commit/3612a99d75bd7a010bb03d6e2ee3e2392b7392fb))\n- bump release-please from 17.1.2 to 17.1.3\n([#&#8203;1158](https://redirect.github.com/googleapis/release-please-action/issues/1158))\n([66fbfe9](https://redirect.github.com/googleapis/release-please-action/commit/66fbfe9439cb7a3660ecdc00d42573ef0bd00764))\n\n###\n[`v4.4`](https://redirect.github.com/googleapis/release-please-action/compare/v4.3.0...v4.4)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.3.0...v4.4)\n\n###\n[`v4.3`](https://redirect.github.com/googleapis/release-please-action/compare/v4.3.0...v4.3.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.3.0...v4.3.0)\n\n###\n[`v4.3.0`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.3.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.2.0...v4.3.0)\n\n##### Features\n\n- **deps:** update release-please to 17.1.2\n([f07192c](https://redirect.github.com/googleapis/release-please-action/commit/f07192c046b10acd083f4665a3d8b6350526f9df))\n\n###\n[`v4.2`](https://redirect.github.com/googleapis/release-please-action/compare/v4.2.0...v4.2.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.2.0...v4.2.0)\n\n###\n[`v4.2.0`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.2.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1.5...v4.2.0)\n\n##### Features\n\n- support for skip-labeling parameter for GitHub action\n([#&#8203;1066](https://redirect.github.com/googleapis/release-please-action/issues/1066))\n([fb7f385](https://redirect.github.com/googleapis/release-please-action/commit/fb7f385da2046f35c544011bc27c9f809122ad2c))\n\n###\n[`v4.1.5`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.1.5)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1.4...v4.1.5)\n\n##### Bug Fixes\n\n- **deps:** update release-please to 16.18.0\n([#&#8203;1083](https://redirect.github.com/googleapis/release-please-action/issues/1083))\n([aeb7f8d](https://redirect.github.com/googleapis/release-please-action/commit/aeb7f8d38402d856532f7c879373d8116956b1c8))\n\n###\n[`v4.1.4`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.1.4)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1.3...v4.1.4)\n\n##### Bug Fixes\n\n- bump braces from 3.0.2 to 3.0.3 in the npm\\_and\\_yarn group\n([#&#8203;1015](https://redirect.github.com/googleapis/release-please-action/issues/1015))\n([5ec1cbd](https://redirect.github.com/googleapis/release-please-action/commit/5ec1cbd9cb73c9d06637313bec5e3d6788e6a5f1))\n- bump release-please from 16.12.0 to 16.13.0\n([#&#8203;1030](https://redirect.github.com/googleapis/release-please-action/issues/1030))\n([caa0464](https://redirect.github.com/googleapis/release-please-action/commit/caa04646d19fbb163bb853d276be1877fd092e90))\n- bump release-please from 16.13.0 to 16.14.0\n([#&#8203;1032](https://redirect.github.com/googleapis/release-please-action/issues/1032))\n([b2a986c](https://redirect.github.com/googleapis/release-please-action/commit/b2a986c7e2f041e21005c546b2e03e9722e45bad))\n- **deps:** update release-please to 16.14.1\n([#&#8203;1036](https://redirect.github.com/googleapis/release-please-action/issues/1036))\n([2942e51](https://redirect.github.com/googleapis/release-please-action/commit/2942e515c92f10850cc891e4900fb50eb62eba74))\n\n###\n[`v4.1.3`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.1.3)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1.2...v4.1.3)\n\n##### Bug Fixes\n\n- correct log output when creating releases\n([#&#8203;933](https://redirect.github.com/googleapis/release-please-action/issues/933))\n([2725132](https://redirect.github.com/googleapis/release-please-action/commit/2725132cd346852cc752c1619637c864deda8440))\n\n###\n[`v4.1.2`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.1.2)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1.1...v4.1.2)\n\n##### Bug Fixes\n\n- bump release-please from 16.10.2 to 16.12.0\n([#&#8203;1005](https://redirect.github.com/googleapis/release-please-action/issues/1005))\n([cb03961](https://redirect.github.com/googleapis/release-please-action/commit/cb039616703c3396df96b9a92e81bab1c17cbaa7))\n\n###\n[`v4.1.1`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.1.1)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1...v4.1.1)\n\n##### Bug Fixes\n\n- bump release-please from 16.10.0 to 16.10.2\n([#&#8203;969](https://redirect.github.com/googleapis/release-please-action/issues/969))\n([aa764e0](https://redirect.github.com/googleapis/release-please-action/commit/aa764e0b5db70af7b607fa690b4d1799ceb802d6))\n- bump the npm\\_and\\_yarn group with 1 update\n([#&#8203;967](https://redirect.github.com/googleapis/release-please-action/issues/967))\n([ce529d4](https://redirect.github.com/googleapis/release-please-action/commit/ce529d4a4014c4760ec75d3ba6482e3b80d58862))\n\n###\n[`v4.1.0`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.1.0)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.1...v4.1)\n\n##### Features\n\n- add `changelog-host` input to `action.yml`\n([#&#8203;948](https://redirect.github.com/google-github-actions/release-please-action/issues/948))\n([863b06f](https://redirect.github.com/google-github-actions/release-please-action/commit/863b06fd1cd7f36c1d74d697ddebe3cf5be4c6b0))\n\n###\n[`v4.1`](https://redirect.github.com/googleapis/release-please-action/compare/v4.0.3...v4.1)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.0.3...v4.1)\n\n###\n[`v4.0.3`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.0.3)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.0.2...v4.0.3)\n\n##### Bug Fixes\n\n- bump release-please from 16.5.0 to 16.10.0\n([#&#8203;953](https://redirect.github.com/google-github-actions/release-please-action/issues/953))\n([d7e88e0](https://redirect.github.com/google-github-actions/release-please-action/commit/d7e88e0fd9e1a56d1075f610183d571f8347ff9b))\n\n###\n[`v4.0.2`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.0.2)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4.0.1...v4.0.2)\n\n##### Bug Fixes\n\n- bump release-please from 16.4.0 to 16.5.0\n([#&#8203;905](https://redirect.github.com/google-github-actions/release-please-action/issues/905))\n([df71963](https://redirect.github.com/google-github-actions/release-please-action/commit/df719633a752e335dfde3e62e037315a25ecf6fc))\n- log release-please version\n([#&#8203;910](https://redirect.github.com/google-github-actions/release-please-action/issues/910))\n([2a496d1](https://redirect.github.com/google-github-actions/release-please-action/commit/2a496d1db5f8860ae46f6066f5dcb73490a99d02)),\ncloses\n[#&#8203;325](https://redirect.github.com/google-github-actions/release-please-action/issues/325)\n\n###\n[`v4.0.1`](https://redirect.github.com/googleapis/release-please-action/releases/tag/v4.0.1)\n\n[Compare\nSource](https://redirect.github.com/googleapis/release-please-action/compare/v4...v4.0.1)\n\n##### Bug Fixes\n\n- bump release-please from 16.3.1 to 16.4.0\n([#&#8203;897](https://redirect.github.com/google-github-actions/release-please-action/issues/897))\n([2463dad](https://redirect.github.com/google-github-actions/release-please-action/commit/2463dad9b20163a40708db720b9fde34c2a2ab0e))\n\n</details>\n\n<details>\n<summary>softprops/action-gh-release\n(softprops/action-gh-release)</summary>\n\n###\n[`v3`](https://redirect.github.com/softprops/action-gh-release/compare/v3.0.0...v3.0.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v3.0.0...v3.0.0)\n\n###\n[`v3.0.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v3.0.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.6.2...v3.0.0)\n\n`3.0.0` is a major release that moves the action runtime from Node 20 to\nNode 24.\nUse `v3` on GitHub-hosted runners and self-hosted fleets that already\nsupport the\nNode 24 Actions runtime. If you still need the last Node 20-compatible\nline, stay on\n`v2.6.2`.\n\n#### What's Changed\n\n##### Other Changes 🔄\n\n- Move the action runtime and bundle target to Node 24\n- Update `@types/node` to the Node 24 line and allow future Dependabot\nupdates\n- Keep the floating major tag on `v3`; `v2` remains pinned to the latest\n`2.x` release\n\n###\n[`v2.6.2`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.6.2)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.6.1...v2.6.2)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Other Changes 🔄\n\n- chore(deps): bump picomatch from 4.0.3 to 4.0.4 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;775](https://redirect.github.com/softprops/action-gh-release/pull/775)\n- chore(deps): bump brace-expansion from 5.0.4 to 5.0.5 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;777](https://redirect.github.com/softprops/action-gh-release/pull/777)\n- chore(deps): bump vite from 8.0.0 to 8.0.5 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;781](https://redirect.github.com/softprops/action-gh-release/pull/781)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.6.2>\n\n###\n[`v2.6.1`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.6.1)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.6.0...v2.6.1)\n\n`2.6.1` is a patch release focused on restoring linked discussion thread\ncreation when\n`discussion_category_name` is set. It fixes `#764`, where the\ndraft-first publish flow\nstopped carrying the discussion category through the final publish step.\n\nIf you still hit an issue after upgrading, please open a report with the\nbug template and include a minimal repro or sanitized workflow snippet\nwhere possible.\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: preserve discussion category on publish by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;765](https://redirect.github.com/softprops/action-gh-release/pull/765)\n\n###\n[`v2.6.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.6.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.5.3...v2.6.0)\n\n`2.6.0` is a minor release centered on `previous_tag` support for\n`generate_release_notes`,\nwhich lets workflows pin GitHub's comparison base explicitly instead of\nrelying on the default range.\nIt also includes the recent concurrent asset upload recovery fix, a\n`working_directory` docs sync,\na checked-bundle freshness guard for maintainers, and clearer\nimmutable-prerelease guidance where\nGitHub platform behavior imposes constraints on how prerelease asset\nuploads can be published.\n\nIf you still hit an issue after upgrading, please open a report with the\nbug template and include a minimal repro or sanitized workflow snippet\nwhere possible.\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat: support previous\\_tag for generate\\_release\\_notes by\n[@&#8203;pocesar](https://redirect.github.com/pocesar) in\n[#&#8203;372](https://redirect.github.com/softprops/action-gh-release/pull/372)\n\n##### Bug fixes 🐛\n\n- fix: recover concurrent asset metadata 404s by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;760](https://redirect.github.com/softprops/action-gh-release/pull/760)\n\n##### Other Changes 🔄\n\n- docs: clarify reused draft release behavior by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;759](https://redirect.github.com/softprops/action-gh-release/pull/759)\n- docs: clarify working\\_directory input by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;761](https://redirect.github.com/softprops/action-gh-release/pull/761)\n- ci: verify dist bundle freshness by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;762](https://redirect.github.com/softprops/action-gh-release/pull/762)\n- fix: clarify immutable prerelease uploads by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;763](https://redirect.github.com/softprops/action-gh-release/pull/763)\n\n###\n[`v2.5.3`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.5.3)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.5.2...v2.5.3)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n`2.5.3` is a patch release focused on the remaining path-handling and\nrelease-selection bugs uncovered after `2.5.2`.\nIt fixes `#639`, `#571`, `#280`, `#614`, `#311`, `#403`, and `#368`.\nIt also adds documentation clarifications for `#541`, `#645`, `#542`,\n`#393`, and `#411`,\nwhere the current behavior is either usage-sensitive or constrained by\nGitHub platform limits rather than an action-side runtime bug.\n\nIf you still hit an issue after upgrading, please open a report with the\nbug template and include a minimal repro or sanitized workflow snippet\nwhere possible.\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: prefer token input over GITHUB\\_TOKEN by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;751](https://redirect.github.com/softprops/action-gh-release/pull/751)\n- fix: clean up duplicate drafts after canonicalization by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;753](https://redirect.github.com/softprops/action-gh-release/pull/753)\n- fix: support Windows-style file globs by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;754](https://redirect.github.com/softprops/action-gh-release/pull/754)\n- fix: normalize refs-tag inputs by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;755](https://redirect.github.com/softprops/action-gh-release/pull/755)\n- fix: expand tilde file paths by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;756](https://redirect.github.com/softprops/action-gh-release/pull/756)\n\n##### Other Changes 🔄\n\n- docs: clarify token precedence by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;752](https://redirect.github.com/softprops/action-gh-release/pull/752)\n- docs: clarify GitHub release limits by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;758](https://redirect.github.com/softprops/action-gh-release/pull/758)\n- documentation clarifications for empty-token handling,\n`preserve_order`, and special-character asset filename behavior\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.5.3>\n\n###\n[`v2.5.2`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.5.2)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.5.1...v2.5.2)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n`2.5.2` is a patch release focused on the remaining release-creation and\nprerelease regressions in the `2.5.x` bug-fix cycle.\nIt fixes `#705`, fixes `#708`, fixes `#740`, fixes `#741`, and fixes\n`#722`.\nRegression testing covers the shared-tag race, prerelease event\nbehavior, dotfile asset labels,\nsame-filename concurrent uploads, and blocked-tag cleanup behavior.\n\nIf you still hit an issue after upgrading, please open a report with the\nbug template and include a minimal repro or sanitized workflow snippet\nwhere possible.\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: canonicalize releases after concurrent create by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;746](https://redirect.github.com/softprops/action-gh-release/pull/746)\n- fix: preserve prereleased events for prereleases by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;748](https://redirect.github.com/softprops/action-gh-release/pull/748)\n- fix: restore dotfile asset labels by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;749](https://redirect.github.com/softprops/action-gh-release/pull/749)\n- fix: handle upload already\\_exists races across workflows by\n[@&#8203;api2062](https://redirect.github.com/api2062) in\n[#&#8203;745](https://redirect.github.com/softprops/action-gh-release/pull/745)\n- fix: clean up orphan drafts when tag creation is blocked by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;750](https://redirect.github.com/softprops/action-gh-release/pull/750)\n\n#### New Contributors\n\n- [@&#8203;api2062](https://redirect.github.com/api2062) made their\nfirst contribution in\n[#&#8203;745](https://redirect.github.com/softprops/action-gh-release/pull/745)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.5.2>\n\n###\n[`v2.5.1`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.5.1)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.5.0...v2.5.1)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n`2.5.1` is a patch release focused on regressions introduced in `2.5.0`\nand on release lookup reliability.\nIt fixes `#713`, addresses `#703`, and fixes `#724`. Regression testing\nshows that\ncurrent `master` no longer reproduces the finalize-race behavior\nreported in `#704` and `#709`.\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: fetch correct asset URL after finalization; test; some\nrefactoring by\n[@&#8203;pzhlkj6612](https://redirect.github.com/pzhlkj6612) in\n[#&#8203;738](https://redirect.github.com/softprops/action-gh-release/pull/738)\n- fix: release marked as 'latest' despite make\\_latest: false by\n[@&#8203;Boshen](https://redirect.github.com/Boshen) in\n[#&#8203;715](https://redirect.github.com/softprops/action-gh-release/pull/715)\n- fix: use getReleaseByTag API instead of iterating all releases by\n[@&#8203;kim-em](https://redirect.github.com/kim-em) in\n[#&#8203;725](https://redirect.github.com/softprops/action-gh-release/pull/725)\n\n##### Other Changes 🔄\n\n- dependency updates, including the ESM/runtime compatibility refresh in\n[#&#8203;731](https://redirect.github.com/softprops/action-gh-release/pull/731)\n\n#### New Contributors\n\n- [@&#8203;autarch](https://redirect.github.com/autarch) made their\nfirst contribution in\n[#&#8203;716](https://redirect.github.com/softprops/action-gh-release/pull/716)\n- [@&#8203;pzhlkj6612](https://redirect.github.com/pzhlkj6612) made\ntheir first contribution in\n[#&#8203;738](https://redirect.github.com/softprops/action-gh-release/pull/738)\n- [@&#8203;Boshen](https://redirect.github.com/Boshen) made their first\ncontribution in\n[#&#8203;715](https://redirect.github.com/softprops/action-gh-release/pull/715)\n- [@&#8203;kim-em](https://redirect.github.com/kim-em) made their first\ncontribution in\n[#&#8203;725](https://redirect.github.com/softprops/action-gh-release/pull/725)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.5.1>\n\n###\n[`v2.5.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.5.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.4.2...v2.5.0)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat: mark release as draft until all artifacts are uploaded by\n[@&#8203;dumbmoron](https://redirect.github.com/dumbmoron) in\n[#&#8203;692](https://redirect.github.com/softprops/action-gh-release/pull/692)\n\n##### Other Changes 🔄\n\n- chore(deps): bump the npm group across 1 directory with 5 updates by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;697](https://redirect.github.com/softprops/action-gh-release/pull/697)\n- chore(deps): bump actions/checkout from 5.0.0 to 5.0.1 in the\ngithub-actions group by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;689](https://redirect.github.com/softprops/action-gh-release/pull/689)\n\n#### New Contributors\n\n- [@&#8203;dumbmoron](https://redirect.github.com/dumbmoron) made their\nfirst contribution in\n[#&#8203;692](https://redirect.github.com/softprops/action-gh-release/pull/692)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.4.2...v2.5.0>\n\n###\n[`v2.4.2`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.4.2)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.4.1...v2.4.2)\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat: Ensure generated release notes cannot be over 125000 characters\nby [@&#8203;BeryJu](https://redirect.github.com/BeryJu) in\n[#&#8203;684](https://redirect.github.com/softprops/action-gh-release/pull/684)\n\n##### Other Changes 🔄\n\n- dependency updates\n\n#### New Contributors\n\n- [@&#8203;BeryJu](https://redirect.github.com/BeryJu) made their first\ncontribution in\n[#&#8203;684](https://redirect.github.com/softprops/action-gh-release/pull/684)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.4.1...v2.4.2>\n\n###\n[`v2.4.1`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.4.1)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.4.0...v2.4.1)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Other Changes 🔄\n\n- fix(util): support brace expansion globs containing commas in\nparseInputFiles by\n[@&#8203;Copilot](https://redirect.github.com/Copilot) in\n[#&#8203;672](https://redirect.github.com/softprops/action-gh-release/pull/672)\n- fix: gracefully fallback to body when body\\_path cannot be read by\n[@&#8203;Copilot](https://redirect.github.com/Copilot) in\n[#&#8203;671](https://redirect.github.com/softprops/action-gh-release/pull/671)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.4.1>\n\n###\n[`v2.4.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.4.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.3.4...v2.4.0)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat(action): respect working\\_directory for files globs by\n[@&#8203;stephenway](https://redirect.github.com/stephenway) in\n[#&#8203;667](https://redirect.github.com/softprops/action-gh-release/pull/667)\n\n##### Other Changes 🔄\n\n- chore(deps): bump the npm group with 2 updates by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;668](https://redirect.github.com/softprops/action-gh-release/pull/668)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.3.4...v2.4.0>\n\n###\n[`v2.3.4`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.3.4)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.3.3...v2.3.4)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix(action): handle 422 already\\_exists race condition by\n[@&#8203;stephenway](https://redirect.github.com/stephenway) in\n[#&#8203;665](https://redirect.github.com/softprops/action-gh-release/pull/665)\n\n##### Other Changes 🔄\n\n- chore(deps): bump actions/setup-node from 4.4.0 to 5.0.0 in the\ngithub-actions group by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;656](https://redirect.github.com/softprops/action-gh-release/pull/656)\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from\n20.19.11 to 20.19.13 in the npm group by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;655](https://redirect.github.com/softprops/action-gh-release/pull/655)\n- chore(deps): bump vite from 7.0.0 to 7.1.5 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;657](https://redirect.github.com/softprops/action-gh-release/pull/657)\n- chore(deps): bump the npm group across 1 directory with 2 updates by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;662](https://redirect.github.com/softprops/action-gh-release/pull/662)\n- chore(deps): bump the npm group with 3 updates by\n[@&#8203;dependabot](https://redirect.github.com/dependabot)\\[bot] in\n[#&#8203;666](https://redirect.github.com/softprops/action-gh-release/pull/666)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.3.4>\n\n###\n[`v2.3.3`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.3.3)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.3.2...v2.3.3)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat: add input option `overwrite_files` by\n[@&#8203;asfernandes](https://redirect.github.com/asfernandes) in\n[#&#8203;343](https://redirect.github.com/softprops/action-gh-release/pull/343)\n\n##### Other Changes 🔄\n\n- dependency updates\n\n#### New Contributors\n\n- [@&#8203;asfernandes](https://redirect.github.com/asfernandes) made\ntheir first contribution in\n[#&#8203;343](https://redirect.github.com/softprops/action-gh-release/pull/343)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.3.3>\n\n###\n[`v2.3.2`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.3.2)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.3.1...v2.3.2)\n\n- fix: revert fs `readableWebStream` change\n\n###\n[`v2.3.1`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.3.1)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.3.0...v2.3.1)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: fix file closing issue by\n[@&#8203;WailGree](https://redirect.github.com/WailGree) in\n[#&#8203;629](https://redirect.github.com/softprops/action-gh-release/pull/629)\n\n#### New Contributors\n\n- [@&#8203;WailGree](https://redirect.github.com/WailGree) made their\nfirst contribution in\n[#&#8203;629](https://redirect.github.com/softprops/action-gh-release/pull/629)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.3.0...v2.3.1>\n\n###\n[`v2.3.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.3.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.2.2...v2.3.0)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n- Migrate from jest to vitest\n- Replace `mime` with `mime-types`\n- Bump to use node 24\n- Dependency updates\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.2.2...v2.3.0>\n\n###\n[`v2.2.2`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.2.2)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.2.1...v2.2.2)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: updating release draft status from true to false by\n[@&#8203;galargh](https://redirect.github.com/galargh) in\n[#&#8203;316](https://redirect.github.com/softprops/action-gh-release/pull/316)\n\n##### Other Changes 🔄\n\n- chore: simplify ref\\_type test by\n[@&#8203;steinybot](https://redirect.github.com/steinybot) in\n[#&#8203;598](https://redirect.github.com/softprops/action-gh-release/pull/598)\n- fix(docs): clarify the default for tag\\_name by\n[@&#8203;muzimuzhi](https://redirect.github.com/muzimuzhi) in\n[#&#8203;599](https://redirect.github.com/softprops/action-gh-release/pull/599)\n- test(release): add unit tests when searching for a release by\n[@&#8203;rwaskiewicz](https://redirect.github.com/rwaskiewicz) in\n[#&#8203;603](https://redirect.github.com/softprops/action-gh-release/pull/603)\n- dependency updates\n\n#### New Contributors\n\n- [@&#8203;steinybot](https://redirect.github.com/steinybot) made their\nfirst contribution in\n[#&#8203;598](https://redirect.github.com/softprops/action-gh-release/pull/598)\n- [@&#8203;muzimuzhi](https://redirect.github.com/muzimuzhi) made their\nfirst contribution in\n[#&#8203;599](https://redirect.github.com/softprops/action-gh-release/pull/599)\n- [@&#8203;galargh](https://redirect.github.com/galargh) made their\nfirst contribution in\n[#&#8203;316](https://redirect.github.com/softprops/action-gh-release/pull/316)\n- [@&#8203;rwaskiewicz](https://redirect.github.com/rwaskiewicz) made\ntheir first contribution in\n[#&#8203;603](https://redirect.github.com/softprops/action-gh-release/pull/603)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.2.1...v2.2.2>\n\n###\n[`v2.2.1`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.2.1)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.2.0...v2.2.1)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- fix: big file uploads by\n[@&#8203;xen0n](https://redirect.github.com/xen0n) in\n[#&#8203;562](https://redirect.github.com/softprops/action-gh-release/pull/562)\n\n##### Other Changes 🔄\n\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from\n22.10.1 to 22.10.2 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;559](https://redirect.github.com/softprops/action-gh-release/pull/559)\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from\n22.10.2 to 22.10.5 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;569](https://redirect.github.com/softprops/action-gh-release/pull/569)\n- chore: update error and warning messages for not matching files in\nfiles field by [@&#8203;ytimocin](https://redirect.github.com/ytimocin)\nin\n[#&#8203;568](https://redirect.github.com/softprops/action-gh-release/pull/568)\n\n#### New Contributors\n\n- [@&#8203;ytimocin](https://redirect.github.com/ytimocin) made their\nfirst contribution in\n[#&#8203;568](https://redirect.github.com/softprops/action-gh-release/pull/568)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.2.0...v2.2.1>\n\n###\n[`v2.2.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.2.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.1.0...v2.2.0)\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat: read the release assets asynchronously by\n[@&#8203;xen0n](https://redirect.github.com/xen0n) in\n[#&#8203;552](https://redirect.github.com/softprops/action-gh-release/pull/552)\n\n##### Bug fixes 🐛\n\n- fix(docs): clarify the default for tag\\_name by\n[@&#8203;alexeagle](https://redirect.github.com/alexeagle) in\n[#&#8203;544](https://redirect.github.com/softprops/action-gh-release/pull/544)\n\n##### Other Changes 🔄\n\n- chore(deps): bump typescript from 5.6.3 to 5.7.2 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;548](https://redirect.github.com/softprops/action-gh-release/pull/548)\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from 22.9.0\nto 22.9.4 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;547](https://redirect.github.com/softprops/action-gh-release/pull/547)\n- chore(deps): bump cross-spawn from 7.0.3 to 7.0.6 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;545](https://redirect.github.com/softprops/action-gh-release/pull/545)\n- chore(deps): bump\n[@&#8203;vercel/ncc](https://redirect.github.com/vercel/ncc) from 0.38.2\nto 0.38.3 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;543](https://redirect.github.com/softprops/action-gh-release/pull/543)\n- chore(deps): bump prettier from 3.3.3 to 3.4.1 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;550](https://redirect.github.com/softprops/action-gh-release/pull/550)\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from 22.9.4\nto 22.10.1 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;551](https://redirect.github.com/softprops/action-gh-release/pull/551)\n- chore(deps): bump prettier from 3.4.1 to 3.4.2 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;554](https://redirect.github.com/softprops/action-gh-release/pull/554)\n\n#### New Contributors\n\n- [@&#8203;alexeagle](https://redirect.github.com/alexeagle) made their\nfirst contribution in\n[#&#8203;544](https://redirect.github.com/softprops/action-gh-release/pull/544)\n- [@&#8203;xen0n](https://redirect.github.com/xen0n) made their first\ncontribution in\n[#&#8203;552](https://redirect.github.com/softprops/action-gh-release/pull/552)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.1.0...v2.2.0>\n\n###\n[`v2.1.0`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.1.0)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.9...v2.1.0)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Exciting New Features 🎉\n\n- feat: add support for release assets with multiple spaces within the\nname by [@&#8203;dukhine](https://redirect.github.com/dukhine) in\n[#&#8203;518](https://redirect.github.com/softprops/action-gh-release/pull/518)\n- feat: preserve upload order by\n[@&#8203;richarddd](https://redirect.github.com/richarddd) in\n[#&#8203;500](https://redirect.github.com/softprops/action-gh-release/pull/500)\n\n##### Other Changes 🔄\n\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from 22.8.2\nto 22.8.7 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;539](https://redirect.github.com/softprops/action-gh-release/pull/539)\n\n#### New Contributors\n\n- [@&#8203;dukhine](https://redirect.github.com/dukhine) made their\nfirst contribution in\n[#&#8203;518](https://redirect.github.com/softprops/action-gh-release/pull/518)\n- [@&#8203;richarddd](https://redirect.github.com/richarddd) made their\nfirst contribution in\n[#&#8203;500](https://redirect.github.com/softprops/action-gh-release/pull/500)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.1.0>\n\n###\n[`v2.0.9`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.9)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.8...v2.0.9)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n- maintenance release with updated dependencies\n\n#### New Contributors\n\n- [@&#8203;kbakdev](https://redirect.github.com/kbakdev) made their\nfirst contribution in\n[#&#8203;521](https://redirect.github.com/softprops/action-gh-release/pull/521)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.0.9>\n\n###\n[`v2.0.8`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.8)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.7...v2.0.8)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Other Changes 🔄\n\n- chore(deps): bump prettier from 2.8.0 to 3.3.3 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;480](https://redirect.github.com/softprops/action-gh-release/pull/480)\n- chore(deps): bump\n[@&#8203;types/node](https://redirect.github.com/types/node) from\n20.14.9 to 20.14.11 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;483](https://redirect.github.com/softprops/action-gh-release/pull/483)\n- chore(deps): bump\n[@&#8203;octokit/plugin-throttling](https://redirect.github.com/octokit/plugin-throttling)\nfrom 9.3.0 to 9.3.1 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;484](https://redirect.github.com/softprops/action-gh-release/pull/484)\n- chore(deps): bump glob from 10.4.2 to 11.0.0 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;477](https://redirect.github.com/softprops/action-gh-release/pull/477)\n- refactor: write jest config in ts by\n[@&#8203;chenrui333](https://redirect.github.com/chenrui333) in\n[#&#8203;485](https://redirect.github.com/softprops/action-gh-release/pull/485)\n- chore(deps): bump\n[@&#8203;actions/github](https://redirect.github.com/actions/github)\nfrom 5.1.1 to 6.0.0 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;470](https://redirect.github.com/softprops/action-gh-release/pull/470)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2...v2.0.8>\n\n###\n[`v2.0.7`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.7)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.6...v2.0.7)\n\n<!-- Release notes generated using configuration in .github/release.yml\nat master -->\n\n#### What's Changed\n\n##### Bug fixes 🐛\n\n- Fix missing update release body by\n[@&#8203;FirelightFlagboy](https://redirect.github.com/FirelightFlagboy)\nin\n[#&#8203;365](https://redirect.github.com/softprops/action-gh-release/pull/365)\n\n##### Other Changes 🔄\n\n- Bump\n[@&#8203;octokit/plugin-retry](https://redirect.github.com/octokit/plugin-retry)\nfrom 4.0.3 to 7.1.1 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;443](https://redirect.github.com/softprops/action-gh-release/pull/443)\n- Bump typescript from 4.9.5 to 5.5.2 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;467](https://redirect.github.com/softprops/action-gh-release/pull/467)\n- Bump [@&#8203;types/node](https://redirect.github.com/types/node) from\n20.14.6 to 20.14.8 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;469](https://redirect.github.com/softprops/action-gh-release/pull/469)\n- Bump [@&#8203;types/node](https://redirect.github.com/types/node) from\n20.14.8 to 20.14.9 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;473](https://redirect.github.com/softprops/action-gh-release/pull/473)\n- Bump typescript from 5.5.2 to 5.5.3 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;472](https://redirect.github.com/softprops/action-gh-release/pull/472)\n- Bump ts-jest from 29.1.5 to 29.2.2 by\n[@&#8203;dependabot](https://redirect.github.com/dependabot) in\n[#&#8203;479](https://redirect.github.com/softprops/action-gh-release/pull/479)\n- docs: document that existing releases are updated by\n[@&#8203;jvanbruegge](https://redirect.github.com/jvanbruegge) in\n[#&#8203;474](https://redirect.github.com/softprops/action-gh-release/pull/474)\n\n#### New Contributors\n\n- [@&#8203;jvanbruegge](https://redirect.github.com/jvanbruegge) made\ntheir first contribution in\n[#&#8203;474](https://redirect.github.com/softprops/action-gh-release/pull/474)\n-\n[@&#8203;FirelightFlagboy](https://redirect.github.com/FirelightFlagboy)\nmade their first contribution in\n[#&#8203;365](https://redirect.github.com/softprops/action-gh-release/pull/365)\n\n**Full Changelog**:\n<https://github.com/softprops/action-gh-release/compare/v2.0.6...v2.0.7>\n\n###\n[`v2.0.6`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.6)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.5...v2.0.6)\n\nmaintenance release with updated dependencies\n\n###\n[`v2.0.5`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.5)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.4...v2.0.5)\n\n- Factor in file names with spaces when upserting files\n[#&#8203;446](https://redirect.github.com/softprops/action-gh-release/pull/446)\nvia [@&#8203;MystiPanda](https://redirect.github.com/MystiPanda)\n- Improvements to error handling\n[#&#8203;449](https://redirect.github.com/softprops/action-gh-release/pull/449)\nvia [@&#8203;till](https://redirect.github.com/till)\n\n###\n[`v2.0.4`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.4)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.3...v2.0.4)\n\n- Minor follow up to\n[#&#8203;417](https://redirect.github.com/softprops/action-gh-release/pull/417).\n[#&#8203;425](https://redirect.github.com/softprops/action-gh-release/pull/425)\n\n###\n[`v2.0.3`](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.2...v2.0.3)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.2...v2.0.3)\n\n###\n[`v2.0.2`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.2)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2.0.1...v2.0.2)\n\n- Revisit approach to\n[#&#8203;384](https://redirect.github.com/softprops/action-gh-release/pull/384)\nmaking unresolved pattern failures opt-in\n[#&#8203;417](https://redirect.github.com/softprops/action-gh-release/pull/417)\n\n###\n[`v2.0.1`](https://redirect.github.com/softprops/action-gh-release/releases/tag/v2.0.1)\n\n[Compare\nSource](https://redirect.github.com/softprops/action-gh-release/compare/v2...v2.0.1)\n\n- Add support for make\\_latest property\n[#&#8203;304](https://redirect.github.com/softprops/action-gh-release/pull/304)\nvia [@&#8203;samueljseay](https://redirect.github.com/samueljseay)\n- Fail run if files setting contains invalid patterns\n[#&#8203;384](https://redirect.github.com/softprops/action-gh-release/pull/384)\nvia [@&#8203;rpdelaney](https://redirect.github.com/rpdelaney)\n- Add support for proxy env variables (don't use node-fetch)\n[#&#8203;386/](https://redirect.github.com/softprops/action-gh-release/pull/386/)\nvia [@&#8203;timor-raiman](https://redirect.github.com/timor-raiman)\n- Suppress confusing warning when input\\_files is empty\n[#&#8203;389](https://redirect.github.com/softprops/action-gh-release/pull/389)\nvia [@&#8203;Drowze](https://redirect.github.com/Drowze)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: (in timezone UTC)\n\n- Branch creation\n  - \"on monday\"\n- Automerge\n  - At any time (no schedule defined)\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n👻 **Immortal**: This PR will be recreated if closed unmerged. Get\n[config\nhelp](https://redirect.github.com/renovatebot/renovate/discussions) if\nthat's undesired.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Mend\nRenovate](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My4xMzIuMSIsInVwZGF0ZWRJblZlciI6IjQzLjE2MC43IiwidGFyZ2V0QnJhbmNoIjoibWFpbiIsImxhYmVscyI6W119-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-05T20:57:16+02:00",
          "tree_id": "cc1439d2840a68625f64a68892db2f31edf17433",
          "url": "https://github.com/slnc/ifchange/commit/5399fb14c3df89feae24f44c802e7d73c077f520"
        },
        "date": 1778007542305,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 3492586,
            "range": "± 64953",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 5352871,
            "range": "± 38646",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 28110436,
            "range": "± 933839",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 45520755,
            "range": "± 445471",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "264827662+slnc-renovate-ci[bot]@users.noreply.github.com",
            "name": "slnc-renovate-ci[bot]",
            "username": "slnc-renovate-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b95f0c8037291d6d6c073460e86bceb5081fac3",
          "message": "chore(deps): update all non-security dependencies (#44)\n\nThis PR contains the following updates:\n\n| Package | Type | Update | Change |\n|---|---|---|---|\n|\n[actions/create-github-app-token](https://redirect.github.com/actions/create-github-app-token)\n([changelog](https://redirect.github.com/actions/create-github-app-token/compare/1b10c78c7865c340bc4f6099eb2f838309f1e8c3..bcd2ba49218906704ab6c1aa796996da409d3eb1))\n| action | digest | `1b10c78` → `bcd2ba4` |\n|\n[renovatebot/github-action](https://redirect.github.com/renovatebot/github-action)\n| action | patch | `v46.1.12` → `v46.1.14` |\n|\n[sigstore/cosign-installer](https://redirect.github.com/sigstore/cosign-installer)\n| action | patch | `v4.1.1` → `v4.1.2` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/1c95de87e1be659ee8db85275ffcf7b0ddaf320b..db5f2b269964e5b65b66c95c5abab5f79a135fc3))\n| action | digest | `1c95de8` → `db5f2b2` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/94cf54928bb4181ff5cb48ff27304503c9db4050..f7ae479469b4c4fb5c1818615346605e61b5dc27))\n| action | digest | `94cf549` → `f7ae479` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/c883cf2e122b1a3caf2f74c7aa62527685828fde..71c7db9362a5b16f046b8df34ae2c654b1575139))\n| action | digest | `c883cf2` → `71c7db9` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/d4c2ca7660e25ec0bb6ef4422b6c623acab477cd..d6b20027cf9855c62d123264e9b666cc5dd73b19))\n| action | digest | `d4c2ca7` → `d6b2002` |\n|\n[taiki-e/install-action](https://redirect.github.com/taiki-e/install-action)\n([changelog](https://redirect.github.com/taiki-e/install-action/compare/f7e9f60cbb6fd0974db97e1044fe80439a7d98a5..ea85faa6acd705ad6d40586db99f1a70b09c2929))\n| action | digest | `f7e9f60` → `ea85faa` |\n\n---\n\n> [!WARNING]\n> Some dependencies could not be looked up. Check the warning logs for\nmore information.\n\n---\n\n### Release Notes\n\n<details>\n<summary>renovatebot/github-action (renovatebot/github-action)</summary>\n\n###\n[`v46.1.14`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.14)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.13...v46.1.14)\n\n##### Documentation\n\n- Revise Fine-grained Personal Access Tokens section\n([#&#8203;1030](https://redirect.github.com/renovatebot/github-action/issues/1030))\n([fef7882](https://redirect.github.com/renovatebot/github-action/commit/fef7882e2c7377fd438898944dd399f6d7be271e))\n- set `RENOVATE_PLATFORM_COMMIT` to `enabled`\n([#&#8203;1029](https://redirect.github.com/renovatebot/github-action/issues/1029))\n([9d07dfa](https://redirect.github.com/renovatebot/github-action/commit/9d07dfa4f7a8ee66518d1b08f33ae9814d244dda))\n- update references to renovatebot/github-action to v46.1.13\n([9a41b99](https://redirect.github.com/renovatebot/github-action/commit/9a41b990c5902829643afc33fd4d5a6f536b36cf))\n\n##### Miscellaneous Chores\n\n- cleanup\n([8abcd0e](https://redirect.github.com/renovatebot/github-action/commit/8abcd0e9f084bb83d0df844052c4b31b39f60ef2))\n- **deps:** update commitlint monorepo to v20.5.3\n([a4e124d](https://redirect.github.com/renovatebot/github-action/commit/a4e124de37c0841853e802687889d3ddb86e4f54))\n- **deps:** update dependency globals to v17.6.0\n([d5ca6d4](https://redirect.github.com/renovatebot/github-action/commit/d5ca6d4cf379c9db32366fd12dfb619d7baffa36))\n- **deps:** update dependency typescript-eslint to v8.59.1\n([1dd2319](https://redirect.github.com/renovatebot/github-action/commit/1dd2319cb41680fb027ac17b8703e7fdb3f35e35))\n- enable pnpm `minimumReleaseAge`\n([00a8327](https://redirect.github.com/renovatebot/github-action/commit/00a83273b5ee2973abb913a7bc81e3ee6cbcebd2))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([f6821a2](https://redirect.github.com/renovatebot/github-action/commit/f6821a23ac87497dc0625f5c60001d5eb85d23ef))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.7\n([1189f69](https://redirect.github.com/renovatebot/github-action/commit/1189f69d1f9835d1c90b27a3b0f679e21f0e1d20))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.162.0\n([43d0a48](https://redirect.github.com/renovatebot/github-action/commit/43d0a48b2590acc66b04f9c04fe44d8b66210d76))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.163.0\n([61a1654](https://redirect.github.com/renovatebot/github-action/commit/61a1654b1a1e4ce5e9bb0905af986b1357b0d427))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.163.1\n([4226876](https://redirect.github.com/renovatebot/github-action/commit/42268768581691fe71bebc5d4a54e979b343d643))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.163.2\n([b3318e0](https://redirect.github.com/renovatebot/github-action/commit/b3318e0a24aa6e5849ee6e2783ae9d048b8ffb3e))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.163.4\n([09fe3e9](https://redirect.github.com/renovatebot/github-action/commit/09fe3e9361ed5b46f5871b3d3d30b89138fb8cd7))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.164.0\n([5736585](https://redirect.github.com/renovatebot/github-action/commit/5736585dd1f36606bb51e36580751eb8b2f927aa))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.164.1\n([8b164cc](https://redirect.github.com/renovatebot/github-action/commit/8b164cce79c2d3e1b0378b414055aa32c2e2396b))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.164.2\n([44728cc](https://redirect.github.com/renovatebot/github-action/commit/44728cc6496f5d57c674def5fe4437bf43dfb744))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.165.0\n([bde1da1](https://redirect.github.com/renovatebot/github-action/commit/bde1da1de34c74300c4145d5d36145ab0ac403a3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.166.0\n([#&#8203;1031](https://redirect.github.com/renovatebot/github-action/issues/1031))\n([4b957d1](https://redirect.github.com/renovatebot/github-action/commit/4b957d1cabe8967b8d3d4d1d5e72c336f93acc2c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.166.2\n([499cfeb](https://redirect.github.com/renovatebot/github-action/commit/499cfeb9d6d64e295dbabdc03d6811302dfb44d0))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.166.3\n([fe8a943](https://redirect.github.com/renovatebot/github-action/commit/fe8a9436e271c3ae9d0134419fbbbf57fe901665))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.167.0\n([f8ca6db](https://redirect.github.com/renovatebot/github-action/commit/f8ca6db77039c7b2df300bf1c0008bb6ca48feb9))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.168.4\n([2e15d66](https://redirect.github.com/renovatebot/github-action/commit/2e15d66203e5e5669337f080d41d707e2e30245c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.168.5\n([a87ee3d](https://redirect.github.com/renovatebot/github-action/commit/a87ee3d8ae59775aeabb41bff8b9dffa2a9850dd))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.168.6\n([683e7dd](https://redirect.github.com/renovatebot/github-action/commit/683e7dd082e83899dad9e727c8b22e9c472523eb))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.169.0\n([f6166e7](https://redirect.github.com/renovatebot/github-action/commit/f6166e7f7b6e4e444589ac774306a55697362bed))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.169.4\n([f1f81f9](https://redirect.github.com/renovatebot/github-action/commit/f1f81f959e2f65dfc38f6a71c5720914ad73c37c))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.0\n([5473f54](https://redirect.github.com/renovatebot/github-action/commit/5473f54a8f760978d6a2cec08a5e261ce8f0b35e))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.12\n([b47aa13](https://redirect.github.com/renovatebot/github-action/commit/b47aa135111049a8f220c25f98f281cac991a585))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.13\n([7e8834d](https://redirect.github.com/renovatebot/github-action/commit/7e8834d80efbe46cdcd336f7d8335e94bf5d85e6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.14\n([9b5f9e6](https://redirect.github.com/renovatebot/github-action/commit/9b5f9e6c8f97c2064cef2ba7b7459f424722c8f6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.15\n([98631e8](https://redirect.github.com/renovatebot/github-action/commit/98631e88b8dfa52ea1da739e21e1969f04e88051))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.16\n([ab997a9](https://redirect.github.com/renovatebot/github-action/commit/ab997a9588a5a8c80507974d19166d0db4087947))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.17\n([24a51e0](https://redirect.github.com/renovatebot/github-action/commit/24a51e0fd8b1677ce32e8c45c661af3f0b5680c6))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.18\n([f82d2cd](https://redirect.github.com/renovatebot/github-action/commit/f82d2cd716eb8043a8f8d8458cdcff924d64e4a1))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.19\n([3d684f2](https://redirect.github.com/renovatebot/github-action/commit/3d684f2e0788a79e4b276480aaf841539b1899de))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.20\n([d7afc6b](https://redirect.github.com/renovatebot/github-action/commit/d7afc6be62e2f314c2e76e6310125bf53563e19d))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.3\n([306f0c9](https://redirect.github.com/renovatebot/github-action/commit/306f0c9105ab6cd95a0d354b1539d51731646012))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.8\n([f0eea19](https://redirect.github.com/renovatebot/github-action/commit/f0eea19bf3bb50cd26effe5e04e7d78d4c7f56b3))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.170.9\n([f3af74e](https://redirect.github.com/renovatebot/github-action/commit/f3af74eb2fa5d6b11658e5b26cf601faf2963d37))\n\n###\n[`v46.1.13`](https://redirect.github.com/renovatebot/github-action/releases/tag/v46.1.13)\n\n[Compare\nSource](https://redirect.github.com/renovatebot/github-action/compare/v46.1.12...v46.1.13)\n\n##### Documentation\n\n- update references to renovatebot/github-action to v46.1.12\n([a871d4d](https://redirect.github.com/renovatebot/github-action/commit/a871d4d5460d222ef1b9b6d9c7c9a9224e582780))\n\n##### Miscellaneous Chores\n\n- **deps:** update dependency\n[@&#8203;commitlint/cli](https://redirect.github.com/commitlint/cli) to\nv20.5.2\n([67a74d1](https://redirect.github.com/renovatebot/github-action/commit/67a74d123d2876d138af089da96b130b49963b52))\n- **deps:** update pnpm to v10.33.1\n([5932d6c](https://redirect.github.com/renovatebot/github-action/commit/5932d6c4e6423886397f74fa3e1f43f75d08b639))\n- **deps:** update pnpm to v10.33.2\n([580c97f](https://redirect.github.com/renovatebot/github-action/commit/580c97f45b94ac6c4cf344cae6557fa67ffcf1e6))\n\n##### Build System\n\n- **deps:** lock file maintenance\n([d044e7d](https://redirect.github.com/renovatebot/github-action/commit/d044e7df57b284a83ba0184247f960f00ca99d19))\n\n##### Continuous Integration\n\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.159.1\n([a7db9c3](https://redirect.github.com/renovatebot/github-action/commit/a7db9c38fdfec235881c95a3f634d0e98351a897))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.159.2\n([f9133ef](https://redirect.github.com/renovatebot/github-action/commit/f9133ef80db08316ae9064a6639804e2781bf4ac))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.0\n([212d525](https://redirect.github.com/renovatebot/github-action/commit/212d52574e89808037dd90d27dad2a1ea2f69f22))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.1\n([e3443ce](https://redirect.github.com/renovatebot/github-action/commit/e3443ceef9af4bfb10853b55f8a23c5625289bb8))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.2\n([833041b](https://redirect.github.com/renovatebot/github-action/commit/833041bb68593fa1d2e2704abedd40037914481b))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.4\n([60cc865](https://redirect.github.com/renovatebot/github-action/commit/60cc8654e18da2e1d7164c13b1437fcf26a1dce8))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.5\n([2c7567a](https://redirect.github.com/renovatebot/github-action/commit/2c7567a8f829497ca73badab029c722f61e0c561))\n- **deps:** update ghcr.io/renovatebot/renovate docker tag to v43.160.6\n([35caad2](https://redirect.github.com/renovatebot/github-action/commit/35caad2c6a948000e0be2215db7dcdbf0c183541))\n\n</details>\n\n<details>\n<summary>sigstore/cosign-installer (sigstore/cosign-installer)</summary>\n\n###\n[`v4.1.2`](https://redirect.github.com/sigstore/cosign-installer/releases/tag/v4.1.2)\n\n[Compare\nSource](https://redirect.github.com/sigstore/cosign-installer/compare/v4.1.1...v4.1.2)\n\n#### What's Changed\n\n- Bump cosign to 3.0.6 in\n[#&#8203;232](https://redirect.github.com/sigstore/cosign-installer/pull/232)\n\n</details>\n\n---\n\n### Configuration\n\n📅 **Schedule**: (in timezone UTC)\n\n- Branch creation\n  - \"on monday\"\n- Automerge\n  - At any time (no schedule defined)\n\n🚦 **Automerge**: Disabled by config. Please merge this manually once you\nare satisfied.\n\n♻ **Rebasing**: Whenever PR is behind base branch, or you tick the\nrebase/retry checkbox.\n\n👻 **Immortal**: This PR will be recreated if closed unmerged. Get\n[config\nhelp](https://redirect.github.com/renovatebot/renovate/discussions) if\nthat's undesired.\n\n---\n\n- [ ] <!-- rebase-check -->If you want to rebase/retry this PR, check\nthis box\n\n---\n\nThis PR has been generated by [Mend\nRenovate](https://redirect.github.com/renovatebot/renovate).\n\n<!--renovate-debug:eyJjcmVhdGVkSW5WZXIiOiI0My4xNzAuMjIiLCJ1cGRhdGVkSW5WZXIiOiI0My4xODIuMiIsInRhcmdldEJyYW5jaCI6Im1haW4iLCJsYWJlbHMiOltdfQ==-->\n\nCo-authored-by: slnc-renovate-ci[bot] <264827662+slnc-renovate-ci[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-18T11:32:20+02:00",
          "tree_id": "9092f2f20c1e45235403cddf2f15524b846ec59e",
          "url": "https://github.com/slnc/ifchange/commit/5b95f0c8037291d6d6c073460e86bceb5081fac3"
        },
        "date": 1779096854006,
        "tool": "cargo",
        "benches": [
          {
            "name": "lint_latency_16kloc_diff",
            "value": 4359692,
            "range": "± 99336",
            "unit": "ns/iter"
          },
          {
            "name": "lint_1000_files",
            "value": 6883497,
            "range": "± 256017",
            "unit": "ns/iter"
          },
          {
            "name": "lint_5000_files",
            "value": 34905040,
            "range": "± 1111409",
            "unit": "ns/iter"
          },
          {
            "name": "scan_5000_files",
            "value": 51771847,
            "range": "± 589140",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}