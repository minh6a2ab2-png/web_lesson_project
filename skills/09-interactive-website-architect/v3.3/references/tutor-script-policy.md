# Tutor Layer Script Policy – Skill 09 v3.3

## Mục đích
Nhân vật trợ giảng làm *người dẫn học* khi không có giáo viên bên cạnh, không đóng vai người giải bài hộ. Mặc định dùng kịch bản soạn trước, ghi `SCRIPTED_TUTOR`. Chưa có mô hình AI trò chuyện thì không tuyên bố “AI đang phân tích câu trả lời của em”.

## Tối thiểu cho một scene học thường
- Intro: mục đích/kiến thức trước + điều cần làm tiếp; tối đa khoảng 35 từ.
- Prompt reminder: nhắc hành động hiện tại.
- Support ladder: H1 hỏi định hướng → H2 gợi quy tắc → H3 ví dụ tương tự sau khi đã thử; chỉ những nấc phù hợp nhiệm vụ.
- Feedback: có nhánh đúng/sai/chưa đủ thông tin; nói vì sao + bước sửa.
- Completion: mô tả cụ thể đạt yêu cầu, tách “đã lưu” và “đã đúng”.
- Transition: câu nối sang scene sau và một câu nhớ lại nếu cần.

## Tránh
- Thoại kéo dài, người dùng phải đọc nhiều hơn bài chính.
- Tự động đọc thành tiếng, pop-up che nội dung, chuyển trang trái ý.
- Lộ lời giải trước dự đoán; dùng chính câu hỏi làm thẻ kiến thức.
- Lời khen/khuyến khích lặp vô nghĩa hoặc khiến học sinh phụ thuộc gợi ý.
- Gửi dữ liệu người học ra AI API mặc định.

## Hiển thị
- Thu gọn/hiện lại bất kỳ lúc nào; trạng thái hiển thị không làm mất bước đang học.
- Khi sử dụng Dual View, một trợ giảng theo khung được chọn, có nhãn “Trợ giúp trang trái/phải”.
- EXIT chỉ hướng dẫn quy trình, không cho gợi ý giải, ẩn lịch sử kiến thức và câu trả lời.
