# Direct Learning v2.3 — chuẩn bắt buộc liên Skill

Áp dụng mọi bài ONE_TOPIC; thay thế quy tắc nhịp hai pha, thu thập bài làm tự do và guard bắt buộc nộp ở v2.2. Các nội dung học thuật, 14 Scene Kind, 5512, một viewport, VI/EN, mô hình thật, trợ năng, offline và QA vẫn giữ nguyên. Tham chiếu lịch sử trong `history_v2_2/` và `legacy/` không phải đầu vào active.

## DL01 — Direct Display và Title Attention
- Render toàn bộ khối được phép ở lần render đầu; không timer ẩn nội dung, skeleton chờ theo scene, nút Hiện tất cả, hay tự chuyển cảnh. Đáp án/feedback chưa kích hoạt, modal DIAGNOSE, trạng thái mô hình tương lai và giai đoạn Recall chưa được chọn vẫn có điều kiện sư phạm riêng, không phải delay.
- Chỉ tiêu đề chính chuyển màu nền/chữ chậm, 1–2 chu kỳ trong 3000 ms, kết thúc trở về màu bình thường. Không làm chữ biến mất, không nháy gắt, không đổi kích thước, không layout shift. Màu tương phản đủ ở mọi keyframe. Trigger khi vào scene khác, không chạy lại do đổi ngôn ngữ/chọn đáp án/rerender model. Hủy hiệu ứng cũ khi rời scene. Reduced motion: không pulse; có thể highlight tĩnh ngắn rồi trở về bình thường, hoặc tắt toàn bộ highlight. Không bắt đầu mô hình tự động. Giữ tùy chọn giảm/tắt chuyển động mô hình.
- Hợp đồng `display.mode=DIRECT`, `delay_ms=0`, `title_highlight.duration_ms=3000`, `cycles=1|2`, `auto_advance=false`, `restart_on_rerender=false`. Không dùng trường reveal cũ làm cấu hình active.

## DL02 — Giao diện sạch, không nhãn sư phạm
- Không render nhãn phân loại hoặc tên trường dữ liệu như “Kiến thức cần nhớ”, “Bối cảnh”, “Thực trạng”, “Đặt vấn đề”, “Câu hỏi gợi mở”, “Nhiệm vụ”, “Kết luận”, “Minh chứng”, “CORE 01”, “TEACH”, “Scene Kind”, “Active Recall” chỉ để báo tên phương pháp; áp dụng cả bản EN (Key knowledge, Context, Current situation, Guiding question, Task, Conclusion, Evidence…). Không thay bằng badge nhãn trang trí; ngoại lệ v2.4: icon nhận diện kind cạnh tiêu đề theo GV02, không in tên kind. Các tên này có thể tồn tại trong giáo án, schema, mục kiểm định hoặc nội dung giáo viên, không xuất như nhãn UI học sinh.
- Giữ tiêu đề nội dung cụ thể, tên khái niệm, đề mục thực sự mang nghĩa học thuật, đơn vị đo, nhãn dữ liệu trên mô hình, nhãn điều khiển hữu ích, nguồn/caption cần thiết, câu hỏi và phản hồi. Không xóa đoạn văn bối cảnh hay kiến thức chuẩn chỉ vì bỏ nhãn.
- Định nghĩa/kết luận bắt buộc trình bày trực tiếp như SGK: câu hoàn chỉnh chính xác, từ khóa đậm, khoảng trắng, màu nền/viền nhẹ hoặc bố cục riêng; không cần heading “Kiến thức cần nhớ”. Sau khám phá phải chuẩn hóa phần phải nhớ, không giấu trong tooltip hoặc chỉ mô hình. Phân tầng `core`, `support`, `prompt`, `teacher_only` ở dữ liệu, không in tên tầng.

## DL03 — Inline Keyword Tooltip
- Không có panel/glossary riêng, chip dấu hỏi riêng. Thuật ngữ nằm trong câu văn, in đậm; hover hiện bong bóng phía trên chính từ đó, tự ẩn khi rời vùng từ + popup. Không che nội dung chính, không đẩy layout; nếu thiếu chỗ thì clamp/flip phù hợp viewport. Focus bàn phím mở, Escape đóng; touch chạm mở/chạm ngoài đóng. Cung cấp nội dung accessible, VI/EN. Chú giải bổ trợ ngắn, không bắt buộc để hiểu CORE. Không lộ đáp án tại Recall/Review/Assess; tắt tooltip có thể spoil trong lượt độc lập.

## DL04 — Câu hỏi và điều hướng
- `PROBLEM` (đặt vấn đề), `GUIDING` (gợi mở): chỉ hiển thị câu hỏi tự nhiên, không ô trả lời, không nút ghi nhận, không checkbox xác nhận đã nói, không log cảm nhận/giả thuyết/lý do skip. Trả lời miệng tự nguyện/giáo viên quan sát ngoài website. `CONFIRMATION`: câu hỏi đóng có phản hồi, hỗ trợ single/multi-select, true-false, matching, ordering, hotspot, classification, fill-from-options; chọn dạng theo KU, ít nhất hai dạng phù hợp mỗi CORE review. Không ép nhập chữ vào bất kỳ màn học nào; tùy chọn nhập tên/URL trong mô hình thực sự là tham số kỹ thuật, không phải bài làm tự do.
- Điều hướng Previous/Next/TOC/keyboard/resume/deeplink thống nhất, tự do; không guard đòi hoàn thành quiz/model/recall hay nhập lý do. DIAGNOSE chọn sai vẫn được đề xuất RECOVERY, chọn đúng mở recap; có thể quay lại tuyến chính. Quiz chưa làm ghi `UNANSWERED`, sai `INCORRECT`, đúng `CORRECT`; xem scene `SEEN`, thao tác model `MODELED`; không tự `MASTERED`/`VERIFIED`. Chỉ lưu lựa chọn và tiến độ cần thiết; không bắt nộp bài tự do. Giáo viên có thể quan sát/đánh giá bên ngoài, không tự xác nhận thay họ. Lời giải assessment độc lập không tự lộ; key cần bảo mật thực sự không nằm trong student bundle; đáp án quiz luyện tập được xử lý cục bộ sau hành động check, không coi đó là bảo mật.

## DL05 — Active Recall không biểu mẫu
- Mỗi CORE kết thúc `RECALL → REVIEW`. RECALL: từng từ khóa kèm hình gợi nhớ không lộ đáp án thuộc nội dung vừa học, do HS/GV bấm tiếp/trước (không timer); sau từ khóa cuối, hiện tập câu hỏi gợi nhớ. Không chú giải/định nghĩa/đáp án, không ô nhập, không chấm, không nộp, không ép qua hết từ khóa mới cho Next. Trạng thái đang xem keyword/question không chứng minh ghi nhớ. REVIEW mới dùng câu hỏi đóng có phản hồi và sửa sai tự nguyện.
- Mindmap: ghép thẻ, nối mũi tên, sắp thứ tự; Learning by Teaching: sơ đồ và câu hỏi để giảng miệng; Flashcard lật tự do; game phục vụ review. Không ép self-rating, không biến thành form hành chính. Giữ cả 5 phương pháp có giá trị.

## DL06 — Không trùng màn / model view
- Mỗi scene có mục tiêu nhận thức riêng, nội dung chính, tác vụ, view và điểm khác biệt kiểm chứng được. Không đổi mỗi tiêu đề mà render lại cùng nội dung. Có thể tái dùng engine state nhưng cấu hình `model_view_id`, điều kiện và controls riêng; kiểm tra dữ liệu scene-specific thực sự được render. Audit cặp màn cùng model; gộp nếu không có mục đích độc lập.
- DNS minh họa: màn 09 là MISS-only, luồng 4 bước SGK, Step/Back/Play/Reset; màn 10 là so sánh cache HIT/MISS/EXPIRED có dữ liệu trạng thái, đường đi và bước bỏ qua, kết luận riêng. Cùng engine nhưng view khác, không ép hoàn thành tất cả trước khi Next. Tình huống SGK giản lược, DNS trả IP chứ không HTML.

## DL07 — QA và phạm vi
- Block P1 nếu còn delay ẩn nội dung, form phản tư bắt buộc, nav bị khóa bởi câu hỏi gợi mở, nhãn sư phạm dư thừa lấn át nội dung, thiếu kiến thức chính, Recall lộ lời giải, hai màn trùng nội dung hoặc model sai view; phân loại chính xác severity theo ảnh hưởng. Kiểm t=0, 1.5s, ≥3s, reduced motion, rerender/đổi scene nhanh, tooltip hover/focus/touch, quiz đa dạng, Recall keyword→questions, model độc lập, nav khi chưa trả lời, VI/EN, viewport, offline/storage và accessibility. Kiểm định định nghĩa/schema không đồng nghĩa runtime hay học sinh thật.

**Bổ sung có hiệu lực v2.4:** `GUIDED_VISUAL_STANDARD_V2_4.md` GV01–GV06.
