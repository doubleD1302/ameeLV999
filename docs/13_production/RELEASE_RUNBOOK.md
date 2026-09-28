# Build, cập nhật và phát hành

1. Chốt commit/source, appVersion/contentVersion/schemaVersion và phase. Bảo đảm catalog/asset manifest chỉ có feature đã bật.
2. npm ci từ lockfile; chạy typecheck/lint/unit/integration/data validation/e2e phù hợp; build production. Ghi lệnh thật vào report.
3. Preview build qua web server local; kiểm core loop, save/import, offline install/cold start và update từ bản trước.
4. Host static qua HTTPS khi được yêu cầu. Cấu hình base/scope đúng; asset fingerprint immutable, app shell/service worker không cache cứng vô hạn. Chọn hosting theo môi trường thực, không mặc định khóa nhà cung cấp.
5. Kiểm URL deploy và browser storage cùng origin; đổi domain nghĩa là save origin cũ không tự đi theo. Hướng dẫn export/import khi di chuyển.
6. Ghi notes/ngày/build và giữ bản build trước. Update prompt chờ save rồi reload.
7. Nếu lỗi phát hành, xem schema compatibility trước rollback. Restore save cũ là hành động có thể mất tiến trình; giải thích và xác nhận với người chơi, không tự reset.

Bản P1 phải tải trọn gói cần chơi offline. CDN font/hotlink ảnh không hợp lệ. Nếu mất mạng giữa update, bản đang chơi vẫn an toàn. RELEASE_REPORT template ghi PASS/FAIL/NOT_RUN, không tự kết luận mọi target đã đạt.
