# ONE_TOPIC — 13 Skills FocusLab v2

Đây là bộ **13 SKILL.md đã viết lại** theo các điều chỉnh được người dùng duyệt cho website bài giảng từng nội dung con: đa dạng Scene Kind (14 loại), focus/attention, mô hình cơ chế tương tác, INTRODUCTION, OBSERVE, DIAGNOSE recap, tooltip/modal, nhịp mở màn hai pha và nút hiện tất cả, viewport-fit no-scroll, Previous/Next fixed, one-CTA/one-action, no `part_id` và kiểm định độc lập.

## Bản mới và bản gốc
- Bản chạy mới: `skills/skill01/SKILL.md`…`skill13/SKILL.md`.
- Chính sách mới có hiệu lực cao nhất: `policy/ONE_TOPIC_MASTER_RULES.md`.
- MT2 nguyên bản: `legacy/13Skills_MT2_FROZEN_ORIGINAL.zip`, có thêm 13 bản gốc ở `legacy/skillXX_MT2_ORIGINAL.md`.
- Không ghi đè GitHub `main`, Cookies v1.2 hay MT3 multi-topic. Chỉ **định nghĩa đã được cập nhật**; không tự chứng nhận đã chạy lại một bài giảng.

## Chú ý tính liên tục nội dung
Thay đổi tên **một số đầu ra active** cho ONE_TOPIC trong Skills09/10/12/13 để không tiếp tục tên `multitopic` gây nhầm. Các output tên cũ nằm trong `legacy/` và có crosswalk tại `OUTPUT_NAME_CROSSWALK.csv`. Nền tảng tên ID trong bài thật vẫn tuân thủ `lesson_id/topic_id/section_id/scene_id` như MT2.

## Lộ trình duyệt
Đầu tiên duyệt bộ 13 định nghĩa và scene contract; sau đó chạy một nội dung mới từ Skill01, duyệt từng bước. Chỉ sau khi so sánh kết quả cuối với Cookies và kiểm tra browser/pilot mới xem xét đưa các thành phần phù hợp vào MT3 cho bài nhiều nội dung.


**CẬP NHẬT V2.1 (23/11):** Chỉ Skill07 được nâng cấp theo `SKILL07_UPGRADE_NOTES.md` và `policy/SKILL07_MODEL_DESIGN_STANDARD.md`. Các Skill 01–06, 08–13 vẫn là định nghĩa v2. Đọc `tests/SKILL07_V2_1_QA_RESULT.json` để biết QA tĩnh.


**V2.2 (23/11):** Đã tích hợp `PROBLEM_CONTEXT` tùy chọn vào cả 13 Skills, danh mục **14 Scene Kinds**, hợp đồng scene và tiêu chuẩn kịch bản bối cảnh. Bài DNS vẫn 11 hoạt động; chỉ đề xuất 2 scene mở đầu có nhiệm vụ khác nhau. Xem `policy/PROBLEM_CONTEXT_DESIGN_STANDARD.md`, `fixtures/dns_two_scene_pair.valid.json` và `DNS_SKILL01_08_CONTEXT_HANDOFF/`. Không sửa mã website/mô hình ở bước cập nhật định nghĩa.
