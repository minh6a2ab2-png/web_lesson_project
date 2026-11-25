---
name: activity-resource-designer
version: 2026.11-MT2-FROZEN
role: Skill 07 / 13 — Unified teaching pipeline
status: DEFINITION_MT2_CONSOLIDATED_AWAITING_REAL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0 + UNIFIED-RULES-MT2
source_basis: Cookies_Skill07_v1_1_Full_Teacher.zip
---

# SKILL 07 — Activity Resource Designer

## Nhiệm vụ và ranh giới
Sản xuất và thử học liệu **thực** theo asset registry, không chỉ nêu ý tưởng; chú ý tái sử dụng asset ở nhiều topic.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Tạo sơ đồ/flashcard/cue/quiz/phiếu giấy/SVG/ảnh gốc tương ứng; xác thực mở file và logic; tách file giáo viên, học sinh.
2. Với mô phỏng/browser demo phải có dữ liệu kiểm thử và giới hạn đúng kỹ thuật; nếu không làm được, ghi PROTOTYPE/SPEC_ONLY/BLOCKED, không báo READY.
3. Đặt ID assets toàn cục `ASSET-*`, liên kết tới `section_id`, `objective_id`, `scene_id`; chỉ tạo học liệu hình khi có giá trị sư phạm.
4. Tạo fallback offline và khi trình duyệt không cho xem Cookie; bảo đảm asset kèm alt, caption, bản quyền và nguồn.
5. Chạy thử hai nhánh đáp án đúng/sai và kiểm tra key EXIT không lọt vào bộ học sinh.


## Đầu ra, giữ nguyên tên và ID
- `07-asset-manifest.json`
- `07-student-media/`
- `07-teacher-key/`
- `07-test-evidence.json`


## Cổng chặn bàn giao
- **G1:** Tài nguyên CORE dùng trong kế hoạch phải READY_ASSET hoặc có fallback đã thử.
- **G2:** Tệp thực tồn tại và được kiểm tra; nếu chưa có phải ghi rõ hạn chế trước khi sang Skill08.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md`, `../../policy/GATES_AND_ROUTES.md` và `../../policy/UNIFIED_RULES_MT2.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Bổ sung thống nhất MT2 — 17/11/2026
Mỗi asset có file tồn tại, SHA-256, license/source, kiểm tra mở file, alt/caption; trạng thái READY_ASSET/PROTOTYPE/SPEC_ONLY/BLOCKED không gán tùy tiện. Tách student với teacher answer key.

**Handoff bắt buộc:** Đọc `../../policy/UNIFIED_RULES_MT2.md`, nhận output của skill trước; phát hành đúng output của skill này có trạng thái TESTED/NOT_TESTED. Dừng nếu core knowledge chưa nguồn, Recall/Review chưa khớp hoặc thiếu chứng cứ.


## Chuẩn hóa chất lượng MT2 — yêu cầu bổ sung (ưu tiên khi sử dụng)
- SẢN XUẤT học liệu được chọn ngay trong bước này khi có công cụ phù hợp: SVG/PNG gốc, sơ đồ, flashcards, thẻ cue, phiếu thực hành, quiz, hoạt ảnh nếu tạo được; không dừng ở storyboard.
- Mỗi asset phải có file tồn tại thật, phép thử mở/kiểm logic, hash SHA-256, nguồn/bản quyền, alt/caption/transcript tiếng Việt và tiếng Anh nếu có, offline fallback và owner. Dùng các trạng thái `READY_ASSET / PROTOTYPE / SPEC_ONLY / BLOCKED` trung thực.
- Với cơ chế cần tương tác trong website, tạo prototype/đặc tả/đầu vào kiểm thử ở Skill07 và chỉ xác nhận đã tích hợp chạy thực ở Skill11.
- Tách `student_media` và `teacher_key`; KHÔNG đặt đáp án EXIT hay mã chấm ẩn trong HTML phía học sinh. Không coi URL tham khảo là sản phẩm tự tạo.
- Kiểm mở được và nhánh đúng/sai cho tài nguyên tương tác, ghi rõ công cụ/thiết bị/mức độ đã test.

### Cách đóng cổng và bàn giao sang bước tiếp
- Trả về manifest gồm `skill_id`, `version`, `session_id`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; nếu chưa chạy trên bài thật phải ghi `NOT_RUN`, không sinh sản phẩm minh họa giả.
- Khi một trường cốt lõi chưa có, trả `BLOCKED` hoặc `NEEDS_INPUT` và mô tả phương án bổ sung; không âm thầm thay nội dung/ thời lượng/phương pháp đã được duyệt.
- Trích dẫn tài liệu của người dùng và nguồn truy cập được; mọi bản nháp/bản trước được giữ để kiểm hồi quy.
