# 10 — Handoff to Skill11 & learner-audit Skill12

## Implementation contract
- Source-of-truth for content and actual interaction semantics: `09-implementation-contract.json` v3.4 (do not copy/derive answers solely from prototype).
- Design implementation: `10-prototype/index.html`; each of the 22 scene UI states/screenshot IDs in `10-scene-design-manifest.json`.
- Implement all input → transition → meaningful attempt → feedback/retry → reveal → evidence paths. Never count click-only as mastery.
- Engine P0: real-logic Set-Cookie response / browser accept or block / subsequent Cookie request; fixture-based lifetime; model timeline; 3-part EXIT isolation.
- Implement *real* local storage and export/import (if approved) before claiming progress saved; respect teen/minor privacy.
- Note: prototype has temporary JS memory only; H3 preview checks whether text was entered, not whether the attempt was truly meaningful.
- Real Dual View: select two allowed scenes, independent scrolling and event scopes, swap, mobile vertical stack; exit lock must not reveal notes.
- EN locale: do not show active toggle before translation review; test no state loss after future localization.

## Skill12 learner audit scripts
Walk all 22 screens from student's viewpoint. Suggested branches: prerequisite unknown; request H1/H2/H3; forget content at A3/A4; attempt new transfer without hints; time pressure at ACT05; use optional paper/oral/diagram path. Record each scene: what seen, what heard/read, task performed, output, confusion source, remediation and routing to original Skill. Treat AI simulation as risk detection, not observed pupil result.

## Skill13 QA
Test actual Windows file, accessibility, responsive device, browser permissions, data persistence, key isolation and automatic grader; retest after upstream fixes.
