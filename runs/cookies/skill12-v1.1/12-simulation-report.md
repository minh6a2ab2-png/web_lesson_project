# Skill 12 v1.1 — Mô phỏng hành trình học sinh: Cookies v1.1

**Kết luận: `SIMULATED_AUDIT_REVISE_REQUIRED`**. Đây là kiểm toán hành trình học sinh mô phỏng, không phải thử nghiệm với học sinh thật; Skill 13 **chưa được chạy**.

## Căn cứ
- Nguồn thực tế: `11-production-site/index.html`, `style.css`, `data.js`, `app.js`, `review-bank.js`, `recall-bank.js` của Cookies Skill 11 v1.1.
- Kịch bản: A bấm qua không làm, B sai nền, C quên và bỏ qua Recall, D chọn sai rồi sửa/khôi phục, E nộp thiếu EXIT, F cô lập EXIT, G kiểm tra thiết kế.
- Mô phỏng Chromium với HTML/CSS/JS thực được nạp trong bộ nhớ, storage giả lập để kiểm soát ca; **không** phải test file:// trên Windows.
- Toàn bộ **30 màn** được liệt kê trong `12-scene-walkthrough.md`; chạy luồng đủ 28 màn bình thường tới EXIT.

## Điểm đạt
- 4 cặp Recall → Quiz hiện đúng thứ tự; 12 cue, 13 câu hỏi/5 dạng; các ID được giữ.
- D0 sai sau Check rẽ đúng D0-R01/D0-R02 rồi quay lại.
- Không lộ nội dung model của Active Recall trước khi tự xác nhận.
- Quiz sai có thể sửa đúng, đáp án và tiến độ được lưu sau phiên; EXIT không tự chấm, bài nộp thiếu không được đánh dấu hoàn thành.
- Không có lỗi JavaScript trong các kịch bản này.

## Tồn tại (7 P1, 3 P2; chưa phát hiện P0 theo quy tắc hiện tại)
- **P1 chính:** bấm Next liên tục có thể đến EXIT mà không làm bất kỳ Recall/Quiz nào; phải ghi nhận thiếu và đưa cảnh báo/chọn quay lại trước khi tiếp tục.
- Chưa làm Check ở D0 cũng bỏ qua ôn nền. Màn A2-04 chưa buộc tự dự đoán trước khi chạy mô phỏng.
- Những màn lựa chọn sai có thể hiện ngay toàn bộ đáp án, làm giảm cơ hội sửa sai độc lập.
- Recall dùng nút tự xác nhận (hợp lệ để tránh ép gõ), nhưng không được coi là đã hiểu nếu chưa có xác minh.
- Nhánh phụ P07 cho phép xem gợi ý mà chưa xác nhận tự nhớ.
- Hợp đồng local trong bộ Skill 11 vẫn chứa cờ PROPOSED/NOT_RUN cũ; bản phê duyệt được lưu ở GitHub nhánh Skill11 nhưng **phải đồng nhất lại trong ZIP của lần sửa**.

## Phán quyết
- Không ghi `SIMULATED_AUDIT_PASS`; chưa có cơ sở chạy Skill13 nghiệm thu cuối.
- Ưu tiên Skill11 v1.2 sửa P1; sau đó chạy lại tất cả ca A–G và bổ sung thử nghiệm người học thực tế nếu có thể.
- Chưa chứng minh 54 phút 30 giây là thời gian học thực; đây chỉ là **thời lượng kế hoạch đã được người dùng phê duyệt**.
