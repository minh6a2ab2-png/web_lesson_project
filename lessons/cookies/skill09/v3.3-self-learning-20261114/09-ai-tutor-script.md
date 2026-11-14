# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.


## Giới hạn trợ giảng
- **SCRIPTED_TUTOR**: lời thoại viết sẵn, không phải AI hội thoại thật.
- H1 → H2 → H3 mở theo yêu cầu và sau khi HS đã thử; H3 chỉ là ví dụ tương tự, không làm hộ.
- Cửa sổ trợ giảng gọn, có thể thu nhỏ; Dual View chỉ một trợ giảng hoạt động cho khung được chọn.
- Màn EXIT chỉ có lời hướng dẫn thao tác, không có gợi ý chuyên môn hoặc thẻ kiến thức.

## 01. P00-01 — Một website có thể nhớ em?
**Lời vào trang:** Hôm qua em chọn tiếng Việt, hôm nay trang vẫn hiện tiếng Việt. Chúng ta sẽ tìm hiểu hiện tượng này. Em thử dự đoán trước nhé!
**Nhắc nhiệm vụ:** Chỉ cần viết một điều mà trang web có thể đang ghi nhớ.
- **H1**: Có điều gì giống nhau ở hai lần em mở trang?
- **H2**: Hãy tập trung vào lựa chọn ngôn ngữ.
- **H3**: Một ví dụ tương tự: ứng dụng nhớ em đã bật chế độ tối.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã có giả thuyết để kiểm tra trong bài. Chưa cần đúng ngay.
- **Khi thiếu/sai:** Chưa có dự đoán. Em có thể bắt đầu bằng câu: “Có lẽ trang nhớ…”
- **Hiểu nhầm hay gặp:** Cho rằng website phải ghi nhớ toàn bộ mọi việc người dùng từng làm.
- **Chuyển:** Trước khi tìm dữ liệu ghi nhớ, em ôn nhanh ai gửi và ai trả trang web.
- **Kiến thức chốt:** Không có (màn mở đầu / đánh giá)

## 02. D0-01 — Ai xin trang? Ai trả trang?
**Lời vào trang:** Muốn hiểu Cookie, ta cần chắc một bước nền: khi mở trang, bên nào yêu cầu và bên nào trả lời?
**Nhắc nhiệm vụ:** Em vẽ hai mũi tên ngược chiều và giải thích từng mũi tên.
- **H1**: Ai đang muốn xem nội dung của website?
- **H2**: Bên cần nội dung sẽ gửi yêu cầu; bên cung cấp nội dung sẽ trả phản hồi.
- **H3**: Nghĩ tới việc em hỏi thủ thư về một cuốn sách, rồi thủ thư trả lời.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Hai chiều đã hợp lý. Em hãy dùng đúng từ Request và Response để nói lại.
- **Khi thiếu/sai:** Em hãy xem lại ai là bên chủ động xin nội dung; đừng đổi cả hai mũi tên cùng lúc.
- **Hiểu nhầm hay gặp:** Cho rằng server luôn gửi trang trước mà không cần request.
- **Chuyển:** Giờ thử xem một chuỗi dữ liệu ngắn có thể biểu diễn điều gì.
- **Kiến thức chốt:** Trong trao đổi web cơ bản, Browser gửi yêu cầu (Request) đến Server; Server trả lời (Response) về Browser.

## 03. D0-02 — Một mẩu dữ liệu có ý nghĩa gì?
**Lời vào trang:** Em chưa cần biết Cookie là gì. Chỉ cần nhìn một dòng dữ liệu nhỏ và đoán ý nghĩa của nó.
**Nhắc nhiệm vụ:** Hãy nói language là gì và vi có thể biểu diễn điều gì.
- **H1**: Từ “language” thường liên quan tới thông tin nào?
- **H2**: Phần sau dấu bằng thường biểu diễn giá trị được chọn.
- **H3**: Tương tự, theme=dark có thể biểu diễn lựa chọn giao diện tối.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Cách diễn giải này có căn cứ. Em đã phân biệt được dữ liệu với câu lệnh.
- **Khi thiếu/sai:** Hãy tách language và vi, rồi liên hệ với tình huống chọn tiếng Việt.
- **Hiểu nhầm hay gặp:** Nghĩ rằng một chuỗi có dấu = luôn là lệnh chạy.
- **Chuyển:** Quay về hai lần truy cập và dự đoán chính xác cần ghi nhớ thứ gì.
- **Kiến thức chốt:** Ví dụ language=vi biểu diễn lựa chọn tiếng Việt; bản thân chuỗi này là dữ liệu, không phải lệnh chạy.

## 04. A1-01 — Vì sao lần sau vẫn là tiếng Việt?
**Lời vào trang:** Đây là cùng một website ở hai thời điểm. Em chú ý xem điều gì đã thay đổi, rồi thử đoán dữ liệu nào cần lưu.
**Nhắc nhiệm vụ:** So sánh hai trạng thái và viết đúng một thông tin mà website có thể cần giữ.
- **H1**: Trang khác nhau ở ngôn ngữ hay địa chỉ website?
- **H2**: Tìm lựa chọn được giữ lại giữa hai lần xem.
- **H3**: Một dạng dữ liệu có thể là tên lựa chọn đi kèm giá trị.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã tìm ra điều cần ghi nhớ. Tiếp theo ta đặt tên cho một cơ chế có thể làm điều đó.
- **Khi thiếu/sai:** Hãy nhìn lại nhãn ngôn ngữ ở hai trạng thái và chỉ một thay đổi duy nhất.
- **Hiểu nhầm hay gặp:** Suy ra ngay rằng mọi website đều phải dùng Cookie.
- **Chuyển:** Ta sẽ làm quen với khái niệm Cookie nhưng chưa học toàn bộ cơ chế.
- **Kiến thức chốt:** Một website có thể nhớ lựa chọn ngôn ngữ nhờ dữ liệu trình duyệt lưu giữ cho website, trong đó cookie là một cơ chế có thể dùng.

## 05. A1-02 — Cookie là một mẩu dữ liệu
**Lời vào trang:** Một Cookie là một mẩu dữ liệu được trình duyệt quản lý theo quy tắc. Em thử giải thích lại mà không chép nguyên câu.
**Nhắc nhiệm vụ:** Em cần viết “Cookie là…” và “Cookie không phải…”.
- **H1**: Cookie được mô tả là dữ liệu hay chương trình?
- **H2**: Hãy nghĩ xem dữ liệu có tự vẽ trang web hoặc tự chạy mã không.
- **H3**: Ví dụ thẻ <h1> thuộc HTML, khác với một giá trị language=vi.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã tách được khái niệm dữ liệu khỏi mã HTML và chương trình.
- **Khi thiếu/sai:** Câu trả lời vẫn lẫn Cookie với thẻ HTML hoặc tệp thực thi; em hãy sửa phần đó.
- **Hiểu nhầm hay gặp:** Cho rằng Cookie là một chương trình tự chạy hoặc chính là mã HTML.
- **Chuyển:** Ta dùng ba thẻ cụ thể để tự kiểm tra sự phân biệt này.
- **Kiến thức chốt:** Cookie là dữ liệu do trình duyệt quản lý theo quy tắc; không phải mã HTML hoặc chương trình tự chạy.

## 06. A1-03 — Thẻ nào là dữ liệu ghi nhớ?
**Lời vào trang:** Ba thẻ trông đều giống chữ trên màn hình, nhưng vai trò của chúng khác nhau. Em thử phân nhóm trước nhé.
**Nhắc nhiệm vụ:** Hãy phân loại đủ ba thẻ rồi viết lý do cho một thẻ.
- **H1**: Thẻ nào mang thông tin về lựa chọn của người dùng?
- **H2**: Dấu <h1> là cú pháp đánh dấu nội dung trong HTML.
- **H3**: Đuôi .exe thường xuất hiện trong tên tệp thực thi, không phải mẫu dữ liệu Cookie.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã phân biệt ba dạng biểu diễn. Thử nói lại mà không nhìn thẻ.
- **Khi thiếu/sai:** Xem lại thẻ HTML: nó đánh dấu cách tổ chức nội dung, không phải dữ liệu lựa chọn.
- **Hiểu nhầm hay gặp:** Nghĩ run.exe là một cookie có thể chạy mã.
- **Chuyển:** Đã biết Cookie là dữ liệu; giờ xem nó xuất hiện ở lượt truy cập nào.
- **Kiến thức chốt:** language=vi là dữ liệu minh họa; <h1>…</h1> là thẻ HTML; run.exe là tên tệp chương trình ví dụ.

## 07. A2-01 — Bước 1 · Browser xin trang
**Lời vào trang:** Mình chỉ xem bước đầu tiên, chưa xem toàn bộ vòng đời. Khi em mở website, yêu cầu đầu tiên đi từ đâu?
**Nhắc nhiệm vụ:** Vẽ hoặc chọn chiều Request rồi dự đoán bước sau.
- **H1**: Ai thực hiện hành động mở trang?
- **H2**: Yêu cầu xin tài nguyên bắt đầu từ phía người dùng.
- **H3**: Tưởng tượng em gửi yêu cầu lấy một tài liệu rồi chờ phản hồi.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Chiều Request hợp lý. Sang màn sau em sẽ xem Response có thể chứa thêm gì.
- **Khi thiếu/sai:** Đừng bắt đầu từ bên gửi nội dung; hãy bắt đầu từ bên muốn nhận nội dung.
- **Hiểu nhầm hay gặp:** Bắt đầu vòng đời bằng việc Server chủ động đẩy Cookie đến Browser.
- **Chuyển:** Tiếp theo em sẽ xác định ai có thể gửi Set-Cookie.
- **Kiến thức chốt:** Browser → Server: HTTP Request là yêu cầu xin tài nguyên.

## 08. A2-02 — Ai gửi Set-Cookie?
**Lời vào trang:** Tên Set-Cookie dễ gây nhầm. Em đừng đoán theo tên; hãy xác định nó đi cùng loại thông điệp nào.
**Nhắc nhiệm vụ:** Em đặt Set-Cookie đúng chiều rồi giải thích vai trò của Browser.
- **H1**: Response đi từ bên nào về bên nào?
- **H2**: Set-Cookie có thể nằm trong Response do Server gửi.
- **H3**: Hãy so sánh hai nhãn: Set-Cookie trong Response và Cookie trong Request ở lượt sau.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã đặt Set-Cookie trong chiều phản hồi. Đừng quên Browser còn có điều kiện lưu riêng.
- **Khi thiếu/sai:** Em đã đặt Set-Cookie vào nhầm chiều; quay về quy tắc Request xin, Response trả.
- **Hiểu nhầm hay gặp:** Cho rằng Set-Cookie đi từ Browser đến Server.
- **Chuyển:** Bây giờ thử trường hợp Browser chấp nhận và trường hợp từ chối lưu.
- **Kiến thức chốt:** Server → Browser: HTTP Response có thể chứa Set-Cookie; Browser có thể chấp nhận và lưu tùy điều kiện.

## 09. A2-03 — Browser có thể lưu hoặc từ chối
**Lời vào trang:** Server có thể đề nghị lưu Cookie, nhưng đề nghị đó chưa bảo đảm Browser sẽ lưu. Em thử hai trường hợp.
**Nhắc nhiệm vụ:** Chọn chấp nhận hoặc chặn, đưa ra dự đoán rồi mới chạy mô phỏng.
- **H1**: Ai là nơi quản lý Cookie được lưu?
- **H2**: Trình duyệt áp dụng điều kiện và cài đặt của mình trước khi lưu.
- **H3**: Ví dụ một trình duyệt đang cài chế độ chặn loại Cookie được đề nghị.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã quan sát đúng vai trò Browser. Hãy nói thêm vì sao chỉ có Set-Cookie là chưa đủ.
- **Khi thiếu/sai:** Em đang xem Server như bên có quyền ghi trực tiếp; thử lại khi Browser đặt chế độ chặn.
- **Hiểu nhầm hay gặp:** Nghĩ Server luôn ghi được Cookie vào Browser.
- **Chuyển:** Sau khi lưu, Cookie có thể xuất hiện ở lượt yêu cầu tiếp theo như thế nào?
- **Kiến thức chốt:** Một Set-Cookie được gửi không bảo đảm Cookie chắc chắn đã được lưu; Browser có thể từ chối.

## 10. A2-04 — Lượt sau: Cookie đi hướng nào?
**Lời vào trang:** Sau lượt đầu, câu hỏi đổi rồi: Cookie có được gửi lại hay không? Chỉ nhìn tên Cookie thì chưa đủ đâu.
**Nhắc nhiệm vụ:** Em kiểm tra lần lượt lưu – còn hạn – đúng phạm vi rồi dự đoán.
- **H1**: Cookie không được lưu thì Browser có gì để gửi lại?
- **H2**: Lần gửi lại cần phù hợp phạm vi và còn hiệu lực.
- **H3**: Ví dụ Cookie của trang A không mặc nhiên gửi cho trang B không phù hợp phạm vi.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã xét đủ điều kiện, không chỉ học thuộc chiều mũi tên.
- **Khi thiếu/sai:** Em hãy kiểm tra lại ba điều kiện trước khi kết luận Cookie luôn được gửi.
- **Hiểu nhầm hay gặp:** Nghĩ mọi Cookie đã lưu đều gửi trong mọi request.
- **Chuyển:** Ta đối chiếu trực tiếp hai ca chấp nhận và chặn.
- **Kiến thức chốt:** Nếu Cookie đã lưu, còn hiệu lực và phù hợp phạm vi, Browser có thể gửi Cookie trong HTTP Request tiếp theo đến Server.

## 11. A2-05 — Nhận Cookie và chặn Cookie
**Lời vào trang:** Hãy giữ nguyên website và chỉ thay cài đặt của Browser. Em tìm ra khác biệt nào ở lượt quay lại?
**Nhắc nhiệm vụ:** So sánh có/không gửi lại chính Cookie ấy, đừng suy ra toàn bộ website sẽ quên.
- **H1**: Browser chặn Cookie ấy thì lần sau có cùng Cookie để gửi không?
- **H2**: Một website có thể còn những phương thức nhớ khác ngoài chính Cookie đó.
- **H3**: Cùng trang, cùng dữ liệu đề nghị, chỉ khác chấp nhận/chặn.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã so sánh đúng và không kết luận quá mức từ một Cookie.
- **Khi thiếu/sai:** Tránh nói “website chắc chắn quên mọi thứ”; hãy chỉ phát biểu về Cookie đang xét.
- **Hiểu nhầm hay gặp:** Cho rằng chặn Cookie đồng nghĩa website không thể ghi nhớ bằng cách khác.
- **Chuyển:** Bây giờ tắt mẫu và tự vẽ lại hai chiều quan trọng.
- **Kiến thức chốt:** Khi Browser chặn Cookie cụ thể, request lần sau không gửi lại chính cookie ấy; website vẫn có thể có cách ghi nhớ khác.

## 12. A2-06 — Vẽ lại hai chiều không nhìn mẫu
**Lời vào trang:** Đây là bài nhớ lại. Em thử tự vẽ trước, không cần vẽ đẹp; quan trọng là đúng chiều và tên thông điệp.
**Nhắc nhiệm vụ:** Chỉ nhìn đề bài, vẽ hai chiều trong vở rồi tự nói lý do.
- **H1**: Hãy nhớ có một chiều phản hồi và một chiều yêu cầu ở lượt sau.
- **H2**: Phản hồi đến Browser; yêu cầu lượt sau đi đến Server.
- **H3**: Sau khi vẽ xong, dùng Sổ tay để đối chiếu nếu đã ra khỏi lượt recall.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã hoàn thành một lần truy hồi độc lập. Lưu bản vẽ hoặc ghi mô tả của em.
- **Khi thiếu/sai:** Nếu chưa chắc, đặt tên Request/Response trước rồi mới thêm nhãn Cookie.
- **Hiểu nhầm hay gặp:** Viết Set-Cookie trên Request hoặc Cookie trên Response.
- **Chuyển:** Ta đã đi qua hai lượt truy cập; giờ xem Cookie tồn tại bao lâu.
- **Kiến thức chốt:** Hai chiều cần nhớ: Set-Cookie ở Response từ Server về Browser; Cookie ở Request phù hợp từ Browser đến Server.

## 13. A3-01 — Cookie nào còn vào ngày mai?
**Lời vào trang:** Tên Session và Persistent liên quan đến thời gian tồn tại. Em thử đánh dấu ba mốc trước khi xem quy tắc.
**Nhắc nhiệm vụ:** Hãy nói cookie nào có thể còn ở ngày sau, kèm một điều kiện.
- **H1**: Tên “persistent” gợi ý điều gì về thời hạn?
- **H2**: Đừng quên Cookie có thể bị xóa hoặc bị chặn sớm.
- **H3**: Ví dụ Cookie có thời hạn bảy ngày có thể còn qua hôm sau nếu chưa bị xóa.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã đưa thời hạn vào lời giải thích thay vì đoán theo tên Cookie.
- **Khi thiếu/sai:** Em đang coi đóng một tab luôn là kết thúc mọi session; hãy xét khôi phục phiên.
- **Hiểu nhầm hay gặp:** Định nghĩa Session/Persistent chỉ theo RAM hay ổ cứng.
- **Chuyển:** Bây giờ ta chỉ đổi thời hạn của một Cookie để kiểm tra cách phân loại.
- **Kiến thức chốt:** Session Cookie thường gắn với phiên duyệt; Persistent Cookie có thời hạn. Tình trạng thực tế còn phụ thuộc xóa/chặn và khôi phục phiên.

## 14. A3-02 — Đổi thời hạn, đổi loại Cookie
**Lời vào trang:** Tên và chức năng giỏ hàng giữ nguyên. Chỉ thay thời hạn thành bảy ngày thì em sẽ phân loại khác đi không?
**Nhắc nhiệm vụ:** Dựa vào vòng đời, không dựa vào chữ cart_id.
- **H1**: Điều gì vừa được thay đổi trong ví dụ?
- **H2**: Session/Persistent là cách phân biệt theo thời hạn hoặc vòng đời.
- **H3**: Một Cookie giữ ngôn ngữ cũng có thể là Persistent nếu được đặt thời hạn.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã tách được tuổi thọ khỏi tên và mục đích Cookie.
- **Khi thiếu/sai:** Em đang dùng công dụng giỏ hàng làm căn cứ phân loại; hãy nhìn thời hạn.
- **Hiểu nhầm hay gặp:** Cho rằng tên giỏ hàng quyết định Session hay Persistent.
- **Chuyển:** Tự nói lại hai điểm khác nhau của hai loại, không nhìn timeline.
- **Kiến thức chốt:** Loại Cookie theo tuổi thọ phụ thuộc thời hạn/lifecycle, không phụ thuộc tên hay mục đích sử dụng.

## 15. A3-03 — Hai loại khác nhau ở đâu?
**Lời vào trang:** Em thử nhớ lại không nhìn sơ đồ. Đừng dựa vào việc Cookie có nằm trong RAM hay không nhé.
**Nhắc nhiệm vụ:** Hãy ghi hai khác biệt và một điều kiện ngoại lệ.
- **H1**: Một Cookie được đặt thời hạn cụ thể có thể tồn tại thế nào?
- **H2**: Việc xóa, chặn và khôi phục phiên có thể ảnh hưởng kết quả.
- **H3**: Ví dụ Cookie hạn bảy ngày vẫn biến mất nếu người dùng xóa sớm.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã diễn giải theo vòng đời và biết kết luận phải có điều kiện.
- **Khi thiếu/sai:** Hãy tránh câu “đóng tab là mọi Cookie Session biến mất ngay”.
- **Hiểu nhầm hay gặp:** Hiểu nhầm kết thúc tab luôn trùng kết thúc phiên duyệt.
- **Chuyển:** Giờ phân loại Cookie theo công dụng thay vì theo thời gian.
- **Kiến thức chốt:** Persistent có thể còn qua phiên nếu chưa hết hạn và không bị xóa; Session thường theo phiên nhưng có thể được khôi phục.

## 16. A4-01 — Ba công dụng của Cookie
**Lời vào trang:** Cùng là Cookie nhưng mỗi website có thể dùng cho một mục đích khác nhau. Em thử ghép các trường hợp cụ thể.
**Nhắc nhiệm vụ:** Ghép đủ ba ca rồi giải thích một ca bằng lời của em.
- **H1**: Ca nào giúp duy trì việc mua sắm?
- **H2**: Ca nào giữ lựa chọn cá nhân? Ca nào liên hệ hoạt động qua các lượt?
- **H3**: Em hãy dùng khung: “Website cần nhớ…, vì vậy nhóm phù hợp là…”.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã dựa vào mục đích thay vì chỉ nhìn thời hạn.
- **Khi thiếu/sai:** Hãy xem lại dữ kiện hoạt động mà mỗi ca theo dõi hoặc ghi nhớ.
- **Hiểu nhầm hay gặp:** Cho rằng mọi Cookie được lưu lâu đều có mục đích tracking.
- **Chuyển:** Ta kiểm tra một nhận định dễ nhầm giữa thời hạn và mục đích.
- **Kiến thức chốt:** Các công dụng thường gặp: quản lý phiên, cá nhân hóa và theo dõi/phân tích hoạt động.

## 17. A4-02 — Sống lâu có phải là tracking?
**Lời vào trang:** Hai từ Persistent và Tracking thường bị ghép làm một. Em hãy kiểm tra xem chúng có nói về cùng một đặc điểm không.
**Nhắc nhiệm vụ:** Nêu đồng ý/không đồng ý, kèm ít nhất một lý do và ví dụ.
- **H1**: Persistent mô tả tuổi thọ hay hành động theo dõi?
- **H2**: Tracking dựa vào việc liên hệ hoạt động, không chỉ ở thời gian tồn tại.
- **H3**: Hãy nghĩ đến Cookie ghi nhớ ngôn ngữ với thời hạn nhiều ngày.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã chỉ ra thời hạn và mục đích là hai trục khác nhau.
- **Khi thiếu/sai:** Câu trả lời mới xét thời hạn, chưa xét tác dụng của Cookie.
- **Hiểu nhầm hay gặp:** Suy ra tracking chỉ vì Cookie tồn tại lâu.
- **Chuyển:** Em tự chọn một ca và thử dạy lại cho người mới học.
- **Kiến thức chốt:** Persistent chỉ nói về thời hạn; tracking nói về mục đích và khả năng liên kết hoạt động, nên không đồng nghĩa.

## 18. A4-03 — Em hãy dạy lại một tình huống
**Lời vào trang:** Em thử trở thành người hướng dẫn. Hãy chọn một tình huống và giải thích từng ý để người chưa học cũng hiểu.
**Nhắc nhiệm vụ:** Giải thích theo bốn ý: dữ liệu, gửi lại, mục đích, quyền riêng tư.
- **H1**: Nếu em là người nghe, em cần biết dữ liệu gì được ghi nhớ?
- **H2**: Một lời giải thích tốt nên nêu khi nào dữ liệu có thể được gửi lại.
- **H3**: Em có thể mở đầu: “Trong trường hợp này website cần nhớ…”
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã tạo bản giải thích có thể kiểm tra, không chỉ nhắc lại thuật ngữ.
- **Khi thiếu/sai:** Lời giải thích còn thiếu một trong bốn ý; hãy bổ sung phần chưa nói.
- **Hiểu nhầm hay gặp:** Chỉ nêu công dụng mà không nói điều kiện hoặc quyền riêng tư.
- **Chuyển:** Tiếp theo là lượt vận dụng độc lập; em sẽ không xem gợi ý nội dung.
- **Kiến thức chốt:** Giải thích Cookie nên nêu: dữ liệu gì được lưu, điều kiện gửi lại, mục đích và điểm cần chú ý về quyền riêng tư.

## 19. A5-01 — Thử sức độc lập: website câu lạc bộ
**Lời vào trang:** Đây là phần tự làm. Em chỉ cần đọc đề và chuẩn bị giấy nháp; trợ giảng sẽ không đưa gợi ý kiến thức trong bài này.
**Nhắc nhiệm vụ:** Đọc hết tình huống rồi chọn bắt đầu. Em có thể dùng giấy nháp.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã xác nhận bắt đầu phần vận dụng độc lập.
- **Khi thiếu/sai:** Nếu chưa đọc xong, em có thể xem lại chính đề và hướng dẫn thao tác.
- **Chuyển:** Bài tiếp theo có ba ô A, B, C. Em trả lời từng ô rồi nộp.
- **Kiến thức chốt:** Không có (màn mở đầu / đánh giá)

## 20. A5-02 — EXIT: ba ô A · B · C
**Lời vào trang:** Bây giờ em tự trả lời A, B và C. Em có thể đọc lại yêu cầu, nhưng sẽ không có gợi ý về đáp án.
**Nhắc nhiệm vụ:** Hãy hoàn thành cả ba ô trước khi nộp.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Bài làm đã được ghi nhận. Nội dung đúng/sai cần được đánh giá theo quy trình riêng.
- **Khi thiếu/sai:** Nếu có ô còn trống, hãy hoàn thiện trước khi nộp hoặc xác nhận bỏ trống.
- **Chuyển:** Sau khi kết thúc phần đánh giá, em có thể tiếp tục ôn lại bằng sơ đồ trống.
- **Kiến thức chốt:** Không có (màn mở đầu / đánh giá)

## 21. P07-01 — Nhớ lại bằng sơ đồ trống
**Lời vào trang:** Đến bước ôn tập rồi. Hãy xem em còn nhớ những mối liên hệ nào trước khi mở lại Sổ tay.
**Nhắc nhiệm vụ:** Vẽ sơ đồ theo bốn nhánh và tự ghi năm từ khóa.
- **H1**: Nghĩ về hai chiều HTTP trước.
- **H2**: Tiếp tục với Session/Persistent và ba công dụng.
- **H3**: Lưu ý nhánh quyền riêng tư không đồng nghĩa với một loại Cookie mới.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em có bản sơ đồ của riêng mình để đối chiếu và sửa.
- **Khi thiếu/sai:** Nếu sơ đồ còn ít ý, hãy điền trước bốn nhánh lớn rồi mở rộng dần.
- **Hiểu nhầm hay gặp:** Lẫn tracking (mục đích) với persistent (thời hạn).
- **Chuyển:** Cuối cùng dùng thẻ thuật ngữ để tự dạy lại toàn bộ cơ chế.
- **Kiến thức chốt:** Mạng kiến thức Cookies: khái niệm → hai lượt HTTP → session/persistent → công dụng và quyền riêng tư.

## 22. P07-02 — Flashcards và dạy lại
**Lời vào trang:** Hãy dùng thẻ để kiểm tra trí nhớ, sau đó thử giải thích toàn bộ hành trình cho người chưa học.
**Nhắc nhiệm vụ:** Tự gọi nghĩa thuật ngữ trước khi mở đáp án; dạy lại bằng sơ đồ của em.
- **H1**: Bắt đầu bằng Browser và Server.
- **H2**: Nhớ hai từ gần giống nhau Set-Cookie và Cookie.
- **H3**: Dùng thứ tự: Request đầu → Response → lưu có điều kiện → Request sau.
- **Khi hoàn thành/đúng (giáo viên hoặc hệ thống xác nhận):** Em đã có một lượt ôn tập chủ động. Hãy ghi lại thẻ còn hay nhầm.
- **Khi thiếu/sai:** Nếu nhầm từ nào, đánh dấu để ôn lại; không cần chạy theo thời gian.
- **Hiểu nhầm hay gặp:** Nhớ được từ nhưng không giải thích cơ chế theo trình tự.
- **Chuyển:** Em có thể quay lại Sổ tay để tự ôn phần cần cải thiện.
- **Kiến thức chốt:** Ôn bằng cách tự gọi tên thuật ngữ, giải thích theo ví dụ rồi dạy lại toàn bộ cơ chế bằng sơ đồ.
