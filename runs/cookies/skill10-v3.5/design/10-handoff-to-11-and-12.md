# Cookies — Skill 10 v3.5 — 17/11/2026

**Nguồn chính xác:** `source/09-implementation-contract.json` (Skill 09 v3.4), 22 scene IDs; `source/SKILL10_v3.5_APPROVED_STANDARD.md` (10 tiêu chí người dùng đã duyệt); hồ sơ Skill04 Cookies (nền chưa vững, quên giữa chặng, thích ICT, cần chỉ dẫn rõ, chưa có D0 thực tế). **Đầu ra hiện tại:** hi-fi prototype, KHÔNG phải Skill11 mới hay thử nghiệm với học sinh thật.

## Handoff cho Skill11
- Xem `prototype/index.html` (đầy đủ local CSS/JS và data.js), `design/10-scene-design-manifest.json`, 6 SVG trong `prototype/assets/`, 44 preview.
- Không dùng bản prototype để suy ra logic Cookie: lấy Skill09 contract + Skill07 engine specs. Set-Cookie Response Server→Browser; Browser có thể lưu/chặn; Cookie gửi lại Request khi đúng phạm vi/thời hạn.
- Implement các components: 6 layout modes, keyword fixed popover (hover/click/tap/focus/Esc/outside), “Em có biết?” comic bubble, compact controls, tutor contextual, mindmap/flashcard, Dual two visual panes, Notebook, EXIT isolation.
- Thay UI-only state bằng engine deterministic + meaningful-attempt per scene; không đếm số ký tự hoặc bấm Next là mastery. Sửa hai lỗi P0 Skill12 trước: H3 spoof và EXIT blank.
- Bổ sung persistent storage/import-export nếu được chấp thuận, no personal cookies, tránh khóa và đáp án trong student bundle.
- Không bật VI/EN trước khi có bản dịch được duyệt.

## Handoff cho Skill12 (sau Skill11)
- Thử 5 persona branches Skill04 (unknown prereq, cần gợi ý, quên kiến thức, đã biết tiền đề, cần thêm thời gian).
- Walk đủ 22 scene; check continuity `10-cross-scene-continuity.md`, content sufficiency `10-content-sufficiency-qa.md` và khả năng đọc không cần giáo viên giải thích ngoài UI.
- Tái thử A2-03/A2-04 meaningful attempt, A3-01 reveal, A5-02 blank, EXIT isolation, D0 remediation, RECAll after delay, talk/draw/cards equivalence.
- Đánh giá hành trình của học sinh chỉ là mô phỏng AI; pilot thật cần thực hiện sau khi sản phẩm đủ QA.

## Handoff cho Skill13
Windows/Edge/Chrome file://, browser zoom 200%, NVDA, real device touch and focus, persistence, full security and source/copyright audit. Không tái dùng smoke test như bằng chứng nghiệm thu sản phẩm.
