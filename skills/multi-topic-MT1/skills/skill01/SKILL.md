---
name: content-research-and-analysis
version: 2026.11-MT1
role: Skill 01 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill01_v1.zip
---

# SKILL 01 — Content Research & Analysis

## Nhiệm vụ và ranh giới
Nghiên cứu thông tin của từng topic và các quan hệ đúng/sai giữa chúng; định nghĩa cùng tình huống xuyên buổi mà không đồng nhất các tầng kỹ thuật.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Lập bảng `topic_source_register` có nguồn riêng cho DNS, HTTP/HTML, Cookie; tách tài liệu gốc của user khỏi phần cập nhật hiện đại và suy luận người soạn.
2. Định nghĩa mỗi `knowledge_unit` thuộc topic, nguồn, độ chắc chắn, ví dụ/giới hạn, tác nhân kỹ thuật và những điều dễ bị nhầm qua topic (DNS không gửi HTML, Cookie không phải mã HTML).
3. Chỉ ra tiên quyết trước khi thiết kế hoạt động: domain/IP, Browser–Server, HTTP Request/Response, HTML cấu trúc, Cookie data; xác minh điều kiện ngoại lệ.
4. Đánh dấu CORE vs EXTENSION và rủi ro quá tải; đề xuất cách mô tả tình huống tích hợp an toàn, đúng và vừa sức.


## Đầu ra, giữ nguyên tên và ID
- `01-topic-source-register.csv`
- `01-ku-prerequisite-graph.json`
- `01-cross-topic-accuracy-boundaries.md`
- `01-core-extension-audit.md`


## Cổng chặn bàn giao
- **G1:** Mỗi CORE KU có nguồn hoặc nhãn `UNVERIFIED`, không lan kết luận Cookie sang toàn bộ công nghệ web.
- **G2:** Sự phụ thuộc trong chuỗi tình huống được kiểm tra nhưng chưa quyết định phương pháp/số slide.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.
