# QA REPORT — Interactive Learning Studio v3.0

**Date:** 2026-11-14. **Status:** PASS for UX prototype-level tests; NOT READY_TO_TEACH.

## Verified by Playwright (Chromium, page.set_content)

- Three viewports: 1440×900, 820×1000, 375×820.
- All six top-level mode tabs present; presentation slide visible.
- Story: switch ACT02 (6 scenes) ↔ ACT01 (3 scenes), open reveal panel.
- Lab: choose refused Cookie, predict no Cookie, run simulation; output consistent with model.
- Map: select branch and show relevant question.
- Focus: type answer and receive local-session acknowledgement, no false cloud-save claim.
- Dual View: pair/free controls, choose scene 14 in right pane, return presentation.
- Exit guard: when ACT05 is selected, switching to Dual View is prevented.
- No browser JavaScript exceptions in tested paths; no horizontal document overflow at above widths.
- `node --check`: studio-modes.js and dual-view.js passed.
- ZIP integrity is checked after packaging.

## Not verified

- Direct `file://` navigation was **blocked by test environment administrator** (Chromium returned `net::ERR_BLOCKED_BY_ADMINISTRATOR`). The standalone HTML includes all CSS/JS and SVGs; opening via a real desktop browser still requires a user-side check.
- No real learner pilot, teacher workflow QA, Safari/Firefox test, screen-reader audit, or final WCAG contrast audit.
- Lab is a deterministic pedagogical demonstration, **not** an HTTP network simulator; Story/Map/Focus are demos, not fully integrated teaching engines.
- Teacher/student production builds and isolated assessment package are work for Skill11–12.

**Release verdict:** `ARCHITECTURE_SPECIFIED / VISUAL_PROTOTYPE_TESTED / IMPLEMENTATION_PENDING`.
