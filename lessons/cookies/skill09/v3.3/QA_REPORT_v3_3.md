# Skill 09 v3.3 – QA & evidence (2026-11-14)

**Status:** DESIGN_GATE_PASS / LOW_FI_PROTOTYPE_TESTED / NOT_SKILL11_FINAL / NOT_PILOTED.

## Chuyên môn và nội dung
- 22 scene IDs and order unchanged from Skill09 v3.2; core D0–ACT05 remains 42 min; P00/P07 after/before separate.
- 22 learner-purpose sentences, 22 tasks, 22 sets of 2–5 steps, 22 distinct tutor intros, reminders, feedback/corrections and transitions.
- 20 non-EXIT scenes have H1–H3 support ladder; 2 EXIT scenes have **zero content hints**, zero knowledge capsule, and notebook lock policy.
- No teacher key, no private cookies or real browsing data in output.
- `09-implementation-contract.json` is the source of truth; scripted tutor, not generative AI.
- All 12 required 09 deliverable files created. `09-mode-suitability-matrix.csv` includes both 0–3 fit and 0–2 gate, plus fallback and always-available Dual toggle.

## Browser testing
- Playwright with Chromium `page.set_content` on standalone file; viewports 1440×900, 820×980, 375×812.
- Tested scene navigation, step progression, H3 only after attempt, Sổ tay save and knowledge tab, Dual adjacent/free and ratio, EXIT isolation and submission.
- No horizontal overflow or page JavaScript errors at tested viewports. Mobile/tablet tutor reflowed into document flow to prevent covering input buttons.
- Standalone HTML embeds SVGs; modular version uses relative assets folder.

## PDF / DOCX readability
- Three readable dossiers: overview; 22 scenes; tutor scripts; exported using DOCX renderer and inspected as page PNGs; searchable PDFs.

## Limitations
- Browser navigation directly to `file://` was NOT verified; page HTML was injected using `page.set_content` because the environment blocked file navigation.
- HTML prototype demonstrates layout and manual capture but not all genuine Skill07 drag/correct/incorrect logic. No auto-scoring, no claim of mastery.
- Notebook in prototype may use localStorage or in-session fallback; persistence across reload is NOT certified.
- Full-screen reader, physical devices, multi-browser, teacher and child self-study trial not performed.
- Hints are scripted; no AI API, voice generation or speech playback.
- Assets marked SPEC_ONLY/PROTOTYPE need production before Skill11.

**Verdict:** Skill09 complete as architecture/handoff; not ready to teach until Skills 10–12 and missing student resources are implemented and audited.
