# Bánh răng và cối xay

**Giai đoạn:** P3.


Các socket và cạnh tiếp xúc được biên soạn bằng dữ liệu. Mỗi gear có toothCount từ danh sách cho phép và chỉ đặt vào socket có kích thước phù hợp. Hai gear tiếp xúc quay ngược chiều; tỷ lệ tốc độ dùng phân số toothA/toothB.

Thắng khi truyền động tới đích đúng hướng/tỷ lệ, không có cycle áp hai tốc độ mâu thuẫn lên cùng một gear. Dùng số hữu tỷ để so thay vì sai số float tùy ý. Đây là trò logic ký hiệu, không phải mô hình cơ học được xác nhận từ ảnh.

Move đặt/đổi gear; UI cho biết kích thước và yêu cầu đích. Hint chỉ đoạn bị ngắt hoặc tỷ lệ sai. Animation được suy từ graph, không quyết định thắng theo tốc độ sprite nhìn bằng mắt.

QA: gear quá lớn, overlap, toothCount bằng 0, vòng truyền mâu thuẫn, nhiều cách lắp đúng và thao tác bàn phím. Không quảng cáo độ chính xác vật lý ngoài đặc tả.
