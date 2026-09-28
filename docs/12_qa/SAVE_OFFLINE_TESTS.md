# Kiểm tra save và offline

SAVE01: trồng/harvest/bán/sửa nhà, reload sau từng command; so coins/inventory/flags trước và sau.
SAVE02: import valid v1 → migrate v2, không cấp lại starter money; so fixture expected.
SAVE03: JSON hỏng/negative/future version/unknown ID/quá2 MiB; slot cũ giữ nguyên.
SAVE04: giả lập transaction abort; không success toast và không nhận phần thưởng nửa chừng.
SAVE05: hai tab cùng claim/harvest; một lần thành công, tab stale rehydrate.
SAVE06: backup/restore sau một thay đổi; người chơi xác nhận restore cũ, không merge hai economy.

OFF01: build production, online lần đầu → offline-ready → đóng toàn bộ tab → airplane mode → mở URL/app → chơi và save.
OFF02: offline trước cache hoàn tất; không báo ready hoặc reset.
OFF03: update available khi puzzle mở; từ chối vẫn chơi; đồng ý sau save thành công mới reload.
OFF04: crash/close lúc update; bản cũ hoặc mới hoàn chỉnh, không nửa catalog.
OFF05: storage eviction/xóa data là mất dữ liệu thiết bị; kiểm đường import backup và copy giải thích.
OFF06: subpath hosting, font/audio/textures có sẵn; không yêu cầu CDN.

Playwright offline emulation và fake IndexedDB hữu ích nhưng không thay máy thật. Ghi rõ cách mô phỏng fault; không xóa save người chơi thật để test.
