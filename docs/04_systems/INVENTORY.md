# Kho đồ

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


MVP inventory là map itemId→quantity, integer không âm. Items tách seed, flower, material, decor, fish, product, food, story. Story items không bán/xóa. Decor đang đặt chuyển thành instance, không đồng thời nằm trong túi.

Không giới hạn slot trong MVP để tránh mất thưởng vì túi đầy. UI gộp số lượng nhưng không lấy UI stack làm luật kinh tế. Nếu thêm cap về sau, phải có overflow mailbox bền vững và migration; không silently discard.

Các thao tác domain chỉ dùng ID; tên/dịch/ảnh lấy từ catalog. Unknown ID khi import báo unsupported content, không tự đổi thành coins. Các màn khác đọc selector, không sửa quantity.

Filter Theo loại/Đã có, sort ổn định theo displayOrder. Empty state có lối tới cửa hàng/vườn. Quantity selector không cho âm, số thập phân hoặc vượt số đang có. Preview chỉ là preview, transaction kiểm lại.

QA: sell 0/-1/1.5/huge; quantity không đủ; nhận cùng item từ hai nguồn; reload sau đặt/cất decor; import typo ID; text dài và keyboard focus.
