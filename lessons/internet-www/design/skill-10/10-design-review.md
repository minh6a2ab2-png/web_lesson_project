# Skill 10 – Design Gate Review / Báo cáo kiểm định

**Lesson**: Internet & WWW 5.1 · **Skill**: v3.2 · **Date**: 2026-11-11 · **Status**: PASS for visual design and prototype navigation; interactive lesson remains pending Skill11.  
**Inputs:** Skill09 map/interaction/state/localization, Skill07 scenario, Skill05 v3.2 assets. Skill08 not run.

## 1. Thành phần đã giao

- `10-design-system.md`: layout tokens, component responsibilities, localization, focus, visual hierarchy and cognitive-load controls.
- `10-slide-wireframes.md`: 8 archetype families + exact layout for 15 content slides and 1 break, desktop/mobile and UI states.
- `10-prototype.html`: navigable **design prototype** showing all 16 view states, EN/VI toggle, example secondary drawers and visual UI states; NOT the final lesson.
- 3 Chromium screenshots + `10-implementation-handoff.json` + browser offline practice files.

## 2. Design checks

- No 4 compulsory screens per item, no mandatory forced Learn–Practice–Recall–Conclusion structure.
- Student-facing slide has a single core question; first action is not hidden behind unnecessary decorative UI.
- Browser mission uses real Chrome/Edge/Firefox; the prototype only links to local practice pages.
- DNS/HTTP lab design reserves simulation, actions, log and explanation, not a GIF pretending to be a lab.
- Correctness guards from Skill09 preserved: NXDOMAIN ≠ HTTP404, no IP after DNS-C, HTTPS ≠ trustworthy content.
- Reveal reference visuals only after learner's own explanation; teacher panel hidden by default.
- Distinct layout archetypes based on thinking task, not a cosmetic theme switch.
- The form entry in prototype is a visual placeholder; no false claim of saved evidence.

## 3. Automated prototype checks (Chromium + Playwright set_content)

**22/22 tests passed**. Browser runtime's network policy blocked navigation to `file://` and `127.0.0.1`; therefore tests used `page.set_content` with the exact HTML source and do **not** establish local-file navigation testing or real offline browser functionality.

| Test | Result | Evidence |
|---|---|---|
| Prototype loads / JS no errors | PASS | [] |
| 16 states (15 slides + break) | PASS | SL-00..SL-14, BREAK-05 |
| Previous/Next navigation | PASS | button navigation |
| EN/VI switch | PASS | slide title and html.lang change |
| helpBtn drawer and Escape | PASS | drawer opens and closes |
| bookBtn drawer and Escape | PASS | drawer opens and closes |
| teacherBtn drawer and Escape | PASS | drawer opens and closes |
| UI state preview switch | PASS | state selector updates layout |
| Browser uses real tool & offline practice link | PASS | no virtual browser |
| DNS clearly only wireframe | PASS | no simulated interactions claimed as working |
| No desktop JS errors | PASS | [] |
| No horizontal overflow @ 390px | PASS | [] |
| All slides render without JS errors @ 390px | PASS | [] |
| No horizontal overflow @ 360px | PASS | [] |
| All slides render without JS errors @ 360px | PASS | [] |
| No horizontal overflow @ 1366px | PASS | [] |
| All slides render without JS errors @ 1366px | PASS | [] |
| Contrast primary text | PASS | 15.63:1 against 4.5:1 target |
| Contrast muted text | PASS | 6.98:1 against 4.5:1 target |
| Contrast CTA white on blue | PASS | 6.58:1 against 4.5:1 target |
| Contrast lab heading | PASS | 6.11:1 against 4.5:1 target |
| Contrast error caution | PASS | 6.47:1 against 4.5:1 target |

## 4. Cần hoàn thiện ở Skill11 và thử nghiệm tiếp

| Item | Status | Next step |
|---|---|---|
| DNS case A/B/C with controls and log | SPEC_ONLY / designed layout | Implement fixture-driven state machine, keyboard alternative, reduced motion; test NXDOMAIN block |
| HTTP 200/404 and HTTPS reasoning | SPEC_ONLY / designed layout | Implement message states and guarded DNS handoff |
| Learner notes / saved answers | UI PLACEHOLDER | Implement in-memory state, optional export/import only if requested |
| URL highlighting, node builder, sorting | UI PLACEHOLDER | Implement actual interactions, feedback and keyboard paths |
| Full bilingual lesson text and aria | DESIGN CONTRACT | Complete all strings and test dynamically |
| GIF/SVG references from Skill05 | READY source files, design placements defined | Integrate after student evidence and provide transcript/fallback |
| Break and 120-min teaching timing | DESIGN CHECKED | Manual teaching pacing, no forced timer |
| Browser offline site links | FILES PRESENT, functional classroom test pending | Open on Windows Chrome/Edge/Firefox; do not claim tested here |
| Homework integration | PENDING Skill08 | No invented homework page |

## 5. Handoff decision

**PASS for Skill10 → Skill11:** visual hierarchy, architecture fit, 15+1 slide layouts, responsive wireframes and design tokens are ready. This is **not** a pass for content functionality or learning effectiveness, which require Skill11/Skill12 tests and tutor observation.