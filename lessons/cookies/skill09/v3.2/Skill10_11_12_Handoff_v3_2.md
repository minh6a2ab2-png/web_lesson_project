# Skill 09 → Skill 10 / 11 / 12 (v3.2)

**Skill 10 (visual design):** Tạo design tokens, hi-fi layout cho ít nhất 8 pattern và các states (desktop 1440, tablet 820, mobile 375). Chỉ có topbar và nội dung scene. Khả năng zoom, two-pane layout responsive, notebook drawer, contrast/focus. Không áp fixed 16:9 nếu làm chật nội dung.

**Skill 07 bổ sung tài nguyên (theo backlog):** UI hai trạng thái tiếng Việt/chưa chọn, timeline trống, thẻ minh họa công dụng, matrix lifespan/purpose, flashcard. Mỗi asset phải ghi READY/PROTOTYPE/SPEC_ONLY/BLOCKED, quyền dùng, alt/caption, fallback và test. Tái sử dụng Skill07 v1.1 trước khi tạo mới.

**Skill 11 (engine):** Một scene model dùng cho mọi renderer; implement transitions, timer optional, Dual View adjacent/free/ratio/swap, notebook persistence/export, knowledge unlock after completion, binding evidence from real exercises, EXIT independent. Save state not auto-grade; separate teacher/student build. `visual_lab.html`, `learning_lab.html` and `exit_independent.html` are NOT yet integrated into this prototype.

**Skill 12 (QA):** file:// offline on Chrome/Edge, mobile/tablet/desktop, arrows/swap/scroll, focus/reduced motion/alt, all A2 accept/block/expiry cases, regression on 22 scenes and 6 activity times, localStorage cross-refresh, export/reimport safety, EXIT cannot open old content, teacher key absence, pilot 1:1.

**Required invariants:** `P00 → D0 → ACT01 → ACT02 → ACT03 → ACT04 → ACT05 → P07` and 22 IDs untouched. D0–ACT05 42 min, P00/P07 outside unless separately adjusted. No background sync, no claim of student mastery. **Current status:** Skill09 design ready; prototype partial; Skill11/12 pending.
