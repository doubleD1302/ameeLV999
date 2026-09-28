# Bí ẩn trong khu vườn

**Giai đoạn:** P3.


Chuỗi tùy chọn: đọc journal → quan sát ba tượng hoa → đối chiếu ánh chiều trong game → tương tác góc đồi → tìm trang cuối. Clue là dữ kiện đã biên soạn, không phụ thuộc mặt trời thật hay dữ liệu mạng.

State là các flag hữu hạn; mỗi bước có trigger và fallback. Journal lưu clue đã thấy để đọc lại. Hint tăng từ gợi trang liên quan tới đánh dấu landmark. Assist vẫn mở main flag nếu câu chuyện cần, huy hiệu tự giải tách riêng.

Không dùng ngày kỷ niệm hoặc ảnh cá nhân chưa được cung cấp làm đáp án. Landmark nằm ở protected layer, người chơi không thể vô tình xóa hoặc chặn bằng decor.

QA: khám phá ngoài thứ tự được ghi nhận hợp lý, save/load ở từng bước, reset không mất key, bản dịch giữ quan hệ trái/phải, đường chính không softlock. Phải có người chơi thử để kiểm độ rõ của manh mối.
