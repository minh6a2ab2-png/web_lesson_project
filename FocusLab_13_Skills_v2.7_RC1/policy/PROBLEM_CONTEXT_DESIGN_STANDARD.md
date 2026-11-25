# Chuẩn thiết kế PROBLEM_CONTEXT — ONE_TOPIC v2.2

## 1. Quy trình tạo nội dung đặt vấn đề
1. **Grounding**: Xuất phát từ sự kiện hoặc tình huống cụ thể có nguồn. Phân biệt dữ kiện trong SGK, sự kiện ngoài đời đã kiểm chứng và ví dụ giả định.
2. **Title**: Tiêu đề ngắn, nói hiện tượng hoặc nhu cầu, không nêu sẵn lời giải đang cần khám phá.
3. **Context**: Ai, ở đâu, đang làm gì; học sinh nhận thấy được tình huống. Không diễn giải thành định nghĩa TEACH.
4. **Reality/Need**: Mô tả việc đang xảy ra hoặc nhu cầu thực tế (không bắt buộc phải có mâu thuẫn kịch tính).
5. **Knowledge gap / problem**: Nêu chính xác điều chưa giải thích, câu hỏi thực sự phát sinh từ context, tránh câu hỏi chung vô căn cứ.
6. **Illustration**: Có hình ảnh/sơ đồ/ảnh chụp/đối tượng mô phỏng minh họa đúng tình huống, có alt/caption VI/EN và tình trạng nguồn/bản quyền; không chỉ là icon trang trí hoặc che trước kết quả cần khám phá.
7. **Transition**: Next dẫn tới nhiệm vụ quan sát, dự đoán, DIAGNOSE hoặc thao tác **khác**. Người học biết bước kế tiếp làm gì.

## 2. Rubric chọn số scene

`ONE_SCENE` (gộp OBSERVE) và `TWO_SCENES` (PROBLEM_CONTEXT → OBSERVE hoặc nhiệm vụ khác) là hai phương án hợp lệ tùy chất lượng nhiệm vụ.

| Điểm kiểm | Một OBSERVE tích hợp | PROBLEM_CONTEXT + OBSERVE |
|---|---|---|
| Bối cảnh | Có thể hiểu tức thì và ngắn | Cần bồi đắp tình huống riêng trước quan sát |
| Nhiệm vụ | Một hành động quan sát/vấn đề thống nhất | A nhận diện vấn đề, B thu bằng chứng hoặc thử giả thuyết |
| Evidence | Một minh chứng đủ | Hai bằng chứng phân biệt |
| Lượng chữ | **Không là lý do tách** | **Không là lý do tách** |
| Chuyển tiếp | Đến hoạt động tiếp | Next scene rõ, có trạng thái theo scene_id |

Nếu không nêu được hai `student_task` và hai `evidence` khác nhau thì **không** tách. Không tạo tên 'Part 1/2', không tạo scene chỉ có hình để lấp chỗ.

## 3. Thiết kế bố cục và chuyển động
- Thiết kế một viewport desktop: header/leading cue ở trên; story và minh họa ở vùng chính; câu hỏi trọng tâm ở khối rộng đủ đọc. Cân ngân sách chiều cao với hai nút nổi fixed độc lập, không footer.
- Render ngay toàn bộ tiêu đề, lời dẫn, bối cảnh, minh họa, câu hỏi; highlight tiêu đề chậm 3 giây. Không in nhãn Bối cảnh/Thực trạng/Đặt vấn đề; không yêu cầu nhập giả thuyết.
- Không tự chuyển scene sau timer; Previous/Next là hai nút nổi fixed riêng, không footer. Animation của mô hình chỉ chạy do thao tác của HS/GV.
- Ảnh và chữ không bị che/cắt tại 1280×720, 1366×768, 1600×900, 1920×1080 ở VI/EN; zoom/thiết bị nhỏ ưu tiên tiếp cận và cho phép cuộn có kiểm soát.
- Không làm mờ quá mức bối cảnh đã xuất hiện; không nhấp nháy; một tiêu điểm chính tại một thời điểm.

## 4. Hợp đồng tối thiểu `context_problem`
- `title_vi/title_en`, `setting_vi/setting_en`, `observed_reality_vi/observed_reality_en`, `knowledge_gap_vi/knowledge_gap_en`, `problem_question_vi/problem_question_en`, `illustration_asset_ids`, `next_learning_action_vi/next_learning_action_en`, `source_status`, `spoiler_boundary`.
- Ảnh thực phải có file/hash, trạng thái; tài nguyên SPEC_ONLY không thể tính READY.
- `problem_split`: `mode`, `reason`, `shared_activity_id`, `next_scene_id`, `context_evidence_id`, `next_scene_evidence_id` nếu hai scene.

## 5. Ví dụ DNS (SGK trang 183) — không spoil
A, `PROBLEM_CONTEXT`: *Làm sao máy tính tìm đúng website?* Em nhập `www.hoddereducation.co.uk` trong trình duyệt; không gõ địa chỉ IP nhưng trang sẽ tải. Máy cần xác định địa chỉ máy chủ để liên hệ. Vấn đề: làm sao máy biết địa chỉ phù hợp với tên? Minh họa trình duyệt nhận hostname và máy chủ đích **chưa biết IP**.
B, `OBSERVE`: Học sinh nhìn đầu vào hostname và sự xuất hiện của trang, nhận diện bước trung gian đang bị ẩn, nói một giả thuyết và bằng chứng quan sát. **Chưa giải thích DNS**, tên DNS dành cho INTRODUCTION sau DIAGNOSE khi thích hợp.

Hai scene dùng cùng hoạt động mở đầu `ACT-DNS-01`, không làm tăng 11 hoạt động dạy học. Minh họa bối cảnh riêng cần có asset được sản xuất và kiểm định; bản chỉ đặc tả không được ghi đã hoàn thành.

## 6. Nghiệm thu / chặn
**PASS chỉ khi** bối cảnh có nguồn, hình thật, câu hỏi tự nhiên; A/B có nhiệm vụ khác nhau, không spoil; direct display, title highlight, VI/EN, viewport, fixed nav. Không nhãn dư hoặc form phản tư.
