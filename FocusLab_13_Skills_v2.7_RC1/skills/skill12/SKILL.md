---
name: learner-perspective-simulation-journey-audit
description: Diễn tập hành trình người học và ghi lỗi có bằng chứng; dùng khi chạy Skill12 từ website đã có runtime.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 12 — Learner Perspective Simulation & Journey Audit (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Diễn tập hành trình **một nội dung** từ mắt người học, kiểm tra attention, cơ chế, direct display và title highlight, recovery và mức độ hiểu dựa trên bằng chứng. Mô phỏng không thay thế học sinh thật.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill12_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Website thực hiện ở Skill11, scene/interaction specs, learner profile, QA report và activity map.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Thử nghiệm PROBLEM_CONTEXT và hành trình đặt vấn đề hai màn
- Persona mới học bài: đọc A và **nói được hoàn cảnh, thực trạng và điều chưa hiểu** mà không cần GV giải đáp; chuyển B và **có hành động quan sát/dự đoán rõ**, không thấy một màn câu hỏi lặp lại.
- Kiểm `ONE_SCENE` vs `TWO_SCENES`: nếu A và B có cùng evidence hoặc chỉ là chia màn vì tràn chữ, báo `REDUNDANT_SPLIT` và chuyển Skill02/09 sửa.
- Kiểm UI direct A/B, title 3s, Next tự do, VI/EN, reduced, hình thật, desktop no scroll/clipping.
- Chỉ chấm 'có khả năng hiểu tình huống' bằng walkthrough; khi chưa có học sinh thật phải ghi `FIELD_NOT_VALIDATED`, không giả đánh giá được học sinh hiểu.
- Đầu ra bổ sung `12-context-problem-journey-audit.csv` và evidence ở cả A/B.

1. Persona chưa biết nền, đúng/sai DIAGNOSE, học nhanh không chờ, reduced motion, quay lại/resume.
2. Đo t=0 đầy đủ, ≥3s title bình thường, kiến thức CORE rõ, nhãn dư/form không còn; screenshot/DOM.
3. Next/Prev/TOC/resume nhanh, đổi VI/EN/rerender không restart highlight, reduced motion không khóa nội dung.
4. Thử mọi mô hình cơ chế bằng hai đầu vào để kiểm state change; học sinh có thể dự đoán, thao tác, giải thích? Có nút duplicate, ảnh tĩnh giả tương tác, tên nút “Thử” mơ hồ không?
5. Chạy nhánh đúng→modal recap→intro→teach, nhánh sai→Recovery→retry; giữ dữ liệu khi qua lại, xét tooltip hover **tự tắt khi rời chuột**, focus/touch và modal closing.
6. Recall keyword→questions không ô nhập/chấm; Review đa dạng, Next tự do, không auto MASTERED; mindmap thẻ và teach-back miệng.
7. Lặp ở VI/EN và viewport 1280×720, 900×600, 390×844, 360×640, 640×360, zoom 200%; ghi clip/scroll/overlap/focus. Thử offline/storage denied khi có thể.
8. Báo issue severity, chính scene/model/owner Skill, bước tái hiện, ảnh/log và khuyến nghị sửa; khi không có HS thật, đánh `SIMULATED / FIELD_NOT_VALIDATED`.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Kiểm từng màn không nhãn nội bộ, không form, Next khi chưa làm, hover/focus/tap, CORE đủ; thử keyword từng bước không timer/answer rồi Review, hai view model khác biệt. Đánh giá tải thao tác, không tự coi SEEN là hiểu.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Diễn tập toàn tuyến có lead-in, visual cue, Review adaptive, đo nút nổi/viewport và mức trống; tách field evidence.

### Thực thi và kiểm tra v2.4.1
1. Walkthrough người mới, thiếu nền, bỏ qua quiz, sai→tương đương, sai lại→bỏ qua, quay lại summary, đổi VI/EN/resume; ghi thao tác và kết quả, không bịa lời HS.
2. Kiểm entry giúp hiểu cách làm không nói đáp án, cue dùng điều đã học, retry tương đương, summary không lộ trước, Next khi UNANSWERED ở mọi nhánh.
3. Kiểm đủ 4 desktop và stress matrix, trạng thái dài nhất/feedback/overlay cả VI/EN; ảnh ban đầu không chứng minh mọi state vừa viewport.
4. Tách defect runtime, nhận định tải nhận thức và giả thuyết hiệu quả. Issue có repro, scene/model, owner_skill, affected_outputs, evidence, severity, retest_required.
5. Chưa HS thật ghi field_status=NOT_RUN. Simulation không thành VERIFIED_IN_PRACTICE; chuyển repair rồi retest artifact hash mới, không vừa sửa vừa gọi audit độc lập.

## Đầu ra bắt buộc
Bổ sung `12-guided-visual-journey-audit.md`.

Bổ sung `12-direct-learning-usability-audit.csv`.

**Mới (canonical ONE_TOPIC):** `12-one-topic-learner-journey.md`, `12-transition-and-retention-audit.csv`, `12-branch-evidence.json`, `12-repair-routing.md`, `12-attention-and-model-observation.csv`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL12`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 12)
Tuyến chính và sai/reduced, test direct display/title/model/tooltip/viewport, không form hoặc khóa nav; issue blocker có owner.

**Gate v2.3:** Có repro/log; learner pilot không có ghi FIELD_NOT_VALIDATED.

## Bàn giao và xử lý sai lệch
Skill13 nhận issue register và evidence độc lập; lỗi focus/layout thuộc Skill10/11, nội dung Skill03, thiết kế hoạt động Skill04/09, asset Skill07.

> **Ngoại lệ Direct Display:** “ALL” chỉ là tất cả khối học sinh có quyền nhìn thấy **trước khi trả lời**; không tự lộ key, feedback, modal DIAGNOSE chưa kích hoạt, lời giải RECALL, trạng thái tương lai của mô hình.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Đo cụ thể từng scene, không kết luận học được từ click; báo lỗi/NOT_RUN.

---

# SKILL12 — Learner Perspective Simulation & Journey Audit: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill12/SKILL.md
**SHA-256 gốc:** `d7697e2f1533cb6f2c598d344b7285a638a579a4a3f8b2283602b4b42616d82b`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE03,VE07,VE08,VE09,VE10. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Diễn tập người mới qua các màn, đánh giá nhịp thị giác và tải, không bịa dữ liệu HS. Kiểm game/lab/Recall; Mindmap nối sai, đúng nhiều tầng, undo, đổi VI/EN, rời/revisit, xuất sơ đồ, zoom/mobile. Kiểm rằng màu giải thích cấp nhưng không lộ nhóm. Tách quan sát thẩm mỹ vs defect.

## Đầu ra bổ sung
`12-visual-journey-and-mindmap-audit.json` — trường tối thiểu: scene_id,path_id,action,state,evidence,visual_load,problem,owner_skill,severity,retest. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 12 v2.5
Không tự nhận field validation; lỗi điều hướng/clipping/motion phải sửa; kiểm states dài nhất và log.

## Bàn giao
Consumer bổ sung: SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `12-engine-regression.json` — REQUIRED: Test file/localhost/offline, VI/EN, keyboard, zoom, media, state, motion, game; ghi riêng BLOCKED/NOT_RUN, không dùng direct render làm bằng chứng file.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.

## v2.7 RC1 — pedagogical contract
Read `../../policy/EXECUTION_V2_7_RC1.md` before execution; its explicit version and scope overrides take precedence. Test exact target, gate, replay, cross-profile scope, duplicates, freshness, incomplete sessions, privacy, offline, locale and inherited gates; distinguish test types.
- Required `12-pedagogical-contract.json`: versioned skill/topic/KU, applicable evidence and source refs, decisions, limitations, status; no invented approval.
