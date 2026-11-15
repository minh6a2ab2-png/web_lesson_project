# Proposed change control — approval needed before full rollout

**User-approved design principles:** 2026-11-15. Old 09 v3.4 / 10 v3.3 / 11 v1.0 kept untouched.

## Current deliverables
- Skill09 v3.5 **proposed** definition: condition-based screen contracts and knowledge continuity.
- Skill10 v3.4 **proposed** definition: content-first UI and revised hard gates.
- ACT02 six-page HTML prototype with six different compositions, no forced input on explanatory screens; practical simulation controls are genuine JS but pedagogical cookie scenario is simplified **in memory only**.
- Six full-page preview screenshots; content/continuity map; 21 checks in Chromium.

## Tested
- Tested navigation, initial clear explanation, absence of mandatory inputs on concept screen, storage accept/block simulation, return conditional reveal, comparison feedback, retrieval unlock, help dismissal and six viewport widths 1366/1024/768/390/375/360.
- Chromium used local `set_content`, not a native opening of file:// on Windows. Did not test NVDA/VoiceOver or learner outcomes. Semantic verification is by scenario fixtures, not an intelligent open-answer grader.

## Known issues and decisions for user review
1. In skill08 source, A2-01 and A2-02 are mostly learner construction tasks. Prototype makes A2-01 explanation first and A2-02 annotated explanation. This is a **pedagogical interpretation change**; obtain user approval and reconcile upstream Skills 08/09 before applying it to 22 scenes.
2. A2-03 simulation compares blocked and accepted cases, but requires selecting prior prediction (not automatically checking understanding of it). The prototype does not set actual cookies.
3. A2-06 verbal/paper attempt confirmation is self-reported. Cannot prove it happened. Mark as attempted, not mastered.
4. Timing within the six screen sequence totals 720 seconds (100+125+115+110+115+155), but speed in actual tutoring was not measured; examine time with user.
5. English copy remains pending; do not show working EN toggle.
6. No audio or generative tutor; optional scripted context hints only.

## Decision gate
Do not replace complete original 22-scene skill contracts or start Skill11 production from these new definitions until visual and pedagogical review. If approved, issue upstream change requests, create compatible new contract, rebuild complete Skill10 and then Skill11; trigger Skill12 learner simulation after that.
