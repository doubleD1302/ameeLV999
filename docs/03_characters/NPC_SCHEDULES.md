# Lịch NPC và quan hệ

Ngày thị giác60 phút simulation, phase 0–1. Lily: cổng0–0.25, luống0.25–0.6, ghế0.6–0.8, rời vườn0.8–1. Noah: nhà0.25–0.6, workshop0.6–0.8. Arthur: cổng0.25–0.6, ao khi mở0.6–0.8.

Khi vị trí chưa mở, dùng fallback cổng. Pathfinding chậm theo waypoint; nếu bị decor chặn chuyển tới điểm an toàn ngoài camera sau delay thay vì đứng vô hạn. NPC là soft obstacles, không khóa player.

Menu journal luôn có mục liên hệ sau lần gặp đầu, bảo đảm gift/shop/story không khóa theo giờ. Lịch không chạy từng phút lúc offline; khi resume tính vị trí đích từ phase hiện tại.

Quan hệ tính như NEIGHBORS_RELATIONSHIPS:0–100, TALK+2/gift+3 hoặc5/cooldown 6 h sim. Mốc25/50/80 có thoại riêng một lần, sau đọc lại không reward. Không decay.
