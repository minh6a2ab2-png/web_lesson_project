# Quy định bổ sung cho 12 Skills: Học liệu trực quan và sản phẩm minh họa (v1.1)

Ngày cập nhật: 2026-11-14. Áp dụng cho quy trình thiết kế bài giảng gia sư 1–1, web/slides, theo chuẩn giáo án Công văn 5512.

## 0. Quy tắc cốt lõi
Không để một đơn vị kiến thức **cần trực quan hóa** xuất hiện trong bài giảng mà thiếu minh họa phù hợp. Không bắt buộc gắn ảnh cho mọi đoạn văn: với định nghĩa đơn giản, ví dụ chữ hoặc thao tác thực tế có thể tốt hơn ảnh trang trí. Mỗi hình/clip/mô phỏng phải gắn với mục tiêu, câu hỏi hoặc hành động học sinh và bằng chứng học tập. Không tự nhận asset đã có khi mới có prompt, storyboard hoặc liên kết chưa kiểm tra.

Bắt buộc phân loại từng đơn vị nội dung:
- CONCEPT: khái niệm, cấu tạo, đối tượng -> ảnh gốc, sơ đồ chính xác, bảng so sánh, vật mẫu/ảnh chụp màn hình
- PROCESS: chuỗi bước hoặc trao đổi -> hoạt ảnh HTML/SVG, video ngắn hoặc mô phỏng từng bước
- PROCEDURE: thao tác thực hành -> ảnh chụp giao diện đã kiểm tra, screencast hoặc demo hoạt động
- CONTRAST: dễ nhầm lẫn -> hai trạng thái trong cùng bối cảnh, bảng/sơ đồ đối chứng
- APPLICATION: vận dụng -> sản phẩm mẫu (không lộ toàn bộ đáp án trước lúc HS làm), tình huống và bài thực hành
- RECALL: truy hồi -> thẻ từ khóa/hình/sơ đồ trống để học sinh nói, viết, vẽ lại
- TEXT_ONLY_OK: chỉ khi có lý do sư phạm rõ ràng và được kiểm soát

## 1. Thay đổi theo Skill
1. **Skill 01 – Content Research & Analysis**: lập Visual Evidence Needs theo từng kiến thức, xác minh hiện tượng và nguồn, tránh hình sai kiến thức.
2. **Skill 02 – Lesson Architecture & Assessment**: mỗi mục tiêu phải có dạng minh họa và hành vi quan sát/đánh giá; chỉ rõ điểm dùng trước/trong/sau giảng.
3. **Skill 03 – Knowledge Content Author**: kèm ví dụ thật, phản ví dụ, yêu cầu hình/sơ đồ/mô phỏng gắn từng phần; không chèn placeholder như sản phẩm hoàn tất.
4. **Skill 04 – Learner Profile & Activity Design**: chọn mức độ phức tạp trực quan phù hợp một học sinh; quy định học sinh quan sát, dự đoán, thao tác và giải thích.
5. **Skill 05 – Learning Resource Curator / Activity Assets**: kiểm kê kho Drive/GitHub trước khi tìm ngoài; chọn REUSE, SEARCH hoặc CREATE; tự tạo ngay file khả thi bằng công cụ sẵn có; ghi giấy phép, nguồn, alt/caption/song ngữ, transcript, fallback offline và trạng thái. Công cụ: image generation cho minh họa, SVG/HTML/CSS/JS cho sơ đồ kỹ thuật và mô phỏng, ảnh màn hình giao diện thật khi cần, tài nguyên được cấp phép khi có sẵn. Video/GIF/MP4 chỉ khi phục vụ sư phạm và thực sự sản xuất được.
6. **Skill 06 – Teaching Scenario Writer / Lesson Plan**: kịch bản chỉ rõ asset ID, thời điểm xuất hiện, câu hỏi gợi mở, thời lượng tương đối, thao tác học sinh, kiểm tra hiểu và phương án nếu asset lỗi.
7. **Skill 07 – Activity Resource Designer / Teaching Scenarios**: sản xuất hoặc hoàn thiện asset thành file thực, bản student/teacher tách biệt; tạo sơ đồ trống, phiếu tương tác, sản phẩm mẫu và các trạng thái; kiểm tra logic, độ chính xác, thiết bị và file; lập danh mục và báo cáo QA, không chấp nhận asset thiếu mà không có blocker/alternative.
8. **Skill 08 – Homework / Handoff**: giao nhiệm vụ sử dụng hình/sản phẩm, active recall, vẽ lại mind-map, flashcards; ghi đầu vào và trạng thái tài nguyên bàn giao.
9. **Skill 09 – Website Architecture**: xác định vị trí media theo luồng hiện tượng→nguyên lý→thực hành; tải offline, tương tác, responsive, hỗ trợ bàn phím và văn bản thay thế.
10. **Skill 10 – Slide Design**: sử dụng hình/sơ đồ/demo đúng nơi, không nhồi ảnh trang trí; hình lớn đủ đọc, chú thích, tương phản tốt, không che nội dung; đối chiếu nguyên bản vs đã thay đổi.
11. **Skill 11 – Website Code**: nhúng file nguồn thực, dựng nút điều khiển hoạt ảnh và trạng thái, xử lý lỗi tải, kiểm tra mobile/desktop, không dùng URL giả hoặc dependency online không được phê duyệt.
12. **Skill 12 – Quality Review**: audit coverage bằng bảng knowledge→asset→file→learning action→test; xác minh có file thực, nguồn/giấy phép, nội dung đúng, hoạt động được, có fallback; chặn nghiệm thu nếu nội dung quan trọng thiếu minh họa cần thiết.

## 2. Quy trình lựa chọn
1. Có cần nhìn thấy hoặc thao tác để hiểu tốt hơn không? Nếu không, ghi TEXT_ONLY_OK và lý do.
2. Nếu có, ưu tiên tái sử dụng nguồn đúng, rõ bản quyền và còn mở được; tiếp theo tự tạo bằng công cụ phù hợp.
3. Kỹ thuật cần chính xác: SVG/code ưu tiên trước hình AI; quy trình cần học sinh bấm điều khiển: HTML tương tác ưu tiên trước video thụ động.
4. Mỗi asset phải có prompt/câu hỏi dẫn dắt và kiểm tra nhớ lại sau phần học; không chỉ cho học sinh xem.
5. Xuất bản bản offline hoặc fallback (PDF + sơ đồ tĩnh + transcript) cho asset quan trọng.

## 3. Bắt buộc trong manifest
ID | lesson | concept_id | pedagogic_goal | type | source_url/license/attribution | production_method | path | alt_vi | alt_en | caption_vi | caption_en | transcript_vi/en (khi có audio/video) | offline_fallback | audience | status | test_status | blocker | owner/next_action

Các status: READY, PROTOTYPE, SPEC_ONLY, BLOCKED; test_status tách riêng gồm UNTESTED, LOGIC_TESTED, BROWSER_TESTED, VISUAL_REVIEWED, PILOTED. Không dùng READY khi chưa có file mở được.

## 4. Cổng kiểm tra
- Gate A cuối Skill 03: tất cả kiến thức được gắn nhu cầu trực quan hoặc TEXT_ONLY_OK có lý do.
- Gate B cuối Skill 05: asset plan có nguồn, quyền sử dụng, phương án sản xuất và file thực khi khả thi.
- Gate C cuối Skill 07: mọi asset bắt buộc có file thật hoặc BLOCKED và phương án thay thế được chấp thuận.
- Gate D cuối Skill 11: asset xuất hiện đúng vị trí, đúng nhãn, hoạt động trên thiết bị đích.
- Gate E cuối Skill 12: đối chiếu từng nội dung và chặn phát hành nếu thiếu asset thiết yếu, sai kiến thức, sai giấy phép hoặc không có phương án offline.

## 5. Pilot: Cookies
Tái sử dụng sơ đồ browser_server_blank.svg và cookie_cycle_reference.svg; ưu tiên bổ sung (1) mô phỏng từng bước Set-Cookie/Cookie hai chiều, (2) tình huống chấp nhận vs chặn cookie, (3) timeline Session vs Persistent, (4) tình huống tracking/privacy, (5) sơ đồ trống/mind map học sinh tự vẽ. Không bắt buộc MP4 khi mô phỏng điều khiển bước đáp ứng mục tiêu tốt hơn. Đáp án/teacher-only không chuyển vào gói học sinh.

## 6. Tương thích
Không tự thay thế các file Skills 01–12 hay học liệu cũ; đây là quy tắc bổ sung xuyên suốt. Bài Internet & WWW và Cookies có lịch sử/đầu ra riêng. Mọi chỉnh sửa tài liệu Skill tiếp theo phải bảo toàn yêu cầu trước đó và ghi phiên bản.
