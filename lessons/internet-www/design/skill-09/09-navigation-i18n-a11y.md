# Skill 09 – Navigation, Accessibility, Localization & Offline Contract

## Kiến trúc website (chưa có mã sản phẩm)

**Hình thức:** file HTML thuần có thể triển khai offline, giữ 15 web slides và 1 trạng thái nghỉ. Không React/Vite/build; tài nguyên riêng được nhúng hoặc phát hành kèm tệp trong cùng thư mục nếu thực sự cần. Nên có *một* vùng nhiệm vụ chính và vài ngăn phụ đóng được; tránh hero dài, sidebar nội dung cố định, thanh tiến trình lớn cạnh tranh với hoạt động.

### Skeleton cấu trúc đề xuất

```text
APP SHELL: [ Lesson title (small) ] [ EN / VI ] [ Evidence ] [ Teacher notes (optional) ]
MAIN:     [ Current slide: ONE learner question/task ]
          [ Primary surface: document / live-browser instructions / lab / builder ]
          [ Learner response / evidence area where required ]
FOOTER:   [ Previous ] [ 5.1: activity label ] [ Next ]
OVERLAYS: [ Research card drawer ] [ H1→H3 hints ] [ Evidence notebook ]
```

### Navigation

- Trình tự ổn định `SL-00...SL-14`, nhưng cho phép quay về slide đã học; BREAK-05 chen giữa SL-05 và SL-06.
- `Next/Back` bàn phím (ví dụ Alt+Left/Right *nếu không xung đột browser*; ưu tiên nút có tên rõ và Tab/Enter). Không chặn browser hotkeys phổ biến để tránh khó khăn khi học sinh đang thực hành thật.
- Rời trang với thay đổi chưa lưu: nếu store chỉ in-memory, cảnh báo ngắn trong ứng dụng trước khi bấm làm mới/đóng (không hứa browser native prompt sẽ luôn chạy).
- Khi chuyển slide: focus đặt vào tiêu đề slide có `tabindex=-1`, vùng thông báo lịch sự cho người dùng đọc màn hình; popup không tự bật lại.
- Không điều hướng tự động theo timer hoặc GIF. `Time 15 min` là kế hoạch của GV, không ép sang màn khi hết giờ.

### Localization EN/VI

- Keys song ngữ cho **mọi** title, instructions, hints, labels, dropdown, errors, success status, tooltips, dialogs, evidence feedback, teacher notes, captions, alt text, accessibility labels. No hardcoded mixed-language alerts.
- `language` là state toàn bài; switch không sửa input người học, không reset lab, không xóa bằng chứng.
- Ví dụ `learning.cta.revealEvidence` có `{vi: 'Đối chiếu bằng chứng', en: 'Compare evidence'}`; tất cả strings phải có hai biến thể.
- Thẻ kỹ thuật giữ nguyên chuỗi ASCII (IP, URL, event code) nhưng có chú giải EN/VI.

### A11y/Responsive

- Tất cả thao tác kéo thả có đường thay thế bằng chọn node → chọn đích → chọn quan hệ qua bàn phím.
- Labs có `Play/Pause/Step/Reset`, trạng thái bằng text và log, không chỉ qua màu hoặc chuyển động. `prefers-reduced-motion`: giảm animation; dữ liệu vẫn đầy đủ.
- Không ép chiều cao màn hình khiến thẻ bằng chứng không cuộn được; hỗ trợ laptop nhỏ/tablet, độ phóng to trình duyệt 200%, tương phản đọc được.
- Nút tap đủ lớn; tránh quá nhiều popover cùng lúc; card/hint đóng bằng Esc, có nút đóng.
- Mỗi hình dùng alt có giá trị sư phạm, không lặp caption; GIF có transcript/tóm tắt tĩnh, ngừng hoặc tạm dừng khi cần.

### Offline

- Core lesson content/cards/fixtures/images giữ tại local package; không cần API hoặc CDN.
- SL-03 dùng **trình duyệt thật** và bộ `assets/browser_offline/` của Skill05 khi không có mạng; mở trực tiếp tệp không đồng nghĩa HTTP request.
- `https://school.example.org/library/books`, `192.0.2.10` chỉ hiển thị dưới nhãn **SIMULATED**; model lab không `fetch()` chúng.
- Không phụ thuộc Google fonts, icons CDN, Youtube hoặc nguồn hình nước ngoài trong luồng dạy chính.
- File ZIP phát hành sau Skill11 phải chứa mọi asset để chạy tại local Windows; kiểm thử bằng mở trực tiếp `index.html`, không chỉ qua localhost.

### Role/UI and privacy

- Teacher notes hiển thị khi cần và có thể đóng. **Teacher Mode không phải bảo mật**, nên khi cần tách đáp án khỏi học sinh phải phát hành file hướng dẫn GV riêng.
- Không dùng account sign-in, không đọc cookies/history/bookmark cá nhân, không tracking.
- Trạng thái học tập lưu trong bộ nhớ mặc định; muốn lưu lâu dài → thiết kế explicit Export/Import sau khi Skill11 đánh giá mức cần thiết.

### Performance/resource budget (định tính)

- Chỉ mount lab đang xem; không để DNS, HTTP, rendering và builder animate đồng thời.
- Giải mã tài nguyên mới theo slide; tránh tải GIF lớn khi chưa cần.
- Có `static fallback` khi GIF không tải/được tắt; không phát tự động âm thanh.
- Các ảnh SVG nguồn Skill05 dùng đúng vai trò: Internet vs WWW, URL và HTML/CSS/JS đều **chỉ xuất hiện sau nỗ lực HS** khi chúng là hình chuẩn.