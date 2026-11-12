# Skill 10 — Wireframes chi tiết cho 15 web-slides

**Bài:** Internet & WWW 5.1 · **Nguồn:** Skill09 `09-slide-map.md` + `09-interaction-spec.md`, Skill07, Skill05 v3.2  
**Trạng thái:** thiết kế layout, chưa phải website học tập chạy thật. **Khung:** 1366×768 desktop, 390×844 mobile là hai kích thước kiểm thử ưu tiên.  
**Quy ước:** `Q` = câu hỏi/nhiệm vụ; `S` = nguồn hoặc mô hình; `A` = hành động học sinh; `E` = sản phẩm/bằng chứng; `H` = gợi ý đóng mở; `G` = ghi chú giáo viên đóng mặc định. Header/footer dùng chung, không nhân thành các bước học.

## 1. Tám mẫu giao diện (slide archetypes)

### A. Situation / SL-00

```
┌────────────── Q: The Web Is Down! ───────────────┐
│ Thought experiment / Giả định                    │
├──────────── S: Điều kiện ────────────────────────┤
│ 3 thẻ tình huống/nhóm; luôn có "thiếu dữ kiện"   │
├──────────── A + E ───────────────────────────────┤
│ [Lựa chọn] [Mức chắc chắn] [Lý do của em]         │
└── H (ẩn) ───────────────────────── [Tiếp tục] ──┘
```
- Desktop: 6 thẻ theo 3 cột, chỉ câu hỏi và lựa chọn hiện trước; lý do nằm bên trong thẻ đang chọn; tránh một màn cao với 6 ô nhập cùng lúc.
- Mobile: 1 thẻ/lần hoặc 1 cột; giữ điều kiện giả định phía trên; progress “tình huống 2/6” không phải điểm số.
- States: initial=chưa chọn; working=chọn/lý do; compare=nhận diện điều kiện; revised=cho phép sửa; không đúng/sai tức thì.

### B. Evidence Desk / SL-01, 02

```
┌──────────── Q: Internet khác WWW thế nào? ──────┐
├──────────────┬──────────────────────────────────┤
│ S: CARD 01   │ E: Tự viết nhận định             │
│ S: CARD 02   │ E: Gắn bằng chứng / vẽ sơ đồ     │
└──────────────┴──────────────────────────────────┘
```
- Desktop: tỉ lệ 45% tài liệu, 55% sản phẩm; HS tự đọc mà không có lời giải mẫu bên cạnh.
- Mobile: tab “Nguồn” ↔ “Ghi nhận”; nội dung đã nhập giữ nguyên khi đổi tab.
- States: nguồn đã đọc/đang chọn chứng cứ/đã trình bày/đối chiếu sau tự giải thích. SVG Internet-vs-WWW chỉ mở khi HS đã giải thích hoặc GV cố ý scaffold.

### C. Real Browser Mission / SL-03

```
┌────────── Q: Tự nghiên cứu bằng browser thật ───┐
│ S: Link online đã kiểm tra hoặc bộ HTML offline │
├──────────────────────┬─────────────────────────┤
│ A: checklist mục tiêu│ E: mục đích→công cụ→kết quả │
│ [H1/H2/H3 khi cần]   │ không tự dò history        │
└──────────────────────┴─────────────────────────┘
```
- **Không** tạo trình duyệt ảo; người học dùng Chrome/Edge/Firefox thực. Desktop 2 cột 48/52; mobile nhiệm vụ rồi nhật ký.
- “Đã làm” là HS/GV xác nhận, **không** được website tự coi đã quan sát thành công. Không xin quyền đọc history/cookies.

### D. URL Investigator / SL-04,05

```
┌────────── Q: Phần nào chỉ host/path? ────────────┐
│ S: 2 địa chỉ trên các dòng dài, mono, dễ so sánh │
│ A: đánh dấu khác nhau / gắn nhãn chưa có mẫu     │
│ E: giải thích + URL chuyển giao                 │
└───────── [Mở CARD-04] ───────────────────────────┘
```
- Desktop cho 2 URL đặt trên–dưới để highlight tương ứng, không bẻ dòng ngay trong một segment host.
- Mobile ưu tiên cuộn ngang **riêng dòng URL**, phần khác giữ nhìn thấy; nhãn dưới mỗi đoạn nếu đủ chỗ.
- States: unlabelled → student labels → explain → compare annotated `url_anatomy.svg` (không hiện ngay).

### E. Experiment Lab / SL-06–10

```
┌───── Q: dự đoán dựa trên điều kiện nào? ─────────┐
│ A: chọn case  A/B/C + ô dự đoán                  │
├───────────────────────┬────────────────────────┤
│ S: Mô hình to         │ E: event log            │
│ [Step][Play][Pause]   │ E: bằng chứng/lý giải   │
└───────────────────────┴────────────────────────┘
```
- Desktop 62% mô hình 38% log/nhật ký; controls kề mô hình, không đặt ở đầu slide cách xa.
- Mobile: chọn ca/dự đoán → mô hình → controls → log → giải thích; log cuộn trong vùng có tiêu đề rõ. Controls không chạm nhầm. Khi bàn phím mở không sticky footer che input.
- States: `idle, predicted, running, paused, finished, explained`, thêm `blocked` nếu DNS-C NXDOMAIN; *giả lập* hiển thị rõ. GIF chỉ dùng đối chiếu, không thay experiment.

### F. Comparison and Sorting / SL-11–12

```
┌──── Q: Cùng HTML, điều gì thay đổi? ─────────────┐
│ S: HTML-only ─ CSS-applied ─ JS-after-click     │
│ A: chọn trạng thái / đối chiếu                 │
│ E: em quan sát thay đổi ở đâu?                 │
└─────────────────────────────────────────────────┘
```
- Desktop 2 cột source code 38% + output 62%, hoặc 3 panes ngang với pane kết quả lớn.
- Mobile chuyển trạng thái qua tabs; code được cuộn riêng, không làm màn rộng vô tận.
- SL-12 phân loại chỉ 4 ca; không trộn 10 thuật ngữ trong một lúc. Không đọc dữ liệu trình duyệt của học sinh.

### G. Model Builder + Teach-back / SL-13

```
┌── Q: tự ghép hành trình và giải thích ───────────┐
│ Tool tray (nút: URL, DNS?, IP, GET, Response...)│
├─────────────────────────────────────────────────┤
│ S/A: Canvas lớn để nối, nhánh và gắn nhãn        │
│ E: lý do + tình huống ngoại lệ + HS nói         │
└─────────────────────────────────────────────────┘
```
- Desktop: canvas ~70% diện tích chính, khay nút nằm trên hoặc bên, không sidebar cố định hẹp canvas.
- Mobile: thẻ thứ tự + quan hệ qua form chọn node nguồn/đích/nhãn tương đương kéo thả; không cần zoom ngoài tầm tay.
- States: empty → draft → revised → teacher reviewed. Có nhánh cache / 404, không ép đồ thị tuyến tính duy nhất.

### H. Exit Ticket / SL-14

```
┌──── Q: Tự giải thích một tình huống mới ────────┐
│ E: 3 ô nhỏ URL, hành trình, HTTPS giới hạn       │
│ A: Tự đánh giá M1–M4 (không show đáp án sẵn)     │
└──────────── [Nộp bản trả lời] ───────────────────┘
```
- Desktop: một cột tập trung (max-width 780px), tránh 3 cột form ép chữ.
- Mobile: input toàn chiều ngang, không tràn; nút nộp cuối trang.
- Điểm tích hợp HW-08-PENDING không hiện như bài tập thật; School day break là màn nghỉ tối giản riêng.

## 2. Wireframe theo từng Slide (không thay đổi số slide của Skill09)

| Slide / phút | Archetype | Câu hỏi và vị trí nguồn trung tâm | Hành động + bằng chứng | Desktop & mobile | Trạng thái / chuyển tiếp |
|---|---|---|---|---|---|
| **SL-00 / 8'** | Situation | Câu hỏi ở đầu; điều kiện giả định một dòng cố định | 6 ca, chọn continue/cannot/insufficient, ghi lý do & mức chắc chắn | Card grid 3×2; mobile 1 thẻ hiển thị/lần | Prediction/revision, chuyển `openQuestion` tới SL-01; không lộ key |
| **SL-01 / 8'** | Research Desk | CARD-01/02 bên trái; câu hỏi phân biệt ở trên | Chọn nguồn, gắn câu dẫn chứng, viết 2 nhận định sơ bộ | 45/55; mobile tab Nguồn ↔ Ghi | `conceptClaims` và `networkMapDraft` |
| **SL-02 / 5'** | Concept defense | Sơ đồ HS ở trung tâm, thẻ phản ví dụ webmail bên cạnh | Giảng sơ đồ, sửa mũi tên, recall 3 cue | 60/40; mobile sơ đồ trước phản ví dụ | Đối chiếu V01 chỉ sau trình bày; tạo `networkMapFinal` |
| **SL-03 / 15'** | Real Tool Task | Danh sách mục tiêu trình duyệt thật; không render Browser nội bộ | Điền mục đích–công cụ–kết quả, đánh dấu hỗ trợ | Bảng 48/52; mobile checklist rồi form | HS/GV confirm; lưu `browserUrlExample`, không đọc history cá nhân |
| **SL-04 / 8'** | URL Compare | URL thật/2 URL cùng host khác path, mở CARD-04 theo nhu cầu | Highlight đoạn giống/khác, giả thuyết | Full-width URL rows; mobile horizontal scroll | Dùng `urlHypothesis`, không tô sẵn nhãn |
| **SL-05 / 7'** | URL Transfer | URL chưa gặp, vùng gắn nhãn lớn | Đánh scheme/host/path; giải thích www/.html không bắt buộc | 65/35 label/prompt; mobile stacked | Chốt `parsedReferenceUrl`, host `school.example.org`; đối chiếu V02 sau thử |
| **BREAK-05 / 5'** | Break | “Nghỉ mắt – uống nước” + nút tiếp tục | Không nhiệm vụ và không tự chạy mô phỏng | Centered, không sticky complexity | Bất kỳ lúc nào GV/HS tự chuyển; không countdown bắt buộc |
| **SL-06 / 4'** | Lab Prediction | Bảng ba case DNS + câu hỏi điều tra | Chọn dự đoán, lý do | Grid case; mobile stack | Chưa hiển thị log giải thích, `dnsPrediction` |
| **SL-07 / 11'** | DNS Experiment | Diagram cache–resolver–DNS + event log | Chạy Step/Run/Pause/Reset; ghi log & giải thích | 62/38; mobile model rồi log | A/B/C; NXDOMAIN không tự sinh IP/HTTP |
| **SL-08 / 3'** | DNS Evidence Review | 3 cột kết quả A/B/C từ dữ liệu HS; cue DNS/IP/cache | So sánh, trích log, kết luận | Summary table + response; mobile stacked | `chosenResolvedAddress` chỉ cho case A/B, không lén dùng IP C |
| **SL-09 / 10'** | HTTP Workshop | Client ↔ Server, GET/200/404 | Chọn path, dự đoán, đọc thông điệp, ghi kết quả | 62/38; mobile stacked | Nếu DNS-C đang chọn thì yêu cầu chọn IP hợp lệ hoặc “new scenario” rõ |
| **SL-10 / 8'** | HTTPS Claim Check | Hai ca channel HTTP/HTTPS, cùng ý nghĩa response | Ghi `helps protect` và `does not prove`, phản biện nhận định | Two-column compare; mobile cards | HTTPS không tự chứng minh trang đáng tin |
| **SL-11 / 6'** | Rendering Compare | HTML source cố định và kết quả có 3 trạng thái | Chỉ ra khác nhau HTML/CSS/JS, ghi 1 bằng chứng | Source 38%/output 62%; mobile tabs | V03 đối chiếu sau ghi nhận; source không đổi S1/S2 |
| **SL-12 / 4'** | Evidence Sorting | 4 tình huống về bookmark/history/cache/cookie | Xếp thẻ, ghi lý do, recall ngắn | 2×2 cards; mobile 1 column | Không xem cookie/history thật; cookie chuyên sâu chưa có SGK |
| **SL-13 / 13'** | Journey Builder | Canvas rộng, kho nút, điều kiện/cache/404 | Tự ghép các quan hệ, trình bày/giảng lại, tự sửa | Canvas focus; mobile node-edge selection | Bảo toàn bằng chứng từng chặng; không tự chấm mastery theo click |
| **SL-14 / 5'** | Exit Ticket | Form mới độc lập; gợi ý học liệu đóng mặc định | Phân tích URL, giải thích DNS/HTTP/render/HTTPS, tự đánh giá | Centered ≤780 px; mobile full | Nộp trước khi xem rubric; HW-08 chưa có |

## 3. Quy tắc chú ý theo vùng và chiều cao

- First fold laptop: top bar (~56px), question (~70px), ít nhất **phần đầu mô hình/nhiệm vụ + action đầu tiên**; phần còn lại cho phép scroll nội dung.
- Không mở đồng thời Source + Hint + Teacher + Notebook; mở một ngăn thứ cấp tại một thời điểm để không mất vùng làm việc.
- Lab có một vùng log riêng max-height 280–360px desktop, responsive mobile full-height theo nội dung; không dùng overlay che log khi thử nghiệm.
- Slide kết luận ngắn: cue recall nằm trong phần cùng nội dung; không tách thành 7 slide tương tự.
- Khi rời slide, đóng overlay, giữ learner data, focus heading và thông báo số slide trong aria-live.

## 4. Accessibility / EN–VI

Cùng một markup giữa EN và VI; chỉ thay chuỗi và `document.documentElement.lang`. Không gắn chiều rộng cứng cho nút; các cụm từ có thể wrap. Nguồn, mô hình, log có caption/alt và mô tả trạng thái bằng văn bản. Với drag/drop, cần thao tác thay thế bằng bàn phím. Với GIF, có transcript, reduced-motion sẽ tắt auto, fallback tĩnh.

## 5. Handoff Skill11

**Cần hiện thực hóa theo spec:** `09-implementation-contract.json`, `09-interaction-spec.md`, `09-state-model.md`; các trạng thái UI trên đây không thay state machine kỹ thuật. `10-prototype.html` chỉ là **mẫu bố cục để duyệt**, KHÔNG dùng như bài học đã hoàn thiện hoặc bằng chứng mô phỏng hoạt động. Bộ video/GIF/SVG từ Skill05 cần được tích hợp ở vị trí đã xác định, không tự thêm hình trang trí.