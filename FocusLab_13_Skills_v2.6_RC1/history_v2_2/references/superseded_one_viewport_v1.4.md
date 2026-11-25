# QUY CHUẨN ONE-VIEWPORT / FIXED-NAV — v1.4 · PROPOSED

**Phạm vi:** kiểm thử **một nội dung con** tại một thời điểm, theo chuỗi Skills 01–13. Kế thừa chuẩn Focus & Interactive Motion v1.3. Đây là bản đề xuất **chưa ghi đè** bộ MT2/MT3 đang lưu, chưa phải bản RELEASE_PASS.

## 1. Hợp đồng trình chiếu (hard requirements)

1. **Một trạng thái nhìn thấy = một khung nhìn.** `html`, `body`, `#app` và `stage` không có cuộn dọc/ngang. Không được chỉ đặt `overflow:hidden` để che nội dung vượt khung. Trạng thái xem phải chứa trọn toàn bộ thông tin/điều khiển tương ứng.
2. **Previous/Next cố định theo viewport** (không thuộc luồng cuộn nội dung), hiển thị xuyên suốt bài học và trên thiết bị cảm ứng. `position:fixed; bottom:0; left:0; right:0` hoặc giải pháp tương đương, có khoảng an toàn cho phần giao diện hệ thống.
3. **Mỗi màn có ba vùng:** topbar gọn, stage học tập có chính–phụ rõ, footer điều hướng cố định. Stage dùng không gian còn lại từ `100dvh - topbar - footer`; không dùng `min-height` cố định làm dài trang ở thiết bị thấp.
4. **Không làm mất kiến thức:** khi nội dung quá dày, ưu tiên bỏ nội dung trùng, chuyển chi tiết *không bắt buộc* sang popover/modal, chia các khối **theo trình tự học** thành `part 1/N`, chuyển bố cục đa cột → từng panel; sau cùng mới dùng giảm khoảng cách/cỡ chữ trong giới hạn đọc được. Không giấu văn bản, form, nút hoặc mô hình bên dưới vùng cắt.
5. `part` **không phải một scene mới** trong hồ sơ sư phạm: cần `scene_id`, `part_id`, `total_parts`, `focus_target`, `completion` và ràng buộc Next/Previous. Chuyển giữa các `part` phải không bỏ qua kiến thức hoặc sai trạng thái câu trả lời. Không tự đánh dấu `MASTERED` do chuyển part.
6. Nếu ở màn lớn có thể trình bày cùng lúc, giữ hai cột; nếu màn hẹp/thấp, chia từng panel **bằng nút Next/Previous cố định**, ghi nhãn `PHẦN x/y` rõ ràng. Người học không phải kéo trang hoặc đợi animation để đọc.
7. Popover giải thích, cửa sổ mô hình, kiến thức nền và hướng dẫn giáo viên cũng cần bố cục vừa vùng khả dụng; nếu quá dài, chia thành các bước hoặc tab *có nút rõ ràng*, không tạo vùng cuộn ẩn. Cửa sổ có thể đóng bằng Escape, có nút đóng, focus trở về hợp lý.
8. OBSERVE giữ câu hỏi tình huống làm điểm nhìn lớn nhất, DIAGNOSE giữ hồi tiếp và modal sau đáp án đúng, INTRODUCTION chỉ giới thiệu công cụ/giải pháp, mô hình có thể thao tác; không đánh đổi các yêu cầu trên lấy tiêu chí vừa khung.
9. Với chế độ giảm chuyển động, người học vẫn xem đủ trạng thái và chuyển part; điều hướng không lệ thuộc animation, hover, hay click chuột.

## 2. Thứ tự xử lý khi vượt khung (không dùng “ẩn phần thừa”)

A. Dọn lại thứ bậc: một tiêu đề, một điểm nhìn chính, giảm văn bản lặp nhưng **không** cắt mục tiêu/sai–đúng/điều kiện giải thích.

B. Tái bố cục: giảm chrome phụ, đổi 60/40 thành một panel, thay bảng quá rộng bằng lần lượt hai tình huống, giữ sơ đồ có quan hệ đúng; mô hình ưu tiên viewport hơn đoạn trang trí.

C. Phân đoạn: sinh các `part 1/N`, cùng `scene_id`; footer Next/Previous chuyển part trước khi chuyển scene. Trạng thái bài tập và điều kiện gate được giữ lại.

D. Điều chỉnh mật độ: dùng `clamp`, container/media queries, rút ngắn *đoạn dẫn phụ* nhưng không rút bớt nội dung lõi, tránh giảm cỡ chữ hàng loạt. Với màn quá thấp do zoom, có thể thêm part thay vì thu nhỏ dưới khả năng đọc.

E. Kiểm định: dùng `getBoundingClientRect`, `scrollHeight/clientHeight`, `scrollWidth/clientWidth` và ảnh chụp thật. Nếu chữ/vật thể bị cắt dù scrollbar không hiện, đánh dấu `BLOCKED_LAYOUT`.

## 3. Dữ liệu scene/part cần trao đổi giữa Skills

```json
{
  "scene_id": "A1-00",
  "kind": "INTRODUCTION",
  "viewport_policy": "ONE_VIEWPORT_NO_SCROLL",
  "attention_target": "Tên giải pháp Cookie",
  "parts": [{"part_id":"A1-00:P1","focus_target":"Giới thiệu công cụ"},{"part_id":"A1-00:P2","focus_target":"Ứng dụng và ví dụ"}],
  "fixed_nav": {"previous":true,"next":true,"part_before_scene":true},
  "model": {"mode":"interactive","manual_control":true},
  "overflow_fallback": "SPLIT_SEMANTIC_PARTS",
  "qa_status": "PROTOTYPE"
}
```

## 4. Kiểm thử bắt buộc / chứng cứ nghiệm thu

**Ma trận tối thiểu:** 1280×720, 1024×768, 900×600 (laptop thấp), 768×900, 390×844, 360×640, 320×568, 640×360 (cửa sổ thấp hoặc zoom). Sau đó thử màn hình trình chiếu thực tế, zoom trình duyệt, font-scale hệ điều hành và chế độ giảm chuyển động.

**Mỗi scene + mỗi part + mỗi trạng thái tương tác quan trọng** phải đạt: không có thanh cuộn viewport; không có text, mô hình hoặc nút bị cắt; Previous/Next nằm trong khung và không che nội dung; khi đổi kích thước vẫn giữ dữ liệu, có thể đi ngược; hỗ trợ chuột, chạm, bàn phím. Chụp ảnh các scene có mật độ cao: OBSERVE, INTRODUCTION, DIAGNOSE, REVIEW, EXPLORE, ASSESS.

**Các cổng chất lượng:** `PAGE_FIT_GUARD`, `FIXED_NAV_GUARD`, `NO_SILENT_CLIP`, `PART_STATE_CONSISTENCY`, `MODEL_VIEWPORT_FIT`, `MOTION_A11Y`, `ASSESSMENT_ISOLATION`. Bất kỳ lỗi cắt nội dung hoặc nút điều hướng rời viewport đều là lỗi mức **BLOCKER**, trả lại đúng Skill thiết kế/triển khai. Test cú pháp JavaScript **không** thay cho kiểm thử trực quan.

## 5. Tình trạng minh chứng ở pilot Cookies v1.4

31 scene gốc. Trên tám kích thước trong ma trận, trạng thái hiển thị sau khi phân panel được kiểm thử về overflow, nút cố định, mã JavaScript. **Chưa nghiệm thu trên người học thật, máy chiếu thực tế và toàn bộ trạng thái sau mỗi tương tác.** Các tính năng VI/EN và đường đánh giá cuối cần kiểm thử riêng trước khi đổi từ PROTOTYPE sang RELEASE_PASS.

Nguồn thực hiện: Cookies v1.3 PILOT → v1.4 One Viewport. Các tệp gốc v1.2 và nhánh MT3 vẫn được lưu độc lập.
