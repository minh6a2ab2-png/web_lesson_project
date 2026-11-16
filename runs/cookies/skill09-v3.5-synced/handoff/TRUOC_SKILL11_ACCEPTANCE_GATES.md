# KIỂM TRA TRƯỚC KHI CHẠY SKILL11

## A. Đã kiểm tra tự động trên hợp đồng

- [x] 22 ID gốc được bảo tồn, duy nhất, đúng thứ tự nguồn.
- [x] 3 ID thêm có mục đích, trigger/rejoin và căn cứ.
- [x] 20 core + 3 optional + 2 conditional = 25 định nghĩa.
- [x] D0 180s, ACT01 360s, ACT02 720s, ACT03 420s, ACT04 360s, ACT05 480s = **2.520s**.
- [x] 2 recovery 45s + 45s không được cộng lén vào core.
- [x] Không còn `dual_view`/`active_pane` trong scene contract v3.5.
- [x] TEACH A1-02/A2-01/A2-02/A3-00 không còn yêu cầu ô nhập bắt buộc.
- [x] Mỗi scene có mục đích dễ hiểu, action, product, condition, layout, copy, bridge, attempt/evidence and tutor/interaction policy.
- [x] Hai màn EXIT có chính sách độc lập và tách đáp án teacher.

## B. Những điều Skill10 cần test lại trước khi bảo đảm học sinh xem được

- [ ] Hình hi-fi mới D0-R01 hiển thị Request và Response dễ nhìn, không cuộn, chỉ xuất hiện trên nhánh cần ôn.
- [ ] Hình hi-fi mới D0-R02 dùng ví dụ theme=dark rồi học sinh tự đọc language=vi.
- [ ] Hình hi-fi mới A3-00 dạy đủ hai quy ước mà không lộ 6 kết quả timeline.
- [ ] D0-01 có đủ 2 chiều và một cách giải thích lý do, nếu sai dẫn sang D0-R01.
- [ ] D0-02 đã thử nghĩa tên–giá trị trước khi xem chú giải.
- [ ] A1-03 chọn 3 thẻ, phản hồi theo từng lỗi, không lộ đáp án ban đầu.
- [ ] A2-03 và A3-01 dự đoán trước khi chạy/reveal.
- [ ] A3-02 che nhãn loại trước khi phân loại; A4-01 ẩn công dụng trước khi ghép; A4-02 không bật phản ví dụ sớm.
- [ ] A2-06 cho phép ghi nhận paper/oral không giả chấm.
- [ ] A5-01 chuyển vào EXIT bằng xác nhận rõ; A5-02 không có glossary/tutor/teacher notes/answer leakage.
- [ ] P07-01 hỗ trợ vẽ trống trước khi lộ bốn nhánh; P07-02 không đánh giá bằng số lần lật thẻ.
- [ ] Core không cuộn tại 1366×768; mobile/zoom cho phép cuộn trợ năng, không tràn ngang.
- [ ] Popover keyword ở đúng từ khóa, không chèn thêm text xuống dưới; icon có aria/tooltip.
- [ ] Bản EN có bản dịch thật trước khi bật công tắc; nếu chưa, tắt công tắc và ghi `EN_PENDING`.

## C. Test cài đặt phải thuộc Skill11, không thể báo ĐẠT khi mới có contract

- [ ] Lưu tiến độ/draft qua refresh và offline; fallback nếu storage không dùng được.
- [ ] Các loại feedback chính xác với dữ liệu học sinh và giữ đáp án khi retry.
- [ ] Tách learner/staff build, không đóng gói đáp án EXIT, không xem trộm teacher modal.
- [ ] Thử back/history để kiểm tra khóa UI; ghi hạn chế bảo mật của offline client.
- [ ] Test điều kiện giả lập accept/block/expiry/domain/path đúng với mô hình; không thao tác Cookie người học.
- [ ] Test NVDA, keyboard, touch, Escape, prefers-reduced-motion, browser Chrome/Edge/Windows file://.

**Kết luận:** hợp đồng logic đã đồng bộ; cần Skill10 visual delta/re-review ở màn mới và màn sửa interaction, rồi mới bắt đầu Skill11 production. Đây không phải thất bại của CR hay sự chưa thống nhất về mục đích.

**Có bản phác thảo trực quan cho 3 màn mới:** `reviews/3_MAN_MOI_XEM_TRUOC.html`; vẫn chưa có walkthrough/đồng bộ với 25-screen prototype cũ và chưa có phê duyệt hình ảnh.

**Có bản phác thảo trực quan cho 3 màn mới:** `reviews/3_MAN_MOI_XEM_TRUOC.html`; vẫn chưa có walkthrough/đồng bộ với 25-screen prototype cũ và chưa có phê duyệt hình ảnh.
