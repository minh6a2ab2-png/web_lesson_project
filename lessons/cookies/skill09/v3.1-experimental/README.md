# Interactive Learning Studio v3.1 — experimental UI policy

Bản thử kế thừa 22 scenes v3.0, **không thay đổi mục tiêu dạy học**. Mặc định màn học chỉ có nội dung nhiệm vụ và một thanh trên tối giản. Nút Dual View luôn hiển thị. Các mode Story/Lab/Map/Focus được tự lựa theo scene; thiếu học liệu phù hợp thì dùng Slide.

**Mở:** `Studio_UI_Prototype_v3_1.html` (cùng với CSS/JS và thư mục `assets`). Hoặc mở bản `Studio_Standalone_v3_1.html` một file.

**Sổ tay học tập:** có nút ở thanh trên, ghi dấu nhiệm vụ hoàn thành bằng hành động rõ ràng, lưu ghi chú và xem lại kiến thức/kết quả. Lưu bằng `localStorage` khi trình duyệt cho phép, fallback bộ nhớ phiên; không máy chủ và không tự đồng bộ. Chưa lấy được kết quả từ các HTML học liệu Skill07 độc lập.

**EXIT:** luôn nhìn thấy nút Dual; khi bấm chỉ hiện đề và giấy nháp; các màn học cũ và Sổ tay bị khóa nội dung trong khi EXIT, không lộ teacher key.

**Trạng thái:** UX_DEMO / NOT_SKILL11_IMPLEMENTED / NOT_CLASSROOM_PILOTED.
