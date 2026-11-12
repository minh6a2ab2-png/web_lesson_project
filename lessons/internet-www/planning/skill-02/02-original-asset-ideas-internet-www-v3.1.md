# SKILL 02 – ORIGINAL ASSET IDEAS
## Ý tưởng tự tạo học liệu – Bài Internet & WWW

**Status:** IDEA ONLY · **Ngày:** 11/11/2026 · **Không có asset hoàn chỉnh ở bước này**  
**Đầu vào:** `01-content-map-internet-www-v3.1.md` và `02-resource-bank-internet-www-v3.1.md`.

## A. Nguyên tắc lựa chọn asset trước khi sản xuất

Một asset phải làm rõ *điều gì học sinh khó quan sát qua lời nói đơn thuần*: quan hệ, thành phần, trình tự, biến đổi trạng thái, đối chứng, bằng chứng. **Chưa chọn hoạt động (Skill 04) thì chưa lập trình asset (Skill 05).** Không đưa mọi ứng viên sau đây vào một bài dạy.

## B. Kho 12 ý tưởng tự tạo

| Asset Idea | KU / RES | Mô tả thành phần cần tạo | Người học có thể quan sát/nghiên cứu | Dữ liệu & điều kiện chuẩn xác | Khi nào nên chọn | Nguồn kỹ thuật để kiểm chứng |
|---|---|---|---|---|---|---|
| **OA-01 – Internet vs Web Layers** | 01–03 / RES-01,02 | SVG hai lớp: hạ tầng router/nodes bên dưới; trên là dịch vụ web/email/app; đổi lớp không xóa mạng | Chỉ ra phần nào là hệ thống mạng, phần nào là dịch vụ dùng mạng | Không dùng phép so sánh Web như một vùng vật lý; email/webmail phải có ngữ cảnh | Nếu cần thể hiện **quan hệ** thay vì chỉ đọc khái niệm | MDN World Wide Web, How the web works |
| **OA-02 – Email vs Webmail Evidence Cards** | 02,03 / RES-03 | Hai thẻ giao diện gốc: webmail trong browser; email app riêng, kèm mô tả luồng giao tiếp giả định | Tìm bằng chứng một hoạt động đi qua Web và hoạt động kia có thể dùng giao thức khác | Tránh khẳng định mọi email client luôn không dùng web; dữ liệu người dùng giả định | Nếu học sinh nhầm email với WWW | MDN WWW |
| **OA-03 – Browser Shell** | 04,05 / RES-04,05 | Một giao diện browser thuần HTML gồm tab, address bar, back/forward, bookmarks, history, link, home; nội dung trang giả định | Xác định công dụng từ thao tác tạo kết quả, không chỉ nhấp icon để đọc định nghĩa | URL example.org dùng nội bộ trong mô hình; lịch sử/nút và trạng thái phải khớp thực tế | Nếu cần thực hành chức năng browser và dùng tiếp ở bài URL | Mozilla Support, MDN How web works |
| **OA-04 – Browser vs Search Engine Comparison** | 04 / RES-04 | Hai hình song song: khung browser chứa một trang kết quả search; chỉ ra ranh giới phần mềm/dịch vụ | Tách browser khỏi website và search service | Không tái tạo y nguyên logo/branding thật | Nếu kết quả đầu vào cho thấy nhầm Chrome và Google Search | MDN WWW, Mozilla Support |
| **OA-05 – URL Anatomy Highlight** | 07–09 / RES-08,09 | Thanh địa chỉ với chuỗi `https://www.example.org/science/index.html`, lớp màu scheme/host/path; kho 5 biến thể | Tự tìm điểm chung và khác, thảo luận phần tùy chọn | Path không chắc là thư mục/file vật lý; www, filename không bắt buộc | Nếu muốn HS phân tích URL với hỗ trợ thị giác | MDN URL, IANA |
| **OA-06 – HTTP Request/Response Theater** | 10 / RES-10 | Browser–server, hai chiều gửi nhận thông điệp; nội dung request/response giả định; tùy chọn kết quả 200/404 | Quan sát ai là người yêu cầu, ai phản hồi, dữ liệu nào quay lại | Đó là mô hình tối giản; HTTP có nhiều header/method/multiple resources | Nếu cần khám phá **cơ chế** thay vì định nghĩa | MDN HTTP Overview |
| **OA-07 – HTTPS Transport vs Trust** | 11 / RES-11 | Hai hàng minh họa: kết nối không có TLS / có TLS; thẻ riêng 'trustworthiness is different' | Nêu được HTTPS bảo vệ truyền thông, không chứng minh nội dung đúng | Không biểu diễn HTTP plaintext như lựa chọn nên dùng; không quảng bá một site thật | Khi cần sửa hiểu lầm HTTPS = chắc chắn an toàn | MDN TLS, Chromium Blog |
| **OA-08 – DNS Resolution Lab (simplified)** | 12,13 / RES-12–14 | Domain `school.example.org`; resolver, record A; 2 trạng thái **cache hit/miss**; đầu ra `192.0.2.10`; chú thích model | Kiểm chứng vì sao cần DNS; bằng chứng điều gì thay đổi khi đã có cache | Địa chỉ IP dành cho tài liệu; không biểu diễn DNS là máy chủ chứa HTML; không luôn phải truy vấn nhiều tầng | Chỉ sản xuất khi Skill 04 thực sự chọn điều tra DNS | Cloudflare DNS, IANA, RFC 5737 |
| **OA-09 – Browser Renderer Storyboard** | 06 / RES-06 | 3–4 khung SVG/giao diện: văn bản HTML thô → bố cục CSS → tương tác JS → thêm ảnh | Quan sát chức năng khác nhau của từng tài nguyên | Không khẳng định trình duyệt bắt buộc nạp HTML rồi mới CSS rồi mới JS theo trình tự tuyệt đối | Nếu cần giải thích vai trò của browser trong dựng trang | MDN How browsers load websites |
| **OA-10 – Web Journey Map** | 14 / RES-15,16 | Một sơ đồ trạng thái thống nhất: URL → DNS (khi cần) → kết nối → HTTP(S) → tài nguyên → render; được mở rộng theo học liệu | Tự giải thích mối quan hệ giữa các khâu, định vị nguyên nhân khi gặp lỗi | DNS cache, browser cache, đa request là nhánh điều kiện; không ép cứng sáu bước ở mọi lần | Nếu cần tổng hợp kiến thức xuyên suốt | MDN How web works, HTTP, Browser loading |
| **OA-11 – Cache / History / Cookies Cards** | 15 / RES-07 | Ba hộp lưu dữ liệu có ví dụ: trang từng xem, ảnh/tệp cache, token giả định duy trì phiên | Giải thích mỗi loại dữ liệu phục vụ mục đích khác nhau | Cookie không đồng nghĩa thông tin cá nhân/mật khẩu; cookie chuyên sâu ngoài phạm vi | Nếu KU-15 cần phân biệt rõ và có thời gian | MDN caching/cookies, Mozilla Support |
| **OA-12 – Error Evidence Pack** | 10–14 / RES-20 | 4 trang lỗi/hành vi mô phỏng: sai domain, DNS miss không tìm thấy record, HTTP 404, resource asset tải chậm | So sánh dấu hiệu trước khi suy luận nguyên nhân; không nhảy từ hiện tượng tới kết luận duy nhất | 404 từ server không nghĩa mất Internet; lỗi DNS không luôn do sai URL | Chỉ khi phương pháp sau chọn chẩn đoán vấn đề | MDN HTTP, Cloudflare DNS, MDN browsers |

## C. Thiết kế thông số chuẩn để sử dụng xuyên suốt

- **Dữ liệu địa chỉ:** `example.org`, `school.example.org`; `192.0.2.10` là địa chỉ dành cho tài liệu, không ánh xạ thật. Dữ liệu browser nên được nạp từ JS object cục bộ.
- **Tính liên tục trạng thái (nếu chọn OA-03,05,08,10):** URL học sinh chọn → domain được DNS lab đọc → địa chỉ giả lập → HTTP request → tài nguyên giả lập được browser hiển thị. Đây là định hướng kiến trúc, **chưa chốt thứ tự slide hay nhiệm vụ**.
- **Song ngữ:** mọi title, hint, note, label, state, feedback và phần hướng dẫn có cặp EN/VI; có nút chuyển ngôn ngữ không làm mất tiến độ khi sản xuất.
- **Hiển thị:** một bằng chứng chính trên màn hình; không nhồi nhiều panel và nút không phục vụ tư duy.
- **Tính xác thực:** nhãn `Simplified simulation / Mô phỏng đơn giản hóa` xuất hiện ở mô hình DNS/HTTP; khi sai không nêu nguyên nhân duy nhất nếu dữ kiện chưa đủ.
- **Giấy phép:** nếu sử dụng Lucide, kèm ISC/MIT notice; nếu tái sử dụng MDN/CERN/ảnh khác, phải kiểm tra quyền từng tài nguyên, không coi toàn bộ site là CC0.
- **Offline:** ưu tiên SVG, CSS, văn bản và JS nhúng nội tuyến; không dùng iframe thật như nguồn duy nhất cho thử nghiệm.
- **Lưu thông tin:** không có email thật, tài khoản thật, lịch sử truy cập thật, cookies thật hay log cá nhân của học sinh.

## D. Ước lượng công sức sơ bộ – KHÔNG phải quyết định sản xuất

| Nhóm | Mức tạo | Giá trị học tập dự kiến | Nguy cơ lạm dụng |
|---|---|---|---|
| OA-01,02 | Thấp–vừa | Mô tả quan hệ giữa các khái niệm | Nếu chỉ đổi icon và đọc định nghĩa, không có bằng chứng mới |
| OA-03 | Cao | Chức năng browser được sử dụng trong nhiệm vụ thật | Sai Back/Forward, tab state; phức tạp kỹ thuật |
| OA-05 | Vừa | Đối chiếu cấu trúc URL rõ ràng | Lặp chức năng Address bar của OA-03 |
| OA-06,07 | Vừa | Cơ chế request/response và giới hạn HTTPS | Diễn giải TLS quá mức hoặc sai về an toàn |
| OA-08 | Cao | Điều tra có bằng chứng và thay đổi biến/cache | Dễ sai kỹ thuật DNS nếu đồ họa tuyến tính cứng |
| OA-09 | Vừa | Giải thích việc render | Giả lập timeline như một chuẩn cố định |
| OA-10 | Cao | Tổng hợp kiến thức thành một chuỗi có quan hệ | Dễ biến thành 6 trang thụ động không tương tác |
| OA-11,12 | Thấp–vừa | Khắc phục hiểu lầm và kiểm tra suy luận | Lệch sang cookies chuyên sâu hoặc lỗi ngoài chương |

## E. Điều **không** làm ở Skill 02

- Không tạo/giao toàn bộ 12 asset; không dựng UI, viết JS, vẽ spritesheet hay tải ảnh copyrighted.
- Không quyết định số lượng slide, số phút mỗi hoạt động, hình thức đánh giá và phương pháp cụ thể.
- Không biến *mỗi KU* thành một mô phỏng riêng; ưu tiên tái sử dụng một môi trường nếu Skill 03/04 chứng minh được giá trị.
- Không dùng ảnh chụp thật của browser chứa tài khoản, thông tin học sinh hoặc tin tức nhạy cảm; toàn bộ nội dung demo là hư cấu, an toàn.

## F. Handoff → Skill 03

Bàn giao ngân hàng **RES-01–RES-22** và các ý tưởng **OA-01–OA-12** như ứng viên có nguồn. Skill 03 phải xác định kiến thức nào cần đạt, loại bằng chứng nào có giá trị, thời gian và mức độ hỗ trợ; Skill 04 mới chọn hoạt động, Skill 05 mới chốt và sản xuất tài nguyên. KU-16 không được đưa vào mục tiêu bắt buộc nếu chưa có trang 5.1.6.