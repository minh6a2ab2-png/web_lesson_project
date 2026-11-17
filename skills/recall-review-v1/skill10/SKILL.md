---
name: learning-experience-visual-designer
version: 3.6
role: Skill 10 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "SKILL10_v3.5_APPROVED_STANDARD.md + Cookies Skill10 v3.5.3 proposal; 10 visual criteria unchanged"
---

# SKILL 10 v3.6 — Learning Experience Visual Designer

## Vai trò và lý do nâng cấp
Learning Experience Visual Designer tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Hi-fi pass dù giáo án/kiến trúc thiếu màn; cần tiêu chí hình thức riêng cho Recall/Review và kiểm coverage.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Giữ nguyên 10 tiêu chí thiết kế đã được người dùng duyệt: content-first, layout linh hoạt, keyword popover nổi, không Dual View, không cuộn ở laptop mục tiêu.
2. Mẫu Recall: một cue lớn mỗi lượt, thẻ từ khóa/hình, nút đã tự nói/ghi và mở đối chiếu sau; tránh biến thành trắc nghiệm.
3. Mẫu Review: một câu chiếm vùng chính mỗi lượt, 2–4 câu/phần vừa đủ; hiển thị dạng câu linh hoạt, phản hồi theo lỗi, nút làm lại gọn, keyboard/touch.
4. Với mỗi section tạo preview tối thiểu 4 trạng thái: recall trước/thử/sau đối chiếu; quiz chưa thử/trả lời sai/trả lời đúng; dùng hi-fi copy thật, không placeholder.
5. Kiểm lại các màn sau khi được chèn: kích thước, giải thích, câu nối, tràn layout mobile, không lộ answer và không giảm kích thước các sơ đồ khác.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `10-recall-and-review-hifi-previews/`
- `10-scene-states-manifest.json`
- `10-design-acceptance-matrix.csv`
- `10-learner-copy-teacher-separation.md`

## Hard gates trước khi bàn giao
- **G1:** Đủ cả 2 hi-fi screens mỗi section, không chỉ metadata.
- **G2:** Không đưa câu đúng trước self-attempt.
- **G3:** Chưa browser test thì chỉ gọi DESIGN_SPEC_PASS, không gọi VIEWPORT_PASS.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
