# Điều khiển và responsive

Tap/click một đối tượng mở action phù hợp; giữ/drag chỉ cho di chuyển camera hoặc decor, có ngưỡng8 CSSpx để phân biệt tap. Không tương tác xuyên panel. Nút≥48 ×48 CSSpx, khoảng cách8 px.

Keyboard: WASD/arrows di chuyển nếu bật; E/Enter tương tác; Escape đóng modal; Tab điều khiển UI; không chặn browser shortcuts. Canvas cần danh sách tương tác DOM để người không dùng chuột vẫn chọn mục tiêu gần.

Grid world64 unit tách CSSpixel; renderer scale theo devicePixelRatio có cap2 đề xuất, pointer transform qua camera. Sau resize/rotate, preserve camera center hoặc player, không reset save.

Màn360 ×640: HUDhaihàng, drawer ở dưới; 1280 ×720: toolbar nhỏ và sidepanel. Safe-area cho notch. Inventory grid đáp ứng min4 ô trên mobile nếu đủ 48 px; chữ không ép nhỏ để nhét.

Không cần joystick overlay ở P0; nếu thêm P2 phải playtest và tránh che hoa. Double tap không tự mua2 lần trừ khi người chơi chủ ý quantity selector.
