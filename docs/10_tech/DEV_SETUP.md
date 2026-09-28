# Thiết lập môi trường triển khai

Bộ này chưa có package.json. Dùng prompts/coding/01_BOOTSTRAP_PROJECT.md để AI tạo project ở T001. Không chạy lệnh npm rồi cho rằng thiếu package là lỗi của game.

T001 cần xác định Node tương thích với Vite/Phaser/template tại thời điểm thực hiện, pin phiên bản runtime và dependency, tạo lockfile. Không dùng một lệnh scaffold không kiểm tra để ghi đè folder chứa tài liệu. Nếu template có README khác, hợp nhất hướng dẫn có chủ ý.

Sau bootstrap, hướng dẫn cho máy mới phải ngắn: cài đúng Node → npm ci → npm run validate:data → npm run dev. Test/build dùng scripts ở README. PWA test trên production preview, không chỉ dev hot reload.

Tách cấu hình DEV cho tăng tốc thời gian, cấp tiền và mở vùng; release phải tắt, có test kiểm. Nút debug không đặt trong flow người chơi. Không để API key trong .env vì baseline không cần dịch vụ online.

Nếu repo dùng git, lưu nguồn và lockfile theo task, có thể tạo nhánh làm việc. Push/publish chỉ theo yêu cầu hiện tại. Không yêu cầu người dùng tự ghép các đoạn code rời khi task là triển khai hoàn chỉnh.
