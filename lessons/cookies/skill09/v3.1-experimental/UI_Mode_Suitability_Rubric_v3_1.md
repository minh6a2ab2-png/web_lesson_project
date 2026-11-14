# Skill 09 v3.1 – Ma trận tiêu chí chọn giao diện theo hoạt động học tập

**Đã thống nhất:** bộ 12 Skills giữ nguyên. Màn hình dạy học tối giản; Dual View luôn có nút trên thanh trên, các chế độ khác được chọn tự động theo mục tiêu hoạt động. Khi không có chế độ nào đem lại giá trị học tập rõ hoặc thiếu học liệu cần thiết, dùng **slide trình bày (Presentation)**.

## Thang mức phù hợp

- **0 – Không phù hợp hoặc không được dùng.**
- **1 – Có thể dùng nhưng lợi ích thấp.**
- **2 – Phù hợp trong một số ngữ cảnh.**
- **3 – Ưu tiên khi đáp ứng điều kiện học liệu và nhiệm vụ.**

| Loại nhiệm vụ | Slide | Story | Lab | Map | Focus | Dual | Quy tắc |
|---|---:|---:|---:|---:|---:|---:|---|
| Truyền đạt một ý đơn giản / ví dụ ngắn | 3 | 1 | 0 | 1 | 0 | 0 | Ưu tiên slide nếu chưa có tác vụ khác |
| Dẫn dắt tình huống có diễn biến / nhiều bước | 1 | 3 | 2 | 1 | 1 | 1 | Story nếu có trình tự có ý nghĩa; không tạo hiệu ứng trang trí |
| Có biến đầu vào và kết quả quan sát | 1 | 2 | 3 | 0 | 0 | 2 | Lab chỉ khi mô phỏng thực sự hoạt động, dữ liệu đúng |
| Phải đối chiếu hai tình huống / hai trang | 2 | 1 | 1 | 0 | 0 | 3 | Dual luôn có nút, người dùng bật; không tự bật |
| Cần thể hiện quan hệ, cấu trúc khái niệm | 1 | 1 | 0 | 3 | 1 | 2 | Map nếu mạng kiến thức là mục tiêu |
| Truy hồi, viết, vẽ lại hoặc học bằng cách dạy | 1 | 0 | 0 | 1 | 3 | 1 | Focus chỉ hiện đề bài và vùng ghi chú |
| Phân loại khái niệm / luyện tập dạng thẻ | 3 | 1 | 2 | 1 | 2 | 2 | Giữ slide có thẻ tương tác nếu Lab chưa tạo |
| Đánh giá EXIT độc lập | 0 | 0 | 0 | 0 | 0 | 0 | Assessment riêng; Dual mở được nhưng chỉ gồm đề EXIT và giấy nháp |

**Điều kiện bắt buộc trước khi kích hoạt chế độ khác slide:** (a) đáp ứng mục tiêu nhận thức, (b) có nội dung/học liệu có thể thao tác thật và đúng kiến thức, (c) đáp án không bị lộ trước dự đoán, (d) đáp ứng truy cập bằng bàn phím/responsive, (e) không cản trở đánh giá độc lập. Nếu không đạt → trình bày kiểu slide.

## Quy tắc sắp xếp tự động

1. Phân loại nhiệm vụ: quan sát, dự đoán, thử nghiệm, so sánh, kết nối, truy hồi, đánh giá.
2. Chọn phương thức có điểm phù hợp 3 và đủ asset READY. Nếu nhiều phương thức đạt 3, chọn phương thức tạo hành động học thực tế rõ nhất; không nhân đôi nội dung.
3. Chế độ Dual View luôn là **tùy chọn thủ công** trên thanh công cụ mọi màn, không tự mở vì tránh làm phân tán chú ý.
4. Nếu thiếu học liệu hoặc không có lợi ích đáng kể so với slide, giữ slide truyền thống v2.0.
5. Màn EXIT chỉ hiển thị bài đánh giá; Dual chuyển thành đề EXIT + giấy nháp độc lập, không hiện tài liệu/kiến thức cũ.

## Chính sách màn hình tập trung

- Chỉ có **thanh trên tối giản**: Quay lại, Tiếp, số màn, Dual View, Sổ tay, Lưu kết quả, Công cụ.
- Ẩn mặc định: logo lớn, danh sách chặng, tabs 6 chế độ, tên mode, chú thích về demo, footer, thanh tiến trình hình chấm, menu tài nguyên và thông tin khác không phục vụ nhiệm vụ hiện tại.
- Có nút **Công cụ** mở menu để chọn màn, bật Fullscreen, xem hướng dẫn, đổi cỡ chữ; đóng menu trả lại canvas sạch.
- **Sổ tay học tập** mở thành ngăn bên phải: hai tab *Nhiệm vụ hoàn thành* và *Kiến thức đã học*. Chỉ lấy dữ liệu các nhiệm vụ người dùng thực sự chọn lưu, không tự ghi nhận hoàn thành vì chỉ đã đi qua slide. Giữ bản ghi trong trình duyệt nếu `localStorage` hoạt động, fallback bộ nhớ phiên và ghi rõ trạng thái.
- Ghi chú dùng nội dung do người học nhập, không đồng nghĩa điểm, mastery hay kết quả tự động chấm. Trong EXIT phải khóa mở lại ghi chú/kiến thức cũ.
- Không truyền dữ liệu lên mạng, không truy cập Cookie thật, không đưa teacher-only keys vào bản học sinh.

## Ma trận gán mặc định cho 22 scene

| Scene | Hoạt động | Chế độ mặc định | Điều kiện |
|---|---|---|---|
| P00-01 | Một website có thể nhớ em? | presentation | TEXT_OR_LAYOUT_ONLY |
| D0-01 | Ai xin trang? Ai trả trang? | presentation | SOURCE_SVG_READY |
| D0-02 | Một mẩu dữ liệu có ý nghĩa gì? | presentation | TEXT_OR_LAYOUT_ONLY |
| A1-01 | Vì sao lần sau vẫn là tiếng Việt? | story | UI_DEMO_READY; real screenshot not produced |
| A1-02 | Cookie là một mẩu dữ liệu | presentation | TEXT_OR_LAYOUT_ONLY |
| A1-03 | Thẻ nào là dữ liệu ghi nhớ? | presentation | TEXT_OR_LAYOUT_ONLY |
| A2-01 | Bước 1 · Browser xin trang | presentation | SOURCE_SVG_READY |
| A2-02 | Ai gửi Set-Cookie? | presentation | TEXT_OR_LAYOUT_ONLY |
| A2-03 | Browser có thể lưu hoặc từ chối | lab | LAB_DEMO_READY |
| A2-04 | Lượt sau: Cookie đi hướng nào? | lab | LAB_DEMO_READY |
| A2-05 | Nhận Cookie và chặn Cookie | lab | LAB_DEMO_READY |
| A2-06 | Vẽ lại hai chiều không nhìn mẫu | focus | TEXT_OR_LAYOUT_ONLY |
| A3-01 | Cookie nào còn vào ngày mai? | presentation | TIMELINE_BLANK_PENDING |
| A3-02 | Đổi thời hạn, đổi loại Cookie | presentation | SOURCE_SVG_READY |
| A3-03 | Hai loại khác nhau ở đâu? | focus | TEXT_OR_LAYOUT_ONLY |
| A4-01 | Ba công dụng của Cookie | presentation | TEXT_OR_LAYOUT_ONLY |
| A4-02 | Sống lâu có phải là tracking? | presentation | TEXT_OR_LAYOUT_ONLY |
| A4-03 | Em hãy dạy lại một tình huống | focus | TEXT_OR_LAYOUT_ONLY |
| A5-01 | Thử sức độc lập: website câu lạc bộ | assessment | TEXT_OR_LAYOUT_ONLY |
| A5-02 | EXIT: ba ô A · B · C | assessment | TEXT_OR_LAYOUT_ONLY |
| P07-01 | Nhớ lại bằng sơ đồ trống | map | SOURCE_SVG_READY |
| P07-02 | Flashcards và dạy lại | presentation | TEXT_OR_LAYOUT_ONLY |

## Chức năng Sổ tay học tập – tình trạng

Ở bản v3.0 trước đó, Knowledge Map chỉ chứa câu hỏi khái quát, Focus giữ câu trả lời tạm trong phiên; **không có lịch sử hoàn thành hay kho kết quả**. Ở **v3.1 thử nghiệm**, nút Sổ tay là tính năng thật trong nguyên mẫu, có lưu ghi chú theo từng scene, đánh dấu hoàn thành, lọc danh sách, chuyển lại scene. Đây **không phải** engine đánh giá của Skill 11 và không tự kết nối đáp án đã làm từ các HTML Skill07 khác.

## Bàn giao

Skill09: luật chọn mode + 22-scene mapping + bố cục immersive. Skill10: hi-fi thanh trên, drawer, readability. Skill11: trạng thái trả lời/điểm và sync thực tế giữa các học liệu, lưu tiến độ theo chính sách dữ liệu được duyệt. Skill12: accessibility, keyboard, mobile, browser offline, đánh giá độc lập, pilot.
