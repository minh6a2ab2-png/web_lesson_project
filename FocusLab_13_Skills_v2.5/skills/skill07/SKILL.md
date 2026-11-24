---
name: activity-resource-designer
description: Sản xuất tệp học liệu và mô hình tương tác có state thật; dùng khi chạy Skill07 trước giáo án và tích hợp.
---


> **Active version: FocusLab v2.5.** Read the v2.5 addition at the end together with policy/EXECUTION_V2_5.md. The inherited section below is v2.4.1, not an earlier execution result.


# SKILL 07 — Activity Resource Designer / Interactive Model Producer (ONE_TOPIC v2.4.1)

**Bản định nghĩa:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.4.1`; kế thừa bộ 13 Skill người dùng gửi → v2.3 → v2.4. Bản sửa tính nhất quán, chưa chứng nhận bài DNS.

Đọc `../../policy/EXECUTION_AND_HANDOFF.md` trước khi chạy; tra đầu ra/consumer ở `../../templates/pipeline_registry.json`.

## Mục tiêu và ranh giới

**Sản xuất học liệu có tệp thật**, ưu tiên học liệu giúp người học dự đoán → thao tác/quan sát → giải thích → thử lại; bao gồm SVG, hình gốc, thẻ học tập, nội dung VI/EN, mô phỏng có điều khiển và hướng dẫn giáo viên khi đáp ứng mục tiêu bài học. Không đánh đồng **storyboard** với tài nguyên đã tạo, **ảnh động trang trí** với mô hình tương tác, hoặc **chạy được trên DOM** với nghiệm thu trải nghiệm học tập.

Bắt buộc đọc `../../policy/ONE_TOPIC_MASTER_RULES.md`, `../../policy/SCENE_KIND_REFERENCE.md`, `../../policy/QA_VIEWPORT_AND_TIMING.md` và **`../../policy/SKILL07_MODEL_DESIGN_STANDARD.md`** trước khi làm. Bản MT2-FROZEN được giữ ở `../../legacy/skill07_MT2_ORIGINAL.md`. Khi có mâu thuẫn, dùng chính sách ONE_TOPIC; không áp dụng split `part_id`, nhịp adaptive dwell v2 hoặc lẫn bài nhiều topic.

**Quy tắc độ mạnh**: `MUST` = điều kiện bắt buộc, `SHOULD` = ưu tiên có thể ngoại lệ kèm lý do, `MAY` = tùy mục tiêu. Bộ Model Standard là **quy chuẩn nội bộ dự án**, không phải thang đo hiệu quả quốc tế. WCAG/WAI-ARIA là nguồn bên ngoài cần đối chiếu chính xác mức tuân thủ.

## Đầu vào bắt buộc

- **Skill01 & Skill03:** danh mục KU/định nghĩa/nguồn/ranh giới chính xác, `MODEL_REQUIRED`, misconception, nội dung VI/EN; tránh sửa kiến thức kỹ thuật bằng việc đổi animation.
- **Skill04:** activity IDs, mục tiêu, vai trò tương tác của học sinh, câu hỏi dự đoán, chứng cứ giải thích, nhánh hỗ trợ.
- **Skill05:** asset registry/giấy phép/nguồn, phân loại READY_REFERENCE/PROTOTYPE/SPEC_ONLY, fallback và brief sản xuất.
- **Skill06:** teaching script, câu hỏi trước/sau thao tác, bước 5512, vị trí lời dẫn, yêu cầu mô hình và lời chốt.
- **ONE_TOPIC master rules**, công cụ tạo file HTML/SVG/JS và test thực tế (nếu sẵn); chỉ đánh dấu đã kiểm thử kịch bản nào có log/evidence truy vết.

## Các thao tác nghiệp vụ — phải thực hiện theo thứ tự hợp lý
### Gói học liệu PROBLEM_CONTEXT (vẫn áp dụng chuẩn mô hình v2.1)
- Theo `05-context-visual-resource-brief.csv` và kịch bản Skill06, sản xuất **tài nguyên bối cảnh thật**: hình/SVG/ảnh tình huống có nguồn, alt/caption VI/EN, ghi `asset_id`, hash, trạng thái và preview ở kích thước vùng scene. Đối với tương tác quan sát, tách rõ hành vi học tập khỏi trang trí.
- Không hiển thị trước trạng thái cơ chế hoặc lời giải chưa được khám phá; mô hình cơ chế (nếu dùng) vẫn phải có input→state→output, kiểm soát step/reset và bản tắt animation như chuẩn v2.1. **Ảnh bối cảnh không mặc định phải là mô hình tương tác**.
- Tài nguyên bối cảnh khi chưa có tệp chỉ `SPEC_ONLY`, không ghi READY_ASSET; kiểm thử có/không hình, tiếng Việt/Anh, offline và desktop viewport trước bàn giao.
- Đầu ra bổ sung `07-context-assets-manifest.json` với liên kết asset→activity→planned scene, tình trạng và bằng chứng kiểm thử; không tạo scene hoàn chỉnh tại bước này.


### Bước 07.1 — Phân loại & chốt phạm vi tài nguyên

1. Map mỗi `asset_id` → `topic_id` duy nhất → `section_id`/`ku_ids`/`objective_ids`/`activity_ids`, kiến thức cần truyền, cách học sinh sử dụng, mức sẵn sàng, giấy phép và tiêu chí đạt. **Không để thiếu asset CORE**, không tạo quá nhiều tài nguyên giống nhau.
2. Quyết định `MODEL_REQUIRED` khi cần hiểu **luồng, trạng thái, nhân–quả, chuỗi thời gian, vòng lặp, thao tác hoặc quyết định**. Hình minh họa định nghĩa/ảnh chụp không bắt buộc thành mô hình. Với `MODEL_REQUIRED`, không được thay bằng sơ đồ tĩnh và tuyên bố PASS.
3. Chọn **một mô hình dùng chung engine** cho các hoạt động liên quan nếu không làm sai bản chất: ví dụ DNS Lookup + Cache là một engine L2, có thể hỗ trợ DIAGNOSE/INTRODUCTION bằng cùng dữ liệu ở mức đơn giản. Dành riêng sản phẩm teacher và student.

### Bước 07.2 — Chốt hợp đồng mô hình trước mã

Với **mỗi `model_id`**, tạo `model_contract.json` hợp lệ theo `../../templates/model_contract.schema.json`; có thể xem `../../templates/model_contract.dns.example.json`. **MUST** chứa: `model_id`, `model_type`, `topic_id`, `objective_ids`, `ku_ids`, `activity_ids`, `learning_question`, `actors`, `inputs`, `states`, `initial_state`, `events`, `transitions`, `invariants`, `visual_channels`, `controls`, `predict_prompt`, `explain_prompt`, `test_cases`, `offline`, `locales`, `reduced_motion_behavior`, `limitations`, `runtime_status`.

- Mỗi model có **câu hỏi học tập**, actor/đối tượng, biến vào, event, state trước/sau, trạng thái đầu, output thấy được, kiểm chứng, cách reset/thử lại và giới hạn mô phỏng. Ít nhất **một thao tác học sinh làm có ý nghĩa** và **hai trạng thái/kết quả có thể phân biệt**; hover, autoplay video/GIF, hoặc bấm Play chạy animation đơn thuần **không đủ**.
- Chọn loại mô hình: **Flow/Sequence**, **State Machine**, **Causal Sandbox**, **Branching**, **Comparison** hoặc **Hybrid**. Chọn mức tương tác **L1 Step/Replay**, **L2 Parameter Exploration** hoặc **L3 Construct/Diagnose** theo mục tiêu; không bắt buộc mọi model đạt L3. Với DNS cache, **SHOULD L2** để đổi HIT/MISS/EXPIRED và đối chiếu đường đi.
- Viết **event/transition/guard/invariant**, đường dẫn cho trường hợp sai/biên, kiểm thử bình thường và ngoại lệ, cách ngăn lộ trạng thái/đáp án tương lai. `MODELED` (đã thao tác chạy) **khác** `VERIFIED` (HS giải thích được). Không tự tăng mastery chỉ vì nhấn Run.
- Dùng thông tin nguồn để xác minh: các nhãn trên mũi tên là **payload đúng**, hướng **sender→receiver** đúng, DNS Answer không bị biểu diễn thành HTML, có IP chưa có nghĩa đã tải xong trang. Mọi giản lược hệ thống thật phải công bố trong mô hình VI/EN.

### Bước 07.3 — Thiết kế sơ đồ và tương tác theo trạng thái

1. Ưu tiên **HTML semantic + SVG DOM + CSS Grid/Flex + JavaScript thuần** cho mô hình Browser/DNS/Web Server, vì có thể chọn từng actor, gắn nhãn và chạy offline. Không dùng WebGL/Canvas/framework nặng chỉ để trang trí; chỉ dùng khi mục tiêu kỹ thuật thật sự cần.
2. Thiết kế **state machine độc lập giao diện**: `state_next = transition(state, event, input)` → `render(state_next)` → `animate(prev,next)` *nếu motion được bật*. Animation không được là nguồn sự thật, không dùng `animationend` để quyết định kết quả kiến thức. Dùng `textContent` và kiểm soát dữ liệu đầu vào, không chèn trực tiếp input người học qua `innerHTML` không an toàn.
3. Luôn làm **nguồn → payload → đích** hiển thị ngay trên sơ đồ: làm sáng đúng cạnh và actor, token có nhãn theo đường đi, actor nhận đổi trạng thái, step counter/log cập nhật đồng bộ. **Log chỉ bổ trợ**, không thay thế hoạt động nhìn thấy trên sơ đồ; vị trí actor ổn định qua các bước.
4. Điều khiển gồm một CTA chính có động từ cụ thể và các nút cần thiết **Step, Back/Replay, Reset, Pause/Skip/Stop** khi hợp lý; không tạo hai nút khác tên cùng thực hiện một action, không nhầm **Next Step của model** với **Next scene** của website. Input chưa đủ điều kiện thì phản hồi ngắn có cách sửa; spam Next/Back/Reset không tạo duplicate event.
5. Mô hình phải hỗ trợ **ít nhất một đường thử lại** và tạo đầu ra khác nhau khi đổi trường hợp; reset hủy timer/animation trước và đưa về state đúng. Đổi ngôn ngữ không được xóa tiến trình; đi scene khác phải hủy animation/timer cũ.

### Bước 07.4 — Motion Contract & phân bổ thời gian

- **Hai lớp tách riêng:** màn học hiển thị ngay và title highlight 3s; model chỉ chạy khi được điều khiển; tắt motion không đổi state hay lộ đáp án.
- Độ trễ UI **gợi ý** 120–250ms; di chuyển token **gợi ý** 300–800ms/đoạn. Không dùng khoảng chờ biến thiên theo độ dài chữ, không dựng chuỗi reveal lần lượt. Các thời lượng là giá trị thử, **không khóa tương tác hoặc thời gian đọc**.
- Mỗi bước của mô hình **giữ state + nhãn cho đến bước tiếp theo**; step tiến do học sinh chủ động, Play cả chuỗi chỉ khi học sinh bật riêng. Chỉ một focal target mỗi bước; cấm chớp liên tục, rung chữ, zoom xoay vô cớ hoặc nhiều animation gây mất hướng.
- Có `prefers-reduced-motion` cùng công tắc Giảm/Tắt chuyển động: **cùng transition/state/output nhưng hiển thị lập tức**. Animation không che văn bản, không khiến nội dung nhảy layout hoặc token chồng lên nhãn. Hiệu ứng cần kéo dài/lặp không thiết yếu phải có Pause/Stop/Hide.
- Khi thao tác dồn, Reset, đóng modal, đổi scene, tab hidden hoặc tắt motion giữa chừng: **cancel toàn bộ timers/animations** liên quan; dùng token/generation guard để callback cũ không đè state mới.

### Bước 07.5 — Visual Design & viewport contract

- Chọn focal point theo nhiệm vụ, ưu tiên mô hình trung tâm và nhãn dễ đọc. Màu chỉ là một tín hiệu: thêm chữ, mũi tên, hình/đường biểu diễn; không dùng màu đơn độc để mã hóa thông tin.
- **Đảm bảo tại desktop 1280×720 và 1366×768**: sơ đồ, câu hỏi, điều khiển, nhãn, log quan trọng cùng nhìn thấy, không bị cắt hoặc cuộn để học CORE. Thiết kế thử thêm 1600×900, 1920×1080. Mô hình không chiếm vùng **fixed Previous (dưới trái) / Next (dưới phải)** của website. `overflow:hidden` **không được dùng để che lỗi**. Desktop zoom 100% không scroll; mobile/zoom 200% có responsive/fallback cuộn an toàn nếu cần.
- Gợi ý nội bộ: tiêu đề 24–32px, nội dung từ 16px, nhãn mô hình 14–16px khi phù hợp, đối tượng thao tác nên lớn khoảng 44×44px; không cố thu nhỏ chữ để nhét thêm nội dung. Tránh diện tích lãng phí cho chrome trang trí, giữ khoảng trắng/độ tương phản và vị trí actor cố định qua các pha.
- Tooltip chú thích hover/focus **tự ẩn khi rời vùng**; touch có click/Esc/tap ngoài. Modal DIAGNOSE có `prior_knowledge`, `illustration`, `link_to_new_topic`, focus trap/restore focus và điều khiển rõ, không dùng modal để giấu CORE thiết yếu.

### Bước 07.6 — Sản xuất các học liệu khác

- Tạo **SVG/ảnh gốc, flashcard, mindmap, bài Review, game, video/GIF nếu cần, teacher guide và bản VI/EN** dựa Skill 05 và 06. Mọi tài nguyên đều có mục tiêu và chức năng cụ thể; không ép ảnh tĩnh thành mô hình.
- Nếu tài nguyên được coi là `MODEL_REQUIRED`, **MUST** cung cấp file HTML/SVG/JS tương tác hoặc một bản có tương tác tương đương được kiểm thử; không được thay bằng poster/video auto-play rồi ghi `READY_ASSET`.
- Đối với DIAGNOSE đúng: tạo minh họa kiến thức nền tương tác nhỏ, liên hệ bài mới; với INTRODUCTION: tên công cụ, lợi ích, một xem trước cơ chế ngắn. Dùng chung engine nếu có thể mà không tạo nút hoặc sơ đồ duplicate.
- Mỗi học liệu có `alt`, `caption` và khi có diễn biến theo thời gian phải có `transcript` hoặc mô tả tuần tự đầy đủ ở **VI/EN**; nguồn, giấy phép và bản fallback offline. Không phân phối ảnh tham chiếu ngoài quyền sử dụng.

### Bước 07.7 — Kiểm thử, thu thập bằng chứng và gắn trạng thái trung thực

- Viết unit test kiểm tra `transition`/guard/invariant; kiểm tra **ít nhất hai nhánh khác nhau** và các trường hợp lỗi/biên với đầu vào thực. Với DNS: HIT/MISS/EXPIRED, Reset giữa animation; Web: thiếu IP → có IP → Request → nhận HTML → render.
- Browser test thật: ảnh chụp **trước/sau** và video/trace hoặc keyframe thể hiện token/nhãn đang chuyển động đúng cạnh; DOM-only hoặc screenshot tĩnh **không đủ chứng minh motion đạt**. Thử bấm nhanh/Reset/đổi VI-EN/chuyển scene/offline/reduced motion.
- Kiểm tra viewports **1280×720, 1366×768, 1600×900, 1920×1080**; stress test 390×844, 360×640, zoom 200%; đo geometry + ảnh chụp, xác nhận nút click được và không có clipping. Nếu không thực thi được file:// hay kiểm trên máy học sinh, ghi `NOT_TESTED` riêng, không nói đã PASS.
- Accessibility: hỗ trợ bàn phím, thứ tự focus, focus-visible, tên nút, trạng thái đọc được không phụ thuộc màu; modal/tooltip có hành vi đúng; phản hồi quan trọng có text alternative, hỗ trợ `aria-live` phù hợp. **WCAG 2.2 AA** là mục tiêu đối chiếu, **2.3.3 Animation from Interactions là AAA** (mục tiêu thêm), không tuyên bố phù hợp khi chưa kiểm thử.
- Student bundle **không** chứa teacher key/đáp án đánh giá độc lập; key quiz luyện tập client-side sau check được phép; rà soát bundle ZIP sau đóng gói. Không nhầm `TESTED_AUTOMATED` với `VERIFIED_IN_PRACTICE`.
- Áp dụng checklist **30 tiêu chí** tại `../../templates/skill07_model_qa_checklist.csv`; lỗi P0 → `BLOCKED`/`NEEDS_REVIEW`, **không được nâng READY_ASSET**. Chấm rubric 100 = chính xác 30 + tương tác 30 + hình/hiệu ứng 20 + khả dụng/offline 20; ngưỡng đề xuất ≥85 **và không có P0 lỗi**. Điểm rubric là tiêu chuẩn nội bộ, không thay được kiểm thử người học.

### Direct Learning v2.3 — yêu cầu bắt buộc
- Mỗi model_id có model_view_id, điều kiện, controls, dữ liệu và bằng chứng riêng theo scene; DNS 09 MISS-only, 10 comparison HIT/MISS/EXPIRED. Kiểm view thực sự khác và có kết luận CORE chuẩn hóa ở màn học. Không buộc hoàn tất model trước Next.
- Đọc và áp dụng `../../policy/DIRECT_LEARNING_STANDARD_V2_3.md` (DL01–DL07); quy tắc cũ trong tài liệu lịch sử không còn hiệu lực.


### Guided & Visual Learning v2.4 — yêu cầu bắt buộc
- Đọc `../../policy/GUIDED_VISUAL_STANDARD_V2_4.md` (GV01–GV06); ưu tiên quy tắc này nếu xung đột với v2.3, không dùng footer.
- Sản xuất SVG/hình lời dẫn, cue Recall, review art và summary, local SVG icon đồng bộ; bảo toàn model v2.1 và tách view.

### Thực thi và kiểm tra v2.4.1
1. Sản xuất từng asset và điền manifest guided visual: ID/role/KU/cluster/planned key, path/hash, source/license, alt/caption VI/EN, spoiler_check, test_case_refs, status. Chưa có file chỉ SPEC_ONLY/BLOCKED.
2. Preview từng cue Recall cùng keyword; kiểm chữ trong SVG/ảnh và alt. Summary là tài nguyên riêng mở sau lượt thử, không dùng làm cue trước Recall.
3. Tách engine và view contract: điều kiện đầu, controls, state quan sát, nhiệm vụ và dữ liệu riêng. Cùng engine không đồng nghĩa hai scene cùng render.
4. Giữ 30 tiêu chí model, kiểm trước/sau, reset giữa animation, motion off, VI/EN, offline; asset readiness và test status là hai trục. Rubric không bù lỗi chặn.
5. Dùng planned_scene_key trước Skill09; nhận ID map sau này để cập nhật liên kết, không cấp ID cạnh tranh.
6. Nếu không có MODEL_REQUIRED, vẫn tạo các báo cáo model/view/test/checklist theo tên canonical với model_count=0, lý do và từng tiêu chí NOT_APPLICABLE; không ghi đã chạy test model. Đây là báo cáo thật, không phải model giả. Các thư mục model/key/media chỉ tạo khi có file phù hợp; khai báo applicability nếu không dùng.

## Đầu ra bắt buộc
Bổ sung `07-guided-visual-asset-manifest.json`.

Bổ sung `07-model-view-contracts.json`.


- `07-asset-manifest.json`: mỗi `asset_id`/`model_id`, `path`, `mime`, SHA-256, source/license, VI/EN alt/caption/transcript, offline fallback, status, last_test, test_status, open_issues.
- `07-student-media/`: file học liệu chạy/đọc độc lập được phép phát cho học sinh, không có teacher key/đáp án bị khóa.
- `07-teacher-key/`: lời giải/tài liệu kiểm tra độc lập với gói học sinh.
- `07-interactive-models/`: source HTML/CSS/JS/SVG, `model_contract.json` cho **từng** model, mô tả limitation, runtime status rõ ràng.
- `07-model-test-cases.json` và `07-model-qa-checklist.csv`: test state, motion on/off, direct display, keyboard, viewport, offline; PASS/FAIL/NOT_RUN + evidence.
- `07-test-evidence.json`: case ID, dữ liệu test, expected/actual, result, browser/viewport/mode/time, screenshot/trace/video file, giới hạn kiểm tra.
- `07-media-viewport-spec.md`: vùng thiết kế, cỡ chữ, actor size, CTA, desktop no-scroll và mobile/zoom fallback.
- `07-resource-usage.md`: hướng dẫn VI/EN về cách mở, runtime, offline, license/nguồn và trạng thái từng asset.
- `output_manifest.json`: `skill_id=SKILL07`, `version`, `input_refs`, `output_files`, `evidence`, `open_issues`, `gate_status`, `next_skill`. File thật phải tồn tại; file chưa sản xuất ghi SPEC_ONLY/BLOCKED. Nhóm thư mục không áp dụng ghi applicability NOT_APPLICABLE cùng lý do theo EXECUTION_AND_HANDOFF.md, không tạo đường dẫn giả.

## Điều kiện nghiệm thu riêng (Gate 07)

**BLOCKED (lỗi chặn, severity theo QA_VIEWPORT_AND_TIMING.md):** mô hình CORE giả tương tác, sai payload/direction/state, không đổi state/không thử lại, motion off làm sai state hoặc lộ đáp án, mất nội dung CORE hoặc điều khiển không dùng được.

**READY_ASSET** chỉ khi file thật và tất cả tiêu chí bắt buộc áp dụng đạt, có bằng chứng; lỗi P0/P1 phải xử lý trước release; ngoại lệ chỉ với tiêu chí không chặn; ngưỡng rubric tham chiếu ≥85. `PROTOTYPE` là mô hình đã chạy nhánh cơ bản nhưng chưa đủ kiểm chứng; `SPEC_ONLY` là mới mô tả; `BLOCKED` là lỗi ngăn tích hợp; `READY_REFERENCE` dành cho tài liệu tham khảo. `VERIFIED_IN_PRACTICE` chỉ sau kiểm tra với học sinh/thiết bị thật, không suy từ browser test.

Không đạt Gate 07 thì **không tự chuyển sang Skill08** như thể toàn bộ học liệu đã hoàn thành. Có thể bàn giao prototype để xem thử khi ghi rõ rủi ro và cổng chặn.

**Gate v2.3:** View và state đúng, motion độc lập, không duplicate scene.

## Bàn giao và xử lý sai lệch

- **Skill08** nhận `asset_id`/`model_id`, mô tả các bước dùng học liệu trong kế hoạch 5512, không mặc định prototype đã qua QA.
- **Skill09–10** chọn layout/scene theo mô hình thật và viewport/attention plan, giữ một CTA chính và không tạo nút model trùng.
- **Skill11** tích hợp đúng state machine, hủy timer khi đổi scene, dùng cùng tên events/IDs, không thay bằng sơ đồ tĩnh hoặc làm lộ teacher key.
- **Skill12–13** kiểm thử logic, attention, a11y, motion, độ đúng và nghiệm thu; thay đổi runtime phải có ảnh hưởng được kiểm định lại.
- Lưu traceability: `model_id` ↔ `ku_ids` ↔ `objective_ids` ↔ `activity_ids` ↔ `asset_id` ↔ `scene_id` (khi Skill09 có). Trước Skill09 dùng planned_scene_key; Skill09 cấp scene_id qua 09-id-crosswalk.json.

## Quy tắc chung không được bỏ qua

- Một topic ở một lần chạy; mỗi CORE có cặp Recall → Review đúng thứ tự; đủ 5 yếu tố ghi nhớ khi thực sự phục vụ mục tiêu. Ảnh động phải có giá trị sư phạm, không kéo dài thời gian đọc hoặc buộc đợi.
- Direct display chỉ hiện nội dung hợp lệ; không mở teacher key hay tự chạy model. Một viewport desktop và fixed nav là trách nhiệm liên Skill09–13.
- Mọi tài nguyên nhận trạng thái thật; mỗi asset có checksum/nguồn/QA; báo cáo trung thực điều gì chưa được thử. Chỉ chuyển Skill tiếp theo sau người dùng duyệt kết quả.

## Gate v2.4
Asset thật, alt, hash, quyền, test; không tuyên bố READY khi SPEC_ONLY.

---

# SKILL07 — Activity Resource Designer: bổ sung v2.5
**Bản định nghĩa mới:** `2026.11-ONE_TOPIC-FOCUSLAB-V2.5`; áp dụng cùng bản v2.4.1, không thay thế thủ tục cũ.
**Bản gốc bắt buộc đọc:** https://github.com/minh6a2ab2-png/web_lesson_project/blob/0d1e19ddc263c83a85dd14391b8d226c675fadff/FocusLab_13_Skills_v2.4.1/skills/skill07/SKILL.md
**SHA-256 gốc:** `5db9fee873c0ec48fd78f187aecdb9695779bd78a5fb122e872c3e78535ed71c`.

## Bổ sung bắt buộc (VE)
- Quy chuẩn: VE02,VE06,VE08,VE09. Đọc `../../policy/VISUAL_EXCELLENCE_V2_5.md`, `../../policy/MINDMAP_STATIC_SPACE_V2_5.md`, `../../policy/EXECUTION_V2_5.md`.
- Sản xuất thật ảnh/diagram/screenshot và UI assets theo brief; kiểm license, crop, alt, spoiler. Dùng R5/R2 làm reference; tách engine/config theo topic, không copy hardcode 15 node, kiểm shape/size/anchors/parent/edge, idle static và export. Giữ 30 test model; chạy checklist Mindmap và cung cấp log/screenshots, file standalone.

## Đầu ra bổ sung
`07-visual-assets-and-mindmap-manifest.json` — trường tối thiểu: asset_id,path,sha256,provenance,license,alt_vi_en,role,visual_type,model_or_map_ref,test_refs,status,open_issues. Trạng thái và hash theo manifest v2.4.1. Các trường không áp dụng ghi lý do, không tạo evidence giả. Giữ tất cả outputs trong registry gốc.

## Gate 07 v2.5
File thật + test evidence; nếu thiếu asset hoặc engine chỉ PROTOTYPE/SPEC_ONLY/BLOCKED; ảnh dựng không giả ảnh thật.

## Bàn giao
Consumer bổ sung: SKILL08, SKILL09, SKILL10, SKILL11, SKILL12, SKILL13. Dùng nguồn canonical và hash. Dừng chờ duyệt nếu chưa cho phép chạy tự động. Nếu chưa có baseline v2.4.1 đúng hash hoặc không thể đọc, BLOCKED.
