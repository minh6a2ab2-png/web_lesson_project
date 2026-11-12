# SKILL 03 — 03-assessment-matrix.md
## Ma trận mục tiêu → bằng chứng → nhiệm vụ đánh giá

**Phiên bản:** v3.1 / WWW-5.1 architecture 1.0 · 11/11/2026  
**Phạm vi:** SGK 5.1.1–5.1.5; **KU-16 ngoài phạm vi ảnh**.  
**Tình trạng:** PASS ở mức thiết kế; các nhiệm vụ dưới đây là **assessment prompts/đặc tả đo**, chưa phải bài tập, phương pháp hoặc tương tác HTML đã xây dựng.

## 1. Ma trận đánh giá theo mục tiêu

| OBJ | KU | Bằng chứng quan sát được | Nhiệm vụ đo (đề xuất bằng lời/công cụ bất kỳ) | Ngưỡng **đạt** ở mức tối thiểu | Chẩn đoán sai thường gặp | Hỗ trợ có thể dùng |
|---|---|---|---|---|---|---|
| **OBJ-01** | 01–03 | Hai định nghĩa riêng, mối quan hệ đúng, lý do khi phân loại dịch vụ | “Giải thích Internet và Web khác nhau ra sao; so sánh đọc trang báo và gửi mail qua ứng dụng riêng; webmail thì sao?” | Nêu Internet là hạ tầng liên mạng; WWW là hệ thống tài nguyên web sử dụng Internet; giải thích **2/3 tình huống** có điều kiện; không đồng nhất hai khái niệm | “WWW chính là Internet”; “email luôn ngoài WWW” | H1 câu hỏi về hạ tầng/dịch vụ; H2 đọc lại thẻ phân biệt; H3 một ví dụ phản ví dụ, thử lại với webmail |
| **OBJ-02** | 04–05 | Thao tác và giải thích chọn chức năng; phân biệt công cụ với nội dung/dịch vụ | “Mở hai tài nguyên, quay lại một trang, lưu một trang, tìm lại trang đã xem; Chrome khác Google Search thế nào?” | Hoàn thành ít nhất **4/5 thao tác phù hợp môi trường**; nêu browser khác search engine; giải thích ít nhất **3 chức năng**; H0/H1 ở nhiệm vụ then chốt | Bookmark=history; tab=window; search engine=browser | H1 mục đích trước công cụ; H2 làm nổi vùng điều hướng; H3 thao tác mẫu một lần rồi làm trên tình huống mới |
| **OBJ-03** | 07–09 | Đánh dấu chính xác thành phần URL mới và giải thích tác dụng | Cho `https://library.example.org/ebooks/topic` (tài nguyên giả lập) và `https://example.vn/`: xác định scheme, host/subdomain, domain/TLD, path, nhận biết ccTLD; “Có bắt buộc www, .html không?” | Xác định đúng **4/5** mục cốt lõi: scheme; host; domain/TLD; path; tính không bắt buộc của `www`/đuôi file; nhận diện `.vn` là mã quốc gia trong ví dụ. Phần query/fragment chỉ SUPPORT | Lẫn path với domain; coi `.html`, `www` bắt buộc; coi `http` là HTML | H1 “phần nào chỉ nơi đến?”; H2 thẻ ví dụ–phản ví dụ; H3 tách một URL mẫu, chuyển sang URL mới |
| **OBJ-04** | 12–13 | Giải thích domain, IP, DNS đúng chức năng; không dùng trình tự cố định tuyệt đối | “Nếu biết tên miền nhưng chưa có địa chỉ, cần tìm thông tin gì? Điều gì có thể khác khi DNS đã lưu kết quả?” | Nêu DNS dùng để tìm thông tin địa chỉ/IP từ tên miền **khi cần**; phân biệt DNS với web server; giải thích cache có thể giúp tránh tra từ đầu (được đọc nguồn ngắn khi cần) | DNS gửi HTML; mọi tên miền đúng một IP; mọi lần đều hỏi root/TLD | H1 nhấn tên vs số; H2 bảng domain/IP hoặc cache hit/miss; H3 giải thích cặp mẫu rồi đổi domain |
| **OBJ-05** | 10–11 | Xác định ai yêu cầu, ai đáp; HTTP/HTML khác; HTTPS và giới hạn | “Trình duyệt gửi gì? Máy chủ trả gì? Trang HTTPS có chắc đáng tin không?” | Đúng chiều **browser/client → request → server → response**; phân biệt HTTP với HTML; nêu HTTPS dùng kết nối bảo vệ nhưng **không bảo đảm nội dung/đơn vị vận hành đáng tin** | HTTP là HTML; response luôn thành công; HTTPS=không lừa đảo | H1 hỏi ai khởi tạo; H2 đọc sơ đồ request/response; H3 diễn giải một lần, kiểm tra lại bằng tình huống mới |
| **OBJ-06** | 06,15 | Giải thích browser xử lý nhiều loại tài nguyên; phân biệt thông tin lưu lại | “HTML/CSS/JS có vai trò gì? Lần trước đọc trang, lưu bookmark, cookie và cache khác nhau ra sao?” | Gọi đúng vai trò **HTML cấu trúc**, **CSS trình bày**, **JS hành vi/tương tác**; phân biệt **3/4** bookmark/history/cache/cookies bằng ví dụ. Không yêu cầu vòng đời cookies | Browser chỉ hiển thị một file; cache=history=cookie; cookie=luôn là mật khẩu | H1 hỏi “lưu địa chỉ, lưu tệp, lưu trạng thái?”; H2 bảng so sánh; H3 cho ba ví dụ đối chiếu |
| **OBJ-07** | 14; tích hợp 01–13 | Sơ đồ và lời giải thích nhân quả liền mạch, có nhánh điều kiện | “Tự sắp xếp/diễn giải việc mở `https://school.example.org/library/books`; nếu DNS đã có cache, điều gì thay đổi? Ai render?” | Giải thích hợp lý ít nhất **5/6 chức năng chính**: URL xác định đích; DNS tìm địa chỉ khi cần; kết nối; HTTP(S) trao đổi; nhận resources; browser render; phân biệt DNS vs HTTP vs browser; **không** tuyên bố thứ tự cứng cho mọi tình huống | DNS tải trang; HTTP render; cache luôn có/không; 1 request cho tất cả | H1 hỏi chức năng từng tác nhân; H2 thẻ thông tin đã tạo; H3 sơ đồ có ô trống, sau đó giải thích lại không xem |
| **OBJ-08** | 01–15 | Nói bằng lời mình, dẫn chứng, sửa sai, teach-back | Học sinh nêu “Trước em nghĩ… Sau em sửa vì bằng chứng…” rồi giảng 1 phần cho GV, trả lời phản biện | Có **1 nhận định có nguồn bằng chứng**, **1 lần tự sửa/hoàn thiện** khi nhận phản hồi, **1 phần giải thích mạch lạc** không đọc nguyên thẻ | Chép định nghĩa; nhấp công cụ nhưng không giải thích; đáp đúng do đoán | H1 “em dựa vào đâu?”; H2 chỉ nguồn/chỗ cần quan sát; H3 mẫu diễn đạt ngắn và yêu cầu nêu bằng chứng mới |
| **OBJ-09** | 03,09,11,13–15 | Phân biệt sự thật, giả định, độ chắc chắn; phản hồi cẩn thận | “Dùng `192.0.2.10` có phải IP thật của `example.org` không? HTTPS bảo đảm điều gì?” | Gắn nhãn **giả định** cho IP mẫu và tình huống web down; không khẳng định HTTPS=website uy tín; thừa nhận khi không đủ chứng cứ | Tin rằng minh họa = hệ thống thật; tuyệt đối hóa một tình huống | H1 hỏi “em biết chắc hay đang giả định?”; H2 nguồn về địa chỉ tài liệu, TLS; H3 một phản ví dụ |

**Lưu ý về ngưỡng hỗ trợ:** H0 = không trợ giúp; H1 = gợi câu hỏi; H2 = chỉ chỗ tìm bằng chứng; H3 = chỉ dẫn trực tiếp. H0/H1 phù hợp chứng minh đạt độc lập ở nhiệm vụ lõi; khi cần H2/H3, vẫn ghi nhận tiến bộ nhưng cần kiểm tra lại bằng ví dụ **khác**, không tự tuyên bố đạt độc lập.

## 2. Các điểm lấy bằng chứng theo dòng thời gian

| Thời điểm / chặng | Evidence ID | Mục tiêu | Cách lấy bằng chứng | Cách dùng kết quả |
|---|---|---|---|---|
| C0 (0–8') | **EV-DIAG** | 01–03 | Dự đoán, giải thích ban đầu, thao tác quen thuộc | Điều chỉnh độ khó, không chấm tổng kết |
| C1 (8–21') | **EV-01** | 01,08 | So sánh Internet/WWW kèm ví dụ, nguồn tư liệu | Nếu WWW=Internet, cần chữa hiểu lầm ngay |
| C2 (21–36') | **EV-02** | 02 | Thao tác thực tế + lý do lựa chọn chức năng | Điều chỉnh mức hỗ trợ trước URL |
| C3 (36–51') | **EV-03** | 03 | Phân tích URL mới, chỉ host vs path | Chưa đúng host/path thì cần củng cố trước DNS |
| C4 (56–74') | **EV-04** | 04 | Giải thích Domain → IP → DNS và vai trò cache | Chặn nhầm DNS chứa tài nguyên web |
| C5 (74–92') | **EV-05** | 05,09 | Giải thích request/response + tình huống HTTPS | Chặn nhầm HTTPS xác minh tính chân thật |
| C6 (92–115') | **EV-06** | 06 | Giải thích HTML/CSS/JS, so sánh dữ liệu lưu | Ghi nhận phần KU-15 cần ôn thêm nếu không đủ thời gian |
| C6 (92–115') | **EV-07** | 07,08,09 | Hành trình web do HS giải thích/teach-back | Minh chứng chuyển giao tổng hợp |
| C7 (115–120') | **EV-EXIT** | 01–08 (chọn mẫu) | Hai câu trả lời ngắn, 1 điểm tự đánh giá | Hẹn nội dung ôn của Skill 08, không thay thế toàn bộ rubric |

## 3. Mẫu phản hồi khi chưa đạt

- **Đúng ý nhưng chưa có bằng chứng:** “Em tìm chi tiết nào trong mô hình hoặc tài liệu chứng minh được?” → yêu cầu nêu bằng chứng cụ thể.
- **Nhầm hai khái niệm:** nêu phản ví dụ phù hợp, học sinh phải tự sửa câu kết luận thay vì giáo viên nói luôn.
- **Thao tác được nhưng không giải thích:** chuyển sang câu hỏi mục đích/công cụ trong **tình huống khác**.
- **Sử dụng H3:** yêu cầu làm lại với trường hợp khác không có bước dẫn trực tiếp; ghi 2 lần (lần có hỗ trợ và lần tự làm).
- **Nhầm lỗi website = DNS:** cung cấp dấu hiệu khác, yêu cầu liệt kê nhiều nguyên nhân có thể thay vì tự kết luận duy nhất.

## 4. Ranh giới chưa thiết kế

- Chưa quyết định chọn POE/IBL/Task-Based/Concept Attainment hay cấu trúc game: **Skill 04**.
- Chưa chọn chính xác RES/OA sản xuất; bảng này nêu loại bằng chứng, Skill 05 chốt assets.
- Chưa viết lời giáo viên, hướng dẫn từng phút hoặc hoạt động 5512: **Skills 06–07**.
- Chưa sinh bài tập về nhà/đáp án: **Skill 08**.
- Chưa kiểm tra trực tiếp website: **Skill 11–12**.

**Gate:** Mỗi OBJ-01–09 có KU, minh chứng, nhiệm vụ, ngưỡng, lỗi và mức hỗ trợ. **PASS ở mức thiết kế.**