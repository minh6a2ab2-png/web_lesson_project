# Skill 12 – Quality Review / Kiểm định bài giảng

**Bài học:** 5.1 Internet & World Wide Web · **Phiên bản:** 11/11/2026  
**Bản kiểm tra:** `index.html`, gói `browser_offline/`, nguồn Skill05, kế hoạch Skill06, kịch bản Skill07, kiến trúc Skill09, thiết kế Skill10.  
**Skill 08:** Chưa chạy theo quyết định của người dùng; KHÔNG tự nhận đã hoàn thành homework.

## 1. Kết luận

**APPROVAL: CONDITIONAL** – Website đã hoạt động trong môi trường kiểm thử nội bộ và không còn lỗi Blocker được phát hiện. Trước khi dạy thật, cần kiểm tra mở trực tiếp file trên máy của học sinh và các trình duyệt mục tiêu.

**Test kỹ thuật:** 23/23 PASS với Playwright/Chromium `set_content`; 0 uncaught JS errors trong các ca đã chạy. Không được đồng nghĩa với việc đã thử mọi tổ hợp thiết bị, trình duyệt và thao tác.

## 2. Ma trận đánh giá thiết kế (thang chuyên gia nội bộ, chưa phải đo kết quả học tập thực tế)

| Tiêu chí | Điểm | Trên tối đa | Bằng chứng chính |
|---|---:|---:|---|
| Độ chính xác nội dung và nguồn | 19 | 20 | DNS cache/NXDOMAIN; HTTP 200/404; HTTPS không xác minh độ đúng nội dung; URL mẫu có nhãn |
| Mục tiêu–hoạt động–đánh giá thống nhất | 18 | 20 | 9 OBJ; 15 slide; output HS gồm claim/log/sơ đồ/tự đánh giá |
| Tính chủ động thực chất | 18 | 20 | Học sinh dự đoán, đọc, chọn bằng chứng, thử nghiệm và tự giảng trước khi lộ đối chiếu |
| Mạch kiến thức và tránh thừa | 13 | 15 | URL → DNS khi cần → HTTP → Rendering, sản phẩm được tái dùng; break thực |
| UX, học liệu, a11y | 9 | 10 | 360px không overflow, VI/EN, phím, alt, transcript, reduced-motion; chưa test screen reader |
| Tính đúng đắn kỹ thuật và song ngữ | 13 | 15 | 23 test PASS; file:// và máy Windows chưa test trực tiếp |
| **Tổng** | **90** | **100** | **Đánh giá có điều kiện; chưa kiểm nghiệm hiệu quả với học sinh** |

## 3. Kiến thức và thao tác quan trọng đã kiểm tra

- Internet và WWW **không đồng nghĩa**; webmail khác ứng dụng email dùng giao thức khác.
- Browser thật thay cho Virtual Browser; HTML offline qua `file://` không tự thể hiện DNS/HTTP.
- URL chứa scheme, host, path; `www`/`.html` không bắt buộc và path không nhất thiết là tệp vật lý.
- DNS: A cache miss → resolver → bản ghi; B cache hit → không cần resolver; C NXDOMAIN → không có IP, không phải HTTP 404.
- HTTP: request GET, response 200/404; trình duyệt có thể hiển thị trang lỗi 404.
- HTTPS có TLS bảo vệ truyền tải nhưng không chứng minh nội dung đúng.
- HTML/CSS/JS được mô phỏng trên **cùng nội dung cấu trúc**; người học có thể thao tác JavaScript ở mode 3.
- Journey Builder có nhánh DNS cache/NXDOMAIN/404, điều chỉnh thứ tự bằng nút (dùng được bàn phím).

## 4. Rà soát yêu cầu sư phạm từ Skills 01–10

| Yêu cầu | Trạng thái | Bằng chứng / lưu ý |
|---|---|---|
| 15 KU trong phạm vi trang 180–183 | Covered by lesson content | Các slide 0–14; KU-16 chuyên sâu ngoài phạm vi |
| 9 OBJ với minh chứng | DESIGN PASS | Ghi chép/lab/exit ticket, chưa quan sát học sinh thật |
| Học sinh tự nghiên cứu và trình bày | DESIGN PASS | Tư liệu đóng/mở; claim, evidence, teach-back; GV hỗ trợ theo H1–H3 |
| Mô hình thực có trạng thái | RUNTIME PASS | DNS/HTTP, Rendering, Journey; 23 test hành vi |
| Trình duyệt thật | DESIGN PASS; FIELD NOT RUN | Các trang offline ở thư mục kèm; cần thao tác trực tiếp trên máy người học |
| Active Recall, một game, mindmap, flashcard, Teach-Back | DESIGN PASS | Recall tích hợp; game khởi động; flashcards; mindmap sau buổi; teach-back |
| HTML/CSS/JS thuần | STATIC PASS | Không React/Vite/npm/CDN, không tải JS ngoài |
| Song ngữ EN/VI | RUNTIME SAMPLE PASS | Hoán đổi giữa chừng giữ nội dung; media SVG/GIF cũng có phiên bản VI/EN |
| Reduced motion | STATIC + RUNTIME PASS | CSS giảm chuyển động, ẩn GIF trong chế độ reduce, còn transcript văn bản |
| Homework đầy đủ | PENDING | Skill08 chưa chạy, slide cuối chỉ ghi hướng dẫn ôn tập cơ bản |

## 5. Hạn chế và lỗi chưa giải quyết

| Mức | Mục | Thực trạng | Đề xuất |
|---|---|---|---|
| MAJOR – Triển khai ngoài môi trường | `file://` Windows | Trình duyệt kiểm thử bị chính sách quản trị chặn file/local HTTP, chưa thể xác minh mở file trực tiếp | Mở `index.html` và `browser_offline/index.html` trên Chrome/Edge/Firefox của người dạy, test điều hướng/ghi chép |
| MAJOR – Phụ thuộc ngoài phạm vi | Skill08 | Bộ homework chưa được soạn vì đã bỏ qua có chủ ý | Chạy Skill08 nếu muốn bộ bài tập về nhà đủ đáp án/rubric |
| MINOR | Lưu tiến độ | `localStorage` có thể bị chặn trong một số chế độ browser; fallback trong bộ nhớ | Kiểm tra trên máy thực, thường xuyên dùng nút Tải hồ sơ |
| MINOR | Teacher notes | Không có xác thực giáo viên vì web offline tĩnh | Giáo viên tự điều phối khi chia sẻ màn hình; ngăn ghi rõ không bảo mật |
| MINOR | GIF | Là tài nguyên giải thích một chiều, không phải thí nghiệm | Tiếp tục dùng mô hình DNS/HTTP có Step/Play/Reset làm hoạt động chính |

**Không phát hiện Blocker trong các bài kiểm thử đã chạy.** Không tuyên bố PASS cho ca chưa chạy.

## 6. Quyết định bàn giao

Có thể bàn giao website để **người dùng mở và thử trên máy thực tế**. Cần lưu ý rõ hai trạng thái chưa hoàn tất: kiểm thử `file://` trên máy mục tiêu và học liệu homework của Skill08.