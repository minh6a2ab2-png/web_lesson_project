# Skill 09 v3.3 — Cookies: Kiến trúc tự học có trợ giảng ảo

**Loại:** đầu ra CHẠY LẠI Skill 09, không phải định nghĩa Skill.  
**Căn cứ:** Skill 08 v1.0 (giáo án Công văn 5512), Skill 07 v1.1 (học liệu), 22 scene của Skill 09 v3.2 và bộ quy tắc Skill 09 v3.3.  
**Thời gian:** D0 3’ + ACT01 6’ + ACT02 12’ + ACT03 7’ + ACT04 6’ + ACT05 8’ = **42 phút**. P00 và P07 ở ngoài khung 42 phút.  
**Trạng thái:** thiết kế/low-fi prototype; KHÔNG phải website đã kiểm thử dạy học đầy đủ.

## Wireframe một màn học (desktop)
```
+-- ← → 06/22 ---------------- [▣ Dual] [Sổ tay] [Lưu] [⋯] --+
| MỤC ĐÍCH: Em phân biệt dữ liệu minh họa với HTML.            |
| NHIỆM VỤ: Hãy phân loại ba thẻ sau.                         |
|                                                            |
|           [language=vi]    [<h1>...]    [run.exe]          |
|           [  chọn nhóm  ]  [  chọn nhóm  ] [ chọn nhóm ]    |
|                                                            |
| [Bước 2/4 • Xem các bước]     [Tôi đã thử] [Lưu ghi chú]     |
| ────────────────────────────────────────────────────────── |
| ◉ Trợ giảng: Ba thẻ có vai trò khác nhau. Em thử... [−]      |
| [Nhắc nhiệm vụ] [Gợi ý] [Giải thích sau khi thử]            |
+------------------------------------------------------------+
```
- Không cố định tutor nằm nổi che học liệu; ở mobile thành ô gọn dưới nội dung hoặc tab thu gọn.
- Khi thu gọn, xuất hiện nút mở `? Trợ giảng` ở thanh trên hoặc mép canvas.
- Khi Focus/Recall, sau khi học sinh đọc intro, tutor thu gọn để không gây phân tán.

## Dual View
```
Toolbar: [Dual ON] [⚙ N/N+1 hoặc N/M] [Pane trái|Pane phải]
+--------------------------+------------------------------+
| Scene L + nhiệm vụ       | Scene R + nhiệm vụ           |
| scroll độc lập           | scroll độc lập               |
+--------------------------+------------------------------+
Tutor của pane đang chọn, đặt dưới grid hoặc cạnh pane được focus.
```

## EXIT
```
Toolbar: [Dual ON] [Sổ tay khóa] [Nộp] [Công cụ]
+---------------------+-----------------------+
| Đề A/B/C            | Giấy nháp tạm         |
+---------------------+-----------------------+
Tutor: “Em đọc yêu cầu từng ô, tự làm và nộp.” Không Hint.
```

### Pattern inventory
Context Hero; Question Focus; Interactive Classification Cards; Before/After Story; Progressive Diagram; Worked Example → Your Turn; Lab; Compare; Timeline; Focus/Recall; Knowledge Map; Exit isolation. Skill10 sẽ vẽ hi-fi, spacing, mascot và token.
