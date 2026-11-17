# Bản thiết kế Active Recall + ôn tập cuối phần — Cookies

## Quy tắc áp dụng
- Sau mỗi phần kiến thức ACT01–ACT04: **1 màn Active Recall rồi 1 màn ôn tập**. Không thêm cặp màn cho chẩn đoán D0 hoặc EXIT A5.
- Active Recall = quan sát lần lượt hình/từ khóa → tự nói lại → ghi 2–3 từ khóa/sơ đồ vào vở → xác nhận đã thử → đối chiếu, không xem lời giải trước.
- Ôn tập = 3–4 câu/phần, **mỗi lần hiện một câu**, phong phú loại hình và có phản hồi/được thử lại.
- Một câu trả lời sai mở cơ hội sửa; lời giải chỉ hiện sau lần kiểm tra đúng ở câu đó. Kết quả tự kiểm tra không tự động xác nhận MASTERED.
- Màn học viên không cuộn ở kích thước trình chiếu; trên điện thoại hoặc zoom có thể cuộn để không cắt nội dung.

## Bảng bổ sung
| Phần | Active Recall | Ôn tập | Số câu | Kiểu câu |
|---|---|---|---:|---|
| ACT01 — Cookie là gì? | A1-04 | A1-05 | 3 | Chọn một, Ghép đôi, Đúng/sai |
| ACT02 — Cơ chế lưu và gửi Cookie | A2-06 | A2-07 | 4 | Chọn một, Sắp xếp, Chọn nhiều |
| ACT03 — Thời hạn của Cookie | A3-03 | A3-04 | 3 | Ghép đôi, Đúng/sai, Chọn một |
| ACT04 — Công dụng và quyền riêng tư | A4-03 | A4-04 | 3 | Ghép đôi, Đúng/sai, Chọn nhiều |

## Yêu cầu rõ ràng để triển khai ở Skill 11
1. Ghi nhận trạng thái từng cue `RECALL_ATTEMPTED`, `RECALL_REVEALED`; chỉ cho đối chiếu sau khi học sinh xác nhận đã tự thử; **không tự coi là đã thuộc**.
2. Câu hỏi phải có ID ổn định, loại hình, đáp án, lời giải, cờ `ATTEMPTED`, `CORRECT`, số lượt thử, hỗ trợ khôi phục tiến độ.
3. Một màn có nhiều câu theo dạng mini-carousel nội bộ; không tách thành quá nhiều slide hoặc dồn tất cả câu lên màn.
4. Ghép đôi/trắc nghiệm/sắp xếp phải cho chọn bằng chuột, cảm ứng và bàn phím; cần nhãn truy cập.
5. Sắp xếp không được hiển thị các bước theo đúng thứ tự ngay ban đầu (có `display_order`).
6. Giữ độc lập EXIT: các câu luyện tập có đáp án phản hồi trong client không được dùng làm khóa đánh giá.
7. Giữ mạch liên kết, không Dual View, không thanh hướng dẫn cố định, không lộ đáp án trước.

## Thời lượng
- Phần học chính đã phê duyệt trước: **2.520 giây (42 phút)**.
- Thêm năm màn: A1-04 120 giây, A1-05 150 giây, A2-07 180 giây, A3-04 150 giây, A4-04 150 giây = **750 giây (12 phút 30 giây)**.
- Đề xuất mới: **3.270 giây (54 phút 30 giây)** cho phần chính; ôn nền D0-R01/R02 chỉ khi cần, P00/P07 ngoài phần chính.
- Đây là dự toán cần phê duyệt nếu muốn đổi thời lượng; chưa điều chỉnh kế hoạch Skill 08 gốc.

## Ghi chú kiểm chứng
- Kiểm tra JS syntax Node: đạt. Mô phỏng DOM tĩnh Node: 30/30 màn render, không có lỗi runtime; kiểm thử các câu chọn một/ghép/đúng-sai/sắp xếp/chọn nhiều: đạt.
- Chưa thể thực hiện Chromium screenshot trong môi trường hiện tại do policy chặn truy cập trang local; **không tuyên bố đạt kiểm thử bố cục bằng trình duyệt**.
- Đây là bản **Skill 09–10 v3.5.3 đề xuất**; Skill 11 chưa chạy, Skill 09 v3.5 đã chốt không bị ghi đè.
