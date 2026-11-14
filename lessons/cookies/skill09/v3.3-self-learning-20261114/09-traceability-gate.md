# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.


## Truy vết tất cả cảnh
| Scene | Nguồn | Nhiệm vụ | Lời trợ giảng | Bằng chứng | Gate thiết kế |
|---|---|---|---|---|---|
| P00-01 | Skill09_v3.2:P00-01; Skill08:P00 | Đọc câu chuyện và ghi một dự đoán về điều website cần nhớ. | Hôm qua em chọn tiếng Việt, hôm nay trang vẫn hiện tiếng Việt. Chúng ta sẽ tìm hiểu hiện tượng này. Em thử dự đoán trước nhé! | Một câu dự đoán nói/ghi. | DESIGN_SPEC |
| D0-01 | Skill09_v3.2:D0-01; Skill08:D0 | Chỉ hoặc vẽ chiều Request và Response giữa hai ô Browser–Server. | Muốn hiểu Cookie, ta cần chắc một bước nền: khi mở trang, bên nào yêu cầu và bên nào trả lời? | Sơ đồ hai chiều, mức hỗ trợ H0–H3. | DESIGN_SPEC |
| D0-02 | Skill09_v3.2:D0-02; Skill08:D0 | Giải thích chuỗi language=vi bằng lời của em. | Em chưa cần biết Cookie là gì. Chỉ cần nhìn một dòng dữ liệu nhỏ và đoán ý nghĩa của nó. | Một dự đoán ý nghĩa language=vi. | DESIGN_SPEC |
| A1-01 | Skill09_v3.2:A1-01; Skill08:ACT01 | So sánh cùng một website trước và sau khi chọn tiếng Việt; ghi điều có thể được lưu. | Đây là cùng một website ở hai thời điểm. Em chú ý xem điều gì đã thay đổi, rồi thử đoán dữ liệu nào cần lưu. | Dự đoán thông tin cần ghi nhớ. | DESIGN_SPEC |
| A1-02 | Skill09_v3.2:A1-02; Skill08:ACT01 | Viết một câu giải thích Cookie là gì và một điều Cookie không phải. | Một Cookie là một mẩu dữ liệu được trình duyệt quản lý theo quy tắc. Em thử giải thích lại mà không chép nguyên câu. | Mô tả “dữ liệu, không phải HTML hay chương trình”. | DESIGN_SPEC |
| A1-03 | Skill09_v3.2:A1-03; Skill08:ACT01 | Phân loại language=vi, <h1>Xin chào</h1>, run.exe và giải thích ít nhất một lựa chọn. | Ba thẻ trông đều giống chữ trên màn hình, nhưng vai trò của chúng khác nhau. Em thử phân nhóm trước nhé. | P1: 3 thẻ + lý do + recall. | DESIGN_SPEC |
| A2-01 | Skill09_v3.2:A2-01; Skill08:ACT02 | Chọn chiều HTTP Request và dự đoán phản hồi sẽ đến từ đâu. | Mình chỉ xem bước đầu tiên, chưa xem toàn bộ vòng đời. Khi em mở website, yêu cầu đầu tiên đi từ đâu? | Mũi tên B→S kèm lý do. | DESIGN_SPEC |
| A2-02 | Skill09_v3.2:A2-02; Skill08:ACT02 | Chọn bên gửi HTTP Response có thể mang Set-Cookie: language=vi. | Tên Set-Cookie dễ gây nhầm. Em đừng đoán theo tên; hãy xác định nó đi cùng loại thông điệp nào. | P2-1: chiều Set-Cookie và vai trò Browser. | DESIGN_SPEC |
| A2-03 | Skill09_v3.2:A2-03; Skill08:ACT02 | Dự đoán kết quả ở hai chế độ chấp nhận và chặn Cookie. | Server có thể đề nghị lưu Cookie, nhưng đề nghị đó chưa bảo đảm Browser sẽ lưu. Em thử hai trường hợp. | P2-2: khác biệt hai trạng thái. | DESIGN_SPEC |
| A2-04 | Skill09_v3.2:A2-04; Skill08:ACT02 | Dự đoán khi nào Browser gửi Cookie trong HTTP Request trở lại Server. | Sau lượt đầu, câu hỏi đổi rồi: Cookie có được gửi lại hay không? Chỉ nhìn tên Cookie thì chưa đủ đâu. | P2-3: chiều Cookie B→S và điều kiện. | DESIGN_SPEC |
| A2-05 | Skill09_v3.2:A2-05; Skill08:ACT02 | Đối chiếu hai lượt quay lại: một trường hợp đã lưu Cookie, một trường hợp đã chặn. | Hãy giữ nguyên website và chỉ thay cài đặt của Browser. Em tìm ra khác biệt nào ở lượt quay lại? | P2-4: dự đoán đúng hai ca, có căn cứ. | DESIGN_SPEC |
| A2-06 | Skill09_v3.2:A2-06; Skill08:ACT02 | Vẽ hai mũi tên rồi giải thích ngắn tên thông điệp trên mỗi chiều. | Đây là bài nhớ lại. Em thử tự vẽ trước, không cần vẽ đẹp; quan trọng là đúng chiều và tên thông điệp. | P2 tổng hợp, mức hỗ trợ H0–H3. | DESIGN_SPEC |
| A3-01 | Skill09_v3.2:A3-01; Skill08:ACT03 | Điền hoặc mô tả trạng thái Cookie trên timeline: đang duyệt, kết thúc phiên, ngày sau. | Tên Session và Persistent liên quan đến thời gian tồn tại. Em thử đánh dấu ba mốc trước khi xem quy tắc. | P3-1: timeline + giải thích vì sao. | DESIGN_SPEC |
| A3-02 | Skill09_v3.2:A3-02; Skill08:ACT03 | So sánh cart_id=C104 trước/sau khi được đặt hạn bảy ngày; giải thích loại Cookie. | Tên và chức năng giỏ hàng giữ nguyên. Chỉ thay thời hạn thành bảy ngày thì em sẽ phân loại khác đi không? | P3-2: phản ví dụ đổi thời hạn. | DESIGN_SPEC |
| A3-03 | Skill09_v3.2:A3-03; Skill08:ACT03 | Nói hai khác biệt và một điều kiện có thể làm Cookie không còn. | Em thử nhớ lại không nhìn sơ đồ. Đừng dựa vào việc Cookie có nằm trong RAM hay không nhé. | P3 hoàn chỉnh. | DESIGN_SPEC |
| A4-01 | Skill09_v3.2:A4-01; Skill08:ACT04 | Ghép SHOP, LANGUAGE và ANALYTICS với công dụng phù hợp rồi giải thích. | Cùng là Cookie nhưng mỗi website có thể dùng cho một mục đích khác nhau. Em thử ghép các trường hợp cụ thể. | P4-1: ba nhóm công dụng và lý do. | DESIGN_SPEC |
| A4-02 | Skill09_v3.2:A4-02; Skill08:ACT04 | Đánh giá câu “Mọi Persistent Cookie đều là Tracking Cookie” và đưa một phản ví dụ. | Hai từ Persistent và Tracking thường bị ghép làm một. Em hãy kiểm tra xem chúng có nói về cùng một đặc điểm không. | P4-2: phản ví dụ + căn cứ tracking. | DESIGN_SPEC |
| A4-03 | Skill09_v3.2:A4-03; Skill08:ACT04 | Chọn một tình huống rồi giải thích như dạy một bạn mới trong 30–60 giây. | Em thử trở thành người hướng dẫn. Hãy chọn một tình huống và giải thích từng ý để người chưa học cũng hiểu. | P4 teach-back + recall ba nhóm. | DESIGN_SPEC |
| A5-01 | Skill09_v3.2:A5-01; Skill08:ACT05 | Đọc tình huống website câu lạc bộ và xác nhận bắt đầu bài EXIT. | Đây là phần tự làm. Em chỉ cần đọc đề và chuẩn bị giấy nháp; trợ giảng sẽ không đưa gợi ý kiến thức trong bài này. | Xác nhận bắt đầu EXIT, H0–H3 ghi riêng nếu cần. | DESIGN_SPEC |
| A5-02 | Skill09_v3.2:A5-02; Skill08:ACT05 | Trả lời ba phần A (chiều thông điệp), B (thời hạn), C (công dụng/quyền riêng tư). | Bây giờ em tự trả lời A, B và C. Em có thể đọc lại yêu cầu, nhưng sẽ không có gợi ý về đáp án. | EXIT ba ô và mức hỗ trợ. | DESIGN_SPEC |
| P07-01 | Skill09_v3.2:P07-01; Skill08:P07 | Vẽ sơ đồ trống với bốn nhánh: cơ chế, loại, công dụng, quyền riêng tư. | Đến bước ôn tập rồi. Hãy xem em còn nhớ những mối liên hệ nào trước khi mở lại Sổ tay. | Bản mind-map tự vẽ/ghi chú. | DESIGN_SPEC |
| P07-02 | Skill09_v3.2:P07-02; Skill08:P07 | Ôn bộ thẻ thuật ngữ và diễn giải vòng đời Cookie trong 1–2 phút. | Hãy dùng thẻ để kiểm tra trí nhớ, sau đó thử giải thích toàn bộ hành trình cho người chưa học. | Flashcard tự học, sản phẩm teach-back. | DESIGN_SPEC |

## Kết quả gate
- **22/22** cảnh có mục đích, nhiệm vụ, 2–5 bước, lời dẫn cụ thể, tiêu chí và sản phẩm, đúng ID nguồn.
- **20/20 cảnh không thuộc EXIT** có đường hỗ trợ; hai cảnh EXIT khóa gợi ý và knowledge capsule.
- **22/22 cảnh** có feedback và câu chuyển cảnh, Sổ tay có trạng thái riêng; nhưng không tuyên bố feedback tự động hoạt động cho toàn bộ bài.
- Dual View luôn có nút ở low-fi, assessment + scratchpad trong EXIT; các trường hợp edge phải được Skill11/12 thử nghiệm thêm.
- **CHƯA PASS** gate thử tự học với học sinh mới bắt đầu; chưa kiểm thử Chrome/Edge Windows `file://`, trải nghiệm bài thật 42 phút, hay đồng bộ kết quả từ Skill07 vào Sổ tay.
- Các khoảng trống có trong `09-asset-gap-register.csv`.

## Kiểm tra yêu cầu “tự học không giáo viên” trước khi nghiệm thu
1. Ở mọi cảnh thử: người mới có thể nói mục đích bằng lời riêng không?
2. Người mới có thể thực hiện bước đầu mà không cần ai diễn giải bên ngoài không?
3. Nếu sai, họ biết nhấn gợi ý, sửa một lỗi và thử lại không?
4. Họ hiểu “đã lưu” không có nghĩa “đã đúng” không?
5. Ở EXIT, mọi đường quay lại tài liệu, gợi ý và thẻ kiến thức đều bị chặn không?

## Ranh giới kiểm thử
**Static design coverage** ≠ **runtime functional QA** ≠ **learner pilot**. Cần cả ba trước khi dùng dạy học thực.
