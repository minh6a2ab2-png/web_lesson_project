# Phân tích PowerPoint tham chiếu — Không sao chép nguyên mẫu

Ngày 2026-11-14. Hai file có thể truy cập từ File Library:

1. **1.5_Protocol layers.pptx**, 12 slide, 16:9 (bài giảng mạng máy tính). Quan sát các slide 2–5: mở bằng nhận định hệ thống phức tạp và câu hỏi → dùng tình huống hàng không để đưa ra khái niệm lớp. Slide 6 giới thiệu cấu trúc 5 lớp. Slide 7–11 diễn giải đóng gói dữ liệu **tích lũy từng bước**, liên tục giữ cặp source/destination trong sơ đồ. Đây là **mẫu tiến trình sư phạm**, không phải bộ CSS cần sao chép. Điểm cần cải thiện khi chuyển sang web: giảm mật độ chữ, cho HS tự dự đoán trước khi hiện lớp tiếp theo.
2. **Slide_trinh_chieu_toa_dam.pptx**, 33 slide, 16:9 (slide tọa đàm, không phải SGK bài Cookies). Các slide 5–7 đặt câu hỏi → tương tác Mentimeter → dùng kết quả người tham dự; slide 8 có 3 thẻ **Mục tiêu – Hoạt động – Đánh giá** dưới tiêu đề lớn; slide 18 so sánh hai phía **Cơ hội – Thách thức**; slide 10–14 và 23–30 dùng màn hỏi trắc nghiệm một câu. Đây là **mẫu phân cấp thị giác và hoạt động**, không dùng nội dung sự kiện cho bài Cookies.

## Chuyển hóa thành pattern web

| Quan sát ở PPT | Pattern website | Điều chỉnh cho 1:1 |
|---|---|---|
| Một ý lớn/slide, title nổi bật | **Focus**: câu hỏi/tình huống lớn, ít chữ | GV hỏi, HS dự đoán trước khi chuyển |
| Sơ đồ được xây dần qua nhiều slide | **Progressive diagram**: một canvas có state | HS chọn bước/mũi tên, giải thích; không phát lộ sơ đồ hoàn chỉnh |
| Hai hệ thống đối chiếu | **Compare**: hai thẻ cùng ngữ cảnh | HS nêu khác nhau trước khi mở kết quả |
| Slide 3 thẻ mục tiêu/hoạt động/đánh giá | **Card trio**: ba ý/ba công dụng | Mỗi thẻ là một nhiệm vụ, không nhồi đoạn văn |
| Một câu quiz lớn ở giữa | **Question**: một quyết định mỗi màn | Phản hồi có nguyên nhân, không chỉ đúng/sai |
| Slide 16:9 dùng cho trình chiếu | **Presentation workspace** trên desktop | Responsive reflow trên tablet/mobile, không ép tỷ lệ 16:9 |

## Giới hạn nguồn

- Các PPT trên không phải đầu vào chuẩn nội dung Cookies: nội dung khoa học/mục tiêu vẫn lấy từ Skill 06, 07, 08 và các nguồn đã dùng trước đó.
- Không dùng hình ảnh, logo, câu chữ dài, bố cục độc quyền của hai PPT làm asset phân phối. Chỉ kế thừa **nguyên lý bố cục và trình tự sư phạm**.
- Nếu người dùng có thêm PowerPoint bài giảng mẫu khác, cần đọc và đánh giá lại bộ layout trước khi chốt thành chuẩn dùng cho mọi môn.
