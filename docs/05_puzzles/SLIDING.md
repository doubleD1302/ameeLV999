# Ghép ảnh trượt

**Giai đoạn:** P1.


MVP dùng bảng 3 × 3 gồm tile 1–8 và 0 là ô trống; goal là thứ tự 1–8,0. Move chỉ trượt tile cạnh ô trống theo bốn hướng. Tap và swipe cùng gửi một hành động; domain dùng index, không dùng pixel.

Tạo đề bằng các bước scramble hợp lệ từ goal, lưu chuỗi đảo ngược làm certificate. Reject đề đã solved; không tạo permutation ngẫu nhiên nếu chưa kiểm khả năng giải. Bảng 4 × 4 là P2 sau playtest.

Thắng khi order bằng goal. Hint cho biết tile đúng hoặc bước solver tính từ trạng thái hiện tại. Không dùng certificate ban đầu làm hint khi người chơi đã đi theo đường khác.

Ảnh có tùy chọn số/label do code thêm để dễ đọc. Reset không xóa claim đã nhận. Validator replay từng move và từ chối bước vượt biên. Dữ liệu mẫu có ba level; tier cần được xác nhận bằng chơi thử.
