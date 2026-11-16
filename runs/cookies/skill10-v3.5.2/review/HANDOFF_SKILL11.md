# Handoff Skill 10 v3.5.2 → Skill 11

**Version:** HI_FI_REVIEW_PENDING, not Skill11 implementation.
**Contract:** Skill09 v3.5 ↔ Skill10 synchronized 25 scene definitions, all approved CR01–08 incorporated.

## Bàn giao nội dung
- `prototype/data.js`: 25 màn khớp ID, loại, nội dung chính và câu chuyển hợp đồng.
- `prototype/app.js`: mô phỏng tương tác bằng dữ liệu cố định để duyệt bố cục và trình tự.
- `prototype/teacher-notes.js`: tài liệu chỉ dành cho người duyệt; **KHÔNG** đưa file vào bundle học sinh ở Skill11.
- `review/25_MAN_MUC_DICH_VA_LOI_DAN_GV.md`: kịch bản 25 màn.
- `qa/playwright-review.json`: test tự động, không thay thế kiểm thử sư phạm của Skill12.

## Những thứ Skill11 PHẢI tự triển khai và kiểm thử
1. Bổ sung máy điều hướng đường chính 23 màn và 2 nhánh ôn theo kết quả D0; lưu hoạt động và phục hồi.
2. Hệ thống theo dõi VISITED/ATTEMPTED/SAVED_UNGRADED/SUBMITTED/VERIFIED/MASTERED phân biệt thực sự; click Next không đồng nghĩa đã hiểu.
3. Kịch bản đánh giá EXIT có khóa nội dung hỗ trợ, chấm hoặc quy trình giáo viên chấm và lưu kết quả; không rò rỉ đáp án ở học sinh.
4. Hỗ trợ minh chứng bằng lời, giấy, tự báo cáo và xác thực của giáo viên; tự báo cáo không tự động là MASTERED.
5. Tích hợp tài nguyên SVG đúng nội dung, popover từ khóa không đẩy bố cục, Em có biết chỉ là thông tin phụ, điều khiển icon nhỏ.
6. Biên soạn/kiểm tra bản tiếng Anh trước khi bật song ngữ; chưa có bản EN được nghiệm thu.
7. Phân lập teacher notes khỏi bundle public, hỗ trợ bàn phím/reader, kiểm thử Windows/local-open.
8. Bảo đảm nội dung chính đủ để học độc lập, không buộc học sinh phải nghe GV nói mới hiểu.

## Route và thời gian

- **P00-01** `OBSERVE` · 120s · Nhận ra một website có thể ghi nhớ lựa chọn giữa hai lần truy cập.
- **D0-01** `DIAGNOSE` · 95s · Xác định chiều trao đổi giữa Browser và Server khi mở một trang.
- **D0-R01** `RECOVERY` · 45s · chỉ ôn theo điều kiện · Ôn nền về chiều yêu cầu và phản hồi khi học sinh nhầm.
- **D0-02** `DIAGNOSE` · 85s · Nhận biết dạng tên–giá trị trong ví dụ dữ liệu.
- **D0-R02** `RECOVERY` · 45s · chỉ ôn theo điều kiện · Ôn cách đọc cặp tên=giá trị khi học sinh chưa chắc.
- **A1-01** `OBSERVE` · 105s · Xác định thông tin tối thiểu cần giữ lại giữa hai lần truy cập.
- **A1-02** `TEACH` · 90s · Diễn đạt Cookie là dữ liệu, không phải một chương trình tự chạy.
- **A1-03** `PRACTISE` · 165s · Phân biệt dữ liệu minh họa, thẻ HTML và tên tệp chương trình.
- **A2-01** `TEACH` · 100s · Xác định bước đầu tiên trong một lượt truy cập website.
- **A2-02** `TEACH` · 125s · Phân biệt thông điệp Set-Cookie với HTTP Request.
- **A2-03** `EXPLORE` · 115s · Nhận ra Browser có thể chấp nhận hoặc từ chối lưu Cookie.
- **A2-04** `EXPLORE` · 110s · Xác định điều kiện Cookie được gửi lại ở lượt truy cập tiếp.
- **A2-05** `COMPARE` · 115s · So sánh hệ quả của việc chấp nhận và chặn cùng một Cookie.
- **A2-06** `RECALL` · 155s · Tự nhớ lại hai chiều Set-Cookie và Cookie mà không nhìn mẫu.
- **A3-00** `TEACH` · 55s · Phân biệt ý tưởng Cookie theo phiên và Cookie có hạn trước khi dự đoán timeline.
- **A3-01** `EXPLORE` · 135s · Dự đoán vòng đời của hai loại Cookie theo mốc thời gian.
- **A3-02** `COMPARE` · 120s · Nhận biết tuổi thọ Cookie thay đổi khi thay đổi thời hạn.
- **A3-03** `RECALL` · 110s · Tự phân biệt Session và Persistent theo vòng đời.
- **A4-01** `PRACTISE` · 110s · Phân biệt ba nhóm công dụng Cookie qua tình huống.
- **A4-02** `PRACTISE` · 120s · Phân biệt thời hạn lưu và mục đích theo dõi.
- **A4-03** `TEACH_BACK` · 130s · Tự giải thích cơ chế, công dụng và lưu ý quyền riêng tư.
- **A5-01** `ASSESS_INTRO` · 95s · Chuẩn bị làm bài vận dụng độc lập không xem tài liệu.
- **A5-02** `ASSESS` · 385s · Vận dụng độc lập kiến thức về cơ chế, thời hạn và mục đích Cookie.
- **P07-01** `RECALL` · 180s · Kết nối các khái niệm Cookies từ trí nhớ mà không nhìn lời giải.
- **P07-02** `RECALL_TEACH_BACK` · 180s · Ôn thuật ngữ và dạy lại Cookie bằng sơ đồ tự vẽ.

**Hard gate:** Skill10 user visual approval needed before Skill11 product build is claimed aligned.
