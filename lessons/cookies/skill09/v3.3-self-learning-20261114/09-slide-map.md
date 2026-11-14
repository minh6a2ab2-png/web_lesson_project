# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.


## Bản đồ tiến trình
| Scene | Chặng | Trang | Mục đích HS nhìn thấy | Chế độ đề xuất | Minh chứng |
|---|---|---|---|---|---|
| P00-01 | P00 | Một website có thể nhớ em? | Nhận ra một website có thể ghi nhớ lựa chọn giữa hai lần truy cập. | presentation | Một câu dự đoán nói/ghi. |
| D0-01 | D0 | Ai xin trang? Ai trả trang? | Xác định chiều trao đổi giữa Browser và Server khi mở một trang. | presentation | Sơ đồ hai chiều, mức hỗ trợ H0–H3. |
| D0-02 | D0 | Một mẩu dữ liệu có ý nghĩa gì? | Nhận biết dạng tên–giá trị trong ví dụ dữ liệu. | presentation | Một dự đoán ý nghĩa language=vi. |
| A1-01 | ACT01 | Vì sao lần sau vẫn là tiếng Việt? | Xác định thông tin tối thiểu cần giữ lại giữa hai lần truy cập. | story | Dự đoán thông tin cần ghi nhớ. |
| A1-02 | ACT01 | Cookie là một mẩu dữ liệu | Diễn đạt Cookie là dữ liệu, không phải một chương trình tự chạy. | presentation | Mô tả “dữ liệu, không phải HTML hay chương trình”. |
| A1-03 | ACT01 | Thẻ nào là dữ liệu ghi nhớ? | Phân biệt dữ liệu minh họa, thẻ HTML và tên tệp chương trình. | presentation | P1: 3 thẻ + lý do + recall. |
| A2-01 | ACT02 | Bước 1 · Browser xin trang | Xác định bước đầu tiên trong một lượt truy cập website. | presentation | Mũi tên B→S kèm lý do. |
| A2-02 | ACT02 | Ai gửi Set-Cookie? | Phân biệt thông điệp Set-Cookie với HTTP Request. | presentation | P2-1: chiều Set-Cookie và vai trò Browser. |
| A2-03 | ACT02 | Browser có thể lưu hoặc từ chối | Nhận ra Browser có thể chấp nhận hoặc từ chối lưu Cookie. | lab | P2-2: khác biệt hai trạng thái. |
| A2-04 | ACT02 | Lượt sau: Cookie đi hướng nào? | Xác định điều kiện Cookie được gửi lại ở lượt truy cập tiếp. | lab | P2-3: chiều Cookie B→S và điều kiện. |
| A2-05 | ACT02 | Nhận Cookie và chặn Cookie | So sánh hệ quả của việc chấp nhận và chặn cùng một Cookie. | lab | P2-4: dự đoán đúng hai ca, có căn cứ. |
| A2-06 | ACT02 | Vẽ lại hai chiều không nhìn mẫu | Tự nhớ lại hai chiều Set-Cookie và Cookie mà không nhìn mẫu. | focus | P2 tổng hợp, mức hỗ trợ H0–H3. |
| A3-01 | ACT03 | Cookie nào còn vào ngày mai? | Dự đoán vòng đời của hai loại Cookie theo mốc thời gian. | presentation | P3-1: timeline + giải thích vì sao. |
| A3-02 | ACT03 | Đổi thời hạn, đổi loại Cookie | Nhận biết tuổi thọ Cookie thay đổi khi thay đổi thời hạn. | presentation | P3-2: phản ví dụ đổi thời hạn. |
| A3-03 | ACT03 | Hai loại khác nhau ở đâu? | Tự phân biệt Session và Persistent theo vòng đời. | focus | P3 hoàn chỉnh. |
| A4-01 | ACT04 | Ba công dụng của Cookie | Phân biệt ba nhóm công dụng Cookie qua tình huống. | presentation | P4-1: ba nhóm công dụng và lý do. |
| A4-02 | ACT04 | Sống lâu có phải là tracking? | Phân biệt thời hạn lưu và mục đích theo dõi. | presentation | P4-2: phản ví dụ + căn cứ tracking. |
| A4-03 | ACT04 | Em hãy dạy lại một tình huống | Tự giải thích cơ chế, công dụng và lưu ý quyền riêng tư. | focus | P4 teach-back + recall ba nhóm. |
| A5-01 | ACT05 | Thử sức độc lập: website câu lạc bộ | Chuẩn bị làm bài vận dụng độc lập không xem tài liệu. | assessment | Xác nhận bắt đầu EXIT, H0–H3 ghi riêng nếu cần. |
| A5-02 | ACT05 | EXIT: ba ô A · B · C | Vận dụng độc lập kiến thức về cơ chế, thời hạn và mục đích Cookie. | assessment | EXIT ba ô và mức hỗ trợ. |
| P07-01 | P07 | Nhớ lại bằng sơ đồ trống | Kết nối các khái niệm Cookies từ trí nhớ mà không nhìn lời giải. | map | Bản mind-map tự vẽ/ghi chú. |
| P07-02 | P07 | Flashcards và dạy lại | Ôn thuật ngữ và dạy lại Cookie bằng sơ đồ tự vẽ. | presentation | Flashcard tự học, sản phẩm teach-back. |

## Logic chuyển cảnh
`P00 → D0 → ACT01 → ACT02 → ACT03 → ACT04 → ACT05 → P07` – thứ tự giữ nguyên v3.2.

**Mỗi lần chuyển:** học sinh được nhắc tình huống kế tiếp, kết quả đang ghi không biến mất; `visited`, `attempted`, `saved`, `completed`, `mastered` khác nhau. Chưa kiểm thử người học; không lấy số lần bấm Next làm đạt.

**EXIT:** A5-01 mở tình huống; A5-02 là ba ô A/B/C độc lập, không có gợi ý nội dung. Dual View lúc EXIT = đề + giấy nháp, Sổ tay chứa bài cũ không được mở.

**Bài sau giờ:** P07-01 mindmap trống và P07-02 flashcards/teach-back, không ép vào thời lượng 42 phút.
