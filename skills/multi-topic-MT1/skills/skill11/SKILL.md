---
name: html-lesson-developer
version: 2026.11-MT1
role: Skill 11 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill11_v1.2_Repair_2026-11-17.zip
---

# SKILL 11 — HTML Lesson Developer

## Nhiệm vụ và ranh giới
Lập trình website nhiều phần theo hợp đồng và kiểm thử các đường học thật; phân biệt student progress khỏi teacher verification.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Xây một file HTML độc lập hoặc bộ HTML/CSS/JS phù hợp, import dữ liệu bằng ID `session/topic/section/scene/question/cue`; không hardcode 22/30 scene.
2. State machine chứa trạng thái từng section, attempted/skipped/submitted/verified, checkpoint/resume, migration phiên bản có kiểm thử; dữ liệu chỉ dùng cục bộ khi không có backend.
3. Routing guard dùng chung cho next, TOC, phím tắt, direct jump, resume; tránh lỗi Skill13 Cookies v1.2: mục lục bỏ qua không xác nhận.
4. Lập trình đủ 5 kiểu câu hỏi, Recall mẫu gated, bridge, integrated transfer, EXIT cô lập; trả sai gợi ý trước/cho thử lại.
5. Kiểm thử file://, browser storage denied, desktop/mobile/landscape, zoom 200%, keyboard/focus trap và khôi phục, erase/export.


## Đầu ra, giữ nguyên tên và ID
- `11-production-site/`
- `11-state-and-migration-tests.json`
- `11-browser-e2e-report.json`
- `11-build-manifest.json`


## Cổng chặn bàn giao
- **G1:** Không một đường nào không có cảnh báo khi bỏ qua quiz/recall; không gọi trang đã xem là mastered.
- **G2:** Bản English chỉ khả dụng nếu mọi màn có nội dung thật và test; test site trên browser thật, không chỉ lint.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.
