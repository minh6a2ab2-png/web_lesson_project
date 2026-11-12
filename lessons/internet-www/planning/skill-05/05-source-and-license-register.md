# SKILL 05 – Nguồn, quyền sử dụng và phương án offline
**Ngày đối chiếu:** 11/11/2026. Tài liệu dưới đây dùng làm căn cứ xác thực **kiến thức kỹ thuật**, không phải giấy phép để sao chép ảnh/biểu đồ của đơn vị khác.

| Mã | Tài liệu | URL | Chính sách trong gói |
|---|---|---|---|
| SRC-02 | MDN – How the web works | https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works | Tham khảo/biên soạn nguyên gốc; không copy ảnh sơ đồ |
| SRC-08 | MDN – What is a URL? | https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL | Tham khảo cú pháp; ví dụ do bài giảng viết |
| SRC-10 | MDN – Overview of HTTP | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview | Tham khảo request/response; tạo log giả lập |
| SRC-STATUS | MDN – HTTP status codes | https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status | Chuẩn hóa 200/404; không tái sử dụng hình |
| SRC-13 | Cloudflare – What is DNS? | https://www.cloudflare.com/learning/dns/what-is-dns/ | Tham khảo DNS/caching; tự vẽ sơ đồ |
| SRC-09 | IANA – Example Domains | https://www.iana.org/help/example-domains | Dùng `example.org` làm tên minh họa; **không** dựa vào dịch vụ HTTP thật |
| SRC-14 | RFC 5737 – Documentation IP | https://www.rfc-editor.org/info/rfc5737/ | Dùng `192.0.2.10` trong dữ liệu mẫu; **không phải IP máy chủ thật** |
| SRC-11 | MDN – Transport Layer Security | https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security | Diễn giải bảo vệ kênh và giới hạn, không sao chép |
| SRC-12 | Chromium Blog – An update on the lock icon | https://blog.chromium.org/2023/05/an-update-on-lock-icon.html | Tránh đánh đồng icon HTTPS với độ tin cậy nội dung |
| SRC-06/07 | MDN – Caching and cookies | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching ; https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies | Nội dung nhập môn tự biên soạn, không sao chép ảnh |
| SRC-03 | Mozilla Support – Firefox bookmarks | https://support.mozilla.org/en-US/kb/bookmarks-firefox | Tham khảo biến thể UI; HS thao tác browser thật |
| SRC-18 | MDN – Licensing / attribution | https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Attrib_copyright_license | Nội dung MDN có CC BY-SA; gói này không sao chép đoạn dài hoặc hình |

**Tác quyền gói sản xuất tại Skill 05:** `05-student-research-cards.md`, phiếu, fixtures và ba trang HTML offline là văn bản/thiết kế tạo mới trong phiên này. Không có ảnh, video, font bên ngoài, logo hoặc asset có quyền không rõ được chèn. Bản HTML offline dùng CSS và JS inline, không gọi CDN/API. Các link tham khảo ở đây có thể cần Internet nhưng **không phải dependency của bài học offline**.

**Giới hạn và cảnh báo:** `example.org` là tên miền dành cho minh họa (IANA); tên như `school.example.org` chỉ được dùng làm giá trị bài tập; IPv4 `192.0.2.10` thuộc dải phục vụ tài liệu (RFC 5737), không là endpoint để ping, fetch hoặc mở trang. Khi học sinh thực hành Browser thật, ưu tiên website công khai đã được giáo viên thử trước buổi học. Không lưu thông tin duyệt web cá nhân.