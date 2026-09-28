# Khôi phục nhà và công trình

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Chuỗi P1: repair_window → repair_fence → restore_greenhouse. Upgrade có costs và prerequisites, flags cụ thể. Confirm hiện đủ vật liệu, ảnh before/after và hiệu ứng mở khóa. RESTORE trừ tất cả và thêm upgrade trong một transaction.

Không có timer xây dựng trong P1: người chơi đã đợi hoa, sửa xong được thấy ngay. Animation 1–2 giây là trình bày; reload giữa animation vẫn hiện công trình đã sửa. Không có phí sửa định kỳ.

House stage là trạng thái ảnh, không sinh ra thêm requirement: S0 hoang; S1 cửa sổ/điểm sáng; S2 an toàn/sạch; S3 ấm áp; S4 cá nhân hóa. P1 mới thực hiện một phần, không báo đã hoàn toàn cải tạo nhà.

Giữ silhouette, footprint, cửa và anchor giống nhau giữa stage. Debris liên quan công trình đổi visibility theo upgrade; không chặn lối đã được mở.

QA: purchase lặp fail ALREADY_CLAIMED; thiếu một vật liệu không trừ loại khác; prerequisites cycle bị build validator bắt; mọi stage thay đổi nhìn thấy; reload và rollback render không tính phí lại.
