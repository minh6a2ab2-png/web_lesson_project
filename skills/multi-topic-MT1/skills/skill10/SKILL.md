---
name: learning-experience-visual-designer
version: 2026.11-MT1
role: Skill 10 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Skill10_v3.5_Approved_Standard.zip
---

# SKILL 10 — Learning Experience Visual Designer

## Nhiệm vụ và ranh giới
Thiết kế **hệ thị giác thống nhất** trên nhiều chủ đề, vừa thấy rõ bước hiện tại vừa không làm phần khác thành app nhiều panel.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Một slide lớn, có theme kế thừa toàn buổi và điểm nhấn theo topic, đánh số phần/progress vừa đủ; không che nội dung.
2. Tạo preview TEACH, EXPLORE, BRIDGE, ACTIVE_RECALL, REVIEW_QUIZ, INTEGRATED_TRANSFER, EXIT; có trạng thái trước/đang/thử sai/đúng.
3. Dùng bố cục đặc thù: sơ đồ DNS, ví dụ HTML before/after, luồng Cookie; không dùng một template cứng cho tất cả dù cùng hệ thống typography.
4. Thiết kế Recall cue lần lượt và review 1 câu/lượt, không đưa đáp án trước thử. Có hỗ trợ chữ to, bàn phím, điện thoại, phóng đại, modal focus.
5. Có bản VI/EN thực mới bật toggle; tách teacher guide/answer key; không giả vờ hi-fi đã thành code đã thử.


## Đầu ra, giữ nguyên tên và ID
- `10-design-system-multitopic.md`
- `10-scene-layout-and-states.json`
- `10-hifi-previews/`
- `10-visual-a11y-qa.md`


## Cổng chặn bàn giao
- **G1:** Mọi section có preview cặp Recall/Quiz với hiển thị đúng trạng thái; bridge dễ hiểu.
- **G2:** Không có slide chật và không có một navbar/modal phủ phần dưới ở viewport thử.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Tham chiếu định nghĩa trước có thể kiểm chứng
- Các quy tắc có tính bền vững trong `APPROVED_BASE_VISUAL_v3.5.md` phải được giữ khi áp dụng MT1; nếu mâu thuẫn về tên skill theo pipeline thì đối chiếu `PIPELINE_CROSSWALK.md`.
