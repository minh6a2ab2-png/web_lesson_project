# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.


## Tương tác và điều kiện mở cho 22 màn
| Scene | Hành động chính | Phản hồi / Reveal gate | Hỗ trợ nếu bí | Định dạng kết quả |
|---|---|---|---|---|
| P00-01 | Đọc câu chuyện và ghi một dự đoán về điều website cần nhớ. | Giáo viên nghe suy đoán; ghi một giả thuyết để quay lại cuối bài. | Có điều gì giống nhau ở hai lần em mở trang? | Một câu dự đoán nói/ghi. |
| D0-01 | Chỉ hoặc vẽ chiều Request và Response giữa hai ô Browser–Server. | Nếu sai hỏi “Ai đang cần trang?”; chưa mở sơ đồ giải đáp. | Ai đang muốn xem nội dung của website? | Sơ đồ hai chiều, mức hỗ trợ H0–H3. |
| D0-02 | Giải thích chuỗi language=vi bằng lời của em. | Chấp nhận giả thuyết có căn cứ; chưa giới thiệu đáp án vòng đời Cookie. | Từ “language” thường liên quan tới thông tin nào? | Một dự đoán ý nghĩa language=vi. |
| A1-01 | So sánh cùng một website trước và sau khi chọn tiếng Việt; ghi điều có thể được lưu. | Mở trạng thái sau theo thao tác; không hiện Set-Cookie khi chưa đến ACT02. | Trang khác nhau ở ngôn ngữ hay địa chỉ website? | Dự đoán thông tin cần ghi nhớ. |
| A1-02 | Viết một câu giải thích Cookie là gì và một điều Cookie không phải. | Chỉ sau HS thử mới so sánh với HTML và chương trình. | Cookie được mô tả là dữ liệu hay chương trình? | Mô tả “dữ liệu, không phải HTML hay chương trình”. |
| A1-03 | Phân loại language=vi, <h1>Xin chào</h1>, run.exe và giải thích ít nhất một lựa chọn. | Sai: hỏi “Thẻ này lưu lựa chọn hay vẽ giao diện hay chỉ tên tập tin?”; không tiết lộ đáp án tức thì. | Thẻ nào mang thông tin về lựa chọn của người dùng? | P1: 3 thẻ + lý do + recall. |
| A2-01 | Chọn chiều HTTP Request và dự đoán phản hồi sẽ đến từ đâu. | Hiện duy nhất request, ẩn các chiều tiếp theo. | Ai thực hiện hành động mở trang? | Mũi tên B→S kèm lý do. |
| A2-02 | Chọn bên gửi HTTP Response có thể mang Set-Cookie: language=vi. | Nếu đảo chiều, nhắc quy tắc Request/Response; chỉ bật mũi tên đúng sau lượt thử. | Response đi từ bên nào về bên nào? | P2-1: chiều Set-Cookie và vai trò Browser. |
| A2-03 | Dự đoán kết quả ở hai chế độ chấp nhận và chặn Cookie. | Hiện kết quả sau nút Kiểm tra; lưu cả dự đoán và điều kiện. | Ai là nơi quản lý Cookie được lưu? | P2-2: khác biệt hai trạng thái. |
| A2-04 | Dự đoán khi nào Browser gửi Cookie trong HTTP Request trở lại Server. | Phản hồi dựa trên accept, validity và scope; giải thích từng điều kiện. | Cookie không được lưu thì Browser có gì để gửi lại? | P2-3: chiều Cookie B→S và điều kiện. |
| A2-05 | Đối chiếu hai lượt quay lại: một trường hợp đã lưu Cookie, một trường hợp đã chặn. | Không kết luận website chắc chắn không thể nhớ bằng cách khác. | Browser chặn Cookie ấy thì lần sau có cùng Cookie để gửi không? | P2-4: dự đoán đúng hai ca, có căn cứ. |
| A2-06 | Vẽ hai mũi tên rồi giải thích ngắn tên thông điệp trên mỗi chiều. | GV chuẩn hóa sau khi HS nộp bản vẽ; cho sửa theo bằng chứng. | Hãy nhớ có một chiều phản hồi và một chiều yêu cầu ở lượt sau. | P2 tổng hợp, mức hỗ trợ H0–H3. |
| A3-01 | Điền hoặc mô tả trạng thái Cookie trên timeline: đang duyệt, kết thúc phiên, ngày sau. | Sau khi đoán mới cho xem ví dụ có điều kiện; không tự đồng nhất đóng tab với kết thúc phiên. | Tên “persistent” gợi ý điều gì về thời hạn? | P3-1: timeline + giải thích vì sao. |
| A3-02 | So sánh cart_id=C104 trước/sau khi được đặt hạn bảy ngày; giải thích loại Cookie. | Sai: hỏi “Điều gì thay đổi: tên hay thời hạn?” | Điều gì vừa được thay đổi trong ví dụ? | P3-2: phản ví dụ đổi thời hạn. |
| A3-03 | Nói hai khác biệt và một điều kiện có thể làm Cookie không còn. | GV hỏi thêm trường hợp khôi phục phiên/xóa thủ công nếu đủ thời gian. | Một Cookie được đặt thời hạn cụ thể có thể tồn tại thế nào? | P3 hoàn chỉnh. |
| A4-01 | Ghép SHOP, LANGUAGE và ANALYTICS với công dụng phù hợp rồi giải thích. | Phản hồi sau mỗi lần phân loại; giải thích căn cứ từ tình huống. | Ca nào giúp duy trì việc mua sắm? | P4-1: ba nhóm công dụng và lý do. |
| A4-02 | Đánh giá câu “Mọi Persistent Cookie đều là Tracking Cookie” và đưa một phản ví dụ. | Sau trả lời, giải thích rằng mục đích khác tuổi thọ. | Persistent mô tả tuổi thọ hay hành động theo dõi? | P4-2: phản ví dụ + căn cứ tracking. |
| A4-03 | Chọn một tình huống rồi giải thích như dạy một bạn mới trong 30–60 giây. | GV hỏi một câu phản biện; đánh giá lời giải thích chứ không theo tốc độ. | Nếu em là người nghe, em cần biết dữ liệu gì được ghi nhớ? | P4 teach-back + recall ba nhóm. |
| A5-01 | Đọc tình huống website câu lạc bộ và xác nhận bắt đầu bài EXIT. | Không mở lại nội dung/học liệu/sổ tay trong thời gian kiểm tra. | Không gợi ý nội dung | Xác nhận bắt đầu EXIT, H0–H3 ghi riêng nếu cần. |
| A5-02 | Trả lời ba phần A (chiều thông điệp), B (thời hạn), C (công dụng/quyền riêng tư). | Chỉ báo tiếp nhận bài, không gợi ý/chấm công khai trước nộp. | Không gợi ý nội dung | EXIT ba ô và mức hỗ trợ. |
| P07-01 | Vẽ sơ đồ trống với bốn nhánh: cơ chế, loại, công dụng, quyền riêng tư. | Sau khi HS vẽ, GV mới so sánh nội dung đã dạy. | Nghĩ về hai chiều HTTP trước. | Bản mind-map tự vẽ/ghi chú. |
| P07-02 | Ôn bộ thẻ thuật ngữ và diễn giải vòng đời Cookie trong 1–2 phút. | Đảo thứ tự thẻ, nhận xét lỗi cần ôn; không xếp hạng bằng thời gian. | Bắt đầu bằng Browser và Server. | Flashcard tự học, sản phẩm teach-back. |

## Hợp đồng vận hành
- Một lần bấm xem gợi ý phải lưu mức hỗ trợ đã dùng. Mức H3 trong mô hình học thông thường chỉ mở sau lượt thử có ý nghĩa; ở EXIT không có H1–H3.
- Học sinh có thể chuyển bước, nhưng màn cần dữ kiện phải có lời giải thích nếu em chưa thử; việc bấm `Lưu` không tự đánh dấu đạt.
- Với câu mở hoặc lời nói, dùng xác nhận thủ công: `saved_ungraded`; không công bố chấm đúng/sai nếu chưa tích hợp engine.
- Các mô phỏng Cookie chỉ là đồ họa giáo dục, không gửi HTTP thật, không sử dụng Cookie thực.
- Chỗ cần kéo thả phải có phương án bấm chọn và fallback bản giấy.
- Phần phản hồi chỉ ra lý do và gợi sửa; ẩn kiến thức chốt đến sau thử/hoàn thành.
