# Cookies — Skill 13 Independent Final QA

Kết quả độc lập cho Skill11 v1.2: **RELEASE_BLOCKED / REVISE_REQUIRED**.

## Cấu trúc
- `13-release-decision.md`: phán quyết và cổng nghiệm thu.
- `13-content-accuracy-and-objectives.md`: đối chiếu 8 mục tiêu Skill03 và nội dung trên web.
- `13-final-section-coverage.csv`: 4 chặng và cặp Recall/Review thực tế.
- `13-issue-register.csv`: danh sách thay đổi theo mức độ, người phụ trách và acceptance test.
- `13-time-and-scope-approval.md`: quyết định 54:30 và những gì không nằm trong thời lượng này.
- `qa/13-independent-browser-results.json`: 30 ca độc lập và kết quả.
- `qa/13-bank-qa.json`: 13 câu, 12 cue, 5 dạng câu hỏi.
- `qa/13-a11y-zoom-results.json`: thử dialog focus và thử co vùng hiển thị.
- `evidence/screenshots/`: ảnh bằng chứng.
- `qa/skill13_independent_audit.py`, `qa/skill13_bank_schema_test.js`, `qa/skill13_a11y_zoom.py`: mã kiểm thử, **không sửa website**.

## Phạm vi & giới hạn
- Mở standalone HTML v1.2 qua Chromium `page.set_content` do môi trường chặn `file://`/data URL. Storage được mock cho kiểm thử nội bộ. **Chưa xác nhận khả năng mở trực tiếp trên Windows/Chrome của người dùng**.
- Không test với học sinh thật hoặc screenreader thực.
- Kết quả mẫu đúng/sai từ quiz không thay thế đánh giá bằng chứng lời nói/ghi vở.
- Các tệp nguồn gốc Skill11 v1.2 **không bị chỉnh sửa** trong lượt Skill13 này.
