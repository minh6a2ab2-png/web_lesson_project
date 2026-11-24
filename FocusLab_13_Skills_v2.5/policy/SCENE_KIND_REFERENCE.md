# 15 Scene Kinds — ý định nhận thức và thiết kế

| `kind` | Học sinh thực hiện | Focus target | Mô hình/hiệu ứng | Cổng quan trọng |
|---|---|---|---|---|
| `PROBLEM_CONTEXT` | Hiểu bối cảnh, chỉ ra thực trạng/nhu cầu và câu hỏi cần giải | Bối cảnh + điểm chưa giải thích + câu hỏi nổi bật | Tình huống, ảnh/SVG minh họa có nguồn; direct display; title highlight 3s | Tách scene chỉ khi nhiệm vụ/evidence khác OBSERVE; không spoil giải pháp, không chỉ một câu hỏi |
| `LEAD_IN` | Hiểu mạch nối và chuẩn bị cho cụm hoạt động mới | Lời dẫn + minh họa liên quan | Direct display, title highlight 3s; Next chủ động | Không lộ đáp án, không lặp hoặc thêm trước từng câu |
| `OBSERVE` | Quan sát hiện tượng, phát hiện vấn đề | Câu hỏi tình huống ở trung tâm | Spotlight nhẹ, quan sát hai trạng thái | Phải xem được bằng chứng, không phải xem một animation có sẵn rồi bấm Next |
| `DIAGNOSE` | Bộc lộ kiến thức nền | Câu hỏi và lựa chọn | Feedback; đúng→modal kiến thức cũ minh họa, sai→RECOVERY | Modal không là bài kiểm tra, không lộ đáp án cho assessment |
| `RECOVERY` | Bù lỗ hổng cụ thể | Điểm hiểu sai | Minh họa/điều khiển một bước rồi thử lại | Không mở tuyến học dài không cần thiết |
| `INTRODUCTION` | Nhận diện tên công cụ/phương án | Tên khái niệm + ích lợi | Hình/mô hình preview tương tác ngắn | Dùng có chọn lọc trước TEACH; không thay đầy đủ TEACH |
| `TEACH` | Đọc, hiểu giải thích chính | Cơ chế hoặc nội dung cốt lõi | Chú giải, mô hình inline khi là cơ chế | Không ép nhập câu trả lời chỉ để được đọc kiến thức |
| `EXPLORE` | Thử giả thuyết, điều chỉnh đầu vào | Mô hình + biến thay đổi | Tương tác trạng thái, thử bình thường/ngoại lệ | Quan sát, kết luận chuẩn hóa trực tiếp; câu hỏi miệng tùy chọn |
| `COMPARE` | So sánh các trường hợp | Khác biệt trọng điểm | Cùng màn/cùng mô hình; highlight khác biệt | Không tách hai thứ bắt buộc đặt cạnh nhau |
| `PRACTISE` | Vận dụng có phản hồi | Nhiệm vụ thao tác | Phản hồi theo thao tác, có sửa sai | Không thay chứng cứ bằng click ngẫu nhiên |
| `RECALL` | Tự tái hiện không gợi đáp án | Câu hỏi/cue nhớ lại | Từng keyword do bấm → câu hỏi gợi nhớ, không nhập/nộp | Không đáp án, không chấm; Next tự do |
| `REVIEW` | Ôn tập đánh giá có phản hồi | Câu hỏi/đáp án đã thử | Feedback, có thử lại | ≥2 dạng câu phù hợp mỗi CORE section |
| `RECALL_TEACH_BACK` | Giải thích lại bằng lời/sơ đồ | Mạch lập luận | Dựng lại sơ đồ, chỉ dẫn sau lượt thử | Có tiêu chí diễn đạt đúng |
| `ASSESS_INTRO` | Hiểu yêu cầu đánh giá | Tiêu chí/nhiệm vụ | Brief tĩnh, không gợi đáp án | Giữ độc lập bài đánh giá |
| `ASSESS` | Thực hiện đánh giá độc lập | Bài làm | Câu hỏi đóng, không cue gợi kết quả trước check | Key không ở student bundle; cấm tự MASTERED vì Next |

**Scene mode** (SLIDE/STORY/LAB/MAP/FOCUS/ASSESSMENT) là lựa chọn **bố cục**, không phải `kind`. Scene có thể đặt `kind=TEACH`, `layout_mode=LAB` nếu cần mô hình giải thích cơ chế. Khi lựa chọn hình thức, ưu tiên học sinh có thể tìm được điểm nhìn chính, hiểu nhiệm vụ và có điều khiển rõ ràng.

## Decision Gate: one or two scenes

- **ONE_SCENE:** Tình huống đơn giản; OBSERVE có thể mô tả bối cảnh/thực trạng/vấn đề + quan sát trong một viewport rõ nét.
- **TWO_SCENES:** `PROBLEM_CONTEXT` cần nhiệm vụ 'hiểu tình huống và nhận ra vấn đề'; scene B có hành động *khác* (quan sát bằng chứng, thao tác, giả thuyết, DIAGNOSE). Cùng `activity_id` nếu thuộc một hoạt động giáo án, nhưng `scene_id`, evidence và learning task khác nhau.
- **BLOCK:** Chia màn chỉ để tràn bố cục, cùng câu hỏi/ảnh/lời dẫn lặp lại, dẫn tên giải pháp trước khi HS được khám phá, không có asset minh họa, người đọc không biết làm gì sau khi bấm Next.
- **Không bắt buộc** mọi topic đều dùng PROBLEM_CONTEXT; INTRODUCTION vẫn là chức năng *gọi tên giải pháp*, không trùng PROBLEM_CONTEXT.

## Quy tắc trình bày v2.3
Áp dụng DL01–DL07: tên kind là metadata, không hiện như nhãn màn học. Không form phản tư. Mỗi view có nội dung và nhiệm vụ riêng.
