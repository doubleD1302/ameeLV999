# Tự động hóa khu vườn

**Giai đoạn:** P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Mở sau windmill và kết nối hệ thống tưới. MVP không auto harvest. P3 chỉ chọn một cấp automation nhỏ đã được cân bằng: hỗ trợ tưới cosmetic hoặc thu vào kho giới hạn; không tự bán/replant không giới hạn.

Nếu bật auto harvest, mỗi plot phải có chính sách cụ thể, seed stock và storage cap; simulation xử lý bằng event boundaries chứ không replay từng tick. Khi thiếu seed/kho đầy dừng an toàn, không mua bằng coins tự động. Quy tắc offline8 h vẫn áp dụng.

Player có switch tắt và preview năng suất/chi phí. Không làm automation là điều kiện để hoàn thành story. Đặc tả mở rộng phải chứng minh không tạo loop reward qua resume/clock và có fixture migration lưu policy.

QA: last seed, full storage, max iterations, offline72 h, đổi policy giữa job, cap reward và replay. Đây là feature P3 có điều kiện, không yêu cầu agent xây engine simulation phức tạp ở P0.
