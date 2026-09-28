# Kiểm hiệu năng

Dùng bản production có build hash. Đo cold network load và warm cache riêng; ghi cache state. Thiết bị thực có model/RAM/browser/OS; không so laptop mạnh với target phone rồi kết luận đạt.

Kịch bản:8 plots ready,12 decor,3 NPC,pet,VFX nhẹ; mở inventory/journal/puzzle liên tiếp20 lần; chuyển vùng10 lần; hidden/resume10 lần; import save kích thước gần giới hạn. Đo FPS/frame time, memory trend, transaction latency và gói cache.

So PERFORMANCE_BUDGETS, không tự tăng threshold. Nếu memory tăng liên tục sau scene dispose, kiểm texture/listener/audio handles. Performance.now dùng đo, không Date.now có thể đổi.

Báo median/p95 qua nhiều lần và bottleneck. Tối ưu nguồn ảnh/atlas trước khi viết engine phức tạp. Không giảm chất lượng text hoặc phá timer domain để đạt fps.
