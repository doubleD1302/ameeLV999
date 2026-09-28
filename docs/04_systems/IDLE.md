# Tiến trình khi vắng mặt

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Game chỉ hoàn thành công việc đã được bắt đầu và trả chi phí. Clock được reconcile lúc mở/resume theo TIME_AND_IDLE.md; cap 28.800 giây cho một khoảng vắng. Không cần chạy nền thực.

P0/P1: hoa chuyển ready, không thêm inventory cho đến harvest. P2: craft job chuyển pending; sản lượng chuồng tối đa lượng feed đã nạp và sức chứa; pet tối đa một vật tìm được pending. Không auto gift, auto claim quest hay auto giải puzzle.

Summary chỉ mô tả kết quả, không là nút cấp thưởng thứ hai. Ví dụ “4 luống đã nở” lấy từ state đã commit, đóng/mở dialog không thêm hoa. Nếu không có thay đổi thì chỉ chào lại.

Khi đồng hồ lùi, credit=0 và cập nhật anchor mới. Không phạt vườn. UI thông báo nhẹ chỉ khi cần; không gọi đó là gian lận. Thời gian active dùng monotonic delta tránh nhảy giờ hệ thống.

QA: 0 s, 1 s trước chín, đúng mốc, 8 h, 72 h, rollback clock và hai tab resume. Test math mẫu nằm trong fixtures; cần thêm browser lifecycle test khi game tồn tại.
