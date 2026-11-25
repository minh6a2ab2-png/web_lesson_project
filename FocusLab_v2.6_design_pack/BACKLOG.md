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
