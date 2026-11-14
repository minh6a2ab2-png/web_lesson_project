# ĐỀ XUẤT SKILL 09 v2.1 – Modern Teaching Slide + Dual View

**Ngày:** 2026-11-14  
**Trạng thái:** Đề xuất để thống nhất, **chưa thay thế Skill 09 v2.0**.  
**Nguồn:** prototype Cookies 22 scene của Skill09 v2.0; kịch bản Skill06; học liệu Skill07 v1.1; giáo án Skill08; tài liệu hướng dẫn thiết kế slide giảng dạy từ McGill, Monash, UC San Diego và University of Toronto.

## A. Điều giữ nguyên

- Bộ **12 Skills** và thứ tự triển khai đã thống nhất; Skill 09 thiết kế kiến trúc nội dung + layout, Skill10 làm visual hi-fi, Skill11 làm engine, Skill12 kiểm định.
- Các chặng P00, D0, ACT01–ACT05, P07; 22 scene hiện có và thời lượng 42 phút cho D0–ACT05.
- Mạch `hiện tượng → dự đoán → giải thích/tương tác → phản hồi → recall`.
- Tách nội dung teacher/student; EXIT độc lập; các mô hình Cookie là mô phỏng, không dùng cookie cá nhân.
- Phong cách màu xanh lam – xanh ngọc, bố cục rộng, header mỏng và typography rõ.

## B. Thư viện layout đề xuất (mới hoặc nâng cấp)

| Layout | Vai trò sư phạm | Ví dụ Cookies | Học liệu cần |
|---|---|---|---|
| **Visual Story / Real UI State** | Nêu tình huống ở một bối cảnh xuyên suốt | Website trước và sau khi chọn Tiếng Việt | Hai screenshot hoặc hai trạng thái giao diện giả lập, cùng kích cỡ |
| **Progressive Diagram** | Xây quy trình theo nhịp, chỉ mở bước liên quan | Request → Set-Cookie → lưu → gửi Cookie | SVG/HTML trạng thái và điều khiển Trước/Tiếp |
| **Before/After Switch** | Thử sự khác biệt cùng điều kiện | Chấp nhận / chặn Cookie | Một mô hình với hai biến thể trạng thái |
| **Annotated UI Hotspot** | Giải thích các điểm trong giao diện | Nút chọn ngôn ngữ, thông báo quản lý Cookie | Ảnh UI gốc + chú thích có nguồn và text alternative |
| **Worked Example → Your Turn** | GV mẫu một bước, HS tự hoàn thiện phần còn lại | GV làm Request, HS lắp Set-Cookie/Cookie | Bộ mũi tên trống + engine dự đoán/feedback |
| **Knowledge Map / Retrieval** | Kết nối ý và ghi nhớ chủ động | Cookies: cơ chế, loại, công dụng, privacy | Mind-map trống và bản chuẩn teacher-only |
| **Evidence Spotlight / Zoom** | Phóng to chi tiết trong hình cần giải thích | Header `Set-Cookie` so với `Cookie` | Cắt vùng minh họa/ảnh chụp hoặc SVG chú thích |
| **Dual View** | So sánh/đối chiếu hai scene như slide kép | Lượt đầu vs lượt sau; Session vs Persistent | Dùng lại chính hai scene; không cần tạo hai bản chụp |

**Hướng thiết kế khuyến nghị:** tối giản để giảng giải (A) + kể chuyện qua trạng thái (B), xen mô phỏng trực tiếp (C) chỉ ở các hoạt động có thao tác. Không áp mọi layout cho mọi bài.

## C. Chế độ Dual View đã có trong bản thử

- **Một slide (mặc định):** rộng, tập trung, đọc rõ khi chiếu.
- **Hai slide liền kề:** tự ghép `i + (i+1)`, điều hướng theo cặp.
- **Hai slide bất kỳ:** hai danh sách chọn slide độc lập, đổi vị trí trái/phải và điều hướng từng khung.
- **Tỷ lệ ngang:** 50/50, 60/40, 40/60 trên desktop.
- **Tablet/mobile:** hai khung xếp dọc thay vì co chữ xuống nhỏ; từng slide có vùng cuộn riêng.
- **Điều hướng và quyền truy cập:** slide EXIT/đánh giá không đưa vào lựa chọn xem kép, vì có thể phá mục tiêu đánh giá độc lập. Bản prototype chưa có engine assessment.
- **Cần phát triển trong Skill11:** nhớ trạng thái từng pane, fullscreen từng pane, thu phóng nội dung SVG/video, đồng bộ/tách điều khiển hoạt ảnh, phím tắt có hướng dẫn, khả năng chọn từ mục lục.

## D. Kiểm toán học liệu của 22 scene

Từ `Scene_Spec.json` v2.0: **6 scene có trường `asset` trỏ tới một file SVG**, **16 scene có trường `asset` trống**. Điều này **không có nghĩa 16 scene thiếu học liệu**: slide câu hỏi, thẻ, EXIT hoặc recall có thể chủ đích không có ảnh. Tuy nhiên các scene trình bày hiện tượng, quá trình và so sánh cần được audit từng cái.

| Mức | Scene/nhóm | Nhu cầu trước khi làm lại |
|---|---|---|
| P0 | A1-01 | Hai màn website trước/sau chọn Tiếng Việt từ cùng HTML bối cảnh |
| P0 | A2-02, A2-03 | Tái sử dụng visual_lab hoặc SVG, tạo state minh họa để HS chọn chiều và chấp nhận/chặn |
| P0 | A3-01 | Timeline trống để dự đoán; chỉ mở phiên bản chuẩn sau lượt thử |
| P1 | A4-01 | Ba tình huống SHOP/LANGUAGE/ANALYTICS dưới dạng thẻ UI đồng dạng, không cần stock photo |
| P1 | A4-02 | Ma trận phân biệt tuổi thọ (session/persistent) và mục đích (tracking/khác) |
| P1 | P07 | Mind-map trống, bộ flashcard, bản in offline |
| Tùy chọn | P00, A1-02 | Minh họa trình duyệt/trang web, hình biểu tượng tự tạo; không cần video |
| Chỉ khi thật sự cần | Thao tác trong trình duyệt thực | Ảnh chụp Chrome/Edge ở phiên bản cụ thể hoặc screencast ngắn; nội dung giả lập/an toàn |

**Không mặc định sản xuất MP4**: ACT02 cần tương tác, nên ưu tiên mô phỏng HTML/SVG; video chỉ phù hợp khi muốn học trước ở nhà hoặc có thao tác UI thực không thể mô phỏng gọn.

## E. Ai chuẩn bị gì? Theo 12 Skills

- **Skill 05:** lập danh mục, tìm nguồn/giấy phép, quyết định REUSE/CREATE; không chỉ gợi ý.
- **Skill 07:** tạo SVG, mock website, hình chụp, video khi có nhu cầu; cung cấp alt/caption, fallback offline; kiểm thử.
- **Skill 09:** chỉ rõ scene nào dùng asset nào, trước/sau khi HS trả lời, và layout nào phù hợp; đặc tả Dual View.
- **Skill 10:** thiết kế hi-fi và các trạng thái reveal, 16:9-like canvas mềm dẻo, responsive và split-screen.
- **Skill 11:** lập trình thực sự bộ điều khiển, dữ liệu hai pane, trạng thái/tương tác độc lập, PDF fallback.
- **Skill 12:** test desktop 1440/1366, tablet 820/768, mobile 375/320; kiểm tra lớn chữ, tương phản, keyboard, không lộ key, thử dạy 1:1.

## F. Tiêu chí chốt trước khi làm lại toàn bộ

1. Giữ phong cách **Minimal Classroom**: nền sáng, xanh lam/xanh ngọc, nhấn vàng nhẹ, visual chiếm chỗ chính.
2. Lựa chọn mặc định **một slide**; Dual View bật theo nhu cầu; hai slide bất kỳ là tùy chọn, không phải kiểu mặc định của tất cả scene.
3. Tối đa 8–10 pattern nền tảng dùng chung, không làm 22 layout khác nhau.
4. Kiểm kê/tạo các asset P0 trước thiết kế hi-fi để slide không phải placeholder.
5. Không thay bộ đề/giáo án: mạch nội dung Skills 01–08 vẫn là căn cứ; cải tiến này tập trung vào trình bày.

## G. Trạng thái kiểm thử prototype

- Có HTML/CSS/JS gốc v2.0 và `dual-view.js`/CSS mở rộng; không phụ thuộc CDN.
- Node syntax: pass; Playwright bằng `page.set_content` đã thử các thao tác chọn mode, hai slide liền kề, hai slide bất kỳ, đổi vị trí và kiểm tra tràn ngang ở 1440px, 820px, 375px: pass.
- Môi trường Chromium hiện chặn điều hướng trực tiếp `file://` và `localhost`, nên **chưa xác minh mở trực tiếp offline** bằng trình duyệt. Cần thử trên máy giáo viên trước khi dạy.
- Prototype chưa có engine câu hỏi/trả lời; không được đánh dấu READY_TO_TEACH.
