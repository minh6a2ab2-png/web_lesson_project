# KẾ HOẠCH BÀI DẠY — MỤC 5.1.5: RETRIEVAL AND LOCATION OF WEB PAGES

**Bản soạn theo cấu trúc Phụ lục IV, Công văn 5512/BGDĐT-GDTrH — điều chỉnh cho dạy kèm Tin học 1:1.**

| Thông tin | Giá trị |
|---|---|
| Mã giáo án | `LESSON-OT-WEB-RETRIEVAL-DNS-001` |
| Chủ đề | `OT-WEB-RETRIEVAL-DNS-001` — *Cách tìm địa chỉ và truy xuất trang web* |
| Phạm vi | SGK mục 5.1.5, trang 183, Figure 5.3 — **một nội dung ONE_TOPIC**, 2 CORE, 7 KU |
| Đối tượng | Học sinh Tin học học 1:1; hồ sơ người học kế thừa dạng **tạm thời**, cần kiểm tra tiên quyết tại hoạt động 02 |
| Thời lượng | **49–81 phút tham khảo**, cộng **3–8 phút hỗ trợ có điều kiện**; không giới hạn thời gian đọc hoặc tự thao tác |
| Phiên bản quy trình | ONE_TOPIC FocusLab v2.1 — Skill 08, 23/11/2026 |
| Trạng thái | `PROPOSED_FOR_USER_REVIEW` — chưa triển khai lớp học thực tế |

## I. MỤC TIÊU

### 1. Kiến thức

Sau hoạt động, học sinh có thể:

- **OBJ-DNS-01 / KU-01, KU-02:** xác định hostname trong URL; phân biệt tên máy chủ và địa chỉ IP; trình bày DNS giúp tìm địa chỉ IP tương ứng với hostname, không phải tải HTML.
- **OBJ-DNS-02 / KU-03–05:** mô tả theo đúng vai trò và chiều truyền của bốn bước DNS trong *mô hình giản lược SGK* ở trường hợp cache MISS; chỉ ra dữ liệu trả về là địa chỉ IP.
- **OBJ-DNS-03 / KU-03–05:** so sánh cache HIT, MISS và EXPIRED tại DNS server (1), giải thích vì sao có/không cần hỏi DNS server (2).
- **OBJ-WEB-04 / KU-06–07:** giải thích Browser dùng địa chỉ IP để liên hệ Web Server; Browser yêu cầu trang, nhận HTML rồi diễn giải/hiển thị trang.
- **OBJ-FLOW-05 / KU-01–07:** lập sơ đồ và giải thích đầy đủ logic của năm bước SGK trong một tình huống mới, có lưu ý cache làm thay đổi đường truy vấn.

### 2. Năng lực

- **Đặc thù Tin học:** mô hình hóa cơ chế trao đổi dữ liệu và trạng thái; xác định đúng tác nhân, dữ liệu đầu vào/đầu ra, quan hệ nguyên nhân–kết quả; đọc URL và sơ đồ mạng giản lược.
- **Tư duy giải quyết vấn đề:** nêu dự đoán có thể kiểm chứng, tự điều khiển mô hình với đầu vào khác nhau, đối chiếu quan sát và sửa cách giải thích.
- **Giao tiếp/hợp tác 1:1:** trình bày lập luận bằng lời, sơ đồ hoặc thẻ; trả lời câu hỏi phản biện và giải thích lại cho người khác.
- **Tự chủ và tự học:** tự Recall trước khi xem phản hồi; nhận diện thuật ngữ còn yếu, đánh dấu Flashcard cần ôn sau buổi.

### 3. Phẩm chất

- **Trung thực:** ghi nhận dự đoán ban đầu và kết quả thực, không sửa lời giải trước khi nộp Recall để được đánh giá đúng.
- **Chăm chỉ và trách nhiệm:** chủ động thử lại khi sai, thao tác theo hướng dẫn và sử dụng học liệu số có mục đích.
- **Tôn trọng bằng chứng:** phân biệt điều quan sát được trong mô hình với kết luận về hệ thống DNS thực tế; không khẳng định mô hình hai server là kiến trúc áp dụng cho mọi truy vấn.

## II. THIẾT BỊ, HỌC LIỆU VÀ ĐIỀU KIỆN

### 1. Đối với giáo viên

- Máy tính và màn hình đủ lớn để quan sát một mô hình tại một thời điểm; Chrome/Edge (kiểm tra trước buổi) hoặc bản giấy offline.
- SGK trang 183, hình 5.3 để đối chiếu trình tự và thuật ngữ.
- Bộ học liệu Skill 07 v2.1: mô hình `MC-01/MC-02` ở `07-interactive-models/dns_lookup_cache_v2_1.html`; mô hình `MC-03` ở `07-interactive-models/web_retrieval_v2_1.html`.
- Gallery/Flashcard/biểu đồ hỗ trợ theo manifest; khóa đáp án/bản ghi quan sát được giữ **riêng phía giáo viên**, không đặt trong bundle học sinh.
- Bảng/giấy hoặc sơ đồ trống, bộ thẻ Computer / DNS (1) / DNS (2) / Web Server / Request / IP / HTML, phiếu quan sát học sinh.

### 2. Đối với học sinh

- Trình duyệt để tự thử các mô hình, hoặc thẻ giấy để xếp mũi tên nếu không truy cập được HTML.
- Phiếu vẽ sơ đồ năm bước, bảng ghi dự đoán và kết quả (không có đáp án), thẻ Flashcard VI/EN.

### 3. Trạng thái triển khai của học liệu — KHÔNG ĐƯỢC BỎ QUA

- Skill 07 báo **20 tài nguyên**: **6 `READY_ASSET`**, **14 `PROTOTYPE`**; hai mô hình chính **vẫn là PROTOTYPE**, dù các ca thử Chromium bằng `page.set_content` đã đạt.
- Kiểm định checklist mô hình mới đạt **18/30 tiêu chí có bằng chứng**; chưa xác nhận mở `file://` trên máy người dùng, tích hợp iframe, toàn bộ keyboard/zoom 200%, screen reader và hiệu quả học sinh.
- Trước khi dạy trực tiếp bằng HTML, giáo viên **phải kiểm thử trên máy mục tiêu** hoặc chọn phương án thẻ/sơ đồ giấy; không tự nâng model lên `READY_ASSET`.

## III. TIẾN TRÌNH DẠY HỌC

### 1. Cấu trúc và dự kiến thời lượng

| Thứ tự | Hoạt động | Pha 5512 | Phần học | Phút tham khảo | Sản phẩm học sinh |
|---|---|---|---|---:|---|
| ACT-DNS-01 | Đặt vấn đề: gõ tên web nhưng không gõ IP | Mở đầu | `PRE-CORE` | 3–5 | Một giả thuyết độc lập về việc tìm máy chủ trước khi mở trang |
| ACT-DNS-02 | DIAGNOSE: bốn kiến thức nền và RECOVERY có điều kiện | Mở đầu | `PRE-CORE` | 4–7 | Đáp án và lời giải thích ngắn bốn tiên quyết; ghi nhánh hỗ trợ |
| ACT-DNS-03 | INTRODUCTION DNS và phân biệt hostname/IP | Hình thành kiến thức | `SEC-DNS-01` | 4–6 | Xác định hostname và /news, nói vai trò DNS |
| ACT-DNS-04 | EXPLORE: tìm IP bằng DNS theo sơ đồ 1→4 | Hình thành kiến thức | `SEC-DNS-01` | 7–10 | Dự đoán và tự dựng lại bốn mũi tên với dữ liệu truyền |
| ACT-DNS-05 | COMPARE: cache HIT, MISS và EXPIRED | Hình thành kiến thức | `SEC-DNS-01` | 3–6 | Bảng quan sát HIT/MISS/EXPIRED và lời giải thích nguyên nhân |
| ACT-DNS-06 | CORE 01: Active Recall → Review mini-game | Luyện tập | `SEC-DNS-01` | 5–8 | Sơ đồ Recall chưa có đáp án + kết quả game và sửa lỗi sau nộp |
| ACT-DNS-07 | Cầu nối: đã có IP ≠ đã có HTML | Chuyển tiếp/HTKT | `BETWEEN_CORE` | 1–2 | Lời giải thích IP chưa phải HTML |
| ACT-DNS-08 | TEACH ngắn + EXPLORE: Browser yêu cầu và hiển thị trang | Hình thành kiến thức | `SEC-DNS-02` | 8–13 | Dự đoán, thao tác Request→Response HTML→Render và diễn giải |
| ACT-DNS-09 | CORE 02: Active Recall → Review sửa sai | Luyện tập | `SEC-DNS-02` | 4–7 | Recall độc lập + hai dạng Review và lời sửa lỗi |
| ACT-DNS-10 | EXIT: mindmap năm bước và Learning by Teaching | Vận dụng | `CROSS_SECTION` | 7–12 | Sơ đồ riêng năm bước và học sinh tự giảng giải |
| ACT-DNS-11 | Flashcard cuối buổi và tự đánh giá | Củng cố tự học | `CROSS_SECTION` | 3–5 | 4 flashcard tự phân loại và 1 điều còn vướng |

**Tổng hoạt động chính: 49–81 phút tham khảo.** Nếu cần RECOVERY, bổ sung 3–8 phút, không ép rút bớt cặp Recall → Review. Thời lượng dự kiến là ngân sách tổ chức, **không phải bộ đếm ép học sinh hoàn thành**.

**Sơ đồ mạch:** PROBLEM_CONTEXT → OBSERVE → DIAGNOSE (RECOVERY khi cần) → INTRODUCTION/TEACH DNS → EXPLORE DNS → COMPARE cache → **RECALL 01 → REVIEW 01** → cầu nối IP≠HTML → EXPLORE Web → **RECALL 02 → REVIEW 02** → EXIT + Teach-back → Flashcard.

### 2. Tổ chức theo từng hoạt động (4 bước Phụ lục IV)

Các hướng dẫn dưới đây được chuẩn hóa từ Skill 06 đã duyệt. Bước 3 trong dạy 1:1 là **HS báo cáo và đối thoại với GV**; giáo viên hỏi thay vì trả lời hộ.

### Hoạt động 01 — Đặt vấn đề: gõ tên web nhưng không gõ IP (`ACT-DNS-01`)

**Bổ sung v2.2 (không thêm hoạt động):** Có thể tổ chức thành 2 scene liên tiếp trong hoạt động này. `PROBLEM_CONTEXT` trình bày tiêu đề, bối cảnh nhập hostname, thực trạng/nhu cầu xác định địa chỉ, hình minh họa và câu hỏi đặt vấn đề (bằng chứng `EVD-CONTEXT-01`). Sau khi HS nêu được vấn đề, Next sang `OBSERVE` để quan sát các dữ kiện và nêu giả thuyết (bằng chứng `EVD-OPEN`). Không hé DNS trước khi khám phá. Scene đôi không là phần 1/2 của một màn tràn chữ; cả hai thuộc cùng `ACT-DNS-01`, thời lượng 3–5 phút tham khảo giữ nguyên. Asset `A-CONTEXT-DNS-01` còn `SPEC_ONLY`, cần bổ sung/kiểm thử trước tích hợp website.


**Mục tiêu:** `OBJ-DNS-01` · **CORE:** `PRE-CORE` · **Thời lượng tham khảo:** 3–5 phút.

**Nội dung/nhiệm vụ:** Quan sát nhập hostname khác với nhập IP. **Học liệu:** `A-OBS-01`.

**Lời dẫn VI:** “Vì sao chỉ cần gõ tên website, trình duyệt có thể tìm và hiển thị đúng trang?”  
**Opening cue EN:** “How can a browser find and display the right web page when we type its name?”

**Sản phẩm học tập:** Một giả thuyết độc lập về việc tìm máy chủ trước khi mở trang. **Bằng chứng:** `EVD-OPEN`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Em nhìn thanh địa chỉ: chúng ta nhập `www.hoddereducation.co.uk`, không nhập một dãy số IP. Vậy chuyện gì phải xảy ra trước khi trang hiện?” Chưa nhắc DNS.

**Bước 2 — Tổ chức cho HS thực hiện.** HS quan sát **trạng thái trước/sau**: địa chỉ nhập vào và trang hiển thị; tự chọn hoặc viết 1 giả thuyết. GV im lặng, cho HS nói xong, không chạy animation thay cho HS.

**Bước 3 — Báo cáo và trao đổi.** HS: “Em chỉ nhập tên, nên máy chắc cần tìm địa chỉ máy chủ.” GV hỏi: “Trong hình có bằng chứng nào cho ý đó?” Chấp nhận giả thuyết khác để kiểm chứng.

**Bước 4 — Đánh giá, kết luận.** GV: “Ta sẽ tìm xem máy biết liên hệ đúng nơi như thế nào, rồi còn phải lấy nội dung trang ra sao.” Không đáp án chi tiết.

**Hỗ trợ phân hóa:** Nếu im lặng > tùy theo quan sát GV: hỏi “Tên hay số? Máy cần biết gì tiếp?” Không cho sơ đồ lời giải hoàn chỉnh.

**Cầu nối nội dung:** “Trước khi tìm cơ chế mới, chúng ta kiểm tra nhanh những kiến thức đã dùng.”

---

### Hoạt động 02 — DIAGNOSE: bốn kiến thức nền và RECOVERY có điều kiện (`ACT-DNS-02`)

**Mục tiêu:** `OBJ-DNS-01`, `OBJ-WEB-04` · **CORE:** `PRE-CORE` · **Thời lượng tham khảo:** 4–7 phút.

**Nội dung/nhiệm vụ:** Bộ bốn câu kiến thức nền, ôn đúng/sai khác nhau. **Học liệu:** `A-PR-01`, `A-PR-02`, `A-PR-03`, `A-PR-04`.

**Lời dẫn VI:** “Trước khi khám phá DNS, em đã nhớ gì về trình duyệt, URL, Request/Response và HTML?”  
**Opening cue EN:** “Before exploring DNS, what do you remember about the browser, URL, requests and HTML?”

**Sản phẩm học tập:** Đáp án và lời giải thích ngắn bốn tiên quyết; ghi nhánh hỗ trợ. **Bằng chứng:** `EVD-PR-01..04`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Mỗi câu chỉ kiểm tra một kiến thức cũ. Em cứ chọn rồi giải thích một câu; đây không phải bài thi.” Bốn PR hỏi riêng, chưa gộp thành một câu dài.

**Bước 2 — Tổ chức cho HS thực hiện.** HS trả lời PR-01 Browser, PR-02 hostname trong URL, PR-03 ai gửi Request, PR-04 HTML khác IP. **Đúng:** mở modal ôn nền gồm phát biểu cốt lõi + minh họa có thao tác + câu nối DNS. **Sai:** vào Recovery đúng PR, cho thử lại với ví dụ tương đương. Không bắt HS đọc modal theo thời gian.

**Bước 3 — Báo cáo và trao đổi.** HS chỉ ra hoặc nói lại một ý: Browser là ứng dụng; `school.example` là hostname; Browser gửi Request; `<h1>News</h1>` là HTML chứ không phải IP.

**Bước 4 — Đánh giá, kết luận.** GV: “Những kiến thức này là cầu nối. Khi cần địa chỉ máy, DNS sẽ giúp; còn nội dung HTML được lấy ở bước khác.” Không đánh giá MASTERED chỉ từ 1 đáp án.

**Hỗ trợ phân hóa:** PR-01: app≠server; PR-02: scheme/hostname/path; PR-03: chiều yêu cầu/phản hồi; PR-04: mã HTML vs số IP. Chỉ sửa PR sai.

**Cầu nối nội dung:** “Tên đã có; chúng ta cần một công cụ để tìm thông tin địa chỉ.”

**Cổng kiểm tra nền:** đúng → modal ôn ngắn `prior knowledge + illustration + link to topic`; sai → một RECOVERY đúng lỗ hổng rồi hỏi lại. Modal có nút đóng, Esc/focus; không nhận định học sinh đã thành thạo từ một đáp án đúng.

---

### Hoạt động 03 — INTRODUCTION DNS và phân biệt hostname/IP (`ACT-DNS-03`)

**Mục tiêu:** `OBJ-DNS-01` · **CORE:** `SEC-DNS-01` · **Thời lượng tham khảo:** 4–6 phút.

**Nội dung/nhiệm vụ:** Giới thiệu DNS, phân biệt tên với địa chỉ. **Học liệu:** `A-INTRO-01`, `A-CORE-TEXT-01`, `A-URL-01`.

**Lời dẫn VI:** “Công cụ giúp tìm địa chỉ từ tên website có tên là gì?”  
**Opening cue EN:** “What system can find an address from a website hostname?”

**Sản phẩm học tập:** Xác định hostname và /news, nói vai trò DNS. **Bằng chứng:** `EVD-01;EVD-02`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV mở **một INTRODUCTION cho DNS**: “Đây là Domain Name System. Em hãy nhìn cặp tên dễ nhớ và địa chỉ dạng số; chúng khác nhau ở điểm nào?” Không mở trước 4 bước DNS.

**Bước 2 — Tổ chức cho HS thực hiện.** HS chọn hostname trong `https://school.example/news`, xác nhận `/news` là path; xem sơ đồ **hostname → DNS → IP** rồi bấm vào các nhãn để đọc vai trò. Kể một lợi ích DNS. TEACH ngắn giải thích DNS là hệ thống, DNS server là máy chủ tham gia hệ thống.

**Bước 3 — Báo cáo và trao đổi.** HS: “`school.example` là hostname. DNS giúp tìm IP; `/news` không phải thứ DNS tra cứu.” Nêu DNS không đưa HTML.

**Bước 4 — Đánh giá, kết luận.** GV chốt 2 câu KU-01/02, không nói “DNS biến cả URL thành IP” và không dạy cấu trúc DNS nhiều cấp.

**Hỗ trợ phân hóa:** Nhầm `/news` → tô ba vùng URL rồi yêu cầu HS tự chọn lại; nhầm HTML → hỏi IP có phải mã `<h1>` không.

**Cầu nối nội dung:** “Một máy chủ DNS tìm thông tin này bằng cách nào khi chưa có địa chỉ?”

---

### Hoạt động 04 — EXPLORE: tìm IP bằng DNS theo sơ đồ 1→4 (`ACT-DNS-04`)

**Mục tiêu:** `OBJ-DNS-02` · **CORE:** `SEC-DNS-01` · **Thời lượng tham khảo:** 7–10 phút.

**Nội dung/nhiệm vụ:** DNS server (1) cache MISS hỏi DNS server (2). **Học liệu:** `A-MODEL-DNS-01`, `A-CORE-TEXT-01`.

**Lời dẫn VI:** “Nếu DNS server (1) chưa biết địa chỉ IP, truy vấn sẽ đi đâu?”  
**Opening cue EN:** “If DNS server (1) has no answer, where will the query go?”

**Sản phẩm học tập:** Dự đoán và tự dựng lại bốn mũi tên với dữ liệu truyền. **Bằng chứng:** `EVD-03;EVD-04`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Trước khi bấm, em dự đoán ai nhận câu hỏi đầu tiên, ai hỏi tiếp, và ai trả IP.” Đặt trạng thái `cache=EMPTY` theo hình SGK, không cho toàn bộ đường đi chạy tự động.

**Bước 2 — Tổ chức cho HS thực hiện.** HS trực tiếp điều khiển **MC-01**: `start_lookup` (1) Computer→DNS1; `query_next_dns` (2) DNS1→DNS2; `respond_address` (3) DNS2→DNS1; `deliver_address` (4) DNS1→Computer. HS đọc nhãn actor/data mỗi bước, dùng Reset tự chạy lại. Nếu sai thứ tự, mô hình giữ trạng thái và hướng dẫn bước hợp lệ, không âm thầm nhảy.

**Bước 3 — Báo cáo và trao đổi.** HS không nhìn hướng dẫn, đặt 4 thẻ mũi tên và nói: “DNS2 trả IP cho DNS1; DNS1 trả IP cho Browser; HTML chưa được gửi.”

**Bước 4 — Đánh giá, kết luận.** GV chuẩn hóa 4 bước đúng sơ đồ SGK: đây là **mô hình 2 DNS server giản lược**, không khẳng định DNS thực tế luôn qua hai server.

**Hỗ trợ phân hóa:** Đảo mũi tên → chỉ bật một mũi tên đang hoạt động rồi hỏi lại “Ai gửi? Ai nhận?”. Nhầm IP/HTML → đưa hai thẻ nội dung đối chiếu rồi làm lại.

**Cầu nối nội dung:** “Nếu DNS server (1) đã có địa chỉ đúng trong cache thì đường đi có giống không?”

**Hợp đồng mô hình:** `MC-01/MC-02` có trạng thái/cache, Step/Previous/Reset, token đúng tuyến Computer ↔ DNS1 ↔ DNS2. Với HIT, bỏ qua DNS2; với MISS/EXPIRED đi theo tuyến giản lược SGK. **Nếu không mở được HTML:** HS xếp thẻ/di chuyển ký hiệu mũi tên bằng tay, giáo viên đọc sự kiện, giữ câu hỏi và sản phẩm không đổi.

---

### Hoạt động 05 — COMPARE: cache HIT, MISS và EXPIRED (`ACT-DNS-05`)

**Mục tiêu:** `OBJ-DNS-03` · **CORE:** `SEC-DNS-01` · **Thời lượng tham khảo:** 3–6 phút.

**Nội dung/nhiệm vụ:** Học sinh đổi trạng thái cache. **Học liệu:** `A-MODEL-DNS-01`.

**Lời dẫn VI:** “Nếu DNS server (1) đã có IP còn hợp lệ, có cần hỏi server (2) không?”  
**Opening cue EN:** “If DNS server (1) has a valid cached IP, must it ask server (2)?”

**Sản phẩm học tập:** Bảng quan sát HIT/MISS/EXPIRED và lời giải thích nguyên nhân. **Bằng chứng:** `EVD-05`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Em chọn trước HIT/MISS/EXPIRED và dự đoán có bước (2)–(3) không. Đừng bấm ngay khi chưa nói dự đoán.”

**Bước 2 — Tổ chức cho HS thực hiện.** HS dùng **chính MC-01 với chế độ cache** (không mở mô hình trùng) chạy lần lượt VALID (HIT), EMPTY (MISS), EXPIRED. Dùng một vùng hiển thị cùng lúc số bước/đường đi, chọn lại trạng thái và Reset để so sánh. Với HIT, DNS1 trả IP cho máy không hỏi DNS2; MISS/EXPIRED cần hỏi tiếp theo sơ đồ.

**Bước 3 — Báo cáo và trao đổi.** HS hoàn thành câu: “Khi cache còn hợp lệ, ...; khi cache không có/hết hạn, ...; điều khác nhau là ...”.

**Bước 4 — Đánh giá, kết luận.** GV: “Cache là câu trả lời lưu tạm khi còn hợp lệ, không phải HTML.” Không suy rằng lượt truy cập nào cũng đi qua hai DNS server.

**Hỗ trợ phân hóa:** Chỉ dùng HIT vs MISS nếu HS quá tải; EXPIRED là thử thêm cùng nguyên tắc. Không giảng TTL chi tiết.

**Cầu nối nội dung:** “Thử nhớ lại toàn bộ phần tìm địa chỉ mà không nhìn mô hình.”

**Hợp đồng mô hình:** `MC-01/MC-02` có trạng thái/cache, Step/Previous/Reset, token đúng tuyến Computer ↔ DNS1 ↔ DNS2. Với HIT, bỏ qua DNS2; với MISS/EXPIRED đi theo tuyến giản lược SGK. **Nếu không mở được HTML:** HS xếp thẻ/di chuyển ký hiệu mũi tên bằng tay, giáo viên đọc sự kiện, giữ câu hỏi và sản phẩm không đổi.

---

### Hoạt động 06 — CORE 01: Active Recall → Review mini-game (`ACT-DNS-06`)

**Mục tiêu:** `OBJ-DNS-01`, `OBJ-DNS-02`, `OBJ-DNS-03` · **CORE:** `SEC-DNS-01` · **Thời lượng tham khảo:** 5–8 phút.

**Nội dung/nhiệm vụ:** Recall trước Review; giữ đáp án bị khóa. **Học liệu:** `A-RECALL-01`, `A-GAME-01`.

**Lời dẫn VI:** “Không nhìn sơ đồ: DNS giúp làm gì và IP đã đi qua những đâu?”  
**Opening cue EN:** “Without the diagram: what does DNS do, and where does the IP answer travel?”

**Sản phẩm học tập:** Sơ đồ Recall chưa có đáp án + kết quả game và sửa lỗi sau nộp. **Bằng chứng:** `EVD-C1-R;EVD-C1-Q`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Trước tiên em tự vẽ/nói 4 bước, không nhìn lại mô hình. Khi hoàn thành Recall mới chuyển sang mini-game Review.” Không gợi câu trả lời.

**Bước 2 — Tổ chức cho HS thực hiện.** **RECALL:** HS tự dựng sơ đồ hoặc nói 4 bước, nộp lời giải thích. **REVIEW:** kéo/xếp 4 thẻ mũi tên, rồi chọn đúng nhánh HIT/MISS và giải thích. Hệ thống đánh dấu `ATTEMPTED`/`SUBMITTED` riêng, chỉ công bố feedback sau nộp. Game là một hoạt động duy nhất, không thêm vòng chơi rườm rà.

**Bước 3 — Báo cáo và trao đổi.** HS chỉ ra một bước bị đảo, sửa dựa trên bằng chứng “ai hỏi / ai trả IP”; giải thích sai lầm “DNS trả HTML” nếu xuất hiện.

**Bước 4 — Đánh giá, kết luận.** GV đánh giá theo EVD-C1-R/Q: cần đúng vai trò và logic phần lớn 4 bước; **IP≠HTML là điều kiện bắt buộc**. Sai chỗ nào quay lại KU phù hợp rồi thử tình huống tương đương.

**Hỗ trợ phân hóa:** Sai actor → quay ACT04; sai cache → ACT05; sai DNS=HTML → KU02/05. Không cho Next mặc nhiên đánh dấu MASTERED.

**Cầu nối nội dung:** “Giờ ta đã có IP. Điều đó có đồng nghĩa trang web đã xuất hiện?”

**Cổng đánh giá:** học sinh phải có bằng chứng `ATTEMPTED` và `SUBMITTED` cho Recall trước khi xem câu hỏi/feedback Review. Lộ đáp án trong `Hiện tất cả` hoặc chuyển Next là lỗi chặn nghiệm thu web.

---

### Hoạt động 07 — Cầu nối: đã có IP ≠ đã có HTML (`ACT-DNS-07`)

**Mục tiêu:** `OBJ-WEB-04` · **CORE:** `BETWEEN_CORE` · **Thời lượng tham khảo:** 1–2 phút.

**Nội dung/nhiệm vụ:** Chỉ có IP chưa hiển thị trang. **Học liệu:** `A-BRIDGE-01`.

**Lời dẫn VI:** “Đã có địa chỉ IP. Trang web đã hiện chưa?”  
**Opening cue EN:** “We have the IP address. Has the webpage already appeared?”

**Sản phẩm học tập:** Lời giải thích IP chưa phải HTML. **Bằng chứng:** `EVD-BRIDGE`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV giữ mô hình ở `CLIENT_HAS_IP`: “Chỉ nhìn trạng thái này, máy đã nhận mã HTML chưa?”

**Bước 2 — Tổ chức cho HS thực hiện.** HS chọn “Đã hiện / Chưa hiện”, giải thích vì sao; chỉ ra việc tiếp theo browser cần làm.

**Bước 3 — Báo cáo và trao đổi.** HS: “Có IP mới biết nơi liên hệ, Browser còn phải yêu cầu nội dung.”

**Bước 4 — Đánh giá, kết luận.** GV: “DNS tìm địa chỉ. Web server mới gửi nội dung khi Browser yêu cầu.”

**Hỗ trợ phân hóa:** Nếu trả lời “đã hiện” → hỏi “Thẻ HTML nào đã đến Browser?” và cho HS chỉ trạng thái trống.

**Cầu nối nội dung:** “Vậy hãy tự gửi yêu cầu tới web server để nhận trang.”

---

### Hoạt động 08 — TEACH ngắn + EXPLORE: Browser yêu cầu và hiển thị trang (`ACT-DNS-08`)

**Mục tiêu:** `OBJ-WEB-04` · **CORE:** `SEC-DNS-02` · **Thời lượng tham khảo:** 8–13 phút.

**Nội dung/nhiệm vụ:** Browser ↔ Web Server. **Học liệu:** `A-MODEL-WEB-01`, `A-CORE-TEXT-02`.

**Lời dẫn VI:** “Sau khi có IP, Browser còn phải làm gì để trang xuất hiện?”  
**Opening cue EN:** “After finding the IP, what must the browser do to display the page?”

**Sản phẩm học tập:** Dự đoán, thao tác Request→Response HTML→Render và diễn giải. **Bằng chứng:** `EVD-06;EVD-07`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Em thử gửi yêu cầu tới Web server. Trước khi chạy, đoán xem server sẽ trả **IP** hay **HTML**.” Cho xem Browser ↔ Web server và giải thích 1 câu về Request/Response.

**Bước 2 — Tổ chức cho HS thực hiện.** HS dùng **MC-03**: `WAITING_FOR_IP` thử gửi yêu cầu → bị nhắc cần IP; chuyển `CLIENT_HAS_IP` → `send_page_request` → `deliver_html` → `show_page`. Quan sát dữ liệu `<h1>News</h1>` rồi nội dung hiển thị News. Bấm Reset và thử lại khác đường dẫn nếu đã có trong mô hình.

**Bước 3 — Báo cáo và trao đổi.** HS chỉ mũi tên Browser→Web server Request, Web server→Browser Response/HTML; phân biệt DNS server và web server bằng nhiệm vụ.

**Bước 4 — Đánh giá, kết luận.** GV kết luận KU06–07: DNS tìm địa chỉ, web server cung cấp nội dung, browser diễn giải HTML. Không dạy TLS/DOM/HTTP status trong bài này.

**Hỗ trợ phân hóa:** Nhầm IP với HTML → mở hai thẻ đối chiếu; bấm Show trước Deliver → phản hồi “Chưa có HTML” và yêu cầu tìm bước còn thiếu.

**Cầu nối nội dung:** “Không nhìn mô hình nữa, em có thể kể điều Browser đã làm sau khi có IP?”

**Hợp đồng mô hình:** `MC-03` — phải có IP trước khi Request; Browser gửi Request, Web Server trả HTML, Browser hiển thị sau khi nhận. **Nếu không mở được HTML:** dùng thẻ ba trạng thái IP → Request → HTML/Render và hỏi HS chỉ chiều truyền.

---

### Hoạt động 09 — CORE 02: Active Recall → Review sửa sai (`ACT-DNS-09`)

**Mục tiêu:** `OBJ-WEB-04` · **CORE:** `SEC-DNS-02` · **Thời lượng tham khảo:** 4–7 phút.

**Nội dung/nhiệm vụ:** Recall trước Review. **Học liệu:** `A-RECALL-02`, `A-REVIEW-02`.

**Lời dẫn VI:** “Không nhìn mô hình: ai yêu cầu trang và ai trả HTML?”  
**Opening cue EN:** “Without the model: who requests the page, and who returns HTML?”

**Sản phẩm học tập:** Recall độc lập + hai dạng Review và lời sửa lỗi. **Bằng chứng:** `EVD-C2-R;EVD-C2-Q`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Lần này em tự nói/vẽ trước. Khi em nộp, mới bật phần kiểm tra sửa lỗi.”

**Bước 2 — Tổ chức cho HS thực hiện.** **RECALL:** HS kể Browser dùng IP để liên hệ và yêu cầu trang; server trả HTML, browser hiển thị. **REVIEW:** (1) ghép actor↔vai trò dữ liệu; (2) tìm và sửa câu sai “DNS server gửi HTML”. Chỉ phản hồi sau nộp.

**Bước 3 — Báo cáo và trao đổi.** HS chỉ ra và sửa lỗi bằng một câu “DNS trả IP, web server trả HTML”.

**Bước 4 — Đánh giá, kết luận.** GV chốt điều kiện: mô tả đúng chiều request/response và phân biệt IP với HTML; nếu sai quay ACT08 thử một vòng trước kiểm lại.

**Hỗ trợ phân hóa:** Nhầm chiều → chỉ 2 nhãn Request/Response trong trạng thái tĩnh, cho thử lại; không mở trước key.

**Cầu nối nội dung:** “Bây giờ em tự dạy lại cho một bạn chưa từng học DNS.”

**Cổng đánh giá:** học sinh phải có bằng chứng `ATTEMPTED` và `SUBMITTED` cho Recall trước khi xem câu hỏi/feedback Review. Lộ đáp án trong `Hiện tất cả` hoặc chuyển Next là lỗi chặn nghiệm thu web.

---

### Hoạt động 10 — EXIT: mindmap năm bước và Learning by Teaching (`ACT-DNS-10`)

**Mục tiêu:** `OBJ-FLOW-05` · **CORE:** `CROSS_SECTION` · **Thời lượng tham khảo:** 7–12 phút.

**Nội dung/nhiệm vụ:** Vận dụng tổng hợp; key riêng, không gợi đáp án. **Học liệu:** `A-EXIT-01`.

**Lời dẫn VI:** “Một bạn nhập `https://school.example/news`. Em giải thích quá trình năm bước cho bạn ấy thế nào?”  
**Opening cue EN:** “A friend enters `https://school.example/news`. How would you explain the five-step process?”

**Sản phẩm học tập:** Sơ đồ riêng năm bước và học sinh tự giảng giải. **Bằng chứng:** `EVD-08;EVD-09`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV giao yêu cầu mới: “Em vẽ sơ đồ của riêng em, chỉ rõ ai gửi gì cho ai. Sau đó em đóng vai giáo viên và giải thích.” Không cho sơ đồ mẫu/đáp án ở cùng màn.

**Bước 2 — Tổ chức cho HS thực hiện.** HS tự xác định hostname `school.example`, path `/news`; vẽ 5 bước SGK trong trường hợp cache miss; ghi cache hit làm giảm nhánh; thuyết trình ngắn tự chọn tốc độ. GV không giành lời hoặc đánh giá trước khi HS trình bày xong.

**Bước 3 — Báo cáo và trao đổi.** GV hỏi tối đa 2 câu phản biện: “DNS trả gì?”, “Nếu DNS1 có kết quả còn hợp lệ, bước nào bớt?”. HS dùng sơ đồ của mình trả lời.

**Bước 4 — Đánh giá, kết luận.** GV xác minh 4 tiêu chí: hostname đúng, 1→4 đúng theo trường hợp, IP≠HTML, Browser cần yêu cầu web server; đánh dấu `VERIFIED` chỉ sau quan sát, không tự chấm vì click Next.

**Hỗ trợ phân hóa:** Sai nghiêm trọng thì quay KU tương ứng, sau đó đổi hostname/tình huống để kiểm lại. Cho phép giấy, nói hoặc xếp thẻ.

**Cầu nối nội dung:** “Để kết thúc, hãy tự kiểm tra một số thuật ngữ quan trọng.”

**Cổng EXIT:** Phiếu/sơ đồ và lời giải thích là **bằng chứng độc lập**. Giáo viên chỉ đánh dấu `VERIFIED` khi kiểm tra thực tế theo rubric ở cuối giáo án; không dùng số lần bấm Next.

---

### Hoạt động 11 — Flashcard cuối buổi và tự đánh giá (`ACT-DNS-11`)

**Mục tiêu:** `OBJ-DNS-01`, `OBJ-WEB-04` · **CORE:** `CROSS_SECTION` · **Thời lượng tham khảo:** 3–5 phút.

**Nội dung/nhiệm vụ:** Tự đánh giá, không thêm quiz bắt buộc. **Học liệu:** `A-FC-01`.

**Lời dẫn VI:** “Bốn từ khóa nào em có thể giải thích mà không nhìn đáp án?”  
**Opening cue EN:** “Which four key terms can you explain without looking at the answers?”

**Sản phẩm học tập:** 4 flashcard tự phân loại và 1 điều còn vướng. **Bằng chứng:** `SELF_CHECK`.

**Bước 1 — Chuyển giao nhiệm vụ.** GV: “Em nhìn mặt trước mỗi thẻ, nói ý của mình rồi mới lật; em có quyền đánh dấu thẻ cần ôn.”

**Bước 2 — Tổ chức cho HS thực hiện.** HS tự kiểm tra `hostname`, `IP address`, `DNS`, `Web server`, đánh dấu NHỚ RÕ / CẦN ÔN. Có thể thay một thẻ bằng `cache` nếu em còn khó. Không thêm một quiz bắt buộc.

**Bước 3 — Báo cáo và trao đổi.** HS nói một điều đã hiểu rõ và một điều cần hỏi lại.

**Bước 4 — Đánh giá, kết luận.** GV lưu note cho buổi sau, không bắt làm lại toàn bộ nếu chỉ có một điểm yếu.

**Hỗ trợ phân hóa:** Nếu HS mệt/thiếu thời gian, cho flashcards về nhà; không bỏ EXIT để dành thời gian cho flashcards.

**Cầu nối nội dung:** Kết thúc chủ đề; lưu bằng chứng thực tế.

---

## IV. ĐÁNH GIÁ, HỖ TRỢ VÀ TỔ CHỨC KHÁC BIỆT

### 1. Tiêu chí thu bằng chứng (đánh giá quá trình)

| Mốc | Dấu hiệu quan sát | Hình thức ghi nhận | Xử lý khi chưa đạt |
|---|---|---|---|
| EVD-01/02 | Nhận diện hostname, phân biệt IP và DNS | HS chỉ vào URL và giải thích | Bù đúng KU-01/02 rồi đổi ví dụ URL |
| EVD-03/04 | Đúng vai trò/chiều truyền của phần lớn 4 bước DNS giản lược | Sơ đồ/đặt thẻ + lời giải thích | Cho thử lại mô hình một bước đang sai |
| EVD-05 | Giải thích được vì sao cache HIT khác MISS/EXPIRED | Bảng thử và lời kết luận | Giảm xuống HIT vs MISS rồi mở rộng EXPIRED |
| EVD-C1-R/Q | Recall trước Review, không nhầm DNS trả HTML | Ghi 2 phiên bản: trước gợi ý/sau phản hồi | Ôn 1 KU sai, làm tình huống tương đương |
| EVD-06/07 | Biết có IP chưa là có HTML; nhận đúng Browser/Web Server | Nhật ký thao tác + giải thích | Dùng thẻ IP / Request / HTML từng bước |
| EVD-C2-R/Q | Recall yêu cầu trang trước Review sửa lỗi | Bài nộp, phản hồi sau nộp | Quay ACT-DNS-08 theo đúng lỗi |
| EVD-08/09 | Dựng logic năm bước và tự giải thích rõ | Sơ đồ tự tạo + lời teach-back | Gợi câu hỏi “Ai gửi gì cho ai?”, không đưa đáp án |
| SELF_CHECK | HS tự nhận diện 1 điểm chắc/1 điểm còn vướng | Flashcard hai nhóm NHỚ / CẦN ÔN | Lên kế hoạch ôn cách quãng, không ép làm lại toàn bài |

### 2. Rubric EXIT — minh chứng độc lập, chưa kiểm chứng thực nghiệm

| Tiêu chí | Đạt | Cần củng cố |
|---|---|---|
| Xác định URL | Nêu `school.example` là hostname, `/news` là path | Nhầm cả URL cần DNS tra cứu |
| Cơ chế DNS | Chỉ đúng vai trò DNS server (1)/(2), chiều truy vấn và trả **IP** trong trường hợp MISS | Đảo chiều hoặc bảo DNS trả HTML |
| Nhánh cache | Biết khi DNS1 đã có IP hợp lệ thì có thể không cần hỏi DNS2 | Cho rằng luôn đi qua DNS2 |
| Truy xuất trang | Tách rõ tìm IP khỏi Browser gửi Request, nhận HTML và hiển thị | Đồng nhất IP với nội dung web |
| Teach-back | Diễn đạt được bằng sơ đồ/lời nói, tự chỉ ra các mối nối | Chỉ đọc thuật ngữ rời rạc, không giải thích quan hệ |

**Điều kiện bắt buộc:** học sinh phải phân biệt **DNS trả IP** và **web server trả nội dung HTML**. Không suy `MASTERED` từ việc đã xem mô hình. Các mức rubric là đề xuất để giáo viên duyệt, không có số điểm kỳ thi chính thức.

### 3. Nhánh hỗ trợ người học

- Với hồ sơ dạy kèm 1:1 tạm thời: chia yêu cầu thành bước ngắn, để học sinh đoán trước, sau đó tự điều khiển; tránh GV giảng dài trong lúc mô hình đang hoạt động.
- Kết quả DIAGNOSE quyết định hỗ trợ thực tế; **không** gán học sinh nhãn năng lực cố định. Có thể trả lời bằng lời, sơ đồ hoặc thẻ.
- Nếu không nắm Browser/Server: ôn một ví dụ Request/Response ngắn rồi trở lại DNS. Nếu nhầm hostname và path: làm nổi bật đoạn URL cần chọn.
- Nếu mô hình quá nhiều trạng thái: cho so sánh HIT với MISS trước; EXPIRED là biến thể sau, không đi sâu TTL.
- Nếu Recall khó: cho thời gian suy nghĩ tùy ý, nhưng không để lộ đáp án trước khi có lượt thử; khi cần ghi `NEEDS_RECOVERY` thay vì ép hoàn thành.

### 4. Sử dụng trong tự học có hướng dẫn

- Cấu trúc bốn bước vẫn được giữ: **nhiệm vụ rõ trên màn → HS tự tương tác → HS ghi/báo cáo → so sánh bằng chứng sau khi nộp**.
- Khi không có giáo viên tại chỗ, hệ thống chỉ được báo `ATTEMPTED`, `SUBMITTED` hoặc điểm tự động theo câu hỏi đã duyệt; `VERIFIED` cần người dạy xem bài.
- Có thể dùng phiếu thay thế mô hình nếu thiết bị không chạy; xem như hoạt động cùng mã `activity_id`, không phải một kiến thức mới.

### 5. Quy tắc thiết kế web phải bảo toàn khi giao cho Skill 09

- **Một scene = một mục tiêu/nhiệm vụ rõ**, không buộc 11 hoạt động thành 11 scene; Skill 09 chọn scene_kind và số scene.
- Trên mỗi scene, `opening_cue` hiện ngay; **sau 2–3 giây, mặc định 2,5 giây**, mọi nội dung **được phép xem** cùng xuất hiện. `Hiện tất cả ngay` bỏ chờ, nhưng không chạy model, trả lời hoặc làm lộ khóa; giảm chuyển động độc lập.
- Không có giới hạn thời gian đọc. Mô hình chỉ hoạt ảnh khi HS thao tác hoặc chọn Play; Step/Reset luôn hoạt động kể cả khi tắt animation.
- Desktop kiểm tra 1280×720, 1366×768, 1600×900, 1920×1080: **không cuộn, không cắt nội dung, chữ đọc được**. Khi zoom 200%/mobile phải ưu tiên đầy đủ nội dung hơn cấm cuộn tuyệt đối.
- Previous cố định trái dưới, Next cố định phải dưới và không che model CTA; cùng navigation guard bảo vệ Recall→Review và EXIT.
- DIAGNOSE đúng → modal ôn nền có minh họa; sai → RECOVERY có điều kiện. Tooltip hover/focus tự ẩn khi rời vùng, chạm/keyboard có thể đóng bằng Esc.

## V. KIỂM TRA TRƯỚC TRIỂN KHAI VÀ TÀI LIỆU ĐI KÈM

1. **Trên máy giảng dạy:** xác minh hai HTML mở được bằng Chrome/Edge, chạy không cần mạng hoặc đã có fallback đủ dùng. Hiện còn `NOT_TESTED`.
2. **Mô hình:** kiểm tra HIT/MISS/EXPIRED, Request→HTML/Render, Step/Previous/Reset, VI/EN, giảm chuyển động, bàn phím và độ đọc khi zoom 200%. Một phần tự động đạt, phần thủ công chưa nghiệm thu.
3. **Học liệu:** giữ `07-teacher-key/` tách khỏi bundle học sinh; khi xem mã nguồn HTML của học sinh không được nhúng khóa đáp án nhạy cảm của bài đánh giá.
4. **Tư liệu:** SGK p183 chỉ đối chiếu cá nhân, hình/SVG trong học liệu là bản gốc; đường dẫn nguồn/giấy phép được lưu theo manifest Skill05/07.
5. **Lớp 1:1:** người dạy ghi dấu vết dự đoán, kết quả tương tác, Recall/Review và sơ đồ EXIT; chỉ sau đó nhận định hiệu quả.

**Kết luận kế hoạch:** `PROPOSED_FOR_USER_REVIEW` — nguồn 01–07 và 11 hoạt động đã được chuyển thành kế hoạch CV5512, nhưng hai mô hình vẫn `PROTOTYPE`, chưa nghiệm thu offline và thực tế học sinh. Chưa được coi là giáo án đã triển khai thành công.
