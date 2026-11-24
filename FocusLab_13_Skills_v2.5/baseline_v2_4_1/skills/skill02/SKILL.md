---
name: lesson-architecture-assessment
description: Thiết kế mục tiêu, mạch học và bằng chứng cho một nội dung; dùng khi chạy Skill02 sau phân tích nguồn.
---

# SKILL 02 — Lesson Architecture & Assessment (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Xác định mạch nhận thức và bằng chứng đạt cho **một topic** gồm các CORE section thật sự cần thiết, không biến mỗi câu SGK thành section/màn.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill02_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Sổ nguồn và cơ chế Skill01; hồ sơ người học; mục tiêu; thời lượng dự kiến (nếu có).

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Kiến trúc đặt vấn đề có điều kiện
- Bổ sung `context_problem_blueprint` cho hoạt động mở đầu gồm: **tiêu đề → bối cảnh → thực trạng/nhu cầu → điểm chưa giải thích → câu hỏi đặt vấn đề → hành động học tiếp theo**. Cần có phương án minh họa, không dùng câu hỏi trống thiếu bối cảnh.
- So sánh `ONE_SCENE` (OBSERVE đủ chỗ chứa bối cảnh và yêu cầu quan sát) với `TWO_SCENES` (`PROBLEM_CONTEXT` làm nhiệm vụ hiểu tình huống, OBSERVE/EXPLORE/DIAGNOSE làm nhiệm vụ mới). Hai scene chỉ được chọn nếu **có hai mục tiêu/nhiệm vụ và bằng chứng nhận thức phân biệt**; không chia vì tràn chữ.
- Hai scene có thể thuộc **cùng một `activity_id`** và không làm phát sinh CORE/Recall/Review hoặc cộng thời lượng trùng. Không bắt buộc dùng 2 màn ở mọi phần học.
- Đầu ra bổ sung `02-context-split-decision.md` ghi lựa chọn, lý do, `evidence_context`, `evidence_next_task`, chỗ cần quan sát so sánh và điều không được tiết lộ sớm.

1. Chốt các `objective_id`, kết quả cần biết/làm/giải thích; nhóm KU thành `section_id` có ý nghĩa nhận thức, không đặt số section chỉ vì mẫu Cookies có 30 màn.
2. Thiết kế trình tự OBSERVE/DIAGNOSE nếu có thiếu nền; nhánh RECOVERY có thể chọn; vị trí **INTRODUCTION** chỉ khi một công cụ/giải pháp cần được gọi tên trước TEACH.
3. Đặt blueprint Recall → Review cuối mỗi CORE: keyword lần lượt do bấm → câu hỏi gợi nhớ không nộp; Review trắc nghiệm đa dạng và vận dụng độc lập.
4. Vẽ ma trận `objective → knowledge → student task → evidence → Recall/Review/Exit`. Nêu ngưỡng đạt, tình huống sai, lộ trình recovery.
5. Time ledger không có thời gian chờ UI; title highlight 3s song song việc đọc, thời gian đọc/thao tác tự do.
6. Đánh dấu phần thông tin phải quan sát/so sánh đồng thời, nguy cơ không vừa viewport; khi vượt tải, đề xuất ranh giới scene **theo mục tiêu/sản phẩm**, không chia `Part 1/2`.
7. Kiểm tra không có objective nào chỉ có trình chiếu mà không có bằng chứng nhận thức.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Mỗi CORE chọn keyword sequence, câu hỏi gợi nhớ và review xác nhận đóng. Lập evidence quan sát ngoài web cho câu hỏi mở; không biến thành điều kiện điều hướng. Xác định các cặp scene/model cần phân biệt hoặc gộp.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Chia cụm nhiệm vụ nhận thức; lập entry map và chọn LEAD_IN hay tái sử dụng PROBLEM_CONTEXT/ASSESS_INTRO. Giữ Recall–Review cùng mạch, không chen đáp án.

### Thực thi và kiểm tra v2.4.1
1. Gán activity_cluster_id, activity_id, section_id, objective_ids, nhiệm vụ và evidence cho từng cụm. Trước Skill09 dùng planned_scene_key, chưa cấp scene_id canonical.
2. `02-activity-entry-map.json` ghi entry_key, target_key, entry_kind dự kiến, NEW/REUSE, lý do, điều đã học và spoiler_boundary. Entry không tạo hoạt động 5512/thời gian trùng.
3. Gắn Recall–Review cho mỗi CORE; không chen TEACH/summary/tooltip đáp án trước lượt gợi nhớ hoặc đánh giá độc lập. Evidence giải thích miệng được quan sát ngoài web.
4. Đối chiếu năm thành phần ghi nhớ toàn bài; tích hợp game/mindmap/flashcard/teach-back vào nhiệm vụ có giá trị. Nếu bỏ thành phần người dùng yêu cầu, nêu lý do để duyệt thay vì âm thầm bỏ.
5. Mỗi objective có ngưỡng đạt quan sát được; không biến ngưỡng đó thành guard điều hướng hoặc ép thời lượng theo DNS/Cookies.

## Đầu ra bắt buộc
Bổ sung `02-activity-entry-map.json`.

Bổ sung `02-direct-learning-blueprint.json`.

`02-session-architecture.json`, `02-section-and-prerequisite-map.csv`, `02-time-ledger.csv`, `02-assessment-evidence-blueprint.md`, **mới:** `02-one-topic-learning-flow.md`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL02`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 02)
Một topic, CORE rõ, đủ Recall→Review, không ép số màn hoặc cộng 3s highlight vào thời gian chờ.

**Gate v2.3:** Có Recall→Review, không biểu mẫu bắt buộc, mục tiêu độc lập.

## Bàn giao và xử lý sai lệch
Bàn giao section/goal/assessment/recovery và các điểm cần so sánh đồng thời cho Skill03–04; cấu trúc học phần phải được người dùng duyệt trước khi tạo hoạt động.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Mỗi cụm có entry riêng hoặc lý do tái sử dụng; không tăng màn máy móc.
