---
name: independent-lesson-quality-reviewer
version: 2026.11-MT1
role: Skill 13 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill13_FinalAudit_2026-11-17.zip
---

# SKILL 13 — Independent Lesson Quality Reviewer

## Nhiệm vụ và ranh giới
Độc lập nghiệm thu **bài giảng đa chủ đề** trên nguồn, kiến thức, độ phủ, phương pháp, cảm nhận người học, runtime, tính toàn vẹn phát hành.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Đối chiếu mục tiêu tổng và từng section: dạy, Recall, Quiz, transfer, EXIT; test đúng 3 kiểu kiến thức DNS/HTML/Cookie không nhầm tầng.
2. Kiểm thử như người dùng thật: Next, TOC, resume, localStorage disabled, ngôn ngữ, mobile/landscape, keyboard modal focus, zoom, xóa tiến độ, answer key isolation.
3. Đo đúng ngân sách thời gian duyệt và phần vượt do hỗ trợ/break; nếu vượt phải CR hoặc kế hoạch giảm cấp độ, không tuyên bố tự đạt.
4. Dùng regression từ Cookies Skill13 v1.2 (TOC skip, focus, tracking objective, device cleanup, translation) làm ca bắt buộc.
5. Báo cáo STRUCTURE/RUNTIME/COGNITIVE_PILOT/RELEASE độc lập, cổng FAIL ở P1/độ phủ CORE/tràn/answer leak; phân biệt evidence trên máy với pilot học sinh.


## Đầu ra, giữ nguyên tên và ID
- `13-multitopic-objective-coverage.csv`
- `13-independent-browser-results.json`
- `13-release-gates.json`
- `13-final-release-decision.md`


## Cổng chặn bàn giao
- **G1:** Không có CORE objective/section thiếu chứng cứ, không có lỗi điều hướng bỏ qua thiếu xác nhận.
- **G2:** Nếu chưa test thực tế => FIELD_NOT_VALIDATED; nếu blocker => RELEASE_BLOCKED không cho phát hành.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.
