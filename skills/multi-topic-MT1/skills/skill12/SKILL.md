---
name: learner-perspective-simulation-and-journey-audit
version: 2026.11-MT1
role: Skill 12 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Skill10_v3.3_and_New_Skill12_v1.0_13Skills.zip
---

# SKILL 12 — Learner Perspective Simulation & Journey Audit

## Nhiệm vụ và ranh giới
Mô phỏng học sinh học **cả buổi** qua topic boundaries và sau giải lao; phát hiện thiếu nền, quá tải, nhảy bước, không có sản phẩm.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Chạy persona chưa biết chủ đề sau, học sinh quên/nhầm nền, học sinh làm nhanh, bỏ qua, làm sai sửa, tạm nghỉ rồi quay lại và đường EXIT độc lập.
2. Ở mỗi transition hỏi học sinh có thể dùng kiến thức vừa học để hiểu câu hỏi phần sau không; nếu không, truy về Skill02/03/04/06/09.
3. Kiểm từng Recall không bị lộ, quiz đa dạng, ghi SKIPPED rõ, không nhận self-report là mastered; đánh giá tải nhận thức qua ba phần và một giờ dài.
4. Diễn tập quy trình nguồn/trình duyệt thật vs simulation, tốc độ nhịp và thực tế không có mạng/offline; đánh dấu giới hạn không có người thật.
5. Đưa issue register severity, owner skill, chứng cứ và đường sửa; chạy lại vùng ảnh hưởng sau chỉnh.


## Đầu ra, giữ nguyên tên và ID
- `12-full-session-learner-journey.md`
- `12-transition-and-retention-audit.csv`
- `12-branch-evidence.json`
- `12-repair-routing.md`


## Cổng chặn bàn giao
- **G1:** Đã mô phỏng ít nhất một luồng hoàn chỉnh đi xuyên 3 section và EXIT, không chỉ từng phần rời.
- **G2:** Không mô tả kết quả mô phỏng là bằng chứng học sinh thật đã hiểu.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Tham chiếu định nghĩa trước có thể kiểm chứng
- Các quy tắc có tính bền vững trong `BASE_LEARNER_AUDIT_v1.0.md` phải được giữ khi áp dụng MT1; nếu mâu thuẫn về tên skill theo pipeline thì đối chiếu `PIPELINE_CROSSWALK.md`.
