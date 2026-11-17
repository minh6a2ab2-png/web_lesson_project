# QUYẾT ĐỊNH ĐÃ CHỐT, KẾT QUẢ ĐÃ LÀM VÀ VIỆC CÒN MỞ

## A. Bối cảnh và đích của dự án
Dự án `web_lesson_project`: quy trình chuyên biệt thiết kế bài học CNTT gia sư 1–1 theo nhiều skill, từ nghiên cứu nội dung, kiến trúc, phân tích học sinh, chọn phương pháp, sản xuất học liệu, kịch bản, giáo án CV5512, thiết kế website, lập trình và kiểm định. Nội dung ví dụ đã làm: Internet & WWW, DNS, Cookies. Đích tiếp theo là bài giảng một buổi có nhiều kiến thức, không phải một chủ đề duy nhất.

## B. Pipeline chuẩn của MT1 (đối chiếu số theo Cookies)
| Skill | Vai trò và sản phẩm chính |
|---|---|
| 01 | Content Research & Analysis — tìm và kiểm chứng kiến thức, mục tiêu nguồn |
| 02 | Lesson Architecture & Assessment — chia topic/section, mục tiêu, trọng số, thời lượng, không chọn phương pháp sớm |
| 03 | Knowledge Content Author — nội dung đầy đủ theo từng cụm, ví dụ, hiểu lầm, mục tiêu kiến thức |
| 04 | Learner Profile Fit & Activity/Method Design — chọn trực tiếp/khám phá/thực hành, có rubric phù hợp học sinh |
| 05 | Learning Resource Curator — tìm và xác minh hình ảnh, video, nguồn học liệu |
| 06 | Teaching Scenario Writer — kịch bản có lời dẫn và hoạt động học sinh, nhánh hỗ trợ |
| 07 | Activity Resource Designer — sản xuất asset đã chọn, ghi trạng thái READY/PROTOTYPE/SPEC_ONLY/BLOCKED |
| 08 | CV5512 Lesson Plan Writer — giáo án theo cấu trúc công văn 5512 |
| 09 | Interactive Website Architect — màn, kiến trúc trạng thái, logic điều hướng, active recall/quiz |
| 10 | Learning Experience Visual Designer — hi-fi hình ảnh/giao diện/khung web-slides |
| 11 | HTML Lesson Developer — HTML/CSS/JS thuần, tương tác và lưu tiến độ |
| 12 | Learner Perspective Simulation — mô phỏng học sinh tự học và kiểm tra bẫy bỏ qua |
| 13 | Final Independent QA — rà nội dung, bao phủ, bảo mật đề, trợ năng, kỹ thuật và ra quyết định release |

**Cảnh báo:** Có một file `13-skill-workflow-v4.md` trong dự án có đánh số **KHÁC**, trong đó Skill09 là Homework, Skill10 là Web Architecture, Skill11 là Visual, Skill12 là Developer. Không trộn hai bảng đánh số. Bảng nguồn: `MultiTopic_13Skills_MT1_2026-11-17.zip` / `PIPELINE_CROSSWALK.md`.

## C. Học sinh và cách tổ chức
- Một học sinh 1:1, yêu thích CNTT, hợp tác nhưng nền tảng chưa chắc/đôi khi quên, cần scaffold cụ thể, mất tập trung khi nghe thụ động lâu. Không mặc định khả năng cố định; đánh giá lại theo bài.
- Từng cụm: thấy mục tiêu/điều thú vị → quan sát/dự đoán/tìm hiểu/thực hành → nêu ý nghĩa → Recall không nhìn mẫu (ảnh/từ khóa từng bước) → ôn tập ít câu đa dạng và được sửa sai → kết nối với nội dung tiếp theo.
- Không yêu cầu mọi slide phải nhập form. Không dùng Inquiry-Based Learning cho tất cả khái niệm; chỉ dùng khi đủ lý do. Nội dung đơn giản có thể dạy thẳng, nhưng học sinh vẫn cần được trình bày lại.
- Trò chơi đầu/cuối, vẽ lại mind map sau buổi, flashcards trước buổi sau, teach-back; số lượng hoạt động vừa sức.
- Website dạng slide HTML thuần, đủ lớn, giao diện theo chủ đề, không header che; VI/EN khi dịch thật; interaction chạy được. Với DNS ưu tiên học sinh mở browser thật để khám phá, không chỉ mô phỏng.

## D. Bài Cookies — lịch sử các mốc chính
1. Skill08 từ giáo án 42 phút core cũ; Skill09/Skill10 có bản 22 màn rồi bản đồng bộ 25 màn.
2. Người dùng yêu cầu **mỗi phần kiến thức có Active Recall + Quiz đa dạng**; định nghĩa v3.5.3 chuyển thành 30 màn, 4 cặp cốt lõi.
3. Người dùng phê duyệt **54 phút 30 giây** (3.270 giây) core ngày **17/11/2026**, thay cho 42 phút. Không gồm P00/P07 và recovery tùy điều kiện.
4. Skill11 v1.1 30 màn có lưu tiến độ, quiz, recall, EXIT chưa chấm; Skill12 phát hiện đường bỏ qua nhanh, sai phản hồi; Skill11 v1.2 sửa checkpoint và mô phỏng A2-04.
5. Skill13 độc lập kiểm định v1.2: **29/30 PASS, `RELEASE_BLOCKED / REVISE_REQUIRED`**. Gói audit ở `Cookies_Skill13_FinalAudit_2026-11-17.zip`; 7 issue ở `13-issue-register.csv`.

**Hai lỗi P1 còn lại**: (1) nhảy mục lục qua màn Recall/Quiz không xác nhận; (2) thiếu giải thích và kiểm tra đầy đủ việc gửi lại cookie ID và khả năng hệ thống liên hệ nhiều lượt truy cập (Tracking). **P2 và pending**: modal focus, i18n VI/EN hoặc miễn trừ, xóa tiến độ trên máy chung, làm sạch metadata hợp đồng, thử nghiệm thiết bị/học sinh. Không suy rằng persistent cookie nào cũng tracking. Không tự chấm EXIT. 

## E. Bộ MT1 cho buổi học đa chủ đề — trạng thái
- Toàn bộ 13 định nghĩa skill đã được nâng cấp thành MT1, bổ sung hệ: `lesson_session → topic → knowledge_section → knowledge_unit`.
- Một buổi có thể gồm DNS → HTTP/HTML → Cookies nhưng phải dựa vào tiền đề thật, chuyển tiếp thật, bài transfer cuối buổi. **Không ghép ba website rời**.
- Mỗi section `CORE` có một cặp Recall → Review. Các knowledge unit nhỏ không mặc nhiên có hai màn riêng. Câu ôn tập thường 2–4 và đa dạng; điều chỉnh theo mức độ nặng, học sinh, tải nhận thức. Thuộc tính `topic_id/section_id/objective_ids` xuyên mọi kỹ năng.
- Có budget tổng, hoạt động đầu/cuối, bridge, dữ liệu quiz học sinh không mang teacher key, kiểm skipping và EXIT. Thời gian thay đổi phải có phê duyệt.
- Mẫu **120 phút** chỉ là dữ liệu hồi quy, không phải lịch dạy đã chốt. **25/25 ca kiểm tra cấu trúc** đạt, nhưng chưa chạy toàn pipeline để tạo website cho một buổi nhiều chủ đề thật.
- `main` không được nhập nhánh MT1; nếu muốn dùng làm chuẩn vận hành, cần xác định branch/ref rõ ràng hoặc yêu cầu merge sau duyệt.

## F. Các task còn mở để chat mới lựa chọn
**Task A — Cookies release repair**: sửa 7 issue Skill13 trên Skill11 v1.2 trong nhánh mới; bổ sung kiểm tra tracking (Skill03/09/10/11), phản hồi input UI, test điều hướng menu, a11y dialog, xóa localStorage, i18n/ngoại lệ, metadata. Chạy lại Skill12 và Skill13. Cần pilot Windows/học sinh trước phát hành.

**Task B — Buổi học đa chủ đề thật**: chọn phạm vi và thời lượng cụ thể, chạy Skills 01→13 MT1 tuần tự; chỉ chạy một skill nếu người dùng yêu cầu; nghiên cứu đúng nguồn SGK và thông tin thực tế, sản xuất assets đủ status, học sinh hoạt động tích cực, QA end-to-end, không dùng buổi mẫu 120 phút làm giáo án thật.

**Task C — Vận hành kho dự án**: giữ dữ liệu GitHub/Drive đồng bộ, cân nhắc nhập nhánh đã duyệt vào main, xuất bản website chỉ khi đạt kiểm định; tránh tuyên bố kết nối tự đồng bộ giữa các cuộc chat.

## G. 3 nhiệm vụ trong cuộc trò chuyện hiện tại
- (1) Chạy Skill13 — **đã thực hiện**, kết quả chưa đạt phát hành.
- (2) Nâng cấp 13 skill cho bài nhiều chủ đề — **đã tạo MT1**; kiểm thử cấu trúc, chưa pilot thực tế.
- (3) Sao lưu cho cuộc trò chuyện mới — **bản handoff này + ZIP snapshot**. Chưa bao gồm nguyên văn ChatGPT export hay toàn bộ remote repo/Drive.
