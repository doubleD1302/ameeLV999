# Quản lý nguồn sự thật

Thứ tự xử lý xung đột: yêu cầu mới rõ ràng của chủ dự án → REQUIREMENTS → DECISIONS và ADR còn hiệu lực → đặc tả hệ thống → schema/contract → dữ liệu định lượng → code hiện tại. Schema và data phải đồng bộ; không được lấy thứ tự này làm lý do bỏ qua mâu thuẫn âm thầm. Ghi conflict và sửa cùng task.

Data JSON là nguồn số lượng, giá và thời gian; docs giải thích luật. Không chép một giá trị khác vào code. Save có schemaVersion riêng, content có contentVersion riêng, tài liệu có version bộ riêng.

Mỗi task phải cập nhật tài liệu liên quan khi thay quy tắc hoặc API. Handoff ghi đang ở milestone/task nào, test đã chạy, lỗi chưa xử lý. Không coi lịch sử chat là đặc tả duy nhất.

File docs/10_tech/REFERENCE_SOURCES.md chỉ hỗ trợ kỹ thuật; không tự override quyết định game. Templates có biến {{...}} có chủ ý. Đặc tả đã điền không được để TODO mơ hồ. Các feature tương lai được gắn P2/P3 và có điều kiện vào backlog.

Mọi nội dung AI tạo cần được kiểm tra consistency. Asset có trạng thái planned/generated/approved/rejected; code task có todo/in_progress/done. Không dùng một trạng thái thay cho trạng thái khác.
