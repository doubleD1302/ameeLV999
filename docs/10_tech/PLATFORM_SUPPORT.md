# Thiết bị và trình duyệt

Ưu tiên phát triển: Chrome/Edge desktop và Chrome Android. Safari iPhone/iPad cần QA trên thiết bị thật trước khi ghi hỗ trợ chính thức; WebKit emulation không thay được cài PWA/storage/audio trên iOS. Firefox desktop là kiểm tra bổ sung nếu nguồn lực cho phép.

Ghi phiên bản thực trong release report; không cam kết mọi phiên bản hoặc tên “latest” vĩnh viễn. Màn nhỏ tối thiểu 360 ×640 CSS px; desktop 1280 ×720; test thêm 390 ×844, 768 ×1024, 1920 ×1080. Tương tác cốt lõi dùng tap/click không cần hover.

Kiểm WebGL/IndexedDB/ServiceWorker capability lúc boot. Với engine không có renderer fallback tương thích, báo rõ thiết bị không hỗ trợ trước tải nặng. Storage bị chặn: chọn thử chơi không lưu hoặc hướng dẫn mở trình duyệt thường; không hứa save.

Mobile không khóa xoay mặc định; landscape tối ưu world, portrait dùng drawer và camera follow. Safe-area inset cho notch; không để nút lưu/thoát nằm dưới thanh hệ thống. Zoom text/OS font scale không làm che nút chính.

Âm thanh chỉ khởi động sau tương tác; resume sau đổi tab có thể cần người chơi nhấn tiếp. Cho mute ngay cả khi audio không khởi tạo.
