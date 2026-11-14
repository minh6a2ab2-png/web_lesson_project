# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.

## Navigation & clean canvas
Top bar hiển thị duy nhất `[←] [→] [N/22] ... [▣ Dual View] [☷ Sổ tay] [＋ Lưu] [⋯ Công cụ]`. Mục đích là một câu, nội dung và bước hiện tại chiếm phần lớn diện tích, trợ giảng nằm trong canvas và có nút đóng/mở. Mục lục, lựa chọn tỷ lệ, dữ liệu kỹ thuật ẩn trong menu.

## Dual View
- Mặc định một scene. Người học bật Dual bất kỳ lúc nào (kể cả khi EXIT, nhưng lúc đó chỉ nhận đề + giấy nháp).
- Chọn liên tiếp N/N+1 hoặc N/M; tỷ lệ 50/50, 60/40, 40/60; swap, điều hướng độc lập, vùng cuộn độc lập; khi <900px xếp dọc. Không tự bật.
- Chỉ một tutor bubble cho pane đang tương tác, có nhãn `Màn trái / Màn phải`; ngăn nhắc hai bên cạnh tranh.

## Hỗ trợ tự học
- Mỗi scene có mục đích, nhiệm vụ, 2–5 bước nhỏ, tiêu chí xong; display current step prominent, phần dài vào ngăn tùy chọn.
- Có từ điển thuật ngữ Browser, Server, Request, Response, Set-Cookie, Cookie, Session, Persistent, Tracking; với đầu vào chưa học giải nghĩa tại điểm dùng.
- Không pop-up trôi che nút, không auto-play giọng nói. UI responsive và prefers-reduced-motion.

## Accessibility / i18n
- HTML semantic; `<button>` có nhãn, focus rõ, Escape đóng dialog, Tab không bị mắc kẹt, aria-live cho lời nhắc và phản hồi, ẩn không làm mất nội dung đang nhập.
- Dữ liệu tiếng Việt hiển thị đầy đủ; bản song ngữ EN/VI của **toàn bộ giao diện và nội dung** là yêu cầu bàn giao Skill10–11. Low-fi prototype v3.3 lần này chỉ có copy tiếng Việt, không báo song ngữ đã xong.
- Hình SVG phải có alt/caption, bản chữ và bản giấy; tương tác đều có cách dùng bàn phím và offline fallback.
