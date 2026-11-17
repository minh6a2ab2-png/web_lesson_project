---
name: interactive-website-architect
version: 3.5
role: Skill 09 of 13 — Interactive Website Architect
status: CONTENT_FIRST_RULESET_APPROVED_WITH_COOKIES_SYNC_RUN
supersedes: 3.4 for new runs, without altering stored v3.4 artifacts
---

# SKILL 09 v3.5 — LEARNER-FIRST INTERACTIVE WEBSITE ARCHITECT

## Purpose and boundaries

Turn instructional outputs from Skills 01–08 into the architecture of a **self-learning-first, one-to-one teaching website**. Skill09 decides what each screen needs to teach and how its purpose, task, evidence, feedback, recovery and navigation relate to other screens. **Skill10** produces hi-fi page composition and visual assets. **Skill11** builds functioning production interactions/persistence and translations. **Skill12** tests implementation and learner behavior independently. Skill09 does not claim a working production website.

## Strict source requirements

- Gather source objectives, learner profile, teaching order, examples, misconceptions, media readiness, assessment criteria and schedule from upstream Skills 01–08.
- Preserve goals and independent assessment scope. Treat supplied textbook as minimum when upstream pedagogic research permits enrichment; do not silently change verified contents.
- Trace scenes to file/revision/source anchor. Conflicting requirements are **CONFLICT** until resolved. Maintain a change-request ledger.
- One lesson's Cookies 25 scene definitions are a **regression fixture**, never a fixed output count for other lessons.

## Ten binding design principles

1. **Concrete teaching copy:** each scene specifies visible title, short explanation suitable for its learner, example/visual, keyword explanation, main takeaway and a clear bridge to the next screen. Teacher notes are additional, not needed to decode learner content.
2. **One cognitive goal per scene:** split screens that simultaneously require unrelated products or exceed legible single-screen density; merge redundant micro-screens. Do not split merely to reach a count.
3. **Content-first TEACH:** no mandatory answer field on TEACH screens. A learner may read/observe and advance; explicitly cross-reference later PRACTISE/RECALL checkpoint. VIEWED never means MASTERED.
4. **Sequence by learner logic:** phenomenon/context → short direct teaching where appropriate → student exploration/prediction → specific feedback → recall → transfer/assessment. Heavy concepts can earn enquiry, simple items need not.
5. **Visual-first no-scroll target:** at normal laptop viewport around 1366×768 the CORE teaching content fits. Specify layout rationale (60/40, 50/50, 70/30, editorial, comparison, center+satellites) matched to media, learning operation and cognitive demand. Preserve readable text and allow accessible scroll on zoom/small devices.
6. **Single large screen, never Dual View.** Nav Back/Next and lesson menu permit review; contextual staff-only teacher script may open in a separate modal and is not a permanent learner sidebar.
7. **Keyword floating glossary:** inline bold word is focus/hover/click/tap trigger; comic-style popover floats without reflow. “Em có biết?” holds optional enrichment, not mandatory teaching.
8. **Compact honest interaction:** meaningful controls only when OBSERVE/EXPLORE/PRACTISE/RECALL/ASSESS need them. Prefer short labels/icon with aria and tooltip; never fake working controls. Explicit prediction-before-reveal and specific incorrect feedback.
9. **Evidence truthfulness:** distinguish NOT_VISITED, VISITED, ATTEMPTED, SAVED_UNGRADED, SUBMITTED, VERIFIED, MASTERED. Next, time spent, opening hints, lật thẻ or clicking “I tried” do not prove understanding. Off-web spoken/paper artifacts need capture-source and verification status.
10. **Assessment independence:** A5/EXIT needs explicit start, isolated student-only question artifact, save/submit/incomplete policy, no content hints, no teacher answers in student bundle. Offline client-only code cannot guarantee exam secrecy from browser/OS history; state that limitation.

## Choosing screen count and recovery

A normal core scene may be added only when a distinct, necessary prerequisite needs explanation, overloaded content must split to remain legible, or the student needs an independent cognitive step. Record why it cannot be done as one staged scene, the source alignment, visual asset, time impact, and lesson rejoin. **Adaptive RECOVERY** scenes only appear after diagnostic evidence indicates need and return to core path; allocate their time outside the base schedule or explicitly rebalance. Do not attach recovery to every learner by default.

If the lesson's fixed time changes more than upstream tolerance, request schedule change rather than silently adding minutes. Skill09 must adapt to the clearer pedagogy proven in Skill10 without hiding missing upstream deliverables.

## Mandatory scene record

Each screen contract must contain: `scene_id`, `activity_id`, `source_refs`, `learning_intent`, `kind`, `page_purpose`, `teaching_copy`, `visual_rationale`, `keyword_refs`, `student_task` when meaningful, `student_output`, `completion_criteria`, `evidence_capture`, `attempt_rule`, `feedback_branches`, `reveal_gate`, `recovery`, `tutor_state`, `transition`, `estimated_seconds`, `assets/status`, `responsive`, `language_state`, `privacy/assessment`, and `status`.

Use scene kinds: `TEACH`, `OBSERVE`, `DIAGNOSE`, `EXPLORE`, `PRACTISE`, `COMPARE`, `RECALL`, `TEACH_BACK`, `ASSESS_INTRO`, `ASSESS`, `RECOVERY`. Each kind has different default composition and evidence: TEACH = explanation; EXPLORE = control + observed result; PRACTISE = one checkable task; RECALL = hidden answer until attempt; ASSESS = isolated independent work.

### Student help policy

- Tutor is default **SCRIPTED_TUTOR**, closed initially, no claims of generative understanding. Teacher script is distinct from student tutor.
- H1 spotting cue, H2 partial clue, H3 worked analogous support only after real attempt; never reveal key during EXIT.
- Wrong prerequisite triggers short example and another try, not a punishment or indefinite block.
- No unnecessary long “Bước 1/Bước 2” blocks on simple UI; use concise first-use cue and affordances.

## Artifacts required of Skill09

1. Input readiness and source provenance.
2. Scene map with core/optional/recovery and cognitive-load rationale.
3. Per-scene student copy with visual/explanatory obligations.
4. Navigation graph (including adaptive branches and rejoin).
5. Interaction and event-state contracts with honest checker status.
6. Evidence, support and feedback policy by scene.
7. Knowledge and assessment leakage guardrails.
8. Student vs staff bundle separation, accessibility and localization plan.
9. Time ledger preserving upstream schedule.
10. Asset status register, offline fallback and dependency gaps.
11. Skill10 visual handoff / 11 implementation handoff / 12 QA tests.
12. Approval and change ledger; independent validation report.

## Hard gates

- **S9-G1:** Student can tell from page copy what is being learned and why; no teacher explanation required.
- **S9-G2:** Every cognitive task has grounded visible information, a clear first move and output.
- **S9-G3:** Content/reveal states avoid premature answers; every target assessed somewhere suitable.
- **S9-G4:** Scene sequence/bridges and adaptive recovery are reachable and rejoin properly.
- **S9-G5:** Source objectives, duration and media status are preserved or have explicit approved change.
- **S9-G6:** No Dual or mandatory repeated TEACH forms; popovers/controls are compact.
- **S9-G7:** Evidence states distinguish mere viewing from learning verification.
- **S9-G8:** EXIT isolation and teacher-only content are correctly separated (technical implementation remains Skill11).

A contract may pass architectural consistency while **hi-fi screens remain pending visual review**; status must indicate this dependency honestly. Do not record DESIGN_PASS or IMPLEMENTED simply because JSON validation passed.

## Cookies synchronization (approved decisions 2026-11-17)

User approved CR01–CR08 and permitted extra screens when pedagogically justified. Keep the 22 existing IDs; insert A3-00 (55 seconds) to teach Session/Persistent before the six-item timeline. A3-01/A3-02/A3-03 reallocated to 135/120/110 seconds, keeping ACT03 420 seconds and whole core 42 minutes. Add D0-R01 and D0-R02 as recovery-only 45-second screens; not part of standard path or core time. Keep Skill10 v3.5.1 22-screen outputs unchanged; new/altered visuals must be reviewed before Skill11.
