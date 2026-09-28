# Tương thích và migration save

schemaVersion=2 cho baseline. contentVersion=0.1.0 cho catalog mẫu; đây không phải app release version.

V1 fixture giả lập định dạng cũ của dự án: version=1, lastSeenMs, elapsedMs, coins, inventory. Migration 1→2 giữ nguyên coins/inventory và anchor, gán elapsedMs thành simTimeMs, khởi tạo các trường mới bằng defaults. Fixture v1 không giả lập đã trồng cây; không tự cấp thêm starter coins/hạt nếu inventory cũ tồn tại. tests so expected fixture hoàn chỉnh.

Pipeline: parse → nhận dạng version → validate bản nguồn → backup → migrate từng bước bằng hàm pure → validate v2 và references → atomic swap. Lỗi giữ save cũ nguyên trạng. Không tạo save mới khi migration fail.

Save version tương lai: báo ứng dụng chưa hỗ trợ, cho export, không downgrade hoặc xóa. Đổi ID item phải có alias/mapping vĩnh viễn hoặc migration đã test; không âm thầm bỏ unknown item có giá trị. Xóa quest/flower đã dùng cần chiến lược chuyển đổi rõ.

Rollback app: chỉ chạy lại app cũ nếu nó đọc được schema hiện tại; nếu không phải forward fix hoặc chủ động restore backup trước migration sau khi giải thích tiến trình mới sẽ mất. Không kết luận “rollback deployment” luôn an toàn với save.
