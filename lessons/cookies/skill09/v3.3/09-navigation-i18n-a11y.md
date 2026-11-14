# 09 – Điều hướng, Tutor Layer, A11y, Offline

## Shell mặc định
```
[←] [→] [08/22]                         [Dual View] [Sổ tay] [Lưu] [⋯]
MỤC ĐÍCH  ·  NHIỆM VỤ HIỆN TẠI
[ học liệu chính + thao tác + phản hồi đúng lúc ]
                                      [Trợ giảng: một lời ngắn có thể thu gọn]
```
Không có footer, logo lớn, menu lesson mở sẵn, tabs 6 mode hoặc mô tả demo. Các bước hiển thị khi cần; tiến độ bước dạng Bước 2/4.

## Tutor Layer
- Một bong bóng/khung thoại không che nội dung. Mặc định mở một câu đầu, nút [Thu gọn]; biểu tượng trợ giảng luôn có để gọi lại.
- Nhắc lại / Gợi ý H1-H3 / Xem bước / Giải thích ngắn. H3 chỉ sau lượt thử; phản hồi sau action, không autoplay.
- Trên Dual: chọn khung đang nhận trợ giúp; pane còn lại không mở thoại cạnh tranh. Mobile: tutor gọn bên dưới vùng hiện tại.
- EXIT: trợ giảng chỉ hướng dẫn thao tác trung tính, không dùng nội dung từ Sổ tay.

## A11y và offline
- Có tab/enter/escape, aria-label cho biểu tượng, focus ring, đủ tương phản; không dựa màu sắc một mình.
- Ưu tiên `prefers-reduced-motion`, dừng animation, alt/caption, text equivalent bên cạnh sơ đồ và video transcript nếu có.
- Nút và nội dung không dính header, không vỡ bố cục 375, 820, 1440px; dual xếp dọc trên màn nhỏ.
- Mô phỏng phải có fallback giấy/text; mọi kết quả cần phù hợp với lời thoại và thẻ kiến thức.
- Mặc định tiếng Việt; giải nghĩa thuật ngữ tiếng Anh ở lần xuất hiện đầu (Request/Response/Session/Persistent/Tracking).
- Dùng local asset gốc; tài nguyên còn SPEC_ONLY phải để placeholder mô tả và fallback, không khai đã có video/hình.
