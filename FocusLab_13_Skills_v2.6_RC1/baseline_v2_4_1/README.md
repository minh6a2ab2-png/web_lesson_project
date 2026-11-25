# FocusLab — 13 Skill v2.4.1

Bản sửa nhất quán từ **bộ 13 Skill người dùng gửi → v2.3 → v2.4**. Dùng v2.4.1 cho lần chạy tiếp; chưa chạy lại bài DNS.

1. Đọc policy/ONE_TOPIC_MASTER_RULES.md, EXECUTION_AND_HANDOFF.md, Direct Learning v2.3 và Guided & Visual v2.4.
2. Đọc Skill cần chạy trong skills/skill01 đến skill13; tra output/consumer ở templates/pipeline_registry.json.
3. Khi chạy bài mới bắt đầu Skill01 với một topic, nguồn học và hồ sơ người học; cổng duyệt theo phạm vi đã cho phép.
4. Kiểm hiện hành: `python -X utf8 tests/test_consistency.py`; hồi quy schema gốc: `python -X utf8 tests/test_definitions.py` (cần jsonschema).

Giữ hồ sơ gốc bên cạnh trong FocusLab_V2_4_Ho_so_kiem_dinh_13_Skills_va_DNS. History/legacy chỉ đối chiếu. Kiểm mới xem QA_REPORT_V2_4_1.md; báo cáo v2.4 cũ là lịch sử.
