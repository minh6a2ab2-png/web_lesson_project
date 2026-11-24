# Quy tắc hợp nhất — ONE_TOPIC FocusLab v2.4.1 (24/11/2026)

**Hiệu lực:** bắt buộc cho cả 13 `skills/skillXX/SKILL.md`. Kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4; lịch sử gốc có MT2-FROZEN để sản xuất **một nội dung kiến thức** tại một thời điểm. Đây là *bản định nghĩa*, không xác nhận đã chạy bài thật hay website đã qua nghiệm thu. Bản Cookies v1.2 `RELEASE_BLOCKED` vẫn là mốc lỗi cần kiểm soát.

**Áp dụng bắt buộc `GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); các điều khoản này thay mọi quy tắc footer, nhận diện và Recall/Review cũ xung đột.**

Đọc `EXECUTION_AND_HANDOFF.md` cho lineage, output, ID và trạng thái v2.4.1.

## 0. Phạm vi, ưu tiên, trách nhiệm
- `ONE_TOPIC`: một `topic_id` trong một lượt chạy. Có thể có nhiều `section_id` CORE của chính topic đó nếu thực sự cần. Không bắt buộc bridge DNS→HTTP→Cookie và không gộp nhiều chủ đề chỉ để đủ buổi.
- Mức ưu tiên: chỉ đạo cụ thể của người dùng > quy tắc an toàn/chính xác > **policy ONE_TOPIC này** > `skills/skillXX/SKILL.md` > tài liệu MT2 lưu trong `legacy/`. Nếu có mâu thuẫn về nội dung đa topic của MT2, áp dụng `ONE_TOPIC` cho lượt chạy này; không sửa bản MT3 đa topic.
- Nguồn trình bày: ONE_VIEWPORT v1.5 và Direct Learning v2.3 thay toàn bộ reveal cũ; motion/model v1.3 được kế thừa khi không mâu thuẫn.
- `lesson_id`, `topic_id`, `section_id`, `ku_id`, `objective_id`, `scene_id`, `activity_id`, `asset_id`, `model_id`, `question_id` phải nhất quán và truy vết. Không tái dùng ID cho một đối tượng khác, không viết `scene_id:part_id`.
- Mỗi skill cần xuất: `skill_id`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`; chưa chạy thực tế ghi `NOT_RUN`, chưa test ghi `NOT_TESTED`.

## 1. Kiến trúc học tập
- Người học chủ động: **dự đoán → tương tác/quan sát → giải thích bằng chứng → chuẩn hóa → thử lại/vận dụng** khi nội dung là cơ chế; định nghĩa đơn giản có thể TEACH ngắn rồi teach-back. Không ép inquiry cho mọi KU.
- Cuối mỗi CORE: LEAD_IN khi cần → ACTIVE_RECALL (từng từ khóa + hình rồi câu hỏi, không nộp) → LEAD_IN không gợi đáp án → REVIEW_QUIZ (ít nhất hai dạng câu hỏi đóng khi phù hợp). EXIT độc lập, không lộ đáp án; giáo viên quan sát lời giải thích ngoài web.
- Giữ năm thành phần nếu có giá trị sư phạm: Active Recall, Game, Mindmap, Flashcard, Learning by Teaching. Game theo buổi (không lặp máy móc); tổ chức hoạt động theo 4 bước Công văn 5512: chuyển giao → HS thực hiện → báo cáo/thảo luận → đánh giá/kết luận.
- Số màn sinh ra từ **mục tiêu, nhiệm vụ, khả năng đọc và bằng chứng**; không đặt một chỉ tiêu số màn cố định hoặc phân nhỏ kiểu `Part 1/2` khi chỉ vì layout tràn.

## 2. Scene Kind / Layout là hai hệ khác nhau
15 `scene.kind` chính thức: `PROBLEM_CONTEXT`, `LEAD_IN`, `OBSERVE`, `DIAGNOSE`, `RECOVERY`, `INTRODUCTION`, `TEACH`, `EXPLORE`, `COMPARE`, `PRACTISE`, `RECALL`, `REVIEW`, `RECALL_TEACH_BACK`, `ASSESS_INTRO`, `ASSESS`.
- `scene.kind` mô tả **hoạt động nhận thức**; `scene.layout_mode` (SLIDE/STORY/LAB/MAP/FOCUS/ASSESSMENT hay biến thể hợp lý) mô tả cách bố trí, không đánh đồng hai khái niệm.
- `PROBLEM_CONTEXT` (tùy chọn) đặt **tình huống có nghĩa** trước khi làm hoạt động quan sát: **tiêu đề, bối cảnh cụ thể, thực trạng/nhu cầu, khoảng trống chưa giải thích, hình minh họa có mục đích và câu hỏi/vấn đề**. Nguồn phải có căn cứ; ví dụ giả định phải được ghi rõ. Không lộ câu trả lời cần khám phá ở scene sau.
- Màn đặt vấn đề phải có **cầu nối từ bối cảnh sang hoạt động mới**, thay vì chỉ một câu hỏi. Chỉ tách `PROBLEM_CONTEXT → OBSERVE/EXPLORE/DIAGNOSE` nếu hai scene có **student_task/evidence nhận thức khác nhau**. Trường hợp đơn giản gộp bối cảnh vào OBSERVE. Cấm dùng hai scene để giấu tràn chữ hoặc tạo hai câu hỏi trùng lặp; hai scene có thể chung activity_id của giáo án.
- PROBLEM_CONTEXT hiển thị ngay tiêu đề, đoạn bối cảnh, minh họa, vấn đề; không in các nhãn trường dữ liệu. Next chủ động.
- `INTRODUCTION` được dùng có chọn lọc trước TEACH khi giới thiệu **tên công cụ/giải pháp/khái niệm mới**; gồm tên, lợi ích, ví dụ và minh họa ngắn, không thay phần TEACH cốt lõi. Không ép INTRODUCTION cho mỗi TEACH.
- `OBSERVE`: câu hỏi tình huống hoặc lời dẫn là điểm nhìn **rõ ràng nhất**, ở trung tâm vùng trình chiếu hoặc thành spotlight; dữ kiện vẫn phải quan sát được khi mở đủ nội dung.
- `DIAGNOSE`: đúng → hiện modal ngắn kiến thức cũ với minh họa/mô hình liên hệ bài mới; sai → phản hồi và đi `RECOVERY` có thể thử lại. Không kéo dài chẩn đoán thành một bài dạy mới, không tự gọi 'đã nắm vững' chỉ từ một câu.
- RECALL/REVIEW/ASSESS không tự lộ đáp án; Next tự do không làm phát sinh kết quả đúng hay mastery.

- `LEAD_IN` là màn dẫn nhập trước cụm hoạt động mới; tái sử dụng PROBLEM_CONTEXT/ASSESS_INTRO khi đã đủ chức năng, không thêm trước từng câu.

## 3. Hợp đồng thị giác/hiệu ứng
- Áp dụng `DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07) bắt buộc: render tất cả nội dung hợp lệ ngay; highlight tiêu đề chậm 3 giây rồi trở lại bình thường; không timer reveal, không nút hiện tất cả. Giảm chuyển động theo hệ thống; không tự chạy model hoặc lộ đáp án. Không in nhãn sư phạm; ưu tiên kiến thức chuẩn hóa và inline keyword tooltip.
- `attention_plan` vẫn mô tả focal target nội dung; title highlight không làm gián đoạn hoạt động. Recall chỉ đổi keyword/câu hỏi bằng thao tác chủ động.

## 4. Viewport-fit, fixed navigation và không cắt nội dung
- **Một scene = một viewport**; tối thiểu duyệt tại **1280×720**, **1366×768**, **1600×900**, **1920×1080**; stress test **900×600**, **390×844**, **360×640**, **640×360** và zoom 200%. Thiết kế dựa trên **visual viewport thực tế** thay vì số pixel vật lý của màn hình.
- Desktop mặc định 100%: không cuộn trang/nội dung chính; không che khuất chữ, mô hình, nút hoặc đáp án. `overflow:hidden` không được dùng làm cách che lỗi; `NO_SCROLL ∧ NO_CLIP ∧ READABLE_TEXT ∧ FIXED_NAV` phải cùng đúng. Tại màn hình nhỏ cố giữ một viewport qua thiết kế lại; khi phóng to chữ hoặc có nhu cầu trợ năng, ưu tiên **không mất nội dung**, cho phép cuộn có kiểm soát như fallback, báo rõ ngoại lệ thay vì khóa nội dung.
- Previous/Next là hai nút nổi fixed riêng ở hai góc dưới; không footer/thanh/hàng chứa nút. Chỉ số ở header. Safe area và gutter/padding cục bộ tránh che CTA; không layout shift.
- Để nội dung vừa viewport: giảm chrome thừa → xác định một nhiệm vụ → bố trí 1/2 cột → rút gọn mà không thiếu kiến thức → đưa thông tin bổ trợ *tùy chọn* vào tooltip/modal → nếu vẫn quá tải, thiết kế **scene độc lập có mục tiêu/sản phẩm riêng**. **Không** dùng `scene_id:part_id`, `Phần 1/2`, Next nội bộ chỉ vì tràn; **không** thu nhỏ font quá mức hay giấu nội dung chính trong popup bắt buộc.
- Mỗi scene phải có tên/mục tiêu/nhiệm vụ/sản phẩm rõ; hai điều kiện khác nhau không được tạo hai màn giống nhau chỉ đổi ảnh. Các nội dung **cần so sánh đồng thời** phải cùng có mặt trên một màn hoặc trong mô hình so sánh phù hợp.

## 5. Tooltip, modal và CTA
- Tooltip chỉ là từ khóa in đậm trong câu; bong bóng phía trên, tự ẩn khi rời hover vùng từ + popup; focus/touch/Escape tương đương, không panel riêng.
- Modal kiến thức nền DIAGNOSE: `prior_knowledge`, `illustration`, `link_to_new_topic`; ở trung tâm, có nút đóng/tiếp tục, Escape/focus trap/restore focus; không tự đóng khi đang đọc. Không lấy modal làm chỗ giấu phần kiến thức CORE bắt buộc.
- Một hành động → **một CTA chính** có nhãn động từ cụ thể: “Gửi yêu cầu”, “Chọn tiếng Việt”, “Xóa Cookie”. Không để đồng thời nhiều nút “Thử / Thử mô hình / Chạy mô hình” cùng một chức năng. Mô hình inline có điều khiển rồi thì không thêm CTA mở chính nó lần nữa.

## 6. Mô hình tương tác và học liệu
- Mọi học liệu **được phân loại `MODEL_REQUIRED` — mô hình giải thích cơ chế/cách thức hoạt động** phải tương tác được và cho thấy **thay đổi trạng thái có thật**: mục tiêu, đối tượng, `model_id`, biến đầu vào, hành động, trước→sau, thông tin quan sát, kiểm thử thông thường/ngoại lệ, reset/replay/step nếu phù hợp, câu hỏi dự đoán/bằng chứng.
- Không ép ảnh, sơ đồ tĩnh minh họa một định nghĩa thành mô hình. Nhưng một **sơ đồ cơ chế** không được giả làm mô phỏng với nút chỉ chạy hoạt ảnh trang trí. Mô hình phải hoạt động cả khi tắt animation: chuyển trạng thái tức thời và rõ ràng.
- Có mô tả/alt/caption/transcript VI/EN, độ chính xác kỹ thuật, nguồn/bản quyền, phương án offline. Tạo tệp thật tại Skill07 khi khả thi, thực thi tích hợp tại Skill11, kiểm định độc lập tại Skill13.
- Phân biệt `READY_REFERENCE`, `READY_ASSET`, `PROTOTYPE`, `SPEC_ONLY`, `BLOCKED`; không công nhận có mô hình chạy thật chỉ vì có storyboard hoặc screenshot.

## 7. Kiểm soát điều hướng, QA và trạng thái
- Điều hướng dùng chung router không khóa học; `SEEN`, `UNANSWERED`, `INCORRECT`, `CORRECT`, `MODELED` khác `MASTERED/VERIFIED`; không yêu cầu lý do bỏ qua.
- Scene có ID/kind/objective/task/opening_cue/attention_plan/display/layout/content_blocks/model_id/model_action/next_scene_id/state_dependency/viewport_fallback/evidence; `completion_gate=NON_BLOCKING` chỉ là tương thích dữ liệu, không khóa điều hướng.
- QA qua DOM geometry + ảnh + thao tác: direct t=0, title highlight 3s, reduced motion, fixed nav, tooltip, Recall, quiz, model, offline, VI/EN, zoom; geometry không chứng minh học được.
- Gate: `DRAFT`, `PROTOTYPE`, `NEEDS_REVIEW`, `TESTED_AUTOMATED`, `VERIFIED_IN_PRACTICE`, `BLOCKED`; tách `STATIC_DEFINITION_PASS`, `BROWSER_PASS`, `FIELD_VALIDATED`, `RELEASE_PASS`. Chưa test thực không tự ghi PASS.
- Block release nếu CORE thiếu/cắt, model không tương tác, duplicate CTA, khóa điều hướng trái chính sách, lộ đáp án, không tắt motion, không fixed nav desktop, VI/EN thiếu hoặc vi phạm DL01–DL07 ảnh hưởng học tập.

## 8. Quy tắc thực thi
- Khi chạy bài giảng, mặc định **một Skill tại một thời điểm** để duyệt; khi người dùng cho phép một chuỗi thì làm theo phạm vi đó. Chỉnh bộ định nghĩa không phải chạy bài giảng, không cần dừng sau mỗi tệp. Không tự vượt BLOCKED hoặc nhận thay approval. Sửa lỗi phải chỉ rõ Skill sở hữu và ảnh hưởng downstream.
- Học liệu, bản ghi QA và file phải tồn tại thực; mỗi asset/đầu ra có `source`, `sha256`, đường dẫn, tình trạng thử. Không ghi đè nguồn MT2/MT3/Cookies; lập phiên bản mới.
