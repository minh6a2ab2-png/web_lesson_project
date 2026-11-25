# FocusLab v2.6 — deferred work register
Status: OPEN. Phase 0 R02 integration pilot passed; phase 1 begins independently. Do not modify v2.5, R04 or run Skill08. No issue silently closed. P0 blocks production/lesson release, not independent pilot design.
Evidence: R02 workflow 45584872361, artifact 15007203877; Drive backup folder 153_rSeil7VS1CuoW2jqDng-4Snk7yytL.

| ID | Priority | Target | Open problem | Acceptance evidence |
|---|---|---|---|---|
| A01 | P1 | Phase 1/5 | Cross-workflow cache and dependency setup latency | Two independent runs, validated cache, measured end-to-end time |
| A02 | P1 | Phase 5 | Bounded retry, failure recovery and corrupt cache | Controlled failures; independent branches continue; downstream blocked correctly |
| A03 | P1 | Phase 5 | Full 13-Skill dependency graph and checkpoint resume | Registry-aware task graph with real checkpoint and invalidation tests |
| A04 | P0 | Before production release | Exact R04 file and localhost QA, remaining Skill07 model checks | Privacy-safe exact model test, keyboard, zoom, offline, accessibility; no fabricated evidence |
| A05 | P0 | Before production release | Source rights and wider asset acquisition | Per-source verification; lawful lesson-context package; one direct-download HTML fallback |
| A06 | P2 | Phase 5 | Node20 action deprecation | Pin supported action versions and regression test |
| A07 | P1 | Phase 5 | Durable archive recovery | Drive readback matches CI digest and restores checkpoint |
| A08 | P0 | Before production release | Public repository privacy | No learner data, private screenshots, teacher keys or secrets in public jobs |
| A09 | P1 | Phase 5 | Cost and Human Effort KPI | Actual end-to-end timings, interventions, resource limits |
| A10 | P0 | Before final lesson release | Independent pedagogy, visual, VI/EN, learner validation | Human/field evidence separated from deterministic checks; record NOT_RUN where absent |
| A11 | P1 | Phase 5 | Pexels and other source handoff | Permitted contextual integration, no standalone stock archive |
| A12 | P1 | Phase 5 | Storage fallback robustness | Direct connector upload failed; verified Library bridge works; test idempotent retries |

Rules: work in bounded independent branches; re-run only impacted tasks. Prefer native tools and R02 engine; no recurring user terminal steps. If manual fallback required, batch requests once. Artifact availability, SHA checks and self-assessment do not prove pedagogical or aesthetic acceptance. No merge until release gates are reviewed.

## Phase 1 additions — R02
| ID | Priority | Target | Open problem | Acceptance evidence |
|---|---|---|---|---|
| V01 | P0 | Before production release | Full canonical slide deck and full-scene coverage | Verify every scene, all states, 5512, Recall/Review, assessment boundaries |
| V02 | P1 | Phase 5 | Full accessibility and language audit | Keyboard focus/order, 200% zoom, assistive tech, bilingual review |
| V03 | P1 | Phase 5 | Independent design and learning-effect assessment | Matched-content comparison by independent reviewer; real learner evidence when available |
| V04 | P1 | Before production release | Exact standalone file/localhost QA and safe CI intake | Verify actual package on approved runner without private data disclosure |
| V05 | P2 | Phase 5 | Upstream DESIGN.md format compatibility | Validate upstream parser or retain explicitly local schema |

R02 local sample: 312/312 checks in direct Chromium rendering (2 variants, 3 viewports, 5 representative scenes), 30 screenshots. Not a full lesson; file navigation blocked; localhost and independent review NOT_RUN. No issue closed by these tests. Package SHA-256: 0d839dcb5a5472b7262a95f7335dee60b23b3d31f60519597582d8752f42ff28. No private package committed.
## Phase 2 additions — Motion R01
| ID | Priority | Target | Open problem | Acceptance evidence |
|---|---|---|---|---|
| M01 | P1 | Phase 2/5 | Actual GSAP adapter execution, pinned local dependency and license | Synthetic CI checks with real GSAP, verified offline packaging, native fallback |
| M02 | P1 | Phase 2/5 | Multi-track timeline and scene lifecycle | Pause/replay/interrupt/leave scene, no stale callbacks or state drift |
| M03 | P1 | Phase 3/4 | Other eight motion style specifications | Implement only when needed, compare usefulness against native lab |
| M04 | P0 | Before production release | Full model motion regression and exact offline QA | Actual file/localhost, keyboard, reduced motion, responsive, all MC02/04/05, game and Mindmap |
| M05 | P1 | Phase 5 | Independent motion/readability and performance audit | Measured frame behavior and cognitive task review; no fabricated learner evidence |

Motion R01: 630/630 local direct-render deterministic checks. Original MC04 R04 control and native WAAPI prototype; no exact file navigation, full deck, or field claim. Preserve A01-A12 and V01-V05. No issues silently closed. npm DNS blocked; optional GSAP adapter not exercised locally.

## Phase 3 — Multimedia R01
GSAP run 45589153888, artifact 15010351809: 13/13 actual runtime checks, verified outer digest 2b478c4b398e4e7a9c9c9ad1aa1b10010c5fd48b543167420263f2e7ab0b650d and 2/2 inner hashes. M01 partially resolved only; offline package/license and R04 integration remain open. Preserve all A/V/M issues.
| ID | Priority | Target | Open problem | Acceptance evidence |
|---|---|---|---|---|
| MM01 | P1 | Phase 5 | Remotion actual runtime and licensing | Confirm lawful production terms, test only if authorized; FFmpeg default remains usable |
| MM02 | P1 | Phase 5 | Natural Vietnamese/English narration | Review pronunciation, intelligibility and language coverage; approved TTS or silent fallback |
| MM03 | P0 | Before production release | Offline playback, captions, transcript, keyboard and language integration | Test actual lesson package in browser, no forced playback, no spoiler |
| MM04 | P1 | Phase 5 | Reusable media cache and scene-level invalidation | Verify separate workflow runs and selective rebuild |
| MM05 | P1 | Phase 5 | Independent learning and motion/audio quality | Evaluate whether video adds value over stills; actual learner evidence if available |
R01: two educational MP4s, 5 scenes each, 720p, H264/AAC, eSpeak VI/EN, timed captions, 42/42 local technical checks. No Remotion, Lemo, or KittenTTS execution. No private checkpoint published. No claims of independent voice or pedagogical acceptance.
