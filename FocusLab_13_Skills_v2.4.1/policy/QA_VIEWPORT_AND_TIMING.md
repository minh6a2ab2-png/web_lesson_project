# Cổng QA viewport / reveal / model — dùng cho Skills 09–13

## Test matrix tối thiểu

| Môi trường | Kích thước/đặc tính | Đạt khi |
|---|---|---|
| Desktop min | 1280×720, zoom 100% | NO_SCROLL + NO_CLIP + READABLE_TEXT + FIXED_NAV |
| Desktop common | 1366×768, 1600×900, 1920×1080 | Header/main và hai nút nổi không footer cân đối, model đủ lớn, CTA không chồng |
| Compact desktop | 900×600 | Tối ưu layout; nếu bất khả thi phải khai báo ngoại lệ và scene redesign |
| Portrait mobile | 390×844, 360×640 | Không nút/kiến thức bị che, touch target đủ lớn |
| Landscape stress | 640×360 | Điều hướng vẫn dùng được, nội dung không mất; ghi ngoại lệ được duyệt nếu cần |
| A11y | Zoom 200%, keyboard, reduced motion, VI/EN | Không mất nội dung/thiếu thao tác; scroll fallback nếu cần cho phóng to chữ |

## Test Direct Display, attention và hoạt động
1. t=0: mọi nội dung hợp lệ visible và tương tác được; không nút Hiện tất cả. Title highlight 1–2 chu kỳ chậm trong 3000ms, trở về bình thường, không shift; kiểm t=0, 1.5s, ≥3s và reduced motion.
2. Next/Prev/TOC/resume/deeplink khi chưa trả lời vẫn hoạt động, không tự mastery; hủy hiệu ứng cũ, không restart vì rerender hoặc VI/EN.
3. Không nhãn sư phạm trên UI; bối cảnh và định nghĩa CORE vẫn đủ, rõ như SGK; kiểm cả hai ngôn ngữ. Inline bold tooltip trên từ khóa, hover leave/focus/touch/Esc, không overflow, không spoil.
4. Recall keyword từng lượt bấm → tập câu hỏi, không form, không key; Review có ít nhất 2 dạng đóng phù hợp, feedback đúng/sai, chưa làm không tự đúng. Mindmap ghép thẻ, teach-back miệng, flashcard tự do.
5. Mô hình state thật, Step/Reset/Play khi phù hợp, motion off cùng kết quả; kiểm khác biệt model_view_id, nội dung và control giữa các màn dùng cùng engine.
6. DIAGNOSE đúng mở recap, sai Recovery, đóng modal/thoát tuyến không mất lựa chọn; fixed nav và a11y; offline/localStorage/export-import khi có thể.
7. Kiểm từng scene bằng DOM + ảnh + thao tác; rubric và bằng chứng thực địa tách riêng.

## Hạng lỗi chặn RELEASE
- `P0`: rò answer key/đánh giá độc lập, hành động nguy hiểm ngoài phạm vi.
- `P1`: CORE không học được, clipped content, lỗi router hoặc khóa điều hướng trái DL04, fixed-nav che nội dung, mô hình cơ chế không đổi trạng thái, duplicate CTA, animation không tắt được, thiếu fallback khả dụng.
- `P2`: giảm chất lượng như focus kém, nhãn không rõ, chuyển động hơi gây phân tán, tooltip vướng nhưng còn đường dùng khác.
- `P3`: thẩm mỹ không thiết yếu.

**Lưu ý:** Script tự động chỉ xác nhận được một phần. Biên bản `TESTED_AUTOMATED` không là `VERIFIED_IN_PRACTICE`; không phát hành rộng khi chưa hoàn thành các cổng yêu cầu.

## QA v2.4
Kiểm đủ GV01–GV06 theo `GUIDED_VISUAL_STANDARD_V2_4.md`: entry coverage, 15 visual identities, Recall có cue ảnh an toàn, Review nhánh sai/câu tương đương/tổng kết, hai nút nổi fixed không footer và không che nội dung; desktop geometry + ảnh + thao tác.
