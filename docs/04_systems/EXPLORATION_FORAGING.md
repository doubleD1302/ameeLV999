# Khám phá và vật liệu

**Giai đoạn:** P1–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


P1 dọn debris một lần cung cấp tổng30 wood/20 stone. Các vùng khóa có preview thiên nhiên/phác dấu công trình và mô tả điều kiện mở, không nút “sắp có” giả tương tác.

Trước khi nội dung tiêu hao wood/stone lặp xuất hiện, mở foraging spots tái tạo. Mỗi spot có nextAvailableAtSimMs, yield table và loot được chốt khi spawn. Một spot giữ tối đa một lứa; reload không roll lại loot.

Không energy/stamina. Khai thác lớn cần tool level được cấp qua tiến trình bảo đảm; tool không hỏng. Story key luôn có một nguồn lấy lại hoặc persistent flag, không thể bán.

P3 forest/hill có đường khám phá ngắn và landmark dễ nhận. Địa hình không sinh procedural trong MVP; map data là nguồn va chạm/navigation, ảnh AI không xác định lối đi.

QA: blocked portal, full map path, spot cooldown, repeated clear, free material source trước mandatorycost, quest key không thể mất.
