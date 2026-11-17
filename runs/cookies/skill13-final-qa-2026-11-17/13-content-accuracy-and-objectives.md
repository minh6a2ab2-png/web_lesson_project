# 13 — Đánh giá tính chính xác và độ bao phủ mục tiêu

**Nguồn nội bộ được đối chiếu:** `Cookies_Skill03_v1.zip/01_Full_Teachable_Knowledge_Content.md`, `02_Objective_Coverage_and_Misconceptions.md`, giáo án `Cookies_Skill08_CV5512_v1_0.zip/Skill08_Lesson_Plan_CV5512.md`, hợp đồng Skill09–10 v3.5.5, HTML/mã nguồn Skill11 v1.2, ngân hàng Review/Recall.

**Nguồn tham chiếu kỹ thuật độc lập:** MDN `https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie` và `https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies`. Tài liệu MDN dùng để kiểm chứng khái niệm kỹ thuật, không thay thế nội dung được phê duyệt từ SGK.

| Mục tiêu | Nơi học sinh được học/thử | Phát hiện |
|---|---|---|
| OBJ-FOUND: browser/server, name=value | D0-01/02, A1-02/03, A1-04/05 | Đạt mức bao phủ trên website; hiệu quả thực tế chưa kiểm chứng |
| OBJ-COOKIE: Cookie là dữ liệu, không phải HTML/chương trình | A1-02/03, A1-04/05 | Đạt, có phản ví dụ |
| OBJ-FIRST: Request → Response có Set-Cookie → Browser có thể lưu | A2-01/02/03, A2-06/07 | Đúng hướng, dùng 'có thể' đúng kỹ thuật |
| OBJ-RETURN: Browser gửi Cookie trong Request phù hợp | A2-04/05, A2-06/07 | Đạt, có điều kiện và dự đoán trước mô phỏng |
| OBJ-TYPES: Session/Persistent theo thời hạn | A3-00/01/02, A3-03/04 | Đạt, không đồng nhất với RAM/ổ cứng; nêu xóa sớm |
| OBJ-USES: nhớ ngôn ngữ, giỏ hàng, phân tích | A4-01, A4-03/04 | Đạt, có ba tình huống |
| **OBJ-PRIVACY: cơ chế tracking và quyền riêng tư** | A4-02, A4-03/04, A5-02 | **Chỉ đạt một phần:** phân biệt Persistent/Tracking; thiếu diễn giải rõ cơ chế liên hệ nhiều lượt qua ID và bằng chứng vận dụng độc lập |
| OBJ-REAL: vận dụng trong bối cảnh mới | A5-01/02 | Có tình huống mới; điểm đúng/sai cần giáo viên chấm |

**Độ chính xác khái niệm đã đối chiếu:** `Set-Cookie` thuộc Response do Server gửi, `Cookie` header thuộc Request từ Browser; cookie chỉ được gửi khi áp dụng điều kiện; session/persistent xét vòng đời, không đồng nghĩa tracking. Không tìm thấy khẳng định sai nghiêm trọng trong các màn đã đọc.

**Lưu ý:** `OBJ-PRIVACY` là lỗ hổng bao phủ mục tiêu, không phải phát hiện nội dung khẳng định sai. Cần bổ sung và xác nhận trong Skill09/10/11, không tự thay đề EXIT đã phê duyệt.
