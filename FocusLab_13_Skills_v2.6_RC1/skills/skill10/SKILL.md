---
name: learning-experience-visual-designer
description: Thiết kế bố cục, trạng thái, nhận diện và nút nổi; dùng khi chạy Skill10 trước phát triển website.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 10 — Learning Experience Visual Designer (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Thiết kế màn học như **slide thuyết trình chuyên nghiệp một viewport**: nhìn được ngay mục tiêu, văn bản đủ lớn, chú ý thị giác có chủ đích, model đủ diện tích, fixed navigation.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill10_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Scene contract Skill09, thiết kế hoạt động Skill04/06, assets Skill07; thiết bị và thiết kế thực tế.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Bố cục PROBLEM_CONTEXT như slide kể chuyện có vấn đề
- **Một viewport, không cuộn desktop**: vùng đầu = tiêu đề + câu dẫn; vùng chính = bối cảnh/thực trạng đặt cạnh **hình minh họa đủ lớn**; vùng câu hỏi đặt vấn đề là điểm chú ý rõ. Không để câu hỏi chìm dưới đoạn chữ.
- Hiện ngay bối cảnh, minh họa, câu hỏi; title highlight 3s, không nhãn phân loại hay nút hiện tất cả.
- Khoảng trắng và hệ thống chữ cho phép đọc nhanh: bối cảnh ngắn, từ ngữ cụ thể, nổi bật một câu hỏi, ít chrome. Ưu tiên crop/cô đọng hợp lý; không nhỏ font, không giấu thông tin cốt lõi trong popup hoặc cắt bằng `overflow:hidden`.
- Dựng preview cả hai scene A/B ở 1280×720 và 1366×768 (cộng các viewport chuẩn); `Previous` fixed trái dưới, `Next` fixed phải dưới, không đổi vị trí giữa các scene và không che minh họa.
- `10-problem-context-layout-review.md`: ngân sách chiều cao, VI/EN, ảnh t=0 và ≥3s, nội dung đọc rõ.

1. Chọn đúng layout theo `scene.kind` và nội dung (OBSERVE spotlight hỏi, DIAGNOSE chọn đáp án, TEACH content+model, COMPARE đồng thời...). Chỉ **một focal point chính** và tín hiệu thị giác có ý nghĩa; tránh màu mè, nhấp nháy, animation lặp.
2. Vẽ trạng thái t=0 và ≥3s với cùng nội dung đầy đủ, chỉ màu title thay đổi; reduced motion và không layout shift.
3. Tính ngân sách chiều cao theo visual viewport: header + opening cue + main + **hai nút nổi fixed không footer** + safe areas. Bảo đảm `NO_SCROLL ∧ NO_CLIP ∧ READABLE_TEXT ∧ FIXED_NAV` ở 1280×720, 1366×768, 1600×900, 1920×1080; thử thêm 900×600, 390×844, 360×640, 640×360.
4. **Previous fixed phía dưới trái, Next fixed dưới phải**, chỉ số ở header; không để nút nổi che nút mô hình, bàn phím, feedback, quiz, modal. Nút tiếp không thay đổi tọa độ khi tải nội dung/đổi scene.
5. Sắp xếp theo quy trình: loại bỏ chrome thừa → bố cục 1/2 cột → cô đọng thông tin phụ → popup/tooltip **tùy chọn** → scene mới khi có nhiệm vụ học khác; **không** giấu nội dung chính, dùng `overflow:hidden` để cắt chữ, thu nhỏ font hàng loạt hay tách “Part 1/2”.
6. Mô hình cơ chế: chiếm đủ vùng để quan sát nhãn/state và chạm điều khiển, có điều khiển tương tác rõ; một nút một hành động. Tooltip tự ẩn sau hover, modal kiến thức nền gọn, có focus rõ, không che nội dung bắt buộc.
7. Chuẩn typography và khoảng cách: tiêu đề/câu hỏi nổi bật, phần thân dễ đọc trên máy chiếu, tương phản rõ; không dùng cỡ chữ tối thiểu cố định vô lý, kiểm trên máy đích. Kiểm tra bản dài hơn giữa VI/EN, zoom 200% và `prefers-reduced-motion`. Nếu zoom/text lớn không thể một viewport, cho phép fallback cuộn **không mất thông tin** và ghi ngoại lệ.
8. Preview t=0, title highlight kết thúc, đúng/sai, modal, model, reduced; ảnh/geometry từng scene desktop/mobile.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Thiết kế Knowledge Block không nhãn, bold keyword bubble phía trên, title highlight 3s. Bối cảnh là đoạn văn/hình/câu hỏi tự nhiên không tag. Thiết kế quiz đa dạng, keyword recall và câu hỏi, hai layout riêng model MISS/COMPARE.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Tạo design token 2 tầng và 15 mẫu kind; icon + màu + bố cục; thiết kế Recall có ảnh và Review nhiều trạng thái. Bỏ footer, nút nổi độc lập, chỉ số header, ngân sách safe area.

### Thực thi và kiểm tra v2.4.1
1. Guided design contract có lesson theme và token registry 15 kinds; preview mọi kind thực dùng. Kind khác kiểm bằng harness riêng, không thêm vào bài thật.
2. Tạo preview có nội dung thật cho entry, cue Recall, trước check, đúng/sai/retry/summary, modal/tooltip, model trước/sau; ghi scene_id/locale/viewport/state/path. Đặc tả không phải ảnh đã có.
3. Đo gutter/safe area của hai nút nổi và giao nhau với chữ/quiz/model/feedback/overlay; không footer/hàng nav. Tọa độ ổn định qua scene/VI-EN/scroll fallback.
4. Kiểm màu/icon/composition/focus/contrast; không chỉ đổi màu hoặc dùng icon thay accessible name chức năng. Kind icon trang trí aria-hidden.
5. Kiểm 4 desktop, compact, hai mobile dọc, landscape, zoom và reduced motion theo policy; chưa thử ghi NOT_RUN. Lỗi cấu trúc gửi Skill09, không thu nhỏ CORE để chữa.

## Đầu ra bắt buộc
Bổ sung `10-scene-visual-identity-and-floating-nav.json`.

Bổ sung `10-direct-learning-ui-states.json`.

**Mới (canonical ONE_TOPIC):** `10-design-system-one-topic.md`, `10-scene-layout-and-states.json`, `10-hifi-previews/`, `10-visual-a11y-qa.md`, `10-viewport-budget.csv`, `10-attention-and-motion-plan.csv`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL10`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 10)
Mọi scene đủ trạng thái, NO_SCROLL/NO_CLIP/READABLE_TEXT/FIXED_NAV desktop, direct display, title highlight, inline tooltip, không nhãn dư/duplicate CTA.

**Gate v2.3:** Ảnh t=0/≥3s, tooltip không tràn, no labels, layout khác nhau.

## Bàn giao và xử lý sai lệch
Chuyển token, layout contract, fixed nav, focus/a11y, preview states cho Skill11. Lỗi cơ cấu scene gửi lại Skill09, lỗi học liệu gửi Skill07; không giải quyết bằng `overflow:hidden`.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Ảnh t=0, ≥3s, đúng/sai/summary cho kind thực dùng; registry 15 kind, đối chiếu contrast và nút không che nội dung.

---

# SKILL10 — Learning Experience Visual Designer: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill10/SKILL.md
**SHA-256 gốc:** `d691aed30ad09995cf9616787e67425ae25b8b931abff6f5f64a20028a030434`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE01–VE10. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Thiết kế từng scene high fidelity từ canonical: font hỗ trợ VI, màu/nền có nhịp, ảnh lớn vừa vai trò, hierarchy, ít chrome/card, lab/Recall/Review khác rõ. Workspace phủ viewport, toolbar nhỏ, không header lặp; kiểm cue/feedback. Tạo preview thực mọi màn và states, contact sheets VI/EN, 8 viewport, t=0/≥3s, motion, zoom, keyboard; chấm rubric 9 tiêu chí theo screenshot.

## Đầu ra bổ sung
`10-aesthetic-review.json` — trường tối thiểu: canonical_ref,preview_paths,scene_scores,adjacent_review,contact_sheet_refs,criterion_scores,total,reviewer_scope,issues,viewport_evidence. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 10 v2.5
≥85/100 và từng tiêu chí ≥7/10; không P0/P1; mandatory tests còn thiếu NEEDS_REVIEW. Không score giả nếu chưa có evidence.

## Bàn giao
Consumer bổ sung: SKILL11, SKILL12, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `10-comparison-evidence.json` — REQUIRED: Đối chứng giữ nội dung, ảnh chụp thật, kiểm định viewport và rubric; tự đánh giá ghi SELF_REVIEW, không thay ngưỡng 85/100 và từng tiêu chí 7/10.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.
