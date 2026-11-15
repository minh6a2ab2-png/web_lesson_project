# Cookies — Skill 11 v1.0 interactive website

**Build:** 15/11/2026. **Source:** Skill04 v5.1 learner fit, Skill07 v1.1 student visuals, Skill08 v1.0 CV5512 lesson plan, Skill09 v3.4 22-scene contract, Skill10 v3.3 hi-fi prototype.

## Run on Windows

1. Extract the entire ZIP, preserving `assets/` next to `index.html`.
2. Double-click `index.html` in Chrome or Edge. No npm/server/CDN required by design.
3. Use **Mục lục** to access each of 22 screens. The 19 core D0–ACT05 scenes have a planned total of 42 minutes; P00/P07 optional.
4. On each screen: read the purpose and prompt, act, explain your reasoning, **Nộp lượt thử**, use hints H1–H3 when needed. H3 requires an attempted explanation. Open the knowledge capsule after attempting.
5. For A2-03/A2-05, change Browser accept/block and run both visits; A2-04 toggles stored/valid/scope conditions; A3 offers condition-based lifetime scenarios.
6. Student EXIT at A5-02 is isolated until submitted. Teacher-only answer keys are not included.
7. Save locally; export the JSON learning record as a backup. Import existing JSON on the same browser or another device. No backend/cloud syncing.

## Functional status

**IMPLEMENTATION_CANDIDATE / SMOKE_PASS / FIELD_NOT_TESTED / LEARNER_NOT_TESTED**.

Functioning in tested Chromium `set_content`: all 22 scenes, navigation, scripted tutor, H1/H2/H3 gating, some objectively checkable options, educational Cookie logic simulation, timeline conditions, note-taking, notebook, Dual View, EXIT isolation, export/import UI and responsive layout.

**Not fully validated:** local Windows file opening, persistent storage after refresh, real accessibility screen reader tests, real learner experience, and assessment grading. Automated semantics of open-ended responses and EXIT scoring are not claimed. `file://` browser launch was actually attempted in the managed test runtime but failed with `ERR_BLOCKED_BY_ADMINISTRATOR`.

The Cookie lab is an **educational in-memory simulation**, not real HTTP traffic and not real browser Cookie access. The application does not transmit student data to an external service. EN translation is pending and no EN toggle is provided.

## Package inventory

- `index.html`: responsive standalone website with 22 scenes.
- `assets/`: 5 original SVG diagrams derived from earlier approved educational assets.
- `reports/runtime-tests.json`: Chromium smoke test observations.
- `reports/10-to-11-design-review.md`: Skill10 issues and changes applied.
- `reports/11-quality-summary.md`: explicit remaining acceptance risks.
- `reports/scene-previews/`: 22 screenshots of the implemented UI.
- `manifest-sha256.json`: archive file integrity checksums.

## Next steps

Run new Skill12 learner-perspective audit against actual behavior with provisional learner profile (unknown browser/server prerequisites, need for short steps, forgetting between sessions, attention after long exposition). Route pedagogic defects to earlier Skills, implementation defects to Skill11. Finally run Skill13 independent QA plus direct Windows browser/localStorage/keyboard/zoom checks.
