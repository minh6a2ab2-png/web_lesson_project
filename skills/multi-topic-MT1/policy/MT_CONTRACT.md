# MT-CONTRACT v1.0 — Bài giảng một buổi, nhiều chủ đề

**Bản pháp quy cho pipeline Cookies 13 skill (01 nghiên cứu → 13 QA).** Đây là bộ quy định thiết kế; không phải lệnh cập nhật mọi tệp skill đã tồn tại ở nơi khác.

## 1. Cấp tổ chức và từ vựng

- `lesson_session`: **một buổi thực dạy**, một mục tiêu tích hợp, `total_seconds`, hồ sơ học sinh, đề kiểm tra cuối, chính sách bản ngôn ngữ, quyết định thời gian.
- `topic`: miền chủ đề (DNS, HTML, Cookie). Một chủ đề có thể có nhiều `knowledge_section`; một section có thể gom một vài ý liên kết. **Không đồng nhất topic = một website riêng**.
- `knowledge_section` (`section_id`): **cụm kiến thức có điểm kết sư phạm**: mục tiêu, các `knowledge_unit_ids`, thứ tự tiền đề, thời lượng, bằng chứng học tập và cặp *Active Recall → Ôn tập*. Chỉ các section `CORE_LEARNING` mới bắt buộc một cặp. Bài mở đầu, nghỉ, bridge, chẩn đoán, EXIT, homework không được đếm thành section CORE.
- `knowledge_unit` (`ku_id`): một ý học cụ thể, nằm trong một section; KHÔNG mặc định phát sinh một Recall/Quiz riêng cho mỗi ý nhỏ.
- `objective_id`: mục tiêu quan sát được; phải có đường truy vết đến nội dung được dạy, lần tự nhớ, câu ôn, vận dụng tích hợp và đánh giá cuối nếu thuộc CORE.
- `scene_id`, `activity_id`, `asset_id`, `cue_id`, `question_id`: toàn cục và bền vững qua phiên bản, có `section_id`/`topic_id`. Không tái dùng A1-01 từ bài Cookies cho DNS.

## 2. Ràng buộc bài nhiều chủ đề

1. Một **trục tình huống duy nhất** nối các topic: ví dụ học sinh gõ tên miền → DNS cung cấp thông tin cần liên hệ → trình duyệt trao đổi HTTP/nhận HTML → Cookie có thể giúp nhớ lựa chọn ở lượt sau. Đây là mô hình học đơn giản có giải thích giới hạn, không phải tuyên bố tất cả website hoạt động y hệt.
2. Xây đồ thị tiên quyết `prerequisites` theo section; không yêu cầu Cookie Set-Cookie trước khi học Request/Response, không dạy khái niệm sử dụng trước khi giới thiệu dữ liệu và vai trò.
3. Mỗi đoạn chuyển topic có `bridge`: liên hệ đã biết → câu hỏi dẫn sang mới → làm rõ điều vẫn chưa biết → câu giao nhiệm vụ tiếp. **Không bỏ qua bridge** bằng cách chỉ đổi tiêu đề màn.
4. Tối ưu lượng nội dung mỗi buổi: phân nhóm CORE/NICE_TO_HAVE; lấy mục tiêu bắt buộc làm ưu tiên, không rút ngắn Recall/Review hoặc nhồi đọc chữ khi quá tải. Nếu thời gian không đủ, giảm mở rộng, phân bổ lại hoặc trình phương án chia buổi theo CR.
5. Phân biệt nhịp trực tiếp/giải thích ngắn và tìm tòi; không ép IBL cho định nghĩa đơn giản, không để giáo viên độc thoại toàn bài. Nhân vật chính của hoạt động là học sinh.
6. Dành thời gian **thực** cho chuyển phần, câu sai/thử lại, nhánh bổ trợ, giải lao và khởi động. `sum(timeline_seconds) == approved_session_seconds`; mở đầu/tổng kết/break không nằm ngoài sổ thời gian nếu nằm trong buổi.
7. Kiểm tra chéo các topic bằng `integrated_transfer`, không trộn các khái niệm trong quiz cơ bản trước khi học topic mới. EXIT độc lập dùng tình huống mới; không đặt key trong gói student.
8. Chế độ thực tế và chế độ demo phải khác nhau. Fixture 120 phút là **DEMO**, không suy thành lịch giảng được người dùng phê duyệt. `USER_APPROVED` cần bằng chứng quyết định thật.

## 3. Quy tắc kết thúc mỗi section CORE

- `recall_scene_id` duy nhất, sau phần dạy/khám phá, **trước quiz**. 2–4 cue hiện lần lượt, học sinh tự nói → viết/vẽ ngắn → xác nhận đã thử → mới được đối chiếu. Nếu chưa làm được, có lựa chọn hỗ trợ và ghi `SKIPPED/SELF_REPORTED`, không gán MASTERED.
- `review_scene_id` duy nhất ngay sau Recall, 2–4 câu thông thường, tối thiểu 2 dạng thích hợp; có phản hồi, thử lại và không rò đáp án trước lượt thử. Không bắt một bài 15 ý nhỏ phải có 15 màn quiz.
- Bỏ qua qua **Next, mục lục, phím tắt, link, resume** đều phải theo cùng kiểm tra quyền: yêu cầu xác nhận hoặc ghi bỏ qua, không cho đi vòng đường nhắc.
- Mục tiêu bằng lời/vở có thể đánh dấu `SELF_REPORTED_ATTEMPT`; `VERIFIED/MASTERED` chỉ khi có bằng chứng được kiểm tra đủ điều kiện; trình duyệt không tự đánh giá sự hiểu bằng hành động nhấn nút.

## 4. Dữ liệu, đánh giá và QA

- Gói `student` chỉ gồm prompt, hình, vị trí và feedback phù hợp, **không** chứa teacher key/đáp án EXIT hoặc rubric chấm chưa tới thời điểm. Lưu key ở gói teacher ngoài phạm vi client nếu cần giữ bí mật.
- Nhãn `VISITED`, `ATTEMPTED`, `SKIPPED`, `SELF_REPORTED`, `SUBMITTED`, `VERIFIED`, `MASTERED` khác nghĩa. Không mặc định chuyển từ VISITED sang MASTERED.
- Nếu bài có tiếng Anh: chỉ bật toggle khi tất cả các màn/feedback đã dịch và kiểm thử; không bật công tắc giả. Offline/browser/keyboard/zoom và dữ liệu riêng tư là gate độc lập.
- `STRUCTURE_PASS` khác `RUNTIME_PASS`, `PEDAGOGICAL_SIMULATION_PASS`, `FIELD_VALIDATED`, `RELEASE_PASS`. Không tự nhận hoàn tất buổi dạy khi chỉ kiểm thử bằng máy.
- Khi thay đổi mục tiêu, thứ tự, thời lượng, số section, rubric hoặc câu hỏi quan trọng đã duyệt: tạo CR có chủ sở hữu, phiên bản, kiểm tra lại vùng ảnh hưởng; **không cập nhật âm thầm**.

## 5. Chốt thứ tự và vai trò của pipeline đang dùng

01 Research · 02 Architecture/assessment · 03 Full knowledge · 04 Methods/profile · 05 Curate media · 06 Teacher scenario · 07 Produce assets · 08 CV5512 plan · 09 Web architecture · 10 Hi-fi visual · 11 HTML developer · 12 Simulated learner audit · 13 Final independent QA.

**Cảnh báo phiên bản:** có một sơ đồ nhánh khác `13-skill-workflow-v4.md` đánh số Skill09 Homework, Skill10 Architect, Skill11 Visual, Skill12 Developer. Chỉ chuyển đổi theo *tên vai trò*, không theo số trần; xem `PIPELINE_CROSSWALK.md`.

## 6. Những thói quen học cần giữ trong một buổi nhiều chủ đề
- **Một trò chơi ôn tập ở đầu hoặc cuối buổi** (không bắt thêm một game mỗi topic): hỏi đa dạng về kiến thức cũ và/hoặc toàn buổi tùy vị trí; ghi riêng với quiz từng section.
- Sau mỗi phần CORE: Active Recall bằng cue tuần tự, học sinh tự **nói rồi viết/vẽ vào vở**, mới đối chiếu; Quiz một màn riêng với 2–4 câu vừa đủ.
- Cuối buổi/ở nhà: giao **mind map tự vẽ lại**, flashcards định nghĩa trước buổi sau và một lần **learning by teaching** (giải thích cho người khác). Có tiêu chí sản phẩm, không gọi chỉ mở flashcard là đã nhớ.
