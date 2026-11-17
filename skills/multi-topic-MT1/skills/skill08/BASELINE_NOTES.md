---
name: cv5512-lesson-plan-writer
version: 1.1
role: Skill 08 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Cookies_Skill08_CV5512_v1_0.zip: Skill08_Lesson_Plan_CV5512.md, Skill09_Handoff.md"
---

# SKILL 08 v1.1 — CV5512 Lesson Plan Writer

## Vai trò và lý do nâng cấp
CV5512 Lesson Plan Writer tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Giáo án 42 phút đã đặt Recall chủ yếu ở củng cố cuối và chưa lập màn Quiz riêng cuối mỗi phần.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Mỗi ACT giảng kiến thức phải có hai tiểu hoạt động **Củng cố 1: Active Recall** và **Củng cố 2: Ôn tập ngắn** ở cuối phần, trước khi chuyển phần khác.
2. Trong từng tiểu hoạt động ghi rõ 4 bước CV5512: (1) Chuyển giao nhiệm vụ; (2) HS thực hiện; (3) Báo cáo/thảo luận hoặc tự đối chiếu; (4) GV nhận xét, kết luận.
3. Quy định sản phẩm cụ thể: R1 là nói/ghi/vẽ từ trí nhớ, R2 là đáp án/giải thích qua các loại câu khác nhau; nêu rõ cách ghi nhận bằng lời/giấy/HTML.
4. Phân bổ lại thời gian và trường hợp cần gia hạn. Với Cookies: 42 phút là kế hoạch v1.0; bản 30 màn dự kiến 54 phút 30 giây là **chưa duyệt ngân sách** nên phải trình thay đổi, không sửa thời gian 42 phút thành 54:30 như sự thật đã phê duyệt.
5. Phần D0, P00, EXIT, P07 có chức năng riêng, không bị ép thành phần kiến thức mới.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `08-lesson-plan-with-reinforcement.md`
- `08-cv5512-activities-by-section.csv`
- `08-time-change-request.md`

## Hard gates trước khi bàn giao
- **G1:** Không có ACT kiến thức thiếu một trong hai củng cố.
- **G2:** 4 bước CV5512 có giao nhiệm vụ + HS làm + báo cáo + kết luận.
- **G3:** Thời lượng mới nếu chưa được duyệt vẫn đánh dấu PENDING.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
