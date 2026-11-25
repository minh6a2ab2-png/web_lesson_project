---
name: independent-lesson-quality-reviewer
description: Kiểm định độc lập kiến thức, tương tác và cổng phát hành; dùng khi chạy Skill13 từ toàn bộ đầu ra và evidence.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 13 — Independent Lesson Quality Reviewer (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Kiểm định độc lập bộ bài **một nội dung** với bằng chứng nguồn, trình duyệt, learner journey và rubric thị giác; không tự gán RELEASE_PASS cho một bộ định nghĩa Skills.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill13_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Tất cả outputs Skills01–12, mã website, assets, run logs, nguồn tài liệu, rubric, approval records; bộ lỗi Cookies v1.2.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Nghiệm thu riêng phần đặt vấn đề
- Kiểm `PROBLEM_CONTEXT` có đủ **tiêu đề, bối cảnh, thực trạng/nhu cầu, vấn đề/câu hỏi và minh họa** thật có nguồn + bản VI/EN; không khởi đầu bằng một câu hỏi trơ trọi khi đã quyết định dùng PROBLEM_CONTEXT.
- Đối chiếu `TWO_SCENES`: mục đích, `evidence`, learner action của A/B khác nhau; Next/Previous qua `scene_id`, không phải subslide chia chữ; không lộ tên giải pháp khi mục tiêu OBSERVE/DIAGNOSE còn cần khám phá.
- Khi nguồn bối cảnh không rõ/giả số liệu, hình minh họa chỉ mới SPEC_ONLY, ảnh bị cắt, hoặc B lặp lại y nguyên A, đánh `NEEDS_REVIEW/BLOCKED` theo mức độ, không tự RELEASE_PASS.
- Checklist direct display/title 3s, no pedagogical labels, inline tooltip, fixed nav, viewport, VI/EN, offline và problem→inquiry.
- Đầu ra bổ sung `13-problem-context-compliance.csv`; rà mọi màn đặt vấn đề đã quyết định `TWO_SCENES` trước khi nghiệm thu.

1. Kiểm nguồn và ma trận mục tiêu→nội dung→hoạt động→scene→Recall/Review→EXIT. Không để CORE bị bỏ qua vì scene layout không chứa nổi; teacher key phải ở ngoài website học sinh.
2. Kiểm 15 kind enum cùng việc **chọn kind đúng bản chất**; INTRODUCTION không trùng TEACH; OBSERVE câu hỏi trung tâm; DIAGNOSE đúng có modal kiến thức nền + minh họa, sai Recovery; modal/tooltip accessibility.
3. Kiểm direct t=0, title highlight 3s chậm, reduced motion, không layout shift/auto advance; không nhãn dư.
4. Kiểm viewport/fixed nav thực tế trên matrix, no-scroll/no-clipping/readability, modal, labels, CTA. Cấm `scene_id:part_id`, `Phần 1/2` chỉ vì nội dung tràn, cấm duplicate model CTA, tiny font, bắt buộc nút Next/Previous fixed.
5. Kiểm mọi `MODEL_REQUIRED`: `model_id`, input, output, before/after, replay/reset, case thường/ngoại lệ, evidence, reduced motion behavior. Học liệu tĩnh không được mạo nhận simulation.
6. Kiểm router tự do Next/Prev/TOC/keyboard/resume/deeplink, lưu lựa chọn, VI/EN, offline, zoom/storage denied, keyboard/Esc, không tự mastery.
7. Review độc lập các lỗi lịch sử Cookies Skill13: khóa/bỏ qua Recall sai hợp đồng (Next tự do là hợp lệ), missing tracking mechanism content, tooltip focus, reset shared device, dịch thiếu. Không khẳng định lỗi cũ đã sửa nếu chỉ tham chiếu thiết kế.
8. Chấm rubric 100 điểm như tài liệu đề xuất (25 mục tiêu/kiến thức, 20 attention/layout, 15 motion, 25 interaction, 15 usability/a11y) và **blockers thắng mọi điểm**. Phân biệt `STATIC_DEFINITION_PASS`, `RUNTIME_BROWSER_PASS`, `FIELD_VALIDATED`, `RELEASE_PASS`.
9. Báo `issues` severity/repro/owner/evidence/retest và quyết định `RELEASE_PASS` chỉ khi tất cả gate yêu cầu có chứng cứ; nếu chưa test trực tiếp `NOT_RUN`, chưa có HS thật `FIELD_NOT_VALIDATED`.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Độc lập đối chiếu DL01–DL07 theo từng scene và cả 13 Skills. Kiểm không nhãn sư phạm, kiến thức hiển thị, tooltip, highlight, không form, câu hỏi đóng, Recall, model view, nav tự do. Kiểm offline và thực địa riêng; không áp blocker cũ do không nộp câu hỏi mở.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Kiểm định độc lập GV01–GV06, đối chiếu Skills, kiểm entry/identity/cue/feedback/summary/floating no-footer, quyết định phát hành.

### Thực thi và kiểm tra v2.4.1
1. Đối chiếu lineage, output registry và manifest thật 01–12; phân đầu ra lịch sử/chuyển đổi với run mới. Thiếu output/gate phải ghi issue, không nhận hoàn tất.
2. Kiểm GV01–GV06 bằng case ID, canonical scene, input/action, expected/actual, evidence hash, locale/viewport/mode. Báo cáo cũ không phải retest mới.
3. Kiểm Recall–Review–Exit, retry hữu hạn, summary timing, free nav, model view, no-footer, VI/EN và student/teacher boundary; tách schema/browser/file-offline/field.
4. Ghi technical_status, approval_status, field_status và release_decision riêng. Chỉ RELEASE_PASS khi đủ gate bắt buộc và approval; NOT_RUN/BLOCKED không thể thành PASS bằng điểm rubric.
5. Route issue đúng owner và downstream invalidation; sửa có before/after hash, retest ca liên quan và regression. Cùng tác giả tự kiểm phải ghi SELF_REVIEW, giữ NEEDS_REVIEW nếu yêu cầu reviewer độc lập chưa đáp ứng.
6. Không tự sửa website hoặc chạy lại bài giảng trong một yêu cầu chỉ chỉnh bộ định nghĩa.

## Đầu ra bắt buộc
Bổ sung `13-guided-visual-compliance.csv`.

Bổ sung `13-direct-learning-release-checklist.csv`.

**Mới (canonical ONE_TOPIC):** `13-one-topic-objective-coverage.csv`, `13-independent-browser-results.json`, `13-release-gates.json`, `13-final-release-decision.md`, `13-visual-interaction-audit.csv`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL13`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 13)
Block P0/P1, thiếu CORE, model sai/không tương tác, clip, fixed nav sai, key rò, khóa nav trái DL04, VI/EN thiếu, delay ẩn nội dung; điểm không che blocker.

**Gate v2.3:** Mọi tiêu chí bắt buộc có bằng chứng, chưa thử không PASS.

## Bàn giao và xử lý sai lệch
Bàn giao kết quả và chủ lỗi, giữ từng mốc review; không sửa source trong lúc đóng vai auditor mà không tạo change request và kiểm thử lại. Bản Cookies cũ vẫn `RELEASE_BLOCKED`.

> **Ngoại lệ Direct Display:** “ALL” chỉ là tất cả khối học sinh có quyền nhìn thấy **trước khi trả lời**; không tự lộ key, feedback, modal DIAGNOSE chưa kích hoạt, lời giải RECALL, trạng thái tương lai của mô hình.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Không PASS release khi thiếu bằng chứng hoặc lỗi chặn; có issue routing và field UAT.

---

# SKILL13 — Independent Lesson Quality Reviewer: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill13/SKILL.md
**SHA-256 gốc:** `54238d75ce9d399ae61299a509f1fd88d42c7f8666d2893dd0612f346c7866d4`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE01–VE10. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Kiểm toàn bộ lineage/outputs cũ và mới, screenshot production, source diversity thật, rubric độc lập 9 tiêu chí từng màn/adjacent/toàn bài. Review R5 toàn bộ checklist và actual production, không dùng log prototype làm retest. Tách independent/self review, approval/field/technical. Route issue và invalidation, before/after hash.

## Đầu ra bổ sung
`13-independent-aesthetic-and-workspace-review.json` — trường tối thiểu: reviewer_scope,artifact_hash,criterion_scores,weighted_score,per_scene_issues,adjacent_audit,source_audit,mindmap_test_refs,release_decision. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 13 v2.5
≥85/100, mỗi tiêu chí ≥7, tất cả mandatory gates; nếu SELF_REVIEW hoặc NOT_RUN/BLOCKED bắt buộc không RELEASE_PASS.

## Bàn giao
Consumer bổ sung: Kết thúc quy trình. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `13-benchmark-and-human-effort.json` — REQUIRED: Đối chiếu bằng chứng cùng scope, chi phí, wall-clock, manual effort, reviewer độc lập và release blockers; không bù lỗi P0/P1 bằng điểm.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.
