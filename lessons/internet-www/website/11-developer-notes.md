# Skill 11 – Developer Notes

**Bài:** 5.1 Internet & World Wide Web  
**Đầu vào:** Skills 01–07, 09–10; Skill 08 chưa thực hiện theo yêu cầu.  
**Ngày:** 11/11/2026  
**Sản phẩm:** `index.html` (bài giảng, HTML/CSS/JS thuần), `browser_offline/` (trang cho Chrome/Edge/Firefox thật).

## Hướng dẫn chạy

1. Giải nén toàn bộ gói ZIP, giữ nguyên thư mục `browser_offline` cạnh `index.html`.
2. Nháy đúp `index.html` để mở bằng Chrome/Edge/Firefox. Không cần `npm`, không dùng CDN.
3. Chọn **VI/EN**, chuyển slide bằng **Trước/Tiếp** hoặc hộp chọn ở cuối màn. Có thể dùng `Alt + ←/→`.
4. Các ngăn **Học liệu**, **Gợi ý**, **Giáo viên**, **Hồ sơ** mở theo yêu cầu, đóng bằng `Esc`.
5. Slide trình duyệt thật: mở `browser_offline/index.html` trong tab mới hoặc chọn trang công khai. Không đăng nhập tài khoản, không thu lịch sử cá nhân.
6. DNS: dự đoán ở slide trước; chạy ca A, B, C bằng Step/Play/Pause/Reset, ghi bằng chứng. C là NXDOMAIN và không sinh IP.
7. HTTP: sau khi chạy DNS A/B, chọn **192.0.2.10 (mẫu)** ở slide kết luận DNS; sau đó chạy ca 200/404. Không có kết nối HTTP thật.
8. Kết thúc: điền Exit Ticket, có thể **Tải hồ sơ (.txt)** để bàn giao kết quả. Ghi chép lưu cục bộ nếu trình duyệt hỗ trợ; không đồng bộ lên máy chủ.

> Mở `index.html` riêng lẻ vẫn xem được bài giảng và các mô hình; riêng thư mục `browser_offline/` chỉ có khi giải nén gói hoàn chỉnh.

## Kiến trúc và phương pháp

- **15 slide nội dung + 1 màn nghỉ**, tổng 120 phút, giữ mã SL-00..SL-14 theo Skill09.
- State object: `fields`, `choices`, `checks`, `recall`, `reviewed`, `dns`, `http`, `renderer`, `journey`, `selfRating`.
- Ghi chép và trạng thái có thể lưu bằng `localStorage` khi được hỗ trợ; hoạt động trong bộ nhớ khi storage bị chặn.
- Event delegation trên `document` cho các button/data-action, input và select. Không cần thư viện JS.
- Tài liệu, trợ giúp và sơ đồ tham khảo hiện khi học sinh yêu cầu/đã có cơ hội tự nghiên cứu.
- **DNS A**: cache miss → resolver → A 192.0.2.10 → cache; **DNS B**: cache hit không hỏi resolver; **DNS C**: NXDOMAIN.
- **HTTP 200/404**: mô phỏng request/response (GET). Chỉ chạy khi có IP mẫu được chọn sau DNS A/B; 404 không đồng nghĩa lỗi DNS.
- **Rendering** dùng DOM thật: bật CSS thay đổi trình bày; chế độ JS khiến nút có thể thay đổi trạng thái.
- **Real Browser** không có trình duyệt giả lập; trang `browser_offline/` chỉ là các tài liệu để học sinh thao tác trong ứng dụng trình duyệt thật.
- **Learning by Teaching** ở sơ đồ Internet–WWW và Journey Builder; nhớ lại sau các chặng; tự vẽ mindmap và flashcard trước buổi sau.

## Nguồn kiến thức và giấy phép

- Tài liệu học sinh được diễn đạt lại từ nguồn trong Skill02/05, không sao chép đoạn dài hoặc hình thương mại.
- MDN Web Docs (URL, HTTP, how the Web works): <https://developer.mozilla.org/>. Tôn trọng giấy phép CC BY-SA cho phần nội dung của MDN; ở đây sử dụng kiến thức/diễn đạt lại, không nhúng hình MDN.
- Cloudflare Learning Center (DNS): <https://www.cloudflare.com/learning/dns/what-is-dns/>. Không sao chép hình/sơ đồ của Cloudflare.
- IANA special-use domain examples: <https://www.iana.org/domains/reserved>. `example.org` dành cho ví dụ; `192.0.2.10` là địa chỉ mẫu thuộc TEST-NET-1.
- Các SVG, GIF, thẻ và trang HTML offline trong gói được tạo riêng cho bài giảng này. Không có font thương mại, thư viện CDN hay ảnh ngoài tự tải.

## Kết quả kiểm thử nội bộ

- Chromium headless, HTML nạp trực tiếp vào trang kiểm thử (`set_content`): **23/23 bài kiểm tra tương tác đạt**. Kết quả thô trong `qa/runtime-results.json`.
- Đã kiểm tra: 16 màn, đồng bộ VI/EN giữa chừng, form, game, URL, DNS A/B/C, HTTP 200/404, rendering, flashcard, journey, export text, bàn phím, responsive 360px, reduced motion, không có uncaught JS exception.
- **Chưa thử được `file://` hoặc `http://127.0.0.1` trong Chromium ở môi trường kiểm thử** do chính sách quản trị của trình duyệt (`ERR_BLOCKED_BY_ADMINISTRATOR`). Không được suy diễn thành lỗi website hoặc tuyên bố đã test file://. Cần mở file trên Windows và thử thực tế ở các trình duyệt mục tiêu.
- Chưa kiểm tra tác động của extension, chính sách browser trường học, chế độ riêng tư, in PDF và sử dụng với học sinh thật.

## Điểm chưa thuộc phạm vi

- **Skill 08 (bộ homework đầy đủ) chưa chạy theo yêu cầu trước đó**. Website chỉ có nhắc mindmap/flashcards và không tự tạo bộ bài tập về nhà giả định.
- Cookies chuyên sâu (session vs persistent) chờ tài liệu gốc của mục 5.1.6; chỉ giới thiệu khái niệm cơ bản.