# Sưu tầm, sự kiện và huy hiệu

**Giai đoạn:** P1–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Bloom Book ghi firstHarvest của từng flower; Memory Book ghi journal flag; Decor Book ghi firstAcquire. Dữ liệu completion từ facts/claims, không từ việc ảnh đã tải. Huy hiệu thưởng một lần bằng claim key.

MVP có journal và bộ sưu tập hoa; sự kiện P3 là câu chuyện ngắn không deadline mất thưởng. Khi bỏ lỡ có thể đọc lại/tái kích hoạt tại bảng tin. Không login streak mất tiến độ.

Ví dụ event: Momo mang một lá khô; Lily nhờ bó hoa; Noah tìm búa thất lạc; trời mưa xuất hiện ốc nhỏ. Event có prerequisite, cooldown sim, choice, outcome và fallback. RNG chốt khi spawn, không đổi qua reload.

Không dùng notification push bắt quay lại. Sự kiện là khám phá tự nguyện. Collection hiển thị dấu ? vừa đủ, không spoiler thư riêng hoặc mọi lời giải.

QA: first acquire từ quà/mua/craft đều ghi đúng; replay story không thưởng lại; event pending persist; thiếu ảnh có text fallback; optional event không chặn main.
