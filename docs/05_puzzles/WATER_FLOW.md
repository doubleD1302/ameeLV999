# Phân phối nước

**Giai đoạn:** P2.


Người chơi chỉnh van để phân phối lượng nước hữu hạn tới nhiều luống. Khác với xoay ống, đây là bài toán lưu lượng. Mạng được biên soạn dưới dạng DAG; mỗi cạnh có capacity nguyên, mỗi đích có demand. Không mô phỏng áp lực vật lý realtime.

Move chỉnh flow từ 0 tới capacity, bước 1. Thắng khi bảo toàn tổng vào bằng tổng ra ở node trung gian, lượng lấy từ nguồn không vượt supply và mọi đích nhận đúng demand. Nếu cho phép nước dư, phải khai báo một rule khác.

Bài đầu có 2 đích và 1 điểm chia; về sau thêm nhánh bị khóa. Hint nêu thiếu/dư bao nhiêu đơn vị. Solver xác minh có nghiệm; nếu nhiều phương án đúng thì chấp nhận tất cả.

Lưu flow từng cạnh, không lưu animation nước làm dữ liệu logic. QA: capacity 0, supply thiếu, cycle trong dữ liệu, giữ nút quá lâu không làm flow âm và mọi tín hiệu màu đều có số/nhãn.
