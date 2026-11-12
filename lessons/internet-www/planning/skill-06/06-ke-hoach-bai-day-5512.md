# KẾ HOẠCH BÀI DẠY (THEO TINH THẦN PHỤ LỤC IV, CÔNG VĂN 5512)

**Môn:** ICT / Tin học – Bài 5.1: *The Internet and the World Wide Web (WWW)*  
**Hình thức:** Gia sư 1 giáo viên – 1 học sinh · **Thời lượng:** 120 phút (gồm nghỉ 5 phút)  
**Ngày lập:** 11/11/2026 · **Bản:** Skill 06 / v3.2 · **Trạng thái:** ĐẠT KIỂM TRA THIẾT KẾ; chưa kiểm thử với học sinh thực tế.  
**Nguồn:** Bốn trang SGK đã cung cấp (tr. 180–183, các mục 5.1.1–5.1.5); kết quả Skill 01–04; học liệu Skill 05 v3.2. Mục 5.1.6 về cookies chuyên sâu chưa có trang chi tiết, không coi là yêu cầu bắt buộc.  
**Lưu ý sử dụng:** Đây là giáo án vận dụng khung Phụ lục IV vào gia sư 1–1, không tự nhận là hồ sơ hành chính đã được nhà trường phê duyệt.

## I. MỤC TIÊU

### 1. Kiến thức
Sau bài học, học sinh có thể:
- **OBJ-01:** Phân biệt Internet là mạng lưới các mạng kết nối toàn cầu với WWW là hệ thống các tài nguyên web sử dụng Internet; phân tích tình huống webmail/email app, tránh phân loại tuyệt đối.
- **OBJ-02:** Giải thích browser là gì, sử dụng được address bar, tab, hyperlink, Back/Forward, bookmark, history trên **trình duyệt thật**; phân biệt browser, website và search engine.
- **OBJ-03:** Đọc URL web mới, xác định scheme, host/domain/TLD và path, nhận biết `www`/`.html` không bắt buộc; nêu ví dụ tên miền mã quốc gia như `.vn`.
- **OBJ-04:** Giải thích vai trò IP và DNS trong việc phân giải tên miền khi cần; so sánh cache hit/miss và không nhầm DNS với máy chủ trả trang HTML.
- **OBJ-05:** Mô tả đúng chiều HTTP request–response, phân biệt HTTP với HTML; giải thích HTTPS sử dụng TLS để bảo vệ truyền thông nhưng **không chứng nhận tính đúng đắn hay độ tin cậy của nội dung**.
- **OBJ-06:** Nêu vai trò HTML (nội dung/cấu trúc), CSS (trình bày), JavaScript (hành vi); phân biệt cơ bản bookmark, history, cache, cookies.
- **OBJ-07:** Tự xây dựng và giải thích quá trình truy cập tài nguyên web từ URL đến hiển thị trang, có chú ý nhánh điều kiện (cache, lỗi 404, có thể cần nhiều request).

### 2. Năng lực
- **Năng lực đặc thù ICT:** Nhận diện thành phần URL; thao tác browser; dùng mô hình để phân tích DNS, HTTP(S), quá trình hiển thị và xử lý trường hợp khác thường (OBJ-02–07).
- **Tự chủ và tự học:** Tự khai thác thẻ song ngữ/học liệu, đưa dự đoán và tìm bằng chứng; tự điều chỉnh nhận định sau phản hồi (**OBJ-08**).
- **Giải quyết vấn đề:** So sánh điều kiện, phân loại có căn cứ, kiểm tra trường hợp mới; không suy luận từ một ví dụ duy nhất.
- **Giao tiếp, trình bày:** Nói/viết thuật ngữ EN/VI phù hợp, giải thích sơ đồ bằng lời mình; làm hoạt động **Learning by Teaching** (OBJ-08).

### 3. Phẩm chất
- **Trung thực:** Phân biệt điều quan sát được với giả định của mô phỏng; thừa nhận khi dữ kiện chưa đủ (OBJ-09).
- **Trách nhiệm/cẩn thận:** Không mặc định `https` đồng nghĩa website uy tín; không dùng dữ liệu tài khoản/lịch sử cá nhân trong nhiệm vụ; diễn giải đúng giới hạn của mô hình (OBJ-09).

### 4. Chuẩn đầu ra và đánh giá
- **Đạt (M3):** Phần kiến thức cốt lõi OBJ-01–07 được thể hiện đúng qua **sản phẩm và lời giải thích** ở ít nhất một tình huống/ví dụ chưa làm mẫu, với mức hỗ trợ H0–H1; OBJ-08 có bằng chứng tự nghiên cứu/điều chỉnh; OBJ-09 không còn hiểu lầm nghiêm trọng.
- **Vững (M4):** Vận dụng linh hoạt và giải thích ngoại lệ; có lý do/bằng chứng độc lập.
- **Đang hình thành (M2) / Chưa đạt (M1):** Cần H2–H3 hoặc còn hiểu sai phần cốt lõi; bổ sung hướng dẫn và đánh giá lại bằng ví dụ mới.
- **Mức hỗ trợ:** H0 độc lập; H1 câu hỏi mở; H2 chỉ nguồn/hình/bản ghi liên quan; H3 giải thích một trường hợp ngắn rồi cho học sinh thử lại với trường hợp khác. Không tính việc làm đúng sau H3 là đã đạt độc lập.

## II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU

**Thiết bị:** Máy tính có Chrome/Edge/Firefox; máy chiếu hoặc chia sẻ màn hình nếu cần; kết nối mạng nếu có; vở/bút. Dự phòng: bộ HTML offline mở bằng **trình duyệt thật**; thẻ giấy khi mô hình kỹ thuật chưa có.

**Học liệu theo Skill 05 v3.2:**
- Thẻ nghiên cứu song ngữ `05-student-research-cards.md`; phiếu ghi kết quả `05-student-worksheets.md`; đáp án và rubric `teacher/05-teacher-key-and-rubric.md`.
- `assets/visuals/internet_vs_www.svg` (hình khái niệm), `assets/visuals/url_anatomy.svg` (sơ đồ cấu trúc URL), `assets/visuals/rendering_pipeline.svg` (đối chiếu HTML/CSS/JS).
- `assets/browser_offline/{index.html,science.html,technology.html,network.svg}` (bộ trang thực hành thật trên browser).
- `assets/animations/dns_query_flow.gif` và `http_request_response.gif` là **hoạt ảnh giải thích**. Chúng **không thay thế thí nghiệm điều khiển biến** ở DNS/HTTP.
- `assets/simulation-fixtures.json` chứa ví dụ kỹ thuật; các mô phỏng DNS/HTTP tương tác và journey builder hiện `SPEC_ONLY` (chưa được xác nhận chạy). **Fallback**: giáo viên cung cấp các dải sự kiện/log và thẻ điều kiện cho HS tự sắp xếp, đối chiếu; có thể tạm dùng GIF sau khi học sinh đã dự đoán.
- URL mẫu `https://school.example.org/library/books` và IP `192.0.2.10` **chỉ dùng trong mô hình**, không phải tên miền/IP thật để điều tra trực tuyến; truy cập website công khai hoặc offline dùng dữ liệu riêng.

**Quy tắc tổ chức:** Học sinh tự xem/đọc/thao tác trước → nêu phát hiện kèm bằng chứng → tự sửa khi được chất vấn → giáo viên chuẩn hóa ngắn. Không ép các nhãn 5512 thành màn hình website. Luân phiên sản phẩm khác nhau để tránh lặp chuỗi quiz.

## III. TIẾN TRÌNH DẠY HỌC

### Bảng thời lượng

| Hoạt động | Loại theo 5512 | Phút trong buổi | Thời lượng | Sản phẩm trọng tâm |
|---|---|---|---:|---|
| ACT-00. The Web Is Down! | Mở đầu | 0–8 | 8' | Dự đoán kèm bằng chứng và câu hỏi mở |
| ACT-01. Internet ≠ WWW | Hình thành kiến thức | 8–21 | 13' | Sơ đồ quan hệ và định nghĩa tự diễn đạt |
| ACT-02. Browser thật | Hình thành kiến thức | 21–36 | 15' | Kết quả nhiệm vụ và bảng mục đích→công cụ |
| ACT-03. Giải mã URL | Hình thành kiến thức | 36–51 | 15' | URL mới được phân tích có lý do |
| **Nghỉ** | — | 51–56 | **5'** | — |
| ACT-04. Điều tra DNS | Hình thành kiến thức | 56–74 | 18' | Bảng điều tra 3 trường hợp và kết luận |
| ACT-05. HTTP/HTTPS | Hình thành kiến thức | 74–92 | 18' | Log có chú giải; lập luận HTTPS |
| ACT-06A. Browser rendering | Hình thành kiến thức + luyện tập | 92–102 | 10' | Bảng phân biệt HTML/CSS/JS và dữ liệu browser |
| ACT-06B. Web Journey | Luyện tập tổng hợp + vận dụng | 102–115 | 13' | Mô hình toàn hành trình và Teach-Back |
| ACT-07. Exit + hướng dẫn tự học | Vận dụng/đánh giá | 115–120 | 5' | Trả lời trường hợp mới và tự đánh giá |
| **TỔNG** | | | **120'** | Bao gồm 5' nghỉ |

---

### HOẠT ĐỘNG ACT-00. MỞ ĐẦU: “THE WEB IS DOWN!” (8 phút; 0–8)

**a) Mục tiêu:** Kích hoạt kinh nghiệm dùng Internet; bộc lộ suy nghĩ ban đầu về WWW, hình thành nhu cầu phân biệt hai khái niệm; không kiểm tra thuộc định nghĩa chưa học (tiền đề OBJ-01, OBJ-09).

**b) Nội dung:** Thí nghiệm tư duy: WWW không khả dụng nhưng hạ tầng Internet/dịch vụ độc lập vẫn hoạt động theo **điều kiện mô tả cụ thể**. Sáu trường hợp được phân loại “có thể / không thể / chưa đủ thông tin”; học sinh ghi lý do và mức chắc chắn.

**c) Sản phẩm:** Phiếu `EV-DIAG`: lựa chọn, lý do, đánh dấu trường hợp chưa đủ dữ kiện, một câu hỏi muốn kiểm tra trong bài.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV đưa câu hỏi “Nếu không mở được trang Web, mọi hoạt động trên Internet có nhất thiết dừng không?” và phổ biến giả định. Không giảng Internet/WWW.
2. **Thực hiện nhiệm vụ (4'):** HS đọc từng điều kiện, tự phân loại, ghi lý do; được phép xem lại các mô tả nếu chưa chắc. GV quan sát hiểu lầm, không chấm sai lập tức.
3. **Báo cáo, thảo luận (2'):** HS chọn 2 ca có nhận định trái nhau để bảo vệ quan điểm; GV hỏi “Trường hợp này có bắt buộc dùng tài nguyên Web không?” và “Dữ kiện đã đủ chưa?”.
4. **Kết luận, nhận định (1'):** HS nêu câu hỏi “Internet khác WWW thế nào?”. GV xác nhận đây là vấn đề cần nghiên cứu, không đưa bảng định nghĩa đầy đủ.

**Đánh giá/điều chỉnh:** Ghi mức chẩn đoán, không lấy làm điểm tổng kết. Nếu HS suy ra “mọi hoạt động online = Web”, giữ lại một ca để kiểm chứng tại ACT-01. **Chuyển:** “Hãy tìm bằng chứng WWW nằm ở đâu trong Internet”.

### HOẠT ĐỘNG ACT-01. INTERNET VÀ WORLD WIDE WEB (13 phút; 8–21)

**a) Mục tiêu:** OBJ-01, OBJ-08, OBJ-09: phân biệt Internet/WWW, giải thích mối quan hệ và ví dụ giao thoa.

**b) Nội dung:** HS tự đọc hai thẻ nghiên cứu, quan sát sơ đồ và các trường hợp website, email app, webmail; tự dựng sơ đồ quan hệ có mũi tên mang ý nghĩa (*uses*, *accesses*, *is not the same as*).

**c) Sản phẩm:** `EV-01`: hai định nghĩa viết bằng lời mình, sơ đồ quan hệ, phân tích một tình huống webmail/email app có căn cứ.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV giao mục tiêu “Dựa vào hai thẻ nguồn và mô hình, hãy giải thích tại sao Internet không đồng nghĩa WWW”.
2. **Thực hiện nhiệm vụ (6'):** HS tự nghiên cứu thẻ, gạch bằng chứng, xếp và nối sơ đồ; có thể chọn ví dụ webmail. GV chỉ cung cấp H1–H3 theo dấu hiệu cần hỗ trợ; không đọc định nghĩa thay.
3. **Báo cáo, thảo luận (4'):** HS giảng sơ đồ bằng lời mình. GV đặt câu phản biện “Sử dụng ứng dụng email chuyên dụng có luôn là WWW không?” và để HS sửa nếu cần.
4. **Kết luận, nhận định (2'):** HS tự viết hai câu phân biệt; GV chuẩn hóa: Internet là hạ tầng liên mạng, WWW là hệ thống tài nguyên web truy cập qua Internet. **Active Recall:** nhìn cue *network / WWW / email app*, nói → viết vở → đối chiếu.

**Đánh giá/điều chỉnh:** M3 nếu giải thích đúng hai khái niệm và phần lớn tình huống có lý do (theo rubric OBJ-01). Nếu nhầm, yêu cầu trích đúng câu chứng minh từ thẻ rồi diễn đạt lại. **Chuyển:** “Muốn tiếp cận tài nguyên WWW, em dùng phần mềm nào?”

### HOẠT ĐỘNG ACT-02. KHÁM PHÁ TRÌNH DUYỆT THẬT (15 phút; 21–36)

**a) Mục tiêu:** OBJ-02, OBJ-08: tự sử dụng và giải thích chức năng browser; phân biệt browser và search engine.

**b) Nội dung:** Nhiệm vụ nghiên cứu trên Chrome/Edge/Firefox thật: mở trang bằng address bar; mở tab; theo hyperlink; dùng Back/Forward; lưu Bookmark; truy cập lại từ History của **phiên thực hành**. Có thể chọn trang công khai phù hợp hoặc bộ HTML offline.

**c) Sản phẩm:** `EV-02`: biểu diễn thao tác trực tiếp, bảng “mục đích → công cụ → kết quả”, nhận định browser ≠ search engine.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV giao nhiệm vụ tìm/mở/so sánh/lưu/tìm lại tài nguyên; không hướng dẫn từng nút trước.
2. **Thực hiện nhiệm vụ (9'):** HS tự thao tác trên browser thật, dùng thẻ gợi ý theo 3 mức nếu cần; ghi lựa chọn, kết quả. GV không xem hoặc thu lịch sử duyệt web cá nhân; ưu tiên profile buổi học.
3. **Báo cáo, thảo luận (3'):** HS làm lại 1–2 thao tác và giải thích lựa chọn công cụ; GV hỏi “Google Search và Google Chrome có cùng loại không?” hoặc ca chưa lưu Bookmark.
4. **Kết luận, nhận định (2'):** HS tự phát biểu định nghĩa browser; GV bổ sung ngắn. **Recall:** nhìn biểu tượng, nói công dụng, ghi 3–5 từ khóa vào vở.

**Đánh giá/điều chỉnh:** M3 khi hoàn thành ≥4/5 thao tác cốt lõi và giải thích ≥3 công cụ đúng; không giảm điểm vì website công khai tạm lỗi. Nếu HS chưa quen, dùng HTML offline và H2/H3 từng bước. **Chuyển:** lấy một URL vừa quan sát được trong address bar, đặt câu hỏi về ý nghĩa các phần.

### HOẠT ĐỘNG ACT-03. GIẢI MÃ URL (15 phút; 36–51)

**a) Mục tiêu:** OBJ-03, OBJ-08: phân tích cấu trúc một URL mới, phân biệt phần thường có và tùy chọn.

**b) Nội dung:** HS so sánh các ví dụ/phi ví dụ URL, tự đánh dấu thành phần giống và khác; sau đó mở thẻ nguồn về scheme, host/domain, TLD, path; có thêm ví dụ ccTLD `.vn`, `www` và `.html` có/không.

**c) Sản phẩm:** `EV-03`: URL chưa học được chú giải các phần, một câu giải thích host khác path, nhận biết `www` và `.html` không bắt buộc.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV giao “Cùng một website nhưng hai URL dẫn đến tài nguyên khác nhau; em hãy tìm phần giúp nhận diện host và phần chỉ nội dung”.
2. **Thực hiện nhiệm vụ (8'):** HS quan sát 3–5 URL, phát hiện mẫu; tự đọc thẻ khi cần và phân tách địa chỉ; tự phân tích một URL chuyển giao. GV chưa tô sẵn mọi thành phần.
3. **Báo cáo, thảo luận (4'):** HS giải thích cấu trúc và lý do. GV phản biện “`www` có bắt buộc không?”, “path có phải luôn là tệp vật lý không?”.
4. **Kết luận, nhận định (2'):** HS tự nói quy tắc chung; GV chuẩn hóa và đối chiếu SVG. **Recall:** nhìn URL chưa tô màu, HS nói và kẻ vạch các phần vào vở.

**Đánh giá/điều chỉnh:** M3 theo rubric ≥4/5 thành phần cốt lõi, không nhầm host/path. Nếu nhầm, H2 đối chiếu hai URL cùng host khác path; cho trường hợp mới. **Chuyển:** “Hệ thống làm sao tìm được nơi kết nối từ tên miền?”

### NGHỈ NGẮN 5 PHÚT (51–56)
Không giao thêm nhiệm vụ nhận thức. Học sinh nghỉ mắt và vận động nhẹ, giữ hồ sơ hành trình cho phần sau.

### HOẠT ĐỘNG ACT-04. ĐIỀU TRA DNS VÀ IP (18 phút; 56–74)

**a) Mục tiêu:** OBJ-04, OBJ-08, OBJ-09: tìm ra vai trò DNS, IP, và kết quả khác nhau khi cache có/không; phân biệt lỗi phân giải với lỗi HTTP.

**b) Nội dung:** Structured Inquiry + POE với ba ca mô phỏng trong dữ liệu: A cache miss trả IP `192.0.2.10`, B cache hit còn hiệu lực, C tên miền không tồn tại trong *vùng DNS giả lập*. HS dự đoán trước, thao tác/đọc sự kiện, ghi bằng chứng rồi giải thích.

**c) Sản phẩm:** `EV-04`: bảng 2–3 lần thử (dự đoán, điều kiện, bằng chứng, kết luận), sơ đồ domain → DNS (khi cần) → IP, lời giải thích DNS không trả HTML.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (2'):** GV giao câu hỏi và cách kiểm tra 3 trường hợp, yêu cầu ghi dự đoán trước khi xem sự kiện. Nêu rõ đây là DNS giả lập.
2. **Thực hiện nhiệm vụ (9'):** HS chọn/trải thẻ điều kiện, theo dõi từng sự kiện, ghi bảng A/B/C; nếu chưa có DNS Lab chạy thật, HS **tự sắp các dải event log từ fixture**, so khớp tình huống, không nhìn GIF rồi chép kết quả. GV chỉ H1–H3 khi cần.
3. **Báo cáo, thảo luận (5'):** HS so sánh A/B và giải thích ca C. GV phản biện: “DNS trả nội dung trang web hay thông tin phân giải?”; “Không tìm thấy tên DNS có phải HTTP 404 không?”. HS chỉnh kết luận.
4. **Kết luận, nhận định (2'):** HS tự khái quát; GV chuẩn hóa trường hợp có cache, một tên miền có thể dẫn tới các địa chỉ khác nhau tùy điều kiện; **Recall** cue domain/IP/cache rồi nói, viết, đối chiếu.

**Đánh giá/điều chỉnh:** M3 khi giải thích được tên miền–IP–DNS, DNS không gửi HTML và cache có thể ảnh hưởng số bước. Nếu chưa đạt, so trực tiếp log A/B bằng mũi tên khác màu; cho ca mới. **Chuyển:** “Đã tìm được địa chỉ đến nơi cần kết nối; ta yêu cầu tài nguyên như thế nào?”

### HOẠT ĐỘNG ACT-05. HTTP VÀ HTTPS (18 phút; 74–92)

**a) Mục tiêu:** OBJ-05, OBJ-08, OBJ-09: đọc chiều request–response, phân biệt HTTP–HTML, hiểu giới hạn HTTPS/TLS.

**b) Nội dung:** Phân tích bản ghi minh họa `GET /library/books → 200 OK`, `GET /library/missing → 404 Not Found`; đọc chứng cứ về HTTPS bảo vệ đường truyền, xử lý tình huống HTTPS nhưng nội dung không chính xác. Không giả vờ thực hiện mạng thật.

**c) Sản phẩm:** `EV-05`: sơ đồ thông điệp client/server, bảng khác nhau 200/404, hai kết luận “HTTPS làm được gì / không bảo đảm điều gì”.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (2'):** GV nêu câu hỏi “Sau DNS, browser xin trang gì từ ai? Nếu đường dẫn không tồn tại thì sao? HTTPS cho biết điều gì?” và cung cấp hai ca.
2. **Thực hiện nhiệm vụ (9'):** HS dự đoán chiều mũi tên, quan sát/sắp các thông điệp theo log mô phỏng; tự đọc thẻ nghiên cứu TLS, điền bằng chứng và suy luận. Nếu tương tác chưa có, dùng **thẻ request/response giấy hoặc log đã in**, GIF chỉ xem sau khi HS phán đoán.
3. **Báo cáo, thảo luận (5'):** HS trình bày bản ghi và phản biện câu “URL có HTTPS thì nội dung chắc đúng”. GV yêu cầu phân biệt bằng chứng về kết nối và bằng chứng về nội dung.
4. **Kết luận, nhận định (2'):** HS khái quát HTTP là giao thức trao đổi, HTML là một dạng nội dung; HTTPS bảo vệ truyền thông bằng TLS, không đảm bảo sự thật của trang. **Recall:** nói → viết 2 ý từ cue request/response và HTTPS.

**Đánh giá/điều chỉnh:** M3 khi xác định đúng chiều thông điệp, phân biệt HTTP/HTML, HTTPS/uy tín. Nếu chưa đạt, quay lại một cặp request/response với nhãn người gửi–người nhận. **Chuyển:** “Nhận HTML rồi, browser làm sao hiển thị trang cho em thấy?”

### HOẠT ĐỘNG ACT-06A. TRÌNH DUYỆT HIỂN THỊ TRANG (10 phút; 92–102)

**a) Mục tiêu:** OBJ-06, OBJ-08: phân biệt HTML/CSS/JS ở mức khái quát và bookmark/history/cache/cookie.

**b) Nội dung:** HS so sánh 3 trạng thái của cùng một trang `Library Books` (cấu trúc HTML; có CSS; có hành vi JS). Phân loại các tình huống về bốn khái niệm dữ liệu/lưu trữ trình duyệt; không đi sâu session/persistent cookies khi chưa có nguồn SGK.

**c) Sản phẩm:** `EV-06`: bảng thành phần → tác dụng → quan sát, phân loại ≥3/4 khái niệm dữ liệu.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV hỏi “Cùng một dữ liệu, vì sao trang trông khác và có thể phản ứng khi em bấm?”; cung cấp ba trạng thái so sánh.
2. **Thực hiện nhiệm vụ (5'):** HS quan sát/đối chiếu cùng nội dung trước–sau CSS/JS, đọc thẻ phù hợp, tự phân loại 4 tình huống về bookmark/history/cache/cookie.
3. **Báo cáo, thảo luận (2'):** HS giải thích tác dụng từng thành phần, nêu bằng chứng; GV phản biện “History có phải chính là cache không?”.
4. **Kết luận, nhận định (2'):** HS tự nói vai trò HTML/CSS/JS và sửa phân loại. GV chuẩn hóa, **Recall** cue structure/style/behaviour và history/cache/cookie; HS nói, viết vở.

**Đánh giá/điều chỉnh:** M3 khi giải thích đúng 3 vai trò và phân biệt ≥3/4 loại dữ liệu. Nếu khó, cho một ca trước–sau rồi mới thêm các ca khác. **Chuyển:** “Hãy ghép từng mảnh kiến thức thành một hành trình hoàn chỉnh.”

### HOẠT ĐỘNG ACT-06B. LẮP GHÉP HÀNH TRÌNH TRUY CẬP WEB (13 phút; 102–115)

**a) Mục tiêu:** OBJ-07, OBJ-08, OBJ-09; vận dụng kiến thức từ các chặng trong sản phẩm tự tạo và giảng lại.

**b) Nội dung:** HS nhận các thẻ/sơ đồ chưa hoàn chỉnh gồm browser/URL/DNS khi cần/IP/HTTP request–response/render/cache/error. Tự sắp xếp, gắn mũi tên có nhãn và thử ca khác trước khi Teach-Back.

**c) Sản phẩm:** `EV-07`: sơ đồ hành trình có nhánh điều kiện; bài giải thích miệng 2–3 phút; một lần tự chỉnh sau phản biện.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV giao “Em là người hướng dẫn người mới; hãy tự xây dựng sơ đồ mô tả từ nhập URL tới khi hiện trang, có ít nhất một trường hợp đặc biệt”.
2. **Thực hiện nhiệm vụ (6'):** HS tự xếp thẻ/nối mối quan hệ trên giấy hoặc builder nếu đã có; bổ sung điều kiện DNS cache và 404. GV chỉ đặt câu hỏi nếu sơ đồ có điểm thiếu bằng chứng.
3. **Báo cáo, thảo luận (4'):** HS **Learning by Teaching**: giảng sơ đồ cho GV; GV đóng vai người học hỏi “Nếu cache đã có IP?”, “DNS trả HTML hay địa chỉ?”, “200 và 404 phát sinh ở đâu?”. HS tự sửa khi nhận ra lỗi.
4. **Kết luận, nhận định (2'):** HS nhìn cue `URL · DNS? · HTTP(S) · Render` rồi nói và viết 4–6 mốc từ trí nhớ; GV chuẩn hóa giới hạn mô hình, chấm rubric.

**Đánh giá/điều chỉnh:** M3 khi đúng ≥5/6 chức năng, phân biệt DNS/HTTP/render và có nhánh điều kiện, lời giải thích có căn cứ. Nếu HS chỉ liệt kê từ khóa, yêu cầu gắn mũi tên “ai làm gì, vì sao”. **Chuyển:** một câu hỏi mới không nhìn tài liệu.

### HOẠT ĐỘNG ACT-07. VẬN DỤNG, ĐÁNH GIÁ CUỐI BUỔI (5 phút; 115–120)

**a) Mục tiêu:** Kiểm tra nhanh khả năng chuyển giao (ưu tiên OBJ-03,04,05,07,08,09); xác định lỗ hổng để giao bài tại Skill 08.

**b) Nội dung:** HS không nhìn tài liệu, phân tích URL mới `https://library.example.org/books`; giải thích chỗ dùng DNS/HTTP/browser; phản biện “Có HTTPS thì chắc website đáng tin”; một câu “Trước em nghĩ… nay em nghĩ…”.

**c) Sản phẩm:** `EV-EXIT`: câu trả lời độc lập (viết/nói), tự đánh giá mức chắc chắn, một nội dung cần ôn.

**d) Tổ chức thực hiện:**
1. **Chuyển giao nhiệm vụ (1'):** GV giao 1–2 câu chuyển giao mới, yêu cầu không xem lại tài liệu.
2. **Thực hiện nhiệm vụ (2'):** HS tự nói/viết suy luận, đánh dấu chỗ còn phân vân.
3. **Báo cáo, thảo luận (1'):** HS trình bày ngắn, GV hỏi một câu “Em dựa vào bằng chứng nào?” khi cần.
4. **Kết luận, nhận định (1'):** GV và HS đối chiếu rubric; HS chọn mục tiêu cần luyện thêm, nhận hướng dẫn tự vẽ mindmap và ôn flashcards. Không tuyên bố “đạt cả bài” chỉ từ câu trả lời cuối buổi.

**Đánh giá/điều chỉnh:** Tổng hợp `EV-01…07` và `EV-EXIT`; mức M3/M4 chỉ xác nhận từ nhiều chứng cứ có xét mức hỗ trợ.

---

## IV. ĐÁNH GIÁ VÀ ĐIỀU CHỈNH SAU BUỔI

### 1. Phiếu theo dõi cá nhân
Đối với từng OBJ-01…09, GV ghi: mức M1/M2/M3/M4; hỗ trợ H0/H1/H2/H3; **trích dẫn cụ thể** lời HS hoặc thao tác/sản phẩm; điểm còn nhầm; hướng củng cố. Không suy luận “học sinh hiểu” từ việc đã nhấn đúng nút.

### 2. Tích hợp năm yếu tố ghi nhớ
1. **Active Recall sau từng đơn vị:** CUe hình/từ khóa → HS **nói bằng lời** → **ghi vở** → đối chiếu; diễn ra ngắn trong bước kết luận của ACT-01,02,03,04,05,06A,06B.
2. **Một game khởi động duy nhất** tại ACT-00, không thêm trò chơi phụ sau mỗi đoạn.
3. **Mindmap sau buổi:** HS tự vẽ một sơ đồ Internet vs WWW → Browser → URL → DNS → HTTP(S) → Rendering, có 1 nhánh cache và phản ví dụ HTTPS.
4. **Flashcards EN/VI:** Lập bộ thuật ngữ phục vụ buổi sau (Internet, WWW, browser, URL, domain, path, IP, DNS, HTTP, HTTPS, request, response, cache, cookie, rendering); không yêu cầu chép nguyên văn cả thẻ nguồn.
5. **Learning by Teaching:** ACT-06B HS giảng hành trình cho GV, GV đặt phản biện ngắn.

### 3. Hướng luyện tập về nhà (bàn giao Skill 08)
- Chỉ định nội dung theo lỗ hổng thực tế; bài tập có đáp án/rubric riêng và kiểm tra buổi sau.
- Ưu tiên: 2–3 cue recall, 1 URL mới, 1 tình huống DNS/HTTP, mindmap và 1 đoạn teach-back; không ép làm tất cả nếu thời lượng ở nhà không hợp lý.
- Không giao bài truy cập trang có nguy cơ hoặc yêu cầu cung cấp history/cookie cá nhân.

### 4. Khả năng thích ứng
- **Không có Internet:** browser thật với bộ HTML offline; URL/DNS/HTTP qua ví dụ và bảng log mô phỏng; tuyệt đối không mô tả `file://` như HTTP thật.
- **Mô hình tương tác chưa chạy:** sử dụng thẻ log từng sự kiện và bảng đối chiếu; GIF chỉ minh họa sau dự đoán, không tính là bằng chứng thử nghiệm biến số.
- **Học sinh mất gốc:** rút bớt ca mở rộng, giữ những mục tiêu cốt lõi; tăng H2/H3 và đánh giá lại bằng ví dụ mới.
- **Học sinh khá:** thêm trường hợp query/fragment, DNS cache hết hạn, nhiều tài nguyên HTTP; không thêm nội dung chuyên sâu vào ngưỡng đạt chuẩn.
- **An toàn và quyền riêng tư:** mọi ví dụ URL/IP mô phỏng có nhãn; không yêu cầu đăng nhập tài khoản hoặc chia sẻ dữ liệu browsing riêng tư.

## V. KẾT LUẬN BÀN GIAO SANG SKILL 07

Skill 06 là **kế hoạch 5512**, chưa phải kịch bản lời thoại chi tiết hay website. Skill 07 sẽ cụ thể hóa lời giao nhiệm vụ, thời điểm học liệu xuất hiện, hệ thống câu hỏi H1–H3, câu trả lời dự kiến và chuyển cảnh, đồng thời giữ quyền chủ động nghiên cứu và phát biểu của học sinh.