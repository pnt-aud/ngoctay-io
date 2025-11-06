# ngoctay-io

Trang đích của Ngọc Tây IO được xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần. Không cần bất kỳ framework hay công cụ bu
ild nào.

## Cấu trúc

```
├── index.html   # Nội dung trang đích
├── styles.css   # Hệ thống màu sắc, layout và thành phần giao diện
└── script.js    # Logic nhỏ cho menu di động và cập nhật năm bản quyền
```

Các tài nguyên bổ sung (hình ảnh, biểu tượng) có thể đặt trong thư mục `public/` nếu cần.

## Sử dụng

Chỉ cần mở `index.html` trong trình duyệt hoặc phục vụ thư mục dự án bằng bất kỳ máy chủ tĩnh nào, ví dụ:

```bash
python -m http.server 3000
```

Sau đó truy cập `http://localhost:3000` để xem giao diện.
