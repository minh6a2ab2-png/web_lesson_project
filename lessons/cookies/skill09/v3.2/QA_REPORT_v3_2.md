# Skill09 v3.2 — QA (2026-11-14)

**Status:** SKILL09_DESIGN_VERIFIED / UI_PROTOTYPE_PARTIAL / NOT_CLASSROOM_READY.

## Static inspection
- 22 scene IDs and ordering identical to Skill09 v3.1 source.
- D0 3 + ACT01 6 + ACT02 12 + ACT03 7 + ACT04 6 + ACT05 8 = 42 min; P00 and P07 outside core time.
- All 22 scenes have visible content, learner action, feedback/reveal gate, evidence, media plan and handoff in Page-by-Page contract.
- JavaScript syntax `node --check` passed.
- No teacher-only key or real cookies in student prototype.
- `Studio_Standalone_v3_2.html` includes all 5 local SVGs as embedded data URLs.

## Chromium / Playwright `page.set_content`

| Viewport | Dual adjacent/free | Notebook manual save & knowledge capsule | Lab mocked blocked case | EXIT isolation | JS errors | Horizontal overflow |
|---|---|---|---|---|---|---|
| 1440×900 | Pass | Pass | Pass | Pass | 0 | False |
| 820×980 | Pass | Pass | Pass | Pass | 0 | False |
| 375×812 | Pass | Pass | Pass | Pass | 0 | False |


## Limitations and unverified items

- Direct `file://` launch was **blocked by the test environment** (`ERR_BLOCKED_BY_ADMINISTRATOR`), so it has not been independently validated on teachers' Windows Chrome/Edge machines. The page was tested using `page.set_content` with inlined data URLs.
- The notebook is **manual completion / note capture** and uses localStorage when available, session-memory otherwise. Cross-reload persistence, imports from the existing learning lab / visual lab and automatic scoring are **not tested** or implemented.
- The LAB is a deterministic mock, not live HTTP network traffic. Original Skill07 assessment still needs real integration; EXIT in this UX prototype is a presentation mock, not a validated independent examination engine.
- Screen-reader audit, cross-browser/device coverage, accessibility focus state in all branches and real 1:1 pupil pilot are pending Skills 11–12.
- No images were added merely to decorate; gaps are listed in `Asset_Backlog_v3_2.csv` with readiness and owner.

## Verdict

**Skill09 handoff can proceed to Skill10/Skill11. Student learning site cannot be marked “ready to teach” yet.**
