# Chẩn đoán các lỗi thường gặp

| Biểu hiện | Kiểm tra đầu tiên | Hướng xử lý |
|---|---|---|
| Hoa nở hai lần sau resume | Wall delta và monotonic cùng tính một khoảng? | Một clock coordinator, cursor chỉ advance sau commit |
| Coins tăng nhưng item không giảm | Hai write riêng hay UI sửa trực tiếp? | Một transaction cho toàn command |
| Save biến thành mới sau lỗi | Catch có gọi createDefaultSave? | Recovery path, giữ file lỗi |
| Offline chỉ chạy khi tab còn mở | SW control và cache completeness | Test cold launch production |
| Sau update thiếu ảnh | Content/asset manifest khác release | Cutover cả gói sau cache hoàn tất |
| Tap lệch khi xoay màn | CSS pixels và world coordinates | Dùng camera transform mới sau resize |
| NPC/pet bị kẹt | Decor block waypoint | Path fallback, không collision cứng với player |
| Hint sliding đi sai | Dùng certificate initial cho state khác | Solver/hint từ state hiện tại |
| Memory tăng sau chuyển scene | Listener/texture/audio chưa dispose | Kiểm lifecycle và repeated navigation |

Tái hiện bằng fixture nhỏ trước khi sửa. Ghi commandId/revision/build và bước thao tác, không log toàn thư riêng. Khi chưa tái hiện, nói rõ giả thuyết và kiểm chứng tiếp; không sửa hàng loạt để “tối ưu”.
