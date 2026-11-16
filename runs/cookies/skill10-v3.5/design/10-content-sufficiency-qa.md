# Cookies — Skill 10 v3.5 — 17/11/2026

**Nguồn chính xác:** `source/09-implementation-contract.json` (Skill 09 v3.4), 22 scene IDs; `source/SKILL10_v3.5_APPROVED_STANDARD.md` (10 tiêu chí người dùng đã duyệt); hồ sơ Skill04 Cookies (nền chưa vững, quên giữa chặng, thích ICT, cần chỉ dẫn rõ, chưa có D0 thực tế). **Đầu ra hiện tại:** hi-fi prototype, KHÔNG phải Skill11 mới hay thử nghiệm với học sinh thật.

## Kiểm toán đủ nội dung và nguồn trực quan

G1 là hard gate: TEACH giải thích bằng lời dẫn, sơ đồ có chú thích và kết luận. Thông tin CORE không nằm sau Em có biết/trợ giảng. D0 và RECALL là ngoại lệ cố ý ẩn kết luận ở lượt đầu; không được xem là thiếu nội dung TEACH.

| Chặng | Core teaching visible | Reveal rule | Gap to verify |
|---|---|---|---|
| D0 | Browser/Server có nhãn, mẩu dữ liệu chưa giải nghĩa để kiểm tra nền | Đối chiếu sau dự đoán | Nhánh bù D0 do Skill09/11 |
| A1 | Cookie-data, ví dụ language=vi, thẻ phân biệt HTML/program | Không ép nhập A1-02; phân loại ở A1-03 | Approval thay đổi nhiệm vụ source |
| A2 | Request/Response, Set-Cookie vs Cookie, điều kiện lưu/gửi lại | Lab và recall mới reveal | Skill11 true engine / meaningful attempt |
| A3 | Vòng đời, ví dụ hạn 7 ngày, các trường hợp xóa sớm | Timeline ban đầu che kết quả | Chẩn đoán Session/Browser lifecycle |
| A4 | 3 công dụng, phân biệt thời hạn và mục đích, teach-back | Quiz mở feedback sau chọn | Chất lượng lời giải thích do GV kiểm tra |
| A5 | Club.example.org, ba phần A/B/C, không có đáp án | Không reveal chính đáp án | Time risk 8 phút, student output alternatives |
| P07 | Sơ đồ nhánh/flashcards và giảng lại | Tự nhớ trước, rồi lật/xem đối chiếu | Cần khảo sát ghi nhớ sau buổi |

## Các sai lầm kỹ thuật đã kiểm soát
- Không coi Cookie là program chạy; `language=vi` ví dụ dạng name–value, không phải cơ sở dữ liệu.
- `Set-Cookie` ở Response; `Cookie` ở Request phù hợp; không khẳng định bất kỳ Server nào luôn đặt Cookie.
- Server có thể tra DB theo session ID, nhưng không bắt buộc với mọi Cookie — chỉ đặt trong phần thông tin phụ.
- Persistent không đồng nhất Tracking; Session không phải luôn mất khi đóng một tab.

## Chưa đủ để tự nhận hiệu quả học tập
Chưa có kiểm thử đọc hiểu với học sinh thật, không có đo recall sau nhiều ngày, không kiểm chứng tốc độ 42 phút. Không được gắn `LEARNER_VALIDATED`.
