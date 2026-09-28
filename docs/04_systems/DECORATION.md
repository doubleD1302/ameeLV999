# Trang trí và đặt đồ

**Giai đoạn:** P1–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Chọn item từ inventory → ghost theo lưới → xoay nếu allowed → preview hợp lệ/không hợp lệ → xác nhận. Chưa confirm không trừ đồ. Footprint là ô logic; art có thể vượt ô nhưng không thay collision.

Kiểm bounds, overlap, terrain tag, layer, cổng, plot và đường từ spawn tới tất cả điểm tương tác bắt buộc bằng flood-fill. Không cho chặn cửa/đường. Một hit zone UI giải thích lỗi, không chỉ đổi màu.

PLACE tạo instanceId và trừ 1 item; MOVE giữ instance và kiểm vị trí mới; STORE xóa instance/cộng item. Tất cả atomic. Không bán mất đồ đang đặt.

MVP chỉ ground decor ngoài vườn, rotation 0/90 cho một số đồ; interior wall slots là P2. Undo một lần trong chế độ decor chỉ thực hiện nếu revision không có thay đổi khác xung đột; không undo hành động bán/nhận thưởng.

QA: góc map, dưới cây/cửa, 2 x1 xoay thành1 x2, path block, hai đồ cùng ô, cancel, reload giữa drag, touch đổi camera không lỡ confirm.
