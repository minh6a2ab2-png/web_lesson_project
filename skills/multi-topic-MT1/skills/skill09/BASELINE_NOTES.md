---
name: interactive-website-architect
version: 3.6
role: Skill 09 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "Skill09 v3.5 (Google Drive 1e3AYhsepUFHMwFF2PWPCWrhNS2IEdOfW) + Cookies contract v3.5.3; previous 25 scenes retained"
---

# SKILL 09 v3.6 — Interactive Website Architect

## Vai trò và lý do nâng cấp
Interactive Website Architect tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Cổng cấu trúc cũ chỉ kiểm số scene/time nhưng không kiểm đủ cặp Recall–Quiz sau mỗi phần.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Chuyển `knowledge_sections` từ Skill02/08 thành đồ thị màn; xác định một scene `ACTIVE_RECALL` rồi một scene `REVIEW_QUIZ` cuối mỗi phần; tận dụng màn recall cũ, chỉ bổ sung khi thiếu.
2. Mỗi scene có `scene_id`, section, mục đích, nội dung học sinh thấy, cue hoặc danh sách question IDs, evidence, completion, reveal gate, feedback, route, time và tài nguyên.
3. Bổ sung `section_reinforcement_manifest.json`, `review-bank.json`, `answer-key.private`, source traceability, graph route có quay lại/sửa sai; các nhánh phục hồi không được bỏ qua cặp khi trở lại đường chính.
4. Chạy `validator` trên graph mặc định và đường nhánh, gate `SECTION_RECALL_REVIEW_GATE`, `TIME_APPROVAL_GATE`, `ASSESSMENT_INTEGRITY_GATE` trước khi bàn giao Skill10.
5. Không gộp màn TEACH thành ô nhập bắt buộc, không ghép Dual View, không tự chốt 22/25/30 màn như quy tắc chung.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `09-implementation-contract.json`
- `09-section-reinforcement-manifest.json`
- `09-navigation-branches.json`
- `09-curriculum-time-approval.md`
- `09-contract-validator-report.json`

## Hard gates trước khi bàn giao
- **G1:** Mỗi section có đúng cặp scene theo thứ tự mặc định.
- **G2:** Bất kỳ section thiếu màn hoặc quiz chỉ 1 dạng mà không có quyết định => BLOCKED.
- **G3:** Khác thời lượng đã duyệt phải có CR chưa duyệt hoặc biên bản duyệt thật.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
