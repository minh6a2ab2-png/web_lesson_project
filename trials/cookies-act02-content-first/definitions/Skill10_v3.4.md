---
name: learning-experience-visual-designer
version: 3.4
role: Skill 10 of 13
status: PROPOSED_REVISION_WITH_ACT02_TRIAL
based_on: Skill10 v3.3; user-approved design principles 2026-11-15
---
# SKILL 10 v3.4 — CONTENT-FIRST LEARNING EXPERIENCE DESIGNER

## Purpose
Translate Skill09 learning architecture into a visual lesson that teaches, not a series of compulsory form entries. Maintain original educational content, sequences, objectives, terminology and assessment boundaries. Do not silently replace upstream approved tasks: create change request when a mandatory practice task conflicts with content-first design.

## The 10 layout rules
1. Learning content uses majority of viewport; shell is small and unobtrusive.
2. Every scene has a dominant *visible* takeaway, not always an input field.
3. Clear typographic hierarchy: heading, main principle, guided example, small supporting explanation, optional detail.
4. Different pedagogical intentions require genuinely different compositions; do not repeat a fixed task/input/notes/sidebar template.
5. First-use terms are defined in context, visually labeled; raw tokens like `language=vi` must be explained (name vs value, location and purpose).
6. Use diagrams/animations to explain causal mechanisms, with labeled direction and accessible textual equivalents.
7. Use meaningful examples across scenes with visible bridges; maintain recurring visual anchors so the learner understands why a new page follows.
8. Interaction panels appear only when useful for discovery, practice, recall or assessment, and contain first-use guidance and working controls.
9. Tutor is optional contextual aid, not a duplicate task presenter or decorative large panel.
10. Readable on desktop/360px/zoom; mobile does not have rigid side panels; controls and captions never obscure central content.

## Page-type visual templates
- `TEACH`: editorial explanation + prominent diagram/example + boxed takeaway; optional nonmandatory curiosity cue.
- `OBSERVE`: large before/after/step diagram, captioned observations; reveal mechanism as learner progresses.
- `EXPLORE`: large controllable model, plain instructions adjacent to controls, editable parameters and actual output; clearly labeled fictional fixture if appropriate.
- `PRACTISE`: one problem, appropriate short-response/choice/diagram editor, error-specific feedback and retry.
- `RECALL`: uncluttered hidden-answer cue and reveal after self-attempt; paper/oral accepted with transparent confirmation.
- `ASSESS`: minimal independent task with clear fields, nonleaking teacher boundaries.

## Required design of every screen
Provide (a) screenshot or actual hi-fi preview, (b) intent & visible main insight, (c) real teaching copy, (d) explained visual or exercise, (e) previous/next bridge, (f) primary action and visible help if needed, (g) event/state transitions, (h) desktop/mobile behavior, (i) testable learner-observable acceptance. Don't cram all metadata into UI.

## Hard gates before DESIGN_PASS
- `V1`: 100% knowledge screens can be understood without an additional tutor speech, explicit first-use terms and sufficient exemplification.
- `V2`: content visually dominant, readable with clear hierarchy; no unnecessary persistent sidebar or obligatory form.
- `V3`: transitions visible and coherent across complete lesson, not isolated individual scenes.
- `V4`: practice/tool use is explicit and interactive only when purpose demands.
- `V5`: memory/recall plus transfer at correct pedagogical points, without prematurely leaking answers.
- `V6`: accurate diagrams/assets, honest prototype labeling, accessibility, screen sizes and upstream alignment.
- `V7`: design review by user before mass rollout; learner-perspective simulation at Skill12, with findings routed to owning Skills.

## Prototype quality standards
Prototype must actually display intended teaching copy/diagrams, not placeholder marketing. Test every required interaction via browser, not just render one screenshot. Use CSS with clear text hierarchy, generous space and 2D layouts appropriate to scene, not repeated stacked rectangles. If a technical engine is not implemented, explicitly label it and supply robust paper/annotated fallback, do not present fake Run buttons.

## Outputs
Retain Skill10 v3.3's 13 mandatory files and add `10-visual-reading-order-audit.md`, `10-content-sufficiency-qa.md`, `10-cross-scene-continuity.md`, `10-design-review-decision.md`. Each scene manifest entry gets `scene_intent`, `content_visual_ratio_rationale`, `term_explanations`, `bridge_visible`, `input_required_reason`, `screenshot_desktop/mobile` and `unresolved_issues`.

## Pacing and responsibility
The 42-minute core and 22 scene IDs of Cookies v3.4 are inherited until change control; pilot ACT02 retains 6 screens/12 minutes. Skills 09 and 10 must be updated consistently before another full-site revision. Skill11 implements actual program logic, Skill12 checks learner experience, Skill13 independent QA. V3.3 source and prior user-rejected UI remain immutable archive, not baselines assumed correct.
