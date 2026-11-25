# PHỤ LỤC ĐỀ XUẤT — SKILL 10 / SCREEN DESIGN
## Viewport-Fit + Fixed Navigation + Two-Stage Reveal (ONE_TOPIC)

**Ngày:** 23/11/2026 · **Trạng thái:** BẢN ĐỀ XUẤT có thể chèn vào Skill thiết kế màn, **chưa ghi đè bộ Skill gốc**.  
**Nguồn nội bộ:** FocusLab Cookies Two-Stage Reveal v3 (`DE_XUAT_NHIP_HAI_PHA_FOCUSLAB_V3.md`) và các yêu cầu mới của người dùng.  
**Áp dụng:** Tất cả 13 Scene Kinds (OBSERVE, DIAGNOSE, RECOVERY, INTRODUCTION, TEACH, EXPLORE, COMPARE, PRACTISE, RECALL, REVIEW, RECALL_TEACH_BACK, ASSESS_INTRO, ASSESS).

## 1. CÁC QUY TẮC BẮT BUỘC (MUST)

**VF-01 — Một scene = một khung nhìn.** Trong chế độ trình chiếu ở **100% zoom** trên viewport chuẩn **1280×720 trở lên**, toàn bộ thông tin **cần thiết để thực hiện nhiệm vụ của scene** phải nằm trọn trong vùng nhìn mà không cuộn dọc hoặc ngang. Điều này áp dụng cả **VI và EN**, cả trước và sau full reveal, khi hiển thị các chú giải / lựa chọn / phản hồi bình thường.

**VF-02 — Thiết kế theo viewport thực.** Dùng kích thước vùng nội dung trình duyệt, không giả định màn hình 1366×768 nghĩa là trình duyệt có đủ 768 px chiều cao. Kích thước thiết kế được quyết định bởi `viewportWidth` × `viewportHeight` sau khi trừ browser chrome nếu có. Baseline kiểm thử: 1280×720, 1366×768, 1600×900, 1920×1080 (CSS px của viewport).

**VF-03 — Dự trữ diện tích UI trước khi đặt nội dung.** Cần dự trữ vùng cố định cho thanh điều hướng trên cùng (nếu có), nút Previous/Next ở đáy, safe area và khoảng trắng. **Vùng scene = chiều cao viewport – header – navigation dock – safe margins**. Không đặt nội dung quan trọng nằm dưới các điều khiển cố định.

**VF-04 — Previous/Next cố định theo màn hình.** Đặt thanh điều hướng `position: fixed` ở đáy viewport, không chạy theo nội dung; nút Previous bên trái, Next bên phải; ở giữa là số màn (và trạng thái tiến độ nếu cần). Khoảng chạm ít nhất khoảng 44×44 CSS px; vẫn giữ được vị trí khi đổi scene, đổi ngôn ngữ hoặc hiện full content; vô hiệu Next/Previous thích hợp ở màn đầu/cuối. Luôn chừa padding dưới cùng bằng chiều cao dock.

**VF-05 — Không thu nhỏ chữ để nhét nội dung.** Nếu nội dung không vừa thì **thiết kế lại / chia scene**, tuyệt đối không giảm cỡ chữ đến mức khó đọc, tự động scale toàn bộ slide xuống, cắt bằng `overflow:hidden`, che bớt kiến thức, hoặc dùng cuộn bên trong vùng chính như cách lách kiểm thử.

**VF-06 — Rõ phân cấp thị giác.** Mỗi scene chỉ một điểm chú ý chính; title/opening cue là cấp 1, mô hình hoặc học liệu trọng tâm là cấp 2, giải thích và hành động là cấp 3. Không có hơn một đối tượng chuyển động nổi bật cùng lúc. Phần trang trí chỉ chiếm phần diện tích nhỏ và được bỏ đầu tiên khi không đủ chỗ.

**VF-07 — Bố cục thay đổi theo bản chất scene.** Không ép mọi loại màn vào hai cột cố định. OBSERVE/INTRODUCTION ưu tiên câu hỏi và hình trung tâm; DIAGNOSE/RECALL ưu tiên câu hỏi và lựa chọn; TEACH đặt kiến thức cạnh mô hình; EXPLORE/PRACTISE ưu tiên mô hình lớn + điều khiển thu gọn; COMPARE dùng hai panel cân bằng. Lựa chọn bố cục phải ghi lý do sư phạm và kiểm tra fit.

**VF-08 — Tối đa hóa không gian học.** Mặc định ẩn sidebar, inspector, nhãn lặp và công cụ quản trị trong chế độ trình chiếu. Cài đặt nâng cao nằm trong một popover/dialog theo yêu cầu, không chiếm chiều cao scene. Dùng modal chỉ cho thông tin hỗ trợ; kiến thức bắt buộc phải hiện được trên scene, không giấu trong modal để đạt yêu cầu fit.

**VF-09 — Không lạm dụng chia màn.** Nếu phải chia một scene, phân chia theo thao tác/đơn vị kiến thức thật sự (ví dụ nguyên nhân → cơ chế → kiểm chứng). Không tách một câu thành nhiều scene chỉ để qua kiểm thử, và không làm gián đoạn liên tục một hoạt động tương tác đang diễn ra.

**VF-10 — Nhịp xuất hiện hai pha (đã được lựa chọn).** Pha 1: hiện title/câu hỏi tình huống/lời dẫn ở vùng nổi bật. Sau **2–3 giây, mặc định 2,5 giây**, pha 2: toàn bộ thông tin còn lại cùng xuất hiện; **không thêm staggered reveal**. Layout được dự trữ từ đầu để tránh nhảy vị trí. Nút **Tắt animation · Hiện tất cả** bỏ thời gian chờ và hiển thị ngay. Không tự cuộn / tự chuyển màn; mô hình chỉ chạy khi người học thao tác hoặc bật chạy mô phỏng.

**VF-11 — Ưu tiên mô hình nhìn rõ và thao tác được.** Với scene giải thích cơ chế, đồ họa phải có kích thước đủ để nhìn được các thành phần và chiều biến đổi. Không làm mô hình quá nhỏ để nhường diện tích cho văn xuôi; thay bằng chú giải ngắn hoặc chia scene. Các điều khiển mô hình không chồng lên Prev/Next.

**VF-12 — Không mất nội dung khi ngôn ngữ dài hơn.** Kiểm tra bản tiếng Anh có thể dài hơn tiếng Việt (hoặc ngược lại), dùng co giãn theo bố cục thay vì chiều cao cứng của text block. Ghi và xử lý trường hợp tràn riêng; không cắt câu hoặc dùng ellipsis đối với nội dung cần học.

**VF-13 — Đảm bảo thao tác trên thiết bị nhỏ / khi phóng to.** Không tuyên bố “cấm scroll ở mọi cỡ màn hình”. Khi viewport thấp/hẹp, browser zoom 200–400%, hoặc người dùng tăng cỡ chữ: ưu tiên hiển thị đầy đủ nội dung và nút điều khiển, cho phép **reflow và cuộn dọc** nếu cần. Tránh cuộn ngang hai chiều; mở rộng nội dung thiết yếu thay vì cắt. Đây là ngoại lệ trợ năng, không làm giảm tiêu chí không cuộn ở desktop tiêu chuẩn.

## 2. PHÂN BỔ KHUNG Ở VIEWPORT CHUẨN

**Thiết kế baseline:** 1280×720 CSS px ở 100% zoom. Các con số dưới đây là khuyến nghị thử nghiệm, không phải định mức sư phạm cố định.

| Vùng | Gợi ý | Ghi chú |
|---|---:|---|
| Topbar thu gọn | 0–52 px | Chỉ tiêu đề bài / VI-EN / settings; có thể ẩn khi trình chiếu |
| Thanh cố định Prev–Next | 60–72 px | Bao gồm padding và safe area; luôn nhìn thấy |
| Biên an toàn / khoảng cách giữa vùng | 16–24 px | Bên trong vùng scene |
| Khu vực scene còn lại | Tính theo viewport thực | Không được phủ dưới nav |
| Title / opening cue | ~10–18% scene | Nổi bật nhưng không lấn phần hoạt động |
| Học liệu / mô hình | ~40–60% scene | Ưu tiên trong màn cơ chế / khám phá |
| Giải thích và thao tác | Phần còn lại | Giảm trùng lặp, dùng câu ngắn |

### Cỡ chữ khởi điểm để thử nghiệm ở 1280×720
- Tiêu đề/câu hỏi: 28–38 px; câu hỏi OBSERVE có thể lớn hơn nếu ít chữ.
- Nội dung học chính: khoảng 18–21 px; line-height 1,35–1,55.
- Nhãn mô hình/nút: khoảng 15–17 px; chỉ metadata phụ ít quan trọng mới 13–14 px.
- Không ép cỡ chữ xuống <16 px với thông tin **cần đọc để học** chỉ để đạt no-scroll. Giữ màu và tương phản đủ rõ.

**Quy tắc tải lượng:** Mỗi scene có một nhiệm vụ chính; thường khoảng 1 câu hỏi/tiêu đề, tối đa 2–4 khối nội dung có giá trị và một mô hình/tương tác chính. Nếu nhiều hơn, tính toán diện tích và cân nhắc chia scene theo logic trước khi tiến tới thiết kế.

## 3. CÁCH KHẮC PHỤC KHI KHÔNG VỪA MÀN — THEO THỨ TỰ

1. Bỏ trang trí, mô tả lặp, thanh công cụ phụ, nhãn phụ; ẩn sidebar/inspector.
2. Rút gọn cách diễn đạt **không làm mất đơn vị kiến thức, ví dụ hoặc thao tác cần thiết**.
3. Chuyển sang bố cục hợp lý hơn: 2 cột cho sơ đồ và diễn giải; hero trung tâm cho OBSERVE; điều khiển gộp cho mô hình.
4. Chuyển **thông tin bổ trợ không bắt buộc** sang tooltip/modal, giữ kiến thức cốt lõi trên scene.
5. Nếu vẫn tràn: chia thành hai scene theo mục tiêu học hoặc trạng thái thao tác. Ghi rõ liên kết và không làm mất trạng thái mô hình.
6. **KHÔNG** giải quyết bằng font quá nhỏ, CSS transform scale trang, cắt tràn hoặc kéo dài vô hạn.

## 4. HỢP ĐỒNG ĐẦU RA CỦA MỖI SCENE — CHO SKILL 09 → 10 → 11

Mỗi scene spec phải có tối thiểu:

```yaml
scene_id: cookie-06
kind: TEACH
learning_goal: "Học sinh giải thích được Browser lưu và gửi lại Cookie như thế nào"
opening_cue: "Cookie hoạt động như thế nào?"
opening_pause_s: 2.5
reveal_policy: ALL_AT_ONCE
instant_reveal: true
layout_template: MODEL_LEFT_EXPLANATION_RIGHT
primary_focus: browser_server_cookie_model
content_blocks: [model, short_mechanism_steps, action_prompt]
fit_target_viewports: ["1280x720", "1366x768", "1600x900", "1920x1080"]
fixed_navigation: {previous: left, next: right, progress: center}
no_scroll_standard_desktop: true
allow_scroll_accessibility_fallback: true
model_controls: [step, play_pause, reset]
qa_status: PENDING_VIEWPORT_CHECK
```

**Skill 09:** Chọn scene kind, content priority, layout template và lượng nội dung phù hợp; đánh dấu scene phải chia.  
**Skill 10:** Thiết kế viewport budget, typography, vùng mô hình và giao diện hai pha; cung cấp kích thước/asset specification cho Skill 11.  
**Skill 11:** Hiện thực `100dvh`, fixed nav, trạng thái hai pha, responsive fallback, không cắt nội dung; giữ trạng thái tương tác khi chuyển scene nếu thiết kế yêu cầu.  
**Skills 12–13:** Kiểm tra tự động và duyệt bằng mắt tất cả scene/trạng thái/VI-EN; đánh dấu `RELEASE_BLOCKED` nếu no-scroll ở viewport tiêu chuẩn bị vi phạm.

## 5. CSS SKELETON THAM KHẢO CHO SKILL 11

```css
:root { --top-h: 52px; --nav-h: 70px; --safe-x: 24px; }
* { box-sizing: border-box; }
html, body { margin: 0; }
.lesson-app { min-height: 100vh; min-height: 100dvh; }
.lesson-stage {
  min-height: 0;
  height: calc(100dvh - var(--top-h) - var(--nav-h));
  padding: 18px var(--safe-x);
  display: grid;
  grid-template-columns: minmax(0,1fr);
}
.scene-layout { min-width: 0; min-height: 0; display: grid; }
.scene-layout img, .scene-layout svg { max-width: 100%; max-height: 100%; object-fit: contain; }
.scene-nav {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 50;
  min-height: var(--nav-h);
  padding: 10px max(16px, env(safe-area-inset-left));
  padding-bottom: max(10px, env(safe-area-inset-bottom));
  display: flex; align-items: center; justify-content: space-between;
  background: #fff; border-top: 1px solid #dbe3ef;
}
.scene-nav button { min-width: 44px; min-height: 44px; }
@media (max-width: 1023px), (max-height: 620px) {
  .lesson-stage { height: auto; min-height: calc(100dvh - var(--top-h) - var(--nav-h));
    padding-bottom: calc(var(--nav-h) + 16px); }
  .scene-layout { display: block; } /* reflow cho thiết bị nhỏ/zoom */
}
```

**Chú ý:** CSS chỉ tạo khung. Không có CSS nào bảo đảm tự động rằng một scene có quá nhiều nội dung sẽ vừa màn. **Chỉ được khóa body scroll trong presentation mode sau khi scene đã vượt qua kiểm thử fit và không có nội dung bị cắt**. Không che nội dung để qua kiểm thử. Hỗ trợ `prefers-reduced-motion` và chế độ tắt animation.

## 6. QA / GATE KIỂM ĐỊNH

| Mã | Điều kiện PASS | BLOCK khi |
|---|---|---|
| FIT-01 | Mọi scene ở 1280×720, 1366×768, 1600×900, 1920×1080 đọc/quan sát/tương tác được **không cuộn** ở 100% | Có scroll hoặc phần nội dung bị che/cắt |
| FIT-02 | Nút Previous/Next cố định, luôn thấy, không lấn vùng học | Nút biến mất, dịch vị trí, che điều khiển khác |
| FIT-03 | VI và EN, full reveal, phương án trả lời dài nhất không bị tràn | Một ngôn ngữ/trạng thái bị cắt chữ |
| FIT-04 | OBSERVE, TEACH, EXPLORE có điểm nhìn chính và mô hình đủ lớn | Mô hình/nhãn/điều khiển không phân biệt được |
| FIT-05 | Pha 1 → pha 2 sau 2–3s không gây nhảy layout, nội dung hiện đồng thời | Có stagger, nhảy màn, đợi không cần thiết |
| FIT-06 | Nút “Tắt animation · Hiện tất cả” mở nội dung ngay | Vẫn phải chờ hoặc hoạt ảnh tự chạy |
| FIT-07 | 200% zoom, thiết bị nhỏ: không mất nội dung, cho reflow / cuộn dọc nếu cần | `overflow:hidden` làm mất thông tin hoặc nút |
| FIT-08 | Tooltip/modal/mô hình và dock không chồng nhau | Nút hoặc nội dung bị che ở bất kỳ trạng thái quan trọng nào |

**Đo tự động**: phát hiện `document.documentElement.scrollHeight > innerHeight + 2` hoặc `scrollWidth > innerWidth + 2`, đồng thời kiểm tra bounding boxes của mọi block quan trọng so với viewport và dock. **Đánh giá bằng mắt** bắt buộc ở mọi scene và sau khi full reveal, vì chỉ đo scroll không bắt được nội dung bị che bởi `overflow: hidden`.

## 7. LƯU Ý VỀ ACCESSIBILITY

Quy tắc “không scroll” chỉ áp dụng cho màn trình chiếu desktop tiêu chuẩn. Ở mức zoom lớn và viewport hẹp, **cần reflow để không mất thông tin**. WCAG 2.2 SC 1.4.10 (Reflow) có ngoại lệ cho một số loại nội dung hai chiều như sơ đồ và presentation, nhưng đó không phải lý do để cắt văn bản hoặc che nút; phải có phiên bản đọc được.

Nguồn tham khảo tiêu chuẩn công khai: https://www.w3.org/WAI/WCAG22/Understanding/reflow ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length ; https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position

---

**Tình trạng cập nhật:** Phụ lục đã được soạn và đóng gói độc lập để duyệt. **Chưa ghi đè** các tệp Skill 09/10/11 trong Drive/GitHub và chưa sửa website Cookies gốc. Sau khi người dùng duyệt, mới hợp nhất vào định nghĩa Skill tương ứng, tạo phiên bản mới và chạy QA.
