# Đề xuất v1 — FocusLab Cookies: chuyển động, bố cục và mô hình tương tác

**Ngày:** 22/11/2026  
**Phạm vi:** PROTOTYPE để duyệt trước, áp dụng cho mô hình bài giảng `ONE_TOPIC`.  
**Trạng thái:** CHƯA THAY ĐỔI các tệp Cookies/13 Skills gốc, CHƯA NGHIỆM THU CHẤT LƯỢNG SƯ PHẠM.

## 1. Tám nhóm ví dụ trong website

| Demo | Thay đổi | Điều học sinh thực hiện | Dấu hiệu đạt |
|---|---|---|---|
| 01. Visual Attention | Mọi màn có kế hoạch điểm nhìn và nhấn mạnh | Chọn Câu hỏi/Mô hình/Kết luận | Chỉ một điểm nhìn chính, phần khác không bị giấu hoàn toàn |
| 02. OBSERVE | Nổi bật câu hỏi tình huống | Quan sát lượt 1 và lượt 2 | Câu hỏi luôn đọc được; học sinh nêu được hiện tượng cần giải thích |
| 03. DIAGNOSE | Đúng cũng ôn kiến thức nền + mô hình trong modal | Chọn đúng/sai và gửi thử request | Kiến thức nền và liên hệ bài mới được minh họa; không phải mở thêm scene |
| 04. INTRODUCTION | Loại màn mới trước TEACH khi có giải pháp/công cụ | Xem tên Cookie, ích lợi và thử cơ chế lưu | Không biến INTRODUCTION thành TEACH dài dòng |
| 05. Tooltip | Tự ẩn khi rời hover, hỗ trợ keyboard/touch | Hover/focus/chạm từ khóa | Không cần X; không chắn nội dung khi rời từ khóa |
| 06. Interactive Model | Cơ chế phải có thao tác, trạng thái và phản hồi | Lưu, truy cập lại, xóa hoặc chặn Cookie; xem từng bước | Mô hình đúng cơ chế, thay tham số sẽ dẫn tới kết quả khác |
| 07. TEACH pacing | Nhịp xuất hiện–đọc–tương tác, không ép chờ | Chuyển từng bước hoặc tự chạy | Có thể đọc đủ lâu; luôn có nút Tiếp và Dừng |
| 08. Scene Kind matrix | Đề xuất tín hiệu thị giác theo 13 loại màn | Chọn từng loại, kích hoạt điểm nhấn | Không áp một hiệu ứng cho mọi loại màn |

## 2. Bổ sung bắt buộc: kế hoạch thời gian (Reading & Motion Pacing)

### Các loại thời gian cần **tách biệt**

1. **Transition duration** — thời gian chuyển cảnh/đổi trạng thái (mặc định prototype 480 ms; điều chỉnh 200–800 ms).
2. **Stagger interval** — khoảng cách giữa hai nhóm nội dung xuất hiện. Không chạy nối tiếp 5–7 nội dung chỉ vì hoạt ảnh nhanh; mỗi cụm thông tin phải có thời gian đọc.
3. **Reading dwell** — khoảng dừng đọc *sau khi* nội dung đã xuất hiện. Prototype có ba mức: **3 / 6 / 10 giây**, mặc định **6 giây** khi bật autoplay. Đây là các mốc thử nghiệm, không phải chuẩn áp dụng cứng.
4. **Interaction time** — thời gian học sinh suy nghĩ/thao tác: **không giới hạn**, không tự chuyển ở màn cần học sinh trả lời nếu chưa có chủ đích được duyệt.
5. **Replay time** — hoạt ảnh được phép phát lại, bước trước/sau và đặt lại; không tự lặp vô hạn gây phân tâm.

### Quy tắc thiết kế theo mức độ đọc

- Tiêu đề/câu hỏi rất ngắn: có thể dùng khoảng đọc 3–6 giây trong chế độ autoplay; mặc định tiếp thủ công.
- Một đoạn giải thích ngắn và ví dụ: khởi điểm 6–10 giây; khi dài hơn, **ưu tiên học sinh bấm Tiếp**, không cố đặt đồng hồ.
- Mô hình gồm nhiều bước: học sinh chủ động bấm Next; nếu bật chạy tự động, đặt dừng đọc ở **mỗi trạng thái**, không chỉ lúc kết thúc.
- Nội dung dành cho người học nền tảng yếu: cung cấp mức `Đọc kỹ`, giảm phân tán, các bước nhỏ và không giới hạn thời gian thao tác.
- Không dùng đồng hồ đếm ngược cho phần đọc thông thường; tránh biến việc đọc thành áp lực.

### Quy tắc tránh lòe loẹt và sai mục đích

- **Một điểm nhấn chính** trên mỗi thời điểm; ưu tiên tương phản, viền, cỡ chữ vừa phải và bố cục trước khi dùng chuyển động.
- Không nhấp nháy/chớp lặp lại, không rung chữ để thu hút chú ý, không làm mất thông tin đang đọc.
- Chỉ dùng motion path để mô tả **chiều hoặc quá trình thực**; không hoạt ảnh trang trí nếu không dẫn đến mục tiêu học.
- Mọi hoạt ảnh có nút/bước thủ công; `prefers-reduced-motion` và nút Giảm chuyển động phải hoạt động.
- Ở mobile và máy chiếu, tránh bố cục quá chật; ưu tiên câu hỏi và mô hình chiếm vùng trung tâm.
- Tăng thời gian dừng đọc **không đồng nghĩa** tăng thời gian chuyển động. Hoạt ảnh nên ngắn; thời gian đọc nên dài/linh hoạt.

## 3. Yêu cầu mô hình tương tác

Mỗi mô hình được đánh dấu là **mô hình mô tả cơ chế** phải có `interaction_contract`:

- Mục đích học tập: câu hỏi cần trả lời và bằng chứng sau quan sát.
- Thành phần, biến trạng thái và dữ liệu ban đầu.
- Thao tác tối thiểu: thay đổi được một biến đầu vào hoặc chủ động kích hoạt một bước có ý nghĩa.
- Phản hồi: trạng thái và sự kiện thay đổi trực quan, khớp kiến thức.
- Điều khiển: Next, Reset, Replay và Pause nếu có phát tự động.
- Tình huống thử: thông thường, ngoại lệ, dữ liệu khác; có kết quả mong đợi cho QA.
- Điều kiện hỗ trợ: di chuyển bằng bàn phím, giảm chuyển động, mô tả văn bản và phương án fallback.

**Ví dụ Cookie:** chọn `lang=vi`, browser gửi yêu cầu đặt lựa chọn, server gửi `Set-Cookie`, browser lưu; khi truy cập lại, browser gửi Cookie phù hợp. Đổi lựa chọn, chặn lưu, xóa Cookie rồi thử lại để so sánh. Prototype đơn giản hóa tình huống; bản phát hành cần kiểm định kỹ tính đúng về Domain, Path, Secure, SameSite, thời hạn và môi trường trình duyệt nếu giảng tới các cơ chế đó.

## 4. Các hợp đồng cần bổ sung cho mỗi màn

- `scene_kind`: OBSERVE, DIAGNOSE, INTRODUCTION ... (13 loại, trong đó INTRODUCTION là loại đề xuất mới).
- `attention_plan`: vị trí nhìn đầu tiên, mục tiêu nhấn mạnh, những vùng cần giảm nổi bật, thời điểm thay đổi.
- `reading_plan`: độ dài phần cần đọc, dự kiến thời gian dừng, điều khiển thủ công/auto, tiêu chí không chuyển khi đang tương tác.
- `motion_plan`: lý do dùng hiệu ứng, thời lượng, đường chuyển động, trạng thái giảm chuyển động, phương án tĩnh.
- `interaction_contract`: thao tác, trạng thái, dữ liệu thử và phản hồi (bắt buộc với mô hình cơ chế).
- `visual_evidence`: điều học sinh quan sát được chứng minh đã hiểu quá trình.
- `accessibility_qa`: kích thước chữ, tương phản, hover/focus/touch, Esc, phím Tab, điện thoại/máy chiếu.

## 5. Chỗ đưa vào 13 Skills khi chính thức nâng cấp

Trước khi chỉnh tệp Skill, **đối chiếu chính xác tên/vai trò từng Skill trong bản checkpoint đang được duyệt**, vì các phiên bản Cookies và MT2/MT3 có thay đổi phân công đầu ra. Không gán cứng nhiệm vụ chỉ theo số hiệu từ một phiên bản khác.

Về mặt chức năng, cần cập nhật các pha:

1. **Phân tích kiến thức/thiết kế hoạt động:** nhận diện cơ chế phải mô phỏng; mô tả câu hỏi, thao tác, giả thuyết và sản phẩm học sinh.
2. **Sản xuất học liệu/kịch bản:** tạo mô hình thật và trạng thái thử; ghi thời gian dừng đọc theo học liệu và người học.
3. **Cấu trúc màn/thiết kế UX:** phân loại Scene Kind, chọn Attention Plan và phối hợp Scene Mode; định nghĩa modal, tooltip, mô hình.
4. **Lập trình:** thực thi animation có điều khiển, không khóa thao tác, đầy đủ VI/EN, responsive, reduced-motion.
5. **Kiểm thử/kiểm định:** kiểm tra đúng cơ chế, tính tương tác, thời gian đọc đủ dùng, trạng thái sai, khôi phục, bàn phím/chạm và ngưỡng chấp nhận.

## 6. Quy trình duyệt

1. Duyệt prototype **8 khu vực** theo từng thay đổi; ghi nhận quyết định ACCEPT / REVISE / REJECT và yêu cầu sửa.
2. Chốt quy chuẩn thời gian và mô hình bằng thử nghiệm ngắn với học sinh thực tế, không áp cứng cho mọi nội dung.
3. Sau duyệt, lập bản đồ thay đổi vào từng Skill và tệp nguồn, tạo nhánh mới cho ONE_TOPIC.
4. Chạy một nội dung mới từng Skill và đánh giá checkpoint.
5. Chỉ quay về MT3 đa nội dung khi quy trình một nội dung đã được nghiệm thu.

**Lưu ý**: Website FocusLab chỉ là minh họa các tương tác thiết kế, không phải phiên bản cập nhật của website Cookies 30 màn và không được coi đã vượt QA của bản Cookies cũ.
