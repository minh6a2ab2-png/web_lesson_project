# Skill07 v2.1 — Tóm tắt cập nhật chính thức

**Nguồn trước:** `ONE_TOPIC_13_SKILLS_FOCUSLAB_V2_2026-11-23.zip` (Skill07 v2).
**Nguồn yêu cầu mới:** `SKILL07_MODEL_DESIGN_STANDARD_V1_2026-11-23.zip` đã được người dùng duyệt qua yêu cầu “cập nhật skill 7”.
**Phạm vi thay đổi:** Skill07, chính sách model riêng, model schema/example/checklist, test định nghĩa, manifest và tài liệu bàn giao. 12 Skills còn lại được giữ **byte-for-byte** so với bản v2.

## Những thay đổi đã tích hợp vào chính Skill07

1. Cổng `MODEL_REQUIRED`: chọn đúng loại học liệu, yêu cầu thao tác có ý nghĩa và >=2 trạng thái/kết quả.
2. Hợp đồng model có JSON Schema, nhiều loại mô hình và 3 mức L1/L2/L3, không ép mọi model thành L3.
3. State machine độc lập animation; transition, guards, invariants; phản hồi nhìn thấy ngay trên actor/đường/payload (không chỉ log).
4. Hai lớp animation tách biệt: reveal màn học (2–3s) và hoạt ảnh nội tại do HS điều khiển; Show All không tự chạy mô hình hoặc lộ đáp án.
5. Kiểm soát timer/cancel/reset/rapid input; có reduced motion, điều khiển bàn phím, fallback offline.
6. Viewport 1280×720/1366×768 no-scroll/no-clipping ở desktop chuẩn; chừa fixed navigation; mobile/zoom có fallback an toàn.
7. Test P0 bằng logic + browser interaction + motion evidence + bilingual/accessible/offline; không dùng screenshot/DOM đơn độc để khẳng định motion.
8. Tách student bundle/teacher key; file thật + SHA256 + nguồn/licence + alt/caption/transcript VI/EN + trạng thái trung thực.
9. 30 mục QA có file template, rubric 30/30/20/20 điểm và gate P0.

## Giao diện nhập liệu/giao diện đầu ra

- `skills/skill07/SKILL.md`: **định nghĩa chính cần dùng**.
- `policy/SKILL07_MODEL_DESIGN_STANDARD.md`: giải thích đầy đủ quy chuẩn tích hợp, tham chiếu từ SKILL.md.
- `templates/model_contract.schema.json`: JSON Schema v1 cho model mới.
- `templates/model_contract.dns.example.json`: hợp đồng model DNS ví dụ hợp lệ.
- `templates/model_contract.example.json`: hợp đồng Cookies cũ được **giữ nguyên** để đối chiếu, chưa phải schema v1.
- `templates/skill07_model_qa_checklist.csv`: 30 phép kiểm có P0/P1; dùng cho các lượt chạy mới.
- `tests/test_skill07_model_v21.py`: test tính nhất quán định nghĩa + JSON Schema.

## Giới hạn

Đây là **cập nhật Skill định nghĩa**, không phải cập nhật mô hình DNS ở lượt chạy Skill07 trước đó. Mọi kết luận test runtime trước đây vẫn nguyên giá trị và giới hạn; phải chạy lại mô hình theo tiêu chuẩn mới trước khi nâng trạng thái `READY_ASSET`.


**V2.2:** Skill07 bổ sung riêng mục sản xuất `PROBLEM_CONTEXT` visual asset. Model engine/QA v2.1 **không thay đổi**, không có việc kiểm thử lại model DNS.
