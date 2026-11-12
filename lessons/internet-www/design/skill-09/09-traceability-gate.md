# Skill 09 – Traceability, Decision Log and Gate Review

**Status:** **PASS (core architecture) / CONDITIONAL (Skill 08 missing)**. Đây là **kiểm định thiết kế**, chưa phải thử nghiệm một website đã lập trình.

## Ma trận truy vết theo chặng

| ACT | KU | OBJ | Bằng chứng | Slides | Tài nguyên Skill05 / hiện trạng |
|---|---|---|---|---|---|
| ACT-00 | KU-01–03 | OBJ-01,09 | EV-DIAG | SL-00 | A00-CASES – content ready |
| ACT-01 | KU-01–03 | OBJ-01,08 | EV-01 | SL-01,02 | CARD-01/02 READY; V01 SVG READY |
| ACT-02 | KU-04–05 | OBJ-02,08 | EV-02 | SL-03 | Browser thật, offline B01 READY; browser script **không theo dõi thao tác** |
| ACT-03 | KU-07–09 | OBJ-03,08 | EV-03 | SL-04,05 | CARD-04 READY; V02 SVG READY |
| ACT-04 | KU-12–13 | OBJ-04,08,09 | EV-04 | SL-06,07,08 | Fixture READY; A04-GIF READY; lab SPEC_ONLY |
| ACT-05 | KU-10–11 | OBJ-05,08,09 | EV-05 | SL-09,10 | CARD-06/07 READY; A05-GIF READY; lab SPEC_ONLY |
| ACT-06A | KU-06,15 | OBJ-06,08 | EV-06 | SL-11,12 | CARD-08/09 READY; V03 SVG READY; interactive render SPEC_ONLY |
| ACT-06B | KU-14 | OBJ-07,08,09 | EV-07 | SL-13 | CARD-10 READY; journey builder SPEC_ONLY |
| ACT-07 | KU-07,10–12,14 | OBJ-03–09 | EV-EXIT | SL-14 | Student task sheet READY; Skill08 homework PENDING |

**KU-16:** SGK 5.1.6 chưa cung cấp; không tạo slide hay mục tiêu bắt buộc. **OBJ-01–09** được giữ; **EV-DIAG, EV-01..07, EV-EXIT** đều có vùng thu bằng chứng.

## Quyết định mới và tác động

| Quyết định | Vì sao | Hệ quả cho Skills 10–11 |
|---|---|---|
| 15 slide thay vì một slide cho từng bước 5512 | Chia theo nhiệm vụ tư duy, không nhân bản UI | Layout theo kiểu nhiệm vụ, không dùng 4-template cứng |
| ACT-02 dùng browser thật | Công cụ thật chính xác, ít lãng phí lập trình | Chỉ cần mission panel + ghi nhận thủ công; không làm virtual browser |
| DNS-C không cho HTTP nối tiếp | Tránh mô hình sai | Guard + trạng thái null IP + nhãn ví dụ độc lập |
| GIF chỉ xem sau dự đoán | Tránh lộ kết quả và học thụ động | Drawer on-demand, motion controls/fallback |
| Teacher notes tách phần trả lời | Tránh che/mở nhầm phần đáp án | Có thể phát hành tài liệu GV riêng; toggle UI không phải auth |
| Bài tập về nhà chờ Skill08 | Người dùng chủ động bỏ qua Skill08 | `HW-08-PENDING`; không ghi sẵn bài tập chưa thiết kế |
| Không yêu cầu trang thật trong mô phỏng URL/DNS | Giữ đúng tính giả lập | Mọi chuỗi `example.org`, `192.0.2.10` gắn nhãn |
| Không tự động chấm năng lực từ click | Chất lượng lập luận cần người đánh giá | Teacher rubric + evidence log, không fake mastery |

## Gate checklist

- [x] Phủ đủ ACT-00 đến ACT-07, gồm ACT-06A/06B; khớp 120 phút có nghỉ.
- [x] 15 SL ID duy nhất, mỗi slide có câu hỏi/nhiệm vụ, hành động HS, evidence, input/output.
- [x] 9 mục tiêu OBJ truy vết và có KU phù hợp; không thêm mục 5.1.6 khi chưa có tài liệu.
- [x] Một nhiệm vụ chính/slide; note, card, hints mở khi cần.
- [x] State machine cho DNS/HTTP/rendering/journey, với guard và trường hợp lỗi.
- [x] Dữ liệu giữa URL → DNS → HTTP → rendering → journey liên kết hợp lý.
- [x] Browser thật, offline fallback, không ghi dữ liệu riêng tư.
- [x] EN/VI cho mọi giao diện, feedback, alt, aria, notes.
- [x] Active Recall ngắn sau mỗi nội dung, Learning by Teaching, game khởi động.
- [x] Nút/điều hướng/keyboard/a11y/stop-motion được đặc tả.
- [ ] **Skill 08 chưa chạy:** chưa thể chốt địa điểm, giao diện, tiến độ, chấm/đáp án homework. Đây là phụ thuộc còn mở, **không phải PASS toàn bộ hệ thống**.
- [ ] **Skill 10/11 chưa chạy:** chưa có thiết kế pixel/theme hay website hoạt động; không thể xác nhận chức năng bằng thực thi.

## Các ca nghiệm thu bắt buộc cho Skill 11/12

| TC | Kịch bản | Mong đợi |
|---|---|---|
| TC-01 | Chuyển VI→EN khi nhập dở | Không mất dữ liệu; tất cả nhãn đổi ngôn ngữ |
| TC-02 | SL-03 chỉ dẫn browser thật | Không có giả lập, không xin history/cookies |
| TC-03 | DNS-A → B → C | C trả null IP và NXDOMAIN; log A/B vẫn được lưu để đối chiếu |
| TC-04 | Đang DNS-C bấm tiếp sang HTTP | Không âm thầm dùng IP A; phải chọn A/B hoặc case độc lập có nhãn |
| TC-05 | HTTP `/library/missing` | Status 404, có thể có HTML lỗi; không báo DNS failure |
| TC-06 | Bật HTTPS | 200/404 không tự đổi; chỉ thêm giải thích TLS, không chứng minh content truth |
| TC-07 | Render HTML_ONLY → CSS → JS | Cùng HTML; CSS đổi trình bày, JS chỉ đổi trạng thái sau click |
| TC-08 | Học sinh xem V01/V02/V03 | Hình đáp án mở sau khi HS thử hoặc yêu cầu trợ giúp |
| TC-09 | Evidence quay Back/Next | Không mất dữ liệu, không nhân đôi events |
| TC-10 | Reduced motion + keyboard-only | Đọc được logs, thao tác được labs và builder không cần kéo thả |
| TC-11 | Mất mạng, mở file local | Browser offline hoạt động; không giả làm DNS/HTTP mạng thật |
| TC-12 | Teacher review | Có H0–H3, nhưng không tự cho M3/M4 khi click xong |
| TC-13 | Sau Exit tìm homework | Hiện `pending` cho đến khi Skill 08 chốt; không hứa bài đã có |
| TC-14 | Student không có laptop | OBJ-02 ghi `notObserved`, không tự PASS |
| TC-15 | Reset model | Chỉ reset lab hiện tại, không xóa toàn bộ hồ sơ không cảnh báo |

## Handoff

**Skill 10 – Web Slide Design System** nhận: `09-slide-map.md`, `09-interaction-spec.md`, `09-state-model.md`, `09-navigation-i18n-a11y.md`, `09-implementation-contract.json`, báo cáo này, asset Skill05, scripts Skill07 và rubric Skill03.

**Skill 08** cần bổ sung: bài tập cụ thể, kênh nộp, cách xem lời giải, thời lượng và cơ chế kiểm tra đầu buổi sau. Khi có, cập nhật `HW-08-PENDING` trước khi coi chu trình học tập hoàn thiện.

**Không tự cho phép** Skill 10/11 làm thay mục tiêu, thêm game hoặc bố cục nhiều màn chỉ để đẹp. Thiết kế slide phải bám hành động học sinh và trạng thái đã mô tả.