window.RECALL_BANK = {
  "A1-04": [
    {
      "icon": "🌐",
      "tag": "Lần truy cập sau",
      "prompt": "Website nhớ lựa chọn nào của người dùng?",
      "model": "Website có thể nhớ rằng em đã chọn Tiếng Việt.",
      "cue_id": "A1-04-C01"
    },
    {
      "icon": "🧩",
      "tag": "language=vi",
      "prompt": "Nói ý nghĩa phần trước và sau dấu =.",
      "model": "language là tên dữ liệu; vi là giá trị biểu thị Tiếng Việt.",
      "cue_id": "A1-04-C02"
    },
    {
      "icon": "🍪",
      "tag": "Cookie",
      "prompt": "Cookie là gì? Nói thêm một điều Cookie không phải.",
      "model": "Cookie là một phần dữ liệu nhỏ; không phải HTML hay chương trình tự chạy.",
      "cue_id": "A1-04-C03"
    }
  ],
  "A2-06": [
    {
      "icon": "💻",
      "tag": "Lượt đầu: xin trang",
      "prompt": "Vẽ chiều Request giữa Browser và Server.",
      "model": "Browser → Server: HTTP Request.",
      "cue_id": "A2-06-C01"
    },
    {
      "icon": "📨",
      "tag": "Máy chủ trả lời",
      "prompt": "Set-Cookie xuất hiện ở chiều nào?",
      "model": "Server → Browser: HTTP Response có thể chứa Set-Cookie.",
      "cue_id": "A2-06-C02"
    },
    {
      "icon": "🔁",
      "tag": "Lượt sau",
      "prompt": "Cookie đã lưu đi theo chiều nào và khi nào?",
      "model": "Browser → Server: Cookie header trong Request phù hợp (đã lưu, còn hợp lệ, đúng phạm vi).",
      "cue_id": "A2-06-C03"
    }
  ],
  "A3-03": [
    {
      "icon": "⏳",
      "tag": "Session Cookie",
      "prompt": "Nói đặc điểm thời hạn của Session Cookie.",
      "model": "Không đặt thời điểm hết hạn bằng Expires/Max-Age; thường tồn tại theo phiên.",
      "cue_id": "A3-03-C01"
    },
    {
      "icon": "📅",
      "tag": "Persistent Cookie",
      "prompt": "Nói khi nào gọi là Persistent Cookie.",
      "model": "Được đặt thời hạn hết hiệu lực, có thể còn qua phiên nếu chưa hết hạn/bị xóa.",
      "cue_id": "A3-03-C02"
    },
    {
      "icon": "🗑️",
      "tag": "Tình huống",
      "prompt": "Có hạn 7 ngày thì có thể mất sau 1 ngày không?",
      "model": "Có. Người dùng xóa Cookie, hoặc các điều kiện khác làm nó không còn trước hạn.",
      "cue_id": "A3-03-C03"
    }
  ],
  "A4-03": [
    {
      "icon": "🛍️",
      "tag": "Chọn một tình huống",
      "prompt": "Giỏ hàng, ngôn ngữ hoặc phân tích: Cookie giúp gì?",
      "model": "Ví dụ, Cookie có thể giúp nhớ giỏ hàng hoặc ngôn ngữ; phân tích là một công dụng khác.",
      "cue_id": "A4-03-C01"
    },
    {
      "icon": "🔁",
      "tag": "Cơ chế",
      "prompt": "Dùng lời em giải thích khi nào dữ liệu được gửi lại.",
      "model": "Browser có thể gửi Cookie đã lưu qua Request phù hợp, nếu điều kiện cho phép.",
      "cue_id": "A4-03-C02"
    },
    {
      "icon": "🔏",
      "tag": "Quyền riêng tư",
      "prompt": "Nói một điều người dùng cần chú ý.",
      "model": "Xem mục đích dùng Cookie và lựa chọn chấp nhận/từ chối; lưu lâu không tự đồng nghĩa theo dõi.",
      "cue_id": "A4-03-C03"
    }
  ]
};
