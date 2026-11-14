# 09 – Hợp đồng tương tác & trợ giảng v3.3

## Trình tự learner-first (không tự chấm khi chưa có engine)
1. Vào scene → đọc **Mục đích** + **Nhiệm vụ** (không lộ kết luận nếu đó là câu hỏi dự đoán).
2. Tutor hiện câu dẫn một lần, không tự phát âm thanh; người học có thể thu gọn.
3. Các bước 2–5 bước, đánh dấu bước đang làm; nút **Tiếp bước** khác nút **Màn tiếp**.
4. Có thể nhập dự đoán/vẽ trên giấy/đánh dấu lựa chọn. Người học bấm **Đã thử**. Đã thử ≠ đúng.
5. Sau lượt thử: mở tối đa H3 và thẻ kiến thức nếu tiêu chí đạt hoặc được xác nhận thủ công; nếu chưa đạt thì chỉ phản hồi cách sửa.
6. Ghi dữ liệu vào Sổ tay theo trạng thái `draft/attempted/submitted/reviewed`. Không chấm điểm tự động với câu mở nếu không có thuật toán/human review.

## Interaction states
| Tình huống | Event | Trạng thái và phản hồi | Phòng ngừa |
|---|---|---|---|
| Mở scene | `enterScene` | intro ngắn + bước 1 + trạng thái `ready` | Chỉ nêu mục đích; không lộ đáp án |
| Đọc gợi ý | `hintRequest` | H1 → H2; H3 chỉ sau `attempted` | Ghi mức hỗ trợ, không làm thay |
| Bấm Đã thử | `markAttempt` | Lưu một lượt thử, hiện phản hồi chờ đối chiếu | Không gọi là đúng khi chưa chấm |
| Làm sai | `retry` | Nêu loại lỗi, giữ sản phẩm cũ để sửa | Không xóa lời làm tự động |
| Lưu ghi chú | `saveEvidence` | `saved_not_graded` | Nút Lưu không tăng mastery |
| Xác nhận hoàn thành | `completeAfterEvidence` | Mở thẻ kiến thức ở scene thích hợp | Sau lượt thử, phải có bằng chứng |
| Chuyển scene | `nextScene` | Bảo toàn dữ liệu cũ | Không nhảy qua EXIT để đọc key |
| Dual bật | `toggleDual` | N/N+1 hoặc hai scene bất kỳ | H1–H3 theo khung được chọn |
| Mở sổ tay | `openNotebook` | Nhiệm vụ hoàn thành và kiến thức đã học | EXIT khóa hoàn toàn nội dung cũ |
| Vào EXIT | `enterAssessment` | Chỉ hướng dẫn cách làm, không gợi ý nội dung | Bên phải Dual chỉ là giấy nháp |

## Quan trọng về prototype
Bản minh họa trong gói chỉ cho thử workflow/khung trình bày. Nó không thực hiện chấm tự động các bài Skill07, không chứng minh mastered, không phải một bài học đã được kiểm thử hoàn toàn.
