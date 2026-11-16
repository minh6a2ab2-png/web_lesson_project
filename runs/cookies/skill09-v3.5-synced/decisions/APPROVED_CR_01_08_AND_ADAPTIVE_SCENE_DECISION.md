# GHI NHẬN PHÊ DUYỆT CR01–CR08 VÀ CÁCH ÁP DỤNG

Người dùng đã **phê duyệt tất cả CR-01 đến CR-08** trong cuộc trò chuyện 2026-11-17, đồng thời bổ sung nguyên tắc **Skill09 phải thích nghi theo mức rõ ràng của Skill10; cho phép thêm màn khi thật sự có lý do sư phạm**. Đây là quyết định mới, thay thế trạng thái “chờ duyệt” của phiếu cũ, không phải phê duyệt tất cả hình ảnh mới chưa được xem.

| CR | Quyết định áp dụng trong hợp đồng mới | Kiểm chứng |
|---|---|---|
| CR-01 | Loại bỏ `dual_view`, `active_pane` và mọi yêu cầu chia màn trong 25 định nghĩa. | Không có key dual_view trong scene; navigation.one-screen-only. |
| CR-02 | A1-02, A2-01, A2-02 thuộc TEACH, không form; P1 được kiểm tại A1-03 và P2 tại A2-06. | Các scene TEACH có `completion_mode=ungraded`. |
| CR-03 | A3-02, A4-01, A4-02 che nhãn/lời giải tới sau nỗ lực. | `answer_reveal` và gate; cần chỉnh hi-fi ở Skill10. |
| CR-04 | Bằng chứng tùy bản chất: lựa chọn, thao tác web, nói, giấy; Next/Reveal ≠ mastery. | `evidence_contract`, `meaningful_attempt`. |
| CR-05 | D0-R01/R02 hỗ trợ khi nhầm; A2-03 và A3-01 yêu cầu dự đoán trước. | `adaptive_branch`, `reveal_gate`. |
| CR-06 | A5-01 xác nhận bắt đầu; A5-02 đánh giá riêng, chỉ hỗ trợ trung tính, staff key ngoài student bundle. | `assessment_entry`, `assessment_security`. |
| CR-07 | Một màn nội dung chính không cuộn ở viewport mục tiêu, keyword popover nổi, “Em có biết?” tùy chọn, VI ready/EN pending. | `learning_design`/`interaction_contract`; QA Skill10 + Skill11 thực thi. |
| CR-08 | Trạng thái VISITED / ATTEMPTED / SAVED_UNGRADED / SUBMITTED / VERIFIED / MASTERED, nguồn sản phẩm web/paper/oral. | `student_state_model`, `evidence_contract`. |

## Màn mới có căn cứ

- A3-00: đơn vị nội dung “giới thiệu hai quy ước ngắn” đã nằm trong Skill08; tách hình cho dễ hiểu, dùng 55 giây phân bổ lại 3 màn ACT03 nên vẫn 420 giây.
- D0-R01/R02: mini-screen 45 giây mỗi màn **chỉ khi cần**, từ quỹ dự phòng 5–10 phút trong Skill08; không bắt toàn bộ học sinh đi qua.
- Không thay đổi mục tiêu giáo án, không tăng thời lượng core, không thêm game hoặc nội dung phức tạp ngoài nguồn.

## Việc còn cần duyệt trực quan

- Màn A3-00 cùng hai màn ôn D0-R01/D0-R02 chưa có screenshot hi-fi trên Skill10.
- Các điều chỉnh reveal của màn A3-02/A4-01/A4-02 và nâng cấp kiểm tra D0 cần demo tương tác Skill10 trước khi nhận `DESIGN_PASS`.
- Đây là điểm cần *thiết kế tiếp*, không phải CR chưa được người dùng duyệt.
