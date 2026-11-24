---
name: learner-profile-fit-activity-design
description: Chọn phương pháp theo người học và bản chất kiến thức; dùng khi chạy Skill04 trước tuyển học liệu.
---


> **Active version: FocusLab v2.5.** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 04 — Learner Profile Fit & Activity Design (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Chọn phương pháp theo learner profile và bản chất kiến thức, thiết kế hành vi học sinh với các mô hình tương tác có ý nghĩa; không chỉ chọn animation trang trí.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill04_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Hồ sơ người học có nguồn/mức tin cậy, nội dung và objective Skills01–03, giới hạn thời gian, công cụ sẵn.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Thiết kế hoạt động đặt vấn đề theo nhận thức học sinh
- Cân nhắc ít nhất **hai cách khởi động**: OBSERVE có bối cảnh tích hợp và `PROBLEM_CONTEXT → OBSERVE` (hoặc một nhiệm vụ khám phá/diagnose khác); chấm theo độ quen thuộc, nhận thức nền, tải thông tin, thời gian và giá trị nhiệm vụ độc lập.
- Màn bối cảnh yêu cầu HS **đọc/nhận diện tình huống, chỉ ra nhu cầu hoặc điều chưa thể giải thích**. Màn tiếp yêu cầu HS **quan sát, thao tác, dự đoán, thu bằng chứng**: hai sản phẩm không được giống nhau chỉ đổi câu chữ.
- Không để giáo viên giải cơ chế ngay tại bối cảnh; không ép học sinh giả vờ thiếu hiểu biết. Trường hợp tình huống hiển nhiên thì gộp vào OBSERVE.
- Đầu ra bổ sung `04-context-learning-task-rubric.md`: phương án chọn/loại, sản phẩm từng scene, câu hỏi nối và hỗ trợ cho học sinh chưa nhận ra vấn đề.

1. Đánh giá người học về kiến thức nền, tốc độ xử lý thông tin, duy trì chú ý, thói quen học; không dùng nhãn “chậm” như phẩm chất cố định.
2. Với mỗi section, so sánh ít nhất hai phương án phương pháp theo rubric gốc (nhịp, mức nhận thức, độ khó, phong cách, khả năng có học liệu). Định nghĩa đơn giản: TEACH ngắn; cơ chế: dự đoán→mô hình tương tác→quan sát→giải thích.
3. Thiết kế **OBSERVE** nơi cần đặt câu hỏi trung tâm, **DIAGNOSE** với hai nhánh đúng→modal ôn kiến thức + minh họa / sai→RECOVERY, và **INTRODUCTION** nơi có công cụ giải quyết mới.
4. Với mỗi `MODEL_REQUIRED`, mô tả student action (thay input, gửi request, reset, thử ngoại lệ), learning evidence và câu hỏi dự đoán; interaction phải thay đổi trạng thái, không chỉ phát video.
5. Chọn attention_target; toàn nội dung hiện ngay, tiêu đề highlight 3s, không delay hoặc nhiều vùng nhấp nháy.
6. Thiết kế đủ 5 yếu tố Active Recall, game, mindmap, flashcard, teach-back **khi phục vụ mục tiêu**; gộp hoạt động gần giống để tránh lặp/tràn thời lượng.
7. Lập phân nhánh sai/đúng, cue hỗ trợ, điều kiện kết thúc, không dùng modal để giấu bài học chính; xem xét khi quá tải viewport cần một scene khác có nhiệm vụ riêng.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Phân loại PROBLEM/GUIDING/CONFIRMATION. Hai loại đầu chỉ câu hỏi, không nộp; loại xác nhận chọn single/multi/true-false/matching/order/hotspot/classification/fill-from-options. Recall từ khóa từng lượt rồi câu hỏi; game, mindmap thẻ, flashcard, teach-back miệng.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Phân loại nhiệm vụ/kind và format review, chọn cue hình theo KU, xây nhánh sai→câu tương đương; giữ game phù hợp.

### Thực thi và kiểm tra v2.4.1
1. Ghi dữ kiện/mức chắc chắn về nền tảng, tốc độ xử lý, chú ý, thói quen và cản trở. Không gán kiểu học cố định hay nhãn năng lực vĩnh viễn.
2. Chấm ít nhất hai phương án theo rubric có trọng số công khai: mục tiêu/bản chất KU, nhận thức, nền tảng, tải/chú ý, thao tác, học liệu/thiết bị. Không để tổng điểm che rủi ro CORE.
3. `04-guided-review-method-map.json` nối section/KU → format → câu gốc/equivalence group → misconception → hỗ trợ → summary. Chọn ít nhất hai dạng có ích mỗi CORE; ngoại lệ phải nêu để duyệt.
4. Thiết kế lượt thử hữu hạn: sai mới đề nghị câu tương đương, HS được thử/bỏ qua; mặc định một câu tương đương mỗi câu sai trong một lượt. Đúng lại không xóa kết quả sai gốc hoặc tự thành MASTERED.
5. Gộp hoạt động trùng hành vi/evidence. Controls của model/Recall/Review khác điều hướng toàn bài; không đòi làm đủ để Next.

## Đầu ra bắt buộc
Bổ sung `04-guided-review-method-map.json`.

Bổ sung `04-question-intent-and-interaction-map.csv`.

`04-method-rubric-by-section.csv`, `04-activity-and-assistance-plan.md`, `04-learner-load-map.md`, `04-recall-review-method-design.json`, **mới:** `04-model-interaction-activity-map.csv`, `04-attention-strategy.md`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL04`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 04)
Có lý do chọn phương pháp, mỗi mô hình cơ chế có hành động nhận thức; OBSERVE/DIAGNOSE/INTRODUCTION khác mục đích; không lạm dụng IBL; không phân rã thành màn chỉ vì layout.

**Gate v2.3:** Đa dạng quiz; không reflection form, không ép hoàn thành mới Next.

## Bàn giao và xử lý sai lệch
Chuyển hoạt động, tương tác và evidence cho Skill05–06, asset prototype Skill07; người dùng duyệt hoạt động trước khi xây dựng website.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Có lý do chọn dạng, từng lỗi có hướng củng cố, Next không khóa.

---

# SKILL04 — Learner Profile Fit & Activity Design: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill04/SKILL.md
**SHA-256 gốc:** `5a92c18e28ceb17102554621e28f176e4702d05814fdb830427196c7911d2245`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE04,VE08,VE09. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Chấm rubric v2.4.1; thêm visual load, density, pointer/keyboard/device fit. Chọn guided static connections hoặc free drawing theo evidence, số node theo nội dung/khả năng đọc. Game phải có rule-action-goal-feedback, không chỉ quiz trang trí. Hỗ trợ khi sai, không gợi đích chính xác; không lock Next.

## Đầu ra bổ sung
`04-game-and-mindmap-method.json` — trường tối thiểu: activity_id,mode,method_candidates,rubric,game_rule,action,feedback,accessibility,assistance,completion_evidence. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 04 v2.5
Có lý do chọn mode, đúng task; game được chọn có cơ chế học tập khác quiz.

## Bàn giao
Consumer bổ sung: SKILL05, SKILL06, SKILL07, SKILL08, SKILL09, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.
