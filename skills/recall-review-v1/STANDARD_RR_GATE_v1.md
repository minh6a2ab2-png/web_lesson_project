# CHUẨN BẮT BUỘC: ACTIVE RECALL + ÔN TẬP SAU MỖI PHẦN KIẾN THỨC

**Mã:** `RR-GATE-v1.0`  
**Ngày:** 17/11/2026  
**Phạm vi:** Pipeline 13 skill *đang dùng cho bài Cookies*, trong đó Skill 09 = Website Architect, Skill 10 = Visual Designer, Skill 11 = HTML Developer, Skill 12 = Learner Audit, Skill 13 = Final QA.  
**Nguồn quyết định:** người dùng đã xác nhận Active Recall sau mỗi phần và bổ sung một màn câu hỏi ôn tập riêng với số lượng vừa đủ, đa dạng hình thức. Không lấy workflow 13 skill v4.0 của một nhánh dự án khác làm thay thế cho mapping này.

## G0. Xác định phần kiến thức trước khi thiết kế màn
- `knowledge_sections` lấy từ ma trận CORE/giáo án đã phê duyệt; mỗi phần phải có `section_id`, danh sách `objective_ids` và `knowledge_unit_ids` được dạy.
- Không đếm khởi động P00, kiểm tra tiền kiến thức D0, EXIT độc lập, hoặc bài tập sau giờ P07 thành phần kiến thức mới chỉ để đạt quota.
- Không chia vụn chủ đề nhằm tăng số màn, cũng không nhập nhằng gộp các phần để né quy tắc. Trường hợp đặc thù đòi khác quy tắc phải có `USER_APPROVED_EXCEPTION` nêu lý do và cách giữ cơ hội ghi nhớ/ôn tập; chưa có xác nhận thì `BLOCKED`.

## G1. Hợp đồng cho từng phần học (không được thiếu)
Với mọi `section_id` thuộc `knowledge_sections`, phải có:
1. Một màn `ACTIVE_RECALL` (hoặc `RECALL_TEACH_BACK` nếu thực sự kết hợp) sau phần giới thiệu/khám phá/practice chính: 2–4 cue hình hoặc từ khóa hiển thị lần lượt; người học tự **nói → ghi/vẽ ngắn trong vở → mở đối chiếu**. Nội dung trả lời không xuất hiện trước lượt thử. Cần hỗ trợ và phương án giấy/offline.
2. Một màn `REVIEW_QUIZ` ngay **sau** màn Recall, trước phần kiến thức mới hoặc EXIT; hiển thị **một câu/lượt**. Mặc định 2–4 câu/phần, ưu tiên 3; vượt khoảng này khi có lý do rõ về mục tiêu và tải nhận thức, không ép thêm câu vô ích. Mỗi phần dùng tối thiểu hai dạng câu khác nhau khi phù hợp: single-choice, đúng/sai có lý do, ghép, sắp xếp, chọn nhiều, tình huống. Đa dạng tính trên cả bài.
3. Dữ liệu câu hỏi: `question_id`, `section_id`, `objective_ids`, `type`, `prompt`, lựa chọn/thẻ nếu cần, đáp án riêng, `explanation`, `misconception`, `retry_policy`, hỗ trợ không lộ đáp án trước.
4. `completion_criteria` tách rõ `ATTEMPTED/COMPLETED` với `VERIFIED/MASTERED`. Xem đáp án, bấm Next hay lật flashcard không tự động là đã hiểu. Sản phẩm bằng lời/giấy phải xác nhận thủ công nếu cần.
5. Một nhánh xử lý lỗi hoặc chưa chắc, điều hướng quay lại phần phù hợp, câu nối sang phần tiếp theo, và thời gian riêng cho hai màn.

## G2. Giữ đúng ý nghĩa hai loại màn
- **Recall:** cố gắng tái tạo trí nhớ không nhìn đáp án; không thay bằng đọc lại slide, trắc nghiệm hay chỉ lật thẻ. Một cue mỗi lần, có tùy chọn tự xác nhận đã nói/ghi; chỉ sau đó mới mở mẫu. Khi chưa có kiểm tra thực tế, lưu `SELF_REPORTED_ATTEMPT` chứ không suy ra `MASTERED`.
- **Ôn tập:** kiểm tra vừa học qua nhiều cách trả lời, phản hồi theo sai lầm, cho thử lại; không sao chép máy móc câu vừa làm ở practice, không lộ lời giải trước khi thử.
- **EXIT:** đánh giá độc lập, không có trợ giảng kiến thức và khóa đáp án; ngân hàng quiz luyện tập không bị dùng làm khóa EXIT lộ ra người học.
- **UX:** màn laptop mục tiêu không cuộn dọc; responsive khi zoom/mobile ưu tiên đọc được; keyword dùng popover nổi, không đẩy bố cục; không Dual View; không có form bắt buộc ở màn TEACH.

## G3. Cổng kiểm định liên thông và quyền sở hữu
| Skill | Chủ sở hữu & điều kiện dừng |
|---|---|
| 02 | Đưa Recall + Ôn tập thành mục tiêu, tiêu chí đánh giá, ngân sách mỗi phần. Thiếu = `STOP_ARCHITECTURE`. |
| 04 | Kiểm tra vừa sức, hỗ trợ và phương pháp truy hồi/ôn tập với hồ sơ học sinh; không biến ôn thành học thêm kiến thức mới. |
| 06 | Viết lời dẫn giao nhiệm vụ, tổ chức học sinh thử trước, nhận xét/kết luận, chữa lỗi và chuyển đoạn cho **hai màn** mỗi phần. |
| 07 | Tạo cue, thẻ, ngân hàng câu, dữ liệu/ảnh/mô hình, đáp án riêng, nguồn và fallback; không được đánh dấu READY khi chỉ có đặc tả. |
| 08 | Đưa cặp hoạt động vào kế hoạch CV5512 với đủ chuyển giao–thực hiện–báo cáo/thảo luận–kết luận và ledger thời gian. |
| 09 | Chuyển thành 2 scene có ID ổn định đúng thứ tự; hợp đồng chứa sản phẩm, điều kiện, navigation và states; kiểm tra theo cấu trúc/đồ thị. |
| 10 | Thiết kế hai loại màn khác biệt, preview đủ trạng thái; nội dung không dồn dài, hiển thị đáp án đúng thời điểm. |
| 11 | Lập trình, lưu tiến trình, thử thao tác đủ loại câu; kiểm tra browser thực và không lộ đáp án sớm. |
| 12 | Mô phỏng học sinh học cả hai màn mỗi phần, bao gồm sai/đúng/quay lại và chứng cứ tự nhớ; không gọi mô phỏng là kiểm chứng với người thật. |
| 13 | Nghiệm thu theo `SECTION_RECALL_REVIEW_GATE`, chặn xuất bản nếu thiếu cặp, thời lượng chưa duyệt, lỗi vận hành hoặc lộ đáp án. |

## G4. Điều kiện thời gian, phiên bản và bản quyền nội dung
- Ngân sách thời lượng của Recall/Quiz tính riêng trong tổng giáo án; thay đổi so với kế hoạch đã duyệt phải gửi `CHANGE_REQUEST` và **không tự đặt là đã được duyệt**.
- ID đã phát hành không tự ý đánh số lại; nâng cấp màn RECALL cũ trước khi thêm màn mới. Giữ nguyên văn bản và câu hỏi học thuật từ nguồn được chốt, không âm thầm thay đổi nội dung.
- Không tự gọi kiểm tra cấu trúc là `BROWSER_TEST_PASS`, không gọi học sinh tự bấm là `MASTERY_PASS`.

## G5. Gói bằng chứng chuẩn để bàn giao
`section_reinforcement_manifest.json`: `section_id`, `objective_ids`, `core_scene_ids`, `recall_scene_id`, `review_scene_id`, `recall_cues`, `quiz_question_ids`, `question_types`, `evidence_modes`, `reveal_gates`, `navigation_edges`, `estimated_seconds`, `teacher_script`, `learner_copy`, `answer_key_location`, `fallback`, `qa_state`, `source_refs`.

**Quy tắc chặn cuối:** `SECTION_RECALL_REVIEW_GATE == PASS` chỉ khi cấu trúc có đủ cặp, ngân sách đã chốt, giao diện/logic đã chạy đúng và học sinh có cơ hội tự nhớ/ôn; kết quả học tập thực tế vẫn cần được kiểm tra ngoài mô phỏng.
