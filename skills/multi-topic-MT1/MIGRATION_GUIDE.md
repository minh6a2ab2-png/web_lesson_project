# Áp dụng vào bài thực tế mà không làm mất lịch sử

1. Giữ bản Cookies 30 màn nguyên vẹn để làm regression fixture, không tái sử dụng 30 làm quota. Bài DNS/HTML/Cookie phải tạo `lesson_session` mới và mục tiêu/section của buổi.
2. Xuất phát từ **nội dung cần học và thứ tự tiên quyết** (Skills 01–03), sau đó đánh giá phương pháp (04), tài nguyên (05/07), kịch bản (06), giáo án (08). Không nhảy thẳng sang HTML website.
3. Mọi scene/asset/question/cue có `section_id` và `objective_ids`. Tái dùng sơ đồ browser-server nhưng không nhầm nội dung: mỗi scene vẫn có mục tiêu của section sở hữu.
4. Chạy validator fixture trong `tests` để xác nhận các gate cấu trúc; không công bố bài chỉ vì validator PASS.
5. Nếu có một nhóm kiến thức nhỏ chỉ để chuyển mạch, đặt `kind=BRIDGE`, không tạo cặp Recall/Quiz thứ tư. Nếu thực sự là CORE objective mới, phải thêm section và thời gian theo CR.
6. Khi giáo án thực tế có giờ 45/90/120 phút, để `USER_APPROVAL_REQUIRED` cho tới khi người dùng chốt; không dùng 120 của mẫu.
7. Nếu hướng tới pipeline `13-skill-workflow-v4.md`, chuyển dữ liệu theo vai trò như `PIPELINE_CROSSWALK.md`, không đánh số skill bằng cách sao chép thư mục.
8. Chỉ cập nhật GitHub `main` nếu người dùng xác nhận muốn nhập nhánh. Chạy Skill13 độc lập và thử với học sinh nếu phát hành chính thức.

## Không được bỏ qua bài học rút từ Skill13 Cookies
- Mục lục/Next/resume dùng cùng navigation guard; kiểm thiếu Recall/Quiz trước khi vượt section.
- Mục tiêu về tracking phải giải thích mã gửi lại có thể cho phép liên hệ các request, nhưng không suy mọi Persistent Cookie đều tracking.
- Modal có focus management; có xóa tiến độ trên máy chung, zoom/landscape hoạt động, tiếng Anh chỉ bật khi bản dịch đã kiểm thử.
