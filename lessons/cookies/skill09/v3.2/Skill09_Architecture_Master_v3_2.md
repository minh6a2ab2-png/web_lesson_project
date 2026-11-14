# SKILL 09 v3.2 — KIẾN TRÚC CHÍNH THỨC CHO INTERACTIVE LEARNING STUDIO

**Bài mẫu:** Cookies · **Loại bài:** gia sư 1–1, 42 phút nội dung chính · **Hệ thống:** 12 Skills (giữ nguyên) · **Ngày:** 14/11/2026.

## 1. Các nguồn và cam kết không thay đổi

Ưu tiên Skills 01–08, đặc biệt kịch bản Skill06, học liệu Skill07 v1.1, giáo án CV5512 Skill08 v1.0, 22 scenes trong Skill09 v2.0–v3.1. Giữ nguyên mã ID, thứ tự và câu hỏi nguồn của 22 scenes: `P00 (1) → D0 (2) → ACT01 (3) → ACT02 (6) → ACT03 (3) → ACT04 (3) → ACT05 (2) → P07 (2)`. D0–ACT05: **42 phút**; intro/after-class được xác định ngoài 42 phút để không ép thời lượng. Không nhập môn WWW/HTTP nâng cao vượt đánh giá.

## 2. Kiến trúc 4 tầng

1. **Pedagogical source**: scene IDs, mục tiêu, câu hỏi, hành động, bằng chứng, lời phản hồi, H0–H3.
2. **Scene content model**: `Learning_Scene_Contract_v3_2.json` – một nguồn dữ liệu dùng chung, không nhân bản kiến thức theo giao diện.
3. **Presentation resolver**: chọn mode theo hoạt động và điều kiện tài nguyên; khi không đạt dùng `presentation`. Dual View là *overlay tự nguyện*, không phải mode được chọn tự động.
4. **Student evidence + notebook**: sự kiện hoàn thành, câu trả lời, ghi chú, thẻ kiến thức đã học; dữ liệu lưu trên thiết bị nếu cho phép. Không tự chấm/không nhận “mastery” từ việc bấm Next hoặc Save.

## 3. Luật chọn giao diện theo mức độ phù hợp

Dùng bảng `Mode_Suitability_Rubric_v3_2.md` (0–3) và `22_Scene_Mode_Asset_Matrix.csv`. Chỉ chuyển Story/Lab/Map/Focus nếu (a) phù hợp mục tiêu, (b) nội dung/mô phỏng thật sự sẵn có, (c) không hiện lời giải trước lượt thử, (d) responsive/keyboard, (e) không ảnh hưởng đánh giá. Nếu thiếu nguồn hoặc lợi ích chưa rõ, dùng slide modern tối giản.

`Presentation`: thông tin ngắn/khái niệm, mặc định. `Story`: tình huống có trình tự và theo nhịp của HS. `Lab`: biến đầu vào → dự đoán → chạy → đối chiếu kết quả. `Map`: cần nhìn quan hệ; không trình bày như đáp án trước recall. `Focus`: màn nhắc nhớ sạch, ưu tiên nói/viết/vẽ. `Assessment`: hoàn toàn riêng. **Dual View không bao giờ tự bật.**

## 4. Thanh công cụ thường trực, màn học tối giản

Chỉ hiển thị: quay lại, tới, số scene, nút Dual View, Sổ tay, Lưu kết quả, Công cụ. Một thanh trên thấp/không dính lên nội dung; `presentation canvas` chiếm phần diện tích còn lại và cuộn tự nhiên; không có footer, tab 6 chế độ, logo lớn, văn bản meta, badge trạng thái hay mô tả bản demo trong vùng học. Công cụ phụ được giấu trong popover/drawer mở khi bấm. Chức năng xem lại sản phẩm nằm trong **Sổ tay**, không chiếm chỗ trong slide.

## 5. Dual View – hợp đồng bắt buộc

- Nút hiện mọi scene, kể cả EXIT; người dùng chủ động bật/tắt.
- `adjacent`: mặc định hai scene N và N+1; chuyển cặp khi Next. `free`: chọn bất kỳ hai scene không thuộc EXIT, điều hướng độc lập và hoán đổi vị trí.
- Tỷ lệ 50/50, 60/40, 40/60. Cả hai khung có scroll độc lập và vị trí riêng. Trên tablet/mobile phải xếp dọc nếu thiếu chiều rộng; không co chữ đến mức khó đọc.
- Dùng hai nguồn nội dung có thể đối chiếu: scene/scene hoặc scene + vùng thao tác; Skill11 chịu trách nhiệm đồng bộ trạng thái mô phỏng tương tác.
- Trên EXIT, nút vẫn có thể bấm nhưng **không mở các scene luyện tập**, chỉ cho `assessment + scratchpad`. Sổ tay không hiển thị kiến thức/ghi chú trong thời gian EXIT. Không được nhúng answer key vào student HTML.

## 6. Sổ tay học tập

Hai tab: **Nhiệm vụ hoàn thành** (sản phẩm / ghi chú / thời gian / tình trạng) và **Kiến thức đã học** (thẻ kiến thức theo scene đã hoàn thành, cộng ghi chú cá nhân). Người học phải bấm lưu xác nhận; `visited` không bằng `completed`; `completed` không bằng `mastered`. Chỉ mở thẻ kiến thức sau một lần thử/hành động hoàn thành. Từ Sổ tay chọn “Xem lại nhiệm vụ” khi không trong EXIT; cần bảo toàn khả năng quay lại scene đang học.

Data schema tối thiểu: `scene_id`, `status`, `note`, `submitted_evidence`, `support_level`, `saved_at`, `knowledge_capsule_id`; dữ liệu xuất JSON offline có nút riêng. Không thu Cookie/truy cập cá nhân. Khi localStorage không khả dụng: thông báo lưu tạm phiên. Với tích hợp Skill11, có thể cần một adapter cho `learning_lab.html`, `visual_lab.html` và tệp bài EXIT; chưa được nhận đã làm.

## 7. Chính sách tập trung học tập / reveal

Tình huống → dự đoán → thao tác → phản hồi → Active Recall. Không render `teacher_reference` hay `answer_key` trong bản học sinh; với trang practice chỉ mở hình lời giải sau HS thử. Sơ đồ có alt/caption, text fallback, keyboard. LAB chỉ là mô phỏng dữ liệu hư cấu, không được gọi là ghi HTTP thực. Hình ảnh/trạng thái UI nên dùng cùng bối cảnh, không tạo ảnh trang trí.

## 8. Kiểm định và bàn giao

**Skill09 hoàn thành ở mức kiến trúc:** 22 scene + copy chi tiết + mode rubric + chuẩn UI + hợp đồng dual/notebook/assessment + asset backlog + mô hình tương tác preview.
**Không thuộc phạm vi nghiệm thu Skill09:** engine học tập/sổ tay tự thu đáp án, phân phối riêng key teacher/EXIT ở build, kiểm thử trình duyệt offline đa máy, đánh giá người học thật. Giao Skill10 xây thiết kế hi-fi các layout/component state; Skill11 build logic full; Skill12 QA end-to-end/pilot.

**Versioning:** v3.2 là bản chạy lại có đặc tả đầy đủ; v3.0 và v3.1 experimental giữ nguyên. Gói ZIP là bản bàn giao; mã nguồn Markdown/JSON/HTML/CSS/JS cập nhật GitHub theo quy tắc của dự án.
