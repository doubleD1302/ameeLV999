# Kinh tế và cách cân bằng

Coins là tiền duy nhất trong MVP. Wood/stone là vật liệu, không phải tiền phụ. Không có gem trả phí. Giá/timer/yield tại data/flowers.json và data/items.json. Lợi nhuận một vòng = sellPrice × yield − seedPrice. Hoa ngắn lợi trên phút cao hơn nhưng cần thao tác; hoa dài cho giá trị mỗi lần quay lại lớn hơn.

Khởi đầu: 40 coins, 4 hạt cúc, 2 tulip; 4 luống. Cây không tự thu hoạch hoặc trồng lại. Offline 8 giờ không có nghĩa 240 vòng cúc 2 phút; chỉ hoàn tất lứa đã trồng.

Cửa sổ cần 60 coins/4 wood; hàng rào 120/8; greenhouse exterior 320/12 wood/8 stone. Clearing MVP có tổng 30 wood/20 stone; đủ chi phí bắt buộc. Các chi phí này là baseline kiểm thử, không số liệu cân bằng đã được xác nhận.

Cứu hộ: khi không có cây đang trồng, không có hạt trồng được, coins dưới giá cúc và không có vật phẩm có thể bán, Lily cấp 2 hạt cúc. Hạt không bán được. Nhận trong transaction, kiểm tra lại điều kiện để không double-click. Không cooldown làm người hết vốn bị khóa.

Quest/first puzzle thưởng một lần và có thể làm tiến trình nhanh hơn phép tính trồng thuần. Chạy tools/economy_report.py để xem phép tính tham khảo. Cần playtest ba cách chơi: tích cực, 2 lượt/ngày, vắng 3 ngày. Không tối ưu kinh tế bằng spam click hay ads.

Đo: thời gian tới cửa sổ, số lựa chọn có ý nghĩa mỗi phiên, số lần hết hạt, tài sản mắc kẹt và mục tiêu tiếp theo có đủ gần không. Chỉ chỉnh một nhóm tham số mỗi lần rồi lưu kết quả.
