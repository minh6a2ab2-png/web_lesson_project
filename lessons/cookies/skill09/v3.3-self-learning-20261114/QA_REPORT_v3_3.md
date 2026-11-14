# Skill 09 v3.3 — QA và nghiệm thu (14/11/2026)

**Kết luận:** `SKILL09_DESIGN_PASS / LOW_FI_PROTOTYPE_VERIFIED / NOT_SKILL11_COMPLETE / NOT_PILOTED`.

## Dữ liệu
- Giữ nguyên 22/22 ID và thứ tự từ Skill09 v3.2; giáo án 42 phút D0–ACT05; P00 và P07 ngoài 42 phút.
- 22/22 có mục đích, nhiệm vụ, 2–5 bước, lời thoại vào trang, thông báo nhắc, feedback, tiêu chí và chuyển cảnh riêng.
- 20/20 cảnh không phải EXIT có hỗ trợ gợi ý theo nội dung. Hai cảnh ACT05 chỉ có hướng dẫn thao tác, không gợi ý nội dung.
- Không có đáp án giáo viên trong HTML; một số kiến thức chốt được nhúng client để mở sau khi người học đã thử (không phải đánh giá EXIT).
- Định nghĩa Skill 09 v3.3 đã được dùng; các artifact cũ không bị thay thế.

## Chromium headless (nội dung HTML được đưa vào page.set_content)
- Viewport: desktop 1440×900, tablet 820×950, mobile 375×812.
- Không phát hiện JS pageerror hoặc tràn ngang ở ba kích thước trên.
- Đã thử hiển thị mục đích, nhiệm vụ, trợ giảng, gợi ý H1, khóa giải thích trước thử, lưu ghi chú thủ công, Sổ tay, Dual N/N+1 và N/M, ratio 60/40, EXIT cô lập + giấy nháp.
- Đã thử H3 bị chặn trước lượt thử và xuất hiện sau lượt thử ở D0-01; thẻ kiến thức hiển thị trong Sổ tay sau lưu ở D0-01.

## PDF/Word
- 3 DOCX đã render thành PDF và PNG, kiểm tra các trang liên tiếp, không phát hiện trang trắng; tệp PDF có nội dung văn bản trích xuất được.

## Chưa kiểm chứng, không được nhận là đã hoàn thành
- `file://` mở trên máy người dạy: trình duyệt QA chặn truy cập trực tiếp (`ERR_BLOCKED_BY_ADMINISTRATOR`); thử nghiệm page.set_content không tương đương kiểm thử offline thật.
- Chưa tích hợp engine đánh giá Skill07 (`learning_lab.html`, `visual_lab.html`, `exit_independent.html`) với Sổ tay.
- Chưa chấm kết quả tự động: nút “Tôi đã thử” chỉ xác nhận thủ công, không đánh giá đúng/sai.
- Học liệu Website UI Pair, timeline trống, flashcards, ma trận công dụng còn ở mức mock/spec; xem gap register.
- Phiên bản đang xem mới có lời thoại tiếng Việt; chuyển EN/VI toàn bộ phải triển khai ở Skill10–11.
- Chưa thử NVDA/screenreader, iOS Safari, Android thực, Windows file://, localStorage sau refresh, chống mất dữ liệu trong mọi nhánh, bài thi thật và pilot tự học.
- Một số luồng Dual View/ứng dụng hoàn thiện chỉ mới có demo, không bảo đảm trạng thái câu trả lời được đồng bộ giữa hai pane; cần Skill11.

## Yêu cầu trước khi phát hành
Kiểm thử end-to-end Skill11 trên Chrome/Edge/Safari với tệp local và máy học sinh, đo hiểu nhiệm vụ với học sinh chưa học Cookies; cập nhật gate trước khi dạy thử thực tế.
