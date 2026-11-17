# Cổng kiểm soát liên tục từ Skill 01 tới 13

| Cổng | Người giữ | Bằng chứng tối thiểu | Điều kiện dừng |
|---|---|---|---|
| TOPIC_SOURCE | 01 | mỗi KU thuộc một topic, chính xác nguồn/giới hạn | không nguồn hoặc hiểu lầm kỹ thuật |
| SESSION_ARCHITECTURE | 02 | session goals, sections, prereq, time ledger | chốt slide trước khi đủ content; thiếu R/Q budget |
| KNOWLEDGE_COVERAGE | 03 | đủ nội dung từng KU + cross-topic bridge | thiếu định nghĩa cần dùng ở sau |
| METHOD_FIT | 04 | rubric từng section, nhịp active/direct | method đồng loạt không lý do |
| RESOURCE_READINESS | 05/07 | registry + asset thực/fallback | thiếu asset CORE hoặc lộ key |
| SCENARIO_5512 | 06/08 | 4 bước, lời dẫn, bridge và tổng giờ | đứt mạch/bỏ hoạt động |
| OPEN_CLOSE_GAME | 04/06/08 | một game đầu hoặc cuối buổi, câu hỏi ôn đa dạng | lặp game từng topic hoặc thiếu game buổi |
| SCENE_CONTRACT | 09 | graph, unique IDs, recall→quiz mỗi CORE | đường TOC/next skip không nhắc |
| DESIGN_GATE | 10 | preview state, responsive, no answer leak | slide chưa đủ thông tin học sinh tự làm |
| RUNTIME_GATE | 11 | E2E trên browser/keyboard/resume/EXIT | lỗi routing, reveal, storage hoặc focus |
| STUDENT_SIMULATION | 12 | luồng hết buổi, nhánh quên/sai/hoãn | học sinh không hiểu do thiếu nền |
| RELEASE_GATE | 13 | independent objective and runtime QA | P1, CORE uncovered, unapproved time, answer leak |

**Cross-owner repair:** lỗi sai kiến thức → Skill01/03; nhóm section/tiên quyết → Skill02; chọn method/tải → Skill04; script/transition → Skill06; asset → Skill05/07; kế hoạch → Skill08; điều hướng → Skill09; thiết kế → Skill10; code → Skill11; kiểm toán học sinh → Skill12. Chỉ chạy lại vùng bị ảnh hưởng có kiểm tra regression toàn buổi.

## Cách xử lý biến thể buổi
- 1 section CORE duy nhất: chỉ 1 cặp Recall→Review; không cố thêm section để đủ số trang.
- 3–5 section: có một cặp cuối mỗi section, 2–4 câu/section; trục tích hợp sau sections; chưa chắc thời gian nên ưu tiên 3 section CORE hoặc đề xuất chia buổi.
- Nhiều hơn 5 section: *chỉ khi thực tế có chừng đó cụm nhận thức* và thời gian đủ; nếu không gộp theo tiêu chí kết sư phạm hoặc tách hai buổi. Không gộp chỉ để tránh cặp R/Q, không chia chỉ để tăng cặp.
- Nội dung prerequisite/recovery: không tự đếm vào CORE section; nếu trở thành mục tiêu mới, chuyển theo CR và thiết kế R/Q phù hợp.
- Giáo viên và học sinh có thể chọn đi sâu, nhưng nếu bỏ hẳn CORE objective thì cập nhật phạm vi/đánh giá, không giữ nhãn PASS cũ.

## Quyết định về thời gian
- Mỗi ledger có `session_total_seconds`, `actual_sum`, `approved_status`, `approval_record`.
- Chỉ `USER_APPROVED` thật mới cho release; `DEMO_APPROVED_FOR_TEST_ONLY` chỉ giúp test chạy cấu trúc.
- Các kiểm tra R/Q và tính toán thời lượng phải chạy **trước** tạo scene design; không giữ cố định số màn từ lịch sử.

## Kiểm thử không được thay thế nhau
STATIC_CONTRACT_PASS ≠ BROWSER_PASS ≠ FIELD_VALIDATED. Pilot với học sinh thật và tình trạng học sinh hiểu vẫn phải báo riêng.
