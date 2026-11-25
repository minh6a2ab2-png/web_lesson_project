# FocusLab v2.6 — Automation pilot (NOT A RELEASE)

Baseline: 1984f3e892de5ce50c60ee3b3a2255ae52b447c9 (v2.5). No baseline files altered.
Scope: test infrastructure, not student material or approval of Skill07. No Skill08 execution.
Public repository: only public source URLs and synthetic fixture; no learner profiles, teacher keys, private screenshots, credentials, or full checkpoints. Do not upload stock image originals as public CI artifacts; production acquisition needs a permitted private/lesson-context handoff.

## Human-effort policy
Default: automated native task → supported connector → bounded CI job → compatible approved fallback/cache → one batched user request only when blocked. Source permissions and mandatory gates override convenience. Record manual minutes and number of interventions, not invented percentages. No paid API, secrets, or unbounded retries without explicit approval. User only approves significant pedagogy/design/release decisions. No need to run 13 skills sequentially when independent tasks can be reused; invalidated dependencies must be retested.

## Pilot acceptance (separate gates)
A: six approved public image URLs return valid decodable images; hashes/credits logged; no raw photo redistribution.
B: synthetic HTTP fixture opens via actual localhost AND file://; both success/missing paths and reset work; screenshots.
C: render a short silent synthetic explainer MP4, verify duration/codec.
D: upload artifact, read back and validate contents/hash; connector availability alone is not pass.
E: dependency invalidation/cache demonstration; production DAG remains unimplemented.
F: repeat B with exact R04 model and run full Skill07 checklist later. R04 is not part of this public pilot.
Any missing evidence => NOT_RUN/BLOCKED; do not mark released. Manual intervention only if actual capability blocked. Pilot one job, ten-minute timeout, seven-day artifacts, no secrets, no publication or merge.
