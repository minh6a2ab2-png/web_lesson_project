---
name: teaching-scenario-writer
description: Viết kịch bản dạy học 1–1 theo bốn bước 5512; dùng khi chạy Skill06 từ nội dung và học liệu đã chọn.
---

# SKILL 06 — Teaching Scenario Writer (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Chuyển nội dung và hoạt động thành kịch bản dạy 1:1/tự học trực tiếp, không bắt nhập suy nghĩ, không để GV nói hết.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill06_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Objective/sections Skill02, nội dung Skill03, hoạt động Skill04, resources Skill05, hồ sơ người học và time ledger.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Kịch bản lời dẫn hai màn đặt vấn đề
- TWO_SCENES: A `PROBLEM_CONTEXT` có bối cảnh và câu hỏi hiện ngay; B có nhiệm vụ quan sát mới. Không nhãn sư phạm hoặc form phản tư.
- Đối với ACT mở đầu: bốn bước 5512 vẫn nằm trong **một `activity_id`**; nêu rõ chỗ HS phát hiện vấn đề trước khi Next và chỗ HS quan sát/xác lập giả thuyết sau Next; GV **không cung cấp đáp án trước** khi quan sát.
- Next chuyển scene độc lập do HS/GV chủ động; không yêu cầu nộp, không tự chuyển.
- Đầu ra bổ sung `06-context-to-observation-script.md`: kịch bản VI/EN, câu dẫn, đáp án dự kiến được giữ phía giáo viên, evidence riêng và tín hiệu chuyển tiếp.

1. Mỗi hoạt động viết đủ 4 bước 5512: chuyển giao → HS tự làm → báo cáo/thảo luận → GV chuẩn hóa ngắn; kịch bản GV/HS tách rõ và có đáp án mong đợi riêng.
2. Mỗi scene có tiêu đề/lời dẫn rõ, toàn bộ nội dung hợp lệ hiện ngay; highlight title 3s.
3. OBSERVE: câu hỏi tình huống ở trọng tâm; mô tả hiện tượng và thao tác quan sát. DIAGNOSE đúng: mở recap modal + minh họa, sai: chuyển Recovery và thử lại. INTRODUCTION: giới thiệu ngắn tên giải pháp/công cụ trước khi TEACH.
4. Với nội dung cơ chế, ghi **lời dự đoán, thao tác mô hình, câu hỏi nhìn vào state, ví dụ ngoại lệ, sản phẩm giải thích**; tránh mô hình chỉ làm nền chuyển động.
5. Kịch bản dừng theo nhu cầu học sinh, không timer đọc; highlight 3s không khóa thao tác.
6. Phân luồng Recall → Review cuối mỗi section CORE, phản hồi khi sai, teach-back/mindmap/flashcards/game hợp lý; EXIT độc lập và không đưa đáp án lên website học sinh.
7. Khi giảm/tắt chuyển động, nội dung vẫn hiển thị đầy đủ và model vẫn hoạt động; teacher cues không phụ thuộc animation.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Viết lời dẫn thành câu văn tự nhiên, bỏ nhãn sư phạm trên UI. Soạn từng keyword Recall rồi tập câu hỏi không đáp án; gợi mở miệng tùy chọn, không ô ghi nhận. Viết phản hồi quiz theo đáp án và misconception.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Viết lời dẫn vào từng cụm trong 4 bước 5512; kịch bản Recall keyword+ảnh rồi câu hỏi, Review feedback, câu tương đương và tổng hợp.

### Thực thi và kiểm tra v2.4.1
1. Viết chuỗi lời dẫn → HS làm/quan sát → giải thích evidence → GV chuẩn hóa ngắn; câu hỗ trợ có thời điểm, không nói trước điều HS cần khám phá.
2. `06-guided-visual-facilitation.md` nối cluster/entry key, copy VI/EN, thao tác, evidence miệng và feedback. Entry là chuyển giao cùng activity, không nhân bốn bước 5512 cho từng màn.
3. Recall: keyword+cue cùng lúc, bấm trước/sau rồi câu hỏi, không nộp/chấm. Review: chọn→check→feedback→câu tương đương khi sai→summary sau lượt; Next toàn bài tự do.
4. Viết đường bỏ qua, sai nhiều lần, mất chú ý: gợi ý ngắn/recovery tự nguyện/quay lại. Không ghi HS thật đã hiểu khi chỉ là kịch bản dự kiến.
5. Dùng planned_scene_key trước Skill09; tách teacher_only và key độc lập khỏi nội dung student UI.

## Đầu ra bắt buộc
Bổ sung `06-guided-visual-facilitation.md`.

Bổ sung `06-keyword-recall-and-question-script.json`.

`06-session-teaching-script.md`, `06-bridge-prompts-and-questions.md`, `06-activity-5512-implementation.md`, `06-recall-quiz-feedback-script.json`, **mới:** `06-scene-opening-cues.json`, `06-model-facilitation-script.md`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL06`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 06)
Mỗi scene có title/direct display, nhiệm vụ model rõ; Recall keyword→question, không form bắt buộc.

**Gate v2.3:** Không nhập suy nghĩ; câu hỏi rõ, Recall đúng thứ tự, direct display.

## Bàn giao và xử lý sai lệch
Skill07 sản xuất học liệu theo script; Skill08 chuyển hóa giáo án; Skill09 dùng `opening_cues` chuẩn để tạo `scene_contract`.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Lời dẫn tự nhiên, không lặp phần học, không biểu mẫu.
