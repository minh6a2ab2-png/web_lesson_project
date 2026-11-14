# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.

## Các trạng thái lõi
`scene_id`, `active_step`, `input_draft`, `attempted`, `hint_level`, `status`, `feedback`, `review_unlocked`, `tutor_open`, `tutor_message_id`, `dual.enabled`, `dual.left`, `dual.right`, `dual.ratio`, `notebook.items`, `assessment.locked`, `assessment.submitted`.

Sơ đồ:
```
not_visited -> visited -> attempted -> submitted -> reviewed
                     |          |              |
                     +-> help_H1/H2/H3              +-> completed (nếu đủ minh chứng)
```
- `saved_ungraded` không bằng `mastered`; tiến độ lưu trong browser không đồng bộ qua thiết bị.
- Khi chuyển scene, input_draft và active_step chỉ reset nếu người học chủ động chọn lại; nhấn nút `Quay lại` không tự xoá dữ liệu.
- H1, H2 chỉ mở tăng dần. H3 chỉ sau attempted, có ngoại lệ bài ít độ khó cho ít nấc.
- Tutor mặc định mở intro ngắn, có thể đóng/mở. Dual View giữ một tutor và chuyển ngữ cảnh trái/phải.
- Trong EXIT khóa Sổ tay, knowledge capsule, nhảy scene, gợi ý nội dung, Dual mode chỉ cho đề + nháp.
- Khi EXIT được nộp: tạo `submitted_ungraded`, không có answer key ở client; thông báo đã ghi nhận.
- `knowledge_capsule` chỉ mở sau `attempted` và được xác nhận lưu/tổng kết; nội dung lấy từ Skill09 v3.2, không suy ra từ câu hỏi.

## Trường dữ liệu tối thiểu cho Sổ tay
`scene_id`, `title`, `page_purpose`, `student_task`, `answer_or_artifact`, `support_level`, `evidence_ref`, `saved_at`, `status`, `knowledge_capsule_unlocked`. Các bản ghi không gồm danh tính học sinh hay cookie đăng nhập thực.
