# Hợp đồng command và event

Mỗi command có commandId, expectedRevision và payload có kiểu. Command kiểm trạng thái hiện tại trong transaction; lỗi trả code, không trừ tài nguyên. Receipt gần nhất tối đa 256 dùng chống retry; phần thưởng quest/puzzle có claim ID bền vững không xóa theo vòng receipt.

| Command | Điều kiện / tác động nguyên tử |
|---|---|
| PLANT | Plot trống, flower mở khóa, có hạt → trừ 1 hạt, gán cropUid/readyAtSimMs |
| HARVEST | cropUid trùng và đã chín → thêm yield, xóa crop, tăng counter quest |
| SELL | Item bán được, số lượng nguyên dương đủ → trừ item, cộng coins |
| BUY_SEED | Seed mở, giá catalog, đủ coins → trừ coins/thêm hạt |
| BUY_DECOR | Decor được mở, đủ coins → trừ coins và thêm item; dùng cùng quy tắc shop |
| CLEAR_DEBRIS | Debris chưa dọn và tool đạt → thêm vật liệu, đánh dấu đã dọn |
| RESTORE | Upgrade chưa mua, đủ prerequisites/resources → trừ đủ, thêm flag/upgrade |
| PLACE_DECOR | Có item, footprint hợp lệ → move item sang instance |
| CLAIM_QUEST | Counter/flag đủ, claim chưa tồn tại → phần thưởng và claimed flag |
| COMPLETE_PUZZLE | Engine verifier chấp nhận hoặc assist hợp lệ → completion/reward một lần |
| ADOPT_PET / TALK / GIFT | Kiểm tra unlock/cooldown/catalog trước khi ghi |
| RESUME_TIME | Đọc snapshot mới nhất và reconcile clock trong cùng transaction |
| RESCUE_SEEDS | Kiểm lại tất cả điều kiện hết vốn → cấp 2 hạt cúc |

Events sau commit: state_committed, flower_harvested, upgrade_restored, puzzle_completed, storage_failed, update_available. Payload có revision và IDs; không đưa toàn save vào log.

Lỗi tối thiểu: STALE_REVISION, NOT_READY, LOCKED, INSUFFICIENT_ITEMS, ALREADY_CLAIMED, INVALID_DATA, STORAGE_FAILED, PATH_BLOCKED. UI map sang copy; exception stack chỉ ở dev. Không retry command cũ vô hạn; rehydrate và cho người chơi thao tác lại nếu stale.
