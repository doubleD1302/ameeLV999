# Chữ giao diện và bản địa hóa

Mọi text có key, không hardcode trong sprite hay template prompt. vi là nguồn đầu, JSON UTF-8. Tên player/pet/garden chèn bằng formatter an toàn. Số dùng định dạng vi-VN ở UI, lưu integer raw.

Các câu chuẩn: “Chưa đủ hạt.”, “Hoa chưa nở xong.”, “Đã sửa cửa sổ.”, “Chưa lưu được. Bạn có thể thử lại hoặc xuất bản lưu.”, “Đã sẵn sàng chơi offline.” Chỉ dùng câu cuối khi cache completeness thực sự đạt.

Confirm giao dịch dùng động từ cụ thể: Mua 3 hạt / Sửa cửa sổ / Nhận phần thưởng. Confirm reset nói phạm vi bị mất, không chỉ “Bạn chắc chứ?”. Đừng dùng error code kỹ thuật làm chữ chính.

Tooltip timer hiển thị “Còn 8 phút”, khi zero là “Có thể thu hoạch”. Không làm tròn về0 trước khi domainready. Tin nhật ký phải xem lại được nếu toast trôi qua.

English có thể thêm sau nhưng test pseudo-localization dài150% trước để tránh hardwidth. Dialogue/script trong docs là nguồn biên tập, runtime dùng key/JSON. Không trích text từ ảnh AI.
