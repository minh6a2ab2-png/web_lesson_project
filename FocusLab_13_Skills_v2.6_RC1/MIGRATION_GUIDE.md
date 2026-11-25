# Chuyển v2.4 → v2.4.1

1. Giữ bộ v2.4 và đầu ra DNS cũ; dùng thư mục v2.4.1 cho định nghĩa mới.
2. Metadata SKILL.md chỉ name/description; phiên bản/provenance ở nội dung và VERSION.json. Không cài tự động vào danh mục Skill.
3. Đọc EXECUTION_AND_HANDOFF.md và pipeline_registry.json. Trước Skill09 dùng planned_scene_key, tại Skill09 tạo ID crosswalk, không đổi ID hợp lệ đang dùng tùy tiện.
4. Scene canonical chỉ một bộ; projection/runtime dẫn hash và mapping. Bổ sung các trường REVIEW: initial_question_ids, retry_map, retry_limit_per_question, progress_policy, summary_policy.
5. Khi chuyển đầu ra cũ, kiểm đủ file/coverage/ID/hash và đánh trạng thái hiện hành. Không ghi version mới lên đầu ra cũ rồi coi là đã rerun. Rerun chỉ bước có thay đổi nghiệp vụ và kiểm downstream theo dependency graph.
6. Bỏ active alias multitopic. Với output có điều kiện không dùng, khai báo NOT_APPLICABLE kèm lý do; thư mục ghi applicability, không tạo giả.
7. Chạy kiểm ngữ nghĩa hiện hành, rồi JSON Schema đầy đủ khi có dependency. Kiểm browser, direct file/offline và field theo scope riêng; không kế thừa PASS của báo cáo v2.4 cho v2.4.1.
