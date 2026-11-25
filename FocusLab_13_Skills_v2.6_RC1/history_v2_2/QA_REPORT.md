# BÁO CÁO KIỂM TRA BỘ ĐỊNH NGHĨA — 23/11/2026

**Phạm vi:** xác minh file và hợp đồng tĩnh của 13 Skills ONE_TOPIC. Không phải test trình duyệt của bài học mới, không phải pilot học sinh.

## Đã kiểm tra
- Có 13 file `SKILL.md` phiên bản mới, từng file có mục tiêu, đầu vào, quy trình, đầu ra, gate, bàn giao.
- Bộ chính sách thống nhất, 13 scene kinds, JSON Schema, fixture minh họa; các file MT2 gốc được giữ riêng.
- Tập hợp yêu cầu từ FocusLab v1, reveal v3, Viewport Fit và ONE_VIEWPORT v1.5; v1.4 split part/adaptive v2 đã bị thay thế.
- Có ma trận `CHANGE_MATRIX.csv` chỉ ra thay đổi áp dụng ở các Skills liên quan.
- Kiểm test định nghĩa và validate một fixture scene JSON, kèm trường hợp cố ý vi phạm.

## Trạng thái QA
- `DEFINITION_STATIC_QA`: xem `tests/DEFINITION_QA_RESULT.json`.
- `SCENE_FIXTURE_VALIDATION`: xem `tests/SCENE_VALIDATION_RESULT.json`.
- `HTML_RUNTIME_BROWSER`: **NOT_RUN** (không lập trình website bài giảng mới trong yêu cầu này).
- `LEARNER_PILOT`: **NOT_RUN**.
- `RELEASE`: **PENDING_USER_REVIEW** cho định nghĩa; không cấp phép phát hành website tự động.

## Hạn chế còn lại
- Chưa có bài giảng mới chạy qua 13 Skills nên chưa xác nhận hiệu quả sư phạm, layout và tính tương tác trên bài thực tế.
- Giao diện minh họa FocusLab trước đây là prototype; không được coi là bằng chứng 13 Skills mới đã sản xuất lại website Cookies.
- Quy tắc không cuộn có ngoại lệ trợ năng khi zoom/chữ lớn; vẫn phải đảm bảo không mất nội dung, không được giải quyết bằng `overflow:hidden`.


## Bổ sung Skill07 v2.1
- Kiểm định schema/contract/checklist và test định nghĩa mới tại `tests/SKILL07_V2_1_QA_RESULT.json`.
- `MODEL_BROWSER_TEST`, `MODEL_MOTION_EVIDENCE_RETEST`, `OFFLINE_ON_TARGET`, `LEARNER_PILOT`: **NOT_RUN** cho lượt nâng cấp định nghĩa này.
