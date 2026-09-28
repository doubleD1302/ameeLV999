# Thú cưng

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


P0/P1 chỉ Momo: nhận nuôi qua quest, đặt tên tùy chọn, vuốt ve/chơi, đi theo, ngồi/ngủ/khám phá góc gần. Momo không chết, không bỏ đi, không làm giảm tình bạn khi vắng; food trong P1 là tương tác tình cảm.

State machine: idle → approach_player → interact → idle; idle → wander → idle; tired animation → sleep → wake; rain → shelter. Ưu tiên path an toàn và không chặn player/portal. Dùng timer/RNG seed, không random mỗi frame.

P2 thêm Tofu (corgi), Snow (thỏ), Pip (vịt). Tối đa1 pet theo; các pet khác ở vùng chăm sóc. Mỗi pet có cosmetic signature, bonus tìm vật rất nhỏ tối đa1 pending/6 h sim, không tạo lợi thế bắt buộc. Bonus chưa bật ở P1.

Đổi tên dùng quy tắc 24 ký tự như player. Click pet mở radial3 nút lớn; không phát nhiều âm thanh chồng nếu spam. Pet giữ identity qua animation và portrait.

QA: reload adoption không tạo2 pet; pet ngoài camera không chạy lạc; chặn đường được xử lý; reduced-motion vẫn hiểu tương tác; không yêu cầu mua food khi người chơi hết tiền.
