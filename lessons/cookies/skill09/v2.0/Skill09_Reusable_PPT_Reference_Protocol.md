# Quy trình mới dùng PowerPoint mẫu làm nguồn tham chiếu cho Skill 09 và Skill 10

**Mục tiêu:** Không chuyển PPT sang HTML theo kiểu sao chép từng slide. Tận dụng **cấu trúc trình bày, kiểu bố cục, sự phát triển của sơ đồ**, sau đó thiết kế lại thành môi trường học chủ động có điều khiển.

## Bắt buộc khi có PPT tham chiếu

1. **Kiểm kê mẫu:** tên file, số slide, mục đích, đối tượng, nguồn/giấy phép, các slide tiêu biểu. Nếu chưa biết PPT nào là tham chiếu, phải ghi là *provisional source* và không tuyên bố đã theo đúng mẫu cuối cùng.
2. **Phân tích kiến trúc nội dung:** trích chuỗi vấn đề → ví dụ → mô hình → giải thích → luyện tập → vận dụng; phân biệt slide mục lục, kiến thức, sơ đồ, câu hỏi, tổng kết. Không bê nội dung ngoài phạm vi Skill 01–08.
3. **Phân tích layout:** tỷ lệ, khoảng trắng, lề, phân cấp chữ, bố cục 1/2/3 cột, vị trí hình, độ đậm, tính nhất quán. Ghi cả **nhược điểm của PPT** (mật độ chữ cao, sơ đồ tĩnh, chữ nhỏ) cần sửa khi chuyển web.
4. **Biến đổi sư phạm:** mọi slide giải thích dài → nhiều scene có một ý chính; mọi chuỗi slide hình biến đổi dần → một SVG/HTML progressive; câu hỏi PPT → bài tương tác có phản hồi đúng/sai/nguyên nhân; thẻ so sánh → so sánh trong cùng ngữ cảnh có lựa chọn HS.
5. **Kiến trúc hai tầng:** Learning Section (chặng theo giáo án) → Scene (một màn/câu hỏi/sơ đồ) → Micro-state (predict/attempt/feedback/reveal/recall).
6. **Chốt bố cục ngay ở Skill 09:** mỗi Scene phải khai báo `layout_archetype`, tiêu đề, văn bản learner-facing, học liệu thực, tỉ lệ vùng hình/câu hỏi, thao tác, feedback, responsive và quyền reveal. Skill 10 được tinh chỉnh style, không phải tự đoán nội dung và layout.
7. **Bàn giao và kiểm thử:** `Reference_Analysis`, `Scene_Map`, `Scene_Spec`, `Layout_Library`, prototype desktop/mobile, manifest các asset, test report. Bản prototype chưa có engine thì nêu rõ, không gắn READY_TO_TEACH.

## Danh sách layout chuẩn

`cover` · `question` · `focus` · `diagram` · `progressive` · `compare` · `trio` · `practice` · `timeline` · `recall` · `exit`. Mỗi pattern có biến thể desktop/mobile và tiêu chí lựa chọn rõ. Đây là vocabulary mới trong Skill09; Skill10 chuẩn hóa typography, màu, spacing, motion.

## Kiểm tra bắt buộc

- Nội dung nào cần minh họa phải có asset thực hoặc có `BLOCKED` + fallback được chấp thuận; không thay bằng placeholder khi phát hành.
- Không phơi đáp án trước HS thử; EXIT độc lập; bản teacher tách khỏi package student.
- Học liệu gốc phải có alt/caption song ngữ, transcript nếu có media âm thanh, nguồn/bản quyền rõ ràng.
- Không bố trí fixed header cao, nội dung bị cắt, ảnh nhỏ khó đọc, hoặc ép 16:9 cứng trên mobile.
- Các yêu cầu Active Recall, game, sơ đồ tư duy, flashcard và learning-by-teaching vẫn áp dụng; thêm vào nơi có mục tiêu sư phạm, không dùng làm trang trí.
- Không đưa học liệu PowerPoint có bản quyền vào gói phân phối nếu chưa đủ quyền; thông thường chỉ giữ mô hình thiết kế đã khái quát hóa.

**Quan hệ Skills:** 09 chịu trách nhiệm *layout intent/scene architecture*, 10 chịu trách nhiệm *hi-fi visual system*, 11 chịu trách nhiệm *implementation/logic*, 12 kiểm định.
