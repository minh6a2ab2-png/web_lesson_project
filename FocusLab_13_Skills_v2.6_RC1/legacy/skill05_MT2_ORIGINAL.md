---
name: learning-resource-curator
version: 2026.11-MT2-FROZEN
role: Skill 05 / 13 — Unified teaching pipeline
status: DEFINITION_MT2_CONSOLIDATED_AWAITING_REAL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0 + UNIFIED-RULES-MT2
source_basis: Cookies_Skill05_v1.zip
---

# SKILL 05 — Learning Resource Curator

## Nhiệm vụ và ranh giới
Tuyển chọn nguồn/học liệu xuyên các section, tránh trùng và có kế hoạch dùng công cụ thật hoặc offline phù hợp.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Lập `asset_registry` với owner section, objective, trạng thái READY_REFERENCE/READY_ASSET/SPEC_ONLY/BLOCKED, nguồn/bản quyền, alt/caption/transcript song ngữ nếu cần.
2. Tuyển ví dụ DNS/HTML/Cookie liên kết vào **một tình huống web duy nhất**, ưu tiên tái dùng sơ đồ Browser–Server thay vì ba sơ đồ mâu thuẫn.
3. Chọn trình duyệt thật cho minh họa kiểm chứng được; phân biệt quan sát thật, mô phỏng, tranh sơ đồ và giả định. Chuẩn bị fallback khi mạng/cookie policy thay đổi.
4. Rà tài nguyên cho mỗi Recall cue, quiz type, bridge, transfer và EXIT; teacher answer key ở phạm vi riêng.


## Đầu ra, giữ nguyên tên và ID
- `05-source-resource-catalog.csv`
- `05-reusable-asset-map.json`
- `05-real-browser-and-fallback.md`
- `05-license-and-accuracy-register.md`


## Cổng chặn bàn giao
- **G1:** Không có mục CORE thiếu nguồn hoặc học liệu/biện pháp thay thế.
- **G2:** Không đánh dấu tài nguyên đã sản xuất khi mới tuyển hoặc viết storyboard.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md`, `../../policy/GATES_AND_ROUTES.md` và `../../policy/UNIFIED_RULES_MT2.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Bổ sung thống nhất MT2 — 17/11/2026
Tuyển nguồn/ảnh/video có URL + tác giả/quyền; mọi tài nguyên có mục tiêu cụ thể, nội dung alt/caption, tình trạng mạng/offline; ưu tiên thực nghiệm trình duyệt thật khi quan sát có thể kiểm chứng.

**Handoff bắt buộc:** Đọc `../../policy/UNIFIED_RULES_MT2.md`, nhận output của skill trước; phát hành đúng output của skill này có trạng thái TESTED/NOT_TESTED. Dừng nếu core knowledge chưa nguồn, Recall/Review chưa khớp hoặc thiếu chứng cứ.


## Chuẩn hóa chất lượng MT2 — yêu cầu bổ sung (ưu tiên khi sử dụng)
- Mọi tài nguyên được chọn phải phục vụ mục tiêu cụ thể, ghi `asset_id, section_id, objective_id, source_url, license, verification_date, alt_vi, alt_en, caption_vi, caption_en, fallback`; không dùng ảnh chỉ để trang trí.
- `CURATED/READY_REFERENCE` nghĩa là tìm thấy nguồn, **không** nghĩa là đã tạo được file. Chỉ Skill07 được chuyển sang `READY_ASSET` sau khi file và phép thử mở thành công.
- Với browser thật, chuẩn bị hướng dẫn quan sát + phương án ngoại tuyến; không giả mạo trình duyệt đang thực sự tra DNS khi chỉ xem hoạt ảnh.
- Kiểm tính phù hợp lứa tuổi, bản quyền, hiệu năng offline, chữ/ảnh dễ đọc; kiểm tra câu Recall/Quiz có đủ học liệu trước khi bàn giao.

### Cách đóng cổng và bàn giao sang bước tiếp
- Trả về manifest gồm `skill_id`, `version`, `session_id`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; nếu chưa chạy trên bài thật phải ghi `NOT_RUN`, không sinh sản phẩm minh họa giả.
- Khi một trường cốt lõi chưa có, trả `BLOCKED` hoặc `NEEDS_INPUT` và mô tả phương án bổ sung; không âm thầm thay nội dung/ thời lượng/phương pháp đã được duyệt.
- Trích dẫn tài liệu của người dùng và nguồn truy cập được; mọi bản nháp/bản trước được giữ để kiểm hồi quy.
