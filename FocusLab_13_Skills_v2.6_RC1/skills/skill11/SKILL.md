---
name: html-lesson-developer
description: Hiện thực và kiểm thử website HTML/CSS/JS thuần; dùng khi chạy Skill11 từ hợp đồng và thiết kế đã duyệt.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 11 — HTML Lesson Developer (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Hiện thực HTML/CSS/JS thuần và kiểm thử giao diện/điều hướng, hoạt ảnh và mô hình tương tác theo hợp đồng đã được duyệt. Không tự thay mục tiêu/scene mà không có change request.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill11_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
09 Scene Contract, 10 HiFi layout, 07 model files, 03 nội dung, 06 script và QA constraints; approval các bước trước.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Hiện thực chuỗi bối cảnh → quan sát
- Renderer PROBLEM_CONTEXT hiện ngay nội dung hợp lệ, chỉ title highlight 3s, không in nhãn trường dữ liệu.
- Next chuyển A→B theo scene_id, hủy animation title A, giữ tiến độ; B là nhiệm vụ khác.
- Offline/VI/EN/alt; reduced motion giữ ngữ nghĩa; không nút hiện tất cả.
- E2E A t=0 đủ context, title bình thường sau 3s, Next B nhiệm vụ mới, Prev/VI/EN/rerender không reset hay che nav.
- Đầu ra bổ sung `11-context-navigation-e2e.json`; lỗi thiếu bối cảnh/hình hoặc lộ lời giải phải report về Skill03/05/09/10.

1. Tạo một website HTML/CSS/JS thuần (file offline hoặc bộ file), nạp mọi scene theo stable ID, hỗ trợ VI/EN khi dịch đầy đủ, không hardcode số màn Cookies.
2. Shell dùng `height:100dvh` + các vùng flex/grid minmax, đặt hai nút nổi độc lập fixed theo viewport **Previous bottom-left / Next bottom-right** và safe-area. Bỏ footer và hàng grid dành cho footer; gutter/padding cục bộ chống che nội dung, chỉ số lên header. Kiểm bằng DOM đo thực, không tự giả định CSS `overflow:hidden` là PASS.
3. Mount scene render ngay mọi khối hợp lệ; CSS title highlight 3000ms 1–2 chu kỳ, cleanup khi đổi scene, không restart khi đổi ngôn ngữ/rerender. Reduced motion và tắt motion giữ nguyên state.
4. Mô hình cơ chế phải có state machine và tương tác đầu vào→state/output quan sát được; play/pause/step/reset nếu phù hợp; không tự chạy mô hình khi vào màn. Khi global animation off, cập nhật state ngay, không hỏng controls.
5. DIAGNOSE đúng mở modal ôn kiến thức nền có minh họa mini-model; sai Recovery; modal có Esc, focus trap và restore. Tooltip hover leave tự ẩn, keyboard/touch xử lý được. Intro preview có tương tác khi là mô hình.
6. Một CTA mỗi hành động; Recall keyword→questions không form/answer, Review/Assess dạng đóng; Next không sinh mastery hoặc lộ key.
7. Next/Prev/TOC/keyboard/resume/deeplink dùng router tự do; localStorage denied, export/import JSON, reset máy chung, VI/EN/offline/keyboard/screen reader/zoom.
8. E2E direct t=0, highlight 3s/reduced/cancel, fixed-nav, tooltip, no form, quiz, recall, model view/state, nav tự do, offline và viewport; log NOT_RUN nếu chưa test.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Xóa timer reveal/Show all và panel glossary; inline bold keyword tooltip (focus/tap/Esc). Render CORE trực tiếp. Bỏ textarea/input phản tư, save reflection/oral checkbox/skip reason, guard nộp, tự đánh giá bắt buộc. Recall manual; quiz đóng feedback; mindmap thẻ; model view riêng. Migrate progress cũ: không tin mastery tự khai, giữ lựa chọn hợp lệ, không đòi nhập lý do.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Hiện thực scene lead-in, local SVG, cue từng keyword, queue câu tương đương, summary sau lượt; fixed button riêng không footer; giữ free nav và model.

### Thực thi và kiểm tra v2.4.1
1. Nạp canonical scene qua projection có map/hash; xuất mapping trong build manifest. Không sửa nội dung/ID ở runtime mà bỏ nguồn chuẩn/bản dịch.
2. Review state: ORIGINAL→CHECKED→RETRY_OPTIONAL nếu sai→SUMMARY_AVAILABLE sau lượt gốc. Lưu original_result/retry_result/skipped/unanswered riêng, không đổi điểm gốc nhờ retry hoặc sinh mastery.
3. Queue/current question/Recall index/model state lưu theo scene; đổi VI/EN/quay lại/resume không reset hoặc enqueue trùng. Test rapid check, storage denied và reset máy chung.
4. Router FREE cho Next/Prev/TOC/keyboard/resume/deeplink, không bắt trả lời/đủ keyword/lý do skip. Controls nội bộ không chiếm phím khi người học đang thao tác.
5. E2E mỗi scene/kind thực dùng; harness riêng kiểm 15 kinds nếu công bố hỗ trợ. Evidence ghi set_content/localhost/file, browser/version, locale, viewport, state, expected/actual; phần thiếu NOT_RUN.
6. Quét student bundle loại key độc lập/teacher approval. Key luyện tập sau check client-side được phép, không gọi là bảo mật. Browser pass không suy ra file/offline/iframe/field pass.

## Đầu ra bắt buộc
Bổ sung `11-guided-visual-floating-e2e.json`.

Bổ sung `11-direct-learning-e2e.json`.

`11-production-site/`, `11-state-and-migration-tests.json`, `11-browser-e2e-report.json`, `11-build-manifest.json`, **mới:** `11-display-and-viewport-e2e.json`, `11-model-runtime-tests.json`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL11`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 11)
JS/browser thật khi có thể; direct title highlight, fixed nav, model state, VI/EN, reduced, không khóa nav, không form, không nhãn dư; chưa test không PASS.

**Gate v2.3:** Test t=0/3s, no label/form, quiz types, recall, view, free nav, storage, accessibility.

## Bàn giao và xử lý sai lệch
Skill12 audit hành trình như học sinh; Skill13 QA độc lập. Nếu lỗi kiến thức/quy trình do upstream thì lập issue và route lại đúng Skill thay vì sửa lén trong code.

> **Ngoại lệ Direct Display:** “ALL” chỉ là tất cả khối học sinh có quyền nhìn thấy **trước khi trả lời**; không tự lộ key, feedback, modal DIAGNOSE chưa kích hoạt, lời giải RECALL, trạng thái tương lai của mô hình.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Runtime test kind thực dùng và harness 15 kinds nếu công bố hỗ trợ, mỗi cue, nhánh đúng/sai, summary, keyboard/touch, không footer/overlap.

---

# SKILL11 — HTML Lesson Developer: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill11/SKILL.md
**SHA-256 gốc:** `e5646404ed89ebcfea27df44847898adf4d7466e71c280e6a4060cdf1b13bba9`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE02,VE06,VE08,VE09,VE10. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Hiện thực HTML/CSS/JS thuần, production projection hash đúng, local assets/fonts hoặc fallback, không CDN bắt buộc. Mindmap static engine/config, pointer & keyboard, exact edges, export/import, preserve scene/locale, root anchors, collision/safe area, no idle motion. Kiểm production so với preview đúng state/viewport; sửa khác biệt qua canonical/Skill10, không tự simplify.

## Đầu ra bổ sung
`11-visual-fidelity-and-mindmap-e2e.json` — trường tối thiểu: canonical_sha256,scene_id,locale,viewport,state,preview_ref,production_ref,visual_diff,case_id,result,expected,actual,evidence,issues. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 11 v2.5
Kiểm tra chức năng thực, teacher key absent, free nav; báo file/localhost/offline scope riêng; visual deviations có issue và retest.

## Bàn giao
Consumer bổ sung: SKILL12, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `11-engine-integration-manifest.json` — REQUIRED: Liệt kê version/hash, local assets, runtime và lifecycle, không CDN/build bắt buộc; giữ teacher key tách biệt.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.
