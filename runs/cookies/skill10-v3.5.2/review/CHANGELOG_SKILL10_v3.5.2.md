# Skill 10 v3.5.2 — cập nhật theo hợp đồng Skill 09 v3.5

## Thay đổi được áp dụng

- Giữ 22 ID cũ và bổ sung **D0-R01**, **D0-R02** (chỉ khi chẩn đoán sai), **A3-00** (mọi học sinh) theo đúng thứ tự hợp đồng.
- Mặc định 23 màn (20 màn core 42 phút + 3 màn mở đầu/ôn). Nhánh hỗ trợ chỉ thêm khi cần.
- D0-01 kiểm tra cả Request và Response; D0-02 kiểm tra tên–giá trị. Nếu sai, `Xem tiếp` đến nhánh ôn tương ứng, rồi quay lại bài chính.
- A1-03, A2-05, A3-01, A3-02, A4-01, A4-02: học sinh thử trước, giải thích/đáp án không hiện tự động.
- A2-03: thêm dự đoán trước khi bấm Play để kết quả mô phỏng có ý nghĩa học tập.
- Từ khóa mở popover không đẩy bố cục, "Em có biết?" chỉ hỗ trợ thông tin phụ, không có Dual View.
- Gắn thêm lời dẫn giáo viên cho 3 màn mới, tổng 25/25; ghi chú thuộc lớp REVIEWER_ONLY.
- Giới hạn nội dung cho màn lớn 1366×768. Tại điện thoại/zoom, cho phép cuộn vì tiếp cận, không giấu thông tin.

## Chưa phải Skill 11

- Nhánh chẩn đoán chỉ xử lý lựa chọn ở mức nguyên mẫu; chưa đánh giá lời giải thích bằng lời/giấy.
- Chưa có lưu trạng thái lâu dài, mạng HTTP thật, chấm EXIT độc lập, hệ thống hồ sơ, song ngữ EN đầy đủ hoặc cơ chế phân quyền giáo viên–học sinh.
- Teacher notes được nhúng trong bản DUYỆT để giáo viên xem; Skill 11 phải tách khỏi gói học sinh.
- Các chức năng giáo dục / correct-choice checker là mô phỏng có dữ liệu cố định, không đo lường năng lực toàn diện.
- Chưa được người dùng duyệt trực quan bản v3.5.2; chưa được học sinh thực tế kiểm thử.
