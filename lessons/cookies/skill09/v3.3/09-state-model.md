# 09 – Mô hình trạng thái, chứng cứ và Sổ tay

## Scene finite state
`unseen → ready → attempt_in_progress → attempted → (needs_revision | verified_complete)`.
- `note_saved`: thuộc tính độc lập, **không** tự chuyển thành verified_complete.
- `hint_level`: 0..3, H3 chỉ mở sau attempted, trừ EXIT không bao giờ mở.
- `step_index`: 0..len(steps)-1; thay đổi bước không đánh giá học lực.
- `tutor_open`: true/false, theo scene và preference; trên Dual chỉ một tutor cho pane active.
- `evidence`: `{kind, text_or_reference, source_scene, captured_at, status, support_level, reviewed_by}`.
- `knowledge_capsule`: `{text, unlocked_by_evidence, unlocked_at}`; câu hỏi chưa được chấm không tự mở như kiến thức đã biết.

## Student notebook
Tab 1 `Nhiệm vụ hoàn thành`: mục đích, nhiệm vụ, **sản phẩm thực tế**, mức gợi ý, đã lưu/chưa được chấm/xác minh, thời gian, xem lại.
Tab 2 `Kiến thức đã học`: khái niệm chuẩn theo scene, chỉ sau lượt thử + hoàn thành/xác minh, không sao chép prompt thành “kiến thức”.

## Dual View
`off | adjacent(left=N,right=N+1) | independent(left=N,right=M) | assessment_scratchpad`. `active_pane=left|right`.
- Nút Dual luôn có thể dùng; không tự chuyển mode. Cột có cuộn riêng và tỉ lệ 50/50,60/40,40/60; mobile xếp dọc.
- Tutor gắn active pane, các câu hỏi/gợi ý không đồng thời từ hai khung.
- Trong EXIT: mở Dual chỉ assessment + giấy nháp; không được hiển thị scene cũ, Sổ tay, key hoặc gợi ý.

## Privacy/offline
Lưu local nếu engine Skill11 triển khai và browser cho phép; khi không lưu được báo rõ. Không lưu cookie đăng nhập thật. Không gửi dữ liệu người học qua API AI mặc định.
