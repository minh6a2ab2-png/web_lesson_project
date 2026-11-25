# SKILL 07 — MODEL DESIGN & INTERACTION STANDARD v1.0

**Trạng thái:** INTEGRATED_IN_SKILL07_V2.1 — Đã đưa vào định nghĩa Skill07; chưa đồng nghĩa sản phẩm mô hình DNS đạt kiểm định. **Phạm vi:** ONE_TOPIC FocusLab v2, nội dung 5.1.5 DNS/Web Retrieval là bài kiểm chứng. **Ngày:** 23/11/2026. **Nguyên tắc:** Skill07 v2.1 là bản định nghĩa nâng cấp; không sửa mô hình DNS hiện hành hay 12 Skills còn lại.

## 0. Nguồn và mức độ ưu tiên

Đọc cùng: `ONE_TOPIC_MASTER_RULES.md`, `skills/skill07/SKILL.md`, các hợp đồng MC-01/MC-02/MC-03 tại Skill 03 & Skill 05, kịch bản Skill 06, báo cáo QA Skill 07. Giữ ONE_TOPIC; 2 CORE/7 KU chỉ là ví dụ DNS lịch sử, không là định mức topic khác. Phân biệt tiêu chuẩn nội bộ trong tài liệu này với quy phạm bên ngoài (WCAG 2.2, WAI-ARIA và hướng dẫn kỹ thuật của MDN).

**Bắt buộc (MUST)**: điều kiện nghiệm thu. **Nên (SHOULD)**: ưu tiên mặc định, có thể ngoại lệ kèm lý do. **Tùy chọn (MAY)**: khi có giá trị sư phạm rõ ràng.

## 1. Cổng xác định có cần mô hình

Một nội dung thuộc `MODEL_REQUIRED` nếu mục tiêu yêu cầu người học hiểu **quá trình, trạng thái, quan hệ nhân–quả, luồng dữ liệu, thao tác, quyết định, vòng lặp hoặc chuỗi thay đổi theo thời gian**. Ảnh định nghĩa, ví dụ tĩnh, bảng tổng hợp đơn giản không bắt buộc thành mô hình. Mô hình phải có mục tiêu, đối tượng, biến được thay đổi, trạng thái, sự kiện, đầu ra quan sát được, câu hỏi trước/sau, bằng chứng và giới hạn độ chính xác.

MUST: 1 mô hình = ít nhất 1 thao tác có ý nghĩa + 2 kết quả/trạng thái có thể phân biệt; phải có đường thử lại. Chuyển động đơn thuần, hình ảnh có hover, video/GIF tự chạy, hoặc nút Play không làm thay đổi thông tin/điều kiện không đủ để được công nhận `INTERACTIVE_MODEL`.

## 2. Phương pháp thiết kế bắt buộc — 10 bước

1. **Xác định learning outcome**: câu hỏi lớn, KU, objective và điều học sinh phải tự giải thích sau thử nghiệm.
2. **Đúng về cơ chế**: liệt kê tác nhân (actors), input, output, sự kiện, tiền điều kiện, giới hạn mô phỏng và tài liệu kiểm chứng.
3. **Chọn họ mô hình**: flow/sequence (sự kiện theo bước); state machine (trạng thái); causal sandbox (đổi biến); branching (điều kiện); compare (đối chiếu), có thể phối hợp.
4. **Thiết kế kịch bản học sinh**: dự đoán → thao tác → quan sát → giải thích/đối chiếu → thay đầu vào thử lại. Không để lời giải/đường đi tương lai lộ trước lượt dự đoán khi cần đánh giá.
5. **Định nghĩa state machine**: state schema, event schema, guard, transition, reset, undo/step back nếu hợp lý, kiểm tra bất biến (invariants) và nhánh sai/biên.
6. **Phác sơ đồ chính xác**: bố cục theo luồng; nhãn Browser/DNS1/DNS2/Web server; mũi tên đúng nguồn/đích và có nhãn dữ liệu truyền. Không nối mũi tên không gắn vào đúng đối tượng.
7. **Dàn dựng chuyển động**: chỉ đối tượng/sự kiện đang hoạt động chuyển động; nhấn sáng đường đi; đánh dấu kết thúc. Khi tắt motion phải thấy rõ trạng thái mới, không làm mất thông tin.
8. **Thiết kế điều khiển**: một CTA chính có ngữ nghĩa, chọn điều kiện, Next step, Previous/Replay/Reset nếu hợp lý, tốc độ/giảm chuyển động; nhãn hành động cụ thể.
9. **Sản xuất + test**: tạo HTML/CSS/JS/SVG thật, test logic độc lập và thao tác với trình duyệt; chạy với dữ liệu thường/sai/biên và hai ngôn ngữ.
10. **Bàn giao có chứng cứ**: asset manifest, SHA-256, source/licence, alt/caption/transcript VI/EN, video/screenshot QA khi cần, trạng thái thực tế và giới hạn.

## 3. Hệ thống tương tác — Model Interaction Contract

Bắt buộc có các trường: `model_id`, `model_type`, `objective_ids`, `ku_ids`, `activity_ids`, `actors`, `inputs`, `states`, `events`, `transitions`, `invariants`, `visual_channels`, `controls`, `predict_prompt`, `explain_prompt`, `test_cases`, `offline`, `locales`, `reduced_motion_behavior`, `limitations`, `runtime_status`.

Các mức tương tác:
- **L1 — Step/Replay:** học sinh chủ động điều khiển chuỗi có nghĩa, quan sát thay đổi state; tối thiểu cho mô hình cơ chế tuần tự khi chưa thể đổi dữ liệu.
- **L2 — Parameter Exploration:** thay giá trị vào ít nhất một input tạo ra đường đi/kết quả khác; nên là mức mặc định cho cơ chế DNS cache.
- **L3 — Construct/Diagnose:** học sinh tự lắp sơ đồ, sắp thứ tự, chẩn đoán sai rồi được kiểm chứng bằng engine; dùng khi hoạt động cần xây dựng lời giải hoặc giải thích.

`L1/L2/L3` là mức độ do dự án đề xuất, không phải thang đo quốc tế.

### Yêu cầu hành vi
- Input thay đổi phải tác động đến state/output (không chỉ thay dòng chú thích). Actor & event đang hoạt động được highlight; nhãn dữ liệu đi trên đúng mũi tên. Log/step counter đồng bộ.
- Step Next chỉ hợp lệ khi trước đó đã đạt precondition; nếu sai cần phản hồi ngắn, có cách khắc phục.
- Reset hủy mọi animation/timer chưa kết thúc, xóa dữ liệu sai của lượt trước, trở về state READY; đổi VI/EN không làm mất state.
- Previous / Replay không được tạo hai bản sao cùng sự kiện hoặc chạy chồng animation.
- Việc hiển thị trực tiếp và title highlight không tự tăng tiến trình state, mở lời giải hoặc trả lời bài kiểm tra.
- Tách rõ hoàn thành mô hình (`MODELED`) và hiểu bài (`VERIFIED`); nhấn Run không tự chấm học sinh đã nắm kiến thức.

## 4. Hệ thống hoạt ảnh — Motion Contract

**Hai lớp phải độc lập:** màn học render ngay nội dung hợp lệ và highlight tiêu đề 3s; mô hình chỉ chạy khi có lệnh. Tắt motion không đổi logic, không lộ đáp án.

**Công thức:** `state_next = transition(state, event, input)`, rồi `render(state_next)` và `animate(state_prev, state_next)` tùy motion setting. Không điều khiển trạng thái kiến thức bằng `animationend` hoặc các mốc thời gian giả.

Các mức thời gian **đề xuất để thử**, không phải tiêu chuẩn chứng minh hiệu quả:
- UI feedback nhấn/chọn/đánh dấu: khoảng **120–250 ms**.
- Di chuyển một token dữ liệu/đánh sáng một nhánh: **300–800 ms**, có `Skip`/`Next step` ngay.
- Luồng gồm nhiều chặng: **mỗi bước riêng**, học sinh chủ động chuyển bước; không tự phát cả chuỗi trừ khi học sinh bật Play.
- Mỗi bước có nhãn tồn tại cho đến khi bước tiếp theo; không tự ẩn sau vài giây.
- Khi giảm/tắt chuyển động: kết quả state/nhãn/số bước được cập nhật **ngay**, không chờ đủ duration; vị trí ổn định, không blank.

MUST: không chớp lặp, rung chữ, tự xoay/zoom nhiều đối tượng hay đè token lên nhãn; animation không làm bố cục giật, không làm lộ kết quả tương lai. Nếu motion lặp không thiết yếu thì tắt; nếu chuyển động cần kéo dài thì có Pause/Stop.

## 5. Quy chuẩn thị giác theo phong cách PPT chuyên nghiệp

- Ở bất kỳ state nào: **một focal target chính**. Đối tượng chuẩn màu theo vai trò: Browser/user, DNS, Web Server, Query, IP result, HTML; sử dụng đường nét/nhãn ngoài màu.
- Sơ đồ **không đổi vị trí actor** khi đổi bước để tránh học lại vị trí; chỉ chuyển động token hoặc đổi độ nhấn của đường.
- Phải có `source → payload → destination`. Mũi tên hai chiều chỉ dùng khi thật sự diễn đạt hai chiều; DNS response không biến thành HTML response.
- Dùng whitespace, phân cấp cỡ chữ, vùng màu nhạt; tiêu đề/câu hỏi là nổi bật nhất, không đẩy mô hình ra khỏi vùng nhìn.
- Đọc hiểu được ở viewport **1280×720 và 1366×768**: nội dung chính không scroll hoặc bị clip; fixed Previous/Next của website cuối phải giữ vùng chỗ trống, không bị model đè. Test 1600×900, 1920×1080; mobile và zoom có fallback cuộn nếu cần để giữ toàn vẹn chữ.
- **Gợi ý nội bộ:** tiêu đề 24–32px; nội dung ≥16px; nhãn sơ đồ thường ≥14–16px, tăng khi quan sát từ xa; target tương tác ưu tiên khoảng 44×44 CSS px. Không dùng nhãn quá nhỏ để cố vừa viewport.
- Trang mô hình có bố cục **sơ đồ trung tâm + bảng điều khiển bên cạnh**, hoặc **sơ đồ trên + điều khiển dưới** tùy loại cơ chế; không quy định cứng 60/40 nếu làm giảm diện tích diễn giải. Diện tích ưu tiên cho dòng dữ liệu, không dành quá nhiều cho thẻ giới thiệu.
- Khi có modal DIAGNOSE: minh họa kiến thức nền ngắn, điều khiển thực, không làm mất vị trí đã học. Tooltip hover/focus tắt khi rời; touch mở bằng chạm, Esc/ngoài vùng để đóng.

## 6. Kiến trúc kỹ thuật khuyến nghị

**Mặc định:** HTML semantic + CSS Grid/Flex + **SVG có các đối tượng DOM tương tác** + JavaScript thuần. SVG sắc nét ở mọi độ phân giải, dễ nhấn actor/cạnh, gắn nhãn và xuất bản offline. Không cần Canvas/WebGL cho sơ đồ Browser–DNS–Webserver.

- **Logic:** pure `transition(state,event)`, bất biến đầu ra, data-driven `routeFor(input)`; state là nguồn sự thật duy nhất.
- **Renderer:** DOM/SVG cập nhật `class`/`data-state`, actor, labels, log và controls. Nên giữ positions ổn định, tránh recreate cả DOM khi không cần.
- **Animator:** CSS `transform`/`opacity` hoặc Web Animations API cho các token/đường dẫn; JS `requestAnimationFrame` nếu cần theo quỹ đạo động; tách khỏi logic để reduced motion vẫn đúng.
- **Phân phối:** self-contained local HTML/CSS/JS/assets; không CDN, không font phụ thuộc Internet, không live lookup mặc định. `Live mode` nếu có phải ghi riêng với mô phỏng deterministic.
- **Biên an toàn:** không chèn input người học bằng `innerHTML` không kiểm soát; dùng `textContent`, giới hạn dữ liệu, giải mã/tạo HTML minh họa một cách an toàn. Không giữ key giáo viên trong bundle học sinh.
- **Quản lý timer:** lifecycle cancel khi Reset, đổi scene, unmount, disable motion, tab hidden; dùng token/generation để tránh callback cũ cập nhật nhầm state mới.
- **Performance:** dùng `transform`/`opacity` cho animation; không biến đổi liên tục `top/left/width/height` trên nhiều đối tượng; giữ file nhỏ, dùng SVG sprite/tệp asset gốc; chỉ dùng Canvas nếu thật sự có nhiều đối tượng/chuyển động phức tạp.
- **Cảm giác mượt (mục tiêu nội bộ):** nhắm mượt ở 60Hz trên máy dạy thực tế, bảo toàn thao tác/logic trên máy yếu; tối ưu theo đo thực tế, không coi 60 FPS là bằng chứng hiểu bài.

## 7. Trợ năng và tiêu chuẩn bên ngoài

Đối chiếu **WCAG 2.2 mức AA** khi triển khai: 1.4.3 Contrast (Minimum), 1.4.10 Reflow, 2.1.1 Keyboard, 2.2.2 Pause/Stop/Hide, 2.3.1 Three Flashes, 2.5.8 Target Size (Minimum). **WCAG 2.3.3 Animation from Interactions là AAA**, dùng làm mục tiêu bổ sung quan trọng, không nhận là AA bắt buộc. Tham khảo https://www.w3.org/TR/WCAG22/ .

- Phím Tab đến mọi điều khiển; Enter/Space hoạt động; focus nhìn rõ; thứ tự focus hợp lý.
- Không chỉ sử dụng màu: trạng thái có chữ + icon/đường/label. Thay đổi quan trọng có cập nhật text `aria-live=polite` hạn chế thông báo dài gây phiền.
- Có `prefers-reduced-motion` và công tắc motion; tắt motion không làm thay đổi kết quả.
- Tooltip theo WAI-ARIA APG, modal focus trap/restore focus; mũi tên không chỉ thể hiện thông tin bằng hình nếu thiếu text alternative.
- Transcript/summary VI/EN mô tả trạng thái, dữ liệu truyền và quan hệ nhân quả, không chỉ ghi `mô hình tương tác`.
- Mục tiêu nội bộ 44×44px dễ bấm; WCAG 2.2 AA 2.5.8 quy định mức tối thiểu danh nghĩa 24×24 CSSpx hoặc có khoảng cách/ngoại lệ theo điều kiện tiêu chí. Không nhầm hai mức.

## 8. Kiểm thử và cổng nghiệm thu

### Tiêu chí bắt buộc — severity theo QA_VIEWPORT_AND_TIMING.md; không đạt thì chặn release
- [ ] Mô hình thật có file chạy được; input→state→output không giả; >=2 tình huống phân biệt; reset và thử lại.
- [ ] Luồng kỹ thuật chính xác, mũi tên + payload không sai, đơn giản hóa được chú thích.
- [ ] Mọi `MODEL_REQUIRED` trong nội dung CORE có mô hình thực tế hoặc đánh dấu `BLOCKED` (không giả nhận pass).
- [ ] Tắt motion / direct display không làm sai state, lộ lời giải hoặc đơ mô hình.
- [ ] Có thao tác bàn phím, thông tin không phụ thuộc chỉ màu, giao diện không cắt phần kiến thức CORE.
- [ ] Student bundle không chứa teacher key/đáp án bảo mật của bài đánh giá.
- [ ] Có minh chứng browser test thật cho các chức năng được tuyên bố đã hoạt động; nếu chỉ `set_content` không được nhận đã thử `file://`/iframe/offline.

### Kiểm thử thường xuyên
1. Basic path; cache HIT/MISS/EXPIRED; web no IP / IP only / request / HTML / render.
2. Spam Next/Back, Reset ở giữa animation, thay tham số khi đang chạy, đổi VI/EN, chuyển scene và quay lại.
3. Motion on/off, direct display tại t=0, title highlight kết thúc 3s, slow device, hidden tab.
4. Viewports 1280×720/1366×768/1600×900/1920×1080, 390×844, 360×640, zoom 200%; 2 ngôn ngữ.
5. Keyboard-only + focus + screen reader smoke; file://, localhost, network offline, no external dependency.
6. Hỏi học sinh: dự đoán trước, tự thay input, chỉ ra payload đang truyền, giải thích nguyên nhân, thử lại trường hợp khác.

### Điểm chất lượng đề xuất (không thay thế P0)
- Chính xác kiến thức, sự kiện, invariant: **30** điểm.
- Tương tác và bằng chứng học tập: **30** điểm.
- Visual focus, diễn hoạt, bố cục: **20** điểm.
- Khả năng sử dụng/trợ năng/tốc độ/offline: **20** điểm.
- Tổng 100; **≥85 và không có lỗi P0** để đề xuất duyệt; chưa học sinh/thiết bị thật thì vẫn giữ `NEEDS_REVIEW`/`TESTED_AUTOMATED`.

## 9. Ví dụ chuẩn — DNS Lookup & Cache

`MC-01 + MC-02` dùng **một engine**, một sơ đồ actor Computer → DNS server (1) ↔ DNS server (2) và đường phản hồi quay về Computer. Một bước có payload ví dụ `Query: school.example`, sau đó `Answer: 203.0.113.10` (địa chỉ ví dụ, không tra cứu thật), tách rõ định nghĩa DNS với ứng dụng HTTP.

- **MISS:** Computer gửi hostname → DNS1 chưa có IP → hỏi DNS2 → DNS2 trả IP → DNS1 trả IP cho Computer. Không có HTML trên đường DNS.
- **HIT:** DNS1 có bản ghi còn hiệu lực → trả IP, không hỏi DNS2.
- **EXPIRED:** DNS1 có bản ghi đã hết hạn → không dùng làm câu trả lời; phải tra cứu lại. Chú ý DNS2 ở đây là mô hình giản lược theo SGK, không đại diện toàn bộ hệ thống DNS thực.
- **Mỗi bước:** token đi theo cạnh phù hợp, nhãn payload, actor đang nhận sáng lên, bảng state cập nhật. Nếu motion off, cạnh/actor đổi trạng thái tức thì.
- **Câu hỏi:** Vì sao HIT bỏ qua DNS2? DNS gửi IP hay HTML? Biết IP đã đồng nghĩa với trang hiển thị chưa?

`MC-03` Web Retrieval: WAITING_FOR_IP → READY_TO_REQUEST → REQUEST_SENT → HTML_RECEIVED → PAGE_DISPLAYED. `IP known` không có nghĩa `page displayed`; HTTP Request/Response khác DNS Query/Answer. Mỗi bước phải có dấu hiệu có thể nhìn được ngay trên chính sơ đồ; bảng log chỉ bổ trợ, không thay cho sơ đồ.

## 10. Ghi nhận lịch sử, không phải kiểm hiện hành

Bản hiện có đã có hai file HTML độc lập, thử các branch HIT/MISS/EXPIRED và Web bằng Chromium DOM (`page.set_content`), không có lỗi JS trong các mẫu báo cáo. **Nhưng** đó mới là bằng chứng vận hành DOM và kích thước, chưa xác minh đầy đủ motion khi học sinh quan sát, file://, iframe, trải nghiệm thiết bị mục tiêu hay giá trị sư phạm trên người học. Mô hình hiện cần được đánh giá tăng cường về: token/payload chuyển động rõ trên sơ đồ, điểm chú ý từng bước, khả năng sửa sai, sự dễ đọc từ xa và khả năng tạo ra bằng chứng giải thích kiến thức; không coi screenshot tĩnh là bằng chứng motion đạt.

## 11. Trách nhiệm liên Skill

- Skill01: phát hiện cơ chế cần mô hình và giới hạn độ sâu.
- Skill03: chính xác nội dung/thuật ngữ và invariant.
- Skill04: thiết kế hoạt động dự đoán–thử–giải thích, tiêu chí nhận thức.
- Skill05: đối chiếu tài nguyên, quyền dùng, fallback và brief.
- Skill06: lời dẫn, thao tác, câu hỏi, phương án xử lý sai.
- **Skill07: file asset thật + state machine + animation + mô hình prototype + test evidence + manifest.**
- Skill08/09/10: đưa asset vào cấu trúc scene và layout vừa viewport.
- Skill11: tích hợp và kiểm thử runtime trong website cuối.
- Skill12/13: QA, kiểm thử với người dùng, release gating.

## 12. Bàn giao

Bắt buộc: `model_id.html` hoặc source tương đương; `model_contract.json`; `model_test_cases.csv`; `07-asset-manifest.json`; `07-test-evidence.json`; `07-media-viewport-spec.md`; alt/caption/transcript VI/EN; README với cách mở offline, giới hạn mô hình; source/licence + SHA256; ảnh/clip minh chứng ở những trạng thái quan trọng. Trạng thái: `SPEC_ONLY`, `PROTOTYPE`, `READY_ASSET` và `BLOCKED` phải mô tả đúng mức chứng cứ.

## 13. Nguồn kỹ thuật công khai (phân biệt với quy định dự án)
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- WAI-ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/
- MDN Web Animations API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
- MDN Animation Performance: https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Animation_performance_and_frame_rate
- MDN CSS Performance: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/CSS
