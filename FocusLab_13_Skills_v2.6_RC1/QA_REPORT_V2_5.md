# QA — FocusLab v2.5 Visual Excellence

## Đã thực hiện tại phiên tạo định nghĩa
- 49/49 phép kiểm tra trong `tests/V25_DEFINITION_QA.json`: sự hiện diện 13 module, output và lock, library/15 kinds, schema gốc đối chiếu hash và giữ ràng buộc, fixture dương/âm, quan hệ cha-con/ID/cấp, rubric, checksum tệp tham chiếu, merge registry và mock verification.
- Thực chạy `assemble_v25.py` với archive **v2.4 (không phải 2.4.1)**: BLOCKED đúng vì hash Skill01 không khớp. Không tạo thư mục output từ nguồn sai.
- SHA-256 của scene schema v2.4.1, model schema và model checklist có tệp local đối chiếu khớp nguồn trên GitHub. Manifest của base khóa 24 đường dẫn quan trọng; khi hợp nhất sẽ xác minh thêm toàn bộ tệp trong manifest gốc.
- Tài nguyên tham chiếu copy nguyên byte; QA của R2/R5 và 8 màn là hồ sơ lịch sử, không phải phép thử mới cho v2.5. R5 đã được báo cáo 66/66 trong phạm vi Chromium trước đây; không tuyên bố field, thiết bị cảm ứng thật hoặc generic engine pass.

## Chưa thực hiện / hạn chế
| Hạng mục | Trạng thái |
|---|---|
| Đọc phần quy tắc v2.4.1 của 13 Skills từ GitHub | READ_REFERENCE |
| Tải nguyên archive v2.4.1 vào container | BLOCKED (không truy cập download) |
| Hợp nhất đầy đủ với archive gốc | NOT_RUN |
| Kiểm định độc lập bộ định nghĩa hợp nhất | NOT_RUN |
| Chạy lại Internet & Web Access hoặc DNS theo v2.5 | NOT_RUN |
| Nguồn ảnh thực tế mới từ bên ngoài | OPEN |
| Kiểm tra production, file://, mobile vật lý, screen reader, zoom, field | NOT_RUN |
| Push lên GitHub hoặc lưu Drive | NOT_PERFORMED |

**Gate tổng: NEEDS_REVIEW**. 49/49 là kiểm tra cấu trúc phần nâng cấp, không đồng nghĩa với bộ định nghĩa hợp nhất hoặc bài giảng đạt cổng phát hành. Chỉ phát hành bản hợp nhất sau khi chạy assembler đúng archive và kiểm định, sau đó kiểm từng sản phẩm bài giảng theo 13 Skills.
