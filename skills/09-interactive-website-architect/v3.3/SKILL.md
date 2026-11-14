---
name: interactive-website-architect
version: 3.3-prerun
role: Skill 09 of 12 — Interactive Website Architect / Kiến trúc website bài giảng
status: UPDATED_DEFINITION_NOT_EXECUTED
scope: general reusable skill; example Cookies only
---

# SKILL 09 v3.3 — INTERACTIVE WEBSITE ARCHITECT (SELF-LEARNING FIRST)

> **Mục tiêu:** Chuyển thiết kế sư phạm, học liệu và kịch bản từ Skills 01–08 thành kiến trúc website học tập mà **một người mới bắt đầu vẫn có thể tự học khi không có giáo viên hỗ trợ trực tiếp**. Skill 09 tạo đặc tả có thể thi công và một nguyên mẫu kiến trúc khi cần; **không thay thế** thiết kế hi-fi ở Skill 10, lập trình đầy đủ ở Skill 11, kiểm thử nghiệm thu ở Skill 12.

**Phạm vi phiên bản:** Chỉ chỉnh **định nghĩa Skill 09 và điều kiện chạy**. Chưa chạy lại bài Cookies, chưa thay đổi 22 scene hoặc file nguyên mẫu hiện có. Giữ nguyên hệ thống **12 Skills**. Bất kỳ bài nào khác có thể dùng số màn khác, không cố định 22.

## 1. Đầu vào bắt buộc

1. **Skills 01–04**: tài liệu nguồn, kiến thức đã xác minh, mục tiêu, chuẩn đánh giá, chân dung học sinh, hoạt động và mức hỗ trợ.
2. **Skill 05**: danh mục học liệu, bản quyền/nguồn, trạng thái `READY`, `PROTOTYPE`, `SPEC_ONLY`, `BLOCKED`, phương án offline, alt/caption/transcript khi thích hợp.
3. **Skill 06**: kịch bản sư phạm theo trình tự, câu hỏi dẫn, dự đoán, ví dụ, phản ví dụ và dấu hiệu phản hồi.
4. **Skill 07**: file tài nguyên thực tế, mô phỏng, học liệu, biểu mẫu, hoạt động, nguồn/bản kiểm thử.
5. **Skill 08**: giáo án Công văn 5512 (đặc biệt mục tiêu, thời gian, hoạt động học, kiểm tra đánh giá); nếu chưa có, đánh dấu **BLOCKED/PENDING**, không tưởng tượng nội dung.
6. Các PowerPoint mẫu được chọn làm tài liệu tham khảo **cách triển khai nội dung và bố cục**, không sao chép máy móc; nếu không có, không chặn việc thiết kế.

**Bất biến:** Không thay đổi mục tiêu, đề bài, phạm vi kiểm tra, thời lượng hoặc trình tự đã chốt mà không ghi rõ quyết định; không bổ sung kiến thức ngoài nguồn như thể đã được học. Bài dạy 1:1 vẫn hỗ trợ tương tác với gia sư, nhưng **khả năng tự học độc lập là điều kiện nghiệm thu chính**.

## 2. Triết lý thiết kế

- **Student-first:** Học sinh phải tự trả lời được: “Em học phần này để làm gì?”, “Em làm gì ngay bây giờ?”, “Bắt đầu từ đâu?”, “Em biết mình hoàn thành bằng cách nào?”.
- **Một màn = một mục tiêu nhận thức quan sát được**, không đồng nghĩa một trang giáo án; một hoạt động có thể có nhiều màn.
- **Hiện tượng → dự đoán → thử/quan sát → giải thích → phản hồi → chủ động nhớ lại**. Bằng chứng học tập phải được sinh ra từ hành động của học sinh, không phải số màn đã xem.
- **Màn học tối giản:** chỉ nội dung của nhiệm vụ hiện tại và lớp trợ giúp theo ngữ cảnh; các thông tin khác ẩn trong menu. Không hiển thị logo lớn, footer, tab chế độ, bảng mục lục hoặc đoạn mô tả sản phẩm luôn mở.
- **Nội dung đi trước hiệu ứng:** ưu tiên layout kiểu slide nếu Story/Lab/Map/Focus không đem thêm giá trị sư phạm hoặc chưa có học liệu hoạt động.
- **Hỗ trợ tăng dần, không làm thay:** gợi ý phải giúp học sinh tự suy luận, không lộ lời giải ngay lập tức. Với bài EXIT tự đánh giá, khóa gợi ý dẫn đến đáp án và nội dung đã học.

## 3. Hợp đồng bắt buộc cho MỖI scene

Mỗi scene (trừ ngoại lệ được ghi rõ của màn bìa/EXIT) phải có các thành phần **học sinh thực sự nhìn thấy hoặc mở được**; không chỉ là metadata trong JSON.

| Mã | Thành phần | Yêu cầu có thể kiểm thử |
|---|---|---|
| S01 | **Mục đích (page_purpose)** | Một câu ngắn “Sau màn này em sẽ…”, dùng động từ quan sát được (nhận biết, chọn, giải thích, phân loại, vẽ…). |
| S02 | **Nhiệm vụ (student_task)** | Một mệnh lệnh rõ: xem gì, chọn gì, viết gì; tên sản phẩm cần tạo; chỉ dùng từ vựng đã biết hoặc có giải nghĩa ngay. |
| S03 | **Trình tự (steps)** | 2–5 bước nhỏ; phân biệt quan sát → dự đoán → thao tác → kiểm tra → ghi nhớ; đánh dấu bước đang thực hiện. Không bắt học sinh đọc hết khối văn bản trước khi bắt đầu. |
| S04 | **Trợ giảng ảo (tutor)** | Có một lời dẫn ngắn theo ngữ cảnh; icon/mascot + khung thoại gọn, có thể thu gọn; nút “Nhắc nhiệm vụ”, “Gợi ý”, “Giải thích thêm”. |
| S05 | **Gợi ý tăng dần (hints)** | Tối đa ba nấc theo `H1 → H2 → H3`, chỉ mở theo yêu cầu hoặc khi lỗi; hỗ trợ suy nghĩ trước, giải thích mẫu sau khi đã thử. |
| S06 | **Phản hồi (feedback)** | Có trạng thái trước/sau trả lời; nói *vì sao* và đề xuất bước tiếp, không chỉ “đúng/sai”; nếu cần chấm tay, quy định minh bạch. |
| S07 | **Tiêu chí hoàn thành (completion_criteria)** | Mô tả cụ thể em làm xong khi nào; khác với “đã xem” hoặc “đã bấm lưu”; không đòi tiêu chí vượt khả năng đánh giá thực tế. |
| S08 | **Sản phẩm/bằng chứng (evidence)** | Câu trả lời, sơ đồ, phân loại, tệp, ghi chú, giải thích bằng lời hoặc trạng thái thao tác; nếu lời nói không được ghi tự động phải có cách xác nhận thủ công. |
| S09 | **Kiến thức chốt (knowledge_capsule)** | Một thẻ tóm tắt *kiến thức đúng đã kiểm chứng*; chỉ mở sau khi có hành động học phù hợp, lưu vào Sổ tay theo quy tắc. |
| S10 | **Dẫn sang màn tiếp (transition)** | Một câu nối: vừa biết gì, màn sau giải quyết câu hỏi gì; không bắt buộc phát thành tiếng. |

**Ngoại lệ rõ ràng:** màn bìa/khởi động có thể chỉ có dự đoán và mục đích, không buộc gợi ý ba nấc. **EXIT** có mục tiêu và hướng dẫn thao tác nhưng **không được** cung cấp gợi ý nội dung, đáp án, knowledge capsule, hoặc mở Sổ tay chứa lời giải trong thời gian làm bài. Trợ giảng ở EXIT chỉ hỗ trợ điều hướng/đọc yêu cầu trung tính.

## 4. Hệ thống trợ giảng ảo — Tutor Layer

### 4.1. Định nghĩa trung thực

Mặc định là **trợ giảng ảo theo kịch bản (scripted guide)**, không tự nhận có AI tạo sinh hoặc hiểu câu trả lời mở nếu chưa có engine thật. Có thể mang hình đại diện giáo viên, robot hoặc biểu tượng trung tính. Nếu yêu cầu tích hợp AI hội thoại thật, chỉ lập đặc tả/điểm nối và ghi `SPEC_ONLY` cho đến Skill 11; không gọi là chức năng đã hoạt động. Không truyền câu trả lời/hồ sơ học sinh đến dịch vụ ngoài nếu chưa có sự đồng ý và cơ chế bảo vệ.

### 4.2. Thiết kế lời thoại

- **Intro (tối đa ~35 từ):** kết nối kiến thức đã học và mục tiêu hiện tại, không nói hộ đáp án.
- **Prompt reminder (~15–30 từ):** nói học sinh cần làm bước nào, điểm cần chú ý.
- **H1 – câu hỏi gợi mở:** giúp định hướng quan sát, không nói kết quả.
- **H2 – dẫn từng bước:** gọi tên một dữ kiện liên quan hoặc quy tắc áp dụng.
- **H3 – trợ giúp mạnh:** phân tích một ví dụ tương tự hoặc cho khung điền; chỉ sau một lượt thử có ý nghĩa; không dùng H3 trong EXIT.
- **Feedback correct/incorrect:** giải thích ngắn theo lý do, khuyến khích sửa và thử lại; tránh lời khen lặp lại hoặc làm giảm tính tự chủ.
- **Transition:** nối mạch từ nhiệm vụ hiện tại sang nhiệm vụ mới.
- **Common misconceptions:** ít nhất một hiểu nhầm đáng gặp với nhiệm vụ có nguy cơ nhầm lẫn, kèm cách phát hiện và câu hỏi dẫn sửa.

Lời thoại phải được **viết sẵn cụ thể cho từng scene**; cấm placeholder chung kiểu “Hãy làm bài tập này”, “Tốt lắm” lặp khắp website. Dùng ngôn ngữ học sinh mới học, giải thích thuật ngữ trước khi dùng hoặc cho popover khái niệm.

### 4.3. Quy tắc hiển thị

- Một lời thoại ngắn hiển thị khi vào scene ở **bong bóng/khung hướng dẫn nhỏ** gắn với nội dung; mặc định có thể đóng/thu gọn và **luôn có nút mở lại**.
- Ưu tiên đặt dọc mép dưới/trong canvas, hoặc bên phải khi rộng; không che câu hỏi, đáp án, vùng thao tác, công cụ điều hướng hay nội dung chạm.
- Khi có hướng dẫn theo bước, thông báo đổi đúng lúc và không tự bật hàng loạt; học sinh có thể xem lại lời dẫn trước.
- Không tự phát âm thanh, không chớp/di chuyển vô hạn; có `prefers-reduced-motion`, bàn phím, nhãn đọc màn hình và text fallback.
- Với **Dual View**, chỉ một tutor theo vùng đang có tương tác; nút đổi vùng và “Trợ giúp màn trái/phải”; không hai bong bóng đọc cạnh tranh nhau. Trên điện thoại ưu tiên khung lời dẫn gọn dưới vùng đang xem.
- Trong **Focus/Recall**, ưu tiên ẩn dẫn dắt sau khi đã đọc để không lộ đáp án/đánh lạc hướng.

## 5. Lựa chọn layout và phương thức trình bày

Có các renderer: `Presentation` (slide sáng rõ), `Story` (tình huống có chuỗi bước), `Lab` (mô phỏng input → output), `Knowledge Map` (quan hệ ý), `Focus/Recall` (truy hồi không nhìn mẫu), `Assessment` (EXIT). Các renderer **không phải tab để người học phải chọn**: Skill 09 gán theo nhiệm vụ, nguồn lực và tiêu chí. Giao diện đẹp không đủ lý do thay mode.

### 5.1. Rubric hai tầng

- **Tầng A: phù hợp nhiệm vụ**: chấm 0–3 theo bảng trong `references/mode-selection-rubric.md`.
- **Tầng B: kiểm định khả thi**: 6 tiêu chí, mỗi tiêu chí 0–2: `Pedagogy Fit`, `Interaction Value`, `Resource Readiness`, `Attention Fit`, `Resilience`, **`Self-Learning Guidance`**.
- Dùng layout nâng cao chỉ khi tổng **≥10/12**, và các mục `Pedagogy Fit`, `Resource Readiness`, `Attention Fit`, `Self-Learning Guidance` đều **không bằng 0**; nếu không, dùng `Presentation` và ghi lý do fallback. Đây là quy tắc thiết kế nội bộ, không phải thang đo hiệu quả đã được kiểm chứng khoa học.

### 5.2. Dual View là công cụ toàn cục, không phải mode được chấm để tự bật

- **Nút Dual View luôn xuất hiện trên thanh trên** ở mọi scene, bấm là dùng được; không tự bật.
- Hai scene liền kề `N/N+1`, hoặc chọn hai scene bất kỳ không thuộc EXIT; hai vùng có thể cuộn/điều hướng độc lập, hoán đổi, tỷ lệ 50/50–60/40–40/60; tablet/mobile có thể xếp dọc.
- Hỗ trợ scene + tài liệu đã học hoặc scene + vùng thực hành khi không làm lộ đáp án. Dual vẫn giữ nút ở EXIT nhưng chỉ mở **đề + giấy nháp**; chặn quay về nội dung cũ, đáp án và Sổ tay trong lúc đánh giá.

## 6. Bố cục hiển thị chuẩn

**Thanh công cụ trên duy nhất:** `[←] [→] [số màn] ... [Dual View] [Sổ tay] [Lưu] [Công cụ]`. Các chức năng này luôn có thể truy cập. Hướng dẫn không được biến thành sidebar cố định cồng kềnh.

**Canvas học tập:** `mục đích` một dòng dễ đọc → `nhiệm vụ` nổi bật → `học liệu/thao tác chính` diện tích lớn → **tutor bubble** ngắn, có thể thu gọn. `Các bước` và `tiêu chí hoàn thành` hiển thị bằng giao diện ngữ cảnh; khi cần gọn chỉ để một dòng trạng thái “Bước 2/4” và nút “Xem hướng dẫn”. Không bắt buộc nhồi cả mười trường dữ liệu lên trang đồng thời.

**Ẩn mặc định:** logo, hero marketing, footer, danh sách màn, ma trận chấm, badge kỹ thuật, tab đổi mode, tài nguyên phụ và đáp án. Menu mở khi yêu cầu; khi đóng canvas trở lại sạch.

## 7. Sổ tay học tập & trạng thái

- `Nhiệm vụ hoàn thành`: lưu `scene_id`, mục đích, nhiệm vụ, câu trả lời/sản phẩm, hỗ trợ đã dùng, thời gian, trạng thái thật (đã gửi/chưa kiểm tra/được chấm), nút “Xem lại”.
- `Kiến thức đã học`: thẻ kiến thức đã xác minh, tách khỏi câu hỏi; không dùng câu hỏi làm thẻ tri thức; chỉ mở sau lượt thử hoặc xác nhận hoàn thành phù hợp.
- Lưu kết quả không đồng nghĩa đạt mục tiêu: **visited ≠ attempted ≠ completed ≠ mastered**. Nếu chưa tích hợp chấm tự động thì hiển thị “Đã lưu – chưa được chấm”.
- Lưu cục bộ/offline có phương án thông báo khi bị chặn; xuất/nhập dữ liệu khi được thiết kế và kiểm thử; không suy đoán dữ liệu sẽ tự đồng bộ giữa máy.
- Sổ tay phải có đường đi xem lại kết quả hoạt động trước nhưng **bị chặn trong EXIT**. Không đóng gói đáp án giáo viên vào client.

## 8. Quy trình Skill 09 (10 bước)

1. **Đọc nguồn** Skills 01–08, tiêu chí, thời gian, asset statuses; ghi nguồn thiếu.
2. **Phân đoạn** chặng học → scenes dựa trên hành động tư duy, bảo toàn mục tiêu và câu hỏi nguồn.
3. **Viết content copy chuẩn học sinh** cho mỗi scene: ngôn ngữ sáng rõ, từ mới có chú giải, ví dụ giữ cùng bối cảnh.
4. **Gắn mục đích – nhiệm vụ – bước làm – tiêu chí hoàn thành**; thử đọc như người chưa học kiến thức.
5. **Viết kịch bản trợ giảng ảo theo scene**: intro, H1–H3 theo nhu cầu, feedback, misconceptions, transition; không thay bằng mô tả chung.
6. **Ghép học liệu và quyền reveal**: dùng file Skill 05/07 có thật; nếu thiếu, đề xuất P0 bổ sung và fallback, không nhận `READY` khi chỉ có ý tưởng.
7. **Chọn layout** theo rubric 0–3 và 10/12; thiết kế states responsive, focus, offline, keyboard; Dual luôn có và tutor thích ứng.
8. **Thiết kế state/evidence/notebook**; kiểm soát các nhánh thoát, làm sai, làm lại, bỏ qua, quay lại, dùng gợi ý, hoàn thành, EXIT.
9. **Sinh tài liệu bàn giao** (bảng scene, schema, lời thoại, tương tác, wireframe, audit) với ID xuyên suốt; nếu làm prototype phải dán nhãn `PROTOTYPE`.
10. **Tự kiểm tra/gate và đồng bộ**: chạy checklist tự học, a11y, privacy, nguồn, artifact; lưu version lên Drive/GitHub trong phiên thực hiện và xác minh riêng từng điểm.

## 9. Bộ đầu ra bắt buộc

Tên file sau đây là **bộ chuẩn tái sử dụng**; có thể giữ các tên đầu ra cũ để tương thích các Skills 10–11:

1. `09-slide-map.md`: chặng, scene IDs, thời gian, mục tiêu, hành động, asset, bằng chứng, transitions.
2. `09-page-by-page-content.md`: **copy thật** từng scene cho học sinh: mục đích, nội dung, nhiệm vụ, trình tự, tiêu chí, câu chữ hiển thị, giải nghĩa thuật ngữ.
3. `09-ai-tutor-script.md`: lời dẫn, nhắc nhiệm vụ, hints H1–H3, feedback đúng/sai, hiểu nhầm, transition từng scene; ghi rõ `SCRIPTED` hay `SPEC_ONLY`.
4. `09-interaction-spec.md`: sự kiện click/drag/type, trạng thái, phản hồi, reveal gate, tự học khi sai, fallback.
5. `09-state-model.md`: state/evidence/assessment/notebook; trạng thái câu trả lời, hỗ trợ, kiến thức chốt, đồng bộ giữa scene và Dual.
6. `09-navigation-i18n-a11y.md`: thanh công cụ, Dual, dialog, tutor bubble, độ lớn chữ, keyboard, mobile, localization, offline.
7. `09-mode-suitability-matrix.csv`: chấm điểm cho **mọi scene**, chọn renderer + lý do; bản không phù hợp giữ Presentation.
8. `09-asset-gap-register.csv`: tài nguyên dùng, đường dẫn file kiểm tra được, bản quyền, alt/caption, fallback, tình trạng, người phụ trách/điều kiện bổ sung.
9. `09-implementation-contract.json`: cấu trúc máy đọc được theo `references/scene-contract-example.json`.
10. `09-wireframe-spec.md` hoặc bản wireframe HTML: thiết kế low-fi các dạng scene và trợ giảng, Sổ tay, Dual, EXIT (không tuyên bố trang học đã lập trình).
11. `09-traceability-gate.md`: truy vết `nguồn → mục tiêu → scene → nhiệm vụ → trợ giúp → phản hồi → bằng chứng`; kiểm thử và tình trạng nghiệm thu.
12. `09-handoff-to-10-11-12.md`: những gì đã thiết kế, chưa triển khai và điều kiện nghiệm thu về sau.

**Không tạo output giả:** Một `SPEC_ONLY` phải nói rõ chưa được sản xuất. Không đổi tên/hủy bộ 12 Skills; không âm thầm bổ sung mục tiêu hay giải pháp không có trong dữ liệu trước.

## 10. Gate nghiệm thu **bắt buộc trước khi được gọi là “Skill 09 hoàn thành”**

- [ ] **100% scene** có mục đích viết cho học sinh, nhiệm vụ, bước làm/ngoại lệ, tiêu chí hoàn thành và bằng chứng quan sát được.
- [ ] **100% scene học mới/luyện tập** có lời dẫn trợ giảng, ít nhất một đường hỗ trợ có nội dung cụ thể, phản hồi và mạch chuyển; gợi ý tăng dần phù hợp độ khó (không bắt 3 câu nếu không cần).
- [ ] **Tất cả lời thoại** nói đúng những gì học sinh nhìn thấy/được phép thao tác; không chứa thuật ngữ chưa giải nghĩa, không lộ đáp án khi chưa thử; EXIT chỉ có chỉ dẫn trung tính.
- [ ] Có **tình huống bí/đúng/sai** và thao tác khôi phục; học sinh không bị kẹt hoặc qua màn mà không biết vì sao.
- [ ] **Dual View luôn có nút** và luật EXIT/giấy nháp; Sổ tay lưu mục đích–nhiệm vụ–kết quả–kiến thức, không đánh đồng lưu/đạt.
- [ ] Màn học **không nhiễu**: chỉ mục đích/nhiệm vụ/học liệu, tutor có thể thu gọn, công cụ phụ ẩn; không che nội dung ở 375px.
- [ ] Ma trận layout theo từng hoạt động có điểm rõ, căn cứ học liệu và fallback Presentation.
- [ ] Có gate `Tự học không giáo viên`: với scene tiêu biểu ở mỗi kiểu nhiệm vụ, người thử mới có thể nói được **học để làm gì / làm gì / bắt đầu từ đâu / biết xong khi nào** mà không cần giải thích bên ngoài; mọi lỗi được ghi và chỉnh.
- [ ] Đã phân biệt **design QA** với kiểm thử phần mềm; không khẳng định AI tự hiểu, tự chấm, hoặc đã tích hợp khi chưa có bằng chứng.
- [ ] Bàn giao đầy đủ, kiểm tra file tồn tại, phiên bản đồng bộ và tách **teacher-only** khỏi bản học sinh.

## 11. Ranh giới với Skills 10–12

- **Skill 09**: định nghĩa *nội dung, luồng tự học, lời thoại, trạng thái, UI contracts, rubric, asset gaps và low-fi prototype*.
- **Skill 10**: hiện thực thiết kế thị giác hi-fi: nhân vật/mascot, biểu cảm/động tác tối thiểu, bóng thoại, khoảng cách, typography, màu, 8+ pattern, Dual/trợ giảng responsive, trạng thái a11y.
- **Skill 11**: lập trình 100% logic điều hướng, câu hỏi, gợi ý, feedback, lưu kết quả, dữ liệu thật từ các học liệu, kiểm soát EXIT, offline; AI hội thoại thật chỉ khi được phê duyệt.
- **Skill 12**: kiểm thử kỹ thuật, thử trên máy học sinh/giáo viên và pilot tự học, đánh giá accessibility và hiệu quả hỗ trợ, sửa lỗi.

**Trạng thái sử dụng:** `SKILL09_DEFINITION_UPDATED / LESSON_NOT_RERUN`. Chỉ sau khi được yêu cầu “chạy lại Skill 09” mới sản xuất lại bộ đầu ra cho một bài học cụ thể.
