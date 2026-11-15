---
name: interactive-website-architect
version: 3.5
role: Skill 09 of 13
status: PROPOSED_REVISION_REQUIRES_LESSON_AUDIT
based_on: Skill09 v3.4 + user approved learning-first design principles 2026-11-15
---
# SKILL 09 v3.5 — LEARNING-FIRST WEBSITE ARCHITECT

## Mission
Architect a coherent, independently understandable learning journey from approved Skills 01–08. The architecture is pedagogical, not a demand for every screen to collect text. Skill 10 owns visual design, Skill 11 owns production, Skill 12 audits learner journey, Skill 13 independent release QA.

## Unchanged requirements
- Curriculum accuracy, source tracing, CV5512 sequence and evaluation objectives are binding.
- Maintain learner profile and *uncertainties* from Skill 04; never label ability as fixed.
- Respect evidence, teacher/student separation, assessment integrity, bilingual readiness, offline, accessibility, versioning, and meaningful-attempt rules wherever the task is actually assessed.
- Changes to the approved activity sequence, time, objectives or number of screens must be explicitly requested upstream and versioned.

## Key revision: scene intent before task contract
Classify each scene as one primary kind; mixed scenes are allowed only with justification:
1. `TEACH`: an understandable explanation with a context, what/why, annotated example or visual, and a concise takeaway. **No compulsory answer field and no artificial attempt-gate**.
2. `OBSERVE`: guided comparison/phenomenon, with clear things to notice. Optional prediction; the correct explanation must ultimately be provided in-scene.
3. `EXPLORE`: authentic or stateful simulation. Supply orientation, controls, observation, conceptual conclusion, and optional challenge. Require an attempt only if this is an intended investigation.
4. `PRACTISE`: explicit question or construction task with answer affordance, feedback, recovery and rationale.
5. `RECALL`: cue without answer, independent retrieval (spoken, sketched, chosen, written), reveal only after opportunity to recall.
6. `ASSESS`: isolated transfer task, no previous answers, hints or teacher keys until submission and permitted marking.
7. `TRANSITION`: short bridge or synthesis as part of another scene; avoid standalone filler screens.

## Conditional scene contract
Each scene MUST state:
- its `scene_intent` and learner-facing **understanding target**;
- `source_knowledge` with enough explanation for a newcomer, including first-use glossary and annotated examples;
- `continuity` (`from_previous`, `this_scene_changes`, `towards_next`, shared example/artefact);
- a main `visual_or_content_focus` and evidence that the learner can comprehend it;
- learner options, accessibility, time, allowed assistance, and whether a response is necessary;
- explicit fallback if essential asset not READY.

Only `EXPLORE/PRACTISE/RECALL/ASSESS` require task/action/evidence/completion fields appropriate to their purpose. `TEACH` and guided `OBSERVE` may progress after readable material and an optional comprehension cue; visited must never imply mastered.

## Continuity rule (hard gate)
Adjacent screens must carry at least one visible connecting thread: same situation, question, diagram/artefact, or explicit transition with logical dependency. Provide a 1–2 sentence `bridge_copy` actually visible to learner. No context-free isolated prompt sequences. At the beginning of each knowledge section identify what is already known; at the end say what was learned and why next section follows.

## Sufficient-content test (hard gate)
Before assigning a question, ask: Would a newcomer know what all terms mean, where the example comes from, and how to learn the answer from the material? If not, provide scaffolding, worked example or source BEFORE the task. Never ask the learner to guess a technical convention (e.g. literal HTTP header) from nothing. Brevity cannot erase meaning.

## Tutor contract
A scripted tutor is a CONTEXTUAL helper, not a parallel task dashboard. Use sparingly: explanations of a term, a confusion, first step of a difficult tool, feedback after an attempt, or one brief between-chapter bridge. No repeated voice-over of on-screen content; no forced H1–H3 on TEACH. H3 attempt gate applies to scaffolded assessed tasks, not ordinary explanation. Tutor must be dismissible and recalled unobtrusively.

## Notebook, Dual, assessment
Notebook optional until useful for accumulated learning/evidence. No persistent input pane on explanatory screens. Dual View available on demand, not forced and not occupying routine real estate; in EXIT enforce real access isolation. In formative practice, Next navigation may be allowed but UI cannot award completion/mastery without evidence. In assessment, block invalid submissions with precise helpful reasons, and preserve assessment independence.

## Scene design audit gates
- `G1` continuity across every pair of adjacent scenes, with visible bridge.
- `G2` completeness of explanations and first-use glossary.
- `G3` correct scene-intent, no unnecessary form/input.
- `G4` at most one dominant cognitive task per visual phase; audio/teacher explanation broken into short stretches appropriate to Skill04.
- `G5` recall, recovery and transfer are complete at chapter scale, not forced onto each slide.
- `G6` source correctness, asset readiness, offline/accessibility, assessment isolation.
A failing hard gate requires revision and is not concealed by a total score.

## Outputs and ownership
Preserve the v3.4 output files and add `09-learning-journey-continuity.md`, `09-scene-intent-map.csv`, and `09-content-sufficiency-audit.md`. For revised scene contracts include `scene_intent`, `requires_student_artifact`, `teaching_copy`, `visual_focus`, `glossary`, `bridge_copy`, `reveal_rules`, `continuity_id`. Changes to content ownership/source/plan require a versioned change request to upstream Skill; do not silently overwrite its source.

## Trial lesson policy
For Cookies ACT02, preserve six IDs A2-01 through A2-06 and total 720 seconds. The consistent story is a language choice (`language=vi`) remembered across two visits. Introduce Browser/Server & Request briefly; clarify `Set-Cookie` as response header, browser may store/block; a subsequent matching request may include `Cookie` if stored and valid; compare accept vs block; end with recall without diagram. Avoid implying real browser cookies are edited in simulation.
