# PHẠM VI VÀ GIỚI HẠN SAO LƯU

## Đã sao lưu trong ZIP đầy đủ
- Mọi **file thường** hiện có dưới `/mnt/data` ở thời điểm tạo bản lưu, trừ thư mục tạm `user-*` do công cụ tạo ảnh và **trừ chính file backup đang được tạo**. File có cả các ZIP lịch sử Cookies, DNS, Internet & WWW, bộ MT1 13 skill, RR Gate và các báo cáo Skill13.
- Bảo toàn **tên file và cây thư mục tương đối** trong `TAI_LIEU_GOC/`.
- Bảng SHA-256 của từng file + size, để kiểm tính toàn vẹn sau tải.
- Tài liệu bàn giao, quyết định và ngữ cảnh viết mới trong `HO_SO_BAN_GIAO/`.

## Chưa thể gọi là sao lưu toàn bộ dữ liệu tài khoản
- **Không có bản chat nguyên văn hay suy luận ẩn:** Trợ lý không thể xuất toàn bộ bản gốc tất cả các lượt trò chuyện trong ChatGPT từ đây. Tài liệu bàn giao chỉ tóm tắt bối cảnh quyết định. Muốn lưu nguyên văn lịch sử, người dùng cần tính năng **Export data** của ChatGPT (khi có), và giữ bản xuất ở nơi riêng.
- **Không clone toàn bộ GitHub với lịch sử commit:** bản ZIP chứa file dự án mount được, cùng link tới repo/branch; lịch sử Git và các file chỉ có trên server không được tuyên bố nằm trong ZIP.
- **Không tải hết Drive:** các Drive folder ở danh mục nguồn vẫn nằm trên Drive; chỉ tài liệu đã có bản local được đưa vào ZIP.
- **Không xác minh file với Windows thực hoặc học sinh thật:** các báo cáo QA mô phỏng không thay thế thử nghiệm thực tế.
- Dữ liệu có thể phát sinh **sau ngày chốt** không tự cập nhật vào ZIP. Muốn cập nhật sao lưu cần tạo snapshot mới.

## Cách bảo vệ dữ liệu
- Tải ZIP về thiết bị cá nhân hoặc ổ lưu trữ khác, tránh chỉ dựa vào duy nhất Google Drive hoặc GitHub.
- Gói lưu trữ không được mã hóa bằng mật khẩu. Không đăng công khai nếu có tài liệu lớp học/đánh giá; cân nhắc quyền truy cập khi chia sẻ.
- Nếu cung cấp dữ liệu cho ChatGPT ở cuộc trò chuyện khác, gửi **tối thiểu file cần thiết**, vì bộ đầy đủ có nhiều bản lịch sử và có thể lớn.

## Cách kiểm tính toàn vẹn
1. Kiểm tra SHA-256 của file ZIP theo giá trị trong `KIEM_TRA_BAN_SAO.md` / phần cuối trả lời.
2. Giải nén `DANH_MUC_TEP_VA_HASH.csv`, chọn từng file quan trọng và tính SHA-256; giá trị phải khớp.
3. Trong ZIP ưu tiên dùng **bản mới** theo `BAT_DAU_TAI_DAY.md` chứ không chọn tên có version cũ.
