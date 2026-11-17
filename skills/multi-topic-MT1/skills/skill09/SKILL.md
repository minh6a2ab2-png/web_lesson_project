---
name: interactive-website-architect
version: 2026.11-MT1
role: Skill 09 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill09_10_Synchronized_v3.5_2026-11-17.zip
---

# SKILL 09 — Interactive Website Architect

## Nhiệm vụ và ranh giới
Biến giáo án thành **một website nhiều phần nối tiếp** với kiến trúc màn/hợp đồng học tập và điều hướng thống nhất.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Tạo `scene_graph` theo `session_id`, `topic_id`, `section_id`; thứ tự không cố định 22/30 màn; mọi section CORE có cặp Recall→Quiz trước khi qua phần mới.
2. Mỗi scene có mục đích, nội dung học sinh nhìn thấy, nhiệm vụ cụ thể, evidence, completion_criteria, hint, feedback, next/return, ID bền vững.
3. Cổng điều hướng thống nhất cho Next/TOC/shortcut/Back/resume: không được âm thầm bỏ qua Recall/Quiz, nếu bỏ thì xin xác nhận và ghi SKIPPED.
4. Tạo bridge scenes và một integrated transfer/EXIT gắn các topic; thứ tự chỉ dùng nội dung đã dạy, cảnh đơn giản dùng TEACH ngắn.
5. Lựa chọn layout nhiều section như slide; một màn tập trung, không Dual, glossary bong bóng; không nhập bắt buộc ở TEACH.


## Đầu ra, giữ nguyên tên và ID
- `09-multitopic-scene-contract.json`
- `09-navigation-graph.json`
- `09-learner-evidence-state-model.md`
- `09-qa-traceability.json`


## Cổng chặn bàn giao
- **G1:** Tất cả section bắt buộc có Recall/Quiz và bridge đúng chỗ; không gộp quiz của topic này thành topic khác.
- **G2:** Không có đường nhảy qua nội dung bắt buộc mà thiếu xác nhận/gắn trạng thái; EXIT bảo vệ khỏi answer leak.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Tham chiếu định nghĩa trước có thể kiểm chứng
- Các quy tắc có tính bền vững trong `APPROVED_BASE_CONTENT_FIRST_v3.5.md` phải được giữ khi áp dụng MT1; nếu mâu thuẫn về tên skill theo pipeline thì đối chiếu `PIPELINE_CROSSWALK.md`.
