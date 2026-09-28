# Nấu ăn

**Giai đoạn:** P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Tùy chọn mở sau bếp, sử dụng cùng engine job của crafting với category cooking. Món phục vụ quà/tương tác và collection, không thêm hunger bar. Không buộc nấu để cây sống.

Mỗi recipe có nguyên liệu thay thế theo nhóm được khai báo, không để AI tùy ý thay món trong runtime. Người chơi xem đầu ra trước khi nấu. Hương vị là flavor text; buff nếu có phải giới hạn một buff loại, expiry theo simTime và không stack nhân vô hạn.

Các món tưởng thưởng/quest đều có lối trao đổi thay thế khi chưa mở livestock. Không dùng ingredient vĩnh viễn mất cơ hội nhận lại. Asset thức ăn nguyên miếng ở P3 có cùng camera icon.

QA tái dùng crafting transaction, bổ sung buff reload/expiry và item substitutable. Chỉ tạo data/cooking.json cùng schema ở task P3; chưa giả định schema MVP đã có món.
