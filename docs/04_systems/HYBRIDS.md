# Lai hoa

**Giai đoạn:** P2. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Mở khi greenhouse hoạt động; không đưa vào P1 chỉ vì đã sửa exterior. Chọn 2 cây/hoa bố mẹ đủ điều kiện trong bảng hybrid recipe; tiêu thụ mẫu và phí sau preview, tạo một hybrid job có seed RNG đã lưu.

Recipe chỉ rõ parent IDs, output IDs, weights nguyên dương tổng 100, duration và phí. Không suy loài từ tên/màu hay prompt art. Kết quả được chốt trong transaction lúc bắt đầu; reload không reroll. Pity tùy chọn tối đa 5 lần chưa ra biến thể mục tiêu rồi lần kế bảo đảm, nếu được bật phải lưu counter.

Không khóa main quest vào RNG hiếm. Mỗi loài bắt buộc cho main story có recipe bảo đảm hoặc nguồn mua. Preview công bố cơ hội và bố mẹ nào sẽ bị dùng. Thất bại vẫn có một seed thường, không làm cây di sản biến mất khỏi nguồn duy nhất.

QA: hai bố mẹ cùng ID vẫn tính quantity=2; thiếu vật liệu không trừ; mọi output tồn tại; weights đúng; result giữ qua reload; assisted puzzle vẫn lấy được recipe.
