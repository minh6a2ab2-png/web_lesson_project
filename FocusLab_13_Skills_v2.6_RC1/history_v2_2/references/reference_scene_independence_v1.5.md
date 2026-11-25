# QUY CHUẨN ONE_TOPIC v1.5 — MÀN ĐỘC LẬP, KHÔNG CUỘN, NÚT MÔ HÌNH RÕ RÀNG

**Trạng thái:** PROPOSED_NEEDS_APPROVAL. Ngày: 22/11/2026. Phạm vi: thiết kế bài giảng cho **một nội dung kiến thức**; giữ nguyên các bản Cookies v1.2/v1.3/v1.4 và MT3 nhiều nội dung.

## A. Khác biệt cốt lõi so với bản v1.4

- **Loại bỏ hẳn `scene_id:part_id`, `Phần 1/2`, nút Next nội bộ trong một màn.** Khi nội dung quá dài phải THIẾT KẾ LẠI: tách thành các `scene_id` độc lập với mục tiêu, tên, câu hỏi, sản phẩm, chiến lược trình bày khác nhau, không sao chép một khối và chia đôi chỉ vì giới hạn chiều cao.
- **Không biến sự kiện kỹ thuật (vượt chiều cao) thành ranh giới sư phạm một cách máy móc.** Cần kiểm tra xem các thông tin bắt buộc so sánh đồng thời có bị tách ra không. Nếu có, thiết kế bố cục cô đọng hoặc mô hình tích hợp thay vì cắt đôi.
- `scene_id` của mỗi màn bền vững, `scene.kind` theo hành động nhận thức (OBSERVE, DIAGNOSE, RECOVERY, INTRODUCTION, TEACH, EXPLORE, COMPARE, PRACTISE, RECALL, REVIEW, RECALL_TEACH_BACK, ASSESS_INTRO, ASSESS). **Không ấn định** số màn 30/31/43 cho nội dung mới.

## B. Hợp đồng bố cục (bắt buộc)

1. **Một màn = một viewport**; không có thanh cuộn dọc/ngang của trang hoặc vùng nội dung chính. Dùng shell cao `100dvh`, vùng bố cục `minmax(0, 1fr)`, footer `fixed` giữ Previous/Next tại cùng tọa độ tương đối trên mọi màn. Dùng safe-area-inset khi cần.
2. Nghiêm cấm giải pháp `overflow:hidden` khi có chữ, đáp án, mô hình, nút bị che khuất: tiêu chí song song `NO_SCROLL` + `NO_CLIP` + `READABLE_TEXT` + `FIXED_NAV`.
3. Thứ tự giảm tải có ý nghĩa: (a) bỏ chrome thừa, (b) ưu tiên một nhiệm vụ, (c) bố cục 1/2 cột theo viewport, (d) tóm lược phần cần biết và hiện thông tin phụ trong thẻ chú giải/popup **không bắt buộc**, (e) khi vẫn quá tải, thiết kế thành scene mới **với vai trò học tập riêng**. Không dùng phóng thu nhỏ toàn bộ UI đến cỡ chữ không đọc được; không làm học sinh đợi hiệu ứng.
4. Popup/modal phải có lối đóng tự nhiên, hiển thị đầy đủ trong viewport hoặc tổ chức lại nội dung thành màn tương tác riêng, không có nội dung bị ẩn. Tooltip hover tự đóng khi bỏ hover, có tương đương keyboard/tap; không bắt phải nhấn X.
5. Sử dụng motion có mục tiêu nhận thức (signaling, flow, trước/sau, quan hệ nguyên nhân–kết quả), theo hành động người học; tắt/giảm chuyển động được, không flash liên tục. Mô hình kỹ thuật phải thay đổi trạng thái thật khi người học thao tác.

## C. Hợp đồng nút và tương tác (bắt buộc)

- **Một hành động / một nhãn rõ ràng / một vị trí chính.** Không hiển thị đồng thời nút “Thử”, “Thử mô hình”, và “Chạy mô hình” nếu trỏ về cùng một mô phỏng.
- Phân biệt ba lớp hành động: `OBSERVE_ACTION` = quan sát/dự đoán; `MODEL_ACTION` = thao tác mô hình trực tiếp (ưu tiên hiển thị inline; nếu popup là hợp lý thì một cửa mở duy nhất); `ASSESS_ACTION` = trả lời/đối chiếu/nộp bài. Nhãn động từ phải mô tả thao tác thực, ví dụ “Chọn tiếng Việt”, “Gửi yêu cầu”, “Đổi thời hạn Cookie”, không phải “Thử”.
- Với mô hình inline đã có nút điều khiển, không thêm CTA mở popup thứ hai. Nếu một ảnh đóng vai trò mở mô hình thì hiển thị một nhãn rõ trên ảnh, không lặp ở header.
- Mỗi mô hình bắt buộc có `model_id`, mục tiêu, đầu vào, sự kiện, trạng thái trước/sau, đầu ra quan sát, nút reset/lặp nếu cần, câu hỏi dự đoán và bằng chứng người học làm được; cấm mô hình tĩnh giả làm tương tác.
- `DIAGNOSE` đúng: mở kiến thức nền minh họa ngắn; sai: phản hồi và đường Recovery; `INTRODUCTION` giải thích công cụ/giải pháp trước TEACH khi cần; Recall/Review/EXIT không mở mô hình trợ giúp lộ đáp án trước lượt thử độc lập.

## D. Hợp đồng điều hướng và đánh giá

- Previous/Next luôn cố định, ưu tiên điều hướng theo **scene_id thực**. Không còn trạng thái page/part ẩn. Giữ dữ liệu câu trả lời và lựa chọn khi qua lại nhiều scene theo đúng mục tiêu.
- Mọi đường vào màn (Next/Previous/TOC/keyboard/resume/deeplink) phải qua cùng điều kiện (guard). Giữ Active Recall → Review Quiz, điều kiện EXIT; không tự chấm `MASTERED` khi người học chỉ bấm Next.
- Tài liệu thiết kế phải chỉ ra: `scene_id`, `kind`, `objective_id`, `student_task`, `focus_target`, `layout`, `model_id` (nếu có), `model_action`, `completion_gate`, `next_scene_id`, `state_dependency`, `viewport_fallback` và `evidence`.

## E. Tiêu chí QA và trạng thái nghiệm thu

- Kiểm tra **mọi scene** trên ít nhất 1280×720, 900×600, 390×844, 360×640, 640×360; đo `scrollWidth`, `scrollHeight`, bounding rect của header/main/footer/CTA/modal/controls, kiểm tra chữ không bị cắt và nhấn được.
- Kiểm thử hành vi: không `Part x/y`, Next/Previous cố định; không duplicate CTA; mô hình thực sự thay đổi state; modal đóng được; dữ liệu đáp án qua scene được bảo toàn; rào chắn Recall/Review/EXIT không bị vượt qua.
- Có kiểm tra trực quan và thử trên thiết bị thực khi có thể; DOM geometry **không đủ** xác nhận khả năng đọc, chất lượng sư phạm hay tính đúng mô hình.
- Trạng thái: `DRAFT` / `PROTOTYPE` / `NEEDS_REVIEW` / `TESTED_AUTOMATED` / `VERIFIED_IN_PRACTICE` / `BLOCKED`. Không đánh đồng TESTED_AUTOMATED với VERIFIED_IN_PRACTICE.

## F. Thứ tự áp dụng

Quy chuẩn v1.5 này **thay thế hoàn toàn** phần bổ sung v1.4 về `part_id`, nhưng **kế thừa** các quy tắc tập trung điểm nhìn, hiệu ứng nhẹ, OBSERVE/DIAGNOSE/INTRODUCTION và mô hình tương tác của bản v1.3. Nếu định nghĩa Skill kế thừa nói về nhiều topic, chỉ lấy làm tài liệu tham khảo; phạm vi thử này là một knowledge topic.
