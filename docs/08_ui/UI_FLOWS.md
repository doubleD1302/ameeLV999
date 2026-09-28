# Luồng giao diện

Boot → màn tiếp tục/new game → garden. Garden mở inventory/shop/journal/pet/decor/settings. Puzzle mở từ vật thể hoặc journal; back luôn quay về nơi xuất phát và lưu progress theo engine. Một modal tại một thời điểm; modal không trừ tài nguyên chỉ vì đóng.

Khởi động có save hợp lệ: Tiếp tục. Chưa có save: Bắt đầu. Save lỗi: màn phục hồi, không giả vờ chưa từng chơi. Có update: banner tùy chọn, không khóa thao tác.

Giao dịch: lựa chọn → preview cost/result → confirm → busy cho đúng command → success sau commit. Cancel trước confirm không thay state. Khi stale/storage fail giữ dialog và giải thích; không báo thành công bằng animation trước persist.

Portrait mở panel dạng bottom sheet, desktop side panel tối đa380 px; vùng world còn có thể thấy nhưng không tương tác khi modal. Escape/Back đóng lớp trên, không tự reset puzzle hoặc xóa save.

Deep link nội bộ không cần server route phức tạp; PWA launch ở app root, resume screen từ save UI preferences khi hợp lệ. Đừng yêu cầu mạng để mở tab collection.
