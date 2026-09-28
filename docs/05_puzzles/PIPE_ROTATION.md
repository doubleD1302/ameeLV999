# Xoay ống tưới

**Giai đoạn:** P1.


Board hàng-cột; ports dùng bit N=1,E=2,S=4,W=8. Tile basePorts thuộc cap1/straight5/elbow3; rotation0..3 là số lượt90 độ theo chiều kim đồng hồ. MVP không T-junction trong dataset; engine có thể hỗ trợ nếu schema mở có kiểm.

Source có một port ra ngoài board và target có một port ra ngoài; chỉ hai port biên này hợp lệ. Nước bắt đầu ở source, duyệt graph qua các port khớp đôi. Win khi tới target và component có nước không rò ra ô/port không khớp. Các tile không nối nguồn không cần dùng.

Move rotate một tile không locked, clockwise; một lần pointer chỉ một move. Hint đánh dấu chỗ rò đầu hoặc xoay một tile theo certificate nếu có thể hướng dẫn; không khẳng định certificate là nghiệm duy nhất.

Validator áp solutionRotations vào board, giữ locked rotation, kiểm source/target/leaks. Không dùng “tất cả rotation giống certificate” làm win vì có nhiều nghiệm.
