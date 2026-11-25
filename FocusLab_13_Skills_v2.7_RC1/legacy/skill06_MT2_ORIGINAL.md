---
name: teaching-scenario-writer
version: 2026.11-MT2-FROZEN
role: Skill 06 / 13 — Unified teaching pipeline
status: DEFINITION_MT2_CONSOLIDATED_AWAITING_REAL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0 + UNIFIED-RULES-MT2
source_basis: Cookies_Skill06_v1.zip
---

# SKILL 06 — Teaching Scenario Writer

## Nhiệm vụ và ranh giới
Viết kịch bản dạy **liền mạch một buổi** với lời dẫn ngắn, hoạt động học sinh, kết luận và chuyển chủ đề tự nhiên.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Mỗi section có mở/khám phá hoặc giải thích → luyện tập → Recall → Quiz; mỗi activity ghi đủ giao nhiệm vụ → người học thực hiện → báo cáo/thảo luận → kết luận.
2. Soạn 2–3 câu chuyển topic bắt đầu từ sản phẩm thực tế phần trước; ví dụ DNS biết nơi cần đến, HTML cho thấy điều nhận về, Cookie giúp nhớ lựa chọn lần sau.
3. Có cột time planned/actual và cue giáo viên dừng nói; học sinh phải tự tìm hiểu/trình bày, không đưa toàn bài vào lời thoại GV.
4. Thiết kế nhánh chưa hiểu: một ví dụ mẫu, yêu cầu thử lại, quay về section; giữ đánh giá EXIT độc lập.
5. Trình bày kịch bản dùng cho dạy trực tiếp 1:1 và lời hỗ trợ cho tự học; ghi những đoạn không nên hiện cho học sinh.


## Đầu ra, giữ nguyên tên và ID
- `06-session-teaching-script.md`
- `06-bridge-prompts-and-questions.md`
- `06-activity-5512-implementation.md`
- `06-recall-quiz-feedback-script.json`


## Cổng chặn bàn giao
- **G1:** Mọi topic có cầu nối, không có khoảng nhảy từ một tiêu đề sang thuật ngữ chưa giải thích.
- **G2:** Script dự kiến không vượt time ledger; nhánh giúp/nhắc đáp án có điểm dừng rõ.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md`, `../../policy/GATES_AND_ROUTES.md` và `../../policy/UNIFIED_RULES_MT2.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Quy tắc nhịp buổi học bổ sung
- Đặt **một** game ôn tập ở đầu hoặc cuối toàn buổi, không lặp game cho từng topic; câu hỏi đa dạng nhưng phù hợp nền của học sinh.
- Sau giờ: mindmap vẽ lại từ trí nhớ, flashcards định nghĩa trước buổi sau và một lần teach-back.

## Bổ sung thống nhất MT2 — 17/11/2026
Lời thoại chỉ để trao việc, gợi mở, phản hồi và kết luận; mỗi hoạt động: giao nhiệm vụ→HS thực hiện→HS báo cáo→GV nhận xét/chốt. Có câu dẫn từ kết quả phần trước sang phần sau.

**Handoff bắt buộc:** Đọc `../../policy/UNIFIED_RULES_MT2.md`, nhận output của skill trước; phát hành đúng output của skill này có trạng thái TESTED/NOT_TESTED. Dừng nếu core knowledge chưa nguồn, Recall/Review chưa khớp hoặc thiếu chứng cứ.


## Chuẩn hóa chất lượng MT2 — yêu cầu bổ sung (ưu tiên khi sử dụng)
- Lời dẫn chỉ mở nhiệm vụ và chốt ý, không đọc toàn bộ kiến thức. Với mỗi hoạt động ghi đủ: giao nhiệm vụ cụ thể → HS thao tác/suy nghĩ → HS nói/báo cáo → GV phản hồi/chốt; có đáp án kỳ vọng và sai lầm thường gặp trong bản giáo viên.
- Kịch bản mỗi CORE section có nhịp trải nghiệm trực tiếp hoặc khám phá → HS giải thích → Recall (nói/ghi) → Quiz đa dạng → bridge; không đổi chủ đề chỉ bằng tiêu đề.
- Có lời dẫn dắt 1:1 có thể dùng thực tế, lượng lời GV ngắn, câu hỏi gợi mở bổ trợ 2 tầng, dấu hiệu cần dừng lại và ghi chú phần không chiếu cho HS.
- Giữ tổng thời lượng theo ledger Skill02, ghi `PROPOSED` nếu chưa duyệt; kịch bản hỗ trợ không được lén cộng phút cố định.

### Cách đóng cổng và bàn giao sang bước tiếp
- Trả về manifest gồm `skill_id`, `version`, `session_id`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; nếu chưa chạy trên bài thật phải ghi `NOT_RUN`, không sinh sản phẩm minh họa giả.
- Khi một trường cốt lõi chưa có, trả `BLOCKED` hoặc `NEEDS_INPUT` và mô tả phương án bổ sung; không âm thầm thay nội dung/ thời lượng/phương pháp đã được duyệt.
- Trích dẫn tài liệu của người dùng và nguồn truy cập được; mọi bản nháp/bản trước được giữ để kiểm hồi quy.
