# Skill 10 design review → Skill 11 implementation fixes

**Date:** 2026-11-15. **Inputs:** Cookies Skill09 v3.4 (22 scene contract), Skill10 v3.3 (hi-fi prototype, 22 previews), Skill04 v5.1 provisional learner profile.

**Finding:** `DESIGN_ACCEPTED_WITH_P0_REPAIRS`; do not overwrite the source Skill10 design.

| ID | Design issue | Priority | New implementation disposition |
|---|---|---|---|
| D10-01 | Skill10 Cookie accept/block/return lab is visual only | P0 | `A2-03/A2-04/A2-05`: JavaScript educational state machine, actual conditional request output; no real browser cookies |
| D10-02 | A3 timeline diagram reveals answer before learner predicts | P0 | Initial question now hides conclusion; result appears after choosing and running a condition |
| D10-03 | EXIT navigation may expose prior knowledge | P0 | Lock on A5-02 until submit; notebook/hint/compare blocked; Dual only question + scratch |
| D10-04 | Skill10 prototype has ephemeral notebook data | P0 | Local storage + export/import JSON and failure notice; field test `file://` still required |
| D10-05 | Skill10 Dual is static mockup | P1 | Two selection controls, swap, ratios, independent reading/scrolling. Two simultaneously interactive labs not yet supported |
| D10-06 | H3 can be opened from a nonmeaningful click | P1 | Require submitted explanation of minimum text length; semantic validity cannot be auto-verified |
| D10-07 | Skill04 learner needs short prompts, retrieval, gradual hints, flexible responses | P1 | Keep student-facing purpose/short tasks, guided steps, responsive tutor, handwritten/oral work recorded by short note |
| D10-08 | EN content not ready | P1 | VI-only implementation; no fake EN/VI control |

**Carry to learner audit:** ACT02 (12 minutes) and EXIT (8 minutes) may be too compressed; topic baseline unknown. Do not infer learning effectiveness from technical test passes.
