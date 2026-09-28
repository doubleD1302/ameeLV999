# Cửa hàng và bán hoa

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Lily bán seed với giá data/items.json. Người chơi chọn lượng, thấy tổng tiền và số dư dự kiến; BUY_SEED tính lại giá từ catalog trong transaction. Không tin giá client gửi trong payload.

SELL chỉ chấp nhận item sellable=true, nguyên dương. Hạt và vật phẩm truyện không bán. Tiền tăng cùng lúc item giảm. Có bán tất cả hoa nhưng preview liệt kê, mặc định giữ hoa được người chơi đánh dấu yêu thích (P2 nếu có) và không bán story.

MVP không tồn kho giới hạn hoặc chênh giá theo thời gian. Cửa hàng truy cập qua journal/remote panel nếu Lily đang đi theo lịch; không đợi giờ NPC. Giá không thay ngẫu nhiên theo reload.

Rescue hạt khi thật sự hết đường kiếm coins theo ECONOMY_BALANCE; cho 2 seed_daisy một transaction. Không cooldown bắt người hết vốn phải chờ. Rescue không cấp coins.

QA: mua đúng bằng số dư; nhấn hai lần; stale revision; sell item không bán; catalog giá lỗi; cứu hộ lúc đã có cây phải không cấp; hoạt động khi airplane mode.

P1 Noah bán decor; BUY_DECOR dùng buyPrice từ cùng item catalog, cùng preview và transaction như mua hạt.
