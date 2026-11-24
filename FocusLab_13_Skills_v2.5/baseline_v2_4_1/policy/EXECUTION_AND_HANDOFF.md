# Thực thi và bàn giao — v2.4.1

## 1. Phạm vi và ưu tiên
Kế thừa bộ 13 Skill mới nhất người dùng gửi → v2.3 → v2.4 → v2.4.1. MT2/MT3 trong lịch sử chỉ đối chiếu. Giữ 13 bước, ONE_TOPIC và 15 scene kinds, không tự sửa/rerun DNS.

Ưu tiên: chỉ đạo người dùng → chính xác/an toàn → ONE_TOPIC master + tài liệu này → GV01–GV06 v2.4 phần thay thế → DL01–DL07 v2.3 phần kế thừa → định nghĩa Skill → lịch sử. Chỉnh cả bộ định nghĩa không phải chạy từng Skill cho bài giảng; không cần dừng duyệt sau mỗi tệp. Khi sản xuất bài học, mặc định duyệt từng bước; nếu người dùng đã cho phép chạy một chuỗi thì làm theo phạm vi đó, không hỏi lại thường lệ. BLOCKED phải báo, không tự nhận đã duyệt.

## 2. ID và nguồn chuẩn
- Trước Skill09 dùng planned_scene_key. Các ID KU/objective/activity/asset/model/question được cấp ở bước sở hữu. Skill09 cấp scene_id qua 09-id-crosswalk.json, không có hai hệ ID cạnh tranh.
- 09-one-topic-scene-contract.json là canonical. Runtime/projection ghi canonical_ref + sha256 + mapping; 09-guided-visual-scene-contract.json là báo cáo/projection, không phải bộ scene để chỉnh song song.
- State dependency mô tả dữ liệu, không khóa Next. Resume/deeplink thiếu state dùng mặc định an toàn, không giả kết quả cũ.
- Registry hỗ trợ 15 kinds; bài thật chỉ dùng kind phù hợp. Harness riêng kiểm kinds chưa dùng, không tăng scene để đủ enum.

## 3. Output manifest
Dùng templates/output_manifest.schema.json và pipeline_registry.json. Ghi run_id, skill_id, version, topic_id, input_refs, output_files, evidence, open_issues, gate_status, next_skill, approval_status, test_status, field_status. Input ref có path/version/hash của đầu vào đã đọc; output có path/status/sha256.

Thiếu tệp phải SPEC_ONLY/BLOCKED, không hash giả. Output có điều kiện phải ghi quyết định áp dụng; NOT_APPLICABLE cần lý do. Thư mục không áp dụng được ghi trong mảng applicability bằng path/status/reason, không tạo một file/thư mục giả. Các consumer trong registry là trực tiếp; khi đánh dấu STALE phải duyệt cả phụ thuộc bắc cầu. Báo cáo cùng scope có thể trỏ canonical_ref + hash thay vì nhân nội dung, nhưng phải có tệp chỉ mục đúng tên để downstream đọc. Manifest không tự hash chính nó.

Path output là tương đối trong run root, không `..`, absolute hay drive path. Mỗi file thật có SHA-256 từ bytes; thư mục phải liệt kê file con, không dùng hash rỗng của thư mục để nhận đã sản xuất. Evidence ID khác path phải phân biệt rõ.

## 4. Tách trạng thái
| Trục | Giá trị |
|---|---|
| gate_status | DRAFT, PROTOTYPE, NEEDS_REVIEW, TESTED_AUTOMATED, VERIFIED_IN_PRACTICE, BLOCKED |
| approval_status | NOT_REQUESTED, PENDING, USER_APPROVED, REJECTED |
| test_status | NOT_RUN, PASS, FAIL, BLOCKED |
| field_status | NOT_RUN, PASS, FAIL, BLOCKED |
| asset status | READY_REFERENCE, READY_ASSET, PROTOTYPE, SPEC_ONLY, BLOCKED, NOT_APPLICABLE |

STATIC_DEFINITION_PASS/BROWSER_PASS/FIELD_VALIDATED/RELEASE_PASS là kết quả có scope, không phải asset status/approval. Không dùng RELEASE_READY làm gate_status. Người dùng duyệt thiết kế không thay test runtime/field.

## 5. Review và chống spoil
Giữ question_id, ku_ids, equivalence_group_id và kết quả gốc/tương đương riêng. Sai mới đề nghị retry, mặc định một câu tương đương cho mỗi câu sai trong một lượt. HS được thử hoặc bỏ qua. Hết ngân hàng thì báo trạng thái/hỗ trợ, không queue vô hạn. Progress tách lượt gốc và củng cố, không gọi mastery.

Summary mở chủ động sau khi mỗi câu lượt gốc đã thử hoặc bỏ qua rõ; không tự mở khi chỉ xem scene. GV có thể mở ngoài lượt đánh giá nhưng phải phân biệt chế độ. Next luôn tự do, không đòi làm đủ queue. Đổi VI/EN/quay lại/resume không enqueue trùng. Key độc lập tách khỏi student bundle; key luyện tập sau check có thể client-side. Cue/alt/tooltip/caption không lộ định nghĩa/luồng cần nhớ trước Recall/assessment.

## 6. Repair và retest
Issue ghi issue_id, severity, owner_skill, affected_outputs, repro, expected/actual, evidence_refs và retest_required. Sửa upstream đổi hash phải đánh dấu consumer outputs STALE; kiểm tác động và ca liên quan trước khi dùng lại. Sửa định nghĩa không tự đóng issue runtime.

Reviewer độc lập cần người/lượt kiểm tách khỏi người vừa sửa. Nếu tự kiểm ghi SELF_REVIEW và giới hạn; không nhận đã có reviewer độc lập. Kiểm schema/fixture không chứng minh browser/file/offline/field.
