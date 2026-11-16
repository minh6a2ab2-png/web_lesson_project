# Cookies — Skill 10 v3.5 — 17/11/2026

**Nguồn chính xác:** `source/09-implementation-contract.json` (Skill 09 v3.4), 22 scene IDs; `source/SKILL10_v3.5_APPROVED_STANDARD.md` (10 tiêu chí người dùng đã duyệt); hồ sơ Skill04 Cookies (nền chưa vững, quên giữa chặng, thích ICT, cần chỉ dẫn rõ, chưa có D0 thực tế). **Đầu ra hiện tại:** hi-fi prototype, KHÔNG phải Skill11 mới hay thử nghiệm với học sinh thật.
## Continuity map: câu nối từng màn

| Từ màn | Đã biết / quan sát | Lời cầu nối | Sang màn |
|---|---|---|---|
| P00-01 | Một lựa chọn nhỏ có thể được ghi nhớ giữa hai lần truy cập. | Muốn hiểu cách ghi nhớ, trước hết ôn ai xin trang và ai trả trang. | D0-01 |
| D0-01 | Thử xác định chiều Request và Response; đây là câu kiểm tra nền, chưa chấm điểm. | Tiếp theo, ta xem một mẩu dữ liệu trên website có ý nghĩa gì. | D0-02 |
| D0-02 | Dấu “=” thường nối tên một mục dữ liệu với giá trị của nó. | Bây giờ ta quay về tình huống website đã nhớ tiếng Việt. | A1-01 |
| A1-01 | Điều cần ghi nhớ có thể chỉ là lựa chọn ngôn ngữ, không phải toàn bộ trang web. | Ta sẽ đặt tên cho mẩu dữ liệu ghi nhớ đó. | A1-02 |
| A1-02 | Cookie là dữ liệu, không phải HTML hay chương trình tự chạy. | Bây giờ hãy phân biệt Cookie với những thứ trông giống dữ liệu. | A1-03 |
| A1-03 | Dữ liệu tên–giá trị khác thẻ HTML và khác tên tệp chương trình. | Đã biết Cookie là dữ liệu, ta sẽ tìm cách dữ liệu đến trình duyệt. | A2-01 |
| A2-01 | Request đi từ Browser → Server. | Máy chủ nhận được yêu cầu; tiếp theo nó sẽ gửi gì về? | A2-02 |
| A2-02 | `Set-Cookie` nằm trong Response: Server → Browser. | Nhưng Browser có nhất thiết phải chấp nhận chỉ dẫn này không? | A2-03 |
| A2-03 | Có `Set-Cookie` không có nghĩa Browser chắc chắn lưu Cookie. | Nếu Cookie đã được lưu, điều gì xảy ra ở lần truy cập sau? | A2-04 |
| A2-04 | `Cookie` trong Request: Browser → Server, khi thỏa điều kiện. | Hãy đặt hai trường hợp lưu và chặn cạnh nhau để so sánh. | A2-05 |
| A2-05 | Chặn Cookie này khiến Browser không lưu và không gửi lại chính Cookie đó. | Đến lúc che sơ đồ để tự nhớ lại cả hai chiều. | A2-06 |
| A2-06 | Tự nhớ trước, sau đó mới mở sơ đồ đối chiếu. | Đã hiểu đường đi; tiếp theo ta tìm hiểu Cookie tồn tại bao lâu. | A3-01 |
| A3-01 | Thời hạn phụ thuộc loại Cookie và những điều kiện như xóa hoặc hết hạn. | Nếu thay đổi thời hạn, loại Cookie có thể thay đổi ra sao? | A3-02 |
| A3-02 | Session/Persistent phân biệt theo vòng đời, không theo tên hay mục đích Cookie. | Hãy thử tự giải thích hai loại khi không có bảng mẫu. | A3-03 |
| A3-03 | Không định nghĩa hai loại bằng RAM hay ổ cứng một cách tuyệt đối. | Giờ đã hiểu vòng đời, ta xem Cookie được dùng để làm gì. | A4-01 |
| A4-01 | Cookie không phải lúc nào cũng được dùng để quảng cáo. | Cookie tồn tại lâu có phải chắc chắn để theo dõi em không? | A4-02 |
| A4-02 | Persistent ≠ Tracking. Cookie lâu hạn có thể chỉ ghi nhớ ngôn ngữ. | Hãy chọn một tình huống và thử giảng lại như một giáo viên. | A4-03 |
| A4-03 | Giải thích bằng lời của mình giúp kiểm tra mình thực sự hiểu cơ chế. | Bây giờ thử một website mới mà không xem lại đáp án. | A5-01 |
| A5-01 | Đọc dữ kiện, sau đó chuyển sang bài vận dụng độc lập. | Trong EXIT, các lời gợi ý kiến thức và đáp án không được mở. | A5-02 |
| A5-02 | Bản thiết kế chỉ minh họa giao diện; việc chấm và khóa bảo mật do Skill 11 thực hiện. | Sau khi giáo viên kiểm tra, em có thể tự vẽ lại sơ đồ và ôn thẻ. | P07-01 |
| P07-01 | Vẽ lại từ trí nhớ rồi mới đối chiếu giúp phát hiện chỗ còn quên. | Tiếp theo, dùng flashcards và giảng lại đường đi của Cookie. | P07-02 |
| P07-02 | Mỗi lượt tự nhớ và giảng lại là một cơ hội củng cố kiến thức. | Em đã có bộ từ khóa để ôn lại trong những buổi sau. | Kết thúc |

## Quy tắc khi triển khai Skill11
- Không lặp nguyên một form hoặc phần giáo viên nhắc mục đích ở 22 trang.
- Tình huống `lingua.example.org` xuyên A1–A2, Cookie `language=vi` dùng nhất quán; A3 giỏ hàng làm phản ví dụ thời hạn; A4 ba công dụng; A5 rõ bối cảnh mới `club.example.org`.
- Mỗi chuyển cảnh nhắc lại điểm vừa biết và đặt một câu hỏi vừa đủ cho màn sau, tránh “bài tập độc lập” được ghép cơ học.
