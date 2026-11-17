# Nguồn fixture
- `cookies_25_contract.json`: hợp đồng đã đồng bộ Skill09–10 v3.5 (25 màn), dùng làm **đối chứng thất bại**.
- `cookies_30_contract.json`: proposal Skill10 v3.5.3 30 màn (13 câu), chưa duyệt thời lượng mới.
- `cookies_30_review_bank.js` và `cookies_30_app_with_recall_bank.js`: mã nguyên mẫu thật, phục vụ kiểm cấu trúc; không tự gọi đã chạy browser.
- `*_normalized.js`: bản **phái sinh dành cho chuẩn hóa ID ổn định**, thêm question_id/cue_id mà không sửa đáp án/tư liệu gốc, không làm thay đổi website xem thử; để đưa vào hợp đồng Skill09 trước Skill11.
