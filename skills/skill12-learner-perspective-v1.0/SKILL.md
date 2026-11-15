---
name: learner-perspective-simulation-learning-journey-audit
version: 1.0
role: Skill 12 of 13 — Learner Perspective Simulation & Learning Journey Audit
status: DEFINITION_READY_NOT_EXECUTED
position: after Skill11, before final QA Skill13
---
# SKILL 12 v1.0 — LEARNER PERSPECTIVE SIMULATION & LEARNING JOURNEY AUDIT

## 0. Sứ mệnh
Đánh giá tiến trình của một bài học/website từ góc nhìn **học sinh cụ thể được mô tả tại Skill04**. Người đánh giá đóng vai một học sinh chưa biết câu trả lời, lần lượt **nhìn màn hình, đọc/nghe nội dung được phép hiển thị, thao tác theo chỉ dẫn và tự hình thành kiến thức**. Kiểm tra cả tích lũy hiểu biết qua các chặng, truy hồi, luyện tập, áp dụng tình huống mới, thời gian và khả năng phục hồi khi lúng túng. Đầu ra là bằng chứng lỗi và các yêu cầu thay đổi quay về đúng Skill01–11; sau sửa phải chạy lại đoạn bị ảnh hưởng và các bài kiểm tra hồi quy. Chỉ bàn giao cho Skill13 khi các lỗi P0 đã đóng hoặc được ghi BLOCKED rõ.

**Quan trọng:** AI mô phỏng **người học có điều kiện** chứ không đo khả năng thực của học sinh. Người mô phỏng không được biết nội dung chưa được hiển thị hoặc sử dụng answer key để "suy ra" câu trả lời. Với thông tin còn `UNKNOWN`, tạo nhiều nhánh thử, không bịa thành đặc điểm của em. Hiệu quả học thật phải được kiểm chứng qua người học/giáo viên; mọi kết quả mô phỏng gắn nhãn `SIMULATED`, không gọi `FIELD_VALIDATED`.

## 1. Đầu vào bắt buộc
1. **Skill04:** learner profile với lời báo cáo nguyên văn, nguồn, độ tin cậy, unknowns; learner-fit matrix, bốn miền C/H/B/P, chẩn đoán D0 nếu đã thực hiện, khả năng trả lời nói/vẽ/thẻ và thói quen tự kiểm tra.
2. Skills01–03: nội dung chuẩn, mục tiêu CORE, prerequisite map, đánh giá và hiểu lầm cần ngăn.
3. Skills05–08: asset thật/giấy/offline, kịch bản giáo viên, giáo án CV5512, thời lượng, bài recall/game/mindmap/flashcard/teach-back (nếu có trong scope).
4. Skill09 v3.4: scene contracts, tutor H1–H3, gates, expected evidence, transitions, time ledger, exit isolation.
5. Skill10: tất cả preview/layout/state hi-fi, viewport, typography và các fallback.
6. Skill11: **website thực tế** hoặc phiên bản prototype có hành vi xác nhận, điều hướng và state; test fixtures; tài khoản chỉ dành cho người học giả lập (không dùng thông tin cá nhân thật).
7. Teacher key/rubric cung cấp riêng cho **người kiểm toán**, không lộ trong phiên learner-facing; chấm sau khi hoàn thành lần mô phỏng.

Nếu không có giao diện có thể quan sát/click, chỉ làm `SPEC_WALKTHROUGH` trên văn bản/ảnh và ghi `RUNTIME_NOT_TESTED`; không tự nhận đã nhìn hoặc thao tác. Nếu không có hồ sơ Skill04 thì `BLOCKED_PROFILE`; không dùng chân dung học sinh "trung bình" thay thế.

## 2. Chốt hồ sơ vai diễn đúng Skill04
Tạo `12-learner-profile-lock.md` ghi dữ kiện được phép dùng, nguồn và confidence. Ví dụ riêng Cookies từ Skill04 v5.1: nền kiến thức chung được báo cáo chưa vững; hay quên sau buổi; cần hướng dẫn rõ, lượt giảng ngắn; nghe dài dễ giảm tham gia; yêu thích Tin học; preference nói/vẽ/thẻ và mức hiểu HTTP/Browser/Server **UNKNOWN**. Không gán IQ, chẩn đoán, sở thích trò chơi/hình cố định hoặc khả năng thấp bất biến. Đây là giả thuyết điều kiện, không nhận là suy nghĩ thật của học sinh.

Mô phỏng ít nhất các nhánh persona state:
- `P-A BASELINE_UNCERTAIN`: chưa rõ tiền đề, dùng D0 để quan sát; không suy đoán đúng/sai.
- `P-B NEEDS_SCAFFOLDING`: cần mẫu đúng một bước và gợi ý sau khi thử, rút dần hỗ trợ.
- `P-C FORGETS_PRIOR_CONCEPT`: qua chặng sau quên một ý cũ; kiểm tra active recall và nhắc hồi phục.
- `P-D INDEPENDENT`: tiền đề đạt ở D0; tránh giảng dư, bỏ qua hints khi không cần.
- `P-E TIME_PRESSURE`: thao tác/chữ viết chậm hơn dự tính, cần phương án nói/vẽ/nhãn hoặc tăng thời gian.
Thêm nhánh thiết bị, ngôn ngữ nếu có bằng chứng; không áp đặt preference chưa biết.

## 3. Nguyên tắc mô phỏng thông tin (chống hindsight)
- Duy trì `knowledge_ledger` chỉ gồm **điều người học đã quan sát, giải thích đúng hoặc đã tự tạo ra** ở thời điểm hiện tại.
- `visible_information_ledger` ghi đúng chữ, hình, âm thanh, thông báo, alt hoặc trạng thái render đã thấy; chưa mở Hint/Compare thì KHÔNG đọc.
- Không được đọc tài liệu teacher-only, đáp án EXIT, note nội bộ, hoặc nội dung màn phía sau trong vai học sinh.
- Ghi từng **action click/key/type/draw/speak/manual** nếu công cụ hỗ trợ; nếu không, mô tả chính xác hành vi dự kiến và dán nhãn SPEC_ONLY.
- Cần phân biệt `observed_by_tool`, `inferred_from_spec`, `simulated_response`, `not_tested` ở từng kết luận.
- Chỉ sau khi hoàn tất một nhánh mới cho vai **auditor** đối chiếu expected answer/source, xác định mức lệch. Không cho auditor sửa trực tiếp lời học sinh đã mô phỏng.

## 4. Quy trình hai vai và 11 bước
1. **Input gate:** kiểm version Skills01–11, profile/unknowns, scene count, full visual, website URL/offline, answer-key isolation; tạo baseline evidence.
2. **Persona lock:** xây 5 nhánh điều kiện trên, chấm mức chắc chắn và chọn đầu vào D0 phù hợp; không giả chẩn đoán đã chạy.
3. **Blind setup:** khóa nguồn chỉ learner-visible theo từng scene; xác lập state chưa học, response mode và tool capabilities.
4. **Chạy từng màn:** ghi `what_seen/read/heard`, `task_understood?`, `first_action`, action/reason, produced evidence, hint_used, feedback_seen, completion belief và time estimate/observed.
5. **Stuck/recovery:** thử sai hợp lý và hướng dẫn H0→H3 theo chính sách; không dùng H3 khi chưa meaningful attempt, không ép next; ghi lỗi kẹt và quay lại.
6. **Progression:** trước mỗi màn, kiểm prerequisite trong knowledge ledger; học sinh có biết đủ để làm, hay chỉ theo hiệu ứng? Mọi kiến thức mới phải nối với ý đã hiểu, không đoán từ nội dung chưa dạy.
7. **Retrieval/retention:** sau các chặng, giấu lời giải, làm active recall bằng hình/keyword, lời giải riêng; đo khả năng khôi phục sau khi quên giả lập. Kiểm tra vị trí game, teach-back, flashcard/mindmap và homework nếu scope yêu cầu.
8. **Transfer/EXIT:** bài mới độc lập, chỉ hướng dẫn trung tính; không mở Notebook/answer/dual back; nếu câu hỏi phụ thuộc thuật ngữ chưa học báo lỗi. Chấm sau nộp.
9. **Whole-journey audit:** thời gian core + branch overhead, phân bổ lời giảng/thao tác, tải, nhịp nghe–làm–nhớ, 8 OBJ CORE và kết nối giữa các hoạt động; so nhánh P-A..P-E.
10. **Auditor mode:** so source→goal→evidence→student reasoning; phân loại bug, P0/P1/P2, root cause owner, sửa tối thiểu nhưng đủ, negative regressions, quyết định REVISE/GATE.
11. **Repair loop:** phát hành change requests về Skills01–11 theo owner, thực hiện **bởi đúng Skill** với phiên bản mới; rerun các màn bị ảnh hưởng + prerequisite + downstream/EXIT; tối đa 3 vòng tự động không có cải thiện thì escalate người dạy; đóng với evidence.

## 5. Kiểm tra trên từng màn — scene walkthrough record
Bắt buộc: `scene_id`, `persona_branch`, `source_versions`, `viewport`, `visible_content`, `heard_content_if_any`, `learner_prior_knowledge`, `task_restatement`, `first_action`, `student_answer`, `reasoning`, `hint_path`, `feedback_behavior`, `recovery`, `evidence_saved`, `did_knowledge_form`, `recall_dependency`, `time_expected`, `time_observed_or_estimated`, `friction`, `confidence_level`, `evidence_type`.

Bốn câu tự kiểm: (1) Em học để làm gì? (2) Bắt đầu từ đâu? (3) Em cần làm ra cái gì? (4) Dựa vào đâu em biết hoàn thành? Nếu không trả lời được từ màn nhìn thấy, đó là vấn đề thiết kế, không mặc định lỗi học sinh.

## 6. Chỉ số kiểm định, không dùng để chẩn đoán học sinh
- `goal_coverage`: CORE goal nào hình thành, luyện tập, chuyển giao?
- `prerequisite_integrity`: tỷ lệ mục tiêu có nền đã được dạy/kiểm ở thời điểm sử dụng.
- `meaningful_attempt_integrity`: learner không qua màn chỉ bằng click; H3 không trước thử.
- `retention_support`: recall spaced, lỗi quên được phát hiện và sửa.
- `student_agency`: hành động trí tuệ của người học vs lời dẫn/animation tự hoàn thành.
- `feedback_quality`: sai được giải thích, có đường sửa, không làm lộ EXIT.
- `time_robustness`: 42 phút core Cookies vs nhánh cần thêm, không buộc học sinh viết nhanh để "pass".
- `learner_fit`: 4 miền C/H/B/P và unknowns bảo toàn, không đổi sở thích suy đoán thành sự thật.

Không tạo "điểm học sinh thật" hoặc tỷ lệ thành công ảo; cho phép điểm thiết kế 0–4 theo rubric nội bộ, đánh dấu `SIMULATED`, không lấy trung bình để che một lỗi P0.

## 7. Severity và routing lỗi ngược
- `P0/BLOCKER`: kiến thức sai; câu hỏi đòi kiến thức chưa dạy; lộ key EXIT; không có nhánh tự sửa; UI không thể thực hiện nhiệm vụ; thiếu minh chứng CORE; thiết kế gây hiểu sai quan trọng.
- `P1/MAJOR`: hỗ trợ đến muộn/giải thích dài, quá tải thời gian đáng kể, recall không khôi phục, bước không nhất quán, chấm chưa rõ, đọc màn di động khó.
- `P2/MINOR`: câu chữ dư, thứ bậc chữ/chuyển động, hình chưa tối ưu nhưng vẫn đạt mục tiêu.

Routing:
- Sai nguồn/kiến thức -> Skill01/03; mục tiêu/rubric/thiếu prerequisite -> Skill02; learner fit hoặc kỹ thuật/phương pháp hoạt động -> Skill04.
- Thiếu tài liệu/nguồn -> Skill05; lời dẫn/nhánh giáo viên -> Skill06; học liệu/mô phỏng nguồn -> Skill07; giáo án/thời lượng, CV5512 -> Skill08.
- Scene order/task/state/tutor contract -> Skill09; layout/visual focus/accessibility -> Skill10; hành vi runtime/storage/evidence/EXIT locks -> Skill11.
- Nếu nhiều nguồn: chọn **primary owner**, danh sách contributors, sửa upstream trước downstream, thay đổi được ghi thành `change_request` với affected scene IDs và regression tests.

## 8. Đầu ra bắt buộc
1. `12-input-readiness.md`: tất cả version, profile status, assets, browser test scope.
2. `12-learner-profile-lock.md`: nguồn và UNKNOWN của C/H/B/P.
3. `12-persona-branches.md`: 5 nhánh điều kiện + D0 gating.
4. `12-visible-information-ledger.jsonl`: những gì được phép nhìn/đọc/nghe theo thời điểm, tool evidence.
5. `12-scene-walkthrough.csv` + `12-scene-walkthrough.md`: **từng scene × mỗi nhánh áp dụng**, lỗi, hành vi, thời gian, nhận thức; không được ghi đã click nếu chưa click.
6. `12-knowledge-progression-map.md`: kiến thức đã có, cách hình thành, recall, prerequisite, transfer.
7. `12-retrieval-and-transfer-audit.md`: sau mỗi chặng, EXIT independent và 5 thành tố học tập theo scope.
8. `12-learner-fit-audit.md`: bốn miền Skill04 và unsupported assumptions.
9. `12-friction-and-time-report.md`: các nghẽn và thời gian core / optional / recovery.
10. `12-issue-register.csv`: severity, scene, reproducer, evidence, owner, suggested fix, regression.
11. `12-change-requests/`: phiếu cho Skills01–11 với delta input/output và thứ tự cập nhật.
12. `12-repair-loop-log.md`: vòng 0→n, thay đổi/kiểm lại/phát hiện mới.
13. `12-simulation-report.md`: verdict theo nhánh, confidence, caveats, không nhầm mô phỏng với pilot.
14. `12-handoff-to-skill13.md`: trạng thái P0/P1/P2, risk, tests và các ca chưa chạy.

## 9. Nghiệm thu
`SPEC_WALKTHROUGH_ONLY` khi chỉ có tài liệu; `SIMULATED_DESIGN_PASS_WITH_RISKS` khi walkthrough đầy đủ nhưng chưa tương tác website; `SIMULATED_RUNTIME_PASS_WITH_RISKS` khi đã thao tác qua UI thật trong phạm vi; `REVISE_REQUIRED` nếu P0; `READY_FOR_SKILL13` chỉ khi P0 đóng, P1 có xử lý/được chấp nhận minh bạch và truy vết hoàn chỉnh; `FIELD_VALIDATED` chỉ khi có quan sát thực tế.

Cấm tuyên bố "học sinh đã hiểu", "đã kiểm tra được ở trình duyệt" hoặc "đã sửa Skill04" nếu chỉ suy luận. Nếu không thể xem ảnh, không giả vờ đã nhìn; nếu không có âm thanh, không giả vờ đã nghe. Chưa được phép ghi đè tài liệu gốc mà không bảo toàn version.

## 10. Cookies — các ca bắt buộc
- D0 kiến thức Browser/Server không rõ: thử hai nhánh trước khi rẽ; không gọi em yếu nếu sai.
- ACT01: định nghĩa Cookie dữ liệu, không phải chương trình; kiểm tra có thể giải thích sau khi che `language=vi`.
- ACT02: hướng Request / Response + Set-Cookie / Cookie, accept/block, lần sau; làm sai có gợi ý rồi tự sửa, không chỉ click Next.
- ACT03: Session/Persistent theo điều kiện và thời hạn, không dạy RAM/disk tuyệt đối; recall sau khi đổi bối cảnh.
- ACT04: công dụng vs tracking/privacy, có phản chứng và teach-back bằng lời của em.
- ACT05: 3 ô EXIT ca `club.example.org` mới, không lộ gợi ý; đo mô phỏng time-pressure 8 phút và đường cho câu trả lời bằng sơ đồ/lời ngắn.
- Ngoài core: P00/P07 được đánh dấu riêng không nhầm 42 phút. 5 yếu tố recall, game, mindmap, flashcards, teach-back được kiểm theo thời điểm phù hợp và scope tài liệu, không tự thêm quiz cho đủ số.
