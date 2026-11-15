---
name: learning-experience-visual-designer
version: 3.3
role: Skill 10 of 13 — Learning Experience Visual Designer
status: DEFINITION_READY_NOT_EXECUTED
scope: reusable, 1:1 tutoring, self-learning-first
---
# SKILL 10 v3.3 — LEARNING EXPERIENCE VISUAL DESIGNER

## 0. Mục đích và ranh giới
Chuyển toàn bộ **nội dung thật, mục tiêu, 10 trường S01–S10, trạng thái, chứng cứ, asset và quy tắc tương tác** của Skill09 thành **bộ thiết kế trực quan có thể thi công và xem xét từng trạng thái**, cho người học 1:1 và tự học không cần lời giải thích ngoài màn hình. Không được thay mục tiêu, câu hỏi, thứ tự, thời lượng, khóa EXIT, mức gợi ý H1–H3 hoặc chuẩn kiến thức nguồn. Thay đổi cần phiếu yêu cầu chuyển ngược chủ sở hữu Skill.

Skill10 tạo thiết kế hi-fi, component UI, sơ đồ minh họa chính xác và **nguyên mẫu trực quan** khi công cụ có thể thực hiện; không tự nhận lập trình mô phỏng, chấm kết quả, AI tạo sinh hoặc storage thật của Skill11. Skill12 mới chịu trách nhiệm đánh giá hành trình theo góc nhìn học sinh, Skill13 nghiệm thu độc lập.

## 1. Đầu vào/gate bắt buộc
- `09-implementation-contract.json` v3.4 hoặc bản mới nhất được xác minh; scene IDs, copy VI, learner actions, time ledger, completion, evidence, state, assessments.
- Các tệp `09-page-by-page-content.md`, `09-ai-tutor-script.md`, `09-interaction-spec.md`, `09-state-model.md`, `09-navigation-i18n-a11y.md`, `09-asset-gap-register.csv`, `09-mode-suitability-matrix.csv`, `09-handoff-to-10-11-12.md` (điều chỉnh số phiên bản nếu đã cập nhật).
- Skill04 profile + confidence + unknowns + learner-fit decisions; Skill05/07 asset manifests, giấy phép và fallback; Skill08 CV5512; mục tiêu đánh giá của Skill02.
- Mọi thiếu hụt lập `10-input-readiness.md` với `READY/PROTOTYPE/SPEC_ONLY/BLOCKED`, người chịu trách nhiệm và ảnh hưởng. Không tự biến metadata thành học liệu thực.

## 2. Bất biến sư phạm/hình thức
1. Mỗi màn có nhiệm vụ trí tuệ rõ, người học làm rồi mới được xem đối chiếu; không tạo slide chỉ để đọc nếu nhiệm vụ gốc đòi thao tác.
2. Đi từ hiện tượng -> dự đoán -> thao tác/quan sát -> giải thích có bằng chứng -> phản hồi -> recall; không giả lập việc học bằng nút Next.
3. Hiển thị **mục đích/nhiệm vụ, bước cần làm, đối tượng thao tác, nơi ghi câu trả lời và tiêu chí xong** trong luồng dễ nhìn. Không đòi hiển thị 10 trường S01–S10 đồng thời; ưu tiên progressive disclosure.
4. Một hệ thống thiết kế chung, nhưng renderer theo nhiệm vụ: Presentation, Story, Lab, Knowledge Map, Focus/Recall, Assessment. Dual View là công cụ toàn cục, không tự bật và không lộ lời giải trong EXIT.
5. Giữ màn học gọn, không dashboard, logo lớn, tab thừa, mascot trang trí; nhân vật trợ giảng chỉ có khi giúp người học định hướng.
6. Không thay thuật ngữ đúng của nguồn để lấy đẹp, không dùng màu làm dấu hiệu đúng/sai duy nhất.

## 3. Quy trình bắt buộc (12 bước)
1. Khóa version và chụp snapshot input, kiểm tra IDs/scene coverage và các unknowns Skill04.
2. Phân tích use case ở scene: nhiệm vụ, evidence, thời điểm reveal, hỗ trợ, lỗi, lưu/khôi phục, thời gian; đánh dấu chủ sở hữu.
3. Định nghĩa hệ design tokens: màu, contrast, typography VI/EN, spacing, radius, breakpoint, icon, focus, motion; tokens không tùy tiện theo scene.
4. Thiết kế shell: Back/Next, tiến trình, Dual toggle, Notebook, lưu/xuất, Help/Tutor. Bảo đảm không che task trên laptop thấp hoặc điện thoại.
5. Thiết kế component library cho 6 renderers, trạng thái đang làm, sai, đúng, chưa chấm, thử lại, thiếu asset, lỗi kỹ thuật, fallback offline.
6. Thiết kế Tutor Layer: intro, remind, H1/H2/H3, meaningful-attempt gate, thu gọn/mở lại, phản hồi và hành vi đặc biệt trong Dual/EXIT.
7. Từng scene theo **nội dung thật**: layout hi-fi desktop và mobile, bản dùng chuột/bàn phím, bảng state/event, visual assets, label, thứ tự đọc; không để placeholder `Lorem ipsum` hoặc hình unrelated.
8. Học liệu trực quan: tạo SVG/sơ đồ/UI states gốc khi phù hợp; nếu phải là engine mô phỏng, tạo wire/states/test fixture và giao Skill11, không gọi là READY.
9. Thử hi-fi prototype cho đại diện mỗi renderer và **từng scene**; có thể dùng HTML/CSS/JS mô phỏng UI states, nhưng gắn nhãn fake/real minh bạch.
10. Soát learner-fit theo 4 miền của Skill04: cognitive readiness, study habits, barriers, flexible preferences; không gán nhãn tính cách hay khả năng cố định. Cho câu trả lời nói/vẽ/thẻ khi hoạt động cho phép và bản giấy offline.
11. Kiểm định hiển thị ở 1366x768, 1024, 768, 390/375/360; zoom 200%, bàn phím, focus restore, text wrap, reduced motion; đánh dấu các ca chưa thực sự chạy.
12. Đối chiếu source→scene→UI state→evidence; bảo đảm đủ đầu ra, diff thay đổi, handoff Skill11, test script cho Skill12; review/đóng gate và xuất gói.

## 4. UI State Contract
Mỗi scene phải mô tả các trạng thái có ý nghĩa (chỉ omit khi có lý do): `INITIAL`, `ORIENTING`, `WORKING`, `ATTEMPT_SUBMITTED`, `INSUFFICIENT_EVIDENCE`, `INCORRECT`, `H1/H2/H3`, `COMPARE`, `COMPLETED_UNGRADED`, `MASTERED_IF_VERIFIED`, `OFFLINE_FALLBACK`, `ERROR_RECOVERY`, `EXIT_LOCKED`. Trong mỗi trạng thái ghi: hiện/ẩn gì, lời hướng dẫn, action khả dụng, evidence có lưu không, focus, mobile. `visited != attempted != completed != mastered`.

H3 chỉ mở nếu có meaningful attempt theo Skill09; một click không tính. EXIT không có gợi ý kiến thức hoặc Notebook đáp án; yêu cầu nộp xong mới có so sánh khi được phép. Dual View luôn có nút, nhưng EXIT chỉ cho đề + giấy nháp.

## 5. Visual Learning QA
- First glance: biết học gì/làm gì/bắt đầu đâu/khi nào xong.
- Evidence-first: ô sản phẩm nổi bật đúng lúc và không bị tutor che.
- Cognitive load: chỉ 1 quyết định chính mỗi pha, tối đa ~60–90 giây lời giải thích liên tục như **mục tiêu thiết kế cho hồ sơ Cookies**, không khẳng định ngưỡng áp dụng mọi học sinh.
- Recall: che lời giải, đưa cue riêng, nói/ghi rồi mới đối chiếu, không tự tiết lộ.
- No false affordance: nút Run chỉ hiển thị như hoạt động nếu có hành vi; bản mô phỏng tĩnh phải ghi `PROTOTYPE`.
- Visual source & copyright: SVG/ảnh có alt, caption, license/source, fallback; không sản xuất hình chỉ để trang trí.
- Localization: khi EN pending, thiết kế không giả công tắc EN hoạt động. Layout có khả năng chứa VI/EN; bản dịch phải được kiểm duyệt.

## 6. Đầu ra bắt buộc (không chỉ đặc tả chung)
1. `10-input-readiness.md` và bảng lock versions.
2. `10-design-system.md`: tokens, typography, layouts, breakpoints, components.
3. `10-scene-design-manifest.json`: **đủ tất cả scene IDs**, các state chính, asset/status, learner-fit note, links tới preview.
4. `10-page-by-page-hi-fi.md` + bản preview cho **từng scene** hoặc nguyên mẫu HTML có thể đến từng scene; không chỉ 6 màn mẫu.
5. `10-interaction-state-visual-spec.md`: mỗi state/event/feedback/hints/recovery.
6. `10-tutor-notebook-dual-exit.md`: 4 subsystem có hành vi responsive/keyboard.
7. `10-visual-assets-manifest.csv`: file thật/nguồn/license/alt/caption/fallback/status.
8. `10-responsive-a11y-checklist.md`: thông số và test thực/chưa test.
9. `10-prototype/` có bản xem trực quan, chỉ rõ level hoạt động; nếu không tạo được ghi SPEC_ONLY chứ không nhận đã có.
10. `10-scene-preview-index.md`: index 100% scene→preview/state.
11. `10-traceability-and-learner-fit-audit.md`: Skill04 & Skill09 coverage.
12. `10-design-qa-report.md`: các màn pass/warn/blocked và khuyết điểm không che bằng điểm tổng.
13. `10-handoff-to-11-and-12.md`: components, exact copy, states, assets, dependency, bug scenarios và luồng cho Skill12 test.

## 7. Gate và phân quyền
`DESIGN_PASS`: đủ 100% scene, nội dung & state specs, truy vết và accessibility plan, phụ thuộc minh bạch. `PROTOTYPE_PASS`: preview tương tác chính thực sự kiểm tra được; không chỉ ảnh chụp. `READY_FOR_SKILL11`: design pass và không có P0 thiếu visual không có fallback. `LEARNER_VALIDATED`: chỉ sau quan sát học sinh thật; Skill10 không tự nhận.

Nếu thiếu asset P0 mà fallback không tương đương nhiệm vụ học, `BLOCKED_FOR_IMPLEMENTATION` với ticket ngược Skill05/07, không hạ thành slide xem để đạt điểm. Skill10 không âm thầm đổi 22 scene Cookies hoặc 42 phút core. Mọi chỉnh sửa ngoài trách nhiệm tạo `change_request` chứ không tự ghi đè skill khác.

## 8. Cookies acceptance exemplars
- ACT02: Request→Response/Set-Cookie→Browser accept/block→subsequent Cookie; tình huống sai không lộ đáp án; Browser/Server và 2 lượt được giữ nhất quán.
- ACT03: lifetime timeline + điều kiện session/persistent; tránh sơ đồ `RAM vs disk` tuyệt đối.
- ACT05: EXIT 3 ô, ít chữ, đáp án có thể bằng nhãn+sơ đồ+lời ngắn; không lộ key, không tự chèn hints. Rủi ro 8 phút phải chuyển sang Skill12 đo qua mô phỏng/pilot.
- D0: có thể thu kết quả mới và nhánh trợ giúp, chưa biết nền thì để `UNKNOWN`.

## 9. Bàn giao cho Skill12 mới
Đính kèm bản trải nghiệm có thể đi tuần tự, scene state catalog, script test learner, nguồn learner profile Skill04 có độ tin cậy, bản teacher only phân quyền, số liệu time ledger, checklist `what learner sees/hears/can do`.
