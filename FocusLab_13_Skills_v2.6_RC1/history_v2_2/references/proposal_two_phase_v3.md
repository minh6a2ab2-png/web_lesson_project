# ĐỀ XUẤT V3 — NHỊP XUẤT HIỆN HAI PHA (ONE_TOPIC)

**Ngày:** 23/11/2026 · **Cơ sở:** phản hồi người dùng về FocusLab v2 · **Trạng thái:** prototype để duyệt, chưa cập nhật website Cookies gốc hoặc 13 Skills.

## 1. Quy tắc thay thế hoàn toàn Adaptive Pacing v2

- **Pha 1 — Opening cue:** Ngay khi vào màn, hiển thị **chỉ phần dẫn nhập chính** trong khu vực bài học: tiêu đề câu hỏi, tình huống cần giải quyết hoặc một lời dẫn ngắn. Trọng tâm thị giác ở giữa vùng trình chiếu.
- **Khoảng chờ mở màn:** Mặc định **2,5 giây**, có thể chọn **2,0 hoặc 3,0 giây**. Không căn cứ vào số chữ hay điểm khó của các khối nội dung tiếp theo.
- **Pha 2 — Full reveal:** Hết khoảng chờ, **mọi khối nội dung còn lại của màn xuất hiện đồng thời**, gồm lý thuyết, hình ảnh, câu hỏi phụ, nút thao tác và mô hình ở trạng thái ban đầu. Không xuất hiện từng khối theo thời gian.
- **Sau pha 2:** Nội dung giữ nguyên, không tự ẩn/chuyển tiếp. Học sinh có thể đọc, quan sát và suy nghĩ bao lâu tùy ý.
- **Bỏ qua thời gian chờ:** Nút **Hiện nội dung ngay** và **Tắt animation · Hiện tất cả** có tác dụng ngay từ pha 1. Khi bật tắt animation, trang không chờ 2–3 giây.
- **Hiệu ứng khác:** Hoạt ảnh bên trong mô hình chỉ hoạt động khi học sinh thao tác hoặc bật chế độ chạy mô phỏng. Không tự khởi động khi xuất hiện toàn bộ nội dung.

## 2. Ví dụ cho bốn loại màn

| Loại | Pha 1 (0–2,5 giây) | Pha 2 (sau 2,5 giây) |
|---|---|---|
| OBSERVE | “Vì sao website vẫn nhớ Tiếng Việt?” | Hai lần truy cập, hướng dẫn quan sát, thao tác thử hiện cùng lúc |
| DIAGNOSE | “Ai gửi HTTP Request khi mở website?” | Hai đáp án xuất hiện cùng lúc; modal kiến thức nền chỉ mở sau khi trả lời |
| INTRODUCTION | “Có một công cụ giúp website ghi nhớ lựa chọn…” | Tên Cookie, mô tả ngắn, hình minh họa và nút xem trước cùng xuất hiện |
| TEACH | “Cookie hoạt động như thế nào?” | Cả bốn thẻ lý thuyết/cơ chế xuất hiện đồng thời; không cần 4 lần đợi |

## 3. Thiết kế, trợ năng, kiểm thử

1. Giai đoạn mở đầu giữ đủ tương phản, cỡ chữ dễ đọc, tránh chớp sáng.
2. Chuyển đổi pha 1→2 có thể dùng fade/translate rất nhẹ (mặc định **300 ms**). Chọn 200–800 ms chỉ để thử nghiệm; đây không phải thời gian chờ giữa các nội dung.
3. Nếu `prefers-reduced-motion` hoặc chế độ giảm chuyển động đang bật, các chuyển động thị giác được triệt tiêu nhưng logic hai pha vẫn có thể giữ khoảng chờ 2–3 giây.
4. Trong chế độ **Tắt animation · Hiện tất cả**, không có chờ và không chạy tự động các bước cơ chế, không tự trả lời câu hỏi.
5. Điều hướng sang màn khác phải hủy đồng hồ màn cũ rồi bắt đầu đồng hồ mới; đổi ngôn ngữ không làm mất trạng thái học.
6. Bắt buộc kiểm thử desktop, mobile, thao tác bỏ qua trước khi hết chờ, phát lại lời dẫn, mở cửa sổ DIAGNOSE, dùng mô hình và chuyển VI/EN.

## 4. Vị trí thay đổi dự kiến trong bộ 13 Skills

- **Skill 06**: Ghi rõ lời dẫn mở màn và phần nội dung còn lại xuất hiện đồng thời.
- **Skill 08–09**: Thêm vào Scene Spec: `opening_cue`, `opening_pause_s=2.5`, `full_reveal_group=ALL`, `instant_reveal=true`, không có staggered reveal.
- **Skill 10**: Thiết kế bố cục hai trạng thái và chuyển cảnh nhẹ (không làm nhảy bố cục).
- **Skill 11**: Tạo timer độc lập theo màn, hủy timer khi điều hướng, thiết lập nút bỏ qua, bật/tắt animation và điều khiển mô hình riêng.
- **Skill 12–13**: Kiểm định nhịp 2–3 giây, hiển thị đồng thời, không chờ bắt buộc, không tự khởi chạy mô hình và tính toàn vẹn tương tác.

## 5. Quyết định chờ duyệt

**Đề xuất cuối:** chọn **2,5 giây mặc định** cho mọi màn và nút **Hiện tất cả ngay** luôn sẵn sàng. Không dùng mô hình ước lượng thời gian đọc để phát dần kiến thức. Nếu học sinh cần thêm thời gian, chính học sinh hoặc giáo viên quyết định khi nào chuyển sang màn tiếp theo.
