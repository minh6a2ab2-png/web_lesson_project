# FocusLab v2.6 — Phase 5 / R01: kiểm định 32 mục
Nguồn: FocusLab_v2.6_design_pack/BACKLOG.md, blob a32e6e31399cf8713fba9b69c65dccb6ff38c944. Không xóa lịch sử. PARTIAL = có bằng chứng bổ sung nhưng chưa đạt toàn bộ tiêu chí gốc. OPEN = chưa đủ bằng chứng. RESOLVED_POLICY = đã chọn phương án thay thế được tiêu chí gốc cho phép, không phải PASS runtime.

| ID | Priority | Status | Bằng chứng và công việc còn lại |
|---|---|---|---|
| A01 | P1 | PARTIAL | Cache giữa tiến trình cục bộ đạt; cần hai workflow CI riêng và đo setup. |
| A02 | P1 | PARTIAL | Retry đúng lỗi tạm thời, giới hạn 2 lần, cache hỏng tự xây lại, nhánh độc lập tiếp tục; mới thử cục bộ. |
| A03 | P1 | PARTIAL | Đọc registry thật 13 nodes, kiểm tra 7 checkpoint, plan resume và invalidation; chưa điều phối thực thi đủ 13 Skills. |
| A04 | P0 | PARTIAL | 174 kiểm tra trực tiếp HTML gồm MC02/04/05 và Motion; file bị chặn, localhost chưa chạy, checklist còn thiếu. |
| A05 | P0 | PARTIAL | R02 bàn giao 3 ảnh Commons, metadata 6 ảnh ở pilot; cần thẩm định quyền và mở rộng nguồn theo từng bài, HTML fallback. |
| A06 | P2 | OPEN | Chưa thay pin Actions; kiểm tra tương thích trước khi nâng, tránh kích hoạt CI dư thừa. |
| A07 | P1 | PARTIAL | Đọc lại ZIP R02 Drive khớp byte, 19 hash gói trong; cần restore checkpoint bài giảng đầy đủ. |
| A08 | P0 | PARTIAL | Public-data-only trong contract; không đăng R04 lên repo; cần gate phân loại đầu vào và kiểm định bảo mật chính thức. |
| A09 | P1 | PARTIAL | Đo wall-clock cục bộ và timings R02, không thao tác kỹ thuật ở R01; chưa đo end-to-end cả bài, CI setup, chi phí. |
| A10 | P0 | OPEN | Cần review độc lập VI/EN, sư phạm, thẩm mỹ, field nếu có. |
| A11 | P1 | OPEN | Pexels handoff chưa kiểm tra; dùng đúng ngữ cảnh và quyền, không phân phối ảnh stock độc lập. |
| A12 | P1 | PARTIAL | Bridge Drive đọc lại thành công; chưa kiểm tra upload idempotent/retry. |
| V01 | P0 | OPEN | Chưa có deck đầy đủ; giữ 5 màn hình mẫu. |
| V02 | P1 | PARTIAL | Kiểm tra điều khiển bàn phím, viewport, ngôn ngữ trên mẫu; cần screen reader, 200% zoom toàn deck và review bản dịch. |
| V03 | P1 | OPEN | Chưa có người đánh giá độc lập và dữ liệu học sinh. |
| V04 | P1 | OPEN | Chính sách Chromium chặn file; exact package localhost và CI riêng tư chưa thử. |
| V05 | P2 | RESOLVED_POLICY | Chọn FocusLab DESIGN.md local schema rõ ràng; không cam kết tương thích parser upstream. |
| M01 | P1 | PARTIAL | GSAP 3.13.0 13/13 runtime fixture, hash xác minh; còn offline, license và tích hợp chính thức. |
| M02 | P1 | PARTIAL | Motion mẫu replay/reset/interrupt/reduced motion; cần timeline nhiều đối tượng và scene lifecycle. |
| M03 | P1 | OPEN | 8 phong cách mới ở đặc tả; triển khai khi có nhiệm vụ phù hợp, không sản xuất dư. |
| M04 | P0 | PARTIAL | 174/174 smoke test mô hình; cần offline exact, game, Mindmap, toàn bộ regression. |
| M05 | P1 | OPEN | Chưa đo frame/performance độc lập và cognitive review. |
| MM01 | P1 | OPEN | FFmpeg mặc định đã chạy; Remotion chưa kiểm định quyền/runtime. |
| MM02 | P1 | OPEN | eSpeak đã tạo audio; chưa nghiệm thu phát âm và giọng tự nhiên. |
| MM03 | P0 | PARTIAL | 42/42 decode/caption kỹ thuật; cần trình phát thật trong deck offline, keyboard, captions, no forced playback. |
| MM04 | P1 | PARTIAL | Cache task theo input hash, media archive được tái sử dụng; chưa kiểm tra render theo cảnh giữa CI. |
| MM05 | P1 | OPEN | Chưa đánh giá video có hơn hình tĩnh hoặc đo hiệu quả học tập. |
| G01 | P1 | OPEN | Native art fallback; chưa nhập sprite ngoài có kiểm quyền. |
| G02 | P0 | OPEN | Game browser direct render đạt trước đó; file/local và lifecycle tích hợp chưa đạt. |
| G03 | P1 | PARTIAL | 24/24 engine mới, URL + phân loại input/output; renderer vẫn riêng URL. |
| G04 | P0 | OPEN | Cần so sánh giá trị học tập, screen reader, điều hướng và chi phí thao tác. |
| G05 | P1 | PARTIAL | Mobile/desktop kiểm thử trong gói cũ, chưa đo FPS/thiết bị cấu hình thấp. |

Tổng: 32 mục; 1 RESOLVED_POLICY, 17 PARTIAL, 14 OPEN. Chưa đóng cổng phát hành P0 nào. Không dùng số test để thay cho nghiệm thu.
