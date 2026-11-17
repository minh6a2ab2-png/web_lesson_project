---
name: learner-perspective-simulation-and-learning-journey-audit
version: 1.1
role: Skill 12 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Skill10_v3.3_and_New_Skill12_v1.0_13Skills.zip: skill12_v1.0/SKILL.md + Cookies_Skill12_v1.0_Learner_Audit.zip"
---

# SKILL 12 v1.1 — Learner Perspective Simulation & Learning Journey Audit

## Vai trò và lý do nâng cấp
Learner Perspective Simulation & Learning Journey Audit tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Mô phỏng góc nhìn học sinh có nhắc recall nhưng không chặn rõ trường hợp mất cả một cặp cuối phần.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Kiểm tra mỗi knowledge section: đã có cơ hội học nội dung → tự recall không nhìn đáp án → quiz đa dạng → sửa sai → chuyển tiếp hợp lý.
2. Đóng vai học sinh với kiến thức đã được hiển thị tới thời điểm đó; không dùng answer key trước, không tự suy ra đáp án bị che.
3. Thử ít nhất các nhánh: học sinh nhớ đúng; học sinh quên cue; sai quiz; nhấn Next khi chưa thử; quay lại sau nghỉ; nhánh ôn nền.
4. Ghi log từng lần attempt/reveal/correct/help, thời gian tải nhận thức và cách giấy/nói được ghi nhận trung thực; không đồng nhất tự xác nhận với mastered.
5. Kết quả `SIMULATED_AUDIT_PASS/FAIL/NOT_RUN`; chuyển lỗi về Skill02/04/06/07/08/09/10/11 tùy nguyên nhân, yêu cầu chạy lại phạm vi bị ảnh hưởng.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `12-reinforcement-student-path-walkthrough.md`
- `12-retrieval-review-attempt-log.json`
- `12-cognitive-load-and-repair.csv`
- `12-change-request-map.md`

## Hard gates trước khi bàn giao
- **G1:** Thiếu một cặp hoặc answer hiện sớm => P0.
- **G2:** Mô phỏng chưa chạy không gọi simulated PASS.
- **G3:** Không thay kiểm chứng với học sinh thật.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
