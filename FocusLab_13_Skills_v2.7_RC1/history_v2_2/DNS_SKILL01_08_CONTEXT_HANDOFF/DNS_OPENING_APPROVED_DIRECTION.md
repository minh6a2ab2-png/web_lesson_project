# DNS 5.1.5 — Thiết kế bối cảnh và đặt vấn đề v2.2

**SGK:** Mục 5.1.5, trang 183, Figure 5.3. **Phạm vi:** 1 topic, 2 CORE, 7 KU, 5 objectives, 11 hoạt động theo kế hoạch Skill08. **Quyết định mới:** tăng lựa chọn phân cảnh, KHÔNG tự tăng hoạt động.

## Bối cảnh song ngữ (PROBLEM_CONTEXT)
- **Tiêu đề VI:** Làm sao máy tính tìm đúng website?
- **Title EN:** How does a computer find the right website?
- **Bối cảnh VI:** Em mở trình duyệt và nhập `www.hoddereducation.co.uk`. Nếu kết nối thành công, trang web có thể xuất hiện dù em chưa nhập một địa chỉ IP nào.
- **Context EN:** You open a browser and type `www.hoddereducation.co.uk`. When the connection succeeds, the page can load even though you have not typed an IP address.
- **Thực trạng / Need:** Tên website dễ nhớ, nhưng máy cần xác định địa chỉ máy chủ đích để kết nối. Không đồng nhất tên miền, URL và IP.
- **Điểm chưa rõ / Gap:** Bước giúp máy tìm địa chỉ tương ứng chưa nhìn thấy trong trình duyệt.
- **Vấn đề VI:** Máy xác định địa chỉ IP tương ứng với tên website bằng cách nào?
- **Problem EN:** How does a computer find the IP address corresponding to the website hostname?
- **Minh họa:** Browser với thanh địa chỉ đang chứa hostname; một web server chưa biết địa chỉ, dấu hỏi ở đường nối; **không** vẽ đường DNS/đáp án trước khi HS khám phá.
- **Chú ý nguồn:** Đây là tình huống minh họa suy ra từ SGK, không khẳng định đã truy cập domain trực tiếp hoặc domain luôn có thể truy cập. Không dùng số IP trong sách như dữ liệu DNS hiện hành.

## Mạch hai scene cùng hoạt động `ACT-DNS-01`
| Scene (provisional; Skill09 quyết định chính thức) | Kind | Student task | Evidence | Next |
|---|---|---|---|---|
| `DNS-CONTEXT-01` | `PROBLEM_CONTEXT` | Mô tả bối cảnh, nêu nhu cầu/điều chưa rõ | `EVD-CONTEXT-01` (nêu vì sao cần tìm địa chỉ) | `DNS-OBSERVE-01` |
| `DNS-OBSERVE-01` | `OBSERVE` | Quan sát thanh địa chỉ và trạng thái trang, nêu giả thuyết về bước trung gian | `EVD-OPEN` (ít nhất một dữ kiện + giả thuyết) | DIAGNOSE |

- Không gọi tên DNS tại scene context/observe. `INTRODUCTION` DNS vẫn nằm ở CORE01 sau hoạt động DIAGNOSE.
- **Không thêm hoạt động 12.** Cả hai scenes thuộc `ACT-DNS-01`; tổng thời gian hoạt động 01 vẫn 3–5 phút tham khảo, tùy người học.
- Mỗi scene có pha1 title/lead; sau 2–3 giây mở cùng lúc các phần còn lại, không tự Next. Previous/Next ở footer fixed. Khi bật hiện tất cả ngay thì mở nội dung được phép ngay, không hé đáp án.
- `A-CONTEXT-DNS-01` là **SPEC_ONLY**, cần tạo và kiểm định file minh họa ở vòng Skill07 bổ sung, chưa ghi READY. `A-OBS-01` ở bản cũ vẫn dùng cho phần quan sát và có trạng thái theo manifest cũ.

## Quy tắc phát hành
Không chuyển context placeholder thành website chính thức khi minh họa chưa tạo hoặc chưa được QA (nguồn/alt/viewport/VI-EN). Scene definitions hợp lệ **không** bằng model/page runtime đã nghiệm thu. Các mô hình DNS/Web v2.1 không bị thay đổi mã bởi bản cập nhật này.
