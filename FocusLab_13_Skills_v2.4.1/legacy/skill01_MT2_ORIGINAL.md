---
name: content-research-and-analysis
version: 2026.11-MT2-FROZEN
role: Skill 01 / 13 — Unified teaching pipeline
status: DEFINITION_MT2_CONSOLIDATED_AWAITING_REAL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0 + UNIFIED-RULES-MT2
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
- Đọc `../../policy/MT_CONTRACT.md`, `../../policy/GATES_AND_ROUTES.md` và `../../policy/UNIFIED_RULES_MT2.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Bổ sung thống nhất MT2 — 17/11/2026
Nguồn thông tin phải nêu ngày truy cập; kiến thức khoa học & ví dụ khác biệt cần nhãn verified/inferred/example. IP và domain là hai khái niệm riêng; DNS không cung cấp HTML. Không chốt phương pháp ở bước 01.

**Handoff bắt buộc:** Đọc `../../policy/UNIFIED_RULES_MT2.md`, nhận output của skill trước; phát hành đúng output của skill này có trạng thái TESTED/NOT_TESTED. Dừng nếu core knowledge chưa nguồn, Recall/Review chưa khớp hoặc thiếu chứng cứ.


## Chuẩn hóa chất lượng MT2 — yêu cầu bổ sung (ưu tiên khi sử dụng)
- Phân biệt nguồn sách giáo khoa do người dùng cung cấp (nếu có), nguồn chính thống/hiện hành, ví dụ minh họa và suy luận chưa kiểm chứng; nguồn sách là phạm vi tối thiểu, không tự khẳng định đã tìm đọc khi chưa có file.
- Khi phát biểu thông tin kỹ thuật thời sự (DNS, HTTP, browser cookie policies), dùng tài liệu tiêu chuẩn hoặc nguồn đáng tin, ghi ngày truy cập và version; nếu nguồn chưa truy cập được, ghi `UNVERIFIED` và yêu cầu bước xác minh.
- Mỗi `knowledge_unit` có statement ngắn, ví dụ/điểm dễ nhầm/điểm giới hạn và liên hệ đời thực phù hợp học sinh; ghi riêng giữa thực hành quan sát bằng browser thật và mô hình lý thuyết.
- Không quyết định phương pháp dạy, số slide hay hoạt động trước Skill04/09.

### Cách đóng cổng và bàn giao sang bước tiếp
- Trả về manifest gồm `skill_id`, `version`, `session_id`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; nếu chưa chạy trên bài thật phải ghi `NOT_RUN`, không sinh sản phẩm minh họa giả.
- Khi một trường cốt lõi chưa có, trả `BLOCKED` hoặc `NEEDS_INPUT` và mô tả phương án bổ sung; không âm thầm thay nội dung/ thời lượng/phương pháp đã được duyệt.
- Trích dẫn tài liệu của người dùng và nguồn truy cập được; mọi bản nháp/bản trước được giữ để kiểm hồi quy.
