/* Lời dẫn cho người duyệt, tách biệt khỏi phần học sinh. */
window.TEACHER_NOTES = {
  "P00-01": {
    "purpose": "Gây tò mò: cùng một website nhưng lần sau vẫn nhớ lựa chọn ngôn ngữ.",
    "say": "Em nhìn hai lần mở trang nhé. Hôm qua mình chọn Tiếng Việt, hôm nay mở lại thì vẫn thấy Tiếng Việt. Theo em, website cần nhớ điều gì để làm được như vậy? Có nhất thiết phải nhớ cả trang web không? Cứ nói suy nghĩ đầu tiên của em, chưa cần đúng ngay.",
    "student_task": "Cho em quan sát hình hôm qua–hôm nay; chờ em nêu một dự đoán.",
    "transition": "Để tìm lời giải, ta cần nhớ trình duyệt và máy chủ trao đổi với nhau như thế nào."
  },
  "D0-01": {
    "purpose": "Kiểm tra nhanh kiến thức nền về chiều gửi yêu cầu và phản hồi.",
    "say": "Tưởng tượng em mở một địa chỉ web. Có một bên đi xin nội dung và một bên trả nội dung. Em thử chỉ chiều mũi tên từ trình duyệt đến máy chủ xem chiều nào là yêu cầu nhé. Nếu chưa chắc cũng không sao, đây là phần kiểm tra để biết mình cần ôn điều gì.",
    "student_task": "Cho em chọn một chiều trước khi giải thích; chưa chấm điểm, chưa công bố đáp án trước.",
    "transition": "Sau hai thông điệp, ta thử đọc một mẩu dữ liệu có thể đi cùng website."
  },
  "D0-02": {
    "purpose": "Kiểm tra khả năng đọc một cặp tên–giá trị trước khi giới thiệu Cookie.",
    "say": "Trên màn hình có dòng language=vi. Em thử đoán hai phần nằm hai bên dấu bằng nói về điều gì. Đây chỉ là một đoạn dữ liệu ví dụ, không phải câu lệnh phải chạy. Em đoán trước, sau đó mình mới mở phần giải thích để đối chiếu.",
    "student_task": "Để em tự nói ý nghĩa của language và vi; sau đó mới bấm hiện giải thích.",
    "transition": "Bây giờ quay lại câu chuyện website tự nhớ tiếng Việt."
  },
  "A1-01": {
    "purpose": "Nhận ra thông tin website cần ghi nhớ có thể rất nhỏ.",
    "say": "Hãy so sánh hai hình của cùng một website. Lần đầu người dùng đổi từ tiếng Anh sang tiếng Việt; lần sau trang vẫn hiển thị tiếng Việt. Website có thể chỉ cần lưu câu trả lời cho câu hỏi “ngôn ngữ được chọn là gì”. Em thử nêu xem phần nào của trang đã thay đổi và phần nào vẫn giữ nguyên.",
    "student_task": "Cho em chỉ ra lựa chọn ngôn ngữ được giữ lại; không nói ngay tên Cookie.",
    "transition": "Giờ chúng ta đặt tên cho kiểu dữ liệu giúp ghi nhớ này."
  },
  "A1-02": {
    "purpose": "Hiểu Cookie là dữ liệu nhỏ, không phải chương trình.",
    "say": "Cookie không phải là chiếc bánh và cũng không phải ứng dụng tự chạy. Trong bài học này, em có thể hình dung Cookie như một mẩu ghi nhớ nhỏ mà trình duyệt lưu theo quy tắc của website. Ví dụ language=vi có thể biểu thị ngôn ngữ Tiếng Việt. Khi gửi yêu cầu phù hợp về sau, trình duyệt có thể gửi lại mẩu thông tin đó.",
    "student_task": "Cho em nhắc lại bằng một câu: Cookie là gì và không phải là gì?",
    "transition": "Để tránh nhầm, mình sẽ so Cookie với HTML và tên tệp chương trình."
  },
  "A1-03": {
    "purpose": "Phân biệt dữ liệu Cookie ví dụ, mã HTML và tên tệp chương trình.",
    "say": "Mình có ba thẻ: language=vi, một thẻ h1 của HTML và run.exe. Cả ba đều là chữ trên màn hình nhưng có thể đóng vai trò khác nhau. Em hãy tự xếp chúng vào ba nhóm và giải thích vì sao, rồi mới mở đối chiếu để kiểm tra dấu hiệu nhận biết từng thẻ.",
    "student_task": "Yêu cầu em phân loại và giải thích một thẻ rồi mới hiện đối chiếu.",
    "transition": "Biết Cookie là dữ liệu rồi, câu hỏi tiếp theo là dữ liệu đến trình duyệt bằng đường nào."
  },
  "A2-01": {
    "purpose": "Biết bước đầu khi mở website: Browser gửi HTTP Request.",
    "say": "Khi em gõ địa chỉ web và nhấn Enter, trình duyệt cần xin tài nguyên từ máy chủ. Thông điệp xin đó gọi là HTTP Request. Em nhìn mũi tên trên hình: nó đi từ Browser sang Server. Hãy nói lại giúp cô chiều đi của Request bằng lời của em.",
    "student_task": "Cho em chỉ mũi tên từ Browser tới Server và dự đoán bước tiếp theo.",
    "transition": "Máy chủ nhận yêu cầu rồi sẽ gửi câu trả lời; ta xem trong câu trả lời có gì."
  },
  "A2-02": {
    "purpose": "Hiểu Set-Cookie được máy chủ gửi trong HTTP Response.",
    "say": "Sau khi nhận Request, máy chủ trả về HTTP Response. Ngoài nội dung trang, Response có thể chứa phần tên là Set-Cookie với ví dụ language=vi. Em chú ý: máy chủ chỉ gửi đề nghị lưu dữ liệu; trình duyệt mới xét xem có lưu hay không. Hãy theo chiều mũi tên để phân biệt Response với Request nhé.",
    "student_task": "Cho em nói hai chiều Request và Response; bấm vào keyword khi cần chú giải.",
    "transition": "Vậy nếu trình duyệt không đồng ý lưu Cookie thì chuyện gì xảy ra?"
  },
  "A2-03": {
    "purpose": "Thử hai tình huống Browser chấp nhận hoặc chặn Cookie.",
    "say": "Trên màn này em được làm người điều khiển trình duyệt. Hãy thử chọn “Chấp nhận”, bấm nút chạy rồi xem kết quả. Sau đó đổi sang “Chặn” và chạy lại. Cả hai lần, máy chủ vẫn gửi Set-Cookie, nhưng điều quan trọng là trình duyệt xử lý chỉ dẫn ấy khác nhau.",
    "student_task": "Để em tự thử cả hai lựa chọn và diễn đạt điều thay đổi; tránh giảng trước kết quả.",
    "transition": "Nếu đã lưu Cookie, liệu trình duyệt sẽ gửi nó lại ngay trong mọi trường hợp không?"
  },
  "A2-04": {
    "purpose": "Biết Cookie chỉ được gửi lại trong Request phù hợp.",
    "say": "Bây giờ giả sử trình duyệt đã lưu Cookie. Em thử đổi ba điều kiện: đã lưu hay chưa, còn hạn hay không, và yêu cầu có đúng phạm vi áp dụng không. Khi đủ điều kiện, trình duyệt có thể gửi Cookie trong HTTP Request trở lại máy chủ. Hãy thử làm một điều kiện sai và quan sát mũi tên cùng kết quả thay đổi.",
    "student_task": "Cho em thử một ca đủ điều kiện và ít nhất một ca không đủ điều kiện.",
    "transition": "Mình sẽ đặt trường hợp chấp nhận và chặn cạnh nhau để dễ nhận ra khác biệt."
  },
  "A2-05": {
    "purpose": "So sánh kết quả của chấp nhận và chặn cùng một Cookie.",
    "say": "Hai trường hợp đều bắt đầu từ việc máy chủ gửi Set-Cookie. Ở bên trái, trình duyệt chấp nhận và lưu; ở bên phải, nó từ chối lưu. Em dự đoán xem lần truy cập sau mỗi bên có thể gửi lại Cookie này hay không, rồi mới mở đối chiếu. Lưu ý: chặn Cookie này không có nghĩa website chắc chắn không thể ghi nhớ bằng cách nào khác.",
    "student_task": "Cho em dự đoán hai cột trước khi mở lời giải; hỏi vì sao.",
    "transition": "Bây giờ hãy tự vẽ lại đường đi hai chiều mà không nhìn hình mẫu."
  },
  "A2-06": {
    "purpose": "Tự nhớ hai chiều Set-Cookie và Cookie mà không xem đáp án.",
    "say": "Trước khi xem lại sơ đồ hoặc câu trả lời mẫu, em lần lượt xem các hình/từ khóa. Mỗi hình em nói điều nhớ được rồi ghi 2–3 từ khóa vào vở. Khi hoàn tất mới mở đối chiếu. Nếu chưa đúng, sửa ngay trong vở.",
    "student_task": "Nói từ trí nhớ, ghi vở và đối chiếu; A4-03 có thêm việc giảng lại ví dụ cho người khác.",
    "transition": "Đã hiểu đường đi, giờ ta xem Cookie có thể tồn tại trong bao lâu."
  },
  "A3-01": {
    "purpose": "Hình dung thời gian tồn tại của Session Cookie và Persistent Cookie.",
    "say": "Em nhìn ba mốc: đang duyệt web, khi phiên kết thúc và ngày hôm sau. Theo em hai loại Cookie có thể còn ở mốc nào? Em cứ dự đoán trước nhé. Sau khi mở kết quả, mình mới cùng giải thích thời hạn của Session Cookie và Persistent Cookie, đồng thời xem vì sao đóng một tab chưa chắc là kết thúc phiên.",
    "student_task": "Để em dự đoán trước khi bấm hiện timeline, sau đó chỉ vào từng mốc giải thích.",
    "transition": "Nếu thay đổi thời hạn của cùng một Cookie, nó sẽ được xếp vào loại nào?"
  },
  "A3-02": {
    "purpose": "Hiểu việc phân loại Session/Persistent phụ thuộc thời hạn, không phải công dụng.",
    "say": "Xem ví dụ mã giỏ hàng cart_id=C104. Dù dùng để nhớ giỏ hàng, nếu không đặt thời hạn cố định nó có thể là Session Cookie; còn nếu đặt hạn bảy ngày, đó là Persistent Cookie. Tên và mục đích vẫn giống nhau, chỉ cách đặt thời hạn thay đổi. Em thử cho biết điểm nào làm thay đổi cách phân loại.",
    "student_task": "Cho em so sánh hai trạng thái của cùng một mã giỏ hàng.",
    "transition": "Mình thử không nhìn bảng, tự nói hai loại Cookie khác nhau ở đâu."
  },
  "A3-03": {
    "purpose": "Tự giải thích sự khác nhau giữa Session và Persistent.",
    "say": "Trước khi xem lại sơ đồ hoặc câu trả lời mẫu, em lần lượt xem các hình/từ khóa. Mỗi hình em nói điều nhớ được rồi ghi 2–3 từ khóa vào vở. Khi hoàn tất mới mở đối chiếu. Nếu chưa đúng, sửa ngay trong vở.",
    "student_task": "Nói từ trí nhớ, ghi vở và đối chiếu; A4-03 có thêm việc giảng lại ví dụ cho người khác.",
    "transition": "Biết Cookie sống bao lâu rồi, giờ ta xem nó giúp website làm việc gì."
  },
  "A4-01": {
    "purpose": "Nhận ra các mục đích sử dụng Cookie khác nhau.",
    "say": "Cookie không chỉ dùng để quảng cáo. Hãy nhìn ba tình huống: giữ giỏ hàng, ghi nhớ ngôn ngữ và phân tích hoạt động trên website. Với từng tình huống, em thử nói website cần nhớ thông tin nào. Lưu ý đây là các ví dụ khác nhau, không phải mọi website đều làm giống hệt như vậy.",
    "student_task": "Cho em ghép SHOP, LANGUAGE, ANALYTICS với công dụng và giải thích một lựa chọn.",
    "transition": "Có một hiểu lầm phổ biến: Cookie tồn tại lâu có chắc để theo dõi không?"
  },
  "A4-02": {
    "purpose": "Không đánh đồng Cookie lưu lâu với Cookie dùng để theo dõi.",
    "say": "Trên màn có câu: “Mọi Persistent Cookie đều là Tracking Cookie”. Em thử cho biết đúng hay sai và đưa một trường hợp để chứng minh. Sau khi em chọn xong, mình sẽ đối chiếu hai ý: Persistent nói về thời gian tồn tại, còn Tracking nói về mục đích sử dụng; một Cookie nhớ ngôn ngữ nhiều ngày là phản ví dụ.",
    "student_task": "Yêu cầu em chọn đúng/sai và nêu phản ví dụ trước khi đối chiếu.",
    "transition": "Giờ em thử trở thành người giải thích Cookie cho một bạn khác."
  },
  "A4-03": {
    "purpose": "Tự giảng lại cơ chế và công dụng Cookie bằng ví dụ.",
    "say": "Em chọn một tình huống, lần lượt xem ba gợi ý rồi tự nói và viết ý chính trước khi đối chiếu. Sau cùng hãy thử giảng lại trong khoảng 30–60 giây như đang nói với một bạn chưa học Cookie.",
    "student_task": "Nói từ trí nhớ, ghi vở và đối chiếu; A4-03 có thêm việc giảng lại ví dụ cho người khác.",
    "transition": "Sau đây là một website khác để em tự vận dụng, không xem lại gợi ý."
  },
  "A5-01": {
    "purpose": "Đọc tình huống đánh giá mới và chuẩn bị làm độc lập.",
    "say": "Bây giờ đổi sang website câu lạc bộ giả định. Website này có theme=dark với thời hạn năm ngày và session_id=K25 không đặt hạn lưu lâu dài. Em đọc kỹ hai dữ kiện ấy và xem câu hỏi yêu cầu gì. Khi bắt đầu bài tiếp theo, em sẽ làm độc lập; cô sẽ không gợi ý nội dung hoặc mở lời giải.",
    "student_task": "Chỉ làm rõ cách đọc dữ kiện, không giải thích hộ cơ chế/đáp án.",
    "transition": "Chuyển sang ba câu hỏi A, B, C của bài vận dụng."
  },
  "A5-02": {
    "purpose": "Kiểm tra độc lập: giải thích cơ chế, thời hạn và mục đích/quyền riêng tư.",
    "say": "Em tự làm ba phần A, B và C dựa trên website câu lạc bộ vừa đọc. Phần A nói về chiều thông điệp và Cookie, phần B nói về thời hạn, phần C nói về công dụng và quyền riêng tư. Em có thể ghi ngắn gọn theo ý hiểu. Cô chỉ hướng dẫn cách nộp bài nếu cần, không nhắc lại kiến thức hay đưa đáp án trong lúc làm.",
    "student_task": "Giáo viên không mở lời giải hoặc chú giải nội dung; chỉ hỗ trợ thao tác và ghi nhận bài làm.",
    "transition": "Sau khi hoàn thành đánh giá, tiếp tục ôn tập bằng sơ đồ tự nhớ."
  },
  "P07-01": {
    "purpose": "Hệ thống hóa toàn bộ bài bằng sơ đồ tư duy do học sinh tự vẽ.",
    "say": "Em lấy một tờ giấy, đặt chữ Cookie ở giữa rồi vẽ bốn nhánh: cách hoạt động, thời gian tồn tại, công dụng và quyền riêng tư. Đừng nhìn tài liệu trước. Mỗi nhánh em thử viết vài từ khóa mình nhớ được. Sau đó mới đối chiếu để thấy phần nào em còn thiếu và cần ôn lại.",
    "student_task": "Để em vẽ bốn nhánh trước, giáo viên chỉ hỏi thêm nếu bỏ sót một nhánh.",
    "transition": "Cuối cùng mình dùng thẻ thuật ngữ để nói lại cả hành trình Cookie."
  },
  "P07-02": {
    "purpose": "Củng cố thuật ngữ và giảng lại hành trình Cookie bằng lời của học sinh.",
    "say": "Mỗi thẻ sẽ hiện một từ khóa. Trước khi lật, em tự nói nghĩa của từ ấy; sau đó xem lại để tự sửa nếu cần. Khi ôn xong, em hãy dùng sơ đồ đã vẽ để kể lại hai lượt truy cập và đường đi của Cookie trong một đến hai phút. Cô chỉ giúp đối chiếu các bước sau khi em kể xong.",
    "student_task": "Cho em tự nhớ trước khi lật thẻ và tự giảng lại, không yêu cầu học thuộc nguyên văn.",
    "transition": "Đây là nội dung em có thể dùng để ôn lại trước buổi học sau."
  },
  "D0-R01": {
    "purpose": "Ôn hai chiều Request/Response khi kết quả chẩn đoán D0-01 chưa đúng.",
    "say": "Em quan sát sơ đồ. Browser là nơi em dùng để mở trang, còn Server là nơi trả dữ liệu. Em thử ghép hai chiều cho yêu cầu và phản hồi. Không cần ghi dài: chỉ mũi tên và nói lý do là đủ.",
    "student_task": "Thử chọn hai chiều trên sơ đồ, tự nói lại bằng lời; chưa chắc có thể chuyển tiếp với hỗ trợ.",
    "transition": "Bây giờ em thử đọc một mẩu dữ liệu đơn giản."
  },
  "D0-R02": {
    "purpose": "Ôn cấu trúc tên–giá trị trước khi giới thiệu dữ liệu Cookie.",
    "say": "Nhìn theme=dark: theme là tên một lựa chọn của website, dark là giá trị có nghĩa giao diện tối. Vậy với language=vi, theo em tên và giá trị là gì? Em thử chỉ từng phần nhé.",
    "student_task": "Giải thích theme=dark và thử kiểm tra language=vi; không ghi nhận tự động là thành thạo.",
    "transition": "Ta quay lại hiện tượng website ghi nhớ ngôn ngữ."
  },
  "A3-00": {
    "purpose": "Cung cấp kiến thức tiền đề về Session Cookie và Persistent Cookie trước khi học sinh dự đoán timeline.",
    "say": "Để đoán Cookie có thể còn vào ngày mai hay không, ta cần hiểu hai cách đặt thời hạn. Session Cookie không có hạn cố định trong ví dụ và thường theo phiên trình duyệt. Persistent Cookie có thời hạn được khai báo, ví dụ năm ngày. Khi áp dụng, còn phải xem Cookie có bị xóa hoặc trình duyệt có khôi phục phiên hay không.",
    "student_task": "Quan sát hai trường hợp, nêu điểm khác nhau; không bắt nhập biểu mẫu.",
    "transition": "Bây giờ thử dự đoán cả hai Cookie ở ba thời điểm trên timeline."
  },
  "A1-04": {
    "purpose": "Tự nhớ lại khái niệm, một ví dụ và điều Cookie không phải.",
    "say": "Cô sẽ lần lượt hiện ba gợi ý: lựa chọn Tiếng Việt, language=vi và Cookie. Em không xem mẫu, hãy nói lại ý nghĩa rồi ghi 2–3 từ khóa vào vở. Sau đó mới bấm đối chiếu và sửa ý còn thiếu.",
    "student_task": "Quan sát 3 gợi ý tuần tự; nói trước, ghi vở rồi đối chiếu.",
    "transition": "Tiếp theo là ba câu ôn ngắn để kiểm tra kiến thức phần 1."
  },
  "A1-05": {
    "purpose": "Kiểm tra phân biệt dữ liệu, tên–giá trị và bản chất Cookie.",
    "say": "Ba câu này kiểm tra chính phần vừa học. Em trả lời từng câu trước khi bấm kiểm tra; nếu sai hãy sửa dựa trên lời giải ngắn. Không cần viết đoạn văn.",
    "student_task": "Trả lời ba câu bằng lựa chọn, ghép ý và đúng/sai.",
    "transition": "Đã hiểu Cookie là dữ liệu; tiếp theo ta xem cách nó được gửi."
  },
  "A2-07": {
    "purpose": "Củng cố đường đi Request/Response và điều kiện gửi Cookie.",
    "say": "Em thử bốn dạng: chọn chiều Request, tìm Set-Cookie, sắp xếp các bước và chọn điều kiện Browser gửi lại Cookie. Sai chỗ nào, em xem lại mũi tên và thử một lần nữa.",
    "student_task": "Trả lời bốn câu qua ba dạng lựa chọn, sắp xếp và chọn nhiều.",
    "transition": "Tiếp theo học hai loại Cookie theo thời hạn."
  },
  "A3-04": {
    "purpose": "Củng cố phân loại Session/Persistent và các trường hợp hết hiệu lực.",
    "say": "Em ghép hai loại Cookie dựa trên thời hạn, rồi trả lời hai tình huống: Cookie có thể bị xóa trước hạn không? Hãy giải thích tại sao.",
    "student_task": "Trả lời ba câu ghép đôi, đúng/sai và tình huống.",
    "transition": "Đã hiểu thời hạn; giờ tìm hiểu Cookie dùng để làm gì."
  },
  "A4-04": {
    "purpose": "Củng cố công dụng, phân biệt tracking và hiểu quyền lựa chọn.",
    "say": "Ba câu cuối phần giúp em tách ba ý: Cookie dùng để làm gì, sống lâu có đồng nghĩa theo dõi không, và khi đọc thông báo Cookie cần xem điều gì. Hãy thử trước khi xem phản hồi.",
    "student_task": "Trả lời ba câu ghép đôi, đúng/sai và chọn nhiều.",
    "transition": "Bây giờ chuyển sang một website mới để vận dụng độc lập."
  }
};
