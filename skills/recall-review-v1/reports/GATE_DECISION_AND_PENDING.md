# Quyết định kiểm định gói nâng cấp

| Gate | Trạng thái | Bằng chứng |
|---|---|---|
| Đủ Recall + Quiz sau ACT01–ACT04 của bản Cookies 30 màn | **STRUCTURE_PASS** | 4 cặp đúng thứ tự; 13 câu; 5 kiểu; 3 cue mỗi chặng |
| Bộ kiểm thử phát hiện thiếu cặp | **PASS** | 25 màn cũ và các biến thể cố ý làm sai đều FAIL |
| ID ổn định cho cue/question ở bản sản xuất | **PREPARED_NOT_INTEGRATED** | Có `fixtures/*_normalized.js`; trang xem thử 30 màn gốc chưa được cập nhật |
| Thời lượng 54:30 so với giáo án 42:00 | **PENDING_USER_APPROVAL** | +750 giây; không thay giáo án cũ |
| Kiểm thử giao diện bằng browser của bản 30 màn | **NOT_VERIFIED_HERE** | Kiểm tra tĩnh không thay E2E, phải chạy lại trước Skill 11/13 |
| Kiểm thử với học sinh thật | **NOT_RUN** | Không thể suy ra từ JSON/JS unit test |
| Skill11 đã lập trình bản sản xuất 30 màn | **NOT_RUN** | Chỉ cập nhật định nghĩa skill, chưa triển khai website chính thức |

**Tổng kết:** định nghĩa Skill 02/04/06–13 đã có gate mới. `RR_STANDARD_READY`, nhưng `SKILL11_PRODUCTION_HANDOFF` còn bị chặn bởi phê duyệt thời lượng, đồng bộ ID vào hợp đồng/ứng dụng, và nghiệm thu trực quan. Gói này không tuyên bố hoàn thành dạy thật.
