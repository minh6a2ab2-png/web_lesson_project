# HANDOFF TO SKILL10 DELTA / SKILL11 / SKILL12

## Source-of-truth order
1. Skill08 2026-11-14 schedule and objectives (unchanged)
2. Approved CR01–CR08 and user's instruction to adapt Skill09 to clearer Skill10
3. This synchronized `09-10-synced-contract.json`
4. Skill10 v3.5.1 hi-fi (22 existing screens), **except** where this new contract requests content/reveal modifications
5. Skill10 delta preview for 3 new screens (needed before final DESIGN_PASS)

## Skill10 delta — must render/approve, not code production
- D0-R01, D0-R02: adaptive educational relief screens; existing main flow does not always show them
- A3-00: direct teaching of two cookie lifetime types, simple no-scroll 50/50
- Change A3-02, A4-01, A4-02 (hide answers)
- D0-01/02 and A2-03/A3-01 prediction/branch behavior
- Review 25-scene continuity, popover positions and number of words

## Skill11 implementation
- 25 scene definitions but default path skips both recovery screens; 23 standard linear screens (P00+20 core+P07 two)
- Completely remove Dual View and related state; keep one large scene
- Per-scene states and evidence sources, no auto-award mastery
- Student-facing teacher notes never bundled; staff reviewer guide remains separate
- Production interaction engine: choice/checker/branch/simulation/paper-oral evidence/EXIT isolation/persistence
- EN_PENDING: no fake toggle; include bilingual content only after reviewed translation

## Skill12 verification
- Validate running code against all state transitions including D0 diagnosis remediation and EXIT lockdown; test offline and mobile, zoom, keyboard/screenreader.
- Student self-study test: can explain goal, next action, content from page, feedback, and relation to previous scene without continuous teacher explanation.

## Security caveat
An offline, single-page HTML app cannot guarantee prevention of OS/browser history access or absence of other tabs. Independent assessment requires honest teacher-supervised policy or separate isolated files; do not claim secure exam.
