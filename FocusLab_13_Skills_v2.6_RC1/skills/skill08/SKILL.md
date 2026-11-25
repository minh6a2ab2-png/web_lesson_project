---
name: cv5512-lesson-plan-writer
description: Lập kế hoạch bài dạy một nội dung theo 5512; dùng khi chạy Skill08 từ kịch bản và assets.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 08 — CV5512 Lesson Plan Writer (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Chuẩn hóa kế hoạch dạy học **một nội dung** theo Công văn 5512, nêu cụ thể phương tiện tương tác và bằng chứng đạt chứ không chỉ đặt tên mô hình.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill08_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Kịch bản Skill06, assets/test evidence Skill07, mục tiêu/hoạt động/đánh giá, learner profile.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Chuyển bối cảnh vào kế hoạch bài dạy và handoff
- Hoạt động đặt vấn đề của giáo án ghi rõ **tiêu đề, bối cảnh thực tế, thực trạng/nhu cầu, câu hỏi vấn đề, minh họa, sản phẩm của HS và nhiệm vụ quan sát tiếp theo**; không chỉ ghi một câu hỏi mở đầu.
- Hai scene `PROBLEM_CONTEXT → OBSERVE` vẫn một hoạt động 5512; hai nhiệm vụ và bằng chứng quan sát riêng, Next không bị khóa.
- Handoff tới Skill09 phải có `context_scene_option`, `split_reason`, `context_asset_id`, `context_evidence`, `followup_evidence`, `spoiler_boundary`, `linked_activity_id`; chưa quyết định số scene nếu chưa được duyệt.
- Đầu ra bổ sung `08-problem-context-handoff.json` với quyết định ưu tiên, tình trạng tài nguyên minh họa và yêu cầu thiết kế hai scene nếu có giá trị sư phạm.

1. Viết mục tiêu kiến thức/năng lực/phẩm chất và phương tiện học liệu cho ONE_TOPIC; không bịa số phút cố định cho nội dung mới.
2. Tiến trình mở đầu→hình thành kiến thức→luyện tập→vận dụng, có Recall/Review của section CORE và EXIT; từng hoạt động có 4 bước giao nhiệm vụ–thực hiện–báo cáo–kết luận.
3. Mô tả điểm đặt mô hình: tên `model_id`, thao tác HS, câu dự đoán, dấu hiệu hiểu, thời điểm GV chuẩn hóa, fallback nếu mất mạng hoặc disable motion.
4. OBSERVE, DIAGNOSE/RECOVERY, INTRODUCTION nếu cần được nối ý nghĩa, không phát sinh hoạt động trùng lặp để chỉ tăng màn.
5. Web hiển thị trực tiếp, title highlight 3s; HS đọc/thao tác tự do. Nội dung dài phân cảnh theo mục tiêu riêng.
6. Kiểm ledger thời gian và trạng thái `PROPOSED/USER_APPROVED`, kế hoạch dạy trực tiếp 1:1 và tự học, mô hình thay thế, phần teacher-only tách biệt.
7. Ghi các lựa chọn đánh giá: trò chơi, mindmap, flashcard, learning by teaching và cách đo hiệu quả mà không lạm dụng số lượng hoạt động.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Giữ 5512 trong giáo án giáo viên, không render tiêu đề bốn bước hay nhãn bối cảnh/kiến thức cần nhớ. Sản phẩm có thể là quan sát/giải thích miệng hoặc quiz đóng, không yêu cầu nộp trên website.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Đưa lead-in vào tiến trình 5512 như chuyển giao, không tính thành hoạt động học mới nếu cùng nhiệm vụ; ghi nhận quan sát ngoài web.

### Thực thi và kiểm tra v2.4.1
1. Bảng activity bốn bước 5512 có cluster→entry_key→task_key→objective/KU→asset/model→evidence; dùng planned_scene_key ở bước này.
2. `08-guided-activity-placement.csv` ghi entry NEW/REUSE, lý do, không cộng thời gian hai lần; kiểm Recall–Review mỗi CORE và tích hợp game/mindmap/flashcard/teach-back.
3. Handoff có input version/hash, CORE phải hiện, spoiler boundary, asset readiness, model view/controls, teacher_only và issue chưa đóng. Không mặc định prototype đã qua QA.
4. Trạng thái đề xuất/duyệt nằm trong approval record, không dùng PROPOSED làm test status. Giáo án thiết kế không phải bản ghi dạy thật.
5. Khi Skill09 thêm scene, đối chiếu sản phẩm học và time ledger; không sửa giáo án chỉ để đủ enum.

## Đầu ra bắt buộc
Bổ sung `08-guided-activity-placement.csv`.

Bổ sung `08-direct-learning-handoff.json`.

`08-one-session-cv5512-lesson-plan.md`, `08-session-time-and-activity-table.csv`, `08-skill09-handoff.json`, `08-preflight-checklist.md`, **mới:** `08-model-and-scene-placement.csv`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL08`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 08)
Có đủ 4 bước cho mọi hoạt động, mục tiêu/sản phẩm/kiểm tra, ưu tiên người học, mô hình gắn hoạt động chứ không trang trí; không bỏ Recall/Review; không có thời gian chờ giao diện.

**Gate v2.3:** Giáo án đủ 4 bước, learner UI không có form và không khóa Next.

## Bàn giao và xử lý sai lệch
Skill09 dùng handoff mapping activities/objectives/models/intro/diagnose; thiết kế màn không được làm mất các nhiệm vụ GV/HS đã được duyệt.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Mỗi cụm có dẫn nhập và link hoạt động, không yêu cầu nộp.

---

# SKILL08 — CV5512 Lesson Plan Writer: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill08/SKILL.md
**SHA-256 gốc:** `887f3d41f200b3f22ac43c0fcd889c039bf2f0cb062ad5f8d3a01823fa95f102`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE07,VE08,VE09. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Giữ 4 bước 5512 và time ledger; chỉ ra khi nào sử dụng visual, model, game, Mindmap; sản phẩm học là sơ đồ/giải thích/quan sát, xuất tùy chọn. Mô tả fallback khi không mở được file, motion off, keyboard. Handoff có readiness/issue, không công nhận prototype là nghiệm thu.

## Đầu ra bổ sung
`08-visual-workspace-handoff.json` — trường tối thiểu: activity_id,entry_key,task_key,objective_ids,asset_or_map_ref,evidence,time_ref,fallback,open_issues. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 08 v2.5
Không tăng thời lượng chỉ vì hiệu ứng, không khóa điều hướng hoặc ép nộp; giữ hạn chế QA.

## Bàn giao
Consumer bổ sung: SKILL09, SKILL10, SKILL11, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `08-resource-routing-note.md` — REQUIRED: Tham chiếu tài nguyên thật và fallback, thời gian và điều kiện sử dụng; không đổi cấu trúc 5512 hoặc ghi video chưa có thành học liệu sẵn sàng.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.
