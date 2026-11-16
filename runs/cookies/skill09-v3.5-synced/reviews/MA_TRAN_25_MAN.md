# HỢP ĐỒNG ĐỒNG BỘ SKILL 09 v3.5 ↔ SKILL 10 v3.5.1 — COOKIES

**Trạng thái:** `APPROVED_CHANGE_REQUESTS / CONTRACT_SYNCED / HIFI_DELTA_REQUIRED / SKILL11_NOT_RUN`

**Nguồn kiểm trực tiếp:** Skill09 v3.4 rerun 09-implementation-contract.json (22 màn), Skill10 v3.5.1 data.js + teacher-notes.js (22 màn), giáo án Skill08 v1.0 (42 phút) và ma trận CR01–CR08 được phê duyệt.

**Bản chất:** kiến trúc thiết kế, không phải một website Skill11 đã hoạt động. Số màn không cố định: 22 cũ được giữ, thêm 1 màn dạy tiền đề cần thiết và 2 màn ôn nền điều kiện.

## Quyết định tách màn

- **A3-00** (55 giây, core): dạy 2 quy ước Session/Persistent *trước khi* yêu cầu dự đoán 6 ô timeline. Đúng tinh thần Skill08 “giới thiệu hai quy ước ngắn”, tách riêng để không cuộn, không bắt học sinh tự biết thuật ngữ.
- **D0-R01** (45 giây, điều kiện): ôn chiều Browser–Server chỉ nếu D0-01 sai hoặc không chắc.
- **D0-R02** (45 giây, điều kiện): ôn tên–giá trị chỉ nếu D0-02 sai hoặc không chắc.
- Không tự thêm màn cho A4 vì có thể sửa ngay bằng reveal hai giai đoạn trong cùng màn. Không lạm dụng số lượng màn.

## Ma trận đối chiếu toàn bộ 25 định nghĩa

| STT | ID | Loại | Mục đích học sinh hiểu | Sản phẩm | Tiêu chí hoàn thành | Thời gian | Xung đột / trạng thái |
|---:|---|---|---|---|---|---:|---|
| 1 | `P00-01` | OBSERVE | Nhận ra một website có thể ghi nhớ lựa chọn giữa hai lần truy cập. | Một dự đoán bằng lời/giấy về lựa chọn ngôn ngữ. | Một dự đoán cụ thể; chưa đánh giá đúng sai. | 120s | Cần triển khai evidence / interaction |
| 2 | `D0-01` | DIAGNOSE | Xác định chiều trao đổi giữa Browser và Server khi mở một trang. | Hai mũi tên Request và Response + giải thích ngắn. | Đúng cả hai chiều và nêu lý do; nhầm thì ôn D0-R01, thử lại. | 95s | Cần triển khai evidence / interaction |
| 3 | `D0-R01` | RECOVERY | Ôn nền về chiều yêu cầu và phản hồi khi học sinh nhầm. | Thử hai mũi tên trên một website mới. | Đã ôn và thử cả hai chiều; có thể trở lại D0-02 dù còn cần trợ giúp. | 45s* | MỚI · chỉ khi cần |
| 4 | `D0-02` | DIAGNOSE | Nhận biết dạng tên–giá trị trong ví dụ dữ liệu. | Một câu giải thích language và vi (nói/viết). | Nêu được tên–giá trị trước xem đáp án; nhầm thì ôn D0-R02. | 85s | Cần triển khai evidence / interaction |
| 5 | `D0-R02` | RECOVERY | Ôn cách đọc cặp tên=giá trị khi học sinh chưa chắc. | Đọc theme=dark rồi đối chiếu language=vi. | Nêu tên và giá trị của theme=dark; tiếp tục A1-01 với trạng thái hỗ trợ. | 45s* | MỚI · chỉ khi cần |
| 6 | `A1-01` | OBSERVE | Xác định thông tin tối thiểu cần giữ lại giữa hai lần truy cập. | Một dự đoán lựa chọn ngôn ngữ có thể được lưu. | Nêu được lựa chọn Tiếng Việt là thông tin có thể lưu. | 105s | Cần triển khai evidence / interaction |
| 7 | `A1-02` | TEACH | Diễn đạt Cookie là dữ liệu, không phải một chương trình tự chạy. | Không yêu cầu nộp ngay; định nghĩa được kiểm chứng ở A1-03. | Xem hết giải thích; trạng thái VIEWED, không MASTERED. | 90s | CR-02 · dời xác minh |
| 8 | `A1-03` | PRACTISE | Phân biệt dữ liệu minh họa, thẻ HTML và tên tệp chương trình. | Ba lựa chọn phân loại + lý do một thẻ + định nghĩa Cookie ngắn. | 3/3 đúng; nói ít nhất một lý do; nêu Cookie là dữ liệu và một điều không phải. | 165s | Cần triển khai evidence / interaction |
| 9 | `A2-01` | TEACH | Xác định bước đầu tiên trong một lượt truy cập website. | Không bắt nhập; kiểm tra chiều ở A2-06. | Đã đọc và quan sát; chưa xác minh thành thạo. | 100s | CR-02 · dời xác minh |
| 10 | `A2-02` | TEACH | Phân biệt thông điệp Set-Cookie với HTTP Request. | Không bắt nhập; chiều và vai trò Browser được kiểm tra ở A2-06. | Đã quan sát sơ đồ, biết nơi tìm chú giải; chưa MASTERED. | 125s | CR-02 · dời xác minh |
| 11 | `A2-03` | EXPLORE | Nhận ra Browser có thể chấp nhận hoặc từ chối lưu Cookie. | Hai dự đoán + một lượt chạy mỗi trường hợp + giải thích ngắn. | Đã dự đoán trước, chạy cả 2 nhánh và nêu kết quả khác nhau. | 115s | Cần triển khai evidence / interaction |
| 12 | `A2-04` | EXPLORE | Xác định điều kiện Cookie được gửi lại ở lượt truy cập tiếp. | Dự đoán Browser→Server và hai điều kiện gửi. | Thử tối thiểu hai tổ hợp, nêu đúng chiều và ≥2 điều kiện. | 110s | Cần triển khai evidence / interaction |
| 13 | `A2-05` | COMPARE | So sánh hệ quả của việc chấp nhận và chặn cùng một Cookie. | Hai dự đoán với giải thích lý do. | Phân biệt được cả hai ca, không suy ra website chắc chắn quên hoàn toàn. | 115s | Cần triển khai evidence / interaction |
| 14 | `A2-06` | RECALL | Tự nhớ lại hai chiều Set-Cookie và Cookie mà không nhìn mẫu. | Sơ đồ hai chiều + nhãn Request/Response/Set-Cookie/Cookie và vai trò Browser. | Sơ đồ đúng, giải thích vai trò gửi/trả/lưu; giáo viên hoặc tự đối chiếu có trạng thái rõ. | 155s | Cần triển khai evidence / interaction |
| 15 | `A3-00` | TEACH | Phân biệt ý tưởng Cookie theo phiên và Cookie có hạn trước khi dự đoán timeline. | Không có bài nộp; hai định nghĩa + hai ví dụ dễ hiểu. | Đã xem phần giải thích; kiểm tra khả năng dự đoán tại A3-01. | 55s | MỚI · dạy tiền đề |
| 16 | `A3-01` | EXPLORE | Dự đoán vòng đời của hai loại Cookie theo mốc thời gian. | Ma trận 2×3 gồm 6 dự đoán + một lý do. | Có sáu dự đoán trước reveal; nêu điều kiện phiên/hạn/xóa. | 135s | Cần triển khai evidence / interaction |
| 17 | `A3-02` | COMPARE | Nhận biết tuổi thọ Cookie thay đổi khi thay đổi thời hạn. | Hai phân loại trước khi xem nhãn đúng + lý do. | Phân loại đúng hai ca, nêu thời hạn chứ không phải công dụng quyết định. | 120s | CR-03 · ẩn đáp án |
| 18 | `A3-03` | RECALL | Tự phân biệt Session và Persistent theo vòng đời. | Hai khác biệt + một lý do Cookie mất sớm. | Đủ 3 ý không xem bảng; teacher check hoặc self-check chưa VERIFIED. | 110s | Cần triển khai evidence / interaction |
| 19 | `A4-01` | PRACTISE | Phân biệt ba nhóm công dụng Cookie qua tình huống. | Ghép giỏ hàng, chọn ngôn ngữ, phân tích lượt xem với mục đích + một lý do. | Ghép 3/3 chính xác và nêu 1 lý do trước khi đối chiếu. | 110s | CR-03 · ẩn đáp án |
| 20 | `A4-02` | PRACTISE | Phân biệt thời hạn lưu và mục đích theo dõi. | Chọn Đúng/Sai + phản ví dụ và lý do. | Chọn Sai có căn cứ và nêu một ví dụ Persistent không nhất thiết Tracking. | 120s | CR-03 · ẩn đáp án |
| 21 | `A4-03` | TEACH_BACK | Tự giải thích cơ chế, công dụng và lưu ý quyền riêng tư. | Lời nói/ghi chú 30–60 giây gồm 4 ý + một ví dụ. | Có dữ liệu, cơ chế, mục đích, riêng tư + ví dụ; teacher check. | 130s | Cần triển khai evidence / interaction |
| 22 | `A5-01` | ASSESS_INTRO | Chuẩn bị làm bài vận dụng độc lập không xem tài liệu. | Đã đọc dữ kiện, xác nhận bắt đầu. | Bấm “Bắt đầu bài kiểm tra”; chuyển sang chế độ đánh giá. | 95s | Cần triển khai evidence / interaction |
| 23 | `A5-02` | ASSESS | Vận dụng độc lập kiến thức về cơ chế, thời hạn và mục đích Cookie. | Ba câu trả lời A/B/C, cho phép nộp thiếu có xác nhận. | SUBMITTED sau nộp; VERIFIED/MASTERED chỉ sau chấm theo rubric riêng. | 385s | Cần triển khai evidence / interaction |
| 24 | `P07-01` | RECALL | Kết nối các khái niệm Cookies từ trí nhớ mà không nhìn lời giải. | Sơ đồ 4 nhánh với ≥1 từ khóa mỗi nhánh. | Tự vẽ/ghi xong trước khi mở mẫu; giáo viên đánh giá nếu cần. | 180s | Cần triển khai evidence / interaction |
| 25 | `P07-02` | RECALL_TEACH_BACK | Ôn thuật ngữ và dạy lại Cookie bằng sơ đồ tự vẽ. | Trả lời thẻ trước khi lật + teach-back 1–2 phút. | Có một lượt giải thích, không lấy số lần lật làm MASTERED. | 180s | Cần triển khai evidence / interaction |

\* Hai màn R là **thời gian tăng thêm khi cần**, không thuộc 42 phút core. Các màn P00/P07 ngoài 42 phút.

## Bảng thời lượng chặng học

| Chặng | Thời lượng trước | Sau đồng bộ | Kết luận |
|---|---:|---:|---|
| D0 | 180s | 180s | giữ nguyên; tối đa +90s recovery điều kiện |
| ACT01 | 360s | 360s | giữ nguyên |
| ACT02 | 720s | 720s | giữ nguyên |
| ACT03 | 420s | 55 + 135 + 120 + 110 = 420s | thêm màn A3-00, phân bổ lại trong chặng |
| ACT04 | 360s | 360s | giữ nguyên |
| ACT05 | 480s | 480s | giữ nguyên |
| **Tổng core** | **2520s** | **2520s** | **42 phút** |

## Ý nghĩa “hoàn thành”

1. Màn **TEACH**: đã đọc/quan sát (VIEWED) thì được tiếp tục; không ghi MASTERED chỉ vì bấm Next.
2. **DIAGNOSE, EXPLORE, PRACTISE**: có hành động mang nghĩa; lựa chọn sai dẫn đến phản hồi cụ thể và thử lại; không khóa học sinh vô thời hạn.
3. **RECALL/TEACH-BACK**: nói/giấy được chấp nhận; tự xác nhận chỉ là `SAVED_UNGRADED`, không phải giáo viên đã kiểm tra.
4. **EXIT**: hoàn thành việc nộp (kể cả xác nhận bỏ trống) là `SUBMITTED`; đúng/sai chờ rubric/giáo viên xác minh.
5. Tài liệu học sinh **không** chứa key đáp án EXIT, lời dẫn staff hoặc trợ giảng trả lời bài kiểm tra.

## Ranh giới trước Skill 11

Đã đồng bộ ở **mức hợp đồng học tập**. Skill10 v3.5.1 trước đó có 22 hi-fi; 3 màn mới cần bổ sung hi-fi/QA trực quan. Những thay đổi về ẩn đáp án ở A3-02, A4-01, A4-02 và nhánh D0 cũng cần kiểm tra lại trên preview. Không tuyên bố đủ 25 hi-fi hay website Skill11 đã chạy.
