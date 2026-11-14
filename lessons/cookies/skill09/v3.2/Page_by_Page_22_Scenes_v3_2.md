# Skill 09 v3.2 — ĐẶC TẢ NỘI DUNG TỪNG MÀN (22/22)

Bản nội dung chi tiết cho Skill 10–11. **Giữ nguyên các câu hỏi và thứ tự cảnh v3.1**; bổ sung bố cục, tư liệu, hành động, phản hồi, bằng chứng và rào chắn EXIT. D0–ACT05 là 42 phút; P00/P07 nằm ngoài khoảng này hoặc điều chỉnh theo buổi dạy.

## 01. P00-01 — Một website có thể nhớ em?

- **Chặng:** P00 · **Giao diện:** presentation · **Bố cục:** Context Hero
- **Nội dung/đề bài được giữ nguyên:** Hôm trước em chọn Tiếng Việt, hôm nay website vẫn hiện tiếng Việt. Điều gì có thể giúp website ghi nhớ?
- **Nội dung hiển thị và cách phát triển:** Tình huống: hôm trước em chọn Tiếng Việt; hôm nay trang vẫn hiện tiếng Việt.
- **Học sinh thực hiện:** Nêu dự đoán, không trình bày đáp án trước.
- **Phản hồi/điều kiện mở:** Giáo viên nghe suy đoán; ghi một giả thuyết để quay lại cuối bài.
- **Sản phẩm minh chứng:** Một câu dự đoán nói/ghi.
- **Học liệu/vị trí:** Hiển thị câu hỏi và website mock đơn giản; không vẽ cơ chế.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Ảnh web trước/sau chỉ là mock chưa phải ảnh chụp trình duyệt.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

## 02. D0-01 — Ai xin trang? Ai trả trang?

- **Chặng:** D0 · **Giao diện:** presentation · **Bố cục:** Sơ đồ trắng hai đối tượng
- **Nội dung/đề bài được giữ nguyên:** Hãy chỉ hướng xin trang và hướng trả trang giữa Browser và Server.
- **Nội dung hiển thị và cách phát triển:** Hai ô Browser và Server, không đặt sẵn tên chiều mũi tên.
- **Học sinh thực hiện:** HS tự đặt Request và Response, nói ai xin trang, ai trả nội dung.
- **Phản hồi/điều kiện mở:** Nếu sai hỏi “Ai đang cần trang?”; chưa mở sơ đồ giải đáp.
- **Sản phẩm minh chứng:** Sơ đồ hai chiều, mức hỗ trợ H0–H3.
- **Học liệu/vị trí:** browser_server_blank.svg; bản in print_pack trang 1.
- **Tình trạng đầu vào:** `SOURCE_SVG_READY`
- **Quy tắc an toàn chuyên môn:** Không suy ra học sinh đã thành thạo Cookies từ D0.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Trong trao đổi web cơ bản, Browser gửi yêu cầu (Request) đến Server; Server trả lời (Response) về Browser.

## 03. D0-02 — Một mẩu dữ liệu có ý nghĩa gì?

- **Chặng:** D0 · **Giao diện:** presentation · **Bố cục:** Question Focus
- **Nội dung/đề bài được giữ nguyên:** Theo em, language=vi có thể biểu diễn thông tin gì?
- **Nội dung hiển thị và cách phát triển:** Thẻ dữ liệu giả định: language=vi.
- **Học sinh thực hiện:** HS đoán ý nghĩa dữ liệu, dùng lời của mình.
- **Phản hồi/điều kiện mở:** Chấp nhận giả thuyết có căn cứ; chưa giới thiệu đáp án vòng đời Cookie.
- **Sản phẩm minh chứng:** Một dự đoán ý nghĩa language=vi.
- **Học liệu/vị trí:** Thẻ code cỡ lớn; không cần ảnh.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Giữ bối cảnh trước định nghĩa.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Ví dụ language=vi biểu diễn lựa chọn tiếng Việt; bản thân chuỗi này là dữ liệu, không phải lệnh chạy.

## 04. A1-01 — Vì sao lần sau vẫn là tiếng Việt?

- **Chặng:** ACT01 · **Giao diện:** story · **Bố cục:** Before / After Story
- **Nội dung/đề bài được giữ nguyên:** Quan sát hai trạng thái trước/sau khi lựa chọn ngôn ngữ. Thông tin tối thiểu cần nhớ là gì?
- **Nội dung hiển thị và cách phát triển:** Hai trạng thái của cùng website giả lập: chưa chọn ngôn ngữ → đã chọn Tiếng Việt.
- **Học sinh thực hiện:** HS đoán thông tin tối thiểu mà website cần nhớ.
- **Phản hồi/điều kiện mở:** Mở trạng thái sau theo thao tác; không hiện Set-Cookie khi chưa đến ACT02.
- **Sản phẩm minh chứng:** Dự đoán thông tin cần ghi nhớ.
- **Học liệu/vị trí:** Bộ 2 trạng thái website HTML mock; bản dự phòng ảnh cùng ngữ cảnh.
- **Tình trạng đầu vào:** `UI_DEMO_READY; real screenshot not produced`
- **Quy tắc an toàn chuyên môn:** Cần sản xuất UI pair chính thức (P0).
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Một website có thể nhớ lựa chọn ngôn ngữ nhờ dữ liệu trình duyệt lưu giữ cho website, trong đó cookie là một cơ chế có thể dùng.

## 05. A1-02 — Cookie là một mẩu dữ liệu

- **Chặng:** ACT01 · **Giao diện:** presentation · **Bố cục:** Concept Focus
- **Nội dung/đề bài được giữ nguyên:** Cookie là dữ liệu nhỏ mà trình duyệt có thể quản lý cho website; nó không phải HTML hay một chương trình tự chạy.
- **Nội dung hiển thị và cách phát triển:** Cookie là dữ liệu nhỏ do trình duyệt có thể quản lý cho website; ví dụ language=vi.
- **Học sinh thực hiện:** HS diễn giải lại và nêu điều Cookie không phải.
- **Phản hồi/điều kiện mở:** Chỉ sau HS thử mới so sánh với HTML và chương trình.
- **Sản phẩm minh chứng:** Mô tả “dữ liệu, không phải HTML hay chương trình”.
- **Học liệu/vị trí:** Text/code card; không bắt buộc video.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không nói website nào cũng dùng cookie.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Cookie là dữ liệu do trình duyệt quản lý theo quy tắc; không phải mã HTML hoặc chương trình tự chạy.

## 06. A1-03 — Thẻ nào là dữ liệu ghi nhớ?

- **Chặng:** ACT01 · **Giao diện:** presentation · **Bố cục:** Interactive Classification Cards
- **Nội dung/đề bài được giữ nguyên:** Phân loại: language=vi, <h1>Xin chào</h1>, run.exe. Sau đó che thẻ và nêu một việc Cookie có thể giúp.
- **Nội dung hiển thị và cách phát triển:** Ba thẻ: language=vi ; <h1>Xin chào</h1> ; run.exe.
- **Học sinh thực hiện:** HS phân loại dữ liệu / nội dung HTML / tên ví dụ chương trình rồi giải thích.
- **Phản hồi/điều kiện mở:** Sai: hỏi “Thẻ này lưu lựa chọn hay vẽ giao diện hay chỉ tên tập tin?”; không tiết lộ đáp án tức thì.
- **Sản phẩm minh chứng:** P1: 3 thẻ + lý do + recall.
- **Học liệu/vị trí:** Thẻ dữ liệu HTML/CSS; bản in trang 1.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không nhầm run.exe là một cookie chạy lệnh.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** language=vi là dữ liệu minh họa; <h1>…</h1> là thẻ HTML; run.exe là tên tệp chương trình ví dụ.

## 07. A2-01 — Bước 1 · Browser xin trang

- **Chặng:** ACT02 · **Giao diện:** presentation · **Bố cục:** Progressive Diagram – Step 1
- **Nội dung/đề bài được giữ nguyên:** Lượt truy cập đầu, Browser gửi HTTP Request đến Server. Bước tiếp theo có thể là gì?
- **Nội dung hiển thị và cách phát triển:** Lượt truy cập 1: Browser gửi HTTP Request đến Server.
- **Học sinh thực hiện:** HS chọn mũi tên request và dự đoán tiếp bước.
- **Phản hồi/điều kiện mở:** Hiện duy nhất request, ẩn các chiều tiếp theo.
- **Sản phẩm minh chứng:** Mũi tên B→S kèm lý do.
- **Học liệu/vị trí:** browser_server_blank.svg; print_pack trang 2.
- **Tình trạng đầu vào:** `SOURCE_SVG_READY`
- **Quy tắc an toàn chuyên môn:** Không mở sớm vòng đời chuẩn.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Browser → Server: HTTP Request là yêu cầu xin tài nguyên.

## 08. A2-02 — Ai gửi Set-Cookie?

- **Chặng:** ACT02 · **Giao diện:** presentation · **Bố cục:** Worked Example → Your Turn
- **Nội dung/đề bài được giữ nguyên:** Hãy chọn hướng của HTTP Response có thể mang Set-Cookie: language=vi.
- **Nội dung hiển thị và cách phát triển:** Server có thể gửi HTTP Response kèm Set-Cookie: language=vi.
- **Học sinh thực hiện:** HS chọn ai gửi Set-Cookie, ai có thể lưu.
- **Phản hồi/điều kiện mở:** Nếu đảo chiều, nhắc quy tắc Request/Response; chỉ bật mũi tên đúng sau lượt thử.
- **Sản phẩm minh chứng:** P2-1: chiều Set-Cookie và vai trò Browser.
- **Học liệu/vị trí:** Dùng lại visual_lab.html ở Skill11; có phương án ghép thẻ giấy.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Chưa tích hợp engine ghép thẻ trong nguyên mẫu hiện tại.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Server → Browser: HTTP Response có thể chứa Set-Cookie; Browser có thể chấp nhận và lưu tùy điều kiện.

## 09. A2-03 — Browser có thể lưu hoặc từ chối

- **Chặng:** ACT02 · **Giao diện:** lab · **Bố cục:** Lab – Accept / Block
- **Nội dung/đề bài được giữ nguyên:** Server gửi chỉ dẫn, nhưng Browser là bên quyết định có lưu cookie theo điều kiện áp dụng.
- **Nội dung hiển thị và cách phát triển:** Phản hồi có Set-Cookie; Browser có thể chấp nhận hoặc từ chối lưu.
- **Học sinh thực hiện:** HS dự đoán trạng thái Browser ở hai ca và chạy mô phỏng.
- **Phản hồi/điều kiện mở:** Hiện kết quả sau nút Kiểm tra; lưu cả dự đoán và điều kiện.
- **Sản phẩm minh chứng:** P2-2: khác biệt hai trạng thái.
- **Học liệu/vị trí:** Cookie Lab mock, visual_lab.html; SVG compare.
- **Tình trạng đầu vào:** `LAB_DEMO_READY`
- **Quy tắc an toàn chuyên môn:** Không mô phỏng mạng HTTP thật; dùng điều kiện hợp lệ.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Một Set-Cookie được gửi không bảo đảm Cookie chắc chắn đã được lưu; Browser có thể từ chối.

## 10. A2-04 — Lượt sau: Cookie đi hướng nào?

- **Chặng:** ACT02 · **Giao diện:** lab · **Bố cục:** Lab – Return Request
- **Nội dung/đề bài được giữ nguyên:** Nếu Browser có cookie còn hợp lệ và phù hợp phạm vi, cookie có thể đi trong Request từ Browser đến Server.
- **Nội dung hiển thị và cách phát triển:** Lần quay lại: Cookie chỉ có thể nằm trong Request phù hợp nếu đã lưu, còn hiệu lực và đúng phạm vi.
- **Học sinh thực hiện:** HS dự đoán gửi/không gửi cookie khi trở lại.
- **Phản hồi/điều kiện mở:** Phản hồi dựa trên accept, validity và scope; giải thích từng điều kiện.
- **Sản phẩm minh chứng:** P2-3: chiều Cookie B→S và điều kiện.
- **Học liệu/vị trí:** cookie_lifecycle.svg chỉ sau HS dự đoán.
- **Tình trạng đầu vào:** `LAB_DEMO_READY`
- **Quy tắc an toàn chuyên môn:** Cookie dùng trong Request, không đồng nhất với Set-Cookie.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Nếu Cookie đã lưu, còn hiệu lực và phù hợp phạm vi, Browser có thể gửi Cookie trong HTTP Request tiếp theo đến Server.

## 11. A2-05 — Nhận Cookie và chặn Cookie

- **Chặng:** ACT02 · **Giao diện:** lab · **Bố cục:** Compare / Lab
- **Nội dung/đề bài được giữ nguyên:** Nếu Browser không lưu cookie được đề nghị, lần sau không thể gửi lại chính cookie ấy.
- **Nội dung hiển thị và cách phát triển:** So sánh Browser chấp nhận Cookie và Browser chặn Cookie trong cùng tình huống.
- **Học sinh thực hiện:** HS thử hai trường hợp và mô tả sự khác biệt ở lượt quay lại.
- **Phản hồi/điều kiện mở:** Không kết luận website chắc chắn không thể nhớ bằng cách khác.
- **Sản phẩm minh chứng:** P2-4: dự đoán đúng hai ca, có căn cứ.
- **Học liệu/vị trí:** cookie_accept_block.svg; hoặc so sánh hai trang ở Dual View.
- **Tình trạng đầu vào:** `LAB_DEMO_READY`
- **Quy tắc an toàn chuyên môn:** Không mở hai hình có đáp án trước HS thử.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Khi Browser chặn Cookie cụ thể, request lần sau không gửi lại chính cookie ấy; website vẫn có thể có cách ghi nhớ khác.

## 12. A2-06 — Vẽ lại hai chiều không nhìn mẫu

- **Chặng:** ACT02 · **Giao diện:** focus · **Bố cục:** Focus / Active Recall
- **Nội dung/đề bài được giữ nguyên:** Không nhìn hình: em hãy vẽ Server → Browser với Set-Cookie và Browser → Server với Cookie trong request phù hợp.
- **Nội dung hiển thị và cách phát triển:** Ẩn sơ đồ chuẩn, chỉ để lại yêu cầu vẽ chiều Set-Cookie và Cookie.
- **Học sinh thực hiện:** HS nói và vẽ lại hai mũi tên vào vở.
- **Phản hồi/điều kiện mở:** GV chuẩn hóa sau khi HS nộp bản vẽ; cho sửa theo bằng chứng.
- **Sản phẩm minh chứng:** P2 tổng hợp, mức hỗ trợ H0–H3.
- **Học liệu/vị trí:** Chỉ câu hỏi và vùng ghi chú; print_pack trang 2.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Dual View vẫn có nút, không tự mở slide giải đáp.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Hai chiều cần nhớ: Set-Cookie ở Response từ Server về Browser; Cookie ở Request phù hợp từ Browser đến Server.

## 13. A3-01 — Cookie nào còn vào ngày mai?

- **Chặng:** ACT03 · **Giao diện:** presentation · **Bố cục:** Timeline Blank
- **Nội dung/đề bài được giữ nguyên:** Ba mốc: đang duyệt → phiên kết thúc → ngày hôm sau. Đánh dấu nơi mỗi cookie còn có thể dùng.
- **Nội dung hiển thị và cách phát triển:** Ba mốc: đang duyệt → phiên kết thúc → ngày hôm sau.
- **Học sinh thực hiện:** HS đặt thẻ session/persistent vào timeline trống.
- **Phản hồi/điều kiện mở:** Sau khi đoán mới cho xem ví dụ có điều kiện; không tự đồng nhất đóng tab với kết thúc phiên.
- **Sản phẩm minh chứng:** P3-1: timeline + giải thích vì sao.
- **Học liệu/vị trí:** Timeline trống cần tạo P0; hiện là thẻ ba mốc, chưa là bản kéo thả.
- **Tình trạng đầu vào:** `TIMELINE_BLANK_PENDING`
- **Quy tắc an toàn chuyên môn:** Browser có thể khôi phục phiên; cookie có thể bị xóa sớm.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Session Cookie thường gắn với phiên duyệt; Persistent Cookie có thời hạn. Tình trạng thực tế còn phụ thuộc xóa/chặn và khôi phục phiên.

## 14. A3-02 — Đổi thời hạn, đổi loại Cookie

- **Chặng:** ACT03 · **Giao diện:** presentation · **Bố cục:** Contrast – Change One Variable
- **Nội dung/đề bài được giữ nguyên:** Nếu cart_id=C104 được thêm thời hạn 7 ngày, tên và mục đích giữ nguyên nhưng phân loại theo thời hạn thay đổi.
- **Nội dung hiển thị và cách phát triển:** Thêm hạn 7 ngày vào cart_id=C104, tên và công dụng giữ nguyên.
- **Học sinh thực hiện:** HS so sánh trước/sau và kết luận loại theo vòng đời.
- **Phản hồi/điều kiện mở:** Sai: hỏi “Điều gì thay đổi: tên hay thời hạn?”
- **Sản phẩm minh chứng:** P3-2: phản ví dụ đổi thời hạn.
- **Học liệu/vị trí:** session_persistent_timeline.svg chỉ sau HS trả lời.
- **Tình trạng đầu vào:** `SOURCE_SVG_READY`
- **Quy tắc an toàn chuyên môn:** Persistent không đồng nghĩa Tracking.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Loại Cookie theo tuổi thọ phụ thuộc thời hạn/lifecycle, không phụ thuộc tên hay mục đích sử dụng.

## 15. A3-03 — Hai loại khác nhau ở đâu?

- **Chặng:** ACT03 · **Giao diện:** focus · **Bố cục:** Focus / Recall
- **Nội dung/đề bài được giữ nguyên:** Hãy nêu hai điểm khác nhau theo vòng đời và một điều kiện khiến cookie không còn.
- **Nội dung hiển thị và cách phát triển:** Che timeline; yêu cầu nói 2 khác biệt theo thời hạn và một điều kiện làm Cookie mất đi.
- **Học sinh thực hiện:** HS nói rồi ghi vào vở.
- **Phản hồi/điều kiện mở:** GV hỏi thêm trường hợp khôi phục phiên/xóa thủ công nếu đủ thời gian.
- **Sản phẩm minh chứng:** P3 hoàn chỉnh.
- **Học liệu/vị trí:** Focus canvas; không cần media mới.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không định nghĩa dựa vào RAM/ổ cứng.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Persistent có thể còn qua phiên nếu chưa hết hạn và không bị xóa; Session thường theo phiên nhưng có thể được khôi phục.

## 16. A4-01 — Ba công dụng của Cookie

- **Chặng:** ACT04 · **Giao diện:** presentation · **Bố cục:** Three Use Cases
- **Nội dung/đề bài được giữ nguyên:** SHOP – giỏ hàng; LANGUAGE – lựa chọn ngôn ngữ; ANALYTICS – phân tích lượt xem. Hãy ghép với mục đích phù hợp.
- **Nội dung hiển thị và cách phát triển:** Ba ca: SHOP giỏ hàng, LANGUAGE ngôn ngữ, ANALYTICS nhận diện lượt xem.
- **Học sinh thực hiện:** HS kéo/thả hoặc chọn quản lý phiên, cá nhân hóa, tracking/phân tích.
- **Phản hồi/điều kiện mở:** Phản hồi sau mỗi lần phân loại; giải thích căn cứ từ tình huống.
- **Sản phẩm minh chứng:** P4-1: ba nhóm công dụng và lý do.
- **Học liệu/vị trí:** Ba thẻ tình huống cần thiết kế thống nhất P1.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không dùng dữ liệu cá nhân hoặc cookie thật.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Các công dụng thường gặp: quản lý phiên, cá nhân hóa và theo dõi/phân tích hoạt động.

## 17. A4-02 — Sống lâu có phải là tracking?

- **Chặng:** ACT04 · **Giao diện:** presentation · **Bố cục:** 2×2 Concept Matrix
- **Nội dung/đề bài được giữ nguyên:** Nhận định: Mọi Persistent Cookie đều là Tracking Cookie. Em đồng ý không? Lấy ví dụ language=vi để giải thích.
- **Nội dung hiển thị và cách phát triển:** Trục 1: thời hạn (session/persistent); trục 2: mục đích (theo dõi hay không).
- **Học sinh thực hiện:** HS nhận định “mọi persistent đều tracking” đúng/sai, nêu phản ví dụ.
- **Phản hồi/điều kiện mở:** Sau trả lời, giải thích rằng mục đích khác tuổi thọ.
- **Sản phẩm minh chứng:** P4-2: phản ví dụ + căn cứ tracking.
- **Học liệu/vị trí:** Ma trận mục đích-vòng đời P1; fallback 2 thẻ đối chiếu.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không suy ra tracking chỉ từ thời hạn.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Persistent chỉ nói về thời hạn; tracking nói về mục đích và khả năng liên kết hoạt động, nên không đồng nghĩa.

## 18. A4-03 — Em hãy dạy lại một tình huống

- **Chặng:** ACT04 · **Giao diện:** focus · **Bố cục:** Teach Back / Focus
- **Nội dung/đề bài được giữ nguyên:** Chọn một trong ba trường hợp rồi giải thích cho bạn mới học trong khoảng 30 giây.
- **Nội dung hiển thị và cách phát triển:** Hãy giải thích một tình huống cookie như đang dạy cho bạn khác.
- **Học sinh thực hiện:** HS nêu cơ chế, công dụng và quyền riêng tư trong 30–60 giây.
- **Phản hồi/điều kiện mở:** GV hỏi một câu phản biện; đánh giá lời giải thích chứ không theo tốc độ.
- **Sản phẩm minh chứng:** P4 teach-back + recall ba nhóm.
- **Học liệu/vị trí:** Đề bài lớn, vùng ghi chú; có thể ghi âm nếu có cho phép nhưng không cần.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Tránh thu âm mặc định.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Giải thích Cookie nên nêu: dữ liệu gì được lưu, điều kiện gửi lại, mục đích và điểm cần chú ý về quyền riêng tư.

## 19. A5-01 — Thử sức độc lập: website câu lạc bộ

- **Chặng:** ACT05 · **Giao diện:** assessment · **Bố cục:** Assessment Entry / Isolation
- **Nội dung/đề bài được giữ nguyên:** club.example.org giả lập: theme=dark có hạn 5 ngày; session_id=K25 không đặt hạn lâu dài; có tình huống phân tích.
- **Nội dung hiển thị và cách phát triển:** Website giả lập club.example.org: theme=dark hạn 5 ngày; session_id=K25 không khai báo hạn lâu dài.
- **Học sinh thực hiện:** HS đóng bài luyện, xác nhận vào EXIT độc lập.
- **Phản hồi/điều kiện mở:** Không mở lại nội dung/học liệu/sổ tay trong thời gian kiểm tra.
- **Sản phẩm minh chứng:** Xác nhận bắt đầu EXIT, H0–H3 ghi riêng nếu cần.
- **Học liệu/vị trí:** Tệp EXIT student-only / PDF riêng; không có key teacher trong gói.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Dual nút luôn sẵn, nhưng ở EXIT chỉ đề + giấy nháp, không truy cập cảnh cũ.
- **Dual View:** Bài EXIT + giấy nháp trống, không tra cứu.

## 20. A5-02 — EXIT: ba ô A · B · C

- **Chặng:** ACT05 · **Giao diện:** assessment · **Bố cục:** EXIT A / B / C
- **Nội dung/đề bài được giữ nguyên:** A: cơ chế mũi tên; B: thời hạn; C: công dụng và quyền riêng tư. Trả lời bằng ký hiệu hoặc câu ngắn.
- **Nội dung hiển thị và cách phát triển:** A: chiều request/response/Set-Cookie/Cookie; B: phân loại theo thời hạn; C: mục đích, tracking và quyền riêng tư.
- **Học sinh thực hiện:** HS hoàn thành độc lập ba phần A/B/C và nộp.
- **Phản hồi/điều kiện mở:** Chỉ báo tiếp nhận bài, không gợi ý/chấm công khai trước nộp.
- **Sản phẩm minh chứng:** EXIT ba ô và mức hỗ trợ.
- **Học liệu/vị trí:** exit_independent.html/.pdf (Skill07), chưa nhúng đáp án hoặc engine chấm.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không biến xem slide thành hoàn thành bài.
- **Dual View:** Bài EXIT + giấy nháp trống, không tra cứu.

## 21. P07-01 — Nhớ lại bằng sơ đồ trống

- **Chặng:** P07 · **Giao diện:** map · **Bố cục:** Knowledge Map / Blank Recall
- **Nội dung/đề bài được giữ nguyên:** Che tài liệu; nói và ghi lại năm từ khóa, sau đó tự vẽ bốn nhánh: cơ chế, loại, công dụng, quyền riêng tư.
- **Nội dung hiển thị và cách phát triển:** Sơ đồ Cookies 4 nhánh: cơ chế, phân loại, công dụng, quyền riêng tư.
- **Học sinh thực hiện:** HS tự điền các nhánh thiếu từ trí nhớ.
- **Phản hồi/điều kiện mở:** Sau khi HS vẽ, GV mới so sánh nội dung đã dạy.
- **Sản phẩm minh chứng:** Bản mind-map tự vẽ/ghi chú.
- **Học liệu/vị trí:** cookies_mindmap_blank.svg; phiếu in.
- **Tình trạng đầu vào:** `SOURCE_SVG_READY`
- **Quy tắc an toàn chuyên môn:** Không mở map đáp án trong thời gian EXIT.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Mạng kiến thức Cookies: khái niệm → hai lượt HTTP → session/persistent → công dụng và quyền riêng tư.

## 22. P07-02 — Flashcards và dạy lại

- **Chặng:** P07 · **Giao diện:** presentation · **Bố cục:** Flashcards / Learning by Teaching
- **Nội dung/đề bài được giữ nguyên:** Ôn thuật ngữ; dạy lại vòng đời Cookie; chơi ghép chiều mũi tên và công dụng.
- **Nội dung hiển thị và cách phát triển:** Thẻ Browser, Server, Request, Response, Cookie, Set-Cookie, Session, Persistent, Tracking.
- **Học sinh thực hiện:** HS tự đọc, nêu định nghĩa, dạy lại cơ chế 1–2 phút.
- **Phản hồi/điều kiện mở:** Đảo thứ tự thẻ, nhận xét lỗi cần ôn; không xếp hạng bằng thời gian.
- **Sản phẩm minh chứng:** Flashcard tự học, sản phẩm teach-back.
- **Học liệu/vị trí:** Flashcards tương tác P1; bản giấy print_pack trang 4.
- **Tình trạng đầu vào:** `TEXT_OR_LAYOUT_ONLY`
- **Quy tắc an toàn chuyên môn:** Không cần nằm trong 42 phút; có thể dùng sau buổi học.
- **Dual View:** nút luôn nhìn thấy; chỉ mở khi người dùng yêu cầu.

- **Thẻ kiến thức chỉ mở sau khi hoàn thành:** Ôn bằng cách tự gọi tên thuật ngữ, giải thích theo ví dụ rồi dạy lại toàn bộ cơ chế bằng sơ đồ.

## Các ghi chú quan trọng

- Các nội dung `visible_content`, `interaction_contract`, `feedback_gate` là **đặc tả sư phạm của Skill09**, không chứng minh mọi chức năng đã hoạt động trong nguyên mẫu.
- Teacher-only key và rubric EXIT phải nằm trong bản phân phối riêng. Không nhúng vào HTML học sinh.
- Sổ tay ghi chép không thay thế hệ thống ghi điểm; trạng thái “đã lưu” khác “đạt mục tiêu”.
- Scene có tài nguyên chưa sản xuất phải dùng slide fallback thật sự hoặc chờ Skill07 bổ sung.
