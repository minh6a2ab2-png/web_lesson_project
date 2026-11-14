# Skill09 v3.2 – THANG ĐÁNH GIÁ MỨC PHÙ HỢP GIAO DIỆN

**Mục đích:** chọn layout hợp mục tiêu, không chạy theo hiệu ứng. Chấm 0 = không phù hợp; 1 = lợi ích thấp; 2 = hợp tùy ngữ cảnh; 3 = ưu tiên nếu đủ học liệu. Điểm là **heuristic thiết kế**, không phải chỉ số hiệu quả thực nghiệm.

| Nhiệm vụ | Presentation | Story | Lab | Map | Focus | Dual (tùy chọn) | Tiêu chí quan sát |
|---|---:|---:|---:|---:|---:|---:|---|
| Giải thích một ý, câu ngắn | **3** | 1 | 0 | 1 | 1 | 0 | Một ý chính, học sinh diễn giải lại |
| Dẫn dắt nguyên nhân – kết quả theo trình tự | 1 | **3** | 2 | 1 | 1 | 1 | Từng bước dẫn đến suy luận tiếp theo |
| Thay đổi biến/điều kiện rồi quan sát | 1 | 2 | **3** | 0 | 1 | 2 | Có input → dự đoán → chạy → output chính xác |
| Đối chiếu hai trường hợp/scene | 2 | 1 | 1 | 0 | 1 | **3** | Cùng tiêu chí, hai nguồn cần xem đồng thời |
| Liên kết nhiều khái niệm / học thuộc cấu trúc | 1 | 1 | 0 | **3** | 2 | 2 | Quan hệ thực sự cần hình mạng khái niệm |
| Tự nhớ, viết, vẽ, giải thích cho bạn | 1 | 0 | 0 | 1 | **3** | 1 | Che tài liệu, ghi được sản phẩm độc lập |
| Luyện tập thẻ / phân loại đơn giản | **3** | 1 | 2 | 1 | 2 | 2 | Các thẻ đủ rõ; không cần Lab giả |
| EXIT đánh giá độc lập | 0 | 0 | 0 | 0 | 0 | 0 | Assessment riêng; Dual = bài + giấy nháp |

## Quy tắc áp dụng

- Luôn xác định **nhiệm vụ học sinh thực sự làm** trước khi chọn UI.
- Chỉ kích hoạt các mode ngoài Presentation khi có tài nguyên READY/PROTOTYPE đã test và phản hồi đúng; nếu không dùng slide fallback. Nếu tương tác mới là spec, chưa nâng mode mặc định.
- Dual View **luôn có nút** và chỉ bật khi người dùng yêu cầu; không bị dùng để thay thế mode theo nhiệm vụ.
- Kiểm tra tải nhận thức: không hiển thị đồng thời hai khối thông tin không liên quan; không dùng hoạt ảnh/trang trí chỉ vì đẹp.
- Khi mode hỗ trợ không hoạt động offline hoặc không truy cập được bằng bàn phím, fallback slide/nội dung giấy.
- Không lưu dữ liệu cá nhân, cookie thật, địa chỉ thật; không dùng tốc độ làm điểm hiểu bài.

## Tiêu chí chấm điểm quyết định giao diện (mỗi tiêu chí 0–2)

1. **Pedagogy Fit:** có làm học sinh thực hiện hành vi nhận thức cần đánh giá? (0–2)
2. **Interaction Value:** có thêm khả năng thử/so sánh mà slide không có? (0–2)
3. **Resource Readiness:** học liệu/file thực có đúng và mở được? (0–2)
4. **Attention Fit:** có ít thông tin nhiễu và không lộ lời giải? (0–2)
5. **Resilience:** có hoạt động offline, keyboard, mobile và fallback? (0–2)

Chỉ dùng mode nâng cao khi **tổng ≥ 8/10**, và **không có 0** ở Resource Readiness hoặc Attention Fit; otherwise dùng Presentation. EXIT áp chính sách riêng, không chạy scoring. Đây là ngưỡng đề xuất thiết kế cần kiểm nghiệm, không phải bằng chứng khoa học.
