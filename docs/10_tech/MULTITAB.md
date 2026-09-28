# Nhiều tab và chống nhận thưởng trùng

Độ đúng dựa vào IndexedDB readwrite transaction trên cùng stores và revision check, không dựa vào khóa localStorage. Web Locks nếu có hỗ trợ chỉ là điều phối bổ sung cho cùng origin. BroadcastChannel báo revision mới để tab khác rehydrate, không là nguồn chân lý.

Mỗi command mở transaction, đọc revision hiện tại, so expectedRevision. Nếu stale: hủy mà không thay coins/item, yêu cầu UI đọc lại. RESUME_TIME được tính từ anchor mới nhất trong transaction nên hai tab mở cùng lúc không cộng cùng khoảng offline hai lần.

HARVEST tham chiếu cropUid; lần sau plot trống nên không nhận nữa. Quest/puzzle có claim key bền vững như quest:q_first_harvest và puzzle:p_memory_01. Receipt chống replay command ngay gần đây nhưng không thay claim ledger. Chỉ 256 receipt cuối; số claim quest/puzzle giữ toàn bộ theo content.

Nếu trình duyệt không có Web Locks/BroadcastChannel: vẫn đảm bảo transaction + compare revision; refresh snapshot khi focus. Nếu IndexedDB không hoạt động thì không tuyên bố save được; chỉ cho demo không lưu khi người chơi chọn rõ.

QA: hai tab cùng mua món cuối, cùng harvest, cùng claim puzzle, một tab update trong khi tab kia save, đóng tab giữ lock. Invariant: tổng vật phẩm/coins không tăng ngoài phần thưởng hợp lệ.
