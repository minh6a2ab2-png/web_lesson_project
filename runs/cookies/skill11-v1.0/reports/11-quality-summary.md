# Skill11 QA & handoff

**Gate:** `IMPLEMENTATION_CANDIDATE / FUNCTIONAL_SMOKE_PASS / NOT_SKILL12_TESTED / FIELD_NOT_TESTED / NOT_RELEASE_APPROVED`.

## Verified in managed Playwright Chromium (set_content)

- 22/22 scenes indexed and navigable outside EXIT lock.
- Tested click interactions: accept/block/return; conditional Cookie return with stored/valid/scope; Session/Persistent lifetime; selection feedback; H1/H2/H3; knowledge reveal after meaningful text attempt; notebook, two-pane Dual View with swap and ratios; EXIT locks and submission.
- No JavaScript pageerrors in automated test, no document horizontal overflow at sampled widths 1366, 1024, 768, 390, 360.
- Screenshots captured for all 22 screens.

## Not verified

- Native `file://` direct open test **blocked by administrator** in managed environment (attempted). User's Windows Chrome/Edge **not tested**.
- Stable browser-origin navigation for `localStorage` refresh/export/import **blocked** in managed environment. UI code exists but persistence is `FIELD_NOT_TESTED`.
- Keyboard-only flows, zoom 200%, NVDA, touch/mobile devices, cross-browser behavior and true learner pilot.
- Semantic scoring of essay/oral/diagram answers. Text length is only a coarse H3 gate, **not proof of a meaningful or correct attempt**.
- Dual View contains two independently scrollable panels and selectable scene summaries, **not two complete interactive lab instances**.
- EXIT is ungraded pending teacher review; teacher answer key not included in learner package.

## Risks by owner

| Priority | Risk | Owner |
|---|---|---|
| P0 | Windows file open, localStorage/import/export actual result, SVG availability | Skill13 / Skill11 fixes |
| P0 | ACT02 12 min and ACT05 8 min for learner who needs scaffolding | Skill12 → Skill04/06/08/09 |
| P0 | Open-ended work/EXIT relies on human evaluation | Skill11 + teacher protocol / Skill12 |
| P1 | H3 needs meaningful evidence beyond length heuristic | Skill11 → Skill12 |
| P1 | Dual Mode must synchronize real lab state when editing both panes | Skill11 |
| P1 | Full EN/VI translation not reviewed, disabled intentionally | Skill10 + Skill11 |

Do not claim release approval until Skill12 learner audit and Skill13 independent field QA have evidence.
