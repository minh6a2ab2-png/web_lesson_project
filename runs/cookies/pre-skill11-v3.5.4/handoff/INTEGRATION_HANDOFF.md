# Bàn giao tiền Skill 11 (30 màn)

**Nguồn bắt buộc:** `contract/09-10-recall-review-proposal.json`, `prototype/data.js`, `prototype/review-bank.js`, `prototype/recall-bank.js`, `prototype/teacher-notes.js`, `prototype/app.js`, `prototype/style.css`.

- 30 scene IDs = 28 đường chính + 2 ôn nền tùy điều kiện.
- ACT01–ACT04: đúng thứ tự Teach/Explore → Active Recall → Review, mỗi review 3/4 câu có ít nhất hai loại.
- Lưu tiến độ bằng `scene_id`, `cue_id`, `question_id`; tuyệt đối KHÔNG dùng vị trí chỉ số như khoá bền vững ở website sản xuất.
- Màn recall: học sinh tự nhớ + ghi vở/nói → tự xác nhận đã thử → mở gợi ý; xác nhận không đồng nghĩa đạt năng lực.
- Màn review: trả lời trước mới hiện giải thích; retry giữ thông tin lỗi, không lộ đáp án sớm.
- EXIT: dữ liệu và đáp án giáo viên riêng; không trộn vào student public bundle. Không nhầm quiz ôn tập với bài kiểm tra EXIT.
- Bỏ Dual View; keyword mở bong bóng nổi gần từ, không thay đổi bố cục; UI phù hợp desktop/mobile và trợ năng zoom.
- Đã thử render 30 màn trong Chromium bằng page.set_content; các đoạn trong file:// bị policy chặn, không phải nguyên mẫu lỗi.
- 54:30 hiện là dự toán **chờ người dùng duyệt**, không được giả là đã duyệt. 42 phút cũ cũng chưa được thay thế chính thức.
- Còn cần Skill11 kỹ thuật: lưu dữ liệu thật, kiểm tra an toàn/assess isolation, QA trên thiết bị đích, bản tiếng Anh sau biên tập; thử với học sinh thực tế thuộc giai đoạn hậu Skill11.
- Không chạy Skill11 trong gói này.
