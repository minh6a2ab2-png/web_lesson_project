---
name: learning-experience-visual-designer
version: 2026.11-MT2-FROZEN
role: Skill 10 / 13 — Unified teaching pipeline
status: DEFINITION_MT2_CONSOLIDATED_AWAITING_REAL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0 + UNIFIED-RULES-MT2
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
- Đọc `../../policy/MT_CONTRACT.md`, `../../policy/GATES_AND_ROUTES.md` và `../../policy/UNIFIED_RULES_MT2.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Tham chiếu định nghĩa trước có thể kiểm chứng
- Các quy tắc có tính bền vững trong `APPROVED_BASE_VISUAL_v3.5.md` phải được giữ khi áp dụng MT1; nếu mâu thuẫn về tên skill theo pipeline thì đối chiếu `PIPELINE_CROSSWALK.md`.

## Bổ sung thống nhất MT2 — 17/11/2026
Thiết kế viewport lớn như slide, không navbar che; bố cục theo loại nội dung; recall hiện cue từng bước, quiz một câu/lượt; chỉ bật VI/EN nếu mọi nhãn và feedback đã dịch.

**Handoff bắt buộc:** Đọc `../../policy/UNIFIED_RULES_MT2.md`, nhận output của skill trước; phát hành đúng output của skill này có trạng thái TESTED/NOT_TESTED. Dừng nếu core knowledge chưa nguồn, Recall/Review chưa khớp hoặc thiếu chứng cứ.


## Chuẩn hóa chất lượng MT2 — yêu cầu bổ sung (ưu tiên khi sử dụng)
- Thiết kế slide-web thực thụ: khu vực học rộng, số trang/vị trí rõ, Back/Home/Next không che nội dung; sắp xếp khác nhau theo chức năng (sơ đồ, bảng so sánh, tình huống, thao tác, Quiz, Recall).
- Preview rõ states: chưa làm, đang làm, sai/gợi ý/thử lại, đúng, SKIPPED, offline; một cue Recall hiện lần lượt, không lộ mẫu trước nỗ lực.
- Tối thiểu thiết kế desktop, mobile dọc/ngang, zoom 200%, focus-visible, keyboard, contrast và cỡ chữ; màn hình học không phụ thuộc animation/chuyển động phức tạp.
- Chỉ có toggle VI/EN khi **mọi** UI/câu hỏi/feedback/caption đã dịch và test; không đưa nút chuyển giả; không trộn mã HTML code vào bản hi-fi.
- Khác với Skill09 (kiến trúc), Skill10 tạo hệ thị giác và mockup; khác Skill11 (lập trình), mockup không được tính là runtime pass.

### Cách đóng cổng và bàn giao sang bước tiếp
- Trả về manifest gồm `skill_id`, `version`, `session_id`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; nếu chưa chạy trên bài thật phải ghi `NOT_RUN`, không sinh sản phẩm minh họa giả.
- Khi một trường cốt lõi chưa có, trả `BLOCKED` hoặc `NEEDS_INPUT` và mô tả phương án bổ sung; không âm thầm thay nội dung/ thời lượng/phương pháp đã được duyệt.
- Trích dẫn tài liệu của người dùng và nguồn truy cập được; mọi bản nháp/bản trước được giữ để kiểm hồi quy.
