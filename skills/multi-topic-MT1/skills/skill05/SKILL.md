---
name: learning-resource-curator
version: 2026.11-MT1
role: Skill 05 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
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
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.
