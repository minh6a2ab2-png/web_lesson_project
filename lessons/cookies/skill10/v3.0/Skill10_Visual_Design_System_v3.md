# Skill 10 v3.0 — Visual Design System (bản thiết kế ban đầu)

**Đầu vào:** Skill09 v3 architecture + 22-scene contract. **Trạng thái:** visual system/prototype; không thay thế triển khai đầy đủ 22 màn hi-fi.

## Design principles

- Modern Classroom: thoáng, chữ lớn, một mục tiêu trọng tâm; dùng visual khi phục vụ kiến thức, không dùng ảnh stock trang trí.
- Editorial Story: visual xuất hiện gắn với mốc dự đoán/phát hiện; không tự động phát hiệu ứng dài.
- Lab-first mechanics: giả thuyết → thay đổi thông số → chạy → giải thích; dữ liệu giả lập.
- Adaptive display: mỗi chế độ có quy tắc bố cục; không co hình 16:9 để nhồi hai slide trên màn nhỏ.
- Accessible: không phụ thuộc màu để phân biệt, có nhãn/mũi tên chữ, Tab/focus, alt/caption, reduced motion.

## Tokens đề xuất

| Token | Giá trị | Mục đích |
|---|---|---|
| `--bg` | `#F2F6F9` | Nền ngoài canvas |
| `--ink` | `#112B3C` | Văn bản chính |
| `--primary` | `#146D9A` | Hành động và tiêu đề tương tác |
| `--teal` | `#10ACAA` | Nhấn sơ đồ/tương tác |
| `--line` | `#D8E3E9` | Đường phân cách nhẹ |
| `--surface` | `#FFFFFF` | Thẻ và canvas |
| `--focus` | `#E79C25` | Viền focus rõ |
| Radius | `10–20px` | Nhóm thẻ, không lạm dụng bóng đổ |
| Typography | System UI; 16–18px body; ~28–48px titles theo viewport | Phù hợp máy tính và thiết bị nhỏ |
| Grid/gap | khoảng 8px cơ sở, các cấp 8/12/16/24/32 | Nhịp nhìn nhất quán |

## Hi-fi component inventory

- Topbar: lớp học, current section, chọn mode, không che nội dung.
- Presentation canvas: scene title, visual, prompt, reveal, điều hướng.
- Story chapter: số bước, cùng một bối cảnh, reveal có kiểm soát.
- Lab workspace: condition controls, preview browser/server, feedback, reset, evidence.
- Dual View: selectors, pair/free switch, ratios 50/50 60/40 40/60, swap, independent scroll.
- Knowledge Map: keyword nodes, hidden/reveal branches, navigation actions.
- Focus: prompt-only, answer surface, no scoring until teacher review.
- Assessment: student-only clean surface, no keys, no previous content tabs.

## Responsive behavior

- >=1024px: full mode navigation, main canvas max width 1440, Dual in two columns.
- 768–1023px: component layouts stack; Dual may stack on narrower viewport.
- <=767px: single column, mode controls 2 columns, Dual vertical, minimum touch target ~44px.
- Never hard-code a height that clips main content. If dense, use natural scroll or independently scrollable panes with visible affordances.
- Avoid unsupported motion; when animations included, support play/pause/step, `prefers-reduced-motion`.

## Review checklist for Skill10 completion

- [ ] 22 hi-fi scenes reviewed, teacher/student separation agreed.
- [x] Visual tokens and 6-mode component concept available.
- [x] Dual View layout retained from v2.1 with vertical responsive mode.
- [ ] Original asset P0 created, placed and reviewed for accuracy.
- [ ] Contrast and keyboard tested comprehensively on final integration.
- [ ] Correct rendering across browsers and devices independently verified.

**Đây là quy chuẩn thiết kế đã phác thảo và một prototype.** Không gọi là Skill10 đã nghiệm thu; cần design QA trên từng scene và asset thực.
