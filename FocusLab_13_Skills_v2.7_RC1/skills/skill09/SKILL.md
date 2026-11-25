---
name: interactive-website-architect
description: Thiết kế hợp đồng scene và đồ thị điều hướng; dùng khi chạy Skill09 trước thiết kế thị giác.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 09 — Interactive Website Architect (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Thiết kế kiến trúc **scene độc lập theo mục tiêu học**, đủ 15 loại nhận thức, hợp đồng trạng thái, model/CTA/navigation. Không làm thiết kế màu hoặc code ở bước này.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill09_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Lesson plan và handoff Skill08, model asset manifest Skill07, script/cue Skill06, goals/evidence Skills01–04.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Quyết định tạo màn PROBLEM_CONTEXT và liên kết cảnh
- **Scene taxonomy hiện có 15 loại**: thêm `PROBLEM_CONTEXT` trước OBSERVE; **không** hiểu là 14 Skills hay buộc 15 màn trong một bài. Mỗi scene vẫn có một `scene_id` ổn định.
- Trước phân cảnh, tạo bảng chọn `ONE_SCENE` vs `TWO_SCENES` dựa trên nhiệm vụ nhận thức độc lập: A hiểu bối cảnh, nêu nhu cầu/vấn đề; B quan sát/thao tác, thu bằng chứng hoặc giả thuyết. Cấm tách vì chỉ để giảm chữ hoặc đặt `part_id`.
- Với `PROBLEM_CONTEXT`, điền `context_problem` theo schema (VI/EN, bối cảnh, hiện trạng, gap, vấn đề, hình minh họa, giới hạn không hé đáp án), `problem_split` có reason, `objective_id`, `activity_id`, evidence, Next tới scene B. OBSERVE kế tiếp phải có `observed_event`, `learner_action`, `independent_evidence`, không sao chép lại A.
- Next do HS/GV chủ động, không khóa do chưa nộp; A/B khác nhiệm vụ và bằng chứng.
- Đầu ra bổ sung `09-problem-context-split-audit.csv` và 2 scene contracts mẫu, kiểm độc lập viewport & không spoil. Cấm tạo INTRODUCTION ngay sau A nếu tên giải pháp còn đang cần HS dự đoán trước.

1. Tạo `09-one-topic-scene-contract.json`: một `topic_id`, scene IDs duy nhất, một `scene.kind` trong **15 loại**; scene.kind khác layout_mode. INTRODUCTION có điều kiện; không mặc định 30/31 màn.
2. Mỗi scene khai báo objective/task/opening_cue/attention_plan/display/content_blocks/layout/interaction/evidence/next/state_dependency/viewport_fallback; completion_gate=NON_BLOCKING.
3. Cấu hình display.mode=DIRECT, delay_ms=0, title_highlight 3000ms (1–2 cycles), no auto advance/restart; không dùng reveal cũ.
4. Xây trình tự PROBLEM_CONTEXT (khi được duyệt) → OBSERVE → DIAGNOSE/(RECOVERY) → INTRODUCTION khi có công cụ → TEACH/EXPLORE/COMPARE/PRACTISE → RECALL→REVIEW theo CORE → vận dụng/EXIT; khác biệt theo ý nghĩa chứ không phải chuỗi máy móc.
5. Với các cảnh cơ chế, `model_id`, state transitions, mô hình inline và **một CTA riêng có nhãn rõ**; không lập song song nút mở mô hình trùng tác dụng. TEACH và EXPLORE không được dùng mô hình giả tĩnh.
6. Shell một viewport, Previous/Next fixed, router thống nhất không khóa; không part_id hoặc subslide chữa tràn.
7. DIAGNOSE đúng yêu cầu modal kiến thức nền + minh họa, sai Recovery. Tooltips hover tự ẩn, focus/tap tương đương; Recall/Review/Assess không lộ key.
8. Truy vết `scene_id→objective→activity→asset/model→evidence→next`, chỉ đánh dấu mastery từ evidence thực.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Dùng schema hiện hành v2.4.1: display, ui, navigation.mode=FREE, completion_gate=NON_BLOCKING, question_intents, recall (manual keyword→questions), model_view_id. Audit mọi cặp scene dùng model chung, đặc biệt DNS 09/10; không render title khác với nội dung trùng.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Gán 15 kind, visual_identity, lead target, visual recall cue và adaptive review contract; giữ state dependency, audit no duplicate.

### Thực thi và kiểm tra v2.4.1
1. Cấp scene_id từ planned_scene_key qua `09-id-crosswalk.json`; giữ ID đã cấp hợp lệ. Nếu đổi do xung đột, ghi migration cho mọi liên kết.
2. `09-one-topic-scene-contract.json` là nguồn scene duy nhất. `09-guided-visual-scene-contract.json` là báo cáo/projection với canonical_ref+sha256, không chỉnh hai danh sách scene song song.
3. Chạy schema từng scene và validator toàn bài: ID duy nhất, cùng lesson/topic, cạnh next/lead/state dependency hợp lệ, entry bao phủ cụm, Recall trước Review mỗi CORE, kind identity đúng. State dependency không guard Next; deeplink thiếu state dùng mặc định an toàn.
4. REVIEW có initial_question_ids, retry_map theo equivalence group, retry_limit_per_question, progress_policy và summary_policy. Sai mới có retry, lượt gốc thử/bỏ qua rõ mới mở summary chủ động; không tự chấm mastery.
5. Renderer hỗ trợ 15 kinds, bài thật chỉ dùng kinds cần thiết. DNS 09/10 là ví dụ lịch sử, không dùng số thứ tự như ID hoặc ép topic khác có DNS/Cookies.
6. Runtime projection có mapping/hash canonical và loại teacher key. Kiểm entry/asset/model trước bàn giao Skill10/11.

## Đầu ra bắt buộc
Bổ sung `09-guided-visual-scene-contract.json`.

Bổ sung `09-direct-learning-duplicate-audit.csv`.

**Mới (canonical ONE_TOPIC):** `09-one-topic-scene-contract.json`, `09-navigation-graph.json`, `09-learner-evidence-state-model.md`, `09-qa-traceability.json`, `09-scene-kind-and-cta-matrix.csv`. Tên cũ MT2 `09-multitopic-scene-contract.json` là historical alias, **không** tạo output active.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL09`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 09)
15 loại enum, no-part/no-duplicate CTA, model view riêng, direct display, fixed nav, điều hướng tự do, evidence không tự mastery.

**Gate v2.3:** Schema và audit khác biệt đạt; nav tự do, no labels/no reflection form.

## Bàn giao và xử lý sai lệch
Skill10 nhận contract và duyệt từng scene trước khi vẽ; Skill11 nhận state/router tự do từ Skill09; nếu màn không vừa, trả Skill02/04/09 để thiết kế lại, không chữa bằng font siêu nhỏ.

> **Ngoại lệ Direct Display:** “ALL” chỉ là tất cả khối học sinh có quyền nhìn thấy **trước khi trả lời**; không tự lộ key, feedback, modal DIAGNOSE chưa kích hoạt, lời giải RECALL, trạng thái tương lai của mô hình.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Schema mới, đủ entry map, Recall→Review không spoil, nav FREE/FLOATING_FIXED.

---

# SKILL09 — Interactive Website Architect: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill09/SKILL.md
**SHA-256 gốc:** `cfa667b22dd49a30405ed11a0fa49e6608708e8c955100e175438e1da35f3698`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE03,VE04,VE07,VE08,VE09. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Bổ sung visual_excellence vào canonical scene (không thêm kind), chọn layout library, background, focal point, asset role, lý do riêng và adjacent repetition audit. Map ref & full viewport, safe areas và internal controls; review từng format, không nhúng lặp câu. Kiểm schema gốc + extension, ID/crosswalk.

## Đầu ra bổ sung
`09-visual-rhythm-audit.json` — trường tối thiểu: canonical_ref,canonical_sha256,scene_id,layout_id,art_direction,background_id,visual_role,adjacent_audit,map_ref,issue. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 09 v2.5
Mỗi scene có đúng một contract canonical, layout không chỉ đổi màu, task khác mới tách scene; map config hợp lệ.

## Bàn giao
Consumer bổ sung: SKILL10, SKILL11, SKILL12, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `09-component-dependency-map.json` — REQUIRED: Map scene/asset/model/media/engine bằng ID canonical, dependency và cleanup; không tạo scene kind mới.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.

## v2.7 RC1 — pedagogical contract
Read `../../policy/EXECUTION_V2_7_RC1.md` before execution; its explicit version and scope overrides take precedence. Use existing scene kinds and free navigation; separate teacher and student runtime; plan scoped session and evidence flow.
- Required `09-pedagogical-contract.json`: versioned skill/topic/KU, applicable evidence and source refs, decisions, limitations, status; no invented approval.
