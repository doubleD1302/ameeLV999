# Vườn cây ăn quả và cây trồng

**Giai đoạn:** P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Hoa vẫn là kinh tế chính. Orchard bổ sung cây lâu năm và tối đa một nhóm rau phục vụ nấu ăn; không biến game thành bảng việc chăm sóc bắt buộc.

Cây ăn quả đặt tại orchard slot, có giai đoạn sapling→mature→fruit_ready. Thu hoạch trả cây về mature rồi đặt nextReadyAtSimMs; không phải trồng lại. Tối đa một lứa chờ trên cây; offline không cộng vô hạn trái.

Thời gian trưởng thành/cooldown/yield trong catalog riêng. Không dùng flowerId cho treeId rồi đoán type. Mùa chỉ thay diện mạo mặc định; nếu mùa ảnh hưởng yield thì main quest có nguồn thay thế.

Uproot cây lâu năm cho vào pot inventory khi có chỗ, không mất vĩnh viễn; preview rõ và transaction. Layout validation giống decor, cây không chắn lối.

QA: thu trái hai lần; pot/store/replant không reset cooldown để farm; schema v2 cần migration trường orchard khi triển khai; show đúng stage sau offline.
