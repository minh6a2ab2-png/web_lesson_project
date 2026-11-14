# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.

## Skill 10 – Thiết kế giao diện hi-fi
- Tạo avatar/mascot phù hợp, trạng thái `intro/remind/h1/h2/h3/feedback/transition`, vị trí không che nội dung, bố cục slide/lab/dual/mobile, 8+ pattern; song ngữ; khả năng điều chỉnh chữ.
- Không biến trợ giảng thành trang chat dài. Giữ mục đích và nhiệm vụ nổi bật.

## Skill 11 – Website thực thi
- Dựa `09-implementation-contract.json`: implement 22 scene, logic thực của Skill07, event/evidence, feedback, lưu ghi chú thật, Sổ tay và knowledge unlock, chuyển trạng thái trợ giảng theo tiến trình.
- H3 chỉ sau lượt thử; thêm cơ chế tự đánh giá có giải thích; từ vựng EN/VI và chuyển ngôn ngữ toàn bộ, offline. Không nhúng teacher-only keys.
- Dual View mọi màn, 2 scene bất kỳ hoặc liền kề, tỷ lệ/scroll/điều hướng và trạng thái pane; đảm bảo EXIT cô lập.
- AI hội thoại sinh câu trả lời vẫn là `SPEC_ONLY` và không được bật mặc định.

## Skill 12 – QA thật
- Desktop/tablet/mobile (kể cả 375px), keyboard/focus/aria/voice off/reduced motion, đa trình duyệt, `file://` offline, cross-refresh localStorage.
- Test A2 chấp nhận/chặn/hết hạn/không đúng phạm vi; A3 ngoại lệ khôi phục; A4 tracking ≠ persistent; EXIT không xem lại nội dung hay đáp án.
- Pilot tự học với người chưa biết Cookie: hỏi em biết mục đích, bước đầu, cách xin gợi ý và biết xong khi nào. Chưa có pilot thì không công bố đạt tiêu chí này.

## Trạng thái bàn giao
`SKILL09_SPEC_COMPLETE / LOW_FI_UI_DEMO / NOT_SKILL11_ENGINE / NOT_CLASSROOM_TESTED`.
