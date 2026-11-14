# Skill 09 v2.0 – Kiến trúc website bài giảng theo mô hình PowerPoint tương tác

**Bài mẫu:** Cookies (gia sư 1:1). **Giữ nguyên:** D0–ACT05, 42 phút dự kiến, bộ học liệu Skill 07 v1.1, giáo án Skill 08 v1.0. **Thay đổi:** cấu trúc hiển thị và hệ thống layout. **Không phải:** lập trình engine bài học hoàn chỉnh (Skill 11).

## 1. Quyết định kiến trúc

**Mô hình hai tầng**

- **Chặng học (learning section):** P00 Giới thiệu; D0; ACT01; ACT02; ACT03; ACT04; ACT05 EXIT; P07 Ghi nhớ sau giờ. Đóng vai trò mục lục/tiến trình; **không nhất thiết là một màn hình**.
- **Màn trình bày (scene):** một ý chính/một quyết định học sinh/một trạng thái mô phỏng. Một chặng có thể có 2–6 scene. Các scene dùng layout chung nhưng nội dung và asset khác nhau.
- **Bước tương tác (micro-state):** dự đoán, thử, gợi ý, phản hồi, đối chiếu, recall là trạng thái **bên trong một scene**, không cần chuyển URL hoặc tải lại trang.

### Mục tiêu thay đổi

1. Giống cách dạy bằng slide tốt: **nhịp – điểm nhìn – một ý chính – chuyển cảnh rõ ràng**.
2. Khác slide tĩnh: HS **dự đoán và thao tác** ngay trong sơ đồ/tình huống; hệ thống dùng feedback theo điều kiện.
3. Khác cuộn trang dài: chỉ một scene chính tại một thời điểm, hỗ trợ nhảy chặng qua menu khi luyện; không nhồi nhiều khối và không để header che nội dung.
4. Không bắt chước PowerPoint theo nghĩa mỗi slide = một trang HTML. Cùng canvas có thể cập nhật trạng thái; số scene không cần tương đương số hình.

## 2. Bố cục tổng thể

```text
┌────────────────────────────────────────────────────────────────────────────┐
│  COOKIES / tên chặng          D0 · ACT01 · ACT02 · ACT03 · ACT04 · EXIT     │  (mỏng, không fixed)
├────────────────────────────────────────────────────────────────────────────┤
│  Màn chủ đạo: caption nhỏ / câu hỏi hoặc tiêu đề lớn                       │
│                                                                            │
│  [mô hình/sơ đồ/tình huống chiếm ~55–65% diện tích quan sát]               │
│                                                                            │
│  [câu hỏi, lựa chọn hoặc ô ghi dự đoán nằm gần hình]                       │
│                                                                            │
│  [phản hồi nhỏ xuất hiện sau HS thử; không chiếm sẵn toàn màn]             │
├────────────────────────────────────────────────────────────────────────────┤
│  ← Quay lại          ● ● ● progress                 Bước tiếp theo →       │  (theo dòng tài liệu)
└────────────────────────────────────────────────────────────────────────────┘
```

Trên desktop có thể dùng cột 60/40 cho **mô hình/giải thích**, nhưng scene đầu chủ yếu một vùng focus. Trên mobile xếp thành một cột, chiều cao tự nhiên; **không dùng khung cao cố định và không dùng sticky header che bài**. Không bắt ép 16:9 nếu làm hỏng khả năng đọc.

## 3. Hệ thống 8 pattern slide-web

| Pattern | Dùng khi | Bố cục desktop | Mobile | Tương tác |
|---|---|---|---|---|
| **Cover** | Mở một bài | Hero câu hỏi + minh họa một bên | Hero trên, ví dụ dưới | HS dự đoán |
| **Focus question** | Nêu tình huống hoặc gỡ hiểu lầm | Câu hỏi lớn và 1 hình minh họa | một cột | trả lời nhanh |
| **Progressive diagram** | Cơ chế tuần tự | Sơ đồ lớn + thẻ nhiệm vụ cạnh phải | sơ đồ trên, nhiệm vụ dưới | bước tiếp/quay lại/chọn mũi tên |
| **Compare** | Khái niệm dễ nhầm | 2 cột cùng kích thước | stack dọc | dự đoán và lật trạng thái |
| **Card trio** | 3 nhóm công dụng | 3 thẻ rõ nét | stack | phân loại |
| **Practice lab** | HS thao tác | Canvas và bảng điều khiển | canvas trước lựa chọn | dự đoán-thử-phản hồi |
| **Recall** | Chốt nội dung | một thẻ lớn hoặc sơ đồ trống | full width | che nội dung, nói rồi ghi |
| **Exit** | Đánh giá độc lập | vùng câu trả lời rộng; không trình diễn gợi ý | các ô theo thứ tự | nộp, không lộ key |

## 4. Phân bổ nội dung thành scene

Tham chiếu chi tiết `Scene_Map.csv` và `Page_by_Page_Content_Specification.md` của Skill09 v1.1. **22 scene** là kế hoạch bố cục, không có nghĩa 22 bài kiểm tra hoặc 22 thao tác click bắt buộc. Thực thi có thể gộp micro-state nhằm giữ nhịp 42 phút.

### P00 · Mở bài (1 scene)
- P00-01 Cover: “Website nhớ em chọn Tiếng Việt bằng cách nào?” → HS dự đoán; vào D0.
### D0 · Chẩn đoán (2 scene, 3 phút)
- D0-01 Diagram blank: Browser–Server, điền hai chiều xin/trả.
- D0-02 Recall/bridge: giải thích lý do và đoán `language=vi` biểu diễn gì.
### ACT01 · Khái niệm (3 scene, 6 phút)
- A1-01 Focus: trước/sau lựa chọn ngôn ngữ, nêu dữ liệu cần nhớ.
- A1-02 Focus concept: cookie = mẩu dữ liệu, không phải HTML/chương trình.
- A1-03 Practice/recall: phân loại ba thẻ, nói một việc cookie làm và một điều không phải.
### ACT02 · Cơ chế (6 scene, 12 phút)
- A2-01 Progressive: lần đầu Browser→Server gửi Request (chỉ một bước mẫu).
- A2-02 Practice: HS tự ghép phản hồi `Set-Cookie` Server→Browser.
- A2-03 State: Browser **có thể** chấp nhận và lưu theo điều kiện.
- A2-04 Practice: lượt sau trong request phù hợp Browser→Server gửi `Cookie`.
- A2-05 Compare: Browser chấp nhận vs từ chối; HS dự đoán trước khi mở đối chiếu.
- A2-06 Recall: che sơ đồ, vẽ lại hai chiều bằng lời riêng.
### ACT03 · Thời hạn (3 scene, 7 phút)
- A3-01 Timeline: đoán cookie nào có thể còn qua phiên.
- A3-02 Compare: thêm hạn 7 ngày cho `cart_id=C104`, tên không quyết định loại.
- A3-03 Recall: nêu hai điểm khác biệt và ngoại lệ xóa/chặn/khôi phục phiên.
### ACT04 · Công dụng (3 scene, 6 phút)
- A4-01 Card trio: SHOP/LANGUAGE/ANALYTICS phân nhóm.
- A4-02 Compare: mục đích tracking ≠ vòng đời persistent; bác nhận định sai.
- A4-03 Learning-by-teaching: nói lại một ca, recall ba nhóm.
### ACT05 · EXIT (2 scene, 8 phút)
- A5-01 Tờ nhiệm vụ: nêu duy nhất dữ kiện `club.example.org`, không cho quay lại phần luyện.
- A5-02 Phiếu ba ô A/B/C để HS tự làm và nộp; teacher key **không nằm trong package student**.
### P07 · Sau buổi học (2 scene, sau 42 phút)
- P07-01 Thẻ Active Recall và tự vẽ mind-map.
- P07-02 Flashcards + dạy lại + trò ghép thẻ (không lấy điểm tốc độ).

## 5. Component/state hợp đồng cho Skills 10–11

- `LessonShell`: section labels + active scene + progress + previous/next; không fixed header.
- `SlideCanvas`: layout variant, headline/subtitle/visual/tasks/feedback.
- `VisualStage`: SVG/HTML animation với caption, alt, pause/step-by-step và fallback giấy.
- `PredictThenReveal`: HS thử trước, mới hiển thị kết quả; không “reveal” trực tiếp next move ở luyện.
- `ProgressiveDiagram`: state, current message direction, validity, reason required.
- `ComparePanels`: hai trạng thái cùng điều kiện, nhãn và lý do.
- `StudentTask`: lựa chọn, ghi chú nói bằng miệng (không ép gõ), trợ giúp H0–H3.
- `ExitIsolation`: khi bắt đầu EXIT, không bundle teacher key hoặc quay lại UI luyện để tìm gợi ý; HTML offline không chứng minh chống gian lận tuyệt đối.

## 6. Gating

- **Gate 09:** tất cả scene có mục tiêu, nội dung chính xác, bố cục, asset ID và hành động HS; mọi visual bắt buộc có file thực hoặc BLOCKED + phương án dự phòng.
- **Gate 10:** kiểm tra hi-fi prototype 1366/768/375 px, không tràn, không giảm cỡ chữ vô lý, contrast đủ, sơ đồ cùng ngữ cảnh khi so sánh.
- **Gate 11:** engine thật, keyboard, offline, nhánh cookie accepted/blocked và kiểm thử 2 chiều, PDF fallback, no teacher keys in student files.
- **Gate 12:** review nội dung, usability, browser E2E, pilot, không “READY_TO_TEACH” nếu chưa kiểm tra.

## 7. Ranh giới

Bản `Prototype_Slide_Web.html` trong gói này là **mô hình layout và luồng scene**, không thay thế engine tương tác Skill 07 và không coi là website giảng dạy hoàn chỉnh. Bản thiết kế v1.1 chưa bị xóa/ghi đè.
