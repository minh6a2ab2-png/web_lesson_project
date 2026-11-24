---
name: learner-profile-fit-and-activity-design
version: 2026.11-MT2-FROZEN
role: Skill 04 / 13 — Unified teaching pipeline
status: DEFINITION_MT2_CONSOLIDATED_AWAITING_REAL_LESSON
compatibility: RR-GATE-v1.0 + MT-CONTRACT-v1.0 + UNIFIED-RULES-MT2
source_basis: Cookies_Skill04_v1_ProfileFit.zip
---

# SKILL 04 — Learner Profile Fit & Activity Design

## Nhiệm vụ và ranh giới
Chọn phương pháp theo từng section và người học, cân bằng chủ động và giải thích trực tiếp; thiết kế luồng nhận thức xuyên nhiều chủ đề.

**Quy tắc áp dụng:** một buổi (`lesson_session`) có thể gồm nhiều `topic`, mỗi topic có một hoặc nhiều `knowledge_section`. `CORE_LEARNING section` hoàn thành bằng **Active Recall → Review Quiz**, không tính cho mỗi bullet/khái niệm nhỏ. Các giai đoạn đầu không được tự ép số màn/hoạt động. Mọi công việc phải bảo toàn ID và truy vết giữa topic và mục tiêu.

## Đầu vào theo cấp
- `session_manifest` có mục tiêu/chân dung người học/time/approvals.
- Kết quả các skill trước theo mã `topic_id`, `section_id`, `ku_id`, `objective_id` phù hợp vai trò.
- `MT_CONTRACT.md`, `RR-GATE` và `section_map` cho toàn buổi; thiếu nguồn phải ghi `MISSING`, không tự giả định.

## Quy trình bắt buộc
1. Rà hồ sơ học sinh có mức tin cậy; không biến nhận xét nghe lâu buồn ngủ thành nhãn năng lực cố định.
2. Chấm độ nặng/tiên quyết/năng lực nền theo section; dùng rubric lựa chọn phương pháp như hiện có, không chọn IBL đồng loạt.
3. Phân biệt định nghĩa gọn dùng TEACH ngắn, khái niệm hoạt động dùng PREDICT–EXPLORE–EXPLAIN, khái niệm phức hợp dùng nhiệm vụ điều tra; luân phiên tránh mệt mỏi.
4. Thiết kế Recall 2–4 cue tự nói/ghi và Quiz 2–4 câu ≥2 dạng theo từng section; phân nhánh trợ giúp với điều kiện quay lại.
5. Đánh giá tải nhận thức toàn buổi, vị trí nghỉ/chuyển mạch, mục tiêu không chồng chéo và quyền sử dụng công cụ thật khi khả thi.


## Đầu ra, giữ nguyên tên và ID
- `04-method-rubric-by-section.csv`
- `04-activity-and-assistance-plan.md`
- `04-learner-load-map.md`
- `04-recall-review-method-design.json`


## Cổng chặn bàn giao
- **G1:** Mỗi section CORE có căn cứ chọn phương pháp rõ và cân nhắc một phương án nhẹ hơn.
- **G2:** Không biến 3 topic thành 3 chuỗi IBL dài nếu không đủ thời gian; không loại học sinh khỏi hoạt động chủ động.

- **G3:** Không nhận CLAIM thực tế từ `SPEC_ONLY`, `NOT_RUN` hoặc `SELF_REPORTED`; scope/độ dài thay đổi phải có CR.


## Hợp đồng kiểm tra ngang (trước khi bàn giao)
- `lesson_id` thống nhất, `section_id` thuộc `lesson_session`, thứ tự tiên quyết không bị đảo.
- Mỗi phần CORE có `recall_scene_id` rồi `review_scene_id`; lưu chứng cứ, feedback, phương án giấy và thời lượng.
- Mọi thay đổi không đúng nguyên mẫu buổi Cookies đều phải chủ động điều chỉnh; không hardcode 30 màn hoặc 54 phút 30 giây thành tiêu chuẩn chung.
- Đọc `../../policy/MT_CONTRACT.md`, `../../policy/GATES_AND_ROUTES.md` và `../../policy/UNIFIED_RULES_MT2.md` khi cần các trường dữ liệu, phân quyền và trạng thái nghiệm thu.


## Khả năng tương thích với bản đã dùng cho Cookies
- Nguồn yêu cầu Recall và bảo toàn năng lực cũ được lưu ở `BASELINE_NOTES.md` cùng thư mục để kiểm toán. Bản MT1 mở rộng sang nhiều topic, không gỡ các cổng an toàn đã có.

## Quy tắc nhịp buổi học bổ sung
- Đặt **một** game ôn tập ở đầu hoặc cuối toàn buổi, không lặp game cho từng topic; câu hỏi đa dạng nhưng phù hợp nền của học sinh.
- Sau giờ: mindmap vẽ lại từ trí nhớ, flashcards định nghĩa trước buổi sau và một lần teach-back.

## Bổ sung thống nhất MT2 — 17/11/2026
Rubric chuẩn 100 điểm: độ phù hợp mục tiêu/nhận thức 25; nền kiến thức và scaffold 25; mức HS chủ động giải thích 20; giá trị thực tiễn 15; thời gian/tải nhận thức 10; khả thi công cụ 5. Chấm >=2 phương án mỗi CORE section; không giả định IBL luôn hơn hướng dẫn ngắn.

**Handoff bắt buộc:** Đọc `../../policy/UNIFIED_RULES_MT2.md`, nhận output của skill trước; phát hành đúng output của skill này có trạng thái TESTED/NOT_TESTED. Dừng nếu core knowledge chưa nguồn, Recall/Review chưa khớp hoặc thiếu chứng cứ.


## Chuẩn hóa chất lượng MT2 — yêu cầu bổ sung (ưu tiên khi sử dụng)
- Bắt buộc chấm phương pháp cho *từng section*, cân nhắc **độ khó/mức tư duy 25%**, **nền tảng và rào cản của học sinh 25%**, **giá trị tự khám phá 20%**, **thời gian/tải nhận thức 15%**, **học liệu và khả năng thao tác thực 15%**. Trình bày 2 lựa chọn, điểm 0–5 mỗi tiêu chí và lý do chọn; trọng số là mặc định demo của rubric, được điều chỉnh có lý do theo học sinh/bài học.
- Nội dung đơn giản TEACH ngắn rồi HS nói lại; cơ chế có thể quan sát PREDICT→EXPLORE→EXPLAIN; kiến thức phức tạp inquiry có dẫn dắt, không dùng inquiry đồng loạt.
- Với học sinh nền chưa vững: câu lệnh mỗi lần 1–2 việc, cho scaffold theo tầng, nhịp hoạt động ngắn, yêu cầu HS quan sát/thử/trình bày; không biến hồ sơ người học thành nhãn năng lực cố định.
- Recall 2–4 cue theo thứ tự (nói → viết/vẽ → đối chiếu sau khi tự thử), Quiz 2–4 câu ít nhất 2 hình thức sau **mỗi CORE section**, game toàn buổi chỉ một lần; phân bổ mindmap, flashcard, teach-back ngoài buổi.
- Cần tiêu chí giảm tải và hỗ trợ khi HS làm sai/không sẵn sàng, quy tắc quay lại lộ trình.

### Cách đóng cổng và bàn giao sang bước tiếp
- Trả về manifest gồm `skill_id`, `version`, `session_id`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; nếu chưa chạy trên bài thật phải ghi `NOT_RUN`, không sinh sản phẩm minh họa giả.
- Khi một trường cốt lõi chưa có, trả `BLOCKED` hoặc `NEEDS_INPUT` và mô tả phương án bổ sung; không âm thầm thay nội dung/ thời lượng/phương pháp đã được duyệt.
- Trích dẫn tài liệu của người dùng và nguồn truy cập được; mọi bản nháp/bản trước được giữ để kiểm hồi quy.
