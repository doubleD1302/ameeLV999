# Dữ liệu mẫu đã điền

Catalog MVP gồm 6 hoa,12 decor,3 upgrade,8 quest,9 puzzle,2 map. P2/P3 có các hàng minh họa trong pets/neighbors/recipes/fish/livestock/zones với phase rõ; engine chưa triển khai không được bật chỉ vì có data.

config là số liệu nguồn. IDs ổn định; durationSeconds khác timestamps milliseconds. Giá trị wall trong fixtures là thời điểm tổng hợp cho test, không dùng làm thời gian bắt đầu thật của người chơi.

Các ảnh/âm thanh đều mới ở trạng thái planned trong asset_registry; không có asset generated/approved trong bộ này. Khi bootstrap có thể dùng placeholder được ghi rõ, sau đó thay qua pipeline.

puzzles có certificate và được validator kiểm theo luật, không chỉ JSON parse. Seed shuffle mẫu được tạo trước, runtime dùng deck đã có; không cần tái hiện thuật toán random của Python trong TypeScript.

Audio có registry riêng tại audio_registry.json để tránh dùng width/height/alpha cho âm thanh; animation_specs.json liên kết clip với từng frame ảnh. Registry bao gồm yêu cầu chuẩn bị, không phải file đã sản xuất.
