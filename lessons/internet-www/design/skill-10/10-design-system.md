# Skill 10 — Web Slide Design System v3.2

**Bài:** 5.1 Internet & World Wide Web (WWW)  
**Đầu vào:** Skill01–07, Skill09 (15 slide SL-00–SL-14 + BREAK-05); Skill08 chưa chạy.  
**Trạng thái:** DESIGN / VISUAL PROTOTYPE — chưa phải website giảng dạy hoàn chỉnh.  
**Yêu cầu cốt lõi:** 1:1 tutoring; learner-led study + explanation; plain HTML/CSS/JS; English/Vietnamese; no faux/browser simulator; output/evidence continuity.

## A. Quyết định trải nghiệm

**Mỗi slide phải đặt ra một công việc trí tuệ rõ ràng.** Câu hỏi hoặc mục đích xuất hiện trước; học liệu/mô hình là không gian làm việc; ô ghi nhận là công cụ ghi bằng chứng; Help/Teacher Notes/Notebook đóng mặc định. Không lặp cơ học 4 bước Công văn 5512 thành 4 trang. Recall tích hợp ở cuối chặng, học sinh nói → ghi vở → mới đối chiếu. Không có hero to, sidebar mục lục lớn, thanh điểm, nhân vật hay hình trang trí không góp phần hiểu kiến thức.

**Nhịp tương tác:** tự dự đoán hoặc khám phá → tạo sản phẩm/nhận định → giải thích có bằng chứng → so lại/hỗ trợ → chuyển. Đọc không có nghĩa bị động; không ép click nhiều lần mới có nội dung.

### Các môi trường thực sự khác nhau

- **Situation / SL-00:** tình huống và lựa chọn có lý do; không gắn danh hiệu hoặc phạt điểm khi người học chưa biết.
- **Evidence Desk / SL-01–02:** tài liệu ở một phía, lập luận/sơ đồ do học sinh tạo ở phía còn lại; sơ đồ đáp án *không* mặc định lộ.
- **Real Browser Mission / SL-03:** bảng giao nhiệm vụ, kết quả quan sát, trợ giúp; học sinh mở Chrome/Edge/Firefox thật ngoài website. Không dựng UI browser giả.
- **URL Investigator / SL-04–05:** chuỗi địa chỉ có thể bôi chọn và gắn nhãn; phản hồi sau học sinh giải thích.
- **DNS Lab / SL-06–08:** dự đoán ở trước, thí nghiệm ở giữa, event log song song; NXDOMAIN không sinh HTTP.
- **HTTP/HTTPS Workshop / SL-09–10:** cột client/server và thẻ thông điệp; so sánh điều được/chưa được chứng minh bởi HTTPS.
- **Rendering & Browser Data / SL-11–12:** so cùng HTML theo trạng thái, sau đó phân loại history/cache/cookie/bookmark.
- **Journey Builder / SL-13:** vùng xây dựng lớn và thư viện nút; sơ đồ có nhánh, không giả định mỗi truy cập đều phải DNS query.
- **Exit Ticket / SL-14:** câu trả lời không lộ key và tự nhận xét; HW-08-PENDING không giả làm bài tập sẵn có.

## B. Design tokens (gợi ý để Skill11 triển khai, không phải yêu cầu tuyệt đối)

| Token | Giá trị | Vai trò |
|---|---|---|
| `--canvas` | `#f6f8fc` | Nền học tập dịu, không gradient trang trí |
| `--surface` | `#ffffff` | Bề mặt nội dung chính |
| `--ink` | `#14243a` | Chữ chính |
| `--muted` | `#4a5b6d` | Giải thích phụ, vẫn dễ đọc |
| `--line` | `#dae1e9` | Viền nhẹ phân cấp |
| `--focus` | `#1258a4` | Focus keyboard |
| `--action` | `#155cb0` | CTA đi/tiếp |
| `--research` | `#2d6c84` | Chỉ dấu tài liệu, không dùng để chấm đúng |
| `--lab` | `#75529b` | Chỉ dấu phòng lab |
| `--web` | `#7350a6` | Phân biệt WWW ở sơ đồ |
| `--network` | `#126f8d` | Phân biệt mạng ở sơ đồ |
| `--success-ink` | `#12613f` | Kết quả hợp lệ + chữ, không chỉ màu |
| `--caution-ink` | `#8a4b00` | Cần kiểm tra + chữ, không chỉ màu |
| `--radius` | `12px` | Không quá nhiều cards lồng cards |
| `--space` | `8px` baseline | 8/12/16/24/32 tùy density |
| `--body-font` | `system-ui, Segoe UI, Arial, sans-serif` | Có sẵn offline, chữ Việt tốt |
| `--mono-font` | `ui-monospace, Consolas, monospace` | URL, IP, HTTP logs |

**Typography:** title 24–30 px desktop, 21–25 px mobile; nhiệm vụ 18–20 px; nội dung 16–17 px; chú giải ≥14 px; mono ≥14 px; line height 1.5–1.6. Không co chữ chỉ để nhồi nhiều bảng lên màn hình.

**Layout:** desktop slide nội dung rộng tối đa `1180px`, nội dung 1–2 cột theo cơ chế; task header không quá 2 dòng nếu có thể; laptop 1366×768 giữ trên first fold: câu hỏi + hành động đầu tiên (không đòi toàn slide không cuộn). Mobile 360–430 px: xếp nguồn trước vùng phản hồi, sticky footer chỉ khi không che input/bàn phím; bảng/URL/log cuộn ngang bên trong.

**Slide shell (phần khung dùng chung, tiết chế):** top bar tối đa ~56px: “5.1 The Web” + EN/VI + Notebook + More/Teacher; main 1 mục tiêu, artifact, vùng ghi; footer Back / vị trí / Next cao ~64px. Các loại slide dùng bố cục bên trong khác nhau, không tạo hàng loạt panel Learn/Practice/Recall.

## C. Component contracts

| Component | Usage | Không được xảy ra |
|---|---|---|
| `QuestionHeader` | Một câu hỏi/nhiệm vụ lớn; có trợ chú ngắn | Tiêu đề bài dài + nhiều đoạn mở đầu |
| `SourceDrawer` | CARD-xx EN/VI, nguồn đáng tin; mở/đóng, Esc, focus restore | Tự bật đáp án trước khi học sinh thử |
| `HintDrawer` | H1→H2→H3, nhấn riêng từng mức | Phun cả ba gợi ý khi bắt đầu |
| `TeacherNotes` | Chỉ GV sử dụng, đóng mặc định | Rò key cho HS; **không phải vùng bảo mật** |
| `EvidenceNotebook` | Các đoạn trả lời, EV, lý do, mức hỗ trợ; có thể xuất bản ghi | Đánh đồng tickbox với thao tác thật |
| `ChoiceReasonCard` | Lựa chọn + giải thích; cho phép “thiếu dữ kiện” | Chỉ có đúng/sai, không có lý do |
| `CaseSwitcher` | Chọn case; mỗi case reset đúng state fixture | Kế thừa IP lỗi từ DNS-C |
| `ExperimentPanel` | Phân cảnh biến, step/run/pause/reset, log text | GIF tự chạy được gọi là thí nghiệm |
| `ClaimEvidence` | Claim / supporting evidence / revisions | Auto cung cấp conclusion để học sinh chép |
| `URLSegmentLabel` | Tự đánh dấu trước, show solution sau | Highlight chuẩn từ đầu |
| `ModelCanvas` | Node/edge + alternative keyboard path | Chỉ kéo thả, không keyboard operation |
| `RecallCue` | 1 cue lớn; nói → ghi vở → đối chiếu | 1 slide quiz dài sau mỗi chặng |

## D. State design cho UI (không tự suy ra thành mô hình kỹ thuật)

- `INITIAL`: nhiệm vụ + tài nguyên mở; không phô đáp án.
- `WORKING`: lựa chọn, câu trả lời, biến mô hình, log hoặc bản đồ do HS tạo; feedback ưu tiên câu hỏi.
- `NEEDS_REVIEW`: hiện lý do, yêu cầu so bằng chứng; không chỉ thông báo đỏ.
- `COMPARE`: đối chiếu có chú thích và được phép sửa.
- `COMPLETED`: có ghi nhận sản phẩm; **không đồng nghĩa đạt năng lực**.
- `OFFLINE/FALLBACK`: tài liệu và fixture local; mô phỏng chưa lập trình → thẻ log giấy, không nút Run giả.
- `BREAK`: nghỉ thực sự, không thêm nhiệm vụ.

## E. EN/VI, accessibility và motion

- Mọi chuỗi UI, hướng dẫn, lỗi/feedback, tooltips, modal, aria, teacher notes, caption/alt có **en + vi**. Switching không reset entry, thí nghiệm hoặc notebook.
- `lang` đổi toàn trang; bố cục hỗ trợ chữ Việt dài hơn; nhãn kỹ thuật giữ nguyên nếu cần; câu dài được wrap.
- Tab/Shift+Tab/Enter/Space hoạt động; focus ring thấy rõ; `aria-live` cho trạng thái; Esc đóng ngăn; focus trở về control mở ngăn.
- Min touch target 44×44 px cho action chính; không biểu thị đúng/sai chỉ bằng màu; log có text, nút Pause, transcript khi GIF.
- `prefers-reduced-motion`: dừng auto animation; các kết luận vẫn thấy trong văn bản.
- Focus order: title/task → primary source or model → learner action → evidence/feedback → Next/Back; notes là thứ yếu.
- Không truy vấn hoặc thu lịch sử/cookie/bookmark thực. Không chèn CDN không có offline fallback.

## F. Phân công Stage

- Skill10 chỉ thiết kế **layout/UI skeleton** và xem trước; không nhận rằng DNS/HTTP đã hoạt động.
- Skill11 thực hiện các trạng thái và hành vi theo `09-interaction-spec.md` và fixture, tích hợp `Skill05` assets, kiểm thử thật.
- Skill12 đối chiếu cả kiểm thử giáo dục và kỹ thuật. Skill08 chưa thực hiện, placeholder `HW-08-PENDING` chỉ dùng trong hồ sơ handoff, không chèn giả vào slide.