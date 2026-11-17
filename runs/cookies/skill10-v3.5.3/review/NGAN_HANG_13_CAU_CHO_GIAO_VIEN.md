# Bộ 13 câu ôn tập — dùng để duyệt nội dung, không phải đề EXIT

## Cookie là gì? — A1-05
**Câu 1 · Chọn một:** Dòng nào có dạng dữ liệu tên–giá trị, có thể dùng trong Cookie?
- A. <h1>Xin chào</h1>
- B. run.exe
- C. language=vi
  - **Đáp án:** C.
  - **Giải thích:** language là tên dữ liệu, vi là giá trị tiếng Việt; hai lựa chọn còn lại là HTML và tên tệp.

**Câu 2 · Ghép đôi:** Ghép hai phần của language=vi với vai trò của chúng.
- language
- vi
  - **Đáp án:** language ↔ Tên dữ liệu, vi ↔ Giá trị.
  - **Giải thích:** Dấu = nối tên dữ liệu với giá trị tương ứng.

**Câu 3 · Đúng/sai:** Cookie tự chạy lệnh để xây dựng giao diện website.
- A. Đúng
- B. Sai
  - **Đáp án:** B.
  - **Giải thích:** Cookie là dữ liệu; nó không phải chương trình tự chạy.

## Cơ chế lưu và gửi Cookie — A2-07
**Câu 1 · Chọn một:** Khi mở website, HTTP Request đi theo chiều nào?
- A. Server → Browser
- B. Giữa hai Server
- C. Browser → Server
  - **Đáp án:** C.
  - **Giải thích:** Trình duyệt chủ động yêu cầu nội dung từ máy chủ.

**Câu 2 · Chọn một:** Server có thể gửi chỉ dẫn lưu Cookie ở đâu?
- A. Trong HTTP Request, qua Cookie
- B. Trong tệp run.exe
- C. Trong HTTP Response, qua Set-Cookie
  - **Đáp án:** C.
  - **Giải thích:** Set-Cookie là header của Response; Cookie header có thể xuất hiện trong Request phù hợp.

**Câu 3 · Sắp xếp:** Xếp trình tự của hai lượt truy cập (giả sử Cookie được chấp nhận).
- Browser lưu Cookie
- Browser gửi Request
- Lần sau Browser gửi Cookie phù hợp
- Server trả Response có Set-Cookie
  - **Đáp án:** Browser gửi Request → Server trả Response có Set-Cookie → Browser lưu Cookie → Lần sau Browser gửi Cookie phù hợp.
  - **Giải thích:** Lưu dữ liệu sau Response trước khi trình duyệt có thể gửi lại trong Request sau.

**Câu 4 · Chọn nhiều:** Theo mô hình, điều kiện nào cần đúng để gửi lại Cookie?
- A. Cookie đã được lưu
- B. Cookie còn hợp lệ
- C. Request đúng phạm vi Cookie
- D. Mọi Request đều gửi Cookie
  - **Đáp án:** A, B, C.
  - **Giải thích:** Phải có Cookie đã lưu, còn hiệu lực và phù hợp phạm vi; không phải mọi Request đều mang Cookie.

## Thời hạn của Cookie — A3-04
**Câu 1 · Ghép đôi:** Phân loại Cookie theo cách đặt thời hạn.
- Không đặt Expires / Max-Age
- Có Max-Age = 604800 giây
  - **Đáp án:** Không đặt Expires / Max-Age ↔ Session, Có Max-Age = 604800 giây ↔ Persistent.
  - **Giải thích:** Thời hạn xác định tạo Persistent; không đặt hạn thường là Session Cookie.

**Câu 2 · Đúng/sai:** Persistent Cookie luôn còn cho tới ngày hết hạn, dù người dùng xóa trước.
- A. Đúng
- B. Sai
  - **Đáp án:** B.
  - **Giải thích:** Người dùng có thể xóa Cookie trước khi hết hạn.

**Câu 3 · Chọn một:** Cookie đặt hạn 7 ngày, nhưng bị xóa ngay hôm nay. Ngày mai nó còn không?
- A. Chắc chắn còn
- B. Tự trở thành Session Cookie
- C. Không còn
  - **Đáp án:** C.
  - **Giải thích:** Đặt hạn không bảo đảm Cookie còn tồn tại nếu đã bị xóa.

## Công dụng và quyền riêng tư — A4-04
**Câu 1 · Ghép đôi:** Ghép tình huống với công dụng phù hợp.
- Nhớ Tiếng Việt
- Giỏ hàng vẫn có sản phẩm
- Thống kê cách dùng trang
  - **Đáp án:** Nhớ Tiếng Việt ↔ Ghi nhớ lựa chọn, Giỏ hàng vẫn có sản phẩm ↔ Hỗ trợ giỏ hàng, Thống kê cách dùng trang ↔ Phân tích hoạt động.
  - **Giải thích:** Công dụng phụ thuộc thông tin website dùng Cookie để làm gì.

**Câu 2 · Đúng/sai:** Cookie lưu được 7 ngày thì chắc chắn là Cookie theo dõi.
- A. Đúng
- B. Sai
  - **Đáp án:** B.
  - **Giải thích:** Thời hạn và mục đích sử dụng là hai tiêu chí khác nhau.

**Câu 3 · Chọn nhiều:** Khi xem lựa chọn Cookie trên website, điều gì đáng chú ý?
- A. Mục đích dùng Cookie
- B. Thời hạn tồn tại
- C. Lựa chọn chấp nhận hoặc từ chối
- D. Màu biểu tượng bánh Cookie
  - **Đáp án:** A, B, C.
  - **Giải thích:** Nên hiểu mục đích, thời hạn và quyền lựa chọn; hình biểu tượng không quyết định quyền riêng tư.
