# Ngân sách hiệu năng đề xuất

Đây là mục tiêu kỹ thuật để đo sau T001, chưa là kết quả benchmark.

| Hạng mục | Mục tiêu P1 |
|---|---|
| Gói offline bắt buộc | ≤40 MiB tải về, có bảng phân loại ảnh/audio/code |
| App shell trước world | ≤3 MiB nén |
| Atlas mỗi cạnh | Mặc định ≤2048 px; kiểm khả năng thiết bị |
| Boot sau cache | ≤3 giây trên thiết bị mục tiêu đã chọn |
| Render | 60 fps desktop, tối thiểu ổn định 30 fps mobile mục tiêu |
| Texture memory ước tính | ≤160 MiB; tính decoded bytes, không lấy kích thước PNG |
| Save đơn | ≤512 KiB mục tiêu; import cap 2 MiB |
| Command transaction | p95 <100 ms trong test tải P1; báo trước khi chỉnh |

Chỉ decode vùng đang dùng; unload texture/audio đã không còn tham chiếu khi đổi vùng. Không redraw DOM toàn cây mỗi frame. Tắt particle dư, giảm scale/animation ở chế độ nhẹ; không giảm tốc domain timer.

Profiling với vườn đầy decor, pet/NPC, mở inventory và resize/rotate. Ghi device/browser/build hash, median và p95 nhiều lần; không lấy lần đầu đơn lẻ. Nếu cần vượt budget phải nêu lợi ích và dữ liệu, không tự nới ngưỡng cho test xanh.
