# Bộ nâng cấp Skills — ngăn bỏ sót Active Recall + ôn tập

**Gói cập nhật nghiệp vụ** cho pipeline 13 skill của dự án Cookies (Skill09 Website Architect, Skill10 Visual Designer, Skill11 Developer). Mục đích: yêu cầu củng cố cuối mỗi phần được bảo toàn từ kế hoạch → kịch bản → học liệu → giáo án → hợp đồng website → UI → code → kiểm toán → QA.

## Nội dung
- `STANDARD_RR_GATE_v1.md`: quy chuẩn bắt buộc, metadata, thời lượng, trạng thái, quy tắc học và kiểm định.
- `skill02`, `skill04`, `skill06`...`skill13`: 10 `SKILL.md` đã nâng cấp ở phần liên quan; **không ghi đè chức năng không liên quan** trong bản hiện hành.
- `tools/validate_section_reinforcement.py`: kiểm thử offline theo hợp đồng scene + bank câu hỏi/cue; `tests` và `reports` có fixture PASS/FAIL.
- `SOURCE_AND_NUMBERING_CROSSWALK.md`: nguồn thực tế, phân biệt pipeline Cookies với bảng đánh số khác của dự án DNS.
- `CHANGELOG.md`, `VERSION_MATRIX.csv`.

## Cách dùng
1. Trước Skill08/09, xác định `knowledge_sections` theo kế hoạch đã chốt.
2. Kiểm tra mỗi phần có cặp Recall → Quiz, cue/quiz, câu nối và thời lượng.
3. Chạy: `python tools/validate_section_reinforcement.py --contract path/to/contract.json --review-js path/to/review-bank.js --recall-js path/to/app.js --sections ACT01 ACT02 ACT03 ACT04 --out report.json`.
4. Chỉ chạy Skill11 khi gate sư phạm, thời gian và thiết kế được quyết định rõ. Browser E2E là gate độc lập, validator này không thay thế.

## Trạng thái
**DEFINITIONS_UPDATED / STRUCTURE_REGRESSION_CHECKED / LESSON_RERUN_NOT_DONE**. Những thay đổi cần duyệt riêng (như 54:30 so với 42:00) không bị tự phê duyệt.
