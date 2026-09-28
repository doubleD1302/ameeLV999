# Bản đồ và kết nối

| Vùng | Mở từ | Công trình / cơ chế | Giai đoạn |
|---|---|---|---|
| cottage | Khởi đầu | Nhà, 4→8 luống, pet, shop panel | P0 |
| greenhouse | Cottage sau hàng rào | Exterior ở P1; lai hoa ở P2 | P1/P2 |
| pond | Greenhouse hoạt động | Cầu, hoa nước, fishing | P2 |
| barn | Ao đã phục hồi | Chuồng, livestock | P2 |
| orchard | Barn và craft | Cây trái, cooking | P3 |
| forest | Orchard | Foraging, journal mystery | P3 |
| hill | Forest | Windmill, automation, kết truyện | P3 |

Không tính village thành vùng thứ8 trong scope; P1 hàng xóm tới cottage, P3 có thể thêm một cảnh hội thoại như phần của cổng làng nếu được duyệt.

MVP cottage grid24 ×18, greenhouse exterior16 ×12; mỗi cell64 world units. Portal cottage phía Đông row9 tới greenhouse phía Tây row6. Chưa mở portal thì render dấu khóa và mô tả điều kiện; không truyền player qua collision.

Map JSON chứa width/height/tileSize, blocked cells, spawn, interactPoints, portal và plot coordinates. Ảnh AI chỉ là layer thị giác. Sau mỗi decor placement phải còn đường 4 hướng từ spawn tới điểm tương tác bắt buộc. Zoom/camera không đổi cell logic.
