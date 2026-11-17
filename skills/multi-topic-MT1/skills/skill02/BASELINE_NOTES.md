---
name: lesson-architecture-and-assessment
version: 1.1
role: Skill 02 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Cookies_Skill02_v1.zip: 01_Lesson_Architecture.md, 02_Assessment_Mastery_and_Diagnostics.md, 05_Quality_Gate_and_Handoff.md"
---

# SKILL 02 v1.1 — Lesson Architecture & Assessment

## Vai trò và lý do nâng cấp
Lesson Architecture & Assessment tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Thiếu ánh xạ Recall/Quiz ở mức mục tiêu và ngân sách là nguyên nhân từ đầu chuỗi.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Chia các cụm kiến thức CORE theo chuẩn mục tiêu, không chọn phương pháp, không ấn định số slide.
2. Với mỗi cụm có `retrieval_targets` (ý bắt buộc phải nhớ), `review_targets` (ý cần phân biệt/vận dụng), ngưỡng đánh giá và dự kiến câu hỏi; ghi `section_reinforcement_plan` ngay khi xây kiến trúc.
3. Dự toán phút **riêng** cho Recall và Quiz, tính phản hồi, thử lại, chuyển cảnh, hỗ trợ. Nếu vượt tổng tiết học thì đánh dấu `TIME_CHANGE_REQUIRED`, không lược cặp màn.
4. Tạo kiểm tra truy vết từng OBJ → màn dạy → Recall → Quiz → đánh giá chuyển giao (EXIT) và sai lầm thường gặp.
5. Chốt giới hạn phạm vi: ôn tập chương khác không được coi là quiz của phần Cookies nếu không đánh giá mục tiêu phần đó.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `02-section-reinforcement-plan.csv`
- `02-objective-retrieval-review-map.md`
- `02-time-ledger-with-CR.md`

## Hard gates trước khi bàn giao
- **G1:** Mỗi cụm kiến thức có mục tiêu Recall + Review cụ thể.
- **G2:** Cấu trúc không bị chốt số màn trước khi kiểm tra đủ cặp.
- **G3:** Không ghi thời lượng tăng thành đã được duyệt.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
