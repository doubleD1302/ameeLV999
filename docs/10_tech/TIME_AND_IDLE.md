# Thuật toán thời gian và offline

Dùng simTimeMs tích lũy và readyAtSimMs; không so ngày giờ địa phương để xác định cây chín. savedAtWallMs là anchor của snapshot đã commit.

## Khi mở hoặc quay lại tab

Trong transaction đọc snapshot mới nhất:
elapsed = max(0, nowWallMs − savedAtWallMs)
credit = min(elapsed, offlineCapSeconds × 1000)
simTimeMs += credit
savedAtWallMs = nowWallMs
revision += 1

Luôn cập nhật anchor kể cả elapsed âm; đồng hồ lùi không làm cây chết hoặc đợi đến ngày cũ mới chạy lại. Time jump lớn chỉ nhận tối đa 8 giờ. Chấp nhận rằng game offline không thể xác minh tuyệt đối đồng hồ thiết bị; mục tiêu là ổn định và không nhân đôi thưởng.

Trong phiên visible dùng monotonic clock (performance.now) để tích lũy delta. Không cộng thêm wall elapsed cho cùng khoảng đã cộng monotonic. Mỗi checkpoint/command lấy phần monotonic chưa commit rồi cập nhật anchor wall; khi hidden pause bộ tích lũy. Resume rehydrate rồi đặt lại monotonic baseline.

## Tác động

Cây đạt readyAtSimMs chuyển ready nhưng vẫn trên luống, không sinh coins hoặc tự replant. Craft queue chỉ hoàn thành số job đã trả nguyên liệu; sản phẩm pending, không tạo thêm job. Livestock tương lai giới hạn kho chứa. Chỉ tính số chu kỳ bằng công thức và cap, không lặp theo từng frame offline.

UI báo “Bạn vắng X; vườn đã tiến thêm tối đa 8 giờ” nếu cần, không làm người chơi cảm thấy bị phạt. Không tính lịch NPC/gift thành hàng trăm lượt thưởng offline.

Fixtures/time_cases.json và tools/reference_checks.py kiểm tra math đề xuất, không thay test lifecycle trình duyệt thực.

Cursor monotonic đã commit chỉ tiến khi transaction thành công. Nếu write abort, giữ delta chưa commit; khi stale revision phải rehydrate và đặt lại baseline từ snapshot mới, không phát lại cả delta cũ. Command queue tuần tự hóa phần đồng bộ này.
