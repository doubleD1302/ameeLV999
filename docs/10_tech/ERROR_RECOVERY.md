# Lỗi và phục hồi

| Lỗi | Phản ứng UI | Trạng thái |
|---|---|---|
| Save write abort/quota | Chưa lưu được. Thử lại / Xuất bản lưu | Giữ snapshot đã commit; không báo thưởng thành công |
| Save corrupt | Có thể phục hồi từ bản gần nhất | Giữ file lỗi để export; không auto reset |
| Import sai | Nêu trường/phiên bản không hỗ trợ bằng ngôn ngữ dễ hiểu | Không thay slot hiện có |
| Texture thiếu | Placeholder nhẹ + log dev | Không crash hay trừ coins lần nữa |
| Core content thiếu offline | Cần kết nối để tải đủ bản này | Không tạo save mới |
| Stale revision | Đồng bộ thay đổi từ cửa sổ khác | Hủy command stale, đọc lại |
| Update lỗi | Tiếp tục bản hiện tại | Không xóa cache đang dùng trước khi bản mới sẵn sàng |

Recovery ưu tiên ít mất dữ liệu nhất: đọc lại → backup gần nhất → import người chơi → reset có xác nhận cuối cùng. Export vẫn hoạt động nếu renderer hỏng nhưng state còn đọc được.

Dev error report gồm build/content/schema version, commandId, error code, browser và bước tái hiện. Không mặc định đính kèm thư riêng hoặc nội dung người chơi nhập. UI lỗi không hiển thị stack trace.
