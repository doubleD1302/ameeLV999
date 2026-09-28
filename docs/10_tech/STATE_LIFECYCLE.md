# Trạng thái ứng dụng và lifecycle

Booting → loading_content → opening_save → migrating (nếu cần) → reconciling_time → ready. Lỗi không được bỏ qua để tạo save trắng. Nếu chưa có save thật mới dùng fixture khởi đầu và đổi wall anchor sang thời gian thật.

Ready có world/puzzle/modal; chỉ một modal nhận input. Khi tab hidden: dừng input, commit thời gian phiên hiện tại nếu có thể, pause render/audio. Khi visible: đọc lại revision và reconcile thời gian rồi mới cho tương tác. Không dựa vào beforeunload để bảo vệ save; mỗi economic command đã được commit ngay.

Thời gian hiển thị trong scene là view. Simulation clock ở domain. Autosave checkpoint 15 giây khi visible để giữ thời gian/điểm đứng; hành động kinh tế không chờ autosave. Nếu checkpoint lỗi, báo “Chưa lưu được”, giữ snapshot đã commit và cho export bộ nhớ sau giải thích.

Update-ready không tự reload. Người chơi chọn cập nhật; hoàn tất/pause command queue, export backup tùy chọn, đợi commit thành công rồi activation/reload. Nếu đang trong transaction hoặc storage lỗi, trì hoãn update.

Khi lỗi render: recovery UI có tải lại, xuất bản lưu hiện có, đọc lại hướng dẫn. Không có nút “xóa dữ liệu” làm hành động chính. Reset có xác nhận riêng và đề nghị xuất backup.
