# Changelog

## 2026-11-23 — ONE_TOPIC FocusLab v2
- Tạo 13 định nghĩa độc lập từ baseline MT2, giữ nguyên bản MT2 trong `legacy/`.
- Chốt **13 kinds** trong v2; v2.2 nâng lên **14 kinds**, trong đó có `INTRODUCTION`; `kind` tách với `layout_mode`.
- Chốt **two-phase reveal v3**: opening cue → 2.5s → remaining content đồng thời, không adaptive dwell; có `instant_reveal` và `reduce_motion` độc lập.
- Bổ sung OBSERVE central question, DIAGNOSE đúng recap model / sai Recovery, tooltip hover tự ẩn, modal focus, one CTA.
- Bắt buộc mô hình cơ chế có input→state change, test case, replay/reset nếu phù hợp, reduced motion vẫn update state.
- Bổ sung viewport-fit fixed footer/no scroll/clip/readability; không `Part 1/2` hoặc sub-page chỉ vì kỹ thuật.
- QA cho 1280×720, 1366×768, 1600×900, 1920×1080 và stress/mobile/zoom; phân biệt static check, browser check, field validation.
- Xuất schema, fixture, test suite mới và ma trận thay đổi. **Chưa sửa Cookies website/MT3.**

## 23/11/2026 — Skill07 v2.1
- Tích hợp Model Design Standard v1.0 vào toàn bộ quy trình Skill07; xem `SKILL07_UPGRADE_NOTES.md`.
- Thêm schema/contract/checklist/test tĩnh mới; 12 Skills còn lại giữ nguyên.
- Chưa kiểm thử lại mô hình DNS, chưa tự tăng READY_ASSET.


## ONE_TOPIC FocusLab v2.2 — 23/11/2026
- Điều chỉnh toàn bộ 13 `SKILL.md`, bổ sung dẫn dắt theo `PROBLEM_CONTEXT` có đủ tiêu đề, bối cảnh, thực trạng/nhu cầu, gap, vấn đề, minh họa có nguồn và cầu nối.
- Nâng enum từ 13 lên 14 Scene Kinds (không tăng 13 Skills); PROBLEM_CONTEXT là **tùy chọn**, OBSERVE vẫn đúng chức năng thu bằng chứng.
- Cần chứng minh hai nhiệm vụ/evidence độc lập mới tách 2 scene. Không dùng vì quá tải hoặc chỉ để thêm câu chữ.
- Schema/validator/fixtures/test mới; vẫn giữ nguyên Model Design Standard v2.1 trong Skill07.
- Bổ sung bàn giao DNS 01–08, với 11 hoạt động không đổi, 2 scene mở đầu dự kiến và asset bối cảnh đang SPEC_ONLY.
- Các bản v2/v2.1 và MT2-FROZEN được giữ ngoài gói hoặc trong legacy. Không nâng trạng thái RELEASE hay model QA.
