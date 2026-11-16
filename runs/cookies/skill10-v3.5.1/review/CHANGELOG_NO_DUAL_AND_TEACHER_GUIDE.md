# Review delta — Skill 10 v3.5.1 (2026-11-17)

## User decisions

1. **REMOVE DUAL VIEW**: no split view or two-scene modal in preview; delete the button, JS render branch and related styles.
2. Keep one main content screen for learner; do not compromise visual legibility.
3. Before Skill11 implementation, present simple educational purpose and teacher spoken explanation for **all 22 scenes**.
4. The teacher script is **reviewer-only**, opened by the compact book icon in the top bar. The learner scene stays uncluttered; notes are also exported separately.
5. On A5-02 (EXIT), Teacher Notes, glossary and tutor are disabled in the review demo as before; notes live in a separate external guide for staff.

## Data preservation

- 22 scene IDs, order and estimated durations unchanged; Skill09 upstream still governs completion and assessments.
- No new claim that this is Skill11 production; this is a hi-fi design review revision.
- The prior v3.5 archive remains intact.

## For Skill11

- Do not implement Dual View without a new explicit user request.
- Teacher notes should be staff-facing only and must not appear as a mandatory panel in student slides.
- Ensure entry to EXIT isolates learner from reference answers. This prototype does not enforce secure lockout.
- Recheck changed-interaction policy for TEACH scene evidence requirements before implementing assessment.
