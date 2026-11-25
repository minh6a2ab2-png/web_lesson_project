# Báo cáo chỉnh bộ 13 Skill — v2.4.1

Đã sửa cả 13 định nghĩa trên nền v2.4 người dùng gửi, giữ lineage: bộ 13 Skill mới nhất → v2.3 → v2.4 → v2.4.1. Bản gốc và toàn bộ đầu ra DNS giữ nguyên tại thư mục hồ sơ bên cạnh. Bản mới chưa được cài vào danh mục Skill của ChatGPT.

## Thay đổi chính
- Mỗi Skill có thao tác cụ thể, đầu ra tra cứu được và quy tắc bàn giao. Chi tiết theo bước tại CHANGE_MATRIX_V2_4_1.csv.
- Một nguồn scene canonical; planned_scene_key trước Skill09, ID crosswalk tại Skill09; runtime projection dẫn hash/mapping.
- Giữ LEAD_IN, 15 kind được hỗ trợ, Direct Learning, Visual Recall, Review thích ứng, song ngữ, mô hình thật và hai nút nổi không footer. Không ép mỗi bài dùng đủ 15 kind.
- Review có câu tương đương theo KU/mục tiêu, retry hữu hạn, kết quả gốc/củng cố riêng, summary sau lượt thử/bỏ qua, Next tự do.
- Chuẩn hóa output manifest, hash, đầu ra có điều kiện, trạng thái test/duyệt/field và tác động downstream khi sửa.
- Loại alias multitopic khỏi đầu ra active; tách số CORE/KU và tên màn DNS khỏi quy chuẩn chung. Với bài không cần model vẫn có báo cáo thật ghi không áp dụng; không dựng model/đường dẫn giả.

## Bằng chứng trong lần sửa này
| Kiểm tra | Kết quả | Giới hạn |
|---|---|---|
| Bộ kiểm tính nhất quán và hợp đồng ngữ nghĩa | 165/165 PASS | Không phải JSON Schema engine hoặc browser test |
| Canonical handoff fixture toàn bài | PASS | Ví dụ cấu trúc, không là bài giảng hoàn chỉnh |
| Thử bàn giao bằng tình huống Cookies với lượt kiểm tách biệt | Đã thực hiện | Phát hiện alias cũ và hai điểm no-model/README, đã chỉnh; không sinh bài mới |
| Full JSON Schema regression gốc | NOT_RUN | Thiếu jsonschema; môi trường không tải được dependency |
| Metadata Skill | PASS trong suite ngữ nghĩa | Kiểm name/description, không phải cài Skill vào hệ thống |
| Browser, file trực tiếp, offline trên máy dạy, học sinh thật | NOT_RUN | Không thuộc lần sửa định nghĩa này |

Chi tiết 165 ca tại tests/CONSISTENCY_QA_RESULT.json. Kết quả v2.4 cũ đã lưu riêng tại tests/DEFINITION_QA_RESULT_V2_4_ARCHIVED.json; không dùng để xác nhận v2.4.1.

## Cách dùng tiếp
Đọc START_HERE.md và policy/EXECUTION_AND_HANDOFF.md. Dùng bộ v2.4.1 cho lần chạy bài mới. Nếu áp vào DNS hiện hữu, trước hết đối chiếu registry với đầu ra cũ để xác định bước nào cần bổ sung hoặc chạy lại; không đổi nhãn phiên bản rồi nhận là đã rerun.

Trạng thái: DEFINITION_SEMANTIC_PASS; FULL_SCHEMA_NOT_RUN; LESSON_RUNTIME_NOT_RUN; FIELD_NOT_RUN. Bản định nghĩa sẵn để người dùng xem xét, chưa có kết luận RELEASE_PASS cho bài DNS.
