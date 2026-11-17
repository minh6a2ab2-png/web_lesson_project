# Bộ 13 Skills MT1 — Thiết kế **một buổi học nhiều chủ đề**

**Trạng thái:** `DEFINITIONS_READY / FIXTURE_STATIC_QA_READY / REAL_LESSON_NOT_RUN`. Bản mới không tự thay thế các skill trong nhánh `main`; không bao gồm thao tác sao lưu chuyển cuộc trò chuyện (việc 3 tách riêng).

## Tại sao có bản mới?
Bộ Cookies thành công ở bài một chủ đề nhưng hardcode 22→30 scene và chuyển phần chưa đủ bao trùm bài tổng hợp. Bản MT1 thêm `lesson_session → topic → knowledge_section → knowledge_unit`; đồ thị kiến thức xuyên topic, cầu nối, Recall và Quiz ở cuối mỗi section CORE, bài vận dụng liên kết và ledger toàn buổi. Tránh vừa gộp nhiều topic thành các website độc lập, vừa tạo hoạt động Recall theo từng câu bé.

## Dùng như thế nào?
1. Chọn đúng pipeline Cookies 01–13 trong `PIPELINE_CROSSWALK.md`.
2. Áp dụng `policy/MT_CONTRACT.md`, `policy/GATES_AND_ROUTES.md`.
3. Chạy lần lượt `skills/skill01/SKILL.md` … `skills/skill13/SKILL.md`, có thể chỉ chạy một bước khi người dùng yêu cầu.
4. Kiểm thử hợp đồng đa chủ đề: `python tests/validate_multitopic.py --contract fixtures/multi_topic_120min/session_contract.json --review fixtures/multi_topic_120min/teacher_review_bank.json --student-review fixtures/multi_topic_120min/student_review_bank.json --recall fixtures/multi_topic_120min/recall_bank.json`.
5. Chạy `python tests/test_regression.py` để kiểm tra khả năng **phát hiện các lỗi cố tình cài vào**.

## Hồ sơ
- `skills/skill01..13/SKILL.md`: định nghĩa vai trò, quy trình, đầu vào/ra và chốt QA từng skill.
- `policy/`: chuẩn chung, cổng kiểm tra, hợp đồng dữ liệu.
- `fixtures/`: buổi giả định **120 phút** gồm DNS → HTTP/HTML → Cookies, có 3 cặp Recall/Quiz, bridge và transfer; **không phải giáo án được người dùng duyệt**.
- `tests/`: validator stdlib và regression test, không cần trình duyệt.
- `reports/`: kết quả kiểm định cấu trúc. Không tuyên bố browser/field test.

**Bộ này làm xong việc 2 về nâng cấp skill; việc 3 về backup/toàn bộ bàn giao hội thoại chưa được thực hiện.**
