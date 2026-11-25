# FocusLab — Static Knowledge Space R5
Prototype thay R4, chờ duyệt. Không chỉnh 13 Skills v2.4.1.

## Hành vi
- 3 root xanh cố định, 6 nhánh chính vàng, 6 ý con tím. Màu mã hóa cấp ngay từ đầu, không mã hóa nhóm đích. Viền/dấu chấm rỗng = chưa nối; dấu tích xanh = đã nối. Nét sai đỏ tạm thời.
- 12 đối tượng con được rải ngẫu nhiên, không chuyển động khi đứng yên. Khi nối đúng chỉ thẻ được nối di chuyển, easing 580ms về vị trí không va chạm gần cha; sau đó đứng yên. Nối sai hoặc chưa nối cha không thay topology/vị trí. Các cạnh đúng cập nhật theo vị trí.
- Dùng bút vẽ polyline theo pointer; Enter/Space là đường thao tác bàn phím. Không kéo thẻ tự do. Undo/Redo, xáo trộn, chuyển VI/EN, bật/tắt hiệu ứng, PNG 3200×1600 và JSON R5.
- Không gian mở 1600×800 logical SVG; viewport full width/height trong màn Mindmap (ẩn header shell, chuyển Mục lục/EN/VI vào toolbar); hai nút nổi shell vẫn giữ vị trí. Fullscreen API có thông báo nếu trình duyệt từ chối. Mobile cuộn trong vùng bảng để giữ chữ.
- Hình thức node: ellipse, text card, ảnh minh họa thiết bị, mini web, thẻ code, URL phân đoạn, sơ đồ client/server. Ảnh raster C5 tái dùng screenshot Chromium `SKILL07_WEB_ACCESS_V2_4_1_2026-11-24/07-student-media/html-A-rendered-viewport.png`; các hình còn lại tự dựng SVG. Không có ảnh thật bên ngoài mới.
- Kiến thức, 12 cạnh và quan hệ cha/con kế thừa R4. Không lộ nhóm đích bằng màu; cấp 3 yêu cầu cấp cha đã nối trước.
- R5 dùng `focuslab-static-space-r5`, lưu links/positions/origin; không tương thích file R4. Vị trí sinh ngẫu nhiên bằng rejection sampling chống chồng chữ; fallback tọa độ đã định; vị trí gom cụm được tìm trong các ứng viên xung quanh cha có khoảng cách không chồng lấn. Không phải thuật toán bố trí tổng quát cho ngân hàng rất lớn.

## Nghiệm thu
Xem qa.json và qa-stress.json cùng ảnh minh chứng. Chromium set_content. Không tuyên bố kiểm thử file://, thiết bị touch/bút thật hoặc screen reader/zoom 200%. Chưa chứng nhận fullscreen trên mọi trình duyệt. Kiểm tra thẩm mỹ và sư phạm cần người dùng duyệt.
