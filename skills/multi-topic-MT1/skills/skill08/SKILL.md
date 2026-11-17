---
name: cv5512-lesson-plan-writer
version: 2026.11-MT1
role: Skill 08 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill08_CV5512_v1_0.zip
---

# SKILL 08 — CV5512 Lesson Plan Writer

## Nhiệm vụ và ranh giới
Chuẩn hóa **một giáo án CV5512 tổng thể** gồm nhiều section CORE, không chia thành nhiều giáo án Cookie/DNS/HTML riêng để ghép tùy tiện.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Đặt mục tiêu tích hợp toàn buổi, thiết bị/học liệu, bốn bước tổ chức từng hoạt động CV5512 với sản phẩm và nhận xét.
2. Kế hoạch bao gồm mở đầu, section 1+Recall+Quiz, transition, section 2+Recall+Quiz, break khi cần, section 3+Recall+Quiz, transfer, EXIT, kết thúc.
3. Duyệt thời lượng tổng và phương án hỗ trợ; nếu vượt buổi đã chốt, tạo CR thay vì tự đổi phút.
4. Đối chiếu một mục tiêu thuộc nhiều topic với hoạt động vận dụng tích hợp nhưng không thay thế bài Recall/Quiz theo section.
5. Chuẩn hóa bảng GV làm/HS làm/sản phẩm/đánh giá, chèn phương án offline, học liệu và các lời nối giữa phần.


## Đầu ra, giữ nguyên tên và ID
- `08-one-session-cv5512-lesson-plan.md`
- `08-session-time-and-activity-table.csv`
- `08-skill09-handoff.json`
- `08-preflight-checklist.md`


## Cổng chặn bàn giao
- **G1:** Đủ 4 bước và sản phẩm cho mỗi hoạt động; không bỏ Recall/Quiz ở phần vì ngân sách thiếu.
- **G2:** Có bằng chứng thời gian đã được duyệt; tài liệu 120 phút fixture chỉ là mẫu minh họa.

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
