# Dữ liệu và an toàn ứng dụng

Game mặc định không login, analytics, ads, upload save hay gọi model. Toàn bộ network cần thiết là tải/update gói từ cùng origin. Nếu cần dịch vụ khác phải có yêu cầu rõ và ADR, đồng thời sửa hợp đồng offline.

Không đặt API key/token/password/thư nhạy cảm vào JS hoặc JSON bundle. Build offline có thể bị đọc; personalization không phải kho bí mật. Ghi log local dạng dev, không upload toàn save.

Import JSON giới hạn kích thước, kiểm kiểu/range/reference/version; chống key __proto__/constructor/prototype khi merge object; dùng map hoặc object an toàn. Không eval content, không innerHTML cho tên, thư và thoại. Không deserialize hàm.

CSP self cho script/assets khi hosting hỗ trợ; quyền camera/mic/geolocation không cần. Dependency pin, xem license và audit khi build release; không tự nâng major chỉ vì audit đề xuất.

Xóa save là hành động riêng có xác nhận và đề nghị export. Reset game không xóa tùy tiện cache của site khác. Các biện pháp này xử lý dữ liệu local thực tế, không thêm onboarding xin quyền không cần thiết.
