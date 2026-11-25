---
name: content-research-analysis
description: Phân tích nguồn, kiến thức và cơ chế cho một nội dung; dùng khi chạy Skill01 trước thiết kế bài học FocusLab.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 01 — Content Research & Analysis (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Nghiên cứu đúng **một topic**, truy nguyên nguồn, đơn vị kiến thức, tiên quyết và những cơ chế cần mô hình. Không định số scene, hiệu ứng hay chọn phương pháp ở đây.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill01_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Tài liệu tối thiểu/SGK do người dùng đưa; tên nội dung con; mục tiêu lớp học, hồ sơ học sinh, phiên bản nguồn; yêu cầu dùng trình duyệt thực nếu có.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Chuẩn hóa nguồn bối cảnh và vấn đề (PROBLEM_CONTEXT)
- Với mỗi `topic_id`, tạo ít nhất **một ứng viên bối cảnh thực** có `context_source`, tác nhân, địa điểm/tình huống, hành động quen thuộc, thực trạng quan sát được, **knowledge_gap** và `problem_question` chưa được giải đáp. Phân biệt sự thật có nguồn với ví dụ giả định; tuyệt đối không bịa số liệu/thực trạng.
- Bối cảnh có thể là **nhu cầu, hiện tượng, sự khác biệt hoặc nghịch lý**, không ép mọi nội dung phải có mâu thuẫn. Ghi `student_relevance` và `illustration_candidate` (ảnh, ảnh chụp, SVG hoặc mô hình) với nguồn/bản quyền.
- Chuyển cho Skill02 **hai khả năng**: một OBSERVE tích hợp bối cảnh, hoặc `PROBLEM_CONTEXT` riêng rồi mới OBSERVE/hoạt động tiếp. Skill01 chỉ nêu ứng viên, **không** quyết định số scene.
- Đầu ra bổ sung `01-context-problem-candidates.md`: nguồn, tính xác thực, câu dẫn, trạng thái trước/sau, điều chưa biết và giới hạn chưa được hé lộ (spoiler boundary).

1. Khóa `topic_id` duy nhất, tách `CORE/EXTENSION/PREREQUISITE`. Đọc SGK/đầu vào, nguồn chuẩn kỹ thuật và ví dụ thực tế, ghi ngày, mức chắc chắn VERIFIED/INFERRED/UNVERIFIED. Không ngụy tạo nguồn.
2. Với từng `ku_id`, lập định nghĩa/kết luận, ví dụ, phản ví dụ, điều kiện đúng, sai lầm thường gặp và bằng chứng cần quan sát.
3. Lập **mechanism_candidate_register** cho nội dung có trình tự, trạng thái, trao đổi, điều kiện, tương tác người dùng: actors, events, input/output, trạng thái trước/sau, biến đổi cần nhìn thấy. Đánh dấu `MODEL_REQUIRED` hoặc `STATIC_ILLUSTRATION_SUITABLE` kèm lý do; chưa thiết kế UI.
4. Xác định tiên quyết mà DIAGNOSE có thể hỏi; phân loại phần bắt buộc phải ôn trước nội dung mới. Ví dụ Cookie cần Browser/Server và Request/Response; không tự xem mọi điều là kiến thức mới.
5. Nêu 1–2 tình huống đời thực đặt vấn đề phù hợp người học; gợi ý quan sát bằng công cụ thật ở đâu, và giới hạn của mô phỏng ở đâu.
6. Đánh dấu đoạn có khả năng quá tải nếu trình bày đồng thời và nội dung cần so sánh cùng lúc; chuyển cảnh báo cho Skill02/03, chưa giải bằng cách chia slide tùy tiện.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Lập danh sách nội dung bắt buộc (định nghĩa/kết luận/quan hệ) và phần bổ trợ, từ khóa có thể chú giải; phân biệt nguồn SGK và kiến thức mở rộng. Đặt câu hỏi từ bối cảnh tự nhiên, không coi nhãn giao diện là kiến thức.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Xác định các điểm chuyển ý, bối cảnh thực, hình gợi nhớ theo KU; không sáng tác nguồn.

### Thực thi và kiểm tra v2.4.1
1. Ghi source_id, trang/đoạn, claim và mức chắc chắn cho từng KU. Không coi URL chưa đọc là bằng chứng đã thẩm định; giữ riêng SGK tối thiểu và phần bổ sung.
2. Trong `01-guided-visual-opportunities.md`, lập `ku_id → kiến thức đã học cần gợi → cue_candidate → spoiler_risk → source_ref → consumer_skill`. Chỉ đề xuất điểm chuyển ý, chưa định số scene/LEAD_IN.
3. Liệt kê CORE phải hiện trực tiếp, phần hỗ trợ có thể tooltip và tiên quyết cần chẩn đoán. Claim UNVERIFIED ảnh hưởng CORE phải thành issue có owner.
4. Bàn giao nguồn và ranh giới cho Skill02/03; đổi claim phải chỉ rõ KU/model/question downstream cần kiểm lại.

## Đầu ra bắt buộc
Bổ sung `01-guided-visual-opportunities.md`.

Bổ sung `01-core-and-support-register.csv`.

`01-topic-source-register.csv`, `01-ku-prerequisite-graph.json`, `01-knowledge-accuracy-boundaries.md`, `01-core-extension-audit.md`, **mới:** `01-mechanism-candidates.csv`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL01`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 01)
Mỗi CORE KU có nguồn/trạng thái; mọi claim cơ chế có đầu vào–đầu ra–giới hạn; prerequisite không bị gán nhầm thành mục tiêu mới; xác nhận một topic duy nhất; chưa chốt số màn/hiệu ứng.

**Gate v2.3:** CORE đủ nguồn, phân tầng nội dung, không phụ thuộc tooltip.

## Bàn giao và xử lý sai lệch
Chuyển bảng KU/nguồn/cơ chế cần minh họa tới Skill02–03; các `MODEL_REQUIRED` phải được Skill05/07 tiếp nhận; nội dung sai quay lại Skill01.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Có mapping cơ chế/khái niệm → cue hình và rủi ro lộ đáp án.

---

# SKILL01 — Content Research & Analysis: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill01/SKILL.md
**SHA-256 gốc:** `1e17a08d8828aa09b7a382f81a29be29fa467a4bbb93e34fc991609cb0fdc093`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE01,VE02. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Phân tích cơ hội hình ảnh theo KU, phân biệt ảnh thật minh họa hiện tượng, sơ đồ giải thích cơ chế và cue gợi nhớ. Ghi nguồn/claim, visual risk (sai cơ chế, lộ đáp án), tình huống thật và giới hạn. Xác định quan hệ kiến thức để Skill03 author, không gán layout/số màn.

## Đầu ra bổ sung
`01-visual-research-opportunities.csv` — trường tối thiểu: ku_id,objective_id,visual_need,role,source_ref,accuracy_risk,spoiler_boundary,consumer. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 01 v2.5
Mỗi CORE có đề xuất hoặc lý do không cần hình; nguồn chưa đọc ghi UNVERIFIED.

## Bàn giao
Consumer bổ sung: SKILL05, SKILL07, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `01-tool-opportunity-register.json` — CONDITIONAL: Khi cần nguồn/công cụ bổ sung, ghi nguồn, quyền, mục đích và khả năng lấy tệp; không suy diễn từ URL.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.

## v2.7 RC1 — pedagogical contract
Read `../../policy/EXECUTION_V2_7_RC1.md` before execution; its explicit version and scope overrides take precedence. Research claims, scope, evidence level and source rights; preserve curriculum boundaries; identify misconceptions as hypotheses.
- Required `01-pedagogical-contract.json`: versioned skill/topic/KU, applicable evidence and source refs, decisions, limitations, status; no invented approval.
