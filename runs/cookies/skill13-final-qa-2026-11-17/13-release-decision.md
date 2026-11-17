# SKILL 13 — QUYẾT ĐỊNH NGHIỆM THU CUỐI

**Dự án:** Cookies, Skill11 v1.2 (30 màn).  
**Ngày kiểm định:** 17/11/2026.  
**Phiên bản audit:** S13-1.0 independent.  
**Kết luận:** `RELEASE_BLOCKED / REVISE_REQUIRED`, không phải website bị hỏng.

## A. Tình trạng từng cổng độc lập

| Cổng | Trạng thái | Bằng chứng |
|---|---|---|
| STRUCTURE + SECTION_RECALL_REVIEW_GATE | **PASS** | 30 màn; 4 Recall→Review, 12 cue, 13 câu, 5 dạng; 29/30 ca browser QA đạt. |
| CONTENT_ACCURACY | **PASS_WITH_CONTENT_GAP** | K0–K5 cơ bản phù hợp, K6/OBJ-PRIVACY còn thiếu rõ cơ chế tracking. |
| TIME_APPROVAL | **PASS** | Người dùng phê duyệt 3.270 giây; khớp tổng 25 màn core. |
| RUNTIME | **PASS_WITH_DEVICE_LIMITS** | 30 màn trên 6 viewport đã nạp, không lỗi JS; 740×360 cần cuộn và cuộn được. |
| INTERACTION/PEDAGOGY | **FAIL** | Mục lục cho bỏ qua các màn củng cố không cần xác nhận trước (S13-01). |
| ACCESSIBILITY | **PARTIAL** | Modal không chuyển focus ngay; chưa test screenreader thật. |
| ASSESSMENT_INTEGRITY | **UI_PASS / SECURITY_LIMITED** | EXIT khóa tutor/menu, nộp trống không tự hoàn thành; không có chấm máy. Không thể bảo đảm bất khả truy cập dữ liệu chỉ bằng client-only. |
| PRIVACY/PROGRESS | **PARTIAL** | Có localStorage/JSON export nhưng chưa có nút xoá tiến độ bằng UI. |
| INTERNATIONALIZATION | **PENDING** | Trang chỉ VI, hợp đồng ghi EN pending. |
| FIELD_VALIDATION | **NOT_RUN** | Chưa có thử nghiệm trực tiếp với học sinh, Windows, screenreader. |

## B. Kiểm thử độc lập

- **29/30 ca Chromium + hợp đồng PASS** sau khi xác minh ở điện thoại ngang có thể cuộn để tới thanh điều hướng (sửa cách diễn giải từ phép thử ban đầu).
- **1 FAIL P1:** `PED-03-MENU-DOES-NOT-SILENTLY-BYPASS` — có thể từ P00 mở menu và chọn A5-01, bỏ qua cả mười kiểm tra chẩn đoán/củng cố mà không xin xác nhận; tiến độ có gắn SKIPPED_VIA_MENU, không có auto mastery.
- **13/13 quiz schema và 12/12 recall cue hợp lệ**, mỗi phần có ít nhất hai kiểu câu; bài sắp xếp đã đảo thứ tự hiển thị.
- **A11y focus P2:** hộp thoại `aria-modal` xuất hiện nhưng focus vẫn ở nút bên dưới; Tab kế tiếp mới tới nút đóng.
- **Thiết bị thấp:** tại 740×360 thanh điều hướng ở dưới vùng nhìn ban đầu, **nhưng cuộn trang được** và tới cuối trang sẽ hiện. Không được báo sai là hoàn toàn không truy cập được.

## C. Lệnh sửa trước khi duyệt phát hành

1. **P1 – Điều hướng:** chặn nhảy menu hoặc yêu cầu xác nhận bỏ qua, hiển thị số màn bị hoãn trước khi ghi SKIPPED; không biến SKIPPED thành VERIFIED.
2. **P1 – Bao phủ nội dung:** bổ sung cơ chế tracking bằng mã gửi lại và hệ thống liên hệ các lượt truy cập trong ACT04; kiểm tra lại bằng một câu tình huống không lộ kết luận.
3. **P2 – Trợ năng:** focus dialog, trap Tab, trả focus; kiểm tra screenreader.
4. **P2 – Riêng tư:** nút xoá tiến độ bằng UI và cảnh báo dữ liệu trên máy dùng chung.
5. **P2 – Song ngữ:** hoàn thiện bản EN hoặc phê duyệt ngoại lệ VI-only (scope quyết định của người dùng).
6. **P2 – Metadata:** dọn các trạng thái v3.5.1 cũ còn sót trong contract.
7. Sau sửa: chạy lại toàn bộ kiểm thử và tối thiểu một lần trực tiếp trên máy đích; thử học sinh thật là cổng riêng `FIELD_NOT_VALIDATED` cho tới khi có kết quả.

**Trạng thái phát hành:** `NO_GO`. **Không chạy/sửa Skill 11 trong audit Skill 13 này**; các thay đổi cần được đưa vào vòng sửa có truy vết.
