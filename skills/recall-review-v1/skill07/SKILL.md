---
name: activity-resource-designer
version: 1.2
role: Skill 07 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Cookies_Skill07_v1_1_Full_Teacher.zip: resource_manifest.json, visual_resource_manifest_v1_1.json, Skill08_Handoff_And_Implementation_Status.md"
---

# SKILL 07 v1.2 — Activity Resource Designer

## Vai trò và lý do nâng cấp
Activity Resource Designer tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Đã làm học liệu cơ chế/phiếu in nhưng chưa có catalog nguồn lực bắt buộc cho Quiz của từng phần.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Sản xuất cue Active Recall thực tế (hình gốc/SVG/từ khóa), từng cue có alt, câu hỏi nhắc nhớ, mẫu đối chiếu riêng và fallback in giấy.
2. Sản xuất ngân hàng Review có ID ổn định, dạng câu đa dạng, đáp án + feedback theo lỗi, khả năng thử lại; bộ thực hành riêng với khóa EXIT.
3. Đánh dấu từng asset `READY`, `PROTOTYPE`, `SPEC_ONLY`, `BLOCKED` và `TESTED/NOT_TESTED` trung thực; không nhận đã tạo nếu chỉ đặc tả.
4. Kiểm tra trực quan không lộ câu trả lời trong cue, bố cục mobile và license/nguồn; sắp xếp phải xáo trộn hợp lệ, ghép đôi không có thứ tự đáp án gợi lộ.
5. Cho bản HTML/giấy hoạt động khi offline và tương đương thao tác bàn phím.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `07-recall-assets-manifest.json`
- `07-review-bank.json`
- `07-teacher-answer-key.private.md`
- `07-offline-fallback-pack.md`
- `07-assets-qa-report.md`

## Hard gates trước khi bàn giao
- **G1:** Mỗi phần có đủ cue/quiz asset thật hoặc ghi BLOCKED rõ.
- **G2:** Không trộn answer key EXIT vào học liệu công khai.
- **G3:** Nếu trạng thái SPEC_ONLY thì chặn chuyển sang READY triển khai.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
