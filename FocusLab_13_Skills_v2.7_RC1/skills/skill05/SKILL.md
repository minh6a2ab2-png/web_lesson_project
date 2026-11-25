---
name: learning-resource-curator
description: Tuyển học liệu, thẩm định quyền dùng và phương án offline; dùng khi chạy Skill05 trước sản xuất tài nguyên.
---


> **Inherited version: FocusLab v2.5 (read as inherited rules; RC1 execution policy below).** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 05 — Learning Resource Curator (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới
Tuyển chọn/thẩm định học liệu cần có cho một nội dung, gắn nhu cầu mô hình tương tác và tính chính xác nguồn; chưa được tự nhận đã sản xuất tài nguyên.

> **Bắt buộc:** Trước khi chạy đọc `../../policy/ONE_TOPIC_MASTER_RULES.md` và `../../policy/SCENE_KIND_REFERENCE.md`. Khi xung đột với MT2 về multi-topic, part/subpage hoặc nhịp adaptive v2, áp dụng policy ONE_TOPIC. Bản nguồn đầy đủ được lưu trong `../../legacy/skill05_MT2_ORIGINAL.md` để đối chiếu.

## Đầu vào bắt buộc
Knowledge + misconception Skills01–03, activity map Skill04, mục tiêu, learner profile, điều kiện offline, ngôn ngữ VI/EN.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Học liệu kể chuyện bối cảnh
- Mỗi `PROBLEM_CONTEXT` cần **hình ảnh/sơ đồ/tình huống trực quan thực sự minh họa bối cảnh** (không phải hình trang trí), đủ lớn để học sinh nhận ra vấn đề; ghi `context_asset_id`, nguồn, giấy phép, trạng thái đã tạo hay mới SPEC_ONLY.
- Phân biệt **ảnh mở đầu không hé lời giải** với **mô hình giải cơ chế ở OBSERVE/EXPLORE/TEACH**. Không chuyển luồng đáp án/đường DNS thành hình minh họa đầu bài nếu nhiệm vụ là đoán cơ chế.
- Có alt/caption song ngữ, không bịa số liệu/hiện trạng. Nếu asset thiếu, báo chặn hoặc phương án thay thế đã xác minh, **không** dùng URL nguồn làm bằng chứng có tệp.
- Đầu ra bổ sung `05-context-visual-resource-brief.csv`: source/license, vùng bố cục dự kiến, vai trò trong câu chuyện, trạng thái kiểm thử.

1. Tạo `asset_registry` có `asset_id`, mục tiêu, owner section, source/license, media type, status và đường dẫn/nguồn; phân biệt **ảnh minh họa tĩnh** với **mô hình diễn giải cơ chế**.
2. Với cơ chế, chọn **mô hình tương tác** (Browser→Server, request/response, state machine, luồng xử lý...); ghi lý do dùng mô hình, các biến đầu vào và 2 trường hợp thử; cấm chỉ dùng SVG tĩnh để thay mô phỏng.
3. Thẩm định nguồn thực tế (SGK/chuẩn/đời thực), thời điểm tham khảo và tính đúng kỹ thuật; không gắn nhãn “đã kiểm chứng bằng browser” cho mô hình giả lập.
4. Chuẩn bị học liệu cho modal **DIAGNOSE đúng** (kiến thức nền ngắn + sơ đồ/mini model), INTRODUCTION (công cụ/giải pháp), OBSERVE (tình huống nổi bật) và tooltip.
5. Tính khả năng chiếm chỗ: mô hình cần vùng quan sát đủ lớn; học liệu cùng so sánh phải nằm cùng viewport; ưu tiên crop đúng nghĩa, không thu nhỏ chữ.
6. Dự kiến offline fallback, alt/caption/transcript VI/EN và thiết bị người học; tách key giáo viên/EXIT khỏi học liệu học sinh.
7. Chấm readiness `READY_REFERENCE/READY_ASSET/PROTOTYPE/SPEC_ONLY/BLOCKED` trung thực; lập kế hoạch sản xuất Skill07 và các điều kiện test.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Tuyển tài nguyên cho khối CORE, minh họa không nhãn thừa, thẻ keyword và quiz đóng; phân biệt tài liệu đáp án giáo viên với feedback luyện tập. Mỗi model view có asset/role riêng; không nhầm reuse engine với reuse scene.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Lập catalog asset lời dẫn, keyword cue, review situation, summary và icon; quyền sử dụng, alt VI/EN, offline.

### Thực thi và kiểm tra v2.4.1
1. Catalog guided visual ghi asset_id, role, ku_ids, activity_cluster_id, planned_scene_key, source_ref, license, production_owner, status, path, alt_vi/en, spoiler_check, fallback, acceptance_cases.
2. Phân role CONTEXT/LEAD/RECALL_CUE/REVIEW_SITUATION/REVIEW_SUMMARY/KIND_ICON/MODEL. READY_REFERENCE chứng minh nguồn đã kiểm, không chứng minh có tệp sản xuất.
3. Với từng cue, ghi phần được phép/phải che; alt mô tả truy cập được nhưng không thay ảnh bằng đáp án. Hình không giúp nhiệm vụ phải đổi, không thêm trang trí.
4. Chốt việc Skill07 sản xuất/tái dùng, quyền phân phối và offline. Không ép bài thật có đủ 15 kind; registry hệ thống hỗ trợ đủ 15.
5. Thiếu asset CORE có owner và test case; không đưa URL chưa tải vào READY_ASSET.

## Đầu ra bắt buộc
Bổ sung `05-guided-visual-resource-catalog.csv`.

Bổ sung `05-direct-learning-resource-map.csv`.

`05-source-resource-catalog.csv`, `05-reusable-asset-map.json`, `05-real-browser-and-fallback.md`, `05-license-and-accuracy-register.md`, **mới:** `05-model-resource-requirements.json`, `05-diagnose-intro-assets.csv`.

Mỗi đầu ra có ID, đường dẫn, trạng thái, bằng chứng, hash khi là file thực; không tự nhận đã hoàn thành chỉ vì đã mô tả. `output_manifest.json` tại thư mục của lần chạy ghi `skill_id=SKILL05`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`.

## Điều kiện nghiệm thu riêng (Gate 05)
Mọi nội dung CORE có nguồn/tài nguyên hoặc phương án thay thế; mọi model_required có asset requirement với controls và test cases; không nhầm URL tham khảo hoặc storyboard với file đã tạo.

**Gate v2.3:** Có nguồn, alt VI/EN, tài nguyên theo đúng mục tiêu riêng.

## Bàn giao và xử lý sai lệch
Skill07 thực sự sản xuất assets và prototype theo hợp đồng; Skill06 mô tả tương tác; thiếu asset CORE không đánh dấu PASS.

## Quy tắc chung không được bỏ qua
- ONE_TOPIC, `topic_id` duy nhất, không hardcode số màn/time của Cookies; giữ mục tiêu và thứ tự `Recall → Review` theo CORE section.
- Không tự tuyên bố có model, browser test hoặc field validation nếu thiếu file/log/evidence; phiên bản này là **định nghĩa**, không phải thực thi bài mới.
- Đặc tả màn/mô hình và QA xem `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../templates/scene_contract.schema.json`, `../../policy/QA_VIEWPORT_AND_TIMING.md`.
- Giữ bản Việt/Anh, nguồn và bản quyền, a11y và đường offline phù hợp; có cổng duyệt người dùng trước Skill tiếp theo.

## Gate v2.4
Mỗi asset có ID, nguồn/trạng thái, chống spoil; không chỉ ảnh trang trí.

---

# SKILL05 — Learning Resource Curator: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill05/SKILL.md
**SHA-256 gốc:** `6e7c9b430ab07388c623e677effb3c520320467d43767135867e8baf0584502f`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE01,VE02,VE05,VE07. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Thực hiện visual research thực tế, moodboard 2–3 hướng có lý do chọn; tìm ảnh nguồn hợp pháp và screenshot; catalog theo vai trò/crop/asset type/visual family/rights/attribution/source/retrieval/fallback/alt. Chỉ định sản xuất/tái dùng, phân biệt raster/vector và provenance. Không lấy hình tham chiếu chưa cấp phép làm production.

## Đầu ra bổ sung
`05-art-direction-and-source-plan.json` — trường tối thiểu: theme_id,moodboards,chosen_direction,typography,backgrounds,source_candidates,asset_briefs,diversity_gaps. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 05 v2.5
Nguồn phải có ref/quyền dùng; ảnh không lấy được ghi issue có owner.

## Bàn giao
Consumer bổ sung: SKILL06, SKILL07, SKILL09, SKILL10, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.


## RC1 — bổ sung thực thi và bàn giao

Đọc `policy/EXECUTION_V2_6_RC1.md`, `policy/ENGINE_ROUTING_RC1.md`, registry và manifest RC1. Mọi yêu cầu kế thừa còn hiệu lực; chỉ cơ chế lập lịch, version manifest và cách gọi công cụ thay đổi theo policy RC1. Không tự nâng gate/approval. Không chạy Skill kế tiếp khi thiếu đầu vào bắt buộc.

- `DESIGN.md` — REQUIRED: Hệ thống thiết kế nội bộ theo chủ đề, màu/chữ/khoảng cách, visual intent và quy tắc trợ năng; không tuyên bố tương thích parser bên ngoài.
- `05-tool-and-acquisition-plan.json` — REQUIRED: Chọn route tự động, quyền nguồn, kiểm tra khả năng tải, ảnh thật/đồ họa phù hợp, cache và fallback HTML tải trực tiếp một đợt.

Kiểm tra đầu ra mới theo registry; conditional không áp dụng ghi applicability và lý do. Tệp cũ đã duyệt chỉ dùng làm tham chiếu v2.5, không đổi nhãn phiên bản.

## v2.7 RC1 — pedagogical contract
Read `../../policy/EXECUTION_V2_7_RC1.md` before execution; its explicit version and scope overrides take precedence. Choose purposeful resources for cognitive action, worked examples with different data, optional supports and reduced load; no additional mandatory media.
- Required `05-pedagogical-contract.json`: versioned skill/topic/KU, applicable evidence and source refs, decisions, limitations, status; no invented approval.
