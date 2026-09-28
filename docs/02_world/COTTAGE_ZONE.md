# Đặc tả vùng mở đầu

Cottage24 ×18, spawn(12,15), footprint nhà x3..8/y3..6, điểm tương tác nhà(6,7). 4 luống đầu tại(9,8)..(12,8), mở thêm hàngy9 khi repair_fence. Portal sang greenhouse tại(23,9).

Lối từ spawn tới nhà và luống rộng ít nhất1 ô logic, ưu tiên nhìn thấy2 ô. Debris đặt ở mép và góc vườn để cho cảm giác um tùm nhưng không chắn tất cả mục tiêu ban đầu. Mỗi debris có id, yield và requiredToolLevel; dọn một lần. Catalog mẫu cung cấp30 wood/20 stone tổng.

Lily gặp ở(14,12); Momo gần(7,7), cả hai không collision cứng với player. Khi NPC di chuyển ra khỏi map vẫn mở thoại/shop bằng journal. Cổng khóa có mô tả “Sửa lại hàng rào và lối nhà kính”.

Asset layers: ground → paths → debris/flowers → buildings → character/pet → foreground cây → lighting/VFX. Occlusion giảm opacity khi che player/điểm tương tác. Không vẽ chữ hướng dẫn vào background.

QA manual: từ mọi ô hợp lệ có thể quay lại spawn; thao tác tap không chọn nhầm foreground; màn portrait vẫn thấy mục tiêu; world coords map đúng khi zoom/resize.
