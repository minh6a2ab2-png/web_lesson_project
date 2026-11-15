# SKILL 09 v3.4 — COOKIES RERUN

**Phiên chạy:** 15/11/2026. **Tình trạng:** `DESIGN_PASS_WITH_DEPENDENCIES`; không phải website Skill11, chưa pilot.
**Nguồn:** Skill01–06 v1, Skill07 v1.1, Skill08 v1.0 (CV5512), 22 IDs Skill09 v3.3, định nghĩa Skill09 v3.4.
**Thời lượng:** D0 3′ + ACT01 6′ + ACT02 12′ + ACT03 7′ + ACT04 6′ + ACT05 8′ = 42′. P00 và P07 ngoài khung.

## Snapshot nguồn đầu vào

| Nguồn | Bằng chứng được đọc trực tiếp | Kết luận |
|---|---|---|
| Skills 01–06 | ZIP từng Skill từ nhánh Cookies, tạo 14/11/2026; đầu ra v1.0 | Có trong bản sao lưu; mọi thay đổi mục tiêu cần so nguồn gốc |
| Skill 07 v1.1 | `student/visual_lab.html`, `student/learning_lab.html`, `student/exit_independent.html`, manifest, teacher protocol, bộ in | READY cho các tệp gốc; chưa chứng minh được engine website tích hợp |
| Skill 08 v1.0 | `Skill08_Lesson_Plan_CV5512.md`, `Asset_Activity_Mapping.csv`, `Skill09_Handoff.md` | Giữ D0 3′, ACT01 6′, ACT02 12′, ACT03 7′, ACT04 6′, ACT05 8′ |
| Skill 09 v3.3 | `09-implementation-contract.json`, 22 scene, QA_REPORT, gap register | Mốc so sánh; không ghi đè |
| Skill 09 v3.4 | `SKILL.md`, references validator/acceptance, backup ngày 15/11/2026 | Rerun này áp dụng |

### Ranh giới và xung đột
- Trong tài liệu lịch sử có cách đánh số Skills khác nhau; không đổi ID nguồn/đánh số tự động.
- Bản Cookies giữ nguyên 22 scene và giáo án 42 phút; P00/P07 ngoài core.
- Thiếu tích hợp mô phỏng và tài nguyên P0 không được đánh dấu READY; có fallback giấy và owner chuyển giao.
- Chưa có học sinh thử tự học, chưa test file:// Windows, screenreader, localStorage reload.
- Scripted tutor ≠ AI tạo sinh, manual capture ≠ auto grader.
