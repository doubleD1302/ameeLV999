# Prompt kiểm thử tính năng

Kiểm task {{TASK_ID}} theo {{SPEC_PATH}} và docs/12_qa.
Lập case từ tiêu chí chấp nhận và rủi ro thực; dùng fixed clock/RNG, fixtures cũ/không hợp lệ phù hợp. Chạy test thực tế, phân biệt unit/integration/browser/manual.

Kiểm ít nhất đường thành công, input không hợp lệ, reload/duplicate command và persistence nếu tính năng đổi state. Không tạo test chỉ lặp implementation hoặc assert true.
Báo lệnh, kết quả, bằng chứng và phần chưa kiểm. Không kết luận offline PWA đạt chỉ từ dev server.
