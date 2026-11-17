---
name: learner-profile-fit-and-activity-design
version: 2026.11-MT1
role: Skill 04 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill04_v1_ProfileFit.zip
---

# SKILL 04 — Learner Profile Fit & Activity Design

## Nhiệm vụ và ranh giới
Chọn phương pháp theo từng section và người học, cân bằng chủ động và giải thích trực tiếp; thiết kế luồng nhận thức xuyên nhiều chủ đề.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Rà hồ sơ học sinh có mức tin cậy; không biến nhận xét nghe lâu buồn ngủ thành nhãn năng lực cố định.
2. Chấm độ nặng/tiên quyết/năng lực nền theo section; dùng rubric lựa chọn phương pháp như hiện có, không chọn IBL đồng loạt.
3. Phân biệt định nghĩa gọn dùng TEACH ngắn, khái niệm hoạt động dùng PREDICT–EXPLORE–EXPLAIN, khái niệm phức hợp dùng nhiệm vụ điều tra; luân phiên tránh mệt mỏi.
4. Thiết kế Recall 2–4 cue tự nói/ghi và Quiz 2–4 câu ≥2 dạng theo từng section; phân nhánh trợ giúp với điều kiện quay lại.
5. Đánh giá tải nhận thức toàn buổi, vị trí nghỉ/chuyển mạch, mục tiêu không chồng chéo và quyền sử dụng công cụ thật khi khả thi.


## Đầu ra, giữ nguyên tên và ID
- `04-method-rubric-by-section.csv`
- `04-activity-and-assistance-plan.md`
- `04-learner-load-map.md`
- `04-recall-review-method-design.json`


## Cổng chặn bàn giao
- **G1:** Mỗi section CORE có căn cứ chọn phương pháp rõ và cân nhắc một phương án nhẹ hơn.
- **G2:** Không biến 3 topic thành 3 chuỗi IBL dài nếu không đủ thời gian; không loại học sinh khỏi hoạt động chủ động.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Quy tắc nhịp buổi học bổ sung
- Đặt **một** game ôn tập ở đầu hoặc cuối toàn buổi, không lặp game cho từng topic; câu hỏi đa dạng nhưng phù hợp nền của học sinh.
- Sau giờ: mindmap vẽ lại từ trí nhớ, flashcards định nghĩa trước buổi sau và một lần teach-back.
