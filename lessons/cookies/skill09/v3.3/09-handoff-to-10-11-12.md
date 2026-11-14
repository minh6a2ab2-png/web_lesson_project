# 09 – Bàn giao cho Skills 10–12

## Skill10: Visual Design System
- Làm mascot/nhân vật trợ giảng thực tế với 4 trạng thái intro/reminder/hint/feedback và thu gọn.
- Thiết kế hi-fi 10 pattern trong wireframe; kiểm soát thoại ngắn, safe area không che input, mobile, Dual.
- Kiểm tra tương phản, typography, focus, readability và thời gian đọc phù hợp người mới học.

## Skill11: HTML Learning Engine
- Dùng 09-implementation-contract.json làm scene source of truth. Không tự viết lại 22 scene bằng lời khác.
- Hoàn thiện logic bài tập thật trong `learning_lab.html`, `visual_lab.html`, `exit_independent.html` và thu evidence, phản hồi đúng/sai thực sự có căn cứ.
- Dùng một scripted tutor theo scene, H3 sau thử; khóa hints trong EXIT; Dual có nút luôn, pane active.
- Lưu notebook và knowledge capsule theo gate; tách saved, attempted, reviewed, complete, mastered.
- Bảo vệ teacher-only answer key; không gửi dữ liệu học sinh ra dịch vụ AI mặc định; offline Chrome/Edge.

## Skill12: QA
- Test 22 IDs theo 4 hoạt động với dữ liệu đúng/sai/biên, câu trợ giảng tương ứng, fallback offline, keyboard mobile.
- Test người mới học nói rõ được 4 câu: học để làm gì, làm gì, bắt đầu từ đâu, thế nào là xong.
- Test Dual: N/N+1, N/M, 50/50-60/40, active pane và trạng thái EXIT; không lọt key hoặc Sổ tay khi assessment.
- Kiểm chứng localStorage qua refresh, không xem “đã lưu” = “đã đạt”; thực hiện pilot 1:1.

## Học liệu P0 cần bổ sung trước implementation
- UI before/after language trạng thái đúng cùng ngữ cảnh;
- Timeline trống thao tác được (hiện mới mô tả);
- Asset mascot hi-fi;
- Tích hợp kết quả/đáp án Skill07 vào một engine hoặc đưa nhánh fallback minh bạch;
- Thẻ mục đích/matrix và flashcards nếu muốn nâng mode tương ứng.

**Status:** Skill09 v3.3 SPEC + demonstrator (not a complete teaching engine). Do not claim autonomous AI, real HTTP simulation or mastery tracking.
