# SKILL 04 — 04-activity-concepts.md
## Thiết kế ý tưởng hoạt động trước khi sản xuất học liệu và viết giáo án

**Bài:** 5.1 The Internet and the World Wide Web · **Ngày:** 11/11/2026  
**Bám:** Skill 03 C0–C7, OBJ-01–09, EV-DIAG/EV-01–07/EV-EXIT; KU-01–15.  
**Không bao gồm:** lời thoại từng phút hoàn chỉnh (Skill 07), bốn bước 5512 chi tiết (Skill 06), asset hoàn thiện (Skill 05), slide / source code (Skills 09–11).  
**Quy tắc:** Mỗi chặng có trải nghiệm khác nhau theo **hành động nhận thức**. Khuyến khích HS *tự nói trước GV* nhưng không biến thành đoán mò. Có tư liệu đủ đọc offline; tiếng Anh ngắn + giải nghĩa tiếng Việt.

## Trục xuyên suốt — “Hồ sơ điều tra một lần mở web”

Tình huống gốc: học sinh muốn đọc tài nguyên giả lập `https://school.example.org/library/books`. Sau mỗi chặng, em **tự thêm một mảnh bằng chứng** vào hồ sơ. Địa chỉ và IP minh họa `192.0.2.10` là dữ liệu **dành cho tài liệu/giả lập**; không tự coi là DNS có thật. Không bắt ép URL luôn mở được khi dùng trình duyệt thực. Hệ thống phải giữ được lựa chọn và kết luận trước đó (Skill 09 thiết kế trạng thái; Skill 11 thực hiện).

**Đường phụ thuộc:** C0 tạo câu hỏi → C1 phân biệt hệ thống/dịch vụ → C2 xác định công cụ web → C3 xác định host/path → C4 domain cần địa chỉ IP **nếu cần** → C5 client/server trao đổi thông điệp → C6A trình duyệt dựng trang và lưu dữ liệu → C6B HS tự lắp/giải thích toàn bộ hành trình. **Không** vẽ một chuỗi cứng có DNS lookup mới trong mọi trường hợp.

---

## ACT-00 – C0 (8 phút): “The Web Is Down!” — dự đoán để đặt vấn đề

**Phương pháp:** Game-Based Diagnostic Scenario + Predict–Explain. **Không đánh giá như kiểm tra kiến thức cuối bài.**

- **Vấn đề:** *Nếu, trong một mô hình giả định, mọi tài nguyên WWW đều không khả dụng nhưng hạ tầng Internet và một số dịch vụ chuyên dụng độc lập vẫn hoạt động, điều gì có thể tiếp tục?*
- **Học liệu/bằng chứng:** 4–6 thẻ tình huống được **mô tả đủ điều kiện**, gồm xem website tin tức, mở webmail, gửi email qua ứng dụng chuyên dụng không phụ thuộc web, gọi qua ứng dụng chuyên dụng không phụ thuộc web; thêm tình huống biên để HS ghi “chưa đủ dữ kiện”. Ưu tiên tránh phát biểu tuyệt đối rằng mọi video call/games còn hoạt động. Một thẻ ngắn về khác nhau giữa “mở trang web” và “dùng dịch vụ Internet khác” chỉ mở khi HS cần, không cung cấp đáp án ngay.
- **Nhiệm vụ HS:** Đặt thẻ vào “có thể / không / cần thêm thông tin”; chọn 1 trường hợp để nói vì sao, ghi mức chắc chắn và 1 điều em muốn tìm hiểu. Hình thức phân loại có thể là giấy, không cần game điểm số phức tạp.
- **Minh chứng:** EV-DIAG = dự đoán + căn cứ + lỗ hổng kiến thức; không chấm M3/M4.
- **Hỗ trợ GV:** H1 “Em dựa vào điều kiện nào của tình huống?”; H2 chỉ cụm “ứng dụng độc lập, không phụ thuộc WWW”; H3 giải thích giả định bằng một ví dụ đối chứng, không đọc sẵn định nghĩa.
- **Nối C1:** “Những dịch vụ khác nhau có thể dùng cùng một hệ thống kết nối. Vậy Internet và WWW là hai thứ gì?”
- **Lỗi cần tránh:** Kết luận “website không tải được = toàn WWW/Internet chết”; đơn giản hóa dịch vụ mạng thành nhị phân tuyệt đối.

## ACT-01 – C1 (13 phút): “Internet nằm ở đâu trong WWW?” — đối chiếu tư liệu

**Phương pháp:** Guided Self-Study + Concept Comparison; Concept Mapping.

- **Vấn đề:** *Tại sao có thể nói WWW sử dụng Internet mà Internet không chỉ là WWW?*
- **Học liệu:** RES-01 hai thẻ EN/VI khoảng 60–110 từ EN/thẻ (biên soạn lại); RES-02 sơ đồ “mạng kết nối – dịch vụ/tài nguyên”; RES-03 ca webmail/email client; RES-21 thuật ngữ. Không mô tả WWW là một dây mạng vật lý.
- **Nhiệm vụ HS:** (a) tự quan sát 2 sơ đồ/nguồn, gạch từ khóa bằng chứng; (b) tự phân loại ba trường hợp; (c) vẽ sơ đồ *Internet làm nền tảng – WWW là hệ thống tài nguyên được truy cập qua đó*; (d) giải thích sơ đồ không nhìn thẻ, phân tích ngoại lệ webmail.
- **Minh chứng EV-01:** hai câu định nghĩa bằng lời của HS + sơ đồ mối quan hệ + một trường hợp có lý do; OBJ-01 M3 theo Skill 03.
- **Lời phát biểu cần có từ HS:** “Internet là…, còn WWW là…; em biết vì trong nguồn X nói/cho thấy…”; không ép thuộc lòng nguyên câu tiếng Anh.
- **Hỗ trợ:** H1 “Cái nào cho phép kết nối? Cái nào là tài nguyên liên kết?” → H2 khoanh 2 dòng trong thẻ → H3 giải thích ngắn một ví dụ khác rồi HS tự phân loại lại.
- **Recall cuối C1 (≈1 phút):** hiện **Network → Web → Email client**; HS nói 2 khái niệm, ghi vở 1 cặp phân biệt rồi đối chiếu.
- **Nối C2:** “Ta đã chọn một tài nguyên WWW. Em cần công cụ gì để mở nó?”
- **Chặn:** Nếu HS vẫn khẳng định WWW=Internet, đổi ví dụ trước khi chuyển chặng.

## ACT-02 – C2 (15 phút): “Research Mission” — tự dùng trình duyệt

**Phương pháp:** Task-Based Learning + Guided Discovery.

- **Vấn đề:** *Muốn xem, so sánh, lưu và tìm lại thông tin trên Web, em cần sử dụng những chức năng nào?*
- **Học liệu:** RES-04 mô hình Browser Lab offline có 3 trang nội dung, thanh địa chỉ/tabs/back/forward/link/bookmark/history; RES-05 thẻ trợ giúp 3 mức; RES-21. Dùng dữ liệu giả, không dùng lịch sử hoặc tài khoản thật của HS.
- **Nhiệm vụ trọng tâm (không ghi sẵn nút):** (1) mở bài viết theo địa chỉ được cung cấp; (2) mở thêm một bài mà vẫn giữ bài cũ; (3) theo một liên kết rồi quay lại; (4) lưu hoặc tìm lại tài nguyên; lựa chọn công cụ và nêu lý do. Nếu chẩn đoán cho thấy HS thành thạo, thay bài cơ bản bằng “quên bookmark nhưng đã truy cập — làm gì?”.
- **Sản phẩm EV-02:** dấu vết hành động + bảng “mục đích → công cụ → bằng chứng hoạt động” + lời giải thích browser khác website/search engine. Đánh giá 4/5 thao tác gồm mục tiêu cốt lõi theo Skill 03; mở rộng homepage/history, không buộc duyệt hết mọi biểu tượng trong 15'.
- **Hỗ trợ:** H1 hỏi mục đích thao tác; H2 khoanh vùng; H3 làm mẫu 1 thao tác rồi HS làm biến thể khác.
- **Recall (≈1 phút):** không hiện tên nút, hiển thị biểu tượng **address bar/tab/history/bookmark** → HS tự gọi tên, giải thích, ghi 2 công cụ hay nhầm vào vở.
- **Nối C3:** giữ thanh địa chỉ HS vừa dùng; “Chuỗi ký tự trên thanh này mang thông tin gì?”
- **Chặn:** Nếu HS chưa biết thanh địa chỉ dẫn đến URL, cần hướng dẫn bổ sung trước C3; không bắt buộc mọi tính năng thành thạo tuyệt đối mới được học URL.

## ACT-03 – C3 (15 phút): “Decode the Address” — học sinh tự giải mã URL

**Phương pháp:** Example–Nonexample Analysis + Information Gap + Self-Explanation.

- **Vấn đề:** *Hai đường dẫn cùng một host vì sao có thể đến tài nguyên khác nhau? Thành phần nào của URL quyết định điều gì?*
- **Học liệu:** RES-08 thẻ nguồn định nghĩa scheme, host/domain, TLD, path; RES-09 bộ ví dụ cùng host khác path, có/không `www`, có/không tên tệp `.html`, một host `.vn`; RES-21 glossary; dữ liệu mẫu `https://school.example.org/library/books`. Không mô tả `.html` như tên tệp vật lý bắt buộc.
- **Nhiệm vụ HS:** so sánh 3 URL, nêu điểm giống/khác **trước khi** xem thẻ thuật ngữ; đọc thẻ để đặt nhãn; hoàn thiện bảng trống; kiểm tra tính hợp lý bằng một URL mới; giải thích vì sao `www`, filename và query/fragment có thể vắng mặt.
- **Sản phẩm EV-03:** URL mới đánh dấu đúng 4/5 yếu tố cốt lõi (theo tiêu chí Skill 03) + một lý do phân biệt host/path + `.vn` được nhận diện như ví dụ ccTLD.
- **Hỗ trợ:** H1 “Phần nào xác định nơi, phần nào chỉ tài nguyên?”; H2 chỉ 2 dòng trong thẻ; H3 phân tách 1 ví dụ, rồi HS áp dụng ví dụ khác.
- **Recall (≈1 phút):** hiện URL chưa tô màu, HS **nói** scheme/host/path và **vẽ** đường gạch phân tách vào vở; so với đáp án sau.
- **Nối C4:** lấy chính domain đã phân tích: “Nếu chỉ có tên miền, hệ thống kết nối đến địa chỉ nào?”
- **Chặn:** Không sang DNS nếu HS vẫn nhầm host và path. Phần query/fragment chỉ bổ trợ.

## NGHỈ 5 PHÚT – không tính hoạt động nhận thức

## ACT-04 – C4 (18 phút): “Find the Server” — điều tra DNS thật sự

**Phương pháp:** **IBL cấp Structured Inquiry**, kỹ thuật POE. **GV cho câu hỏi và cách kiểm tra, HS tự lập dự đoán, ghi dữ liệu, kết luận.**

- **Câu hỏi điều tra:** *Browser có domain nhưng cần tìm nơi kết nối. DNS giải quyết điều gì? Cache có làm thay đổi quá trình đó không?*
- **Học liệu:** RES-12 cặp domain/IP tài liệu; RES-13 mô hình resolver/records; RES-14 bảng điều kiện; một log giả lập không nhúng web nội dung vào câu trả lời DNS. Ba tình huống kiểm tra: (A) domain hợp lệ **cache miss**, (B) domain đó **cache hit** trong TTL giả định còn hiệu lực, (C) domain giả lập không có bản ghi. Dữ liệu IP `192.0.2.10` chỉ mô phỏng.
- **Nhiệm vụ HS:** trước khi chạy chọn dự đoán “cần tìm thông tin gì?”, “đi qua những chặng nào?”; thực hiện A/B/C theo hướng dẫn, ghi điều gì xảy ra và điểm khác nhau; tự khái quát vai trò DNS/IP/cache; minh họa đường đi khác nhau trên sơ đồ.
- **Dữ liệu bắt buộc hiển thị:** domain đầu vào, trạng thái cache, truy vấn/không truy vấn resolver, loại dữ liệu trả về (IP hoặc không tìm thấy), hành động tiếp theo **chưa phải tải HTML**; có nút reset.
- **Sản phẩm EV-04:** bảng 2–3 ca, sơ đồ Domain → DNS (khi cần) → IP, lời giải thích DNS≠web server, một giới hạn “không phải mỗi lần đều truy vấn từ đầu”.
- **Hỗ trợ:** H1 “Ở ca B bước nào đã biến mất?”; H2 chỉ log cache và kết quả resolver; H3 phân biệt bằng 1 ca mới DNS record vs HTTP body.
- **Recall (≈1 phút):** các cue `domain → ? → IP` và `cache hit/miss`; HS nói cơ chế, viết một dòng vào vở, đối chiếu.
- **Nối C5:** “Đã biết nơi kết nối trong mô hình. Vậy ai gửi yêu cầu nội dung và ai phản hồi?”
- **Chặn:** Nếu HS nói DNS gửi HTML, phải phân biệt log trước khi sang HTTP.
- **Giới hạn:** Không ép mọi tên miền có đúng một IP hoặc mọi tra cứu DNS phải qua cùng một chuỗi máy chủ. Mô hình đơn giản hóa, không là DNS live.

## ACT-05 – C5 (18 phút): “Read the Network Conversation” — nghiên cứu trao đổi web

**Phương pháp:** Simulation-Based Learning + POE + Case Analysis (không gắn IBL toàn chặng).

- **Câu hỏi:** *Trình duyệt và máy chủ trao đổi thế nào? Vì sao HTTPS bảo vệ kết nối nhưng không thể bảo đảm trang đáng tin?*
- **Học liệu:** RES-10 log request/response gắn client/server; RES-11 thẻ HTTPS/TLS đúng mức; RES-20 tình huống kết quả không thành công và website có HTTPS nhưng nội dung sai/lừa đảo; từ Skill 04 tự thiết kế tình huống, **không sao chép hình có quyền không rõ**.
- **Nhiệm vụ HS:** (a) dự đoán chiều mũi tên và nội dung trả về; (b) quan sát 2 ca `GET /library/books` nhận 200 và `GET /library/missing` nhận 404 trong **mô hình**; (c) chú thích request–response, nêu HTTP khác HTML; (d) tự đọc bằng chứng TLS rồi so sánh “HTTPS hợp lệ nhưng thông tin trang không đáng tin” với “HTTP thường”; (e) tự nói giới hạn của chứng cứ.
- **Sản phẩm EV-05:** bản ghi chú request/response có mũi tên; câu đúng “HTTPS bảo vệ kênh truyền / không chứng nhận nội dung chân thật”; phản bác ý kiến “có HTTPS = không thể lừa đảo”.
- **Hỗ trợ:** H1 “Ai muốn lấy tài nguyên, ai cung cấp phản hồi?” → H2 khoanh cặp log và thẻ TLS → H3 giải thích 1 cặp thao tác; kiểm tra lại bằng ca mới.
- **Recall (≈1 phút):** cue `client → request → server → response` và `HTTPS ≠ trustworthy content`; HS nói, viết 2 dòng sau đó so đáp án.
- **Nối C6A:** “Server đã gửi tài nguyên về. Vì sao browser còn phải xử lý thì người dùng mới thấy trang?”
- **Chặn:** Nếu HTTPS bị hiểu là chứng cứ website thật/đáng tin, cần sửa tại chỗ bằng ca phản ví dụ.
- **Giới hạn:** Không mô phỏng việc “đọc lén HTTP” như thể mọi đường truyền đều bị xem trộm; chỉ minh họa rõ mô hình kênh có/không mã hóa, không chứng minh an toàn tuyệt đối.

## ACT-06A – C6 (10 phút): “From Files to Page” — giải mã trình duyệt hiển thị

**Phương pháp:** Evidence-Based Comparison + Concept Sorting.

- **Câu hỏi:** *Browser cần làm gì sau khi nhận tài nguyên? Những tính năng lưu dữ liệu có mục đích giống nhau không?*
- **Học liệu:** RES-06 hai–ba trạng thái của cùng một trang: HTML chỉ cấu trúc, CSS tạo hình thức, JS thêm hành vi; ví dụ ảnh được tải riêng; RES-07 bốn thẻ bookmark/history/cache/cookie; RES-16 log nhiều tài nguyên.
- **Nhiệm vụ HS:** quan sát hai trạng thái rồi dự đoán điều còn thiếu, tự đọc mô tả nguồn, gắn nhãn HTML/CSS/JS và một tài nguyên khác; phân loại bốn tình huống thực tế vào bookmark/history/cache/cookie (không bắt xác định thuật toán nội bộ); tự trình bày vai trò khác nhau.
- **EV-06:** bảng “thành phần→vai trò→bằng chứng” + phân biệt ≥3/4 loại dữ liệu/tính năng lưu (theo Skill 03). Không dạy KU-16 session/persistent cookies sâu.
- **Hỗ trợ:** H1 “Cái gì tạo cấu trúc? Cái gì đổi hình thức?” → H2 cho xem trạng thái trước/sau → H3 mô tả ngắn một ví dụ rồi yêu cầu HS phân loại ca mới.
- **Recall (≈1 phút):** 3 cue cấu trúc/kiểu dáng/tương tác + 1 cue lịch sử/bộ nhớ đệm/cookie; HS nói và viết khái quát.
- **Nối C6B:** “Ta đã có từng mảnh bằng chứng. Hãy ghép lại để giảng cho người khác trọn hành trình.”

## ACT-06B – C6 (13 phút): “You Are the Web Engineer” — lắp hệ thống và dạy lại

**Phương pháp:** Model Building + Teach-Back with Questions; tích hợp Learning by Teaching.

- **Vấn đề tổng hợp:** *Từ một URL hợp lệ đến trang hiển thị, ai làm gì, khi nào cần tra DNS, khi nào có thể dùng cache?*
- **Học liệu:** RES-15 bộ thành phần rời, thẻ sự kiện điều kiện DNS/HTTP cache, RES-16 nhiều tài nguyên, RES-20 lỗi 404. Không phát sẵn một sơ đồ hoàn chỉnh để HS sao chép.
- **Nhiệm vụ HS:** tự xếp các thẻ và nối mũi tên **có nhãn**; lấy các kết luận từ C1–C6A làm bằng chứng; thêm nhánh điều kiện; thử một kịch bản mới; đóng vai người dạy, giảng mô hình cho GV 2–3 phút, trả lời một câu phản biện. Sau phản biện, **tự sửa** sơ đồ và nêu lý do.
- **EV-07:** mô hình có tối thiểu các chức năng URL / DNS khi cần / IP hoặc nơi kết nối / HTTP request-response / browser rendering và nhánh điều kiện; giải thích mạch lạc + 1 lần tự chỉnh; OBJ-07–09.
- **Hỗ trợ:** H1 hỏi điểm chưa hợp lý (VD “DNS đưa trang hay đưa IP?”); H2 chỉ lại thẻ dữ liệu C4/C5; H3 dựng cùng HS hai nút đầu nhưng HS hoàn thiện bản khác.
- **Active Recall cuối C6 (≈1 phút, không thêm màn hình rườm rà):** ẩn bản ghép, đưa `URL · DNS? · Request/Response · Render` cùng thẻ `History/Cache/Cookies`; HS nói một lượt quy trình và ghi 4–6 mốc vào vở, đối chiếu.
- **Nối C7:** “Bây giờ em đã tự giảng lại được hành trình. Hãy thử xử lý hai câu hỏi mới mà không xem tài liệu.”
- **Cảnh báo:** Mô hình là một diễn giải minh họa, **không** phải thứ tự bất biến của mọi lần truy cập, và **không** giả định mọi website chỉ cần một request.

## ACT-07 – C7 (5 phút): “What Can I Explain?” — kiểm tra thoát bài

**Phương pháp:** Retrieval Practice + Self-Assessment.

- **Tình huống:** Không còn nhìn tài liệu. HS chọn/nhận một URL mới `https://library.example.org/books`; giải thích host/path, vai trò DNS/browser; phản biện câu “Có HTTPS chắc chắn là website uy tín”.
- **Nhiệm vụ HS:** nói hoặc viết 1–2 câu trả lời ngắn không nhìn nguồn; hoàn thành “Trước em nghĩ… nay em nghĩ… vì bằng chứng…”, chọn 1 chủ đề chưa chắc và phương án ôn.
- **EV-EXIT:** câu trả lời độc lập + phản tư + nhu cầu ôn, ghi H0–H3 và mức mục tiêu tương ứng. **Không chấm PASS toàn bài** chỉ nhờ 5 phút cuối.
- **Hướng tiếp nối:** Skill 08 dùng lỗ hổng ghi nhận trong giờ để giao bài phù hợp: retrieval, mindmap vẽ sau học, flashcards EN/VI trước buổi sau, chuẩn bị một đoạn Teach-Back ngắn.
- **Không bổ sung game cuối buổi** vì C0 đã có. Không buộc HS vẽ xong mindmap trong 5 phút này.

---

## Bảng phân bổ hành động nhận thức và kiểm tra đa dạng

| Chặng | Hành động nhận thức chủ đạo | Sản phẩm khác biệt | Điểm cần tránh lặp |
|---|---|---|---|
| C0 | Dự đoán/phân loại tình huống | Dự đoán kèm mức chắc chắn | Không chấm định nghĩa chưa học |
| C1 | Đọc, so sánh, khái quát | Sơ đồ hai hệ thống + ví dụ | Không quiz định nghĩa |
| C2 | Làm nhiệm vụ, chọn công cụ | Vết thao tác có lý do | Không tự động trình diễn nút |
| C3 | Tìm mẫu/ngoại lệ, áp dụng quy ước | URL có nhãn + giải thích | Không chỉ tô màu/drag-drop |
| C4 | Thí nghiệm điều kiện, rút quy luật | Bảng điều tra DNS | Không xem hoạt ảnh mà thiếu so sánh |
| C5 | Dự đoán/quan sát phản hồi, đánh giá ca | Bản ghi + kết luận có giới hạn | Không phân loại bảo mật nhị phân |
| C6A | Đối chiếu đầu vào/kết quả | Bảng tài nguyên và dữ liệu browser | Không thêm mini-game trắc nghiệm |
| C6B | Tích hợp, kiến tạo, giải thích | Mô hình tổng thể và Teach-Back | Không cho sơ đồ hoàn chỉnh từ đầu |
| C7 | Tự nhớ/đánh giá lỗ hổng | Exit ticket | Không biến thành kiểm tra dài |

**Recall thực hiện trong từng chặng C1–C6** (gợi ý 1–3 cue, học sinh **nói → viết vào vở → đối chiếu**); không yêu cầu một màn hình Learn/Practice/Recall/Conclusion riêng cho mỗi chặng. Nhãn bốn bước Công văn 5512 thuộc tài liệu giáo viên ở Skill 06, không phải nhãn điều hướng của học sinh.

## Điều kiện bàn giao sang Skill 05 — đặc tả tài nguyên hoạt động

**Cần được thiết kế cụ thể, không nhất thiết làm tất cả thành slide độc lập:**

| ACT | Nguồn tham chiếu dự tuyển | Tài nguyên cần làm, trạng thái và dữ liệu tối thiểu | Bằng chứng bắt buộc |
|---|---|---|---|
| ACT-00 | RES-02,03 | Bộ ca giả định rõ điều kiện; bảng chọn 3 loại; phiếu dự đoán/lý do | EV-DIAG |
| ACT-01 | RES-01,02,03,21 | Thẻ EN/VI gốc; sơ đồ mạng vs hệ thống web; trường hợp webmail | EV-01 |
| ACT-02 | RES-04,05 | Browser Lab **thực sự có trạng thái**: địa chỉ, tab, lịch sử, bookmark, link, back; gợi ý 3 mức | EV-02 |
| ACT-03 | RES-08,09,21 | Bộ URL đúng/đa dạng có nhãn giấu, thẻ khái niệm, vùng viết giải thích | EV-03 |
| ACT-04 | RES-12,13,14 | DNS Lab: 2–3 ca, toggle cache, kết quả, log, reset, giới hạn IP giả lập | EV-04 |
| ACT-05 | RES-10,11,20 | Network Conversation: request/response, 200/404, khác HTTP/HTTPS, thẻ chứng cứ TLS, ca nội dung giả | EV-05 |
| ACT-06A | RES-06,07,16 | Trình diễn dữ liệu HTML/CSS/JS/tài nguyên, bốn loại browser data, bằng chứng so sánh | EV-06 |
| ACT-06B | RES-15,16,20 | Model Builder không điền sẵn, nhánh cache, xuất/sửa bản đồ, thẻ câu phản biện | EV-07 |
| ACT-07 | RES-21 | Phiếu exit độc lập, khả năng lưu đánh giá M1–M4 + H0–H3 (có thể bản giấy) | EV-EXIT |

**Vấn đề để Skill 05 giải quyết:** nội dung chính xác trong từng thẻ; dữ liệu giả lập và điều kiện biên; cách cho HS nêu bằng chứng; tài liệu offline; trạng thái có thể nối qua các chặng; khả năng truy cập bàn phím/song ngữ; giấy phép của mỗi asset. Skill 04 **chưa** thiết kế/thi công file giao diện hay mô hình kỹ thuật.

## Gate tự kiểm tra Skill 04

1. **Với mỗi chặng** có vấn đề, hành động HS, nguồn bằng chứng, sản phẩm, hỗ trợ H1–H3, lý do chọn phương pháp và câu nối.
2. **Mỗi chặng nội dung C1–C6** có cue Recall nói → viết → đối chiếu.
3. Trò chơi chỉ ở C0; Learning by Teaching ở C6B; mindmap & flashcards chuyển chính xác sang Skill 08.
4. IBL C4 có 3 điều kiện mô phỏng phân biệt; C5 không bị dán nhãn IBL giả.
5. Đã bảo vệ các lỗi khái niệm: WWW≠Internet; DNS≠HTTP; domain≠IP thật; HTTPS≠website đáng tin; cache/history/cookies có vai trò khác nhau; KU-16 PENDING_SOURCE.
6. Vẫn giữ tổng 120', có điểm chặn và phân hóa từ Skill 03; **chưa kiểm chứng trong lớp thực tế**.

**Gate:** **PASS thiết kế hoạt động**; sẵn sàng bàn giao cho Skill 05 – Activity Resource Designer.