# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.


## Quy ước đọc
- Nội dung **trực tiếp hiển thị**: mục đích, nhiệm vụ, học liệu, một bước hiện tại.
- Các bước còn lại và tiêu chí: mở qua nút **Hướng dẫn** hoặc ngăn mở gọn; không chồng lớp văn bản lên hình.
- **Trợ giảng** chỉ hiển thị lời dẫn ngắn ban đầu, gợi ý khi được yêu cầu.
- Tất cả ví dụ là giả lập; `language=vi`, `club.example.org` không sử dụng dữ liệu người học thật.

## 01. P00-01 — Một website có thể nhớ em?
- **Mục đích trên màn:** Nhận ra một website có thể ghi nhớ lựa chọn giữa hai lần truy cập.
- **Nhiệm vụ:** Đọc câu chuyện và ghi một dự đoán về điều website cần nhớ.
- **Nội dung/học liệu:** Tình huống: hôm trước em chọn Tiếng Việt; hôm nay trang vẫn hiện tiếng Việt.
- **Khung mặc định:** Context Hero / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc tình huống hôm qua và hôm nay.
  2. Nghĩ xem thông tin nào vẫn được giữ lại.
  3. Ghi một giả thuyết bằng lời của em.
- **Hoàn thành khi:**
  - Ghi được ít nhất một dự đoán có liên quan đến hiện tượng.
- **Bằng chứng:** Một câu dự đoán nói/ghi.
- **Nếu thiếu học liệu:** Hiển thị câu hỏi và website mock đơn giản; không vẽ cơ chế.
- **Rào chắn nội dung:** Ảnh web trước/sau chỉ là mock chưa phải ảnh chụp trình duyệt.

## 02. D0-01 — Ai xin trang? Ai trả trang?
- **Mục đích trên màn:** Xác định chiều trao đổi giữa Browser và Server khi mở một trang.
- **Nhiệm vụ:** Chỉ hoặc vẽ chiều Request và Response giữa hai ô Browser–Server.
- **Nội dung/học liệu:** Hai ô Browser và Server, không đặt sẵn tên chiều mũi tên.
- **Khung mặc định:** Sơ đồ trắng hai đối tượng / `presentation`
- **Hướng dẫn từng bước:**
  1. Quan sát ô Browser và Server.
  2. Quyết định ai cần xem trang trước.
  3. Vẽ chiều xin trang và chiều trả lời.
  4. Nói lý do mỗi mũi tên.
- **Hoàn thành khi:**
  - Đặt đúng Request và Response.
  - Giải thích được vì sao hai chiều ngược nhau.
- **Bằng chứng:** Sơ đồ hai chiều, mức hỗ trợ H0–H3.
- **Nếu thiếu học liệu:** browser_server_blank.svg; bản in print_pack trang 1.
- **Rào chắn nội dung:** Không suy ra học sinh đã thành thạo Cookies từ D0.

## 03. D0-02 — Một mẩu dữ liệu có ý nghĩa gì?
- **Mục đích trên màn:** Nhận biết dạng tên–giá trị trong ví dụ dữ liệu.
- **Nhiệm vụ:** Giải thích chuỗi language=vi bằng lời của em.
- **Nội dung/học liệu:** Thẻ dữ liệu giả định: language=vi.
- **Khung mặc định:** Question Focus / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc chuỗi language=vi.
  2. Phân biệt phần trước và phần sau dấu =.
  3. Đoán lựa chọn mà chuỗi biểu diễn.
- **Hoàn thành khi:**
  - Nêu được một ý nghĩa hợp lý của language=vi.
- **Bằng chứng:** Một dự đoán ý nghĩa language=vi.
- **Nếu thiếu học liệu:** Thẻ code cỡ lớn; không cần ảnh.
- **Rào chắn nội dung:** Giữ bối cảnh trước định nghĩa.

## 04. A1-01 — Vì sao lần sau vẫn là tiếng Việt?
- **Mục đích trên màn:** Xác định thông tin tối thiểu cần giữ lại giữa hai lần truy cập.
- **Nhiệm vụ:** So sánh cùng một website trước và sau khi chọn tiếng Việt; ghi điều có thể được lưu.
- **Nội dung/học liệu:** Hai trạng thái của cùng website giả lập: chưa chọn ngôn ngữ → đã chọn Tiếng Việt.
- **Khung mặc định:** Before / After Story / `story`
- **Hướng dẫn từng bước:**
  1. Quan sát trạng thái ban đầu của website.
  2. Chuyển sang trạng thái sau khi chọn tiếng Việt.
  3. Chỉ ra điểm khác nhau và ghi thông tin cần nhớ.
- **Hoàn thành khi:**
  - Nêu được dữ liệu liên quan đến lựa chọn ngôn ngữ.
- **Bằng chứng:** Dự đoán thông tin cần ghi nhớ.
- **Nếu thiếu học liệu:** Bộ 2 trạng thái website HTML mock; bản dự phòng ảnh cùng ngữ cảnh.
- **Rào chắn nội dung:** Cần sản xuất UI pair chính thức (P0).

## 05. A1-02 — Cookie là một mẩu dữ liệu
- **Mục đích trên màn:** Diễn đạt Cookie là dữ liệu, không phải một chương trình tự chạy.
- **Nhiệm vụ:** Viết một câu giải thích Cookie là gì và một điều Cookie không phải.
- **Nội dung/học liệu:** Cookie là dữ liệu nhỏ do trình duyệt có thể quản lý cho website; ví dụ language=vi.
- **Khung mặc định:** Concept Focus / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc câu mô tả ngắn về Cookie.
  2. Quan sát ví dụ language=vi.
  3. Viết lại bằng lời của em, thêm một điều Cookie không phải.
- **Hoàn thành khi:**
  - Viết được một câu định nghĩa hợp lý.
  - Nêu được một điều Cookie không phải.
- **Bằng chứng:** Mô tả “dữ liệu, không phải HTML hay chương trình”.
- **Nếu thiếu học liệu:** Text/code card; không bắt buộc video.
- **Rào chắn nội dung:** Không nói website nào cũng dùng cookie.

## 06. A1-03 — Thẻ nào là dữ liệu ghi nhớ?
- **Mục đích trên màn:** Phân biệt dữ liệu minh họa, thẻ HTML và tên tệp chương trình.
- **Nhiệm vụ:** Phân loại language=vi, <h1>Xin chào</h1>, run.exe và giải thích ít nhất một lựa chọn.
- **Nội dung/học liệu:** Ba thẻ: language=vi ; <h1>Xin chào</h1> ; run.exe.
- **Khung mặc định:** Interactive Classification Cards / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc từng thẻ.
  2. Chọn nhóm dữ liệu, HTML hoặc tên tệp chương trình.
  3. Giải thích lựa chọn khó nhất.
  4. Che thẻ và nói lại một công dụng có thể có của Cookie.
- **Hoàn thành khi:**
  - Phân loại cả ba thẻ.
  - Giải thích được ít nhất một thẻ và nêu một ý recall.
- **Bằng chứng:** P1: 3 thẻ + lý do + recall.
- **Nếu thiếu học liệu:** Thẻ dữ liệu HTML/CSS; bản in trang 1.
- **Rào chắn nội dung:** Không nhầm run.exe là một cookie chạy lệnh.

## 07. A2-01 — Bước 1 · Browser xin trang
- **Mục đích trên màn:** Xác định bước đầu tiên trong một lượt truy cập website.
- **Nhiệm vụ:** Chọn chiều HTTP Request và dự đoán phản hồi sẽ đến từ đâu.
- **Nội dung/học liệu:** Lượt truy cập 1: Browser gửi HTTP Request đến Server.
- **Khung mặc định:** Progressive Diagram – Step 1 / `presentation`
- **Hướng dẫn từng bước:**
  1. Quan sát Browser và Server.
  2. Chỉ chiều của yêu cầu xin trang.
  3. Dự đoán ai trả lời sau đó.
- **Hoàn thành khi:**
  - Đặt đúng chiều Request.
  - Dự đoán được có một Response trả về.
- **Bằng chứng:** Mũi tên B→S kèm lý do.
- **Nếu thiếu học liệu:** browser_server_blank.svg; print_pack trang 2.
- **Rào chắn nội dung:** Không mở sớm vòng đời chuẩn.

## 08. A2-02 — Ai gửi Set-Cookie?
- **Mục đích trên màn:** Phân biệt thông điệp Set-Cookie với HTTP Request.
- **Nhiệm vụ:** Chọn bên gửi HTTP Response có thể mang Set-Cookie: language=vi.
- **Nội dung/học liệu:** Server có thể gửi HTTP Response kèm Set-Cookie: language=vi.
- **Khung mặc định:** Worked Example → Your Turn / `presentation`
- **Hướng dẫn từng bước:**
  1. Nhớ lại chiều Request.
  2. Xác định chiều Response ngược lại.
  3. Gắn Set-Cookie vào chiều phù hợp.
  4. Nói bên nào có thể lưu dữ liệu.
- **Hoàn thành khi:**
  - Nêu đúng chiều của Response mang Set-Cookie.
  - Phân biệt bên gửi và bên quản lý lưu.
- **Bằng chứng:** P2-1: chiều Set-Cookie và vai trò Browser.
- **Nếu thiếu học liệu:** Dùng lại visual_lab.html ở Skill11; có phương án ghép thẻ giấy.
- **Rào chắn nội dung:** Chưa tích hợp engine ghép thẻ trong nguyên mẫu hiện tại.

## 09. A2-03 — Browser có thể lưu hoặc từ chối
- **Mục đích trên màn:** Nhận ra Browser có thể chấp nhận hoặc từ chối lưu Cookie.
- **Nhiệm vụ:** Dự đoán kết quả ở hai chế độ chấp nhận và chặn Cookie.
- **Nội dung/học liệu:** Phản hồi có Set-Cookie; Browser có thể chấp nhận hoặc từ chối lưu.
- **Khung mặc định:** Lab – Accept / Block / `lab`
- **Hướng dẫn từng bước:**
  1. Chọn trạng thái Browser trong mô phỏng.
  2. Dự đoán Cookie có được lưu không.
  3. Chạy kiểm tra và so sánh kết quả.
  4. Giải thích vì sao hai ca khác nhau.
- **Hoàn thành khi:**
  - Dự đoán được hai ca chấp nhận/chặn.
  - Giải thích vai trò của Browser.
- **Bằng chứng:** P2-2: khác biệt hai trạng thái.
- **Nếu thiếu học liệu:** Cookie Lab mock, visual_lab.html; SVG compare.
- **Rào chắn nội dung:** Không mô phỏng mạng HTTP thật; dùng điều kiện hợp lệ.

## 10. A2-04 — Lượt sau: Cookie đi hướng nào?
- **Mục đích trên màn:** Xác định điều kiện Cookie được gửi lại ở lượt truy cập tiếp.
- **Nhiệm vụ:** Dự đoán khi nào Browser gửi Cookie trong HTTP Request trở lại Server.
- **Nội dung/học liệu:** Lần quay lại: Cookie chỉ có thể nằm trong Request phù hợp nếu đã lưu, còn hiệu lực và đúng phạm vi.
- **Khung mặc định:** Lab – Return Request / `lab`
- **Hướng dẫn từng bước:**
  1. Xem Cookie đã được lưu hay chưa.
  2. Kiểm tra còn hiệu lực và đúng phạm vi hay không.
  3. Dự đoán hướng gửi ở lượt sau.
  4. Đối chiếu với kết quả mô phỏng.
- **Hoàn thành khi:**
  - Nêu đúng chiều Cookie trong Request phù hợp.
  - Kể được ít nhất hai điều kiện gửi lại.
- **Bằng chứng:** P2-3: chiều Cookie B→S và điều kiện.
- **Nếu thiếu học liệu:** cookie_lifecycle.svg chỉ sau HS dự đoán.
- **Rào chắn nội dung:** Cookie dùng trong Request, không đồng nhất với Set-Cookie.

## 11. A2-05 — Nhận Cookie và chặn Cookie
- **Mục đích trên màn:** So sánh hệ quả của việc chấp nhận và chặn cùng một Cookie.
- **Nhiệm vụ:** Đối chiếu hai lượt quay lại: một trường hợp đã lưu Cookie, một trường hợp đã chặn.
- **Nội dung/học liệu:** So sánh Browser chấp nhận Cookie và Browser chặn Cookie trong cùng tình huống.
- **Khung mặc định:** Compare / Lab / `lab`
- **Hướng dẫn từng bước:**
  1. Dự đoán lượt quay lại nếu Cookie được lưu.
  2. Dự đoán lượt quay lại nếu Cookie bị chặn.
  3. So sánh kết quả hai ca.
  4. Nêu một điều không thể kết luận chắc chắn.
- **Hoàn thành khi:**
  - Nêu khác biệt của hai ca.
  - Không khẳng định website chắc chắn quên bằng mọi cách.
- **Bằng chứng:** P2-4: dự đoán đúng hai ca, có căn cứ.
- **Nếu thiếu học liệu:** cookie_accept_block.svg; hoặc so sánh hai trang ở Dual View.
- **Rào chắn nội dung:** Không mở hai hình có đáp án trước HS thử.

## 12. A2-06 — Vẽ lại hai chiều không nhìn mẫu
- **Mục đích trên màn:** Tự nhớ lại hai chiều Set-Cookie và Cookie mà không nhìn mẫu.
- **Nhiệm vụ:** Vẽ hai mũi tên rồi giải thích ngắn tên thông điệp trên mỗi chiều.
- **Nội dung/học liệu:** Ẩn sơ đồ chuẩn, chỉ để lại yêu cầu vẽ chiều Set-Cookie và Cookie.
- **Khung mặc định:** Focus / Active Recall / `focus`
- **Hướng dẫn từng bước:**
  1. Che mọi sơ đồ tham chiếu.
  2. Vẽ Server và Browser trên giấy.
  3. Điền hai mũi tên và nhãn Set-Cookie, Cookie.
  4. Đối chiếu sau khi đã nộp bản vẽ.
- **Hoàn thành khi:**
  - Có bản vẽ hai chiều và lời giải thích.
- **Bằng chứng:** P2 tổng hợp, mức hỗ trợ H0–H3.
- **Nếu thiếu học liệu:** Chỉ câu hỏi và vùng ghi chú; print_pack trang 2.
- **Rào chắn nội dung:** Dual View vẫn có nút, không tự mở slide giải đáp.

## 13. A3-01 — Cookie nào còn vào ngày mai?
- **Mục đích trên màn:** Dự đoán vòng đời của hai loại Cookie theo mốc thời gian.
- **Nhiệm vụ:** Điền hoặc mô tả trạng thái Cookie trên timeline: đang duyệt, kết thúc phiên, ngày sau.
- **Nội dung/học liệu:** Ba mốc: đang duyệt → phiên kết thúc → ngày hôm sau.
- **Khung mặc định:** Timeline Blank / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc ba mốc thời gian.
  2. Đặt dự đoán về Session Cookie.
  3. Đặt dự đoán về Persistent Cookie.
  4. Ghi điều kiện khiến dự đoán có thể thay đổi.
- **Hoàn thành khi:**
  - Điền được hai loại theo ba mốc với lý do.
- **Bằng chứng:** P3-1: timeline + giải thích vì sao.
- **Nếu thiếu học liệu:** Timeline trống cần tạo P0; hiện là thẻ ba mốc, chưa là bản kéo thả.
- **Rào chắn nội dung:** Browser có thể khôi phục phiên; cookie có thể bị xóa sớm.

## 14. A3-02 — Đổi thời hạn, đổi loại Cookie
- **Mục đích trên màn:** Nhận biết tuổi thọ Cookie thay đổi khi thay đổi thời hạn.
- **Nhiệm vụ:** So sánh cart_id=C104 trước/sau khi được đặt hạn bảy ngày; giải thích loại Cookie.
- **Nội dung/học liệu:** Thêm hạn 7 ngày vào cart_id=C104, tên và công dụng giữ nguyên.
- **Khung mặc định:** Contrast – Change One Variable / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc tên và mục đích Cookie.
  2. So sánh thông tin thời hạn trước/sau.
  3. Chọn phân loại theo thời hạn.
  4. Giải thích thứ không thay đổi.
- **Hoàn thành khi:**
  - Nêu được loại theo thời hạn trước và sau.
  - Giải thích vì sao mục đích không quyết định loại.
- **Bằng chứng:** P3-2: phản ví dụ đổi thời hạn.
- **Nếu thiếu học liệu:** session_persistent_timeline.svg chỉ sau HS trả lời.
- **Rào chắn nội dung:** Persistent không đồng nghĩa Tracking.

## 15. A3-03 — Hai loại khác nhau ở đâu?
- **Mục đích trên màn:** Tự phân biệt Session và Persistent theo vòng đời.
- **Nhiệm vụ:** Nói hai khác biệt và một điều kiện có thể làm Cookie không còn.
- **Nội dung/học liệu:** Che timeline; yêu cầu nói 2 khác biệt theo thời hạn và một điều kiện làm Cookie mất đi.
- **Khung mặc định:** Focus / Recall / `focus`
- **Hướng dẫn từng bước:**
  1. Che timeline.
  2. Nói khác biệt thứ nhất về thời hạn.
  3. Nói khác biệt thứ hai về khả năng tồn tại qua phiên.
  4. Thêm một trường hợp Cookie bị mất sớm.
- **Hoàn thành khi:**
  - Nêu được hai khác biệt.
  - Nêu được một điều kiện ảnh hưởng thời gian tồn tại.
- **Bằng chứng:** P3 hoàn chỉnh.
- **Nếu thiếu học liệu:** Focus canvas; không cần media mới.
- **Rào chắn nội dung:** Không định nghĩa dựa vào RAM/ổ cứng.

## 16. A4-01 — Ba công dụng của Cookie
- **Mục đích trên màn:** Phân biệt ba nhóm công dụng Cookie qua tình huống.
- **Nhiệm vụ:** Ghép SHOP, LANGUAGE và ANALYTICS với công dụng phù hợp rồi giải thích.
- **Nội dung/học liệu:** Ba ca: SHOP giỏ hàng, LANGUAGE ngôn ngữ, ANALYTICS nhận diện lượt xem.
- **Khung mặc định:** Three Use Cases / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc hành vi cần ghi nhớ ở từng tình huống.
  2. Xác định giỏ hàng, ngôn ngữ và lượt xem.
  3. Ghép với nhóm công dụng.
  4. Chọn một trường hợp và giải thích lý do.
- **Hoàn thành khi:**
  - Ghép ba ca với công dụng.
  - Giải thích được ít nhất một ca.
- **Bằng chứng:** P4-1: ba nhóm công dụng và lý do.
- **Nếu thiếu học liệu:** Ba thẻ tình huống cần thiết kế thống nhất P1.
- **Rào chắn nội dung:** Không dùng dữ liệu cá nhân hoặc cookie thật.

## 17. A4-02 — Sống lâu có phải là tracking?
- **Mục đích trên màn:** Phân biệt thời hạn lưu và mục đích theo dõi.
- **Nhiệm vụ:** Đánh giá câu “Mọi Persistent Cookie đều là Tracking Cookie” và đưa một phản ví dụ.
- **Nội dung/học liệu:** Trục 1: thời hạn (session/persistent); trục 2: mục đích (theo dõi hay không).
- **Khung mặc định:** 2×2 Concept Matrix / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc nhận định.
  2. Nhớ Persistent nói về đặc điểm gì.
  3. Nhớ Tracking nói về mục đích gì.
  4. Nêu phản ví dụ dựa trên lựa chọn ngôn ngữ.
- **Hoàn thành khi:**
  - Đánh giá nhận định có căn cứ.
  - Nêu được một phản ví dụ phù hợp.
- **Bằng chứng:** P4-2: phản ví dụ + căn cứ tracking.
- **Nếu thiếu học liệu:** Ma trận mục đích-vòng đời P1; fallback 2 thẻ đối chiếu.
- **Rào chắn nội dung:** Không suy ra tracking chỉ từ thời hạn.

## 18. A4-03 — Em hãy dạy lại một tình huống
- **Mục đích trên màn:** Tự giải thích cơ chế, công dụng và lưu ý quyền riêng tư.
- **Nhiệm vụ:** Chọn một tình huống rồi giải thích như dạy một bạn mới trong 30–60 giây.
- **Nội dung/học liệu:** Hãy giải thích một tình huống cookie như đang dạy cho bạn khác.
- **Khung mặc định:** Teach Back / Focus / `focus`
- **Hướng dẫn từng bước:**
  1. Chọn SHOP, LANGUAGE hoặc ANALYTICS.
  2. Nói dữ liệu nào có thể được nhớ.
  3. Nêu điều kiện gửi lại và công dụng.
  4. Bổ sung một lưu ý quyền riêng tư.
- **Hoàn thành khi:**
  - Có bản giải thích đủ dữ liệu, cơ chế, mục đích và quyền riêng tư.
- **Bằng chứng:** P4 teach-back + recall ba nhóm.
- **Nếu thiếu học liệu:** Đề bài lớn, vùng ghi chú; có thể ghi âm nếu có cho phép nhưng không cần.
- **Rào chắn nội dung:** Tránh thu âm mặc định.

## 19. A5-01 — Thử sức độc lập: website câu lạc bộ
- **Mục đích trên màn:** Chuẩn bị làm bài vận dụng độc lập không xem tài liệu.
- **Nhiệm vụ:** Đọc tình huống website câu lạc bộ và xác nhận bắt đầu bài EXIT.
- **Nội dung/học liệu:** Website giả lập club.example.org: theme=dark hạn 5 ngày; session_id=K25 không khai báo hạn lâu dài.
- **Khung mặc định:** Assessment Entry / Isolation / `assessment`
- **Hướng dẫn từng bước:**
  1. Đọc tình huống club.example.org và dữ kiện đề cho.
  2. Đóng Sổ tay và tài liệu học trước.
  3. Chọn bắt đầu khi sẵn sàng.
- **Hoàn thành khi:**
  - Đã đọc đề và xác nhận bắt đầu EXIT.
- **Bằng chứng:** Xác nhận bắt đầu EXIT, H0–H3 ghi riêng nếu cần.
- **Nếu thiếu học liệu:** Tệp EXIT student-only / PDF riêng; không có key teacher trong gói.
- **Rào chắn nội dung:** Dual nút luôn sẵn, nhưng ở EXIT chỉ đề + giấy nháp, không truy cập cảnh cũ.

## 20. A5-02 — EXIT: ba ô A · B · C
- **Mục đích trên màn:** Vận dụng độc lập kiến thức về cơ chế, thời hạn và mục đích Cookie.
- **Nhiệm vụ:** Trả lời ba phần A (chiều thông điệp), B (thời hạn), C (công dụng/quyền riêng tư).
- **Nội dung/học liệu:** A: chiều request/response/Set-Cookie/Cookie; B: phân loại theo thời hạn; C: mục đích, tracking và quyền riêng tư.
- **Khung mặc định:** EXIT A / B / C / `assessment`
- **Hướng dẫn từng bước:**
  1. Đọc ba phần A, B, C trong đề.
  2. Tự viết câu trả lời vào mỗi ô.
  3. Kiểm tra xem đủ ba ô.
  4. Nộp bài khi hoàn thành.
- **Hoàn thành khi:**
  - Đã nộp câu trả lời cho ba phần hoặc xác nhận ô bỏ trống.
- **Bằng chứng:** EXIT ba ô và mức hỗ trợ.
- **Nếu thiếu học liệu:** exit_independent.html/.pdf (Skill07), chưa nhúng đáp án hoặc engine chấm.
- **Rào chắn nội dung:** Không biến xem slide thành hoàn thành bài.

## 21. P07-01 — Nhớ lại bằng sơ đồ trống
- **Mục đích trên màn:** Kết nối các khái niệm Cookies từ trí nhớ mà không nhìn lời giải.
- **Nhiệm vụ:** Vẽ sơ đồ trống với bốn nhánh: cơ chế, loại, công dụng, quyền riêng tư.
- **Nội dung/học liệu:** Sơ đồ Cookies 4 nhánh: cơ chế, phân loại, công dụng, quyền riêng tư.
- **Khung mặc định:** Knowledge Map / Blank Recall / `map`
- **Hướng dẫn từng bước:**
  1. Che nội dung cũ.
  2. Viết trung tâm là Cookies.
  3. Điền bốn nhánh và các từ khóa em nhớ.
  4. Mở lại Sổ tay để đối chiếu sau khi vẽ.
- **Hoàn thành khi:**
  - Vẽ được bốn nhánh và ghi các từ khóa bản thân nhớ.
- **Bằng chứng:** Bản mind-map tự vẽ/ghi chú.
- **Nếu thiếu học liệu:** cookies_mindmap_blank.svg; phiếu in.
- **Rào chắn nội dung:** Không mở map đáp án trong thời gian EXIT.

## 22. P07-02 — Flashcards và dạy lại
- **Mục đích trên màn:** Ôn thuật ngữ và dạy lại Cookie bằng sơ đồ tự vẽ.
- **Nhiệm vụ:** Ôn bộ thẻ thuật ngữ và diễn giải vòng đời Cookie trong 1–2 phút.
- **Nội dung/học liệu:** Thẻ Browser, Server, Request, Response, Cookie, Set-Cookie, Session, Persistent, Tracking.
- **Khung mặc định:** Flashcards / Learning by Teaching / `presentation`
- **Hướng dẫn từng bước:**
  1. Đọc mặt trước thẻ và tự đoán nghĩa.
  2. Đối chiếu sau khi tự trả lời.
  3. Chọn sơ đồ do mình vẽ.
  4. Dạy lại hành trình hai lần truy cập bằng lời.
- **Hoàn thành khi:**
  - Tự trả lời các thẻ.
  - Có một lượt giải thích cơ chế bằng lời hoặc ghi chú.
- **Bằng chứng:** Flashcard tự học, sản phẩm teach-back.
- **Nếu thiếu học liệu:** Flashcards tương tác P1; bản giấy print_pack trang 4.
- **Rào chắn nội dung:** Không cần nằm trong 42 phút; có thể dùng sau buổi học.
