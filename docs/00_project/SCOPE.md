# Phạm vi các bản

| Bản | Nội dung khóa | Điều kiện qua cổng |
|---|---|---|
| P0 — vertical slice | 1 khu cottage, 3 hoa đầu, 4 luống, 1 sửa cửa sổ, Lily, Momo, 1 engine memory / 2 level, save/export/import, vòng offline | Hoàn thành vòng cốt lõi; lưu rồi mở lại không mất trạng thái; sau khi tải/cache đủ, cold start và chơi được khi ngắt mạng; thu hoạch/nhận thưởng lặp không cấp trùng; smoke test desktop và viewport cảm ứng |
| P1 — MVP | Cottage + greenhouse exterior, 6 hoa, 8 luống tối đa, 3 hàng xóm, 1 pet, 3 engine/9 level, 12 decor, 3 công trình sửa, 8 quest chính | Qua toàn bộ tiêu chí P1; art đồng nhất; dùng được trên PC và mobile mục tiêu |
| P2 — mở rộng đời sống | Greenhouse hoạt động, lai hoa, ao/câu cá, chuồng/chăn nuôi, 4 pet, crafting, 6 dạng puzzle | Data/schema/save migration đủ cho tính năng mới; không hồi quy P1 |
| P3 — câu chuyện đầy đủ | 7 vùng, tối đa 48 hoa, 8 hàng xóm, 10 engine puzzle, orchard/forest/hill, album/kết truyện/sandbox | Chơi thử toàn bộ unlock graph và nội dung kết thúc |

P0 và P1 dùng cùng cấu trúc dữ liệu; feature gates và catalog quy định thứ gì được bật. Các timer ngắn phục vụ thử nghiệm phải là cấu hình dev riêng, không làm thay đổi data phát hành. Các cổng nghiệm thu là điều kiện cần có bằng chứng trong test/report, không phải tuyên bố rằng nội dung đã được triển khai.

Ngoài phạm vi mặc định: multiplayer, backend tài khoản, cloud save, monetization, 3D, AI hội thoại realtime, nhận diện giọng nói, ứng dụng native, thủ tục cấp phép app store. Không cần network để tạo nhiệm vụ hay puzzle trong lúc chơi.

MVP có 6 hoa thực trong data, 12 đồ trang trí và 9 puzzle. Catalog tương lai là mục tiêu, không được báo như asset/level đã làm. Gói tài liệu không chứa mã game hoàn chỉnh; không chạy npm từ bộ này trước T001.
