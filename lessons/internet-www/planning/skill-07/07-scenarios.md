# SKILL 07 – KỊCH BẢN DẠY HỌC CHI TIẾT
## Bài 5.1 – The Internet and the World Wide Web (WWW)

**Phiên bản:** v3.2 · **Ngày:** 11/11/2026 · **Hình thức:** Gia sư 1–1 · **Tổng:** 120 phút, gồm nghỉ 5 phút.  
**Phạm vi:** 5.1.1–5.1.5, 15 đơn vị kiến thức KU-01–15. Cookies chỉ ở mức khái quát, không tự thêm nội dung SGK 5.1.6 chưa có.  
**Đầu vào cố định:** Skill 06 (giáo án 5512), Skill 03 (OBJ-01–09, tiêu chí M1–M4), Skill 04 cập nhật *browser thật*, Skill 05 v3.2 (cards, worksheet, SVG/GIF, browser offline, simulation fixtures).  
**Định hướng thực thi:** Màn hình HS chỉ hiển thị bối cảnh/câu hỏi/học liệu/đầu ra hiện tại; *bốn bước 5512 là ghi chú GV*, không bắt tạo bốn slide mỗi hoạt động. HS tự xem nguồn → đưa bằng chứng → tự phát biểu/sửa sai → GV chuẩn hóa ngắn. Tình huống liên tục; sản phẩm chặng trước được tái sử dụng.

## Tổng quan hành trình và mốc thời gian

| ACT | Mốc phút | Chủ đề, phương pháp | Bằng chứng | Cầu nối |
|---|---|---|---|---|
| 00 | 0–8 | The Web Is Down · Game-based + Predict–Explain | EV-DIAG: dự đoán có lý do và mức chắc chắn | Tại sao Internet ≠ WWW? |
| 01 | 8–21 | Internet vs WWW · Guided Self-Study + Comparison | EV-01: định nghĩa + sơ đồ có quan hệ | Dùng công cụ gì truy cập Web? |
| 02 | 21–36 | Browser thật · Task-Based + Guided Discovery | EV-02: thao tác + bảng mục đích/công cụ | Address bar chứa gì? |
| 03 | 36–51 | URL · Example–Nonexample + Information Gap | EV-03: phân tích URL lạ | Host có IP bằng cách nào? |
| — | 51–56 | Nghỉ 5 phút | — | — |
| 04 | 56–74 | DNS/IP · Structured Inquiry + POE | EV-04: dự đoán, log 3 ca và giải thích | Biết IP rồi yêu cầu tài nguyên thế nào? |
| 05 | 74–92 | HTTP/HTTPS · Simulation/POE/Case | EV-05: chiều request/response và lập luận TLS | Nhận tài nguyên rồi browser làm gì? |
| 06A | 92–102 | Rendering + browser data · Evidence Comparison | EV-06: bảng cấu trúc/style/behavior và 4 loại dữ liệu | Ghép các mảnh thành một hệ thống |
| 06B | 102–115 | Web journey · Model Building + Teach-Back | EV-07: sơ đồ có nhánh, lời giải thích | Kiểm tra hiểu thực sự bằng ca mới |
| 07 | 115–120 | Exit · Retrieval + Self-Assessment | EV-EXIT: câu trả lời độc lập và kế hoạch ôn | Sang bài tập ở nhà, Skill 08 |

**H1–H3 xuyên suốt:** H1 hỏi mở về mục tiêu/bằng chứng; H2 chỉ đúng thẻ, chi tiết trong mẫu hoặc kết quả thí nghiệm; H3 làm rõ **một** trường hợp nhỏ rồi giao trường hợp *khác* để HS tự làm. Ghi lại mức hỗ trợ thực sự, không chấm M3 cho sản phẩm chỉ hoàn thành nhờ H3.

---

## ACT-00 · The Web Is Down! (0–8'; OBJ-01, OBJ-09 – đánh giá ban đầu)

**Trải nghiệm nhận thức:** Nhận điều kiện giả định → phân loại các dịch vụ → nhận ra có trường hợp chưa đủ dữ kiện → nêu câu hỏi cần nghiên cứu. Không biến khởi động thành bài kiểm tra thuộc lòng khái niệm mới.

**Học liệu:** 6 ca trên phiếu Skill05 `05-student-worksheets.md`, thẻ cảnh báo **Thought experiment / Thí nghiệm tư duy**, ô chọn *Có thể / Không thể / Chưa đủ dữ kiện*, ô ghi lý do và mức chắc chắn 1–3. **Không cần GIF mạng ở bước đầu.**

1. **Chuyển giao (0–1', GV tối đa 20–30 giây):** Hiển thị “WWW tạm không khả dụng, nhưng hạ tầng Internet và dịch vụ độc lập được giả định vẫn hoạt động”. GV: *“Với từng trường hợp, em dự đoán điều gì còn làm được? Ghi một lý do; được chọn ‘chưa đủ dữ kiện’.”* HS đọc điều kiện, không nhận đáp án.
2. **Thực hiện (1–5', HS tự làm):** HS đánh dấu 6 ca, nêu mức chắc chắn, chọn một ca còn nghi ngờ để đọc lại mô tả. GV chỉ quan sát; nếu HS hỏi “Web là gì?”: *“Hãy nêu dự đoán từ thông tin hiện có; câu hỏi đó ta sẽ nghiên cứu.”* Không công bố định nghĩa.
3. **Báo cáo/thảo luận (5–7'):** HS chọn ca chắc chắn nhất và ca chưa rõ, nói lập luận. GV: *“Điều kiện nào trong đề đủ để em kết luận?”* Nếu HS khẳng định mọi game online còn hoạt động, hỏi: *“Trò chơi này có lệ thuộc vào đăng nhập web không? Đề có cho biết không?”* HS được sửa một ô và ghi vì sao.
4. **Kết luận/nhận định (7–8'):** HS hoàn thành “Internet và WWW có lẽ không hoàn toàn giống nhau, vì …”; GV chỉ chốt *“Đây là giả định; mình cần bằng chứng về hai khái niệm.”* **Không ép ghi thuộc định nghĩa.**

**Sản phẩm:** EV-DIAG 6 dự đoán, ít nhất 1 lý do, 1 câu hỏi nghiên cứu. **Dấu hiệu sẵn sàng:** HS xác định được một điểm còn thiếu trong hiểu biết. **Chuyển tiếp:** giữ hai ô “Internet” và “WWW” còn trống: *“Hãy tìm bằng chứng để giải thích quan hệ giữa chúng.”*

## ACT-01 · Internet vs WWW (8–21'; OBJ-01, OBJ-08)

**Trải nghiệm:** Phân biệt phần kết nối với tài nguyên web → kiểm tra bằng ví dụ và phản ví dụ → tự tạo mối quan hệ có nhãn.

**Học liệu:** CARD-01/02; trang/sơ đồ `internet_vs_www.svg` **chỉ mở sau khi HS đã thử vẽ** (sơ đồ chuẩn là tài liệu đối chiếu, không phải ảnh đưa sẵn đáp án); năm thẻ rời network/WWW/browser/email app/webmail; phiếu EV-01.

1. **Chuyển giao (8–9'):** GV nhắc lại hai ca HS thấy khác nhau ở ACT00, giao: *“Đọc hai tư liệu ngắn. Tìm hai câu làm bằng chứng, vẽ mối liên hệ và giải thích cho tôi.”*
2. **Thực hiện (9–16'):** 9–12': HS đọc CARD-01/02, gạch chân “connections/networks” và “interlinked web resources”, trích bằng chứng; 12–16': xếp thẻ hoặc vẽ sơ đồ (Internet bao quát nhiều dịch vụ; WWW dùng Internet; Browser truy cập tài nguyên Web), viết hai định nghĩa bằng lời mình. GV để HS tự chọn cách trình bày. H1 *“Câu nào nói về mạng, câu nào nói về tài nguyên?”* H2 chỉ đúng CARD; H3 diễn giải **một** ví dụ Internet ngoài Web.
3. **Báo cáo/thảo luận (16–19'):** HS dùng sơ đồ giảng lại (khoảng 90 giây). GV hỏi *“Email chuyên dụng luôn là trang web sao?”*, *“Webmail và ứng dụng email có thể khác nhau ở đâu?”* HS nêu ngoại lệ, sửa mũi tên nếu sai.
4. **Kết luận (19–21'):** HS tự nói “Internet là …; WWW là …; mối quan hệ …” rồi nhìn các cue `network – web resources – email app` **nói → ghi vở → đối chiếu**; GV kiểm tra với `internet_vs_www.svg` trong ≤30 giây.

**Bằng chứng:** EV-01 sơ đồ có nhãn `uses`/`accesses`, hai khái niệm bằng lời HS, một phản ví dụ hợp lý. **Cảnh báo:** WWW không phải tất cả Internet; browser khác Internet. **Chuyển:** HS chỉ một tài nguyên web trong sơ đồ: *“Muốn mở được tài nguyên đó, em dùng gì?”*

## ACT-02 · Khám phá Web Browser thật (21–36'; OBJ-02, OBJ-08)

**Trải nghiệm:** Làm nhiệm vụ trên phần mềm thật → tự phát hiện công cụ → giải thích sự khác biệt browser/search engine. **KHÔNG tạo virtual browser.**

**Học liệu:** Máy Chrome/Edge/Firefox; online trang công khai đã thử trước hoặc `assets/browser_offline/index.html` và các trang liên kết; CARD-03 chỉ mở khi cần kiểm chứng; phiếu EV-02 có bảng `Mục đích / Công cụ em chọn / Kết quả`; H1–H3.

1. **Chuyển giao (21–22'):** GV: *“Em cần xem hai tài liệu, mở liên kết, quay lại, lưu một trang và tìm lại trang đã mở. Tự chọn cách, tôi chỉ gợi ý khi cần.”* Không giới thiệu danh sách nút rồi làm mẫu.
2. **Thực hiện (22–31'):** HS mở bằng address bar (22–24'); tự mở tab và hyperlink (24–26'); Back/Forward (26–27'); Bookmark (27–29'); History phiên học (29–30'); tự điền bảng mục đích/công cụ/kết quả (30–31'). Dùng **profile thực hành**, không yêu cầu đăng nhập hoặc truy cập history cá nhân. Nếu site ngoài lỗi, chuyển offline ngay, không chấm sai.
3. **Báo cáo/thảo luận (31–34'):** HS trình diễn lại hai thao tác do mình chọn; GV: *“Nếu chưa lưu Bookmark thì tìm lại trang vừa mở bằng cách nào?”* và *“Chrome khác Google Search ở điểm gì?”* HS tự tra CARD-03 nếu cần, không nói thay.
4. **Kết luận (34–36'):** HS tự phát biểu “Browser is software that…”; GV chuẩn hóa ngắn. **Recall:** GV chỉ 3–5 biểu tượng đang có trên trình duyệt **thật**; HS nêu mục đích, tự ghi từ khóa vào vở.

**Bằng chứng:** EV-02 thực hiện ≥4/5 nhóm thao tác, giải thích ≥3 chức năng; phân biệt browser/website/search engine. **Điều chỉnh:** history có thể không được lưu ở chế độ private; khi đó ghi “không khả dụng”, thay bằng quan sát phiên chuẩn với profile thực hành. **Chuyển:** HS chỉ thanh địa chỉ: *“Chuỗi này có quy tắc gì để chỉ đúng tài nguyên?”*

## ACT-03 · URL (36–51'; OBJ-03, OBJ-08)

**Trải nghiệm:** So sánh địa chỉ thực và ví dụ mô phỏng → tra cứu thẻ để gắn nhãn → vận dụng lên URL chưa gặp → kiểm chứng ngoại lệ.

**Học liệu:** CARD-04, bộ U1–U5 từ Skill05, phiếu EV-03, `url_anatomy.svg` **chỉ để đối chiếu sau khi HS đã phân tích**. `*.example.org` là ví dụ, không yêu cầu truy cập Internet thật.

1. **Chuyển giao (36–37'):** Từ address bar trước đó, GV đưa hai URL cùng host khác path: *“Em hãy tìm phần cho biết nơi truy cập, và phần làm hai tài nguyên khác nhau.”*
2. **Thực hiện (37–45'):** HS so U1/U2, tô điểm chung/khác; mở CARD-04 để học scheme, host, path, subdomain, TLD; tự gắn nhãn U3/U4, ghi trường hợp `www` và `.html` không có; tự phân tích U5 chưa được chú giải. GV không tô sẵn. H1 *“Phần nào vẫn giữ nguyên giữa hai địa chỉ?”* H2 chỉ CARD-04; H3 giải thích một URL **khác U5**.
3. **Báo cáo/thảo luận (45–49'):** HS giải thích U5 bằng lời; GV hỏi *“www có bắt buộc không?”*, *“Path có phải thư mục/tệp vật lý không?”*, *“Một URL có thể có query không?”* Nếu câu hỏi mở rộng làm mất thời gian, giữ query/fragment ở mức nhận diện tùy chọn.
4. **Kết luận (49–51'):** HS chốt quy tắc, sau đó nhìn URL chưa tô màu → nói scheme/host/path → tự chia trên vở. Cuối cùng đối chiếu `url_anatomy.svg`.

**Bằng chứng:** EV-03: đúng scheme, host, path, giải thích host/path khác nhau, không bắt buộc www/html. **Chuyển:** giữ host `school.example.org`: *“Máy tính tìm địa chỉ nơi cần kết nối từ cái tên này như thế nào?”*

## Nghỉ (51–56')

Không thêm quiz/đọc thẻ; cho HS nghỉ mắt. Giữ tài liệu EV-03 để bắt đầu DNS.

## ACT-04 · DNS và IP — Structured Inquiry (56–74'; OBJ-04, OBJ-08, OBJ-09)

**Trải nghiệm:** Dự đoán kết quả theo điều kiện → kiểm tra A/B/C qua fixture → so log → kết luận về DNS, cache và sự khác nhau giữa lỗi DNS với 404.

**Học liệu:** CARD-05; bảng ba ca A: cache miss/được A record, B: cache hit còn TTL, C: tên miền không tồn tại trong vùng giả lập; fixture JSON; thẻ log cắt rời/dải sự kiện; `dns_query_flow.gif` **chỉ xem sau dự đoán, không thay thí nghiệm**. Mô hình tương tác hoàn chỉnh hiện **SPEC_ONLY**.

1. **Chuyển giao (56–58'):** GV trình bày *dữ liệu giả định*: `school.example.org ↔ 192.0.2.10` là ví dụ, không phải IP thật. Giao: *“Em dự đoán ở ba điều kiện, hệ thống sẽ hỏi DNS khi nào? Cần bằng chứng từ log.”* HS ghi dự đoán trước khi nhìn log.
2. **Thực hiện (58–67'):** 58–60' HS ghi A/B/C dự đoán; 60–65' HS mở thẻ log/fixture theo từng ca, tự sắp các bước, lập bảng điều kiện–kết quả–bằng chứng; 65–67' đọc CARD-05, đối chiếu, chỉnh mô hình domain→address. Khi chưa có lab, dùng thẻ giấy; tránh giả vờ GIF là thí nghiệm điều khiển biến.
3. **Báo cáo/thảo luận (67–72'):** HS so A với B rồi trình bày ca C; GV hỏi *“DNS trả về HTML không?”* và *“NXDOMAIN có giống HTTP 404 không?”*. HS phải trích ít nhất một dòng log và tự sửa nếu nhầm. GV gợi nếu HS cho rằng mỗi domain luôn chỉ có một IP.
4. **Kết luận (72–74'):** HS tự diễn đạt vai trò DNS, IP, cache. Recall cue `domain / IP / cache hit` → nói → vẽ một mũi tên đúng có điều kiện vào vở → đối chiếu; GIF có thể cho xem 1 lần như minh họa sau cùng nếu không vượt giờ.

**Bằng chứng:** EV-04 dự đoán + log A/B (và C nếu kịp) + lý giải, không nhầm NXDOMAIN–404. **Chuyển:** HS giữ IP ví dụ và path từ URL: *“Biết nơi kết nối rồi, làm sao xin đúng tài nguyên?”*

## ACT-05 · HTTP và HTTPS (74–92'; OBJ-05, OBJ-08, OBJ-09)

**Trải nghiệm:** Tự đọc các thông điệp → dự đoán chiều request/response → so 200/404 → phản biện nhận định “HTTPS đảm bảo nội dung đúng”.

**Học liệu:** CARD-06/07, fixture 2 ca `/library/books` và `/library/missing`, dải thẻ Client/Server/GET/200/404, GIF `http_request_response.gif` xem sau khi HS dự đoán, phiếu EV-05. Lab tương tác vẫn SPEC_ONLY.

1. **Chuyển giao (74–76'):** GV đưa hai tài nguyên trên cùng máy chủ giả lập: *“Nếu xin sách thành công và nếu đường dẫn không tồn tại thì các thông điệp khác nhau ra sao? Hãy vẽ chiều giao tiếp trước khi xem minh họa.”*
2. **Thực hiện (76–85'):** HS tự gắn người gửi cho GET và response; tra CARD-06 kiểm chứng; tự sắp 200/404 vào log; mở CARD-07 khi gặp nhận định về HTTPS, ghi hai cột `protects / does not prove`. Không tạo request mạng thật, không đưa website nguy hiểm.
3. **Báo cáo/thảo luận (85–90'):** HS diễn giải “Browser gửi gì? Server trả gì?”. GV đưa phản ví dụ: *“Một trang dùng HTTPS nói ‘tất cả thông tin trên tôi đều đúng’ – giao thức có chứng minh câu đó không?”* HS dẫn từ CARD-07, GV yêu cầu phân biệt độ an toàn **đường truyền** và độ tin cậy **nội dung**. Có thể đối chiếu GIF sau báo cáo.
4. **Kết luận (90–92'):** HS tự nói `HTTP ≠ HTML`, `HTTPS = HTTP over TLS`, và giới hạn HTTPS. Recall cue `GET → 200/404`, `HTTPS` → nói/viết một sơ đồ hai chiều vào vở rồi đối chiếu.

**Bằng chứng:** EV-05 có chiều đúng, phân biệt 200/404, câu kết luận bảo mật chính xác. **Chuyển:** HS đã có ví dụ response HTML: *“Trình duyệt biến tài nguyên này thành trang nhìn thấy bằng cách nào?”*

## ACT-06A · Trình duyệt hiển thị trang và dữ liệu lưu (92–102'; OBJ-06, OBJ-08)

**Trải nghiệm:** So cùng nội dung ở ba trạng thái → chỉ ra yếu tố thay đổi → phân biệt bookmark/history/cache/cookie bằng mục đích sử dụng.

**Học liệu:** CARD-08/09; `rendering_pipeline.svg` làm **hình giải thích đối chiếu**, không giả lập cùng HTML chạy; bộ trang HTML offline có thể mở thật để quan sát; bốn thẻ tình huống lưu dữ liệu; EV-06.

1. **Chuyển giao (92–93'):** GV giữ nội dung trang Books từ response, hỏi *“Vì sao cùng nội dung này có thể trông khác và phản hồi khi nhấp?”* + *“Những thứ trình duyệt lưu lại có giống nhau không?”*
2. **Thực hiện (93–98'):** HS xem thẻ CARD-08 hoặc bản mẫu HTML thực tế, tìm một thay đổi do CSS và một phản hồi do JS; đối chiếu `rendering_pipeline.svg` **sau nhận định**. Tiếp theo HS đọc CARD-09 và xếp bốn tình huống bookmark/history/cache/cookie, ghi lý do. Không yêu cầu nhìn cookie người dùng thật.
3. **Báo cáo/thảo luận (98–100'):** HS chỉ bằng chứng; GV hỏi *“History có phải chính là cache không?”*, *“HTML tự quyết định mọi màu sắc không?”*. HS sửa đáp án nếu cần.
4. **Kết luận (100–102'):** HS tự nói cấu trúc/trình bày/hành vi và vai trò 4 khái niệm lưu trữ; GV xác nhận ngắn. Recall cue `HTML / CSS / JS`, `history / cache` → nói → ghi vở.

**Bằng chứng:** EV-06 phân biệt 3 vai trò, ≥3/4 loại dữ liệu. **Chuyển:** *“Giờ em đã có tất cả mảnh bằng chứng, hãy tự ghép hành trình hoàn chỉnh.”*

## ACT-06B · Xây dựng hành trình + Learning by Teaching (102–115'; OBJ-07, OBJ-08, OBJ-09)

**Trải nghiệm:** Tự xây dựng mô hình có mũi tên nhân quả → thêm ít nhất một nhánh điều kiện → giảng lại → sửa theo phản biện.

**Học liệu:** Bộ thẻ URL, Browser, DNS? cache, IP, request, response, render, 404; giấy/A3 hoặc bảng xếp thẻ; CARD-10 chỉ khi cần; phiếu EV-07. Journey builder tương tác là SPEC_ONLY, **không giả định đã có**.

1. **Chuyển giao (102–103'):** GV: *“Em là người giảng lại cho tôi. Hãy tự vẽ/xếp đường đi từ URL đến trang hiển thị, và thêm ít nhất một trường hợp thay đổi quá trình.”*
2. **Thực hiện (103–109'):** HS tự ghép và ghi mũi tên có động từ, thêm nhánh DNS cache hoặc 404; xem các bằng chứng EV-03–EV-06 nếu cần. GV không xếp giúp, chỉ hỏi *“Ai làm? Gửi cái gì? Khi nào có thể bỏ bước?”*
3. **Báo cáo/thảo luận (109–113'):** HS **Teach-Back** 2–3 phút, giáo viên đóng vai người mới học và hỏi hai câu chọn theo sơ đồ thật: *“Nếu đã có IP lưu hợp lệ?”*, *“Trang 404 có nghĩa tên miền DNS sai?”*, *“Một trang có thể cần thêm request ảnh?”*. HS sửa màu/mũi tên và nói rõ lý do.
4. **Kết luận (113–115'):** HS nhìn cue `URL · DNS khi cần · HTTP(S) · render` → nói, ghi 4–6 mốc vào vở từ trí nhớ; GV nhận xét theo rubric OBJ-07, phân biệt diễn giải khái quát với trình tự bắt buộc.

**Bằng chứng:** EV-07 có ≥5/6 vai trò đúng, ít nhất một nhánh, giải thích có bằng chứng; theo dõi hỗ trợ H0–H3. **Chuyển:** *“Nếu gặp một địa chỉ mới, em tự giải thích được không? Hãy thử không nhìn sơ đồ.”*

## ACT-07 · Exit Ticket và định hướng ôn tập (115–120'; OBJ-03–09)

**Trải nghiệm:** Tự làm một tình huống chuyển giao ngắn → tự đánh giá mức độ chắc chắn → xác định nhiệm vụ tự học tiếp nối.

**Học liệu:** EV-EXIT trên phiếu học sinh; chưa cần tạo game cuối buổi vì đã có game đầu buổi; thẻ flashcard và mindmap do **Skill 08** đóng gói thành bài về nhà.

1. **Chuyển giao (115–115:30):** GV đưa trường hợp mới: `https://library.example.org/help/start` (URL mô phỏng). Hỏi *“Chỉ host/path và giải thích hai bước tiếp theo để trang có thể hiện ra.”*
2. **Thực hiện (115:30–118):** HS độc lập ghi 3 ý (URL, DNS khi cần, HTTP/render), không mở thẻ. GV quan sát mức hỗ trợ bằng 0.
3. **Báo cáo/thảo luận (118–119):** HS nói ngắn vì sao HTTPS không chứng minh nội dung đúng. GV đưa phản hồi đúng/sai theo bằng chứng, không hỏi lan man.
4. **Kết luận (119–120):** HS tự đánh dấu M1–M4 cho các phần và chọn mục cần ôn; GV giao nhiệm vụ: vẽ mindmap hành trình, ôn flashcards, chuẩn bị giải thích một tình huống ở buổi sau (**bộ giao bài đầy đủ do Skill 08 tạo**, chưa nhận đã tạo ở Skill 07).

**Bằng chứng:** EV-EXIT và mục ôn cụ thể. **Bàn giao Skill 08:** bản đồ lỗi cần ôn, không đưa đáp án trực tiếp vào phiếu giao HS.

---

## Tình huống rẽ nhánh và kịch bản dự phòng toàn buổi

- **HS tiến nhanh:** mỗi chặng chỉ thêm *một* ca biên có giá trị (webmail; URL query; DNS cached; 404; page nhiều resources), không kéo dài mọi chặng thành trò chơi mới.
- **HS mất nền tảng:** giảm số ca nhưng giữ suy luận: DNS ưu tiên A/B, HTTP một 200 và một 404 minh họa nhanh; H3 xong phải thử một ca mới để xác nhận năng lực.
- **Không có mạng:** ACT-02 mở bộ HTML offline **trên browser thật**; DNS/HTTP dùng log và thẻ giấy; GIF là minh họa sau dự đoán. Không nói file:// là một HTTP request.
- **Không có laptop:** ACT-02 phải điều chỉnh thành quan sát minh họa + bài tập giấy và ghi OBJ-02 *chưa kiểm tra thao tác thật*, lên kế hoạch đánh giá bổ sung sau. Không nhận đạt khi chưa thao tác.
- **Vấn đề riêng tư:** không dùng lịch sử thực của HS, không xin mật khẩu, không đăng nhập, không cho HS truy cập địa chỉ nghi vấn để “thử bảo mật”.
- **Dữ liệu kỹ thuật:** `school.example.org`/`192.0.2.10` là ví dụ tài liệu, không có mạng thật; không nhầm NXDOMAIN, HTTP 404, lỗi browser hay lỗi kết nối.

## Kết luận về tỷ lệ chủ động

Phần lớn phút thuộc về HS đọc, thao tác, tự xây dựng và giải thích; lời GV chủ yếu tập trung ở chuyển giao ngắn, gợi hỏi và chốt trong mỗi chặng. Không có chỉ tiêu cứng “GV nói dưới x phút” nếu HS cần scaffold đúng mức. Tiêu chí là **HS cung cấp phát hiện và bằng chứng trước khi được nghe kết luận chuẩn**.