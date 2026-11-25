# BẮT ĐẦU — 13 SKILLS ONE_TOPIC FocusLab v2

**Phiên bản:** 2026.11-ONE_TOPIC-FOCUSLAB-V2 · **Ngày:** 23/11/2026 · **Status:** 13 definitions updated + static QA; **LESSON_NOT_RUN / BROWSER_LESSON_NOT_RUN / FIELD_NOT_VALIDATED**.

**Chế độ:** 1 nội dung con mỗi lượt chạy (có thể nhiều CORE section bên trong), từng Skill để người dùng duyệt trước khi chuyển. **Không** phải bộ MT3 cho nhiều topic, và **không** phải web Cookies đã sửa.

1. Đọc `policy/ONE_TOPIC_MASTER_RULES.md` trước mọi skill, sau đó `policy/SCENE_KIND_REFERENCE.md` và `policy/QA_VIEWPORT_AND_TIMING.md`.
2. Đọc lần lượt `skills/skill01/SKILL.md` đến `skills/skill13/SKILL.md`; phân biệt nội dung cần có với đầu ra có file thật. Chỉ chạy Skill người dùng đã chỉ định và chờ duyệt.
3. Dùng `templates/scene_contract.schema.json`, `templates/model_contract.example.json` và `fixtures/valid_scene.json` khi sang Skill09–11.
4. **Nhịp được duyệt:** opening cue ngay → 2.0–3.0s (mặc định 2.5s) → mọi khối còn lại xuất hiện đồng thời; **Hiện tất cả ngay** bỏ chờ, và một chế độ **Giảm chuyển động** độc lập. Không dùng thời gian đọc adaptive v2.
5. **Một màn = một viewport**, điều hướng Previous/Next fixed trái/phải ở cạnh dưới; không `Part 1/2` do tràn; không ép font nhỏ/cắt chữ. Tại zoom/accessibility nếu cần, cho phép scroll fallback để **không mất nội dung** và ghi rõ ngoại lệ.
6. Mọi **mô hình cơ chế** phải tương tác thay đổi trạng thái; DIAGNOSE đúng có recap + minh họa, sai Recovery; INTRODUCTION có chọn lọc; tooltip hover tự đóng; một hành động một CTA.
7. `legacy/` chứa đúng 13 định nghĩa MT2 gốc và nguyên ZIP để đối chiếu, không sửa. `references/` có toàn bộ các đề xuất nguồn. `CHANGE_MATRIX.csv` chỉ ra nơi quy tắc mới được gắn vào từng Skill.
8. Kiểm định định nghĩa: chạy `python tests/test_definitions.py`. Kiểm định scene JSON: `python tests/check_scene_contract.py fixtures/valid_scene.json`.

**Cổng QA:** đây là bản `DEFINITION_REVIEW_READY`, chưa thể tuyên bố bản thiết kế/website đạt `RELEASE_PASS`. Bản Cookies Skill13 trước đây: `RELEASE_BLOCKED`.


Khi chạy lại **Skill07** ở nội dung DNS, dùng định nghĩa **`skills/skill07/SKILL.md` v2.1** và checklist `templates/skill07_model_qa_checklist.csv`. Đây là thay đổi định nghĩa; đầu ra DNS cũ vẫn cần kiểm định lại.


## Thay đổi mới v2.2
Đọc `policy/PROBLEM_CONTEXT_DESIGN_STANDARD.md`. Khi thiết kế DNS ở Skill09, kiểm tra bản bổ sung DNS trong `DNS_SKILL01_08_CONTEXT_HANDOFF/`. Hai scene mở đầu phải có nhiệm vụ và bằng chứng khác nhau, không thêm hoạt động giáo án. Đọc `policy/SCENE_KIND_REFERENCE.md` (14 loại).
