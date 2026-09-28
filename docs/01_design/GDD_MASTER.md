# Thiết kế game tổng thể

## Vòng lặp

Dọn một vùng nhỏ → nhận vật liệu → trồng hoa → hoạt động nhẹ/puzzle/hội thoại → thu hoạch → bán hoặc giữ làm quà → sửa công trình → mở cơ chế và vùng mới. Idle giúp hoàn thành các việc đã bắt đầu, không chơi thay toàn bộ game.

## Hệ thống liên kết

Hoa là nguồn coins chính. Dọn vườn cung cấp wood/stone cho nâng cấp; nguồn tái tạo được mở trước khi nguồn hữu hạn hết. Công trình dùng coins/materials và đổi hình ảnh thật. Quests giới thiệu các vòng lặp, không thưởng lặp. Pet tạo phản hồi cảm xúc; bonus tài nguyên nhỏ, không bắt buộc sở hữu để tiến triển. Neighbor bán hạt, dạy craft, trao ký ức. Puzzle đặt trong vật thể thật như hộp hạt, đường tưới, ảnh cũ.

MVP: 6 hoa, 3 NPC, Momo, 12 decor, 9 puzzle, 8 quest. Các giá trị trong data/ là nguồn chuẩn. Chỉ bật P0/P1 bằng build config; không hiển thị nút chết cho module tương lai.

## Nhịp chơi

Một lượt 5–15 phút: thu hoạch, chọn cây phù hợp thời gian quay lại, làm một việc sửa chữa/puzzle, chào một hàng xóm. Người thích chơi dài có decor và puzzle; người về sau nhiều giờ vẫn có tiến triển. Không hứa số giờ chơi đến khi có playtest.

## Trình bày

Một thế giới canvas 2D có lớp nền, công trình, nhân vật, VFX; UI HTML phụ trách chữ, inventory, lựa chọn, journal và settings. Game tải đủ asset của bản phát hành trước khi báo sẵn sàng offline. Khi chưa tải đủ phải nói rõ.

## Những tình huống chính cần chống

Hết hạt/coins; thưởng nhận hai lần; save bị ghi đè khi hai tab; cập nhật service worker giữa transaction; mất quyền storage; puzzle không có lời giải; đồ trang trí chắn lối; asset khác camera. Các đặc tả kỹ thuật và QA có tiêu chí riêng cho từng tình huống.
