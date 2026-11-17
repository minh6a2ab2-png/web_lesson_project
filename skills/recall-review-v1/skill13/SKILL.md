---
name: lesson-quality-reviewer
version: 1.0 RR-QA
role: Skill 13 of 13 (Cookies pipeline mapping)
status: UPGRADED_DEFINITION_READY_NOT_EXECUTED_AS_LESSON
upgrade: RR-GATE-v1.0
source_basis: "PIPELINE_13_SKILLS.md; previous final quality review was renumbered from Skill12, complete legacy Skill13 source not verified"
---

# SKILL 13 v1.0 RR-QA — Lesson Quality Reviewer

## Vai trò và lý do nâng cấp
Lesson Quality Reviewer tiếp tục chịu trách nhiệm theo vai trò trong pipeline Cookies. Bản này là **quy định tác nghiệp hoàn chỉnh cho lỗi thiếu Recall/Ôn tập**; các phần chức năng không liên quan của skill trước vẫn được kế thừa, không tự nhận đã ghi đè tệp cũ.

**Vấn đề khắc phục:** Cổng cuối chưa bắt buộc đủ cặp Recall–Review, nên STRUCTURAL_PASS có thể che lỗi sư phạm.

## Đầu vào bắt buộc
- Sản phẩm upstream đã được xác nhận, mục tiêu CORE, kế hoạch nội dung/chân dung học sinh khi có; `section_reinforcement_manifest.json` hoặc bản dự thảo.
- Học liệu, kịch bản, mã phiên bản và quyết định thay đổi thời gian; nếu chưa có phải ghi `MISSING_INPUT` và phạm vi ảnh hưởng.
- `STANDARD_RR_GATE_v1.md` của gói; chọn đúng pipeline Cookies có Skill09 Architect / Skill10 Visual / Skill11 Developer.

## Quy trình thực hiện
1. Độc lập xác minh 100% `knowledge_sections` có đúng một cặp Recall+Review và các cặp hoạt động trên website, không chỉ hợp đồng.
2. Chạy validator trước, kiểm nội dung/đáp án/khoa học, đóng lỗi kỹ thuật; kiểm trên browser/keyboard/mobile/zoom/offline và khôi phục tiến trình.
3. Xác nhận câu hỏi đo đúng objective, đa dạng vừa phải, phản hồi không lộ trước, câu sắp xếp không theo thứ tự sẵn; đánh giá EXIT không bị rò khóa.
4. Đối chiếu ngân sách với giáo án đã duyệt: tăng giờ chưa được duyệt => `TIME_APPROVAL_PENDING`, chặn RELEASE_PASS dù cấu trúc đúng.
5. Báo cáo ba trạng thái độc lập `STRUCTURE`, `RUNTIME`, `PEDAGOGY`; nếu chưa test với học sinh thật thì `FIELD_NOT_VALIDATED`, không báo tác động học tập đã xác nhận.

## Quy tắc xuyên suốt cần được thực thi
- Xác định phần kiến thức từ ma trận CORE đã chốt, không dùng số lượng màn cứng từ một bài trước.
- Cuối từng phần có **một màn Active Recall → một màn ôn tập**; Recall phải diễn ra trước đáp án, Quiz có số lượng vừa đủ và đa dạng loại hình.
- Bản thân việc đã mở trang, bấm Next, xem giải thích hoặc tự xác nhận không chứng minh `MASTERED`.
- Bài EXIT độc lập; phần trả lời trên giấy/bằng lời có thể ghi `SELF_REPORTED` rồi được GV kiểm tra, không giả vờ chấm tự động.
- Nếu thay đổi mục tiêu hoặc thời lượng đã duyệt, tạo CR; không âm thầm cập nhật hiện trạng dự án.
- Trước bàn giao phải tạo hoặc đối chiếu `section_reinforcement_manifest.json` và chạy kiểm tra cặp màn. Chi tiết tại `../STANDARD_RR_GATE_v1.md`.

## Đầu ra phải có
- `13-final-section-coverage.csv`
- `13-functional-browser-evidence/`
- `13-time-and-scope-approval.md`
- `13-release-decision.md`

## Hard gates trước khi bàn giao
- **G1:** Không đạt cặp màn thì REVIEW_FAIL, bất kể tổng màn đúng.
- **G2:** Browser chưa test hoặc time chưa duyệt => chưa RELEASE_PASS.
- **G3:** Học sinh thực tế chưa kiểm nghiệm => nhãn FIELD_NOT_VALIDATED.

## Tiêu chuẩn báo cáo
- `PASS` chỉ khi có bằng chứng thực từ phạm vi skill này; thiếu asset/runtime/field test ghi đúng là `SPEC_ONLY`, `NOT_RUN` hoặc `PENDING_USER_APPROVAL`.
- Chưa chạy lại website Cookies ở bước cập nhật định nghĩa; mọi bản demo cũ giữ nguyên và được dùng làm regression fixture.
