---
name: knowledge-content-author
version: 2026.11-MT1
role: Skill 03 / 13 — Cookies pipeline
status: DEFINITION_MT1_COMPLETE_NOT_EXECUTED_AS_FULL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0
source_basis: Cookies_Skill03_v1.zip
---

# SKILL 03 — Knowledge Content Author

## Nhiệm vụ và ranh giới
Biên soạn **đủ kiến thức** cho toàn buổi và cầu nối, thay vì chỉ viết riêng từng chủ đề rời rạc.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Viết `full_teachable_content` theo `section_id/ku_id`, có khái niệm, mô hình, ví dụ, phản ví dụ, ranh giới, hiểu lầm và câu tự kiểm chứng.
2. Soạn `cross_topic_bridges` giải thích mối quan hệ nhưng không đánh đồng DNS với HTTP, HTML với Cookie; chỉ tích hợp kiến thức người học đã có ở thời điểm ấy.
3. Đánh dấu khi phần sau tái dùng từ vựng phần trước, thêm 1 câu nhắc lại ngắn nếu nền yếu; không sao chép lại toàn bộ bài trước.
4. Tạo ma trận 100% CORE objectives → mệnh đề nội dung và nguồn; không biến nội dung thành slide hay bài tập trước Skill04.


## Đầu ra, giữ nguyên tên và ID
- `03-full-knowledge-by-section.md`
- `03-cross-topic-explanations.md`
- `03-objective-to-knowledge-coverage.csv`
- `03-misconception-register.md`


## Cổng chặn bàn giao
- **G1:** Mọi khái niệm dùng trong bridge phải đã được giải thích hoặc có chỉ dẫn bổ trợ.
- **G2:** Tài liệu đầy đủ đủ để người khác dạy đúng mà không phải phỏng đoán kiến thức thiếu.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md` và `../../policy/GATES_AND_ROUTES.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.
