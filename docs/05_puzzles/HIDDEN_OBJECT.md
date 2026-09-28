# Tìm đồ vật

**Giai đoạn:** P3.


Scene gồm nền AI và object layers riêng. Designer khai báo bounding box/polygon chuẩn hóa 0–1; không trông chờ AI tự giấu đúng vật ở đúng tọa độ trong một background duy nhất. Mỗi target có label/icon và hit zone đủ lớn.

Move chọn điểm được chuyển về hệ tọa độ ảnh gốc. Thắng khi tìm đủ target IDs. Nhấn sai không bị phạt; phản hồi nhẹ và có giới hạn để tránh âm thanh chồng.

Hint tăng từ vùng rộng, outline, tới đánh dấu vật. Zoom/pan có reset. Không bắt buộc nghe âm thanh hoặc phân biệt hai màu gần nhau để tìm. Lưu foundIds qua reload.

QA: letterbox/aspect ratio, vật bị che, polygon sai, target thiếu, ảnh đổi nhưng hit region chưa đổi. Mỗi scene plate gắn hash; thay art phải kiểm hit region lại. Replay không thưởng lần nữa.
