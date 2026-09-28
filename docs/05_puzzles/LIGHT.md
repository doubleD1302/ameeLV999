# Gương và tia sáng

**Giai đoạn:** P2.


Lưới gồm nguồn có hướng, gương dạng slash/backslash, tường và đích. Move xoay gương 90 độ; ray tracer tính đường tia theo ô logic. Thắng khi ánh sáng tới đích đúng màu nếu có yêu cầu.

Theo dõi visited(cell,direction,color). Gặp lại cùng trạng thái thì dừng vì loop, không để game treo. Giới hạn số trạng thái theo số ô × 4 hướng × số màu. P2 chỉ một màu; splitter/filter là P3 và cần schema/version riêng.

AI tạo phần vỏ gương; góc phản xạ và beam do code vẽ chính xác. Không nhấp nháy hoặc chỉ dùng màu để biểu đạt đích. Hint chỉ vùng gương cần xem, hoặc một đoạn tia tiếp theo.

QA: loop, tia ra ngoài, tia bị tường chặn, hai tia cùng một đích, trạng thái góc giữ qua reload. Solver phải xác minh nghiệm trước khi level được đóng gói.
