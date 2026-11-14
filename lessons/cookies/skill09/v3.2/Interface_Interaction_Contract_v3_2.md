# Skill 09 v3.2 — HỢP ĐỒNG GIAO DIỆN VÀ TRẠNG THÁI

## Trang học mặc định (không chứa noise)

```
┌────────────────────────────────────────────────────────────────┐
│ ←  →  8/22       [▣ Dual View] [☷ Sổ tay] [＋ Lưu] [⋯ Công cụ] │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│        TIÊU ĐỀ NHIỆM VỤ HIỆN TẠI                               │
│        CÂU HỎI CẦN THỰC HIỆN                                   │
│                                                                │
│        [học liệu / mô phỏng / thẻ / vùng ghi chép]              │
│                                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

Không có danh sách scene luôn mở, quảng cáo sản phẩm, logo lớn, mô tả phiên bản hay footer; toàn bộ chỉ trong menu phù hợp. Tùy chọn phóng to/kích thước chữ trong Công cụ, không cần 16:9 cứng. Thanh trên được giữ nhưng không che nội dung.

## Dual View: hai vai trò, cùng một lệnh

```
┌─ Toolbar cố định [Dual View: ON] [⚙ tùy chọn] ──────────────────┐
│   L: chọn scene 09   │   R: chọn scene 11                        │
├──────────────────────┼──────────────────────────────────────────┤
│    slide trái        │      slide phải / vùng thực hành           │
│    cuộn độc lập      │      cuộn độc lập                          │
└──────────────────────┴──────────────────────────────────────────┘
```

- Cặp liền kề `N/N+1`; cặp tùy ý `N/M`; hoán đổi; tỷ lệ 50/50, 60/40, 40/60.
- Ở màn <900px xếp dọc để chữ không quá nhỏ. Mỗi vùng có tiêu đề rõ và tình trạng riêng.
- EXIT: cột trái đề EXIT, cột phải giấy nháp, không chuyển vùng phải sang scene cũ. Chỉ lưu tạm nháp trong phiên; không lộ đáp án.

## Sổ tay

- Drawer bên phải, chỉ mở theo nút; đóng bằng nút Đóng và Escape; không lấy diện tích scene khi đóng.
- `Nhiệm vụ hoàn thành`: hiện dữ liệu đã *được người dùng xác nhận lưu*: scene ID, thời gian, ghi chú/câu trả lời (nếu có), mức hỗ trợ nếu có, nút xem lại.
- `Kiến thức đã học`: hiện **thẻ kiến thức đã chuẩn hóa** theo các scene đã hoàn thành và ghi chú riêng. Không đưa nguyên văn câu hỏi làm “kiến thức” như bản v3.1. Mỗi thẻ có nguồn scene; không coi là đáp án EXIT.
- Không tự đánh dấu đã làm chỉ khi đi qua scene; không tự suy ra “đạt” khi bấm Lưu. Ghi chú chủ động khác kết quả chấm. Khi vào EXIT, nội dung Sổ tay bị khóa hoàn toàn.

## Component states cần bàn giao Skill10/Skill11

| Component | States |
|---|---|
| Topbar | bình thường / mobile compact / EXIT locked |
| Scene | preview / predict / attempt / feedback / review / recall / complete |
| Story | unopened / stage1 / stage2 / stage3 / reset |
| Lab | idle / prediction-required / running / correct-mismatch / reset |
| Dual | off / adjacent / independent / assessment+scratchpad / mobile-stacked |
| Notebook | closed / open / empty / completed / knowledge / no-storage / locked-in-exit |
| Asset | loaded / offline fallback / missing-blocked |
| EXIT | not started / in progress / submitted / post-exit |

## Accessibility / privacy

- Hỗ trợ tab/enter/escape, focus rõ ràng, nút có aria-label, lời phản hồi có live region, thao tác không phụ thuộc màu.
- `prefers-reduced-motion`; bản text cạnh sơ đồ, alt/caption; không tạo animation không điều khiển.
- Không thu dữ liệu thật, không kích hoạt network cookie; không bundle key giáo viên.
