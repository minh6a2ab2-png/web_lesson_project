# Cookies · Kịch bản GV theo 25 màn (Skill 10 v3.5.2)

Đây là **bản dành cho người thiết kế/giáo viên**, không phải tài liệu hiển thị trực tiếp cho học sinh.
Đường chính 23 màn; D0-R01 và D0-R02 chỉ khi cần ôn. Màn A3-00 luôn xuất hiện.

## 01. P00-01 — Vì sao website vẫn nhớ tiếng Việt?
**Loại:** OBSERVE
**Mục đích:** Gây tò mò: cùng một website nhưng lần sau vẫn nhớ lựa chọn ngôn ngữ.
**Lời dẫn giáo viên:** Em nhìn hai lần mở trang nhé. Hôm qua mình chọn Tiếng Việt, hôm nay mở lại thì vẫn thấy Tiếng Việt. Theo em, website cần nhớ điều gì để làm được như vậy? Có nhất thiết phải nhớ cả trang web không? Cứ nói suy nghĩ đầu tiên của em, chưa cần đúng ngay.
**Học sinh làm:** Cho em quan sát hình hôm qua–hôm nay; chờ em nêu một dự đoán.
**Chuyển tiếp:** Để tìm lời giải, ta cần nhớ trình duyệt và máy chủ trao đổi với nhau như thế nào.

## 02. D0-01 — Ai xin trang, ai trả trang?
**Loại:** DIAGNOSE
**Mục đích:** Kiểm tra nhanh kiến thức nền về chiều gửi yêu cầu và phản hồi.
**Lời dẫn giáo viên:** Tưởng tượng em mở một địa chỉ web. Có một bên đi xin nội dung và một bên trả nội dung. Em thử chỉ chiều mũi tên từ trình duyệt đến máy chủ xem chiều nào là yêu cầu nhé. Nếu chưa chắc cũng không sao, đây là phần kiểm tra để biết mình cần ôn điều gì.
**Học sinh làm:** Cho em chọn một chiều trước khi giải thích; chưa chấm điểm, chưa công bố đáp án trước.
**Chuyển tiếp:** Sau hai thông điệp, ta thử đọc một mẩu dữ liệu có thể đi cùng website.

## 03. D0-R01 — Ai gửi yêu cầu? Ai trả lời?
**Loại:** RECOVERY · **Ôn có điều kiện**
**Mục đích:** Ôn hai chiều Request/Response khi kết quả chẩn đoán D0-01 chưa đúng.
**Lời dẫn giáo viên:** Em quan sát sơ đồ. Browser là nơi em dùng để mở trang, còn Server là nơi trả dữ liệu. Em thử ghép hai chiều cho yêu cầu và phản hồi. Không cần ghi dài: chỉ mũi tên và nói lý do là đủ.
**Học sinh làm:** Thử chọn hai chiều trên sơ đồ, tự nói lại bằng lời; chưa chắc có thể chuyển tiếp với hỗ trợ.
**Chuyển tiếp:** Bây giờ em thử đọc một mẩu dữ liệu đơn giản.

## 04. D0-02 — `language=vi` gợi cho em điều gì?
**Loại:** DIAGNOSE
**Mục đích:** Kiểm tra khả năng đọc một cặp tên–giá trị trước khi giới thiệu Cookie.
**Lời dẫn giáo viên:** Trên màn hình có dòng language=vi. Em thử đoán hai phần nằm hai bên dấu bằng nói về điều gì. Đây chỉ là một đoạn dữ liệu ví dụ, không phải câu lệnh phải chạy. Em đoán trước, sau đó mình mới mở phần giải thích để đối chiếu.
**Học sinh làm:** Để em tự nói ý nghĩa của language và vi; sau đó mới bấm hiện giải thích.
**Chuyển tiếp:** Bây giờ quay lại câu chuyện website tự nhớ tiếng Việt.

## 05. D0-R02 — Trước và sau dấu bằng nói gì?
**Loại:** RECOVERY · **Ôn có điều kiện**
**Mục đích:** Ôn cấu trúc tên–giá trị trước khi giới thiệu dữ liệu Cookie.
**Lời dẫn giáo viên:** Nhìn theme=dark: theme là tên một lựa chọn của website, dark là giá trị có nghĩa giao diện tối. Vậy với language=vi, theo em tên và giá trị là gì? Em thử chỉ từng phần nhé.
**Học sinh làm:** Giải thích theme=dark và thử kiểm tra language=vi; không ghi nhận tự động là thành thạo.
**Chuyển tiếp:** Ta quay lại hiện tượng website ghi nhớ ngôn ngữ.

## 06. A1-01 — Cùng một website, hai lần truy cập
**Loại:** OBSERVE
**Mục đích:** Nhận ra thông tin website cần ghi nhớ có thể rất nhỏ.
**Lời dẫn giáo viên:** Hãy so sánh hai hình của cùng một website. Lần đầu người dùng đổi từ tiếng Anh sang tiếng Việt; lần sau trang vẫn hiển thị tiếng Việt. Website có thể chỉ cần lưu câu trả lời cho câu hỏi “ngôn ngữ được chọn là gì”. Em thử nêu xem phần nào của trang đã thay đổi và phần nào vẫn giữ nguyên.
**Học sinh làm:** Cho em chỉ ra lựa chọn ngôn ngữ được giữ lại; không nói ngay tên Cookie.
**Chuyển tiếp:** Giờ chúng ta đặt tên cho kiểu dữ liệu giúp ghi nhớ này.

## 07. A1-02 — Cookie là một mẩu dữ liệu
**Loại:** TEACH
**Mục đích:** Hiểu Cookie là dữ liệu nhỏ, không phải chương trình.
**Lời dẫn giáo viên:** Cookie không phải là chiếc bánh và cũng không phải ứng dụng tự chạy. Trong bài học này, em có thể hình dung Cookie như một mẩu ghi nhớ nhỏ mà trình duyệt lưu theo quy tắc của website. Ví dụ language=vi có thể biểu thị ngôn ngữ Tiếng Việt. Khi gửi yêu cầu phù hợp về sau, trình duyệt có thể gửi lại mẩu thông tin đó.
**Học sinh làm:** Cho em nhắc lại bằng một câu: Cookie là gì và không phải là gì?
**Chuyển tiếp:** Để tránh nhầm, mình sẽ so Cookie với HTML và tên tệp chương trình.

## 08. A1-03 — Thẻ nào là dữ liệu ghi nhớ?
**Loại:** PRACTISE
**Mục đích:** Phân biệt dữ liệu Cookie ví dụ, mã HTML và tên tệp chương trình.
**Lời dẫn giáo viên:** Mình có ba thẻ: language=vi, một thẻ h1 của HTML và run.exe. Cả ba đều là chữ trên màn hình nhưng có thể đóng vai trò khác nhau. Em hãy tự xếp chúng vào ba nhóm và giải thích vì sao, rồi mới mở đối chiếu để kiểm tra dấu hiệu nhận biết từng thẻ.
**Học sinh làm:** Yêu cầu em phân loại và giải thích một thẻ rồi mới hiện đối chiếu.
**Chuyển tiếp:** Biết Cookie là dữ liệu rồi, câu hỏi tiếp theo là dữ liệu đến trình duyệt bằng đường nào.

## 09. A2-01 — Browser gửi yêu cầu xin trang
**Loại:** TEACH
**Mục đích:** Biết bước đầu khi mở website: Browser gửi HTTP Request.
**Lời dẫn giáo viên:** Khi em gõ địa chỉ web và nhấn Enter, trình duyệt cần xin tài nguyên từ máy chủ. Thông điệp xin đó gọi là HTTP Request. Em nhìn mũi tên trên hình: nó đi từ Browser sang Server. Hãy nói lại giúp cô chiều đi của Request bằng lời của em.
**Học sinh làm:** Cho em chỉ mũi tên từ Browser tới Server và dự đoán bước tiếp theo.
**Chuyển tiếp:** Máy chủ nhận yêu cầu rồi sẽ gửi câu trả lời; ta xem trong câu trả lời có gì.

## 10. A2-02 — Máy chủ gửi `Set-Cookie` ở đâu?
**Loại:** TEACH
**Mục đích:** Hiểu Set-Cookie được máy chủ gửi trong HTTP Response.
**Lời dẫn giáo viên:** Sau khi nhận Request, máy chủ trả về HTTP Response. Ngoài nội dung trang, Response có thể chứa phần tên là Set-Cookie với ví dụ language=vi. Em chú ý: máy chủ chỉ gửi đề nghị lưu dữ liệu; trình duyệt mới xét xem có lưu hay không. Hãy theo chiều mũi tên để phân biệt Response với Request nhé.
**Học sinh làm:** Cho em nói hai chiều Request và Response; bấm vào keyword khi cần chú giải.
**Chuyển tiếp:** Vậy nếu trình duyệt không đồng ý lưu Cookie thì chuyện gì xảy ra?

## 11. A2-03 — Browser chấp nhận hay chặn?
**Loại:** EXPLORE
**Mục đích:** Thử hai tình huống Browser chấp nhận hoặc chặn Cookie.
**Lời dẫn giáo viên:** Trên màn này em được làm người điều khiển trình duyệt. Hãy thử chọn “Chấp nhận”, bấm nút chạy rồi xem kết quả. Sau đó đổi sang “Chặn” và chạy lại. Cả hai lần, máy chủ vẫn gửi Set-Cookie, nhưng điều quan trọng là trình duyệt xử lý chỉ dẫn ấy khác nhau.
**Học sinh làm:** Để em tự thử cả hai lựa chọn và diễn đạt điều thay đổi; tránh giảng trước kết quả.
**Chuyển tiếp:** Nếu đã lưu Cookie, liệu trình duyệt sẽ gửi nó lại ngay trong mọi trường hợp không?

## 12. A2-04 — Khi nào Browser gửi lại Cookie?
**Loại:** EXPLORE
**Mục đích:** Biết Cookie chỉ được gửi lại trong Request phù hợp.
**Lời dẫn giáo viên:** Bây giờ giả sử trình duyệt đã lưu Cookie. Em thử đổi ba điều kiện: đã lưu hay chưa, còn hạn hay không, và yêu cầu có đúng phạm vi áp dụng không. Khi đủ điều kiện, trình duyệt có thể gửi Cookie trong HTTP Request trở lại máy chủ. Hãy thử làm một điều kiện sai và quan sát mũi tên cùng kết quả thay đổi.
**Học sinh làm:** Cho em thử một ca đủ điều kiện và ít nhất một ca không đủ điều kiện.
**Chuyển tiếp:** Mình sẽ đặt trường hợp chấp nhận và chặn cạnh nhau để dễ nhận ra khác biệt.

## 13. A2-05 — Chấp nhận và chặn khác nhau ở đâu?
**Loại:** COMPARE
**Mục đích:** So sánh kết quả của chấp nhận và chặn cùng một Cookie.
**Lời dẫn giáo viên:** Hai trường hợp đều bắt đầu từ việc máy chủ gửi Set-Cookie. Ở bên trái, trình duyệt chấp nhận và lưu; ở bên phải, nó từ chối lưu. Em dự đoán xem lần truy cập sau mỗi bên có thể gửi lại Cookie này hay không, rồi mới mở đối chiếu. Lưu ý: chặn Cookie này không có nghĩa website chắc chắn không thể ghi nhớ bằng cách nào khác.
**Học sinh làm:** Cho em dự đoán hai cột trước khi mở lời giải; hỏi vì sao.
**Chuyển tiếp:** Bây giờ hãy tự vẽ lại đường đi hai chiều mà không nhìn hình mẫu.

## 14. A2-06 — Vẽ lại hai chiều không nhìn mẫu
**Loại:** RECALL
**Mục đích:** Tự nhớ hai chiều Set-Cookie và Cookie mà không xem đáp án.
**Lời dẫn giáo viên:** Màn này là bài nhớ lại. Em đặt Browser một bên, Server một bên, rồi tự vẽ hai mũi tên: máy chủ gửi chỉ dẫn lưu Cookie theo chiều nào, và trình duyệt gửi Cookie đã lưu theo chiều nào? Cứ dùng giấy hoặc nói thành lời, chưa bấm xem đáp án. Khi em trình bày xong, chúng ta mới mở sơ đồ để kiểm tra.
**Học sinh làm:** Giữ đáp án ẩn cho tới khi em đã tự vẽ hoặc nói xong.
**Chuyển tiếp:** Đã hiểu đường đi, giờ ta xem Cookie có thể tồn tại trong bao lâu.

## 15. A3-00 — Một Cookie theo phiên, một Cookie có hạn
**Loại:** TEACH
**Mục đích:** Cung cấp kiến thức tiền đề về Session Cookie và Persistent Cookie trước khi học sinh dự đoán timeline.
**Lời dẫn giáo viên:** Để đoán Cookie có thể còn vào ngày mai hay không, ta cần hiểu hai cách đặt thời hạn. Session Cookie không có hạn cố định trong ví dụ và thường theo phiên trình duyệt. Persistent Cookie có thời hạn được khai báo, ví dụ năm ngày. Khi áp dụng, còn phải xem Cookie có bị xóa hoặc trình duyệt có khôi phục phiên hay không.
**Học sinh làm:** Quan sát hai trường hợp, nêu điểm khác nhau; không bắt nhập biểu mẫu.
**Chuyển tiếp:** Bây giờ thử dự đoán cả hai Cookie ở ba thời điểm trên timeline.

## 16. A3-01 — Cookie nào còn vào ngày mai?
**Loại:** EXPLORE
**Mục đích:** Hình dung thời gian tồn tại của Session Cookie và Persistent Cookie.
**Lời dẫn giáo viên:** Em nhìn ba mốc: đang duyệt web, khi phiên kết thúc và ngày hôm sau. Theo em hai loại Cookie có thể còn ở mốc nào? Em cứ dự đoán trước nhé. Sau khi mở kết quả, mình mới cùng giải thích thời hạn của Session Cookie và Persistent Cookie, đồng thời xem vì sao đóng một tab chưa chắc là kết thúc phiên.
**Học sinh làm:** Để em dự đoán trước khi bấm hiện timeline, sau đó chỉ vào từng mốc giải thích.
**Chuyển tiếp:** Nếu thay đổi thời hạn của cùng một Cookie, nó sẽ được xếp vào loại nào?

## 17. A3-02 — Cùng giỏ hàng, khác thời hạn
**Loại:** COMPARE
**Mục đích:** Hiểu việc phân loại Session/Persistent phụ thuộc thời hạn, không phải công dụng.
**Lời dẫn giáo viên:** Xem ví dụ mã giỏ hàng cart_id=C104. Dù dùng để nhớ giỏ hàng, nếu không đặt thời hạn cố định nó có thể là Session Cookie; còn nếu đặt hạn bảy ngày, đó là Persistent Cookie. Tên và mục đích vẫn giống nhau, chỉ cách đặt thời hạn thay đổi. Em thử cho biết điểm nào làm thay đổi cách phân loại.
**Học sinh làm:** Cho em so sánh hai trạng thái của cùng một mã giỏ hàng.
**Chuyển tiếp:** Mình thử không nhìn bảng, tự nói hai loại Cookie khác nhau ở đâu.

## 18. A3-03 — Session khác Persistent như thế nào?
**Loại:** RECALL
**Mục đích:** Tự giải thích sự khác nhau giữa Session và Persistent.
**Lời dẫn giáo viên:** Không nhìn lại bảng trước, em thử giải thích Session Cookie và Persistent Cookie khác nhau ở điểm nào. Sau đó em tự đưa một ví dụ về việc Cookie có thể biến mất sớm hơn dự kiến. Khi em nói xong, cô sẽ giúp kiểm tra và bổ sung những trường hợp còn thiếu; mình không phân biệt hai loại chỉ bằng RAM hay ổ cứng nhé.
**Học sinh làm:** Cho em nêu hai khác biệt và một điều kiện Cookie mất sớm; chỉ mở đối chiếu sau.
**Chuyển tiếp:** Biết Cookie sống bao lâu rồi, giờ ta xem nó giúp website làm việc gì.

## 19. A4-01 — Một Cookie, nhiều mục đích sử dụng
**Loại:** PRACTISE
**Mục đích:** Nhận ra các mục đích sử dụng Cookie khác nhau.
**Lời dẫn giáo viên:** Cookie không chỉ dùng để quảng cáo. Hãy nhìn ba tình huống: giữ giỏ hàng, ghi nhớ ngôn ngữ và phân tích hoạt động trên website. Với từng tình huống, em thử nói website cần nhớ thông tin nào. Lưu ý đây là các ví dụ khác nhau, không phải mọi website đều làm giống hệt như vậy.
**Học sinh làm:** Cho em ghép SHOP, LANGUAGE, ANALYTICS với công dụng và giải thích một lựa chọn.
**Chuyển tiếp:** Có một hiểu lầm phổ biến: Cookie tồn tại lâu có chắc để theo dõi không?

## 20. A4-02 — Sống lâu có đồng nghĩa theo dõi?
**Loại:** PRACTISE
**Mục đích:** Không đánh đồng Cookie lưu lâu với Cookie dùng để theo dõi.
**Lời dẫn giáo viên:** Trên màn có câu: “Mọi Persistent Cookie đều là Tracking Cookie”. Em thử cho biết đúng hay sai và đưa một trường hợp để chứng minh. Sau khi em chọn xong, mình sẽ đối chiếu hai ý: Persistent nói về thời gian tồn tại, còn Tracking nói về mục đích sử dụng; một Cookie nhớ ngôn ngữ nhiều ngày là phản ví dụ.
**Học sinh làm:** Yêu cầu em chọn đúng/sai và nêu phản ví dụ trước khi đối chiếu.
**Chuyển tiếp:** Giờ em thử trở thành người giải thích Cookie cho một bạn khác.

## 21. A4-03 — Giải thích Cookie cho một người bạn
**Loại:** TEACH_BACK
**Mục đích:** Tự giảng lại cơ chế và công dụng Cookie bằng ví dụ.
**Lời dẫn giáo viên:** Em chọn một ví dụ em dễ hiểu nhất: ngôn ngữ, giỏ hàng hoặc một tình huống được đưa ra trên màn. Trong khoảng nửa phút đến một phút, hãy giải thích dữ liệu nào cần nhớ, dữ liệu được gửi đi khi nào, để làm gì và cần lưu ý gì về quyền riêng tư. Cứ nói theo lời của em, cô chỉ hỏi thêm nếu thiếu ý quan trọng.
**Học sinh làm:** Cho em nói 30–60 giây, giáo viên nghe và chỉ gợi ý tăng dần khi cần.
**Chuyển tiếp:** Sau đây là một website khác để em tự vận dụng, không xem lại gợi ý.

## 22. A5-01 — Thử sức với website câu lạc bộ
**Loại:** ASSESS_INTRO
**Mục đích:** Đọc tình huống đánh giá mới và chuẩn bị làm độc lập.
**Lời dẫn giáo viên:** Bây giờ đổi sang website câu lạc bộ giả định. Website này có theme=dark với thời hạn năm ngày và session_id=K25 không đặt hạn lưu lâu dài. Em đọc kỹ hai dữ kiện ấy và xem câu hỏi yêu cầu gì. Khi bắt đầu bài tiếp theo, em sẽ làm độc lập; cô sẽ không gợi ý nội dung hoặc mở lời giải.
**Học sinh làm:** Chỉ làm rõ cách đọc dữ kiện, không giải thích hộ cơ chế/đáp án.
**Chuyển tiếp:** Chuyển sang ba câu hỏi A, B, C của bài vận dụng.

## 23. A5-02 — Vận dụng: Cơ chế, thời hạn, mục đích
**Loại:** ASSESS
**Mục đích:** Kiểm tra độc lập: giải thích cơ chế, thời hạn và mục đích/quyền riêng tư.
**Lời dẫn giáo viên:** Em tự làm ba phần A, B và C dựa trên website câu lạc bộ vừa đọc. Phần A nói về chiều thông điệp và Cookie, phần B nói về thời hạn, phần C nói về công dụng và quyền riêng tư. Em có thể ghi ngắn gọn theo ý hiểu. Cô chỉ hướng dẫn cách nộp bài nếu cần, không nhắc lại kiến thức hay đưa đáp án trong lúc làm.
**Học sinh làm:** Giáo viên không mở lời giải hoặc chú giải nội dung; chỉ hỗ trợ thao tác và ghi nhận bài làm.
**Chuyển tiếp:** Sau khi hoàn thành đánh giá, tiếp tục ôn tập bằng sơ đồ tự nhớ.

## 24. P07-01 — Nhớ lại Cookie bằng bốn nhánh
**Loại:** RECALL
**Mục đích:** Hệ thống hóa toàn bộ bài bằng sơ đồ tư duy do học sinh tự vẽ.
**Lời dẫn giáo viên:** Em lấy một tờ giấy, đặt chữ Cookie ở giữa rồi vẽ bốn nhánh: cách hoạt động, thời gian tồn tại, công dụng và quyền riêng tư. Đừng nhìn tài liệu trước. Mỗi nhánh em thử viết vài từ khóa mình nhớ được. Sau đó mới đối chiếu để thấy phần nào em còn thiếu và cần ôn lại.
**Học sinh làm:** Để em vẽ bốn nhánh trước, giáo viên chỉ hỏi thêm nếu bỏ sót một nhánh.
**Chuyển tiếp:** Cuối cùng mình dùng thẻ thuật ngữ để nói lại cả hành trình Cookie.

## 25. P07-02 — Giải thích lại hành trình Cookie
**Loại:** RECALL_TEACH_BACK
**Mục đích:** Củng cố thuật ngữ và giảng lại hành trình Cookie bằng lời của học sinh.
**Lời dẫn giáo viên:** Mỗi thẻ sẽ hiện một từ khóa. Trước khi lật, em tự nói nghĩa của từ ấy; sau đó xem lại để tự sửa nếu cần. Khi ôn xong, em hãy dùng sơ đồ đã vẽ để kể lại hai lượt truy cập và đường đi của Cookie trong một đến hai phút. Cô chỉ giúp đối chiếu các bước sau khi em kể xong.
**Học sinh làm:** Cho em tự nhớ trước khi lật thẻ và tự giảng lại, không yêu cầu học thuộc nguyên văn.
**Chuyển tiếp:** Đây là nội dung em có thể dùng để ôn lại trước buổi học sau.
