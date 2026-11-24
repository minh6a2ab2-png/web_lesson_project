# QUY CHUẨN DẪN HƯỚNG CHÚ Ý & MÔ HÌNH TƯƠNG TÁC — ONE_TOPIC v1.3 (ĐỀ XUẤT)

**Nguồn kế thừa:** Cookies Skill 11 v1.2 (30 scene), MT2-FROZEN 13 Skills, checkpoint một nội dung. **Trạng thái:** PROTOTYPE / AWAITING_USER_REVIEW; không ghi đè bản Cookies v1.2; không tự đồng bộ MT3 nhiều nội dung. Lượt v1.3 mới thêm một màn `INTRODUCTION` (`A1-00`), tổng 31 scene (29 màn chính và 2 màn `RECOVERY` có điều kiện).

## 1. Triết lý như một thiết kế PowerPoint chuyên nghiệp

**Mọi màn đều phải có chỉ dẫn thị giác, nhưng không phải mọi màn đều cần hoạt ảnh lớn.** Ưu tiên một điểm nhìn chính; các yếu tố phụ được giảm độ tương phản thay vì liên tục chuyển động. Hiệu ứng chỉ được dùng để: (a) báo thứ tự; (b) thu hút ánh nhìn về câu hỏi; (c) minh họa quan hệ nhân quả/di chuyển/trạng thái; (d) phản hồi hành động của học sinh. Nếu gỡ hiệu ứng mà nội dung không mất ý nghĩa và mức tập trung không đổi, ưu tiên hiệu ứng tĩnh như vị trí, cỡ chữ, highlight.

Thứ tự quyết định: **mục tiêu nhận thức → người học → bản chất thông tin → thao tác dự kiến → loại scene → loại mô hình → hiệu ứng → cách đo kết quả.** Không chọn animation trước rồi ép nội dung theo nó.

**Không làm học sinh đợi:** nội dung và nút thao tác xuất hiện ngay. Chuyển động vào nhẹ 180–280 ms là gợi ý thiết kế, không phải thời gian chặn thao tác. Với cơ chế nhiều bước, học sinh điều khiển từng bước; hiệu ứng 250–800 ms minh họa được sự thay đổi nhưng không bắt người học đợi mới đọc được chữ. Không tự chạy vòng lặp, tự phát âm thanh, rung nhấp nháy liên tục hoặc đồng thời chuyển động nhiều đối tượng cạnh tranh chú ý.

## 2. Ba cấp độ hiệu ứng

| Mức | Dùng khi nào | Cách làm | Cần tránh |
|---|---|---|---|
| A0 — Dẫn hướng tĩnh | Đa phần màn kiến thức, đánh giá | Vị trí trung tâm, khoảng trắng, tiêu đề lớn, highlight, mũi tên rõ | Không có điểm nhìn chính |
| A1 — Phản hồi ngắn | Mọi màn khi đổi trạng thái | Đổi nền/viền, dịch rất nhẹ, phản hồi thành công/sai theo ngữ nghĩa | Nhấp nháy lặp, biến mất nội dung |
| A2 — Hoạt ảnh cơ chế | HTTP, lưu/gửi Cookie, vòng đời | Đối tượng/token di chuyển theo một bước do học sinh kích hoạt | Animation trang trí không gắn hành động |
| A3 — Mô hình điều khiển | Phần cần dự đoán, thử điều kiện, so sánh | Đổi đầu vào → xem trạng thái → phản hồi → làm lại | Mô hình chỉ có nút Play vô nghĩa |

Ngưỡng thời gian trên là **quy ước nội bộ để bắt đầu thiết kế**, không phải thước đo khoa học cứng. Nếu người học thấy chậm, phải cho bỏ hiệu ứng hoặc giảm chuyển động ngay.

## 3. Quy tắc riêng theo Scene Kind

| Scene Kind | Điểm nhìn ưu tiên | Hiệu ứng nên dùng | Không được làm |
|---|---|---|---|
| `OBSERVE` | **Câu hỏi tình huống** ở trung tâm, cỡ chữ nổi bật; hình minh họa ngay dưới | Đánh dấu ngắn đối tượng cần quan sát; mô hình có tương tác để thử khác biệt | Để câu hỏi nhỏ ở góc; tự hé lộ đáp án |
| `DIAGNOSE` | Nhiệm vụ kiểm tra rõ ràng | Đúng → cửa sổ giữa màn **kết nối kiến thức cũ** + mô hình/ảnh cụ thể; sai → gợi ý và lộ trình Recovery | Lộ đáp án trước khi kiểm tra; biến popup thành bài giảng dài |
| `RECOVERY` | Một ý nền + minh họa | Bước mẫu ngắn → người học làm lại → phản hồi | Bắt xem hoạt ảnh dài rồi mới thử |
| `INTRODUCTION` **mới** | Tên công cụ/giải pháp và vấn đề nó giải quyết | “Tình huống → tên giải pháp → 1 minh họa → thử nhanh” | Thay thế toàn bộ nội dung TEACH hoặc tạo intro cho mọi mẩu kiến thức |
| `TEACH` | Định nghĩa/quan hệ cốt lõi, ví dụ đọc được | Highlight theo luận điểm; cơ chế cần mô hình từng bước | Giao diện trống chỉ có form; tự chạy và che nội dung |
| `EXPLORE` | Input–state–output; đặt dự đoán | Mô hình thay đổi thật khi đổi điều kiện; hoạt ảnh đúng nguyên nhân | Để mô hình như ảnh tĩnh; câu hỏi “thử” không chạy được |
| `COMPARE` | Hai trường hợp cùng chuẩn so sánh | Toggle/chuyển tab/đổi điều kiện, highlight **điểm khác** | Để hai hình lệch thước hoặc màu gây hiểu sai |
| `PRACTISE` | Câu hỏi, thao tác người học | Phản hồi điều kiện và phân loại, animation nhỏ nếu có bước | Mất tập trung vì hiệu ứng thưởng không liên quan |
| `RECALL` | Gợi nhớ không lộ đáp án | Hiện lần lượt cue do học sinh chọn; nhấn mạnh không dùng mô hình hé đáp án | Popup mở sẵn kiến thức cần nhớ |
| `REVIEW` | Kiểm tra hiểu bài độc lập | Trạng thái câu trả lời rõ ràng, phản hồi sau Submit | Đáp án lộ qua animation trước Submit |
| `RECALL_TEACH_BACK` | Học sinh tự giải thích lại | Thẻ gợi ý và ghi âm/vẽ tự nguyện; giảm kích thích thị giác | Giọng dẫn/hoạt ảnh làm thay lời học sinh |
| `ASSESS_INTRO`, `ASSESS` | Yêu cầu vận dụng | A0–A1, không mô hình giúp đáp án | Cung cấp gợi ý có thể làm lộ kết quả đánh giá |

**`INTRODUCTION` được chèn theo nhóm khái niệm/giải pháp, không nhất thiết trước mọi màn TEACH.** Nếu việc giới thiệu công cụ gói được trong 1 dòng tiêu đề, không tách thêm màn chỉ để tăng số scene.

## 4. Mô hình: tiêu chuẩn tối thiểu bắt buộc

Một mô hình được đánh dấu **INTERACTIVE_READY** chỉ khi có đủ:

1. **Mục tiêu:** đang mô phỏng cơ chế hoặc thao tác nào, câu hỏi cần trả lời.
2. **Đầu vào có thể thay đổi:** toggle, chọn phương án, nhập giá trị, kéo đối tượng, hoặc điều khiển tiến trình.
3. **Trạng thái:** thay đổi mô hình đúng theo đầu vào (không phải chỉ bật/tắt lớp ảnh).
4. **Hiển thị kết quả:** phần thay đổi nhìn thấy được và phản hồi diễn giải ý nghĩa.
5. **Điều khiển:** Run/Next/Back/Reset/Replay phù hợp; không bị mắc kẹt ở animation.
6. **Khả năng kiểm chứng:** có ví dụ đúng, ví dụ sai/biên, và ghi rõ giản lược của mô hình so với thực tế.
7. **Khả năng tiếp cận:** dùng bàn phím, nhãn rõ, giảm chuyển động, không phụ thuộc duy nhất vào màu; fallback tĩnh và mô tả chữ khi script không hoạt động.

**Phân biệt:** GIF chạy lặp, SVG dịch chuyển mà không đổi dữ liệu, video không điều khiển không tự động được tính là mô hình tương tác.

Ví dụ mô hình Cookie nên có chuỗi **dự đoán → thao tác → quan sát → giải thích/đối chiếu**, không chỉ có nút `▶ Play`.

## 5. Diễn giải bắt buộc cho hai loại màn được nhấn mạnh

### OBSERVE — ví dụ “Vì sao website vẫn nhớ tiếng Việt?”
- Câu hỏi đặt trung tâm, chữ lớn nhất màn; hình tình huống là điểm nhìn thứ hai.
- Học sinh **quan sát → dự đoán** trước khi biết tên “Cookie”.
- Cho thử đổi ngôn ngữ/truy cập lại trong mô hình *sau khi* đã ghi nhận dự đoán nếu cần kiểm soát việc lộ đáp án.
- Không làm mũi tên, biểu tượng hay nền nhấp nháy liên tục; không chạy video chắn màn.

### DIAGNOSE — ví dụ Request/Response
- Người học trả lời trước. Khi đúng: hiện **cửa sổ kiến thức cũ** có hai mũi tên Browser → Server (Request) và Server → Browser (Response), kèm ví dụ ngắn liên quan đến Cookie; có nút xem lại hoặc đóng.
- Khi sai: giữ việc làm lại hoặc dẫn sang `RECOVERY`; không dùng cùng một popup công bố đáp án hoàn chỉnh trước nhánh Recovery.
- Modal không chiếm chỗ vĩnh viễn trong scene. Luôn có nút đóng, có thể đóng bằng Escape, và quay lại đúng vị trí học.
- Popup kiến thức nền **không được mặc định đánh dấu đạt** chỉ vì đã mở.

## 6. Từ khóa, hover và keyboard

- Desktop: hover vào từ khóa mở chú thích ở vị trí gần từ; **rời hover từ khóa là tự ẩn**, không cần bấm dấu X; tránh để chú thích che câu hỏi hoặc che nút chính.
- Keyboard: focus mở chú thích; blur đóng; có thể đọc được bằng ngôn ngữ hỗ trợ khi cần.
- Touch: tap để mở, tap ngoài hoặc chuyển màn để đóng. Không tạo `mouseenter` giả trên thiết bị cảm ứng.
- Mỗi chú thích 1 định nghĩa ngắn + 1 ví dụ nếu cần, không thay thế phần TEACH.

## 7. Yêu cầu kiểm định trước nghiệm thu

- 100% scene có `focus_target` và `attention_strategy` xác định. 100% scene không có animation tự chạy liên tục (trừ trường hợp được duyệt và có Pause/Stop).
- 100% **mô hình thật được đưa vào scene** có ít nhất 2 trạng thái tương tác phân biệt được; tương tác phải ảnh hưởng kết quả/giải thích.
- 100% nội dung cơ chế hoặc thao tác quan trọng có mô hình điều khiển hoặc minh họa hoạt ảnh tương tác tương đương; nếu bị BLOCKED ghi lý do và phương án tĩnh thay thế, **không tuyên bố đạt**.
- `OBSERVE`: học sinh thấy câu hỏi trước và rõ; `DIAGNOSE`: modal kiến thức nền sau đáp án đúng; `INTRODUCTION`: tên giải pháp, mục đích, ví dụ và không lặp lại TEACH.
- Tooltip hover/focus/touch hoạt động đúng; không lộ trợ giúp ở các màn Recall/Assessment trước khi có bằng chứng đã thử.
- Kiểm thử trên `file://`, offline, desktop, mobile, zoom 200%, bàn phím, storage denied, `prefers-reduced-motion`; truy vết lỗi về Skill 04/05/06/07/09/10/11 tùy nguồn.
- Kiểm tra **thực tế học sinh**: sau 5–10 phút có thể giải thích vì sao đối tượng chuyển động và nguyên nhân kết quả, chứ không chỉ nói “đẹp”.

## 8. Điểm chặn phê duyệt

| Tiêu chí | Phải đạt |
|---|---|
| Tương tác có ý nghĩa | Mô hình có đầu vào, trạng thái, kết quả, Reset/Replay, phản hồi đúng cơ chế |
| Dẫn hướng chú ý | 1 điểm nhìn chính, hiệu ứng hỗ trợ mục tiêu, không che chữ |
| Nhịp độ | Không bắt chờ hoạt ảnh trang trí, nội dung đọc được ngay |
| Chống phân tán | Không tự lặp liên tục, không lạm dụng chớp/sáng/rung |
| Trợ năng | Có giảm chuyển động, điều khiển bàn phím, nội dung fallback |
| Truy vết | Biết do Skill nào thiết kế, sản xuất, lập trình, kiểm tra |

**Tình trạng pilot Cookies 31 scene:** Website HTML có 1 intro mới, focus cues cho 31 scene, tương tác mô hình ở các màn khớp registry, tooltip mới, modal kiến thức nền cho hai DIAGNOSE. Đây mới là **proof-of-concept**, chưa được kiểm định trên người học thật, chưa xác nhận mọi hình minh họa cũ đã được thay bằng mô hình hoàn toàn tự vận hành; chưa đạt `RELEASE_PASS`. Bản Cookies v1.2 và bản MT3 nhiều nội dung vẫn được bảo toàn.

### Nguồn thiết kế bên ngoài (tham khảo, không phải yêu cầu gốc)
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/ (Pause/Stop/Hide 2.2.2, Animation from Interactions 2.3.3, flashing 2.3.1)
- W3C Understanding Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions
- UC San Diego, Evidence-Based Presentation Design Recommendations: https://multimedia.ucsd.edu/best-practices/presentation-design.html
- UC San Diego lưu ý hiệu ứng tạo chênh lệch thị giác và giảm nhấn thông tin cũ hữu ích khi được dùng đúng mục đích.
