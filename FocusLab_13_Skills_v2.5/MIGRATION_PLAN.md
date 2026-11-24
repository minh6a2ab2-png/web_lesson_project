# Migration — v2.4.1 → v2.5
Giữ toàn bộ checkpoint 01–10 nguyên trạng, không sửa version/hashes cũ. Chưa chạy 11–13.
1. Chạy đầy đủ v2.5 từ Skill01 là đường xác minh quy trình sạch nhất. Nếu tái sử dụng Internet & Web Access, đối chiếu hash và approve reuse từng output; chỉ reuse nội dung/mục tiêu đã xác minh không đổi.
2. Skill01–04 bổ sung cơ hội visual, nhịp, mindmap content và method. Skill05 phải nghiên cứu lại nguồn hình ảnh/art direction; Skill06 cập nhật script. Skill07 sản xuất thật bổ sung asset, map config topic, kiểm engine. Skill08 cập nhật giáo án & handoff. Skill09 cập nhật canonical visual extension, giữ stable IDs nếu nhiệm vụ không đổi; crosswalk nếu thay, kiểm toàn bài. Skill10 dựng lại toàn bộ 46 màn theo nhiệm vụ thực tế, không mặc định số màn giữ nguyên nếu yêu cầu mới làm thay đổi nhiệm vụ. Chỉ dùng 8 mẫu làm tham chiếu, không copy nguyên nội dung.
3. Nếu upstream đổi hash, downstream impacted outputs STALE, retest trước dùng. Duyệt thẩm mỹ từng scene/cụm/contact sheet; không suy ra đã đạt 85 điểm từ mẫu. Skill11 production mới, 12 hành trình, 13 độc lập.
4. Open issues chuyển tiếp: thiếu ảnh thật nguồn ngoài; file:///Edge thiết bị mục tiêu; touch/bút thật, screen reader và zoom 200%; visual fidelity và field test. Không đóng bằng thay định nghĩa.
5. Không tự động chạy lại DNS hoặc Internet & Web Access trong lần tạo định nghĩa này; chưa push GitHub.
