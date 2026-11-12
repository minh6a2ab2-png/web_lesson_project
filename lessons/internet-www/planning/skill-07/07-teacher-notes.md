# SKILL 07 – GHI CHÚ GIA SƯ VÀ ĐIỂM QUYẾT ĐỊNH
## Bài 5.1 Internet & WWW · 120 phút · chỉ dành cho GV

**Cách dùng:** Luôn bắt đầu từ sản phẩm HS đang có; không đọc nguyên các đoạn dưới đây thành bài giảng. Trước khi hỗ trợ, hỏi HS: *“Em đã thử gì? Bằng chứng nào?”*. **H0** tự làm; **H1** câu hỏi mở; **H2** trỏ đến nguồn hoặc chi tiết; **H3** giải thích một ví dụ nhỏ, rồi đánh giá lại bằng ví dụ mới. Lưu mức hỗ trợ vào EV.

## ACT-00 – Khởi động (0–8')
- **Lời giao nhiệm vụ ngắn:** “Đọc điều kiện giả định. Phân loại sáu trường hợp và giải thích ít nhất một lựa chọn; được chọn chưa đủ dữ kiện.”
- **Đáp án cốt lõi:** Thao tác web trên Internet sẽ không khả dụng *trong giả định*. Ứng dụng truyền thông dùng giao thức khác Web **có thể** tiếp tục nếu các phụ thuộc của ứng dụng vẫn hoạt động. Các ứng dụng không nêu rõ phụ thuộc → *chưa đủ dữ kiện*. Trình duyệt vẫn có thể mở nội dung `file://` cục bộ; điều này không phải truy cập WWW qua mạng.
- **Hiểu sai:** “Mọi ứng dụng online là WWW”, “website lỗi = Internet mất”, “tất cả game online đều tiếp tục”.
- **H1:** “Đề đã nói rõ dịch vụ này phụ thuộc phần nào chưa?” **H2:** Cho HS đọc lại điều kiện giả định từng ca. **H3:** Giải thích riêng ca ‘mở tệp HTML cục bộ’, sau đó HS tự phân tích ca khác.
- **Dấu hiệu chuyển:** HS đặt được câu hỏi có ý nghĩa “Internet và WWW khác gì?”.

## ACT-01 – Internet và WWW (8–21')
- **Điểm chốt:** Internet = hệ thống mạng liên kết toàn cầu dùng giao thức; WWW = hệ thống tài nguyên web liên kết được truy cập qua Internet. Webmail có giao diện Web; trao đổi thư có thể dùng giao thức ngoài Web.
- **Thẻ:** CARD-01/02. Không mở `internet_vs_www.svg` trước khi HS tự xếp thẻ.
- **H1:** “Câu nào nói về kết nối, câu nào nói về tài nguyên?” **H2:** Đề nghị tìm cụm ‘networks’ trong CARD-01 và ‘resources’ trong CARD-02. **H3:** Cùng phân tích “đọc báo web”, sau đó HS phân tích “ứng dụng email”.
- **Phản biện:** “Có Internet mà không mở được web thì còn hoạt động gì?”; “Browser có phải chính là WWW không?”
- **Hiểu sai:** WWW là một thiết bị trung tâm; Internet chỉ có website; mọi email luôn thuộc WWW.
- **Bằng chứng M3:** HS tự diễn đạt hai khái niệm, sơ đồ có nhãn đúng `WWW uses Internet`, ví dụ hợp lý; H0–H1. **Chuyển:** HS nêu nhu cầu công cụ truy cập Web.

## ACT-02 – Browser thật (21–36')
- **Điểm chốt:** Browser ≠ website ≠ search engine. Address bar, tabs, hyperlink, navigation, bookmarks, history phục vụ những mục đích khác nhau; UI thay đổi theo phiên bản.
- **Thẻ:** CARD-03, bộ offline `assets/browser_offline/` khi không có Internet. Khởi động profile thực hành riêng nếu khả thi.
- **H1:** “Em muốn giữ bao nhiêu trang để so sánh?” **H2:** “Quan sát thanh tab và menu trình duyệt.” **H3:** “Mở tab mới bằng Ctrl+T”, sau đó cho HS tự mở *tab thứ hai* không hướng dẫn.
- **H1 history:** “Nếu không có bookmark thì browser đã lưu dấu vết nào?” **H2:** “Tìm menu History của phiên này.” **H3:** Mở menu cho HS xem, rồi HS tự chọn trang vừa mở.
- **Hiểu sai:** Google Search = Chrome; dùng browser offline là đã thực hiện DNS/HTTP; private browsing luôn lưu history.
- **M3:** ≥4/5 nhóm thao tác, giải thích ≥3 công cụ và browser/search engine; không xem history cá nhân. **Chuyển:** HS chỉ URL mình vừa quan sát trên thanh địa chỉ.

## ACT-03 – URL (36–51')
- **Điểm chốt:** URL gồm scheme, host và path trong ví dụ; có thể có query/fragment; `www` và `.html` không bắt buộc; path có thể là route động, không phải folder thật.
- **Thẻ:** CARD-04, U1–U5. `url_anatomy.svg` chỉ mở khi đối chiếu cuối.
- **H1:** “Giữa hai URL, phần nào giữ nguyên?” **H2:** “Tìm mẫu `https://host/path` trong CARD-04.” **H3:** Giải thích host/path của một URL đơn giản khác, rồi cho HS tự làm U5.
- **Phản biện:** “Tại sao có trang không chứa www?”, “Nếu path thay đổi mà host giữ nguyên, tài nguyên có thể khác không?”
- **Hiểu sai:** `.org` là phần đường dẫn; `https` là HTML; `/books` chắc chắn tồn tại tệp books vật lý.
- **M3:** Đúng phần scheme, host, path và ngoại lệ cần thiết theo Skill03; giải thích một địa chỉ mới. **Chuyển:** Tên host gợi câu hỏi tìm IP.

## ACT-04 – DNS + IP (56–74')
- **Điểm chốt:** DNS cung cấp bản ghi hỗ trợ phân giải tên ↔ địa chỉ khi cần; cache hợp lệ có thể giảm tra cứu; DNS không trả HTML; NXDOMAIN khác HTTP 404.
- **Thẻ:** CARD-05, fixture `simulation-fixtures.json`, dải log A/B/C; GIF DNS chỉ minh họa sau dự đoán. Mô hình tương tác hoàn chỉnh chưa có ở Skill07.
- **Ca A:** `CHECK_CACHE → CACHE_MISS → QUERY_RESOLVER → RECEIVE_A (192.0.2.10) → STORE_CACHE → END_DNS`.
- **Ca B:** `CHECK_CACHE → CACHE_HIT → RETURN_CACHED_A (192.0.2.10) → END_DNS`.
- **Ca C:** `CHECK_CACHE → CACHE_MISS → QUERY_RESOLVER → RECEIVE_NXDOMAIN → END_DNS`.
- **H1:** “B và A khác nhau ở điều kiện nào?” **H2:** “Gạch dòng nào có `CACHE_HIT` hoặc `QUERY_RESOLVER`.” **H3:** Giải thích trường hợp A đến bước `CACHE_MISS` rồi để HS hoàn tất B.
- **Phản biện:** “Nếu DNS không có tên thì có chắc server trả `404` không?” (Không; chưa có HTTP response). “Một tên miền có thể có nhiều IP không?” (Có trong thực tế).
- **M3:** Sơ đồ domain–DNS–IP đúng, giải thích khác biệt A/B và phân biệt DNS/HTML, NXDOMAIN/404. **Chuyển:** giữ IP và path làm đầu vào HTTP.

## ACT-05 – HTTP/HTTPS (74–92')
- **Điểm chốt:** Client gửi HTTP request, server trả HTTP response, `200` và `404` là status khác nhau. HTTP = quy tắc trao đổi, HTML = định dạng tài liệu. HTTPS dùng TLS giúp bảo vệ dữ liệu đang truyền và xác thực kết nối theo cách thích hợp; **không chứng minh nội dung đúng hay chủ website đáng tin**.
- **Thẻ:** CARD-06/07, fixture `/library/books → 200`, `/library/missing → 404`.
- **H1:** “Ai đang cần nội dung?” **H2:** “Gắn tên Client/Server vào hai đầu mũi tên.” **H3:** Làm mẫu **một** cặp request/response với `/library/books`, HS tự làm `/library/missing`.
- **Phản biện:** “Trang HTTPS viết thông tin sai thì TLS có tự sửa nội dung không?”; “404 có thể có trang lỗi HTML không?” (Có).
- **Hiểu sai:** DNS trả 404, HTTPS đảm bảo website không lừa đảo, HTML là giao thức mạng, HTTP chỉ có một request mỗi trang.
- **M3:** chiều request/response chính xác, hiểu 200/404, lập luận rõ điều HTTPS đảm bảo/không đảm bảo. **Chuyển:** phần body HTML dẫn tới rendering.

## ACT-06A – Rendering và dữ liệu browser (92–102')
- **Điểm chốt:** HTML cấu trúc/nội dung, CSS trình bày, JS có thể thêm hành vi. Bookmark lưu địa chỉ chọn; history ghi truy cập (theo cấu hình); cache có thể lưu tài nguyên; cookie là dữ liệu nhỏ liên quan đến website trong các request phù hợp.
- **Thẻ:** CARD-08/09; `rendering_pipeline.svg` là sơ đồ khái niệm, không thay thực nghiệm HTML/CSS/JS thật.
- **H1:** “Điều gì thay đổi dù văn bản giữ nguyên?” **H2:** “So trước/sau CSS ở vùng màu và bố cục.” **H3:** Chỉ CSS quyết định màu trong một ví dụ rồi yêu cầu HS tự chỉ tác động của JS.
- **Phản biện:** “History có lưu cùng thứ như cache không?”, “Mọi trang phải dùng JS không?”
- **M3:** nêu đúng 3 vai trò và ≥3/4 loại dữ liệu, có ví dụ. **Chuyển:** yêu cầu ghép tất cả các đơn vị thành mô hình có điều kiện.

## ACT-06B – Journey + Teach-Back (102–115')
- **Điểm chốt:** URL→xác định host→DNS **khi cần**→kết nối/HTTP(S)→tài nguyên→render. Có cache, nhiều request, lỗi ở các tầng khác nhau.
- **Thẻ:** CARD-10, thẻ ghép và giấy sơ đồ. Builder tương tác chưa có (SPEC_ONLY).
- **H1:** “Đầu ra bước trước là đầu vào bước nào?” **H2:** “Đối chiếu EV-03/04/05 của em.” **H3:** Giải thích một nhánh DNS cached, yêu cầu HS tự thêm nhánh 404.
- **Phản biện:** “DNS trả trang web không?”; “Có thể có thêm request ảnh không?”; “404 có luôn là DNS lỗi không?”
- **M3:** ≥5/6 vai trò đúng, nhánh đúng và HS tự giảng bằng lời; có sửa sau phản biện. **Chuyển:** tự giải thích một URL mới.

## ACT-07 – Exit Ticket (115–120')
- **Điểm chốt:** Đánh giá độc lập; không giảng bài mới. Trường hợp mới `https://library.example.org/help/start` là ví dụ, không site thật.
- **H1–H3:** không gợi ý trước khi ghi EV-EXIT; nếu chưa đạt, ghi nhận rồi chuyển sang điều chỉnh ở bài về nhà/buổi sau.
- **M3:** Đúng host, path, giải thích khái quát DNS/HTTP/render và giới hạn HTTPS; tự nhận ra mục cần luyện. **Chuyển:** Skill08 tạo bộ bài tập tại nhà và rubric riêng.

## Quy tắc nhận xét chung
- Tránh “Đúng rồi, bấm Next” sau mỗi thao tác. Hỏi “Em có bằng chứng gì?” và “Trường hợp nào khiến kết luận cần sửa?”.
- Không nói thay HS nếu còn có thể đọc nguồn trong 30–60 giây; tránh để HS đoán mò thuật ngữ.
- Dùng **ngôn ngữ HS** trước rồi mới chuẩn hóa song ngữ; cho HS nói + ghi vở sau mỗi nội dung.
- Học sinh thiếu thiết bị thực hành Browser → OBJ-02 về thao tác **chưa đánh giá**, không gán đạt giả.
- Không nâng mức điểm chỉ từ kết quả click; yêu cầu lời giải thích và ví dụ chuyển giao.