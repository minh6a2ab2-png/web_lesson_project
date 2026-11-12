# SKILL 03 — LESSON ARCHITECTURE & ASSESSMENT
## 03-lesson-blueprint.md — Bài 5.1: The Internet and the World Wide Web

**Phiên bản Skills:** v3.1 · **Phiên bản bài học:** WWW-5.1 / architecture 1.0  
**Ngày xây dựng:** 11/11/2026 · **Trạng thái:** PASS — có giả định về trình độ đầu vào cần xác nhận ở đầu buổi.  
**Đầu vào đã đọc:** `01-content-map-internet-www-v3.1.md`, `02-resource-bank-internet-www-v3.1.md`, `02-original-asset-ideas-internet-www-v3.1.md`, quy tắc `03-lesson-architecture-assessment/SKILL.md`.  
**Phạm vi:** SGK 5.1.1–5.1.5, trang 180–183; KU-01–KU-15; **KU-16 = PENDING_SOURCE, không dạy như mục tiêu bắt buộc**.  
**Đối tượng:** một học sinh với một gia sư; lớp, kinh nghiệm trình duyệt và tiếng Anh ban đầu chưa được đo.  
**Thời lượng:** 120 phút, tính cả 5 phút nghỉ; tiếng Anh là thuật ngữ môn học, tiếng Việt để hỗ trợ giải thích.

> **Ranh giới Skill 03:** Ấn định mục tiêu, logic thứ tự kiến thức, loại bằng chứng cần thu, ngưỡng đạt và nhánh điều chỉnh. Chưa ấn định phương pháp chính thức (Skill 04), asset triển khai (Skill 05), giáo án 5512 (Skill 06), lời thoại (Skill 07), slide (Skill 09–10) hay code (Skill 11).

---

## A. Quyết định kiến trúc bài học

### Câu hỏi xuyên suốt (driving question)
**“Khi em nhập một địa chỉ vào trình duyệt, điều gì giúp trang web xuất hiện — và vì sao Internet không đồng nghĩa với WWW?”**

Kết luận không được cung cấp ngay. Sau từng chặng, học sinh bổ sung một mảnh bằng chứng vào **Hồ sơ hành trình mở web** (*Web Journey Evidence Record*). Đây là **sản phẩm học tập logic**, chưa phải thiết kế một giao diện cụ thể.

**Hồ sơ tích lũy dự kiến:**
1. Internet hỗ trợ những loại dịch vụ nào, WWW nằm ở đâu.
2. Công cụ truy cập web mà người dùng dùng và thao tác nó thực hiện được.
3. URL tài nguyên học sinh chọn và các phần quan trọng của URL.
4. Domain cần phân giải, địa chỉ IP được minh họa *theo giả định*.
5. Client request, server response, khác biệt giữa HTTP/HTTPS.
6. Vai trò browser trong việc nhận/tải tài nguyên và hiển thị trang; các trường hợp lưu dữ liệu.
7. Sơ đồ toàn hành trình có các bước điều kiện (ví dụ có thể dùng cache), lời giải thích của học sinh.

### Vì sao chọn thứ tự khác sách?
SGK trình bày Internet–WWW → URL → HTTP/HTTPS → Browser → retrieval/DNS. Trong tiết gia sư, mạch **người dùng mở browser → nhập URL → tìm nơi đến → trao đổi thông điệp → hiện trang** tạo quan hệ tiên quyết và hạn chế cảm giác từng phần rời nhau. Không làm mất nội dung hoặc yêu cầu gốc. Học sinh biết một chức năng của browser ở chặng đầu, còn cơ chế browser rendering được quay lại lúc tổng hợp; đây là chủ ý **giải thích từ trải nghiệm quen thuộc đến cơ chế phía sau**.

### Quy tắc chuyên môn quan trọng
- Phân biệt Internet (hạ tầng liên mạng) với Web (hệ thống tài nguyên web sử dụng Internet); webmail là trường hợp giao thoa, không phân loại email tuyệt đối.
- URL web có scheme và host; `www`, đường dẫn có đuôi `.html`, query/fragment **không phải tất cả đều bắt buộc**. Yêu cầu từ SGK về loại tên miền và country code được giữ ở mức ví dụ, không biến thành học DNS nâng cao.
- DNS trả thông tin phân giải tên miền; **không vận chuyển nội dung trang**. Mô hình DNS cache hit/miss hoặc có nhiều DNS server là minh họa có điều kiện, không là chuỗi cố định cho mọi truy cập.
- HTTP là giao thức request–response; HTML là ngôn ngữ đánh dấu. HTTPS bảo vệ kết nối truyền thông bằng TLS, **không xác nhận rằng nội dung website đáng tin**.
- Browser có thể tải HTML, CSS, JS và những tài nguyên khác, đôi khi qua nhiều request; không mô tả một thứ tự nạp tài nguyên là quy tắc bất biến.
- Cache, history, cookies phải được nhắc ở mức SGK 5.1.4 (KU-15), nhưng session/persistent cookies thuộc KU-16 **không giảng sâu** khi chưa có sách 5.1.6.
- Dùng URL ví dụ `https://school.example.org/library/books` và IP tài liệu `192.0.2.10` như **bản ghi giả lập**, không nói là ánh xạ DNS thực tế.

---

## B. Mục tiêu cuối bài, đo bằng biểu hiện quan sát

| OBJ | Mục tiêu kiến thức / năng lực | KU liên quan | Biểu hiện kỳ vọng cuối buổi |
|---|---|---|---|
| **OBJ-01** | Phân biệt Internet, WWW và mối quan hệ | 01–03 | Diễn đạt cả hai khái niệm bằng lời mình, phân tích được ví dụ webmail/email client theo bối cảnh |
| **OBJ-02** | Sử dụng và giải thích công cụ browser | 04–05 | Thực hiện nhiệm vụ web cơ bản; phân biệt browser, website, search engine; nêu công dụng tính năng |
| **OBJ-03** | Đọc và phân tích URL web | 07–09 | Xác định scheme, host/domain/TLD, path trong URL **mới**; nhận ra `www`/`.html` không bắt buộc, có biết ví dụ ccTLD |
| **OBJ-04** | Giải thích cơ chế DNS và địa chỉ IP ở mức nhập môn | 12–13 | Tự giải thích vì sao tên miền có thể cần phân giải thành IP; DNS ≠ máy chủ chứa trang; nêu được cache có thể thay đổi số bước |
| **OBJ-05** | Giải thích HTTP request–response và ý nghĩa HTTPS | 10–11 | Mô tả được request/response đúng chiều, phân biệt HTTP/HTML và phân tích giới hạn bảo đảm của HTTPS |
| **OBJ-06** | Giải thích browser rendering và phân biệt dữ liệu trình duyệt | 06,15 | Nêu vai trò HTML, CSS, JS, tài nguyên phụ; phân biệt bookmark/history/cache/cookies ở mức cơ bản |
| **OBJ-07** | Kết nối toàn bộ quá trình truy cập web | 14 + liên kết 01–13 | Tự dựng và giải thích chuỗi truy cập có điều kiện, nhận ra điểm nào dùng DNS, HTTP(S), browser |
| **OBJ-08** | Tự học và giao tiếp khoa học | 01–15 | Rút kết luận từ học liệu/bằng chứng; chỉ ra một nhận định đã điều chỉnh; tự giảng lại một phần rõ ràng |
| **OBJ-09** | Cẩn thận, trung thực trong giải thích công nghệ | 03,09,11,13–15 | Phân biệt điều được chứng minh với giả định, không khẳng định quá mức về HTTPS, địa chỉ ví dụ hoặc lỗi mạng |

**Cấu trúc mục tiêu theo tinh thần 5512:** kiến thức (OBJ-01–07), năng lực tự học–giải quyết vấn đề–giao tiếp công nghệ (OBJ-08, đồng thời gắn vào OBJ-01–07), phẩm chất trung thực và trách nhiệm trong sử dụng thông tin (OBJ-09). Chi tiết hóa chính thức thuộc Skill 06.

---

## C. Lộ trình 120 phút: các chặng tri thức, chưa phải kịch bản hay phương pháp

| Chặng | Phút | KU ưu tiên | Câu hỏi cần được làm rõ | Bằng chứng/sản phẩm mong muốn | Điều kiện để chuyển sang chặng sau |
|---|---:|---|---|---|---|
| **C0. Khởi động & chẩn đoán** | **0–8 (8')** | Gợi KU-01–03,04 | “Không truy cập được trang web có đồng nghĩa không dùng được Internet?” | Nhận định ban đầu + lý do; phát hiện mức sử dụng browser/URL | Có ít nhất một nhận định ban đầu để kiểm chứng; không chấm nặng kiến thức chưa học |
| **C1. Internet ≠ WWW** | **8–21 (13')** | KU-01–03 | Internet kết nối cái gì? Web là gì trên Internet? | Hai định nghĩa diễn đạt lại; ví dụ webmail/email client; dấu vết bằng chứng đầu tiên | Phân biệt được nền tảng mạng với tài nguyên/dịch vụ Web |
| **C2. Browser & công cụ truy cập** | **21–36 (15')** | KU-04–05 | Dùng công cụ nào để tìm, mở, so sánh, lưu và tìm lại các tài nguyên? | Dấu vết thao tác đúng và bảng chức năng do HS tự tóm tắt | Có thể sử dụng address bar/tabs/links, đủ tiền đề để nói về URL |
| **C3. URL: địa chỉ tài nguyên** | **36–51 (15')** | KU-07–09 | URL giúp chỉ định điều gì? Thành phần nào chỉ host, tài nguyên? | Phân tích một địa chỉ chưa thấy, phân biệt phần bắt buộc và có thể vắng; ccTLD ví dụ | Tách được domain/host và path để đặt câu hỏi “làm sao tìm nơi đến?” |
| **Nghỉ ngắn** | **51–56 (5')** | — | Nghỉ mắt/chuyển trạng thái | Không có nhiệm vụ bắt buộc | Tiếp tục bài |
| **C4. IP & DNS** | **56–74 (18')** | KU-12–13 | Từ tên miền, hệ thống có thể tìm địa chỉ đến máy chủ bằng cách nào? | Giải thích tên miền–IP–DNS; so sánh khi có/không có kết quả cache | Không nhầm DNS với HTTP/web server; sẵn sàng hỏi “gửi yêu cầu gì?” |
| **C5. HTTP & HTTPS** | **74–92 (18')** | KU-10–11 | Trình duyệt yêu cầu tài nguyên và máy chủ trả lời bằng cách nào? HTTPS bảo vệ điều gì? | Bản diễn giải request–response + kết luận HTTPS có giới hạn | Phân biệt giao thức vận chuyển trao đổi và nội dung của tài nguyên |
| **C6. Trang web xuất hiện & tổng hợp** | **92–115 (23')** | KU-06,14,15 | Browser biến các tài nguyên thành trang nhìn thấy thế nào? Toàn bộ hành trình liên kết ra sao? | Sơ đồ hành trình có nhánh điều kiện; phân biệt 4 loại dữ liệu/chức năng lưu; **teach-back** | Học sinh giải thích được từ URL đến trang hiển thị và xử lý được ít nhất một trường hợp mới |
| **C7. Exit evidence & bàn giao tự học** | **115–120 (5')** | Ôn liên kết | “Em có thể tự giải thích điều gì? Còn điều gì chưa chắc?” | Câu trả lời chuyển giao nhanh, điểm cần ôn; định hướng mindmap/flashcards, không giao đề chi tiết | Có minh chứng sơ bộ cho OBJ-01–08 và đầu việc ôn tập |
| **Tổng** | **120'** | | | | |

**Quy tắc thời gian:** Các phút trên bao gồm thời gian đọc/tư duy/nói/ghi và **Active Recall ngắn sau từng cụm nội dung**. Không cộng thêm một bộ 5 màn hình “learn–quiz–recall–bridge” cho mỗi chặng. Có thể chuyển 2–3 phút giữa các chặng theo chẩn đoán thực tế nhưng tổng không vượt 120 phút.

### Điểm chặn kiểm tra mức hiểu trong bài
- Sau **C1**: OBJ-01 — không chuyển sang “WWW resources” nếu học sinh vẫn nói WWW = toàn Internet mà không sửa được.
- Sau **C2**: OBJ-02 — học sinh thao tác được trên browser ở mức đủ cho URL; chức năng phụ có thể củng cố cuối bài.
- Sau **C3**: OBJ-03 — xác định đúng **host vs path**; nếu nhầm thì không vào DNS ngay.
- Sau **C4**: OBJ-04 — biết DNS giải quyết chuyện tên miền/địa chỉ, **không** tải HTML.
- Sau **C5**: OBJ-05 — biết ai gửi request/response và HTTPS không xác nhận tính đúng đắn nội dung.
- Trong **C6**: OBJ-06–07 — giải thích thành quy trình, không học vẹt một chuỗi bước cứng.
- **C7**: nhận diện cần ôn, không đồng nhất kết quả một câu hỏi với toàn bộ năng lực.

---

## D. Đánh giá được thiết kế trước khi chọn hoạt động

### Chẩn đoán đầu vào trong C0 (không tính điểm tổng kết)
1. “Em từng dùng Chrome/Firefox/Edge chưa? Em dùng để làm gì?” — đo kinh nghiệm thực tế, không kết luận năng lực từ thương hiệu.
2. Cho một đoạn `https://...`: “Đây là địa chỉ trang hay câu tìm kiếm? Em biết phần nào?” — đo kiến thức ban đầu về URL.
3. Nêu tình huống *giả định rõ điều kiện*: các tài nguyên web không truy cập được, một ứng dụng Internet độc lập vẫn hoạt động. “Em nghĩ điều gì sẽ xảy ra?” — nghe lý do, không phạt dự đoán sai.

### Minh chứng xuyên bài
- **Explain:** câu phát biểu trong ngôn ngữ riêng, không đọc thuộc định nghĩa.
- **Evidence:** chỉ ra quan sát/tài liệu/thao tác nào hỗ trợ lời nói.
- **Transfer:** áp dụng cho một URL, công cụ hoặc tình huống chưa gặp.
- **Independent performance:** ghi mức trợ giúp H0/H1/H2/H3 để phân biệt tự làm với làm nhờ hướng dẫn.

### Phân tầng nhận thức
- **Nhớ:** định nghĩa/nhãn thiết yếu (Internet, WWW, browser, URL, DNS, HTTP, HTTPS).
- **Giải thích:** quan hệ, vai trò và nguyên nhân–kết quả bằng câu hoàn chỉnh.
- **Vận dụng/chuyển giao:** phân tích một URL chưa gặp, giải thích trường hợp cache, nhận định HTTPS hoặc chẩn đoán lý do trang không xuất hiện từ dấu hiệu cho trước.
- **Tổng hợp:** xây dựng và giảng lại toàn hành trình.

### Năm yếu tố ghi nhớ — bố trí ở mức kiến trúc
1. **Active Recall sau mỗi nội dung chính** (C1, C2, C3, C4, C5, C6): 1–3 cue/hình/từ khóa, học sinh **nói, viết ngắn vào vở, rồi đối chiếu**. C6 có thể gom KU-06/14/15 thành các cue khác nhau trong cùng chặng, không bỏ sót.
2. **Một game ở mở hoặc kết:** vị trí dự kiến C0, tính chất phải phục vụ chẩn đoán và gây tò mò, không lấy điểm làm thước đo hiểu bài. Cách chơi cụ thể thuộc Skill 04.
3. **Mindmap sau buổi:** tự vẽ 5–6 nhánh liên hệ Internet, WWW, Browser, URL, DNS, HTTP(S), Web retrieval. Đặc tả đề bài cụ thể thuộc Skill 08.
4. **Flashcards song ngữ:** chuẩn bị tập thuật ngữ/định nghĩa cốt lõi để ôn trước buổi sau; số lượng, bộ thẻ hoàn chỉnh ở Skill 08.
5. **Learning by Teaching:** trong C6 học sinh tự giải thích hành trình web cho giáo viên và xử lý ít nhất một câu hỏi phản biện; không phải đọc lại slide.

---

## E. Tuyến chuyển tiếp nguyên nhân–kết quả

`Không truy cập web có nghĩa mất Internet?` → cần phân biệt **Internet/WWW** → khi đã có tài nguyên web, cần công cụ truy cập **Browser** → để yêu cầu đúng trang, cần **URL** → để tìm nơi kết nối, có thể cần **DNS/IP** → để trao đổi tài nguyên, dùng **HTTP(S)** → Browser nhận dữ liệu và **render** → xây dựng **lời giải thích toàn hành trình**.

Tuyến này thể hiện **tiền đề của câu hỏi kế tiếp**, không yêu cầu người dạy đọc nguyên văn lời dẫn ở mỗi bước. Để tránh lặp, mỗi chặng ưu tiên **một bằng chứng nhận thức khác nhau**, không thêm quiz chỉ để lấp thời gian.

### Sự liên tục của sản phẩm
- C1 cung cấp **phân biệt loại hệ thống**; C2 chọn **công cụ & tài nguyên**.
- C2 cung cấp **trang cần truy cập**; C3 thu được **URL được phân tích**.
- C3 cung cấp **domain**; C4 giải thích tìm **IP** từ domain khi cần.
- C4 cung cấp **địa chỉ/đích đến trong mô hình**; C5 mô tả **request/response**.
- C5 cung cấp **web resources**; C6 giải thích browser xử lý/hiển thị rồi tích hợp thành một **bản đồ có điều kiện**.

---

## F. Phân hóa và điều chỉnh theo dữ liệu đầu buổi

### Nếu học sinh mới bắt đầu hoặc tiếng Anh còn hạn chế
- Giữ mục tiêu CORE, giảm số ví dụ bề mặt; ưu tiên thẻ đọc ngắn EN/VI, câu hỏi yêu cầu chỉ dấu vết cụ thể thay vì thuật ngữ trừu tượng.
- H1: câu hỏi định hướng; H2: chỉ vùng bằng chứng; H3: minh họa/giải thích ngắn, sau đó yêu cầu học sinh **tự thử lại với ví dụ khác**.
- Phân bổ thêm 2–3 phút cho browser hoặc URL lấy từ mở rộng KU-09, cache DNS nâng cao, không cắt DNS/HTTP/retrieval hoặc recall.

### Nếu học sinh đã có nền tảng
- Bỏ qua thao tác browser quá cơ bản khi chẩn đoán đạt; thay bằng tình huống phân biệt bookmark/history, browser/search engine.
- Cho phân tích URL có query/fragment (KU-09) và tình huống DNS cache hit/miss hoặc webmail (không bắt buộc mọi em).
- Khuyến khích giải thích vì sao 404 không đồng nghĩa mất Internet, HTTPS không đồng nghĩa website đáng tin, hoặc vì sao trang có thể tải nhiều tài nguyên.

### Các mức gợi ý dùng khi ghi nhận đánh giá
- **H0:** độc lập, không gợi ý nội dung.
- **H1:** nhắc lại yêu cầu/câu hỏi định hướng, không chỉ câu trả lời.
- **H2:** chỉ vị trí nguồn bằng chứng hoặc xác định bước cần xem.
- **H3:** giáo viên hướng dẫn trực tiếp từng thao tác/bước then chốt; cần đánh giá lại bằng tình huống mới.

---

## G. Traceability tại Skill 03

Mã ACT, slide (SL) và assets triển khai vẫn **TBD (đúng giai đoạn)**. `RES` dưới đây là **ứng viên nguồn đã có ở Skill 02**, chưa đồng nghĩa phải sản xuất hay nhúng.

| KU | OBJ | RES ứng viên | Loại bằng chứng | ACT | SL |
|---|---|---|---|---|---|
| 01–03 | OBJ-01,08,09 | RES-01,02,03,21 | Phân biệt khái niệm + ví dụ có lý do | TBD–04 | TBD–09/10 |
| 04–05 | OBJ-02,08 | RES-04,05 | Thao tác thành công + giải thích chức năng | TBD–04 | TBD–09/10 |
| 07–08 | OBJ-03,08 | RES-08,09 | Phân tích URL mới | TBD–04 | TBD–09/10 |
| 09 | OBJ-03,09 | RES-09 | Nhận diện yếu tố tùy chọn (SUPPORT) | TBD–04 | TBD–09/10 |
| 12–13 | OBJ-04,08,09 | RES-12,13,14 | Giải thích DNS/IP + trường hợp cache | TBD–04 | TBD–09/10 |
| 10–11 | OBJ-05,09 | RES-10,11,20 | Giải thích request–response, HTTPS | TBD–04 | TBD–09/10 |
| 06,15 | OBJ-06 | RES-06,07,16 | Giải thích vai trò tài nguyên + phân loại lưu dữ liệu | TBD–04 | TBD–09/10 |
| 14 | OBJ-07,08,09 | RES-15,16,20 | Sơ đồ hành trình + teach-back | TBD–04 | TBD–09/10 |
| 16 | **Không có OBJ bắt buộc** | RES-22 (dự phòng) | **PENDING_SOURCE** | Không tổ chức | Không tổ chức |

---

## H. Gate review và bàn giao

**Kết quả:** **PASS** cho kiến trúc mục tiêu–đánh giá của phạm vi 5.1.1–5.1.5.  
**Bằng chứng:** 9 mục tiêu quan sát được; mỗi mục tiêu có KU và loại bằng chứng; tổng 120 phút gồm 5 phút nghỉ; C0–C7 nối mạch, có đủ năm yếu tố ghi nhớ, có phân hóa H0–H3; KU-16 không thành đích bắt buộc.  
**Giới hạn:** Mức đầu vào thực của học sinh chưa xác minh, nên các mốc phút là kế hoạch; Skill 04 phải quyết định hoạt động/phương pháp *trong* quỹ thời gian này hoặc đề nghị điều chỉnh minh bạch. Không tuyên bố đã thử nghiệm hiệu quả sư phạm.

**Bàn giao cho Skill 04:** tệp này cùng `03-assessment-matrix.md`, `03-success-criteria.md`, Skill 01/02. Skill 04 cần bảo đảm mọi hoạt động đều có OBJ, evidence, hành động nhận thức thực của học sinh; không lặp công thức và không lạm dụng IBL hay game.