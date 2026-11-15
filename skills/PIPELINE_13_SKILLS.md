# Pipeline mới — 13 Skills (15/11/2026)

**Không thay đổi chức năng Skills01–11** tại thời điểm thêm bước này. Skill12 trước đây (Quality Review) **được đổi số thành Skill13**, giữ nguyên bản cũ và thêm alias trong tài liệu, không tự nhận đã cập nhật mọi link nội bộ. Skill12 mới kiểm toán bằng góc nhìn học sinh giữa implementation và final QA.

01 Content Research & Analysis
02 Lesson Architecture & Assessment
03 Knowledge Content Author
04 Learner Profile Fit & Activity Design
05 Learning Resource Curator
06 Teaching Scenario Writer
07 Activity Resource Designer
08 Lesson Plan CV5512
09 Interactive Website Architect
10 Learning Experience Visual Designer (v3.3 NEW DEFINITION)
11 Website Implementation
12 Learner Perspective Simulation & Learning Journey Audit (v1.0 NEW)
13 Quality Review (alias from former Skill12, RENAMING PROPOSED)

## Feedback loop
01–08 -> 09 -> 10 -> 11 -> **12 Learner Simulation** -> (REVISE upstream owner(s) -> rerun impacted 09/10/11/12) -> **13 Quality Review**.

**Không phải một vòng đơn chiều:** nếu Skill12 phát hiện hiểu sai, xác định root cause. Skill04 thay đổi nếu learner fit sai; Skill09 đổi cảnh nếu cổng kiến thức có lỗ; Skill10 chỉnh visual nếu thứ tự nhận biết rối; Skill11 sửa runtime nếu nút/feedback không đúng. Quyết định sửa trên bản mới có changelog, không sửa gốc âm thầm.

## Kiểm thử vs xác nhận
Skill12 simulated student audit không thay thế user testing. Skill13 có thể tiếp tục QA phần mềm, browser/offline/a11y, giáo dục và field pilot. Chỉ nhà giáo/quan sát thực tế mới xác thực hiệu quả với học sinh cụ thể.

## Migration checklist
- [x] Định nghĩa và mapping Skills10/12 mới.
- [ ] Sửa đường dẫn/cross-refs từ QA Skill12 cũ sang Skill13 trong tất cả Skills01–11.
- [ ] Nâng cấp định nghĩa Quality Review thành Skill13 v1.0, bảo toàn quy trình QA gốc.
- [ ] Chạy Skill10 cho Cookies với đầu vào Skill09 v3.4.
- [ ] Chạy Skill11 trên kết quả hi-fi Skill10.
- [ ] Chạy Skill12 learner simulation qua giao diện thật.
- [ ] Chạy Skill13 final QA sau vòng sửa.

Các ô [ ] chưa thực hiện, tuyệt đối không coi định nghĩa mới là một lần test website thật.
