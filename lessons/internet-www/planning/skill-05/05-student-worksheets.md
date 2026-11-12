# SKILL 05 – Phiếu nhiệm vụ và mẫu sản phẩm (bản học sinh, không có đáp án)
Bài 5.1 – Internet and the World Wide Web · Dùng trên giấy hoặc nhập vào biểu mẫu sau này. **Không cần cung cấp tên đăng nhập, dữ liệu duyệt web cá nhân hay tài khoản.**

## ACT-00 / EV-DIAG – The Web Is Down! (8')
**Giả định chung:** Trong mô hình, **tài nguyên WWW không truy cập được**; hệ thống Internet nói chung vẫn hoạt động; các ứng dụng độc lập được mô tả dưới đây vẫn có máy chủ cần thiết. Đây **không** phải lỗi mạng thực tế.

Cho mỗi ca, chọn **Có thể tiếp tục / Không thể / Chưa đủ dữ kiện**, ghi một lý do và mức chắc chắn 1–3.

| Ca | Điều kiện của tình huống (EN / VI) | Quyết định | Bằng chứng/lý do | Chắc chắn |
|---|---|---|---|---|
| A | Read a news **web page** / Đọc báo bằng trang web | | | |
| B | Read **webmail in a browser** / Đọc email bằng webmail trong browser | | | |
| C | Send mail through a **dedicated email app that does not depend on the Web in this model** / Gửi email qua ứng dụng riêng không phụ thuộc Web trong mô hình | | | |
| D | Make a call using an **independent app with its required non-Web services running** / Gọi qua ứng dụng độc lập và các dịch vụ không thuộc Web vẫn chạy | | | |
| E | Play an **unspecified online game** / Chơi một game online không rõ hạ tầng | | | |
| F | Open a **saved offline HTML file in a browser** / Mở tệp HTML đã lưu trong máy bằng trình duyệt | | | |

**My question / Điều em còn thắc mắc:** ...

## ACT-01 / EV-01 – Internet vs WWW (13')
1. Read CARD-01 and CARD-02. Underline two pieces of evidence distinguishing network infrastructure from web resources. / Đọc hai thẻ; gạch hai bằng chứng phân biệt hạ tầng và tài nguyên web.
2. Write in your own words / Viết bằng lời mình: `Internet is / Internet là ...` ; `WWW is / WWW là ...`.
3. Draw a simple concept map with **Internet, WWW, browser, email app, webmail**. Use connecting words (uses, accesses, is not the same as).
4. Decide: Is reading Gmail **in a browser** a Web activity? Is the **underlying email service** always a Web-only service? Explain.
5. **Recall**: Close the cards. Look at cues `network / Web resources / email app`; explain aloud, then write two contrasting sentences in your notebook.

## ACT-02 / EV-02 – Browser Research Mission (15')
**Use a real Chrome, Edge or Firefox browser**, preferably a separate learning profile/session. Do not open private accounts. Use teacher-checked public websites (or the offline pages in `assets/browser_offline`).

| Research goal / Mục đích | Tool I chose / Công cụ tự chọn | Observation / Kết quả quan sát |
|---|---|---|
| Open a given public page / Mở trang công khai | | |
| Keep the first page while opening another / Giữ trang đầu, mở trang thứ hai | | |
| Follow a link and go back / Đi theo liên kết rồi quay lại | | |
| Save a page for later / Lưu trang để mở lại | | |
| Find a page visited in **this learning session** / Tìm trang đã mở trong **phiên học này** | | |

**Explain:** What is a browser? How is it different from a website or search engine? / Trình duyệt khác website/công cụ tìm kiếm như thế nào?

**Recall:** Without looking at the UI labels, sketch tab, address bar, bookmark, history, back/forward icons and explain three of them aloud. / Không nhìn nhãn UI, phác biểu tượng và giải thích ba chức năng.

## ACT-03 / EV-03 – Decode the Address (15')
Before reading CARD-04, compare these **illustrative URLs; do not visit them**:
- U1 `https://school.example.org/library/books`
- U2 `https://school.example.org/library/videos`
- U3 `https://www.example.org/news/index.html`
- U4 `https://example.vn/`
- U5 `https://example.org/search?q=web#results` (optional/không bắt buộc)

1. Which parts stay the same in U1/U2? What changes? / Phần nào giống, phần nào khác?
2. Read CARD-04. Label **scheme / host / subdomain (if any) / domain–TLD / path** in U3.
3. Explain why `www.` and `.html` need not appear in every URL.
4. **Transfer URL** (not in your worked example): `https://library.example.org/ebooks/topic`. Label the parts and identify host vs path.
5. **Recall:** Hide CARD-04, say the role of scheme/host/path aloud, then split a new URL into parts in your notebook.

## ACT-04 / EV-04 – DNS Investigation (18')
**Model-only data**: `school.example.org → 192.0.2.10`; no real server implied. Read CARD-05 only if needed.

Before each trial, write your prediction; then observe the model and record evidence:

| Trial | Cache before lookup | Prediction: resolver contacted? | Observation / log | Result type | What changed? |
|---|---|---|---|---|---|
| A | Empty / miss | | | | |
| B | Valid cached answer / hit | | | | |
| C | Unknown name / no record | | | | |

**Explain in your own words:** (1) What does DNS help find? (2) What information comes back? (3) Why is DNS different from the web server? (4) Does lookup always start from scratch?

**Recall:** Close CARD-05; cue `domain → ? → IP`, `cache hit ≠ cache miss`. Speak your explanation and write 1–2 sentences.

## ACT-05 / EV-05 – Network Conversation (18')
**Model-only requests:** `GET /library/books` vs `GET /library/missing`.

1. Before running: who sends the request? Who returns the response? Predict the likely result for each request.
2. Run both cases and fill:

| Case | Request sender → receiver | HTTP response status | What content/result? | What evidence proves it? |
|---|---|---|---|---|
| Existing resource | | | | |
| Missing resource | | | | |

3. Read CARD-06 and CARD-07. Explain `HTTP ≠ HTML`.
4. Evaluate the claim: “This page uses HTTPS, so every statement on it must be true.” Write **agree/disagree** and cite evidence. / Đánh giá phát biểu và nêu lý do.
5. **Recall:** Without the cards, say request/response order and one limit of HTTPS; write two key lines.

## ACT-06A / EV-06 – From resources to a page (10')
Examine three displays of **the same content**: A = HTML structure only; B = HTML + CSS; C = HTML + CSS + a JS interaction. Read CARD-08/09 only as needed.

| Evidence seen / Bằng chứng | Resource type / Loại tài nguyên | Role / Vai trò |
|---|---|---|
| Headings and paragraphs exist in A | | |
| Layout/styles change from A to B | | |
| Button changes content in C | | |
| Image has a separate resource entry | | |

Match and explain: **bookmark / history / HTTP cache / cookie** ↔ (i) save a chosen page address; (ii) remember visits; (iii) retain reusable resource content; (iv) store small site-specific data.

**Recall:** Say “HTML…, CSS…, JS…” and explain two browser data terms from memory, then write the distinctions.

## ACT-06B / EV-07 – You Are the Web Engineer (13')
Using your previous outputs, build a **conditional system map** with labels:
`user – browser – URL – host/path – DNS when needed – address/connection – request – server – response/resources – render – displayed page`.

1. Add **a branch** for valid DNS cache vs lookup required.
2. Add **a branch** for `200 OK` vs `404 Not Found` (resource not found does not mean the Internet is down).
3. Explain the model to the tutor for 2–3 minutes as if you were the teacher. Tutor asks one counterexample; **revise your diagram** and note why.
4. **Recall:** Hide your map, explain the main roles aloud and write 4–6 short milestones in your notebook.

## ACT-07 / EV-EXIT – Independent exit (5')
Without opening any cards:
1. Split `https://library.example.org/books` into host and path. Explain briefly when DNS may help.
2. Explain why an HTTPS page may still contain false information.
3. Complete **Before I thought… / Now I think… / Evidence…** and name one topic you need to revisit next time.

> Giáo viên ghi mức trợ giúp H0–H3 riêng. Phiếu này **không thay thế bài tập về nhà** (Skill 08). Mindmap sau buổi, flashcards học trước buổi sau và nhiệm vụ Teach-Back được giao chính thức ở Skill 08.