# Cookies — Skill 10 v3.5 — 17/11/2026

**Nguồn chính xác:** `source/09-implementation-contract.json` (Skill 09 v3.4), 22 scene IDs; `source/SKILL10_v3.5_APPROVED_STANDARD.md` (10 tiêu chí người dùng đã duyệt); hồ sơ Skill04 Cookies (nền chưa vững, quên giữa chặng, thích ICT, cần chỉ dẫn rõ, chưa có D0 thực tế). **Đầu ra hiện tại:** hi-fi prototype, KHÔNG phải Skill11 mới hay thử nghiệm với học sinh thật.

## Trạng thái gate
**`DESIGN_REVIEW_REQUIRED / HI_FI_PREVIEW_READY / FUNCTIONAL_UI_SMOKE_PASS / NOT_SKILL11 / NOT_LEARNER_VALIDATED`**

- 22/22 scene, 44 ảnh desktop/mobile, 6 SVG gốc, đầy đủ mục tiêu nguồn.
- Kiểm thử tự động UI: 14/14 ca, lỗi JavaScript: 0, no-scroll desktop: 22/22, no clipped canvas: 22/22.
- 8 hard gates: G1–G7 có bằng chứng thiết kế, nhưng G1/knowledge sufficiency vẫn cần đọc duyệt bởi giáo viên; G8 **CHỜ người dùng xem bản hi-fi 22 màn**. Chưa gọi là `DESIGN_PASS` chính thức.
- Skill11 vẫn phải xây true engine, chấm bài theo nguồn, data persistence, bảo vệ EXIT, EN translation (nếu cần) và QA thực tế.
- Không gộp kết quả Skill11 v1.0 trước đây vào bản chạy này; đó là phiên bản đã được phản biện và lưu đối chiếu.

## Các điểm cần người dùng duyệt trước khi nâng cấp toàn website
1. Màn P00-01 và A1-02: chữ/sơ đồ có đủ lớn không? Nội dung có đủ rõ để tự học mà không cần nhập lời giải?
2. A2-02/A2-03: 60/40 và 70/30 có hợp lý, keyword popover có đúng kiểu bong bóng? “Em có biết?” có đúng vai trò phụ?
3. A3-01: timeline dự đoán chưa lộ kết luận; sau reveal đã đủ chặt chẽ chưa?
4. A4-01/A4-02: bố cục 3 cột và 50/50 có đủ minh họa và giải thích?
5. A5-02: ba cột EXIT có vừa, lượng bài có quá tải 8 phút không?
6. Đi toàn tuyến 22 màn: các cầu nối có tự nhiên hay cần chỉnh theo ngôn ngữ học sinh?

## Quyết định bảo toàn bản gốc
Skill09 v3.4 contract và Skill10 v3.5 standard được chụp vào `source/`. Không sửa phiên bản Skill11 v1.0 trước, không thay đổi 22 scene IDs/42 phút.
