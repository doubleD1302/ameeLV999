# Các giai đoạn khôi phục

| Stage | Nhà | Vườn | Cảm giác |
|---|---|---|---|
| S0 | Mái thủng nhỏ, cửa mờ, sơn bong | Cỏ phủ khoảng70% vùng trang trí; đường đi chính rõ | Hoang sơ nhưng có thể cứu |
| S1 | Cửa sổ mới, ánh sáng trong nhà | Dọn vùng đầu và 4 luống | Có người trở về |
| S2 | Hàng rào/lối đi an toàn | 8 luống và không gian decor | Có trật tự |
| S3 | Cottage/nhà kính ấm áp | Ao/chuồng sinh hoạt | Thế giới sống |
| S4 | Chi tiết do người chơi chọn | Vườn cá nhân hóa | Một nơi thuộc về mình |

70% là hướng dẫn composition, không tỷ lệ collision bắt buộc. Không thay cả silhouette giữa stage. Anchor chân nhà, cửa, footprint và phối cảnh giữ nguyên; phần thay chỉ repair mask và layer decor.

MVP window sửa một chi tiết, fence mở đường, greenhouse exterior loại kính vỡ. Đừng dùng chỉ số level thay hình ảnh thật. Chụp before/after tại camera/zoom/time-of-day giống nhau để thấy tiến bộ không do ánh sáng.

Nếu người chơi bỏ qua animation hoặc reload, stage được suy từ upgrade flags. Không lưu hai nguồn houseLevel và upgradeFlags có thể lệch nhau.
