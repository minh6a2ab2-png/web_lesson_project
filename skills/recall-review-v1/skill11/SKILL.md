---
name: html-lesson-developer
version: 1.1
role: Skill 11 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Cookies_Skill11_v1.0_Interactive_22Scenes_2026-11-15.zip (implementation sample), no complete generic SKILL11 definition verified"
---

# SKILL 11 v1.1 — HTML Lesson Developer

## Vai trò và lý do nâng cấp
HTML Lesson Developer tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Lập trình từ manifest thiếu Recall/Quiz sẽ bỏ màn; cần assert compile-time và E2E, không suy ra đã học từ Next.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Skill 11 chỉ khởi chạy khi cấu trúc Skill09 và thiết kế Skill10 qua gate; không tự phát minh số màn hoặc cắt Recall/Quiz để khớp thời gian.
2. Render mọi cặp Recall/Quiz từ hợp đồng bằng UI thực; lưu state theo cue và question ID, attempt count, phản hồi, retry, resume, và output giấy/nói chưa được xác nhận.
3. Kiểm đáp án không hiển thị trước attempt; khóa EXIT ở client/luồng giáo viên phù hợp, không đưa khóa EXIT học sinh có thể mở ngay; không giả vờ bảo mật tuyệt đối với HTML tĩnh.
4. Quiz sắp xếp phải xáo trộn hợp lệ nhưng không dùng trick đánh đố; ghép đôi, trắc nghiệm, đúng/sai, chọn nhiều hỗ trợ keyboard/touch và screen readers.
5. Viết test `assert_section_pairs`, `attempt_before_reveal`, `feedback`, `restart/resume`, `route_rejoin`, `mobile`, `zoom`, `offline`, `teacher-key-isolated` và chụp ảnh mọi trạng thái.
6. Thời gian tăng không được nén để giữ mục tiêu cũ; hiển thị/dán nhãn phiên bản bản xem trước.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `11-production-site/`
- `11-runtime-test-report.json`
- `11-browser-screenshots/`
- `11-reinforcement-state-log.json`
- `11-qa-blockers.md`

## Hard gates trước khi bàn giao
- **G1:** Nếu thiếu cặp màn: BUILD_FAIL.
- **G2:** Nếu quiz mô phỏng chỉ là nút giả: BUILD_FAIL.
- **G3:** Nếu chỉ syntax pass: chưa phải E2E_PASS.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
