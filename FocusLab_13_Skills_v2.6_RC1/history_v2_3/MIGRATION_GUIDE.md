# Chuyển từ v2.2 sang v2.3
- Dùng bản v2.3 active, không overwrite gói v2.2. Hợp đồng cũ reveal không còn hợp lệ. Chuyển sang display trực tiếp, ui metadata, navigation FREE, completion_gate NON_BLOCKING. Không copy nguyên trạng các khóa guard cũ.
- Giữ ID scene/KU/objective/activity/model; thêm model_view_id và question intent. Chuyển reflection input thành prompt tự nhiên, quiz thành đóng; loại labels trên màn, giữ nội dung. Recall dùng cấu trúc keywords/questions VI/EN. Học liệu cũ phải audit trước khi tái sử dụng.
- Website cũ và báo cáo QA cũ chỉ là baseline, không nghiệm thu v2.3. Chạy lại Skills bị tác động theo nhu cầu, trước tiên cập nhật handoff nội dung/hoạt động và scene; Skill11 thực thi, Skill12–13 kiểm định runtime và thực địa. Không tự đánh dấu học sinh mastered.
