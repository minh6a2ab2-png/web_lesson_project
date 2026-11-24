# Báo cáo QA — ONE_TOPIC FocusLab v2.2

**Trạng thái:** `DEFINITION_STATIC_PASS / DNS_CONTEXT_HANDOFF_READY_FOR_REVIEW`.

- Đã cập nhật 13/13 tệp `skills/skillXX/SKILL.md` và central policy.
- 14 Scene Kinds, có PROBLEM_CONTEXT tùy chọn.
- Scene Contract JSON Schema 2020-12 được kiểm tra; PROBLEM_CONTEXT cần dữ liệu VI/EN, minh họa, split, next. Các ví dụ DNS A/B hợp lệ; fixture không có ảnh bị từ chối.
- `tests/test_definitions.py`: PASS; `tests/test_skill07_model_v21.py`: PASS ở mức định nghĩa/contract; `tests/test_problem_context_v22.py`: **22/22 PASS**.
- Danh mục mô hình Skill07 v2.1 giữ nguyên SHA-256: **True**; `legacy` giữ nguyên nguồn MT2.
- DNA DNS: 2 CORE, 7 KU, 5 objectives, 11 hoạt động, 2 Recall→Review; một hoạt động `ACT-DNS-01` có 2 scene dự kiến, cùng `activity_id`, evidence khác nhau.
- Asset `A-CONTEXT-DNS-01`: **SPEC_ONLY**, chưa có hình thật và chưa được kiểm thử.
- Browser E2E / mô hình runtime từ bản cập nhật context: **NOT_RUN**. Field/student pilot: **NOT_RUN**. Không suy ra RELEASE_PASS.

### Những điểm còn chờ
1. Người dùng duyệt hai scene dự kiến ở Skill09.
2. Tạo hình minh họa bối cảnh gốc có alt/caption VI/EN, kiểm tra viewport, offline; đưa từ SPEC_ONLY lên trạng thái có chứng cứ.
3. Skill09→13 chạy lại trên website mới; kiểm 2 pha, fixed nav, guard và sự hiểu bối cảnh của học sinh.

**Không ghi đè bản v2.1/MT3/Cookies.**
