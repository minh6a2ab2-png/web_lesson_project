/* Bài luyện tập: đáp án dùng cho phản hồi tức thời; không phải khóa EXIT. */
window.REVIEW_BANK = {
  "A1-05": [
    {
      "mode": "single",
      "prompt": "Dòng nào có dạng dữ liệu tên–giá trị, có thể dùng trong Cookie?",
      "options": [
        "<h1>Xin chào</h1>",
        "run.exe",
        "language=vi"
      ],
      "answer": 2,
      "explain": "language là tên dữ liệu, vi là giá trị tiếng Việt; hai lựa chọn còn lại là HTML và tên tệp."
    },
    {
      "mode": "match",
      "prompt": "Ghép hai phần của language=vi với vai trò của chúng.",
      "pairs": [
        {
          "left": "language",
          "answer": "Tên dữ liệu"
        },
        {
          "left": "vi",
          "answer": "Giá trị"
        }
      ],
      "choices": [
        "Tên dữ liệu",
        "Giá trị"
      ],
      "explain": "Dấu = nối tên dữ liệu với giá trị tương ứng."
    },
    {
      "mode": "tf",
      "prompt": "Cookie tự chạy lệnh để xây dựng giao diện website.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "answer": 1,
      "explain": "Cookie là dữ liệu; nó không phải chương trình tự chạy."
    }
  ],
  "A2-07": [
    {
      "mode": "single",
      "prompt": "Khi mở website, HTTP Request đi theo chiều nào?",
      "options": [
        "Server → Browser",
        "Giữa hai Server",
        "Browser → Server"
      ],
      "answer": 2,
      "explain": "Trình duyệt chủ động yêu cầu nội dung từ máy chủ."
    },
    {
      "mode": "single",
      "prompt": "Server có thể gửi chỉ dẫn lưu Cookie ở đâu?",
      "options": [
        "Trong HTTP Request, qua Cookie",
        "Trong tệp run.exe",
        "Trong HTTP Response, qua Set-Cookie"
      ],
      "answer": 2,
      "explain": "Set-Cookie là header của Response; Cookie header có thể xuất hiện trong Request phù hợp."
    },
    {
      "mode": "order",
      "prompt": "Xếp trình tự của hai lượt truy cập (giả sử Cookie được chấp nhận).",
      "steps": [
        "Browser gửi Request",
        "Server trả Response có Set-Cookie",
        "Browser lưu Cookie",
        "Lần sau Browser gửi Cookie phù hợp"
      ],
      "answer": [
        0,
        1,
        2,
        3
      ],
      "explain": "Lưu dữ liệu sau Response trước khi trình duyệt có thể gửi lại trong Request sau.",
      "display_order": [
        2,
        0,
        3,
        1
      ]
    },
    {
      "mode": "multi",
      "prompt": "Theo mô hình, điều kiện nào cần đúng để gửi lại Cookie?",
      "options": [
        "Cookie đã được lưu",
        "Cookie còn hợp lệ",
        "Request đúng phạm vi Cookie",
        "Mọi Request đều gửi Cookie"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explain": "Phải có Cookie đã lưu, còn hiệu lực và phù hợp phạm vi; không phải mọi Request đều mang Cookie."
    }
  ],
  "A3-04": [
    {
      "mode": "match",
      "prompt": "Phân loại Cookie theo cách đặt thời hạn.",
      "pairs": [
        {
          "left": "Không đặt Expires / Max-Age",
          "answer": "Session"
        },
        {
          "left": "Có Max-Age = 604800 giây",
          "answer": "Persistent"
        }
      ],
      "choices": [
        "Session",
        "Persistent"
      ],
      "explain": "Thời hạn xác định tạo Persistent; không đặt hạn thường là Session Cookie."
    },
    {
      "mode": "tf",
      "prompt": "Persistent Cookie luôn còn cho tới ngày hết hạn, dù người dùng xóa trước.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "answer": 1,
      "explain": "Người dùng có thể xóa Cookie trước khi hết hạn."
    },
    {
      "mode": "single",
      "prompt": "Cookie đặt hạn 7 ngày, nhưng bị xóa ngay hôm nay. Ngày mai nó còn không?",
      "options": [
        "Chắc chắn còn",
        "Tự trở thành Session Cookie",
        "Không còn"
      ],
      "answer": 2,
      "explain": "Đặt hạn không bảo đảm Cookie còn tồn tại nếu đã bị xóa."
    }
  ],
  "A4-04": [
    {
      "mode": "match",
      "prompt": "Ghép tình huống với công dụng phù hợp.",
      "pairs": [
        {
          "left": "Nhớ Tiếng Việt",
          "answer": "Ghi nhớ lựa chọn"
        },
        {
          "left": "Giỏ hàng vẫn có sản phẩm",
          "answer": "Hỗ trợ giỏ hàng"
        },
        {
          "left": "Thống kê cách dùng trang",
          "answer": "Phân tích hoạt động"
        }
      ],
      "choices": [
        "Ghi nhớ lựa chọn",
        "Hỗ trợ giỏ hàng",
        "Phân tích hoạt động"
      ],
      "explain": "Công dụng phụ thuộc thông tin website dùng Cookie để làm gì."
    },
    {
      "mode": "tf",
      "prompt": "Cookie lưu được 7 ngày thì chắc chắn là Cookie theo dõi.",
      "options": [
        "Đúng",
        "Sai"
      ],
      "answer": 1,
      "explain": "Thời hạn và mục đích sử dụng là hai tiêu chí khác nhau."
    },
    {
      "mode": "multi",
      "prompt": "Khi xem lựa chọn Cookie trên website, điều gì đáng chú ý?",
      "options": [
        "Mục đích dùng Cookie",
        "Thời hạn tồn tại",
        "Lựa chọn chấp nhận hoặc từ chối",
        "Màu biểu tượng bánh Cookie"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explain": "Nên hiểu mục đích, thời hạn và quyền lựa chọn; hình biểu tượng không quyết định quyền riêng tư."
    }
  ]
};
