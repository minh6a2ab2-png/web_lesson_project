# Kiểm tra hợp nhất định nghĩa v2.5

- Commit nguồn `0d1e19ddc263c83a85dd14391b8d226c675fadff`. 24/24 tệp khóa đã được đọc byte base64 từ GitHub và đối chiếu SHA-256 (13 SKILL.md, các policy/schema/registry); không chỉ đọc hash khai báo.
- 132 tệp trong thư mục nguồn (gồm manifest): 112 tệp được giữ nguyên blob tại đường dẫn tương ứng; 20 tệp gốc được bảo toàn dưới `baseline_v2_4_1/`. Thư mục nguồn v2.4.1 vẫn nguyên vẹn. Các file ngoài khóa được đối chiếu Git blob, chưa tính lại SHA-256 byte riêng từng file.
- 13/13 Skill đã thêm phần v2.5, giữ nội dung gốc. Registry giữ 115 output gốc, bổ sung 13, tổng 128. Schema v2.5 giữ ràng buộc gốc; kiểm tra byte schema gốc đã khóa. Manifest được cập nhật khi xây dựng cây.
- Tài nguyên nhị phân tham chiếu nằm trong gói Drive, không có trong nhánh GitHub. Test overlay 49/49 là kết quả trước hợp nhất; chạy lại sau khi tải assets. `tests/check_consolidation.py` kiểm tra manifest và registry của bản hợp nhất khi tải về.
- Chưa chạy lại bài giảng 01–13, chưa kiểm định độc lập, chưa kiểm thử trình duyệt/field. Gate: NEEDS_REVIEW.
