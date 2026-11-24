# HƯỚNG DẪN NÂNG CẤP MT2 → ONE_TOPIC FocusLab v2

## 1. Chọn bản đúng
- Bản mới: `skills/skill01..13/SKILL.md` dưới thư mục gói này; quy định vận hành ở `policy/ONE_TOPIC_MASTER_RULES.md`.
- Bản cũ: `legacy/13Skills_MT2_FROZEN_ORIGINAL.zip`, giữ byte gốc, không được thay thế bởi bản mới.
- Không chạy các fixture `multi_topic_120min` trong MT2 làm bài thực; thời gian buổi sẽ do người dùng đặt/duyệt.

## 2. Hạng mục thay thế (không giữ cả hai quy tắc đối nghịch)
- Adaptive Reading Pacing FocusLab v2 (chờ 13/16/19s theo đoạn): **hủy**. Thay bằng Opening cue → 2–3s → Full reveal đồng thời (v3). Thời gian đọc/hoạt động sau đó không bị giới hạn.
- V1.4 split scene `scene_id:part_id`: **hủy**. Áp dụng v1.5: chỉ tạo scene độc lập có mục tiêu, tác vụ, sản phẩm riêng.
- Mô hình chỉ có Play chạy animation cố định: **không đủ**. Cần input→state/output khác, control và test case.
- “Tắt animation · Hiện tất cả” không phải chỉ `prefers-reduced-motion`; phải hủy pending timer và render nội dung học sinh được phép xem ngay. Đáp án, key, feedback chưa được kích hoạt phải tiếp tục ẩn.

## 3. Quy trình import vào dự án mới
1. Copy nguyên package sang vùng làm việc có version; trỏ skill runner tới `START_HERE.md` và policy master.
2. Khóa một topic và learner profile; không nhập 4 topic Internet & WWW khi đang chạy ONE_TOPIC.
3. Chạy Skill01 → QA/báo cáo → người dùng duyệt → Skill02 ... đến Skill13. Mỗi Skill lưu output riêng, không chỉ gửi nội dung text trong chat.
4. Khi sang Skill09 tạo `09-one-topic-scene-contract.json` theo schema. Tránh dùng tên cũ `09-multitopic...` để nhầm scope. Nếu tích hợp với hệ thống đã tồn tại, dùng mapping trong `OUTPUT_NAME_CROSSWALK.csv`.
5. Khi sang Skill11, đảm bảo website có UI test 1280×720, 1366×768, 900×600, 390×844, 360×640, 640×360, language VI/EN, instant reveal, fixed nav, model controls.
6. Khi Skill12/13 QA độc lập chưa đạt hoặc chưa có browser, báo đúng `NOT_RUN` / `RELEASE_BLOCKED`; không tự nhận phát hành.

## 4. Quy tắc bảo toàn
- Source files Cookies v1.2, nhánh MT3 Autonomous Controlled, GitHub main đều **không sửa**.
- Muốn tích hợp vào MT3, phải lập change request và kiểm thử riêng; không copy nguyên các giới hạn ONE_TOPIC vào nhiều topic mà không phân tích.


## v2.2: PROBLEM_CONTEXT migration
- Với bài chưa có `PROBLEM_CONTEXT`, không bắt buộc thêm khi OBSERVE đã có tình huống đủ rõ. Không tự chia scene để chữa tràn viewport.
- Mọi bộ `scene.kind` hiện có vẫn hợp lệ, chỉ bổ sung kind thứ 14. JSON Schema v2.2 chỉ yêu cầu `context_problem` và `problem_split` khi `kind=PROBLEM_CONTEXT`.
- Màn đôi là hai scene độc lập chung `activity_id`, có task/evidence khác nhau; không tạo Part1/Part2, không lặp câu hỏi.
- Bài DNS sử dụng `DNS_SKILL01_08_CONTEXT_HANDOFF/08-skill09-handoff.v2_2.json` và mẫu 2 scene để tham khảo Skill09. `A-CONTEXT-DNS-01` là SPEC_ONLY nên không được ghi đã nghiệm thu.
- Trước khi chạy Skill09, người dùng cần duyệt các tài liệu bổ sung; 11 hoạt động Skill08 và 7 KU gốc vẫn giữ, mô hình v2.1 không đổi.
