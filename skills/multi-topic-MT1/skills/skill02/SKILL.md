---
name: lesson-architecture-and-assessment
version: 2026.11-MT1
role: Skill 02 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill02_v1.zip
---

# SKILL 02 — Lesson Architecture & Assessment

## Nhiệm vụ và ranh giới
Xây cấu trúc **một buổi học duy nhất**: chuẩn đầu ra tổng, các section CORE, ngưỡng đánh giá, liên hệ và ngân sách; không chọn phương pháp.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Đặt `session_outcome`, phân nhóm topic/section theo mục tiêu, không xé nhỏ mỗi dòng SGK thành một section. Xác định người học cần nhớ và có thể vận dụng gì.
2. Đồ thị `prerequisites` và thứ tự `topic_sequence`; mô tả kết nối giữa phần chứ không xếp ngẫu nhiên trang của từng môn.
3. Lập bảng thời gian toàn buổi gồm đầu giờ, từng section, cặp Recall/Quiz, bridge, vận dụng liên chủ đề, EXIT, break, wrap-up, nhánh hỗ trợ.
4. Tạo `objective_evidence_matrix`: CORE phải có dạy → recall → quiz → transfer/EXIT, mức đạt và dấu hiệu nhầm. Phân biệt quiz của section và bài đánh giá tích hợp.
5. Nếu tổng vượt thời lượng buổi, tạo các kịch bản thay đổi độ sâu hoặc tách buổi với CR, không bỏ cặp Recall/Quiz.


## Đầu ra, giữ nguyên tên và ID
- `02-session-architecture.json`
- `02-section-and-prerequisite-map.csv`
- `02-time-ledger.csv`
- `02-assessment-evidence-blueprint.md`


## Cổng chặn bàn giao
- **G1:** Sổ thời gian khớp ngân sách; số section phát sinh từ mục tiêu chứ không từ số màn hiện có.
- **G2:** Mỗi section CORE có dự toán Recall/Quiz riêng và ít nhất một transition đã xác định.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.
