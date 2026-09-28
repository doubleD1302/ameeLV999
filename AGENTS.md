# Quy tắc cho coding agent

## Nhiệm vụ

Xây Blooming Home theo baseline trong bộ tài liệu, từng task nhỏ, có bằng chứng. Tiếp tục các bước đã được giao mà không hỏi lại cho lựa chọn triển khai thông thường. Không tuyên bố hoàn hảo, đã test hoặc đã phát hành khi chưa có bằng chứng.

## Đọc trước khi sửa

Đầu phiên đọc START_HERE.md, docs/11_ai/CURRENT_STATUS.md và docs/11_ai/CONTEXT_ROUTING.md. Trước mỗi task, kiểm tra dòng phạm vi liên quan trong docs/00_project/SCOPE.md, yêu cầu trong docs/00_project/REQUIREMENTS.md và giả định trong docs/00_project/DECISIONS.md; sau đó chỉ nạp đặc tả hệ thống và code liên quan. Khi sửa tài liệu hoặc gặp mâu thuẫn, đọc docs/00_project/DOCS_GOVERNANCE.md. Yêu cầu mới, rõ ràng của chủ dự án có ưu tiên cao nhất.

## Cách làm

- Nhận một task trong backlog; liệt kê tiêu chí chấp nhận, phạm vi file, rủi ro save/dữ liệu.
- Dùng hệ thống đang có; không tự thêm framework/server/analytics hoặc viết lại toàn repo.
- Logic kinh tế, thời gian, puzzle, quest là hàm domain có thể kiểm thử bằng clock và RNG được truyền vào.
- Số liệu từ data/, ID ổn định; không gọi API AI lúc chơi. Thời gian offline được tính khi mở lại, không giả định trình duyệt chạy liên tục.
- Thay đổi trạng thái qua command và transaction. UI và Phaser không trực tiếp sửa inventory, coins hoặc claimedRewards.
- Không xóa save để sửa lỗi. Thay schema phải có migration, fixture cũ và rollback phù hợp.
- Chạy kiểm tra đúng phạm vi; chạy build khi đổi phần tích hợp. Không đổi test để che lỗi.
- Cập nhật tài liệu bị ảnh hưởng, task status và handoff. Không đánh dấu cả milestone xong khi chỉ hoàn thành một task.

## Quyết định và phạm vi

Được chọn chi tiết nội bộ không làm thay đổi hành vi đã đặc tả. Các mục trong DECISIONS.md là baseline đề xuất, không tự biến thành yêu cầu đã được chủ dự án xác nhận. Ghi ADR nếu đổi kiến trúc hoặc hợp đồng công khai. Khi gặp yêu cầu mâu thuẫn hoặc lựa chọn có tác động lớn mà không có mặc định, đưa ra phương án cụ thể để chủ dự án quyết định. Không hỏi lại các hành động đã được giao.

Không push/publish/xóa dữ liệu người dùng/chạy dịch vụ trả phí chỉ vì prompt mẫu có đề cập. Phạm vi hành động theo yêu cầu hiện tại của chủ dự án và quyền công cụ.

## Báo cáo cuối task

Đã đổi gì; file chính; tiêu chí đạt/chưa đạt; lệnh đã chạy và kết quả; giới hạn kiểm chứng; task tiếp theo. Screenshot là bằng chứng giao diện, không thay thế kiểm tra save hoặc logic.
