# SKILL 03 — 03-success-criteria.md
## Tiêu chí đạt và cách phân loại minh chứng

**Phiên bản:** v3.1 / WWW-5.1 architecture 1.0 · 11/11/2026  
**Tình trạng:** PASS thiết kế · Điều chỉnh sau chẩn đoán đầu buổi và Skill 04 nếu thay thời lượng.

## I. Nguyên tắc đánh giá

1. **Đánh giá năng lực biểu hiện**: HS nói/viết/đánh dấu/thao tác/tự giải thích và có bằng chứng; không chỉ chấm số lần nhấn hoặc % câu trắc nghiệm.
2. **Phân biệt năng lực với trợ giúp**: ghi H0–H3; việc hoàn thành bằng H3 thể hiện học được sau hỗ trợ, **không** đồng nghĩa độc lập đạt.
3. **Dùng câu hỏi hoặc ví dụ mới** để xác nhận transfer; tránh đưa lại chính URL hoặc chính câu trong thẻ học liệu.
4. **Không biến các hỗ trợ thành “bẫy điểm”**: H2/H3 dùng để dạy tiếp, sau đó đánh giá lại bằng một bằng chứng mới.
5. **Giữ ranh giới CORE / SUPPORT**: không bắt học sinh thuộc lòng query/fragment, TTL, TLS handshake, HTTP/3, session/persistent cookies, nguồn gốc lịch sử Web.

## II. Thang mức độ chung

| Mức | Định nghĩa | Cách ghi nhận |
|---|---|---|
| **M4 – Vững & chuyển giao** | Đúng và giải thích có bằng chứng; vận dụng được ví dụ mới, có thể phản biện ngoại lệ, chủ yếu H0 | “Vững”; có thể giao bài mở rộng có điều kiện |
| **M3 – Đạt** | Đúng phần CORE và giải thích được; hoàn thành nhiệm vụ mới với H0/H1; có thể thiếu chi tiết SUPPORT | “Đạt”; tiếp tục bài |
| **M2 – Đang hình thành** | Có hiểu một phần nhưng còn sai cốt lõi, cần H2 hoặc chưa chuyển giao được | “Cần củng cố”; hỗ trợ và đánh giá lại |
| **M1 – Chưa đạt** | Không biểu đạt được ý chính/không thực hiện được ngay cả sau H2/H3 hoặc hiểu sai nền tảng | “Cần dạy lại theo bước nhỏ”; không chỉ cho xem đáp án |

## III. Rubric rút gọn theo mục tiêu

| OBJ | **M3 – Đạt** | **M4 – Vững** | Dấu hiệu M2/M1 cần xử lý |
|---|---|---|---|
| **01. Internet/WWW** | Phân biệt đúng hạ tầng mạng và hệ thống web; 2/3 tình huống có lý do | Xử lý trường hợp giao thoa như webmail và phản bác phân loại tuyệt đối | WWW=Internet; liệt kê ví dụ không có giải thích |
| **02. Browser** | 4/5 thao tác; 3 chức năng và phân biệt search engine | Lựa chọn công cụ tối ưu khi tình huống thay đổi, giải thích lịch sử vs bookmark | Chưa mở được URL/nhầm browser với tìm kiếm |
| **03. URL** | Phân tích 4/5 yếu tố cốt lõi; hiểu `www`/`.html` tùy chọn; nhận diện `.vn` trong ví dụ | Phân tích thêm query/fragment, URL không có path rõ ràng, giải thích host khác path | Nhầm host/path, TLD, cho rằng `.html` bắt buộc |
| **04. DNS** | Giải thích domain→IP khi cần, DNS không trả HTML, cache có thể có | So sánh hai điều kiện cache, nêu IP có thể khác nhau theo trường hợp | DNS=web server; một miền luôn chỉ có một IP |
| **05. HTTP/HTTPS** | Request/response đúng chiều; HTTP≠HTML; HTTPS bảo vệ truyền thông nhưng không bảo đảm uy tín | Giải thích tình huống HTTP response lỗi/HTTPS có nội dung giả | HTTPS bảo đảm tuyệt đối; HTTP và HTML là một |
| **06. Browser render & data** | Vai trò HTML/CSS/JS đúng; phân biệt 3/4 bookmark/history/cache/cookies | Giải thích nhiều tài nguyên/request, phân biệt DNS cache và browser cache | Browser chỉ tải một file; cookie=history/cache |
| **07. Web journey** | 5/6 chức năng trong quy trình đúng, không đánh tráo DNS/HTTP/render, có điều kiện | Giải thích nhánh cache và lỗi 404/khác biệt tải tài nguyên ở tình huống mới | Chỉ kể từ khóa không có cơ chế; gán DNS trả trang |
| **08. Tự học & teach-back** | Nêu được bằng chứng, sửa một nhận định, giảng lại một phần bằng lời mình | Biết giới hạn bằng chứng, trả lời phản biện/chuyển giao tốt | Chép nguồn, không nói được vì sao |
| **09. Chính xác/trung thực** | Chỉ ra giả định và giới hạn HTTPS/IP ví dụ, không nói vượt chứng cứ | Tự phát hiện và chỉnh các câu khẳng định tuyệt đối trong một tình huống | Coi minh họa là thực tế, suy diễn không có chứng cứ |

**Điều kiện đạt toàn bài, ở mức thiết kế:** OBJ-01–07 tối thiểu M3 cho nội dung CORE; OBJ-08 đạt có bằng chứng tự nghiên cứu/giải thích; OBJ-09 không còn hiểu lầm nghiêm trọng về HTTPS, DNS hoặc dữ liệu giả định. Nếu vẫn còn M2 ở phần CORE, ghi rõ phần cần củng cố và dùng nhiệm vụ mới đánh giá lại, không tự ghi PASS chỉ nhờ tổng điểm cao. Ngưỡng này dùng để chẩn đoán–điều chỉnh, **không phải quy định chấm điểm chính thức của nhà trường**.

## IV. Bảng quan sát dành cho giáo viên trong buổi học

| Mục tiêu | Đánh dấu M1/M2/M3/M4 | H0/H1/H2/H3 | Minh chứng thực tế (câu HS nói/thao tác) | Lỗi chưa giải quyết | Hành động tiếp theo |
|---|---|---|---|---|---|
| OBJ-01 |  |  |  |  |  |
| OBJ-02 |  |  |  |  |  |
| OBJ-03 |  |  |  |  |  |
| OBJ-04 |  |  |  |  |  |
| OBJ-05 |  |  |  |  |  |
| OBJ-06 |  |  |  |  |  |
| OBJ-07 |  |  |  |  |  |
| OBJ-08 |  |  |  |  |  |
| OBJ-09 |  |  |  |  |  |

## V. Mẫu đánh giá thoát bài (5 phút cuối)

**Không thay thế đánh giá tích lũy:**
- **Prompt A (vận dụng):** “Địa chỉ `https://library.example.org/books` chứa thông tin giúp em biết tên máy chủ và tài nguyên cần lấy ở đâu? Sau khi có domain, DNS và browser làm việc gì khác nhau?” → quan sát OBJ-03,04,07.
- **Prompt B (phản biện):** “Bạn em nói: Có HTTPS thì chắc website đáng tin. Em đồng ý không? Tại sao?” → OBJ-05,09.
- **Tự phản tư một câu:** “Hôm nay em từng nghĩ …, nay em thay đổi vì …” → OBJ-08.

Nếu không đủ 5 phút, chọn 1 prompt và câu phản tư; những mục tiêu khác đã có evidence C1–C6.

## VI. Hướng sử dụng kết quả cho Skill 04 và 08

- **Skill 04:** Chọn cách tổ chức để **lấy đủ bằng chứng**, không chọn kỹ thuật chỉ vì nổi tiếng. Tùy bản chất kiến thức, có thể dùng IBL, phân tích ví dụ–phản ví dụ, nhiệm vụ thao tác, quan sát–giải thích hoặc xây mô hình; không ép khuôn.
- **Skill 08:** Bài tập về nhà bổ sung phần chưa vững dựa trên **rubric thực tế**; thiết kế retrieval, mindmap và flashcards đúng mức; không giao lại toàn bộ tiết bằng số lượng câu hỏi lớn.
- **Skill 12:** Sau khi có website chạy, kiểm định separately: minh chứng UI hoạt động thật và chất lượng sư phạm; Skill 03 chỉ kiểm định logic thiết kế.

## VII. Gate

**PASS thiết kế**: Mỗi OBJ có mô tả M3, M4 và dấu hiệu chưa đạt; thang trợ giúp, cách lấy chứng cứ, điều kiện đạt và cách xử lý thiếu minh chứng được định nghĩa. **Không khẳng định đã có học sinh đạt hoặc website đã chạy.**