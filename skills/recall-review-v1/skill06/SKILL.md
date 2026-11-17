---
name: teaching-scenario-writer
version: 1.1
role: Skill 06 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Cookies_Skill06_v1.zip: 01_Teaching_Scenario_Full.md, 02_Prompts_Feedback_Branches.md, 04_Quality_Gate_Handoff_Skill07.md"
---

# SKILL 06 v1.1 — Teaching Scenario Writer

## Vai trò và lý do nâng cấp
Teaching Scenario Writer tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Lời dẫn cũ nêu Recall sau ACT01–04 nhưng không cấp một đoạn kịch bản riêng cho cả Recall và Quiz.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Mỗi phần có kịch bản độc lập **R1: Active Recall** và **R2: Review** đặt sau nội dung chính, trước phần kế tiếp.
2. R1 bắt đầu bằng cue trực quan, giáo viên nói tối đa một chỉ dẫn ngắn; học sinh tự kể/ghi vào vở rồi mở mẫu. Viết câu chốt và câu chuyển R1→R2.
3. R2 diễn đạt mục tiêu câu hỏi, cách bắt đầu và phản hồi theo loại lỗi; không đọc đáp án hoặc giải thích trước khi học sinh chọn.
4. Kịch bản đủ 4 bước CV5512: chuyển giao → thực hiện → báo cáo/thảo luận → nhận xét/kết luận; tách lời nói GV và việc HS tự làm.
5. Ghi thời gian tối đa theo phần, gợi ý H1–H3, trường hợp HS đã vững hoặc quên nền, và giấy/offline fallback.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `06-teacher-script-section-recall-review.md`
- `06-feedback-remediation-prompts.md`
- `06-time-ledger.md`

## Hard gates trước khi bàn giao
- **G1:** Có đủ lời dẫn riêng cho hai màn mỗi phần.
- **G2:** Không có câu trả lời mẫu trong lời dẫn trước lúc thử.
- **G3:** Người dạy không phải nói liên tục để thay thế thiếu nội dung trên màn.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
