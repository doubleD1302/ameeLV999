# Trồng và thu hoạch hoa

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Một plot có empty hoặc growing; ready được suy ra bằng simTimeMs ≥ readyAtSimMs, không một timer riêng trong UI. PLANT cần seed mở khóa, plot trống và hạt đủ; trừ 1 hạt, lưu cropUid, flowerId, plantedAtSimMs, readyAtSimMs. HARVEST cần đúng cropUid, thêm yield rồi xóa crop nguyên tử.

MVP cây không cần tưới để sống hoặc lớn; tưới là phản hồi chăm sóc, không tạo lợi thế không ghi trong data. P2 có thể thêm boost qua ADR, không tự cộng buff mỗi frame. Uproot có xác nhận, trả lại đúng 1 seed và xóa tiến độ, không nhân bản seed bằng double click.

Stage hình ảnh tính từ progress 0–1: seed 0–0.1, sprout 0.1–0.35, bud 0.35–0.7, bloom 0.7–1, ready ≥1. Dùng ảnh stage hoặc scale tween nhẹ, không trộn stage giữa loài.

Mở đầu 4 plots; hàng rào tăng lên 8. Chọn loài cho từng ô hoặc batch chọn nhiều ô; batch P2 phải tính tổng cost và commit all-or-none. Chín không tự bán/replant, hoa không héo khi người chơi vắng.

QA: hạt cuối/double tap; cây chín đúng mốc; offline đủ lâu chỉ yield một lứa; plot lock không trồng; uproot không dup; error storage giữ hạt và plot nhất quán.
