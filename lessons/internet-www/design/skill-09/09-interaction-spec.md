# Skill 09 – Interaction Specifications / Đặc tả mô hình tương tác

**Tình trạng:** thiết kế hành vi và tiêu chí nghiệm thu; **CHƯA phải sản phẩm HTML/JS hoàn chỉnh**. Tận dụng bộ fixture `assets/simulation-fixtures.json` của Skill 05 v3.2; không tự lookup dữ liệu mạng thật.

## I. Mô hình tương tác toàn website

- **Thành phần nền:** slide router, reading card drawer, evidence notebook drawer, teacher guide (không cần hiện ở màn hình HS), EN/VI switch, bàn phím/điều hướng.
- **Nhịp học:** `nhận nhiệm vụ → tự làm → lập luận → nhận phản biện hoặc đối chiếu bằng chứng → lưu nhận định → sang câu hỏi mới`. Mỗi màn dùng **phần cần thiết**, không lặp bốn bảng.
- **Completion mềm:** nếu chưa có lời giải thích, hiển thị nhắc nhở nhưng **vẫn có thể tiếp tục** khi GV xác nhận. `completed` không đồng nghĩa `mastered`. `mastery` là kết quả quan sát/đánh giá của GV, có nhãn H0–H3.
- **Gợi ý H1–H3:** drawer theo mức: H1 hỏi về mục tiêu/bằng chứng; H2 chỉ vùng bằng chứng; H3 hướng dẫn một ví dụ rồi giao chuyển giao. Theo dõi mức hỗ trợ bằng trạng thái, không tự chấm cao khi vừa hiện đáp án.

## II. ACT-00 (SL-00): trò chơi chẩn đoán

**State:** `cases[6] = {choice: continue | cannot | insufficient | null, reason, confidence:1..3, revised?}`, `openQuestion`.

**Events:** `SELECT_CASE`, `SET_CHOICE`, `WRITE_REASON`, `SET_CONFIDENCE`, `REVIEW_EVIDENCE`, `REVISE_CHOICE`.

**Guards:** không cần có đáp án đúng mới cho xem ví dụ; mọi người học được phép chọn *insufficient*. `REVEAL_CONCLUSION` chỉ dùng sau khi đã phát biểu lý do.

**Feedback:** hiển thị điều kiện của ca, không ghi “sai vì Web mất” khi tình huống thiếu dữ kiện. Giáo viên có thể xem thay đổi dự đoán trước/sau; không trừ điểm chẩn đoán.

**Edge:** `file://` nội bộ được trình duyệt mở không có nghĩa website HTTP có thể truy cập; dịch vụ video/game có thể lệ thuộc web dù ứng dụng không nằm trong browser.

## III. ACT-01 (SL-01/02): Evidence desk và concept relationship

**State:** danh sách statement từ CARD-01/02 (chỉ các thẻ mở), `claim-evidence` (tham chiếu nguồn), `diagramNodes` gồm Internet, WWW, browser, email app, webmail; `edges` có verb (`uses`, `accesses`, `is different from`).

**Actions:** `OPEN_CARD`, `SELECT_EVIDENCE`, `ADD_NODE`, `CONNECT_WITH_LABEL`, `SAY_EXPLANATION` (manual confirmation), `REVISE`, `COMPARE_REFERENCE`.

**Guards:** `COMPARE_REFERENCE` nên hiện cảnh báo “hãy phát biểu trước”, không chặn khi cần hỗ trợ. V01 `internet_vs_www.svg` chỉ hiện sau HS tự xây sơ đồ hoặc GV cố ý mở để scaffold.

**Feedback:** trả lời qua câu hỏi “mũi tên mô tả quan hệ gì?”; sai khi `WWW=Internet` thì đề nghị kiểm tra phản ví dụ email/webmail. Không bắt một bố cục hình cố định; chấm quan hệ và lời giải thích.

## IV. ACT-02 (SL-03): Real Browser Mission – KHÔNG có browser ảo

**External workflow:** website slide hiển thị phiếu nhiệm vụ; học sinh chuyển sang **Chrome/Edge/Firefox thật** để thao tác; quay lại ghi bảng mục đích–công cụ–kết quả. `browserObserved` do HS/GV ghi thủ công, không thể suy ra từ DOM của trang bài giảng.

**Inputs:** nguồn công khai GV đã thử **hoặc** `assets/browser_offline/index.html` (mở bằng file cục bộ). Không bắt buộc kết nối Internet hoặc tài khoản.

**Actions:** `MARK_TASK_OBSERVED`, `ADD_REFLECTION`, `SHOW_HINT(level)`, `MARK_NOT_AVAILABLE(reason)`, `EXPLAIN_BROWSER_VS_SEARCH`.

**Guards/privacy:** không xin quyền đọc history/bookmarks/cookies của browser; không yêu cầu screenshot thông tin riêng tư; ở private mode, history có thể không được lưu → đánh dấu `notObservable`, không tự chấm sai. Nút `Open practice file` có fallback `download/offline instructions` nếu browser hạn chế mở file cục bộ.

**Assessment:** ghi 4/5 nhóm thao tác được quan sát, ba chức năng giải thích, phân biệt browser/search engine, mức H0–H3. Không biến tick do HS bấm thành bằng chứng “đã thao tác thành công” tự động.

## V. ACT-03 (SL-04/05): URL investigator

**Inputs:** URL trên trình duyệt thực để quan sát, bộ URL mô phỏng `U1–U5`, cùng một fixture nối các chặng sau: `https://school.example.org/library/books`.

**Actions:** `COMPARE`, `HIGHLIGHT_SPAN`, `LABEL_PART`, `OPEN_CARD04`, `EXPLAIN_DIFFERENCE`, `TRANSFER_TO_NEW_URL`, `COMPARE_REFERENCE`.

**Parsing rule:** `scheme=https`, `host=school.example.org`, `path=/library/books`. `www` và `.html` không bắt buộc; query/fragment tùy chọn; `path` không nhất thiết là file vật lý. Không gọi `fetch()` tới các tên ví dụ.

**Feedback:** chỉ tô thành phần chính sau khi HS tự đánh dấu. Nếu nhãn path đặt vào host, gợi so hai URL cùng host khác đường dẫn. V02 là tài liệu đối chiếu sau khi thử, không phải hình hiện đáp án đầu tiên.

## VI. ACT-04 (SL-06–08): DNS Lab – STATE MACHINE BẮT BUỘC

**Nguồn dữ liệu duy nhất:** `assets/simulation-fixtures.json`, `dns.trials` và `dns.eventLabels`. **Mọi kết quả là giả lập**. `school.example.org → 192.0.2.10` là dữ liệu lớp học, không đích live.

**State:** `{trialId: DNS-A|DNS-B|DNS-C, phase: idle|predicted|running|paused|finished|explained, prediction, eventIndex, eventLog, cachedTtlRemaining, answerIP, explanation}`.

| Sự kiện | Điều kiện | Tác động | Phản hồi / bằng chứng |
|---|---|---|---|
| `SELECT_TRIAL` | bất kỳ | reset trạng thái *ca hiện tại*; preload cache theo fixture | thay nhãn cache miss/hit/unresolved |
| `SUBMIT_PREDICTION` | `idle` | `phase=predicted` | giữ dự đoán, chưa cho lời giải |
| `STEP` | `predicted`/`paused`/`running` | append đúng **một** event từ `expectedEventIds`, cập nhật `eventIndex` | tô sáng **sự kiện** đang xảy ra và dòng log |
| `PLAY` | `predicted`/`paused` | chạy từng event theo thứ tự; cho phép Pause | không chạy nhanh hơn mức có thể theo dõi; reduced-motion được |
| `PAUSE` | `running` | giữ eventIndex; dừng tự chạy | không mất log |
| `FINISH` | tất cả events đã phát | dùng `expectedAnswer/expectedResponseCode`, `phase=finished` | A `192.0.2.10`; B cached same; C `NXDOMAIN` |
| `EXPLAIN` | `finished` | ghi lời giải thích; `phase=explained` | yêu cầu chỉ ≥1 dòng log hỗ trợ kết luận |
| `RESET` | bất kỳ | quay `idle` của ca hiện tại, khôi phục cache theo fixture | có lựa chọn giữ/bỏ dự đoán trong notebook rõ ràng |

**Log kỳ vọng:** A = `CHECK_CACHE, CACHE_MISS, QUERY_RESOLVER, RECEIVE_A, STORE_CACHE, END_DNS`; B = `CHECK_CACHE, CACHE_HIT, RETURN_CACHED_A, END_DNS`; C = `CHECK_CACHE, CACHE_MISS, QUERY_RESOLVER, RECEIVE_NXDOMAIN, END_DNS`.

**Critical guard:** `DNS-C` trả **không IP**, không gọi mô hình HTTP từ kết quả C. Chỉ ca A/B có IP hợp lệ mới cho `USE_THIS_RESULT_FOR_HTTP`. Nếu cần chuyển tới SL-09 khi C đang chọn, người học được yêu cầu chọn A/B hoặc chạy HTTP độc lập với nhãn **new illustrative scenario**. Không được im lặng tái dùng IP của ca trước trong ngữ cảnh C.

**Cảnh báo đúng chuyên môn:** cache có TTL giả định; DNS không trả HTML; NXDOMAIN không đồng nghĩa HTTP 404; kết quả có thể nhiều IP trong thực tế, mô hình chỉ dùng một IP A record. GIF DNS chỉ được mở như **minh họa đối chiếu sau dự đoán**.

## VII. ACT-05 (SL-09/10): HTTP/HTTPS Lab – STATE MACHINE BẮT BUỘC

**Input condition:** `httpIllustrativeAddress = 192.0.2.10` lấy từ DNS-A/B **hoặc** bối cảnh ví dụ độc lập được gắn nhãn rõ, không tạo request thật.

**State:** `{resourceCase: HTTP-200|HTTP-404, transport: HTTP|HTTPS, phase: idle|predicted|requestSent|serverHandled|responseReceived|inspected|explained, request, response, eventLog, prediction, explanation, tlsClaim}`.

**Actions:** `SELECT_RESOURCE`, `SET_TRANSPORT`, `PREDICT_RESPONSE`, `SEND_REQUEST`, `SERVER_HANDLES`, `RETURN_RESPONSE`, `INSPECT_RESPONSE`, `EXPLAIN`, `RESET`.

**Rules:**
- `/library/books`: `GET` → `200 OK`, `text/html` mẫu.
- `/library/missing`: `GET` → `404 Not Found`, **vẫn có thể có body HTML cho trang lỗi**.
- Chuyển HTTP→HTTPS chỉ thay **tính chất bảo vệ đường truyền bằng TLS**, không thay kết quả 200/404 hoặc chứng minh nội dung đúng.
- Luồng minh họa HTTP nằm ở lớp logic bên trong kênh HTTPS; không trình bày dữ liệu giả lập như bắt được bản tin TLS thực. Không nói HTTPS là “mã hóa HTML theo cách luôn nhìn thấy”.
- `STEP`/`PLAY` nếu có phải cùng state machine; chỉ hiện thông điệp sau khi event được thực thi.

**Guards:** Không chạy HTTP trực tiếp từ DNS-C; nếu 404 thì SL-11 chọn HTML của trang lỗi **hoặc** bật ca 200 rõ ràng để học rendering bài Books, không lén chuyển nội dung. `RESET` ca HTTP không được xóa `dnsTrials` và nhận định từ ACT-04.

**Student evidence:** xác định đúng sender/receiver, giải thích 200/404, lời khẳng định `HTTPS can help… / HTTPS does not prove…`. Gợi ý H1–H3 theo nhu cầu, không chấm đúng chỉ vì mô hình chạy xong.

## VIII. ACT-06A (SL-11/12): rendering và dữ liệu browser

**Rendering state:** `{stage: HTML_ONLY|HTML_CSS|HTML_CSS_JS, sameHtmlSource, noteVisible=false, buttonClicked=false}`.

**Actions:** `SELECT_STAGE`, `CLICK_NOTE_BUTTON` (chỉ hoạt động ở JS), `RESET_RENDER`, `COMPARE`, `OPEN_V03_AFTER_EVIDENCE`. **HTML nguồn giữ nguyên** khi chuyển stage; chỉ CSS thay trình bày và JS thay hành vi sau hành động học sinh.

**Browser data sorting:** bốn thẻ `bookmark`, `history`, `cache`, `cookie`; kéo hoặc chọn bằng bàn phím; lưu `reason` không chỉ `match`. Không cần đọc cookie thật, không đòi hỏi session/persistent chi tiết ngoài SGK hiện có.

**Feedback:** "Which change comes from CSS?", "What did the student click?", "Does history store the same thing as cache?"; lưu ít nhất một ví dụ có lý do.

## IX. ACT-06B (SL-13): Journey Builder và Teach-Back

**State:** `{nodes:[URL,BROWSER,DNS,IP,CONNECT,HTTP_REQUEST,HTTP_RESPONSE,RENDER],edges:[],branches:[],notes,revisionHistory,teacherPromptsUsed}`. Bảng từ khóa trong CARD-10 chỉ mở khi cần.

**Actions:** `ADD_NODE`, `CONNECT`, `LABEL_EDGE`, `ADD_CONDITION`, `EXPLAIN_ALOUD` (manual confirmation), `REVISE_GRAPH`, `SAVE_EVIDENCE`, `RESET_LAYOUT` (có xác nhận nếu xóa sơ đồ).

**Rule:** cho phép nhiều đường đi **đúng** với điều kiện rõ: DNS cached answer, DNS lookup needed, request 404, nhiều resource; không ép một thứ tự cố định duy nhất. Máy chỉ kiểm tra những quan hệ logic có thể tự động kiểm, phần giải thích vẫn GV đánh giá.

**Mastery:** GV xác định ≥5/6 vai trò đúng, có một nhánh hợp lý, teach-back có diễn giải, ghi H0–H3. Không tự gán đạt từ graph đúng hình thức.

## X. ACT-07 (SL-14): Exit ticket

**State:** `{urlAnalysis, briefJourney, httpsLimit, confidenceByObjective, reviewNeeds, submitted=false}`.

**Actions:** `EDIT`, `SUBMIT`, `SELF_RATE`, `TEACHER_REVIEW`. Giữ câu trả lời ẩn khỏi đáp án trước khi học sinh nộp; không rò teacher key vào vùng HS.

**Homework:** chỉ có slot `HW-08-PENDING` sau exit. Thiếu Skill 08 nên không tạo bài giao/đáp án/tiến độ giả.

## XI. Phương án dự phòng nếu mô hình chưa viết xong

- DNS: thẻ log và worksheet từ Skill05 → học sinh tự xếp sự kiện A/B/C, không hiển thị một nút `Run` giả.
- HTTP: thẻ client/server, GET, 200, 404 và phiếu ghi lập luận; GIF xem sau khi học sinh tự dự đoán.
- Rendering: cùng HTML trình duyệt thực + 3 trạng thái minh họa nếu có; nếu chỉ có V03 thì nêu là **hình giải thích**, không gọi là thực nghiệm tương tác.
- Journey: sơ đồ giấy/A3, thẻ ghép, lời giảng lại.

Bài học vẫn dạy được theo Skill07 mà không phải giả vờ rằng mô phỏng chưa lập trình đã hoạt động.