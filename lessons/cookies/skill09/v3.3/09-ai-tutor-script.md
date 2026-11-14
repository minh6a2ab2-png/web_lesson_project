# 09 – KỊCH BẢN TRỢ GIẢNG TỪNG MÀN (SCRIPTED, KHÔNG PHẢI AI TẠO SINH)

Lời thoại được viết riêng cho từng scene. Gợi ý H3 chỉ sau khi học sinh đã thử; EXIT không có gợi ý về nội dung. Phản hồi dạng mẫu, chưa phải thuật toán chấm tự động.

## 01. P00-01 – Một website có thể nhớ em?
- **Lời dẫn khi vào trang:** “Hôm qua em chọn Tiếng Việt. Hôm nay trang vẫn hiện Tiếng Việt. Vì sao nhỉ? Hãy dự đoán, chưa cần học tên cơ chế.”
- **Nhắc nhiệm vụ:** “Hãy điền một câu: “Có thể website đã nhớ …”.”
- **H1 (theo yêu cầu):** “Hãy tìm điểm giống nhau giữa hôm qua và hôm nay.”
- **H2 (theo yêu cầu):** “Em đã chọn điều gì trong lần truy cập trước?”
- **H3 (chỉ sau lượt thử):** “Một website có thể cần lưu lại một lựa chọn, ví dụ màu giao diện. Em thử liên hệ với ngôn ngữ.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Dự đoán của em có nêu được thông tin cần nhớ. Hãy giữ lại để cuối bài đối chiếu với kiến thức mới.”
- **Phản hồi khi cần sửa:** “Không cần đoán đúng ngay. Hãy nói rõ thông tin nào cần giữ, thay vì đoán tên một công nghệ.”
- **Khi học sinh chưa biết bắt đầu:** “Nếu chưa nghĩ ra, em có thể ghi: “Em chưa biết website nhớ bằng cách nào” rồi chọn một thông tin có thể cần lưu.”
- **Hiểu nhầm cần phát hiện:** Bắt buộc biết chính xác Cookie ngay từ câu hỏi mở đầu.
- **Lời chuyển tiếp:** “Bây giờ em kiểm tra trước xem trình duyệt và máy chủ trao đổi với nhau ra sao.”

## 02. D0-01 – Ai xin trang? Ai trả trang?
- **Lời dẫn khi vào trang:** “Trước khi tìm hiểu Cookie, mình cần biết ai xin trang và ai trả trang. Em hãy thử vẽ hai mũi tên nhé.”
- **Nhắc nhiệm vụ:** “Chọn hướng của Request trước, rồi tới Response.”
- **H1 (theo yêu cầu):** “Khi em bấm mở website, phần mềm nào đang gửi yêu cầu?”
- **H2 (theo yêu cầu):** “Hãy phân biệt yêu cầu xin trang với lời trả lời. Chúng đi ngược chiều.”
- **H3 (chỉ sau lượt thử):** “Thử liên tưởng em hỏi thư viện một cuốn sách; thư viện gửi kết quả lại. Em đặt hai bên tương ứng.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Hai chiều em đặt hợp lý. Hãy nói: Request là yêu cầu, Response là lời phản hồi.”
- **Phản hồi khi cần sửa:** “Hãy kiểm tra bên nào là người yêu cầu trang, rồi đổi lại hướng đang nhầm.”
- **Khi học sinh chưa biết bắt đầu:** “Em có thể chọn một mũi tên trước; chưa cần giải quyết cả hai cùng lúc.”
- **Hiểu nhầm cần phát hiện:** Tưởng Server luôn chủ động gửi trang trước khi Browser yêu cầu.
- **Lời chuyển tiếp:** “Mình đã biết hai bên trao đổi. Tiếp theo xem một mẩu dữ liệu có thể mang ý nghĩa gì.”

## 03. D0-02 – Một mẩu dữ liệu có ý nghĩa gì?
- **Lời dẫn khi vào trang:** “Em vừa biết trình duyệt và máy chủ có thể trao đổi thông tin. Giờ mình thử đọc một mẩu dữ liệu rất nhỏ.”
- **Nhắc nhiệm vụ:** “Em thử hoàn thành câu “language=vi có thể nói rằng …”.”
- **H1 (theo yêu cầu):** “`language` là từ tiếng Anh gần nghĩa với gì?”
- **H2 (theo yêu cầu):** “`vi` thường được dùng để viết tắt ngôn ngữ nào?”
- **H3 (chỉ sau lượt thử):** “Tương tự `theme=dark` diễn tả lựa chọn giao diện tối. Em thử giải thích `language=vi`.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã giải thích được tên và giá trị. Đây là dữ liệu minh họa, chưa phải một câu lệnh.”
- **Phản hồi khi cần sửa:** “Hãy tách chuỗi thành tên ở trái và giá trị ở phải; đừng coi nó là một chương trình.”
- **Khi học sinh chưa biết bắt đầu:** “Nếu chưa biết “vi”, em có thể đoán từ “language” trước.”
- **Hiểu nhầm cần phát hiện:** Cho rằng dấu bằng biến chuỗi này thành chương trình tự chạy.
- **Lời chuyển tiếp:** “Bây giờ dùng mẩu dữ liệu tương tự để khám phá chuyện website nhớ ngôn ngữ.”

## 04. A1-01 – Vì sao lần sau vẫn là tiếng Việt?
- **Lời dẫn khi vào trang:** “Cùng một trang web, nhưng hai lần em truy cập lại có kết quả giống lựa chọn cũ. Hãy quan sát thật kỹ.”
- **Nhắc nhiệm vụ:** “Chỉ ghi điều cần nhớ, đừng vội đoán cách lưu.”
- **H1 (theo yêu cầu):** “Ở lần đầu, em đã thực hiện thao tác gì?”
- **H2 (theo yêu cầu):** “Thông tin cần nhớ là cả trang web, hay chỉ một lựa chọn nhỏ?”
- **H3 (chỉ sau lượt thử):** “Ví dụ máy ghi `theme=dark` thay vì chụp cả trang. Ngôn ngữ có thể được ghi theo cách tương tự.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Dữ liệu em nêu đủ để diễn tả lựa chọn ngôn ngữ. Màn sau sẽ gọi tên một cơ chế có thể dùng.”
- **Phản hồi khi cần sửa:** “Nếu em muốn lưu cả trang, thử rút gọn thành đúng điều người dùng đã chọn.”
- **Khi học sinh chưa biết bắt đầu:** “Hãy thử viết hai từ: tên lựa chọn và giá trị của lựa chọn.”
- **Hiểu nhầm cần phát hiện:** Nghĩ website phải ghi lại toàn bộ giao diện mới có thể nhớ ngôn ngữ.
- **Lời chuyển tiếp:** “Chúng ta sẽ tìm hiểu một loại dữ liệu mà trình duyệt có thể quản lý cho website.”

## 05. A1-02 – Cookie là một mẩu dữ liệu
- **Lời dẫn khi vào trang:** “Đến đây em đã thấy dữ liệu có thể giúp website nhớ lựa chọn. Một cơ chế thường gặp là Cookie.”
- **Nhắc nhiệm vụ:** “Hãy nêu một điều Cookie có thể làm và một điều Cookie không phải.”
- **H1 (theo yêu cầu):** “Hãy nhớ thẻ `language=vi` ở màn trước.”
- **H2 (theo yêu cầu):** “Cookie được trình duyệt quản lý như dữ liệu; nó không phải chương trình tự chạy.”
- **H3 (chỉ sau lượt thử):** “Thử so sánh với tệp HTML: HTML mô tả nội dung trang; Cookie chỉ là mẩu dữ liệu.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã phân biệt được dữ liệu và chương trình. Nhớ rằng Cookie có thể được dùng, không phải website nào cũng bắt buộc có.”
- **Phản hồi khi cần sửa:** “Hãy xem lại sự khác biệt giữa dữ liệu để nhớ lựa chọn và mã tạo giao diện.”
- **Khi học sinh chưa biết bắt đầu:** “Viết theo khung: “Cookie là …; nó không phải …”.”
- **Hiểu nhầm cần phát hiện:** Nói Cookie là đoạn mã HTML hoặc chương trình chạy tự động.
- **Lời chuyển tiếp:** “Bây giờ em thử phân biệt ba thẻ nhìn có vẻ giống nhau nhưng thuộc nhóm khác.”

## 06. A1-03 – Thẻ nào là dữ liệu ghi nhớ?
- **Lời dẫn khi vào trang:** “Ba thẻ này nhìn đều có ký tự, nhưng vai trò rất khác nhau. Em thử tách chúng thành ba nhóm nhé.”
- **Nhắc nhiệm vụ:** “Phân loại trước, rồi giải thích một lựa chọn của em.”
- **H1 (theo yêu cầu):** “Thẻ nào trông như tên và giá trị?”
- **H2 (theo yêu cầu):** “Thẻ nào có dấu ngoặc nhọn của HTML?”
- **H3 (chỉ sau lượt thử):** “Nếu `index.html` có thể là tên tệp thì `run.exe` gợi đến loại tên tệp nào?”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã phân biệt đúng nhóm. Hãy nói lại vì sao một mẩu dữ liệu không phải mã hiển thị trang.”
- **Phản hồi khi cần sửa:** “Hãy nhìn hình thức chuỗi: dấu ngoặc HTML khác với tên=giá trị và đuôi tệp.”
- **Khi học sinh chưa biết bắt đầu:** “Em có thể xác định thẻ dễ nhất trước rồi loại trừ dần.”
- **Hiểu nhầm cần phát hiện:** Đồng nhất một chuỗi chữ với chương trình thực thi.
- **Lời chuyển tiếp:** “Giờ em đã biết Cookie là dữ liệu. Tiếp theo: dữ liệu ấy đi giữa Browser và Server theo cách nào?”

## 07. A2-01 – Bước 1 · Browser xin trang
- **Lời dẫn khi vào trang:** “Giờ mình theo dõi một lượt vào website từ đầu. Trước hết, bên nào chủ động xin trang nhỉ?”
- **Nhắc nhiệm vụ:** “Chỉ làm bước Request; chưa mở các mũi tên Cookie.”
- **H1 (theo yêu cầu):** “Nhớ lại màn D0: ai xin trang?”
- **H2 (theo yêu cầu):** “Request nghĩa là lời yêu cầu. Hãy đặt mũi tên từ bên đang cần trang.”
- **H3 (chỉ sau lượt thử):** “Giống em hỏi thư viện trước khi nhận câu trả lời, HTTP cũng có bước gửi yêu cầu.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em mô tả được bước đầu của lượt truy cập. Màn sau sẽ xem Response có thể mang thêm thông tin gì.”
- **Phản hồi khi cần sửa:** “Đừng vội vẽ tất cả mũi tên. Xác định riêng bên đang cần trang trước.”
- **Khi học sinh chưa biết bắt đầu:** “Nếu chưa biết HTTP là gì, chỉ cần nhớ đây là cách đặt tên thông điệp web cơ bản.”
- **Hiểu nhầm cần phát hiện:** Đảo Request thành mũi tên từ Server về Browser.
- **Lời chuyển tiếp:** “Server có thể trả Response và đôi khi đưa thêm chỉ dẫn về Cookie.”

## 08. A2-02 – Ai gửi Set-Cookie?
- **Lời dẫn khi vào trang:** “Sau khi nhận lời yêu cầu, Server có thể gửi thông điệp trở lại. Em hãy tự đặt chiều trước khi xem lời giải thích.”
- **Nhắc nhiệm vụ:** “Hãy chọn chiều Response, rồi xem Set-Cookie thuộc thông điệp nào.”
- **H1 (theo yêu cầu):** “Response có nghĩa là trả lời; bên nào sẽ trả lời?”
- **H2 (theo yêu cầu):** “Hãy kiểm tra chiều ngược với Request đã làm.”
- **H3 (chỉ sau lượt thử):** “Ví dụ bên thư viện gửi lời trả lời về cho em; Set-Cookie là chỉ dẫn có thể đi kèm lời trả lời.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em xác định được Response. Chỉ dẫn Set-Cookie có thể xuất hiện trong Response, nhưng chưa chắc đã được lưu.”
- **Phản hồi khi cần sửa:** “Đừng nhầm Set-Cookie với Cookie gửi ở lượt sau. Hãy tìm bên gửi Response trước.”
- **Khi học sinh chưa biết bắt đầu:** “Bắt đầu chỉ bằng một câu: “Ai vừa nhận Request?”.”
- **Hiểu nhầm cần phát hiện:** Đặt Set-Cookie vào Request từ Browser hoặc tưởng Server tự ghi trực tiếp vào máy người dùng.
- **Lời chuyển tiếp:** “Chỉ dẫn được gửi đi rồi. Browser có nhất thiết phải lưu không?”

## 09. A2-03 – Browser có thể lưu hoặc từ chối
- **Lời dẫn khi vào trang:** “Server đã gửi chỉ dẫn, nhưng Browser vẫn có quyền quyết định theo các điều kiện áp dụng. Ta thử hai ca nhé.”
- **Nhắc nhiệm vụ:** “Ghi dự đoán trước khi bấm Chạy mô phỏng.”
- **H1 (theo yêu cầu):** “Ai là bên quản lý dữ liệu được lưu trong trình duyệt?”
- **H2 (theo yêu cầu):** “Hãy phân biệt “được đề nghị lưu” và “đã thực sự lưu”.”
- **H3 (chỉ sau lượt thử):** “Như người đưa giấy nhắn cho em: nhận lời nhắn chưa chắc em sẽ cất lại. Browser cũng vậy.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã nhận ra chỉ dẫn Set-Cookie không bảo đảm dữ liệu được lưu.”
- **Phản hồi khi cần sửa:** “Hãy xét lại ca chặn: nhận được chỉ dẫn không đồng nghĩa lưu thành công.”
- **Khi học sinh chưa biết bắt đầu:** “Em chỉ cần chọn “có lưu” hoặc “không lưu” trước khi xem trạng thái.”
- **Hiểu nhầm cần phát hiện:** Khẳng định Server trực tiếp ghi Cookie vào bộ nhớ Browser.
- **Lời chuyển tiếp:** “Nếu Cookie đã được lưu, lần quay lại Browser có thể gửi gì trong Request?”

## 10. A2-04 – Lượt sau: Cookie đi hướng nào?
- **Lời dẫn khi vào trang:** “Lần quay lại không nhất thiết giống lần đầu. Ta sẽ xét ba điều kiện trước khi dự đoán Cookie có đi theo Request hay không.”
- **Nhắc nhiệm vụ:** “Trước khi bấm chạy, hãy kiểm tra đủ ba điều kiện.”
- **H1 (theo yêu cầu):** “Cookie chưa từng lưu thì có gì để gửi lại?”
- **H2 (theo yêu cầu):** “Cookie hết hạn hoặc không đúng phạm vi có được dùng trong Request này không?”
- **H3 (chỉ sau lượt thử):** “Hãy tưởng tượng một vé còn hạn và chỉ dùng đúng khu vực; Cookie cũng có điều kiện áp dụng.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã dùng điều kiện để suy luận, không chỉ học thuộc hướng mũi tên.”
- **Phản hồi khi cần sửa:** “Hãy kiểm tra lại điều kiện nào không đạt trước khi kết luận Cookie được gửi.”
- **Khi học sinh chưa biết bắt đầu:** “Thử ca đơn giản: đã lưu, chưa hết hạn, đúng phạm vi.”
- **Hiểu nhầm cần phát hiện:** Cho rằng Cookie luôn có trong mọi Request sau khi website từng gửi Set-Cookie.
- **Lời chuyển tiếp:** “Bây giờ đặt ca chấp nhận và chặn cạnh nhau để thấy khác biệt.”

## 11. A2-05 – Nhận Cookie và chặn Cookie
- **Lời dẫn khi vào trang:** “Đây là cùng một website, cùng chỉ dẫn, chỉ đổi quyết định của Browser. Em dự đoán hai Request sau có khác nhau không?”
- **Nhắc nhiệm vụ:** “Chỉ so sánh cookie được đề nghị, không suy diễn website chắc chắn mất mọi cách ghi nhớ.”
- **H1 (theo yêu cầu):** “Giữ nguyên mọi điều kiện, chỉ đổi việc Browser có lưu hay không.”
- **H2 (theo yêu cầu):** “Nếu không lưu chính Cookie ấy, Request sau có thể gửi lại nó không?”
- **H3 (chỉ sau lượt thử):** “Tương tự em chưa cất một tấm vé thì không thể đưa lại chính tấm vé đó; nhưng có thể có phương án xác nhận khác.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã tách rõ tác động của việc chặn chính Cookie này và những cơ chế ghi nhớ khác.”
- **Phản hồi khi cần sửa:** “Không kết luận website chắc chắn “quên hết”; chỉ nói về cookie cụ thể đang xét.”
- **Khi học sinh chưa biết bắt đầu:** “Viết thành hai câu “Ca A có thể …; Ca B không thể …”.”
- **Hiểu nhầm cần phát hiện:** Nói chặn một Cookie khiến website chắc chắn không thể ghi nhớ bằng phương thức khác.
- **Lời chuyển tiếp:** “Bây giờ che toàn bộ sơ đồ và tự vẽ lại quy trình để kiểm tra trí nhớ.”

## 12. A2-06 – Vẽ lại hai chiều không nhìn mẫu
- **Lời dẫn khi vào trang:** “Em đã xem nhiều ví dụ. Giờ hãy kiểm tra trí nhớ: chỉ dùng giấy hoặc vùng ghi chú, không mở sơ đồ nhé.”
- **Nhắc nhiệm vụ:** “Hãy vẽ trước, đừng mở Sổ tay để tìm câu trả lời.”
- **H1 (theo yêu cầu):** “Nghĩ xem chiều trả lời khác chiều yêu cầu ở đâu.”
- **H2 (theo yêu cầu):** “Tên Set-Cookie thường gắn với lời phản hồi; Cookie gắn với lượt yêu cầu phù hợp sau đó.”
- **H3 (chỉ sau lượt thử):** “Nếu đã thử nhưng còn nhầm, quay lại mô phỏng một lượt rồi che đi và vẽ lần hai.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Sơ đồ của em đã thể hiện được hai chiều và điều kiện. Hãy nói lại bằng một câu cho mỗi chiều.”
- **Phản hồi khi cần sửa:** “Kiểm tra lại em có đảo Set-Cookie với Cookie hay bỏ mất điều kiện gửi lại không.”
- **Khi học sinh chưa biết bắt đầu:** “Đặt tên hai bên trước. Sau đó chỉ vẽ một mũi tên mỗi lần.”
- **Hiểu nhầm cần phát hiện:** Đảo tên chỉ dẫn Set-Cookie với header Cookie ở lượt Request sau.
- **Lời chuyển tiếp:** “Tiếp theo ta so sánh Cookie theo thời hạn tồn tại.”

## 13. A3-01 – Cookie nào còn vào ngày mai?
- **Lời dẫn khi vào trang:** “Có Cookie tồn tại theo phiên duyệt, có Cookie được đặt thời hạn. Em thử nhìn thời gian để phân loại.”
- **Nhắc nhiệm vụ:** “Dự đoán trên ba mốc trước khi xem timeline tham chiếu.”
- **H1 (theo yêu cầu):** “Tên loại session gợi tới một phiên duyệt.”
- **H2 (theo yêu cầu):** “Persistent thường có thời hạn xác định; hãy phân biệt với “chỉ trong phiên”.”
- **H3 (chỉ sau lượt thử):** “Hãy thử ví dụ thẻ có hạn 7 ngày và thẻ chỉ theo phiên, rồi suy luận ở ngày hôm sau.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em phân loại dựa trên thời hạn. Hãy nhớ xóa thủ công, chính sách trình duyệt hoặc khôi phục phiên có thể làm ví dụ thực tế khác đi.”
- **Phản hồi khi cần sửa:** “Đừng lấy hành động đóng một tab làm định nghĩa duy nhất. Hãy xem thời hạn/vòng đời.”
- **Khi học sinh chưa biết bắt đầu:** “Hãy xác định trường hợp còn thời hạn rõ ràng trước.”
- **Hiểu nhầm cần phát hiện:** Cho rằng cứ đóng một tab là mọi Session Cookie luôn biến mất tức thì.
- **Lời chuyển tiếp:** “Nếu chỉ đổi thời hạn của một Cookie, loại của nó có đổi không?”

## 14. A3-02 – Đổi thời hạn, đổi loại Cookie
- **Lời dẫn khi vào trang:** “Tên `cart_id` không tự nói loại Cookie. Ta chỉ đổi thời hạn, em thử suy luận loại theo điều kiện mới.”
- **Nhắc nhiệm vụ:** “So sánh theo thời hạn, đừng suy loại từ chữ “cart”.”
- **H1 (theo yêu cầu):** “Điều kiện nào đã được đổi trong tình huống này?”
- **H2 (theo yêu cầu):** “Phân loại session/persistent dựa theo thời hạn hay mục đích?”
- **H3 (chỉ sau lượt thử):** “Giống một tấm thẻ được thêm hạn dùng: công dụng vẫn vậy nhưng thời gian dùng đã đổi.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã thấy thời hạn có thể đổi cách phân loại, trong khi mục đích vẫn như cũ.”
- **Phản hồi khi cần sửa:** “Tìm xem em có dùng tên Cookie để phân loại thay cho điều kiện hết hạn không.”
- **Khi học sinh chưa biết bắt đầu:** “Hoàn thành câu “Trước/sau khác ở …, không khác ở …”.”
- **Hiểu nhầm cần phát hiện:** Cho rằng cookie giỏ hàng luôn là Session Cookie.
- **Lời chuyển tiếp:** “Đến lượt em tự nêu hai sự khác biệt về vòng đời của hai loại.”

## 15. A3-03 – Hai loại khác nhau ở đâu?
- **Lời dẫn khi vào trang:** “Mình thử kiểm tra trí nhớ không cần nhìn mẫu. Em hãy nói dựa trên thời hạn và điều kiện thực tế.”
- **Nhắc nhiệm vụ:** “Hai điểm khác nhau, một điều kiện khiến Cookie không còn.”
- **H1 (theo yêu cầu):** “Mỗi loại thường gắn với dạng thời hạn nào?”
- **H2 (theo yêu cầu):** “Thử xem Cookie persistent có thể hết hạn hoặc bị xóa trước hạn không.”
- **H3 (chỉ sau lượt thử):** “Hãy dùng ví dụ “Cookie 7 ngày” để so sánh với “Cookie theo phiên”.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã phân biệt theo thời hạn chứ không dựa vào RAM/ổ cứng.”
- **Phản hồi khi cần sửa:** “Hãy bỏ lời giải thích kiểu “RAM đối lập ổ cứng”, thay bằng điều kiện hết hạn/vòng đời.”
- **Khi học sinh chưa biết bắt đầu:** “Viết riêng hai cột Session và Persistent trước rồi thêm một ví dụ.”
- **Hiểu nhầm cần phát hiện:** Giải thích hai loại chỉ bằng nơi lưu trữ RAM/ổ cứng.
- **Lời chuyển tiếp:** “Giờ chuyển từ “Cookie tồn tại bao lâu” sang “Cookie được dùng vào việc gì”.”

## 16. A4-01 – Ba công dụng của Cookie
- **Lời dẫn khi vào trang:** “Cùng là Cookie nhưng website có thể dùng vào nhiều việc. Hãy xem việc gì xảy ra trong từng tình huống.”
- **Nhắc nhiệm vụ:** “Mỗi tình huống hãy trả lời “Dữ liệu này giúp website làm gì?”.”
- **H1 (theo yêu cầu):** “SHOP liên quan đến việc giữ trạng thái giỏ hàng khi sử dụng trang.”
- **H2 (theo yêu cầu):** “LANGUAGE có liên quan đến việc điều chỉnh theo lựa chọn cá nhân.”
- **H3 (chỉ sau lượt thử):** “ANALYTICS là việc tổng hợp lượt xem hoặc liên hệ hoạt động theo điều kiện; hãy tìm nhóm phù hợp.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em phân loại được công dụng dựa vào tình huống. Hãy nhắc lại ba nhóm bằng lời của em.”
- **Phản hồi khi cần sửa:** “Đừng phân loại theo tên hay thời hạn; hãy nhìn việc dữ liệu được dùng để làm.”
- **Khi học sinh chưa biết bắt đầu:** “Hãy bắt đầu từ LANGUAGE vì em đã gặp tình huống này ở đầu bài.”
- **Hiểu nhầm cần phát hiện:** Cho rằng mọi Cookie đều nhằm theo dõi người dùng.
- **Lời chuyển tiếp:** “Tiếp theo ta sẽ bác bỏ một nhầm lẫn: tồn tại lâu có đồng nghĩa tracking không?”

## 17. A4-02 – Sống lâu có phải là tracking?
- **Lời dẫn khi vào trang:** “Nhiều bạn thấy Cookie sống lâu là nghĩ ngay đến tracking. Nhưng thời hạn và mục đích là hai câu hỏi khác nhau.”
- **Nhắc nhiệm vụ:** “Hãy phân biệt “dùng bao lâu?” với “dùng để làm gì?”.”
- **H1 (theo yêu cầu):** “Persistent trả lời câu hỏi nào: thời hạn hay mục đích?”
- **H2 (theo yêu cầu):** “Tracking là việc liên hệ các lượt hoạt động; chỉ thời hạn dài có chứng minh điều đó không?”
- **H3 (chỉ sau lượt thử):** “Lấy ví dụ nhớ ngôn ngữ 7 ngày: thời hạn dài có tự biến nó thành công cụ theo dõi không?”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã dùng hai tiêu chí độc lập. Khi nói tracking, cần xem mã nhận biết và cách hệ thống liên kết lượt hoạt động.”
- **Phản hồi khi cần sửa:** “Hãy thử vẽ hai trục riêng trước khi kết luận; đừng đánh đồng thời hạn với cách dùng.”
- **Khi học sinh chưa biết bắt đầu:** “Viết câu ngắn: “Persistent nói về …, còn tracking nói về …”.”
- **Hiểu nhầm cần phát hiện:** Mọi Persistent Cookie tự động là Tracking Cookie.
- **Lời chuyển tiếp:** “Giờ hãy tự chọn một tình huống và dạy lại cho người chưa biết gì về Cookie.”

## 18. A4-03 – Em hãy dạy lại một tình huống
- **Lời dẫn khi vào trang:** “Một cách kiểm tra hiểu bài là thử dạy cho người khác. Em chọn trường hợp dễ nhất và giải thích bằng lời của em nhé.”
- **Nhắc nhiệm vụ:** “Không cần nói nhanh; cần rõ dữ liệu, cơ chế, công dụng.”
- **H1 (theo yêu cầu):** “Trả lời lần lượt ba câu: nhớ gì, dùng khi nào, để làm gì.”
- **H2 (theo yêu cầu):** “Giải thích từ ngữ thay vì chỉ đọc tên Set-Cookie hoặc Cookie.”
- **H3 (chỉ sau lượt thử):** “Em có thể lấy LANGUAGE làm ví dụ và kể từ lần chọn ngôn ngữ đến lần quay lại.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Lời giải thích của em có trình tự. Hãy kiểm tra xem người mới học có thể hiểu mà không cần nhìn sơ đồ không.”
- **Phản hồi khi cần sửa:** “Thử nói lại bằng một tình huống quen thuộc trước, rồi gắn tên kỹ thuật sau.”
- **Khi học sinh chưa biết bắt đầu:** “Dùng khung nói: “Em chọn …; website cần nhớ …; ở lần sau …”.”
- **Hiểu nhầm cần phát hiện:** Chỉ đọc thuộc thuật ngữ mà không giải thích hành vi của Browser và Server.
- **Lời chuyển tiếp:** “Em đã luyện tập rồi. Phần sau là nhiệm vụ tự làm không dùng gợi ý kiến thức.”

## 19. A5-01 – Thử sức độc lập: website câu lạc bộ
- **Lời dẫn khi vào trang:** “Đây là phần tự kiểm tra. Em đọc kỹ tình huống và tự làm. Trợ giảng chỉ giúp hiểu cách nộp, không gợi ý đáp án.”
- **Nhắc nhiệm vụ:** “Đọc đề rồi bấm Tiếp để làm ba phần. Không mở Sổ tay lúc này.”
- **Gợi ý nội dung:** KHÓA trong EXIT; chỉ đọc/nhắc yêu cầu trung tính.
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Đã ghi nhận em đã đọc đề; chưa có đánh giá đúng sai.”
- **Phản hồi khi cần sửa:** “Nếu chưa hiểu cách điền, hãy đọc lại các nhãn A/B/C; không mở lời giải.”
- **Khi học sinh chưa biết bắt đầu:** “Em có thể đọc lại đề hoặc phóng to chữ; trợ giảng không hỗ trợ nội dung trả lời.”
- **Hiểu nhầm cần phát hiện:** Dùng kiến thức lưu trong Sổ tay khi đang làm bài độc lập.
- **Lời chuyển tiếp:** “Trang tiếp là ba phần trả lời A/B/C độc lập.”

## 20. A5-02 – EXIT: ba ô A · B · C
- **Lời dẫn khi vào trang:** “Em hãy tự làm ba phần. Em được đọc lại đề và dùng giấy nháp, nhưng không có gợi ý nội dung trong lúc làm.”
- **Nhắc nhiệm vụ:** “Điền đủ A, B, C. Nộp khi em đã kiểm tra lại câu trả lời.”
- **Gợi ý nội dung:** KHÓA trong EXIT; chỉ đọc/nhắc yêu cầu trung tính.
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Đã tiếp nhận bài. Kết quả cần được đánh giá theo tiêu chí sau khi nộp, không tự cho điểm.”
- **Phản hồi khi cần sửa:** “Chưa nộp được nếu các phần bắt buộc còn trống. Hãy kiểm tra xem em đã điền A, B và C chưa.”
- **Khi học sinh chưa biết bắt đầu:** “Em có thể dùng giấy nháp và đọc lại từng yêu cầu. Không có gợi ý nội dung.”
- **Hiểu nhầm cần phát hiện:** Nhìn sơ đồ đáp án hoặc Sổ tay trước khi nộp.
- **Lời chuyển tiếp:** “Sau khi hoàn tất đánh giá, em sẽ ôn lại bằng sơ đồ trống.”

## 21. P07-01 – Nhớ lại bằng sơ đồ trống
- **Lời dẫn khi vào trang:** “Sau khi hoàn thành phần kiểm tra, mình sẽ gom những điều đã học thành một bức tranh. Em hãy tự vẽ trước nhé.”
- **Nhắc nhiệm vụ:** “Bốn nhánh: cơ chế, phân loại, công dụng, quyền riêng tư.”
- **H1 (theo yêu cầu):** “Hãy bắt đầu từ chữ Cookie ở chính giữa.”
- **H2 (theo yêu cầu):** “Nhánh cơ chế có thể gắn với hai lượt truy cập; nhánh phân loại gắn với thời hạn.”
- **H3 (chỉ sau lượt thử):** “Nếu khó, vẽ một nhánh mỗi lần và nói một câu về ví dụ em nhớ.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Sơ đồ của em đã nối được các ý chính. Hãy xác định nhánh nào còn chưa chắc để ôn lại.”
- **Phản hồi khi cần sửa:** “Hãy bổ sung nhánh còn thiếu hoặc chỉnh quan hệ chưa chính xác, không chỉ tăng số lượng từ khóa.”
- **Khi học sinh chưa biết bắt đầu:** “Bắt đầu với một nhánh em tự tin nhất, rồi mở rộng dần.”
- **Hiểu nhầm cần phát hiện:** Chép nguyên sơ đồ mẫu trước khi tự nhớ lại.
- **Lời chuyển tiếp:** “Cuối cùng em dùng flashcards và dạy lại kiến thức để chuẩn bị cho buổi sau.”

## 22. P07-02 – Flashcards và dạy lại
- **Lời dẫn khi vào trang:** “Đây là phần chuẩn bị cho buổi sau. Em không cần học thuộc cả trang, hãy thử nhớ thuật ngữ rồi giải thích bằng ví dụ.”
- **Nhắc nhiệm vụ:** “Đọc tên thẻ, tự trả lời, sau đó mới kiểm tra.”
- **H1 (theo yêu cầu):** “Bắt đầu bằng các từ Browser, Server, Request và Response.”
- **H2 (theo yêu cầu):** “Ghép Set-Cookie với lượt Server trả lời và Cookie với Request sau nếu điều kiện phù hợp.”
- **H3 (chỉ sau lượt thử):** “Nếu quên, hãy thử vẽ hai ô Browser/Server rồi đặt một mũi tên mỗi lần.”
- **Phản hồi khi đúng/đạt (mẫu để Skill11 gắn điều kiện):** “Em đã ôn lại bằng cách gọi tên và giải thích. Hãy đánh dấu các thẻ còn khó để học tiếp.”
- **Phản hồi khi cần sửa:** “Đừng chỉ xem mặt sau rồi nói “đã biết”; hãy che lại và tự giải thích lần nữa.”
- **Khi học sinh chưa biết bắt đầu:** “Ôn ba thẻ một lần; không cần làm hết trong một lượt.”
- **Hiểu nhầm cần phát hiện:** Lật mặt sau quá sớm hoặc chỉ đọc thuộc tên thuật ngữ.
- **Lời chuyển tiếp:** “Khi sẵn sàng cho buổi sau, em có thể xem lại các thẻ khó trong Sổ tay.”
