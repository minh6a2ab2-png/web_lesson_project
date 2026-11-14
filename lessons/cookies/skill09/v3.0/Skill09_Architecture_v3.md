# Skill 09 v3.0 — Interactive Learning Studio

**Status:** DESIGN APPROVED / STRUCTURE SPECIFIED / PROTOTYPE ONLY.  
**Date:** 2026-11-14. **Project:** `web_lesson_project`, bài Cookies (gia sư 1–1).  
**Sources of truth:** Skills 01–08 (đặc biệt kịch bản D0–ACT05, Skill07 v1.1 và giáo án CV5512 Skill08 v1.0); Skill09 v2.0 PPT-inspired (22 scenes), thử nghiệm Dual View v2.1.  
**User decision:** Giữ nguyên bộ 12 Skills; chốt kiến trúc Interactive Learning Studio. Bản cũ không ghi đè.

## 1. Những gì giữ lại

- 22 learning scenes theo đúng thứ tự và các chặng `P00 → D0 → ACT01 → ACT02 → ACT03 → ACT04 → ACT05 → P07`; D0–ACT05 khoảng 42 phút; P00/P07 có thể trước/sau 42 phút.
- Luồng sư phạm hiện tượng → dự đoán → tự thao tác → phản hồi phù hợp → active recall. Giáo viên tổ chức 1:1, không lấy thời gian phản hồi làm điểm hiểu bài.
- Trường hợp Cookie/website dùng dữ liệu hư cấu, tuyệt đối không đọc Cookie thật. Không cung cấp teacher-only key trong student package.
- Bố cục Minimal Classroom xanh lam/xanh ngọc và thẩm mỹ slide hiện đại; không biến mọi hoạt động thành trò chơi.

## 2. Tư duy kiến trúc mới

Một **learning scene** là một đơn vị sư phạm chứa: `scene_id`, `goal`, `context`, `question_before`, `content`, `action`, `feedback_policy`, `asset`, `reveal_condition`, `evidence`, `fallback`. Một scene có thể xuất hiện dưới nhiều **view modes**, nhưng cùng dùng một nguồn dữ liệu; tránh nhân bản nội dung và mất đồng bộ khi sửa.

### Sáu chế độ hiển thị

| Chế độ | Vai trò | Tương tác tối thiểu | Điều kiện dùng |
|---|---|---|---|
| Presentation | Giảng giải tập trung 1 màn | Trước/Tiếp, điều hướng chặng, phóng to hình | mặc định; không bắt buộc tỷ lệ 16:9 cứng |
| Story | Chuỗi tình huống theo chiều dọc / progressive disclosure | Cuộn, mở theo bước khi HS đã dự đoán | khi các scene liên kết thành một câu chuyện; không dùng scroll effect chỉ để trang trí |
| Lab | Thay đổi điều kiện, dự đoán, chạy và giải thích kết quả | input, mô phỏng deterministic, thử lại, so sánh | cơ chế Cookie ACT02, thời hạn ACT03; sử dụng dữ liệu giả |
| Dual View | So sánh hai scene hoặc học liệu + workspace | hai khung độc lập, bất kỳ/liền kề, đảo, 50/50–60/40–40/60 | khi nội dung liên quan; mobile xếp dọc |
| Knowledge Map | Liên kết các ý / ôn tập | chọn nhánh, ẩn/hiện, điều hướng đến scene | sau hình thành kiến thức, trước recall hoặc ôn tập |
| Focus & Recall | Không có gợi ý, viết/nói/vẽ lại | chỉ câu hỏi, ghi chép phiên xem, tự đối chiếu với GV | sau từng nội dung; không thay cho EXIT |

EXIT ACT05 là **assessment_isolated**, không được ghép Dual View, Story/Map/Recall gợi ý với các scene luyện tập trong lúc làm bài. Việc khóa ở giao diện demo không phải bảo mật chống gian lận; sản phẩm chính thức cần phân phối assessment riêng.

## 3. Luồng UX cấp hệ thống

`Intro → [Presentation | Story | Lab | Dual | Map | Focus] → EXIT độc lập → Recall sau giờ`. Giáo viên chọn chế độ và điều hướng, học sinh thực hiện nhiệm vụ trong scene. Một cảnh có thể chuyển Presentation ↔ Lab mà không mất ngữ cảnh hiện hành; trạng thái mô phỏng cần được xử lý riêng trong Skill11. Thử nghiệm Skill09 không tuyên bố lưu tiến độ qua phiên.

### Chuyển đổi giữa các chế độ

- Từ Presentation sang Story giữ chặng ACT; từ Story sang Presentation quay về scene gần nhất (quy tắc này sẽ lập trình đầy đủ tại Skill11).
- Từ Presentation sang Dual View: mặc định cặp liền kề; giáo viên có thể chọn bất kỳ hai scene không thuộc EXIT.
- Từ Presentation sang Lab: mở mô phỏng liên quan đến scene hiện tại, nếu không có thì hiển thị mô phỏng minh họa ACT02 kèm nhãn nguồn.
- Map không phải đáp án phô bày: hiển thị từ khóa, chỉ mở câu hỏi/ghi chú khi người học yêu cầu.
- Focus: che bài đang dạy, ưu tiên học sinh nói/viết. Không chấm bằng tốc độ.
- Khi vào EXIT: ẩn toàn bộ thư viện mô phỏng/học liệu, không nhúng key; thực thi tệp EXIT riêng từ Skill07.

## 4. Reusable layout patterns

1. Context Hero / Visual Story — hiện tượng thực tế, một câu hỏi lớn.
2. Real UI State / Before–After — hai trạng thái của cùng website.
3. Progressive Diagram — một sơ đồ, xây từng bước và có điều khiển.
4. Annotated Evidence — khoanh vùng dòng hoặc chi tiết cần chú ý.
5. Worked Example → Your Turn — GV làm một mẫu, HS tự hoàn thành.
6. Simulation Workspace — thông số bên trái, kết quả có thể quan sát bên phải.
7. Compare/Contrast Cards — không lạm dụng, chỉ khi khác biệt có ý nghĩa.
8. Knowledge Map & Hidden Branches — vừa điều hướng vừa recall.
9. Focus / Explain Back — che toàn bộ nội dung và chỉ để lại câu hỏi.
10. EXIT Isolated Assessment — nhiệm vụ rõ, đáp án tách ngoài.

Không có 22 layout riêng biệt; một scene chọn 1 pattern chính, có thể 1 pattern phụ. **Không sao chép giao diện bên thứ ba**: chỉ học phương pháp tổ chức thông tin.

## 5. Mapping cho 22 scenes

`Learning_Scene_Contract_v3.json` là hợp đồng cấu trúc, `Mode_Scene_Matrix.csv` là ma trận dễ kiểm tra. Mỗi scene có `recommended_modes`, `asset_status`, `reveal_rule`, `learner_evidence`. Bản v3 chỉ **bổ sung metadata**; không sửa prompt hay learner action từ v2.1.

## 6. Asset audit / cần bổ sung trước Skill11

**P0 bắt buộc**: `A1-01` bộ hai trạng thái website cùng bối cảnh (HTML mock + screenshot/fallback); `A2-02/A2-03` mô phỏng/đồ họa từng bước kết hợp nguồn Skill07; `A3-01` timeline dự đoán trống.  
**P1 nên có**: `A4-01` ba thẻ tình huống thống nhất; `A4-02` ma trận tuổi thọ ↔ mục đích; `P07-02` flashcards tương tác với phương án bản in.  
**Tái sử dụng**: `browser_server_blank.svg`, `cookie_lifecycle.svg`, `cookie_accept_block.svg`, `session_persistent_timeline.svg`, `cookies_mindmap_blank.svg`, `visual_lab.html`, `learning_lab.html`, EXIT/PDF từ Skill07 v1.1.  
**Tùy chọn**: ảnh thao tác trình duyệt thật khi có mục tiêu; video không mặc định tạo.

Mỗi asset phải có manifest: `asset_id`, file thật, ngữ cảnh dùng, bản quyền, alt/caption, bản offline, trạng thái READY/PROTOTYPE/SPEC_ONLY/BLOCKED và kết quả QA. Skill05 phân tích yêu cầu; Skill07 sản xuất; Skill09–10 bố trí; Skill11 tích hợp; Skill12 nghiệm thu.

## 7. Giao diện teacher và student

- **Student**: scene, điều khiển, câu hỏi, mô phỏng và phản hồi đúng thời điểm. Không hiện teacher-only keys, rubric và đáp án EXIT.
- **Teacher**: lời dẫn, gợi ý H0–H3, reveal policy, tiến độ và quan sát sản phẩm; khi làm web chính thức cần build riêng, không dùng cách ẩn CSS để bảo vệ key.
- Được phép dùng Dual View hỗ trợ GV; học sinh chỉ nhìn những gì phù hợp tại thời điểm đó.

## 8. Quality gates

Skill09 (đã mô tả): 22 scene khớp source, 6 view modes có luật rõ, asset gaps được nhận diện, sư phạm EXIT không rò key, mô hình offline khả thi.  
Skill10 (bắt đầu): tokens/layout/typography/responsive, tập trung chú ý, visual hierarchy, trạng thái tương tác.  
Skill11 (chưa hoàn thành): engine tương tác, lưu tiến độ nếu quyết định và được phép, chức năng Dual View + Lab thật, accessibility, build offline.  
Skill12 (chưa hoàn thành): test browser `file://`, mobile 320/375, tablet 768/820, desktop 1366/1440, keyboard, screen reader review, contrast, asset rights, teacher/student packages, và dạy thử 1:1.

**Giới hạn:** prototype v3 hiện là mô phỏng giao diện và luồng tương tác. Chưa phải giáo án đã dạy thử hoặc website học tập hoàn chỉnh.
