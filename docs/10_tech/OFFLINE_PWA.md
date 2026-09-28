# PWA và hợp đồng offline

Lần đầu cần internet để tải app và asset. “Sẵn sàng offline” chỉ xuất hiện khi service worker đã điều khiển trang và gói content đang bật có đủ file được kiểm tra trong cache. Service worker không phải game loop và không cần chạy khi browser đã đóng.

P1 precache HTML shell, JS/CSS, font local, JSON content, texture/audio cần cho mọi tính năng P1. Runtime không dùng CDN, Google Fonts online, image hotlink hoặc API model. File audio có thể chưa decode nhưng byte phải cache. Asset planned không được quảng cáo sẵn sàng.

Cập nhật theo prompt-for-update. Giữ bộ app/content/assets cùng release; không trộn catalog mới với texture cũ. Nội dung mới cache xong mới báo cập nhật. Người chơi quyết định thời điểm; application đợi save hoàn tất trước reload. Không auto-refresh giữa puzzle/transaction.

Hosting HTTPS, localhost dùng cho phát triển. Subpath base và scope phải khớp; test cold launch tại URL deploy thật. “Offline” trong DevTools một tab không thay được thử airplane mode rồi đóng/mở browser.

P2/P3 nếu cần chia gói: feature chưa cài phải hiển thị rõ “cần tải gói”; chỉ bật sau checksum/cache completeness. Không hứa toàn game offline nếu còn module chưa tải. Gói P1 nên đủ nhỏ để tải trọn.

Nếu cache thiếu: dùng fallback text/icon đơn giản cho asset trang trí, giữ gameplay an toàn; core content thiếu thì giải thích cần kết nối lại, không tạo save trắng. Nguồn cơ chế trình duyệt: REFERENCE_SOURCES.md.
