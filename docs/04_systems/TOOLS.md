# Công cụ

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Công cụ là unlock bền vững, không durability và không slot bắt buộc. P0 găng tay/bình tưới; P1 búa nhỏ; P2 cần câu/rìu; P3 cuốc/đồ làm vườn nâng cấp. Người chơi chọn mục tiêu, game chọn tool hợp lệ và cho preview nếu chưa đủ cấp.

ToolLevel điều khiển debris tiers, không số damage. Nâng tool cần tài nguyên có thể thu bằng tool hiện tại; validator/progression review phải phát hiện cycle. Luôn có đường kiếm tool đầu không yêu cầu chính tool đó.

Animation dùng một point tương tác/crop anchor, không lệ thuộc đúng frame để trừ item. Commit hành động sau xác nhận; animation có thể skip nhưng outcome giữ.

QA: thao tác trên vật khóa giải thích đúng công cụ; spam không clear2 lần; tool mới qua reload; animation không đánh vào NPC hay chặn player; controller không đòi hover.
