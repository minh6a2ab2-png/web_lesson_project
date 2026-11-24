---
name: knowledge-content-author
description: Viết kiến thức học sinh phải biết và nội dung VI/EN; dùng khi chạy Skill03 từ kiến trúc bài học đã chốt.
---

# SKILL 03 — Knowledge Content Author (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Viết **đầy đủ kiến thức bắt buộc học sinh phải biết** trước khi lựa chọn phương pháp và scene layout; chuẩn hóa ngữ nghĩa cho từng loại màn.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill03_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Source register + mechanism candidates Skill01, mục tiêu/section/evidence Skill02; tài liệu sách và giới hạn chương trình.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Nội dung riêng cho màn PROBLEM_CONTEXT
- Soạn dữ liệu **VI/EN**: `title`, `setting/actors`, `context_story`, `observed_reality`, `unexplained_gap`, `problem_question`, `illustration_brief`, `bridge_to_next_task`, `spoiler_boundary`, `source_status`. Nêu tình huống cụ thể, tránh lời dẫn chung chung hoặc chỉ một câu hỏi.
- Câu hỏi đặt vấn đề phải xuất phát tự nhiên từ bối cảnh và chưa chứa sẵn lời giải. Không nói trước DNS/cơ chế nếu hoạt động tiếp theo cần HS tự dự đoán; không dùng thông tin giả định như dữ kiện đã quan sát thật.
- Tách rõ `PROBLEM_CONTEXT` (hiểu vì sao cần tìm hiểu) khỏi `OBSERVE` (quan sát/thao tác thu thập bằng chứng) và `INTRODUCTION` (gọi tên phương án/khái niệm). Nếu gộp một màn, nội dung OBSERVE vẫn cần bối cảnh và câu hỏi rõ.
- Đầu ra bổ sung `03-problem-context-content.md`, có phiên bản viết ngắn vừa viewport và kiểm tra thuật ngữ cùng `must_show` không giấu trong tooltip.

1. Viết bản kiến thức đủ dạy cho từng `ku_id`: định nghĩa, phát biểu chính xác, ví dụ/phản ví dụ, thuật ngữ, điều kiện ngoại lệ, misconceptions, cách kiểm chứng.
2. Với cơ chế, mô tả **actors → events → states → inputs → outputs → errors**. Tách diễn giải đúng kỹ thuật khỏi câu chuyện minh họa, ghi đúng nơi một mô hình có thể đơn giản hóa.
3. Chuẩn bị `diagnose-prior-knowledge`: kiến thức cũ phải nhớ, lời giải thích **ngắn, rõ**, một minh họa có thể tương tác và một cầu nối sang kiến thức mới khi học sinh trả lời đúng; sai chỉ ra lỗ hổng để Recovery.
4. Soạn **INTRODUCTION** khi có tên công cụ/phương án: tên, công dụng, ví dụ gợi trực quan, câu hỏi dẫn vào TEACH. Không viết INTRODUCTION thành bài TEACH dài.
5. Với OBSERVE soạn một tình huống thực tế, câu hỏi chính xác có thể đặt giữa màn, dữ kiện và kết quả học sinh cần phát hiện.
6. Phân tầng `must_show` vs `optional_glossary` vs `teacher_only`; CORE không được giấu bắt buộc trong tooltip/modal, tooltips chỉ phục vụ từ khóa cần chú thích.
7. Chuẩn bị bản VI/EN đầy đủ từ vựng, ví dụ, nhãn mô hình và lời phản hồi; đánh dấu nơi cần thẩm định thuật ngữ. Không tự ép mọi khối thành slide.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Viết câu kiến thức hoàn chỉnh theo phong cách SGK, ưu tiên từ khóa in đậm, định nghĩa rõ; role nội bộ core/support/prompt/teacher_only. Không xuất label “Kiến thức cần nhớ”, “Bối cảnh”, “Câu hỏi gợi mở” hoặc bản EN. Tạo inline glossary VI/EN và map keyword, chặn tooltip spoil.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Viết lời dẫn VI/EN theo lượng kiến thức sau, câu nhắc đúng cái đã học, không giả định đã hiểu; keyword + mô tả cue không spoil, câu hỏi review và tổng hợp chuẩn.

### Thực thi và kiểm tra v2.4.1
1. Với mỗi KU, ghi kiến thức bắt buộc, ví dụ, ngộ nhận, nguồn và VI/EN; CORE không chỉ tồn tại trong lời dẫn/tooltip.
2. `03-lead-recall-review-content.md` theo cluster/KU có lời dẫn VI/EN, kiến thức đã học được phép nhắc, keyword, cue brief, câu gợi nhớ, câu Review gốc/tương đương và summary.
3. Mỗi câu có question_id, equivalence_group_id, ku_ids, mục tiêu/độ khó dự kiến, dữ kiện, options, misconception, key/feedback VI/EN. Câu tương đương giữ mục tiêu và độ khó, đổi dữ kiện có nghĩa, không chỉ đảo đáp án. Key đánh giá độc lập không vào student payload.
4. Duyệt spoiler cả chữ trong ảnh, alt/caption và tooltip. Keyword được phép; định nghĩa/luồng đáp án phải nhớ không được lộ. Không giả định HS hiểu chỉ vì đã xem.
5. Thay ngữ nghĩa câu hỏi phải cập nhật equivalence/coverage và bản dịch; không chỉ sửa chữ ở runtime.

## Đầu ra bắt buộc
Bổ sung `03-lead-recall-review-content.md`.

Bổ sung `03-core-content-and-inline-keywords.json`.

`03-full-knowledge-by-section.md`, `03-knowledge-links.md`, `03-objective-to-knowledge-coverage.csv`, `03-misconception-register.md`, **mới:** `03-model-content-contracts.md`, `03-intro-diagnose-content.md`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL03`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 03)
100% CORE có nội dung đủ giải thích; cơ chế có trạng thái đúng; introduction ngắn; diagnose đúng có kiến thức nền minh họa; modal không che giấu kiến thức CORE; đã đối chiếu VI/EN.

**Gate v2.3:** Tất cả CORE hiện trực tiếp; không nhãn sư phạm, không giấu định nghĩa trong tooltip.

## Bàn giao và xử lý sai lệch
Skill04 quyết định cách học từ nội dung đầy đủ, Skill05 tuyển tài nguyên, Skill07 dùng nội dung làm chuẩn mô hình; sai cơ chế trả về Skill03/01.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Đủ VI/EN, không lộ lời giải, core không giấu trong lời dẫn.
