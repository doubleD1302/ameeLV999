# Chế tác và bó hoa

**Giai đoạn:** P2. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Craft sau workshop, recipe chỉ định input/output/duration/unlock. Preview số đồ tiêu hao và kết quả. START_CRAFT trừ nguyên liệu ngay và thêm job; không trừ thêm khi hoàn thành. Giới hạn queue3 trong baseline.

Job queued/running/ready/claimed. Mỗi job có jobId và readyAtSimMs. Claim output và marked claimed cùng transaction. Cancel chỉ trước chạy và hoàn lại đủ input; đang chạy không hủy ở baseline để tránh rollback mơ hồ.

Recipe mẫu: 3 hoa cúc +1 tulip →1 bó đơn, 300 s, giá bán58 coins so giá hoa rời49; đây là phương án P2 cần test. Không recycle output thành nhiều input hơn. Recipe quantity nguyên và graph kiểm cycle đáng ngờ.

Offline chỉ xử lý job đã trả chi phí; không tự mua vật liệu hoặc tạo queue vô hạn. NPC request hỗ trợ chọn craft từ inventory nhưng không auto bán.

QA: queue đầy; cancel pending; input thiếu; duplicate claim; reload job ready; changed recipe không đổi kết quả job đã bắt đầu—job lưu recipeVersion/output snapshot.
