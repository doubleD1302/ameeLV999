# Save, transaction và backup

Một slot chính trong IndexedDB, stores: saves (key main), backups (ba snapshot gần nhất), metadata. Snapshot có schemaVersion, contentVersion, revision, savedAtWallMs, simTimeMs, coins, inventory, plots, upgrades, flags, claims và các hệ thống khác như schemas/save.schema.json.

Economic command commit nguyên tử nextState + receipt + quest counters + reward claims. Chỉ phát success sau transaction complete. Nếu quota/transaction abort: không publish nextState, không báo nhận thưởng. Không gọi fetch hoặc chờ UI trong transaction; compute domain đồng bộ hoặc chuẩn bị trước rồi kiểm revision.

Trước migration/import tạo backup riêng của bản hiện có và giữ tối đa ba bản tốt theo revision. Giới hạn số backup không xóa bản duy nhất còn khôi phục được. Export dùng file JSON UTF-8 có envelope, không executable code.

Import đọc file vào bộ nhớ, giới hạn 2 MiB, parse/validate schema và references, kiểm schemaVersion, hiển thị tóm tắt rồi xác nhận thay slot. File không hợp lệ không thay save. Nội dung text không render HTML. Import một save cũ là lựa chọn người chơi, không “merge coins” giữa hai save.

Ứng dụng không đảm bảo dữ liệu trình duyệt tồn tại mãi; export định kỳ là đường phục hồi cho người chơi. localStorage chỉ dùng preference không quan trọng nếu cần, không lưu kinh tế song song.
