---
name: learner-profile-fit-and-activity-design
version: 1.1
role: Skill 04 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Cookies_Skill04_v1_ProfileFit.zip: 01_Lua_chon_phuong_phap_Rubric_M.md, 03_Ban_thiet_ke_hoat_dong_hoc.md, 05_Kiem_dinh_toan_bai_va_ban_giao.md"
---

# SKILL 04 v1.1 — Learner Profile Fit & Activity Design

## Vai trò và lý do nâng cấp
Learner Profile Fit & Activity Design tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Rubric cũ có A9 củng cố, nhưng cho đạt khi có một câu recall lồng trong bài và không bắt cặp màn.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Giữ nguyên rubric lựa chọn phương pháp dựa vào mục tiêu, tải nhận thức, kiến thức nền và hồ sơ học sinh; cặp củng cố là *kiểm tra cần có*, không phải yêu cầu biến tất cả nội dung thành inquiry.
2. Quyết định kích thước cue, hình thức nói/ghi/vẽ, số lượng câu và mức hỗ trợ của từng phần cho học sinh 1:1.
3. Active Recall phải giúp học sinh nhớ lại từ trí nhớ, không đọc chép; quiz ưu tiên 2–4 câu đa dạng và không vượt tải nhận thức.
4. Thử các nhánh học sinh trả lời sai, quên từ khóa, cần gợi ý H1–H3; có nhánh ôn ngắn sau quiz nếu chưa vững.
5. Mỗi phần có hai cơ hội xử lý nhận thức tách biệt: tự tái tạo và kiểm tra bằng câu hỏi đa dạng.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `04-reinforcement-learner-fit-matrix.md`
- `04-load-risk-and-remediation.md`

## Hard gates trước khi bàn giao
- **G1:** A9 không PASS chỉ vì có một câu recall rời rạc.
- **G2:** Bài kiểm tra không thay thế Active Recall.
- **G3:** Có phương án nói/giấy khi không thuận thao tác web.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
