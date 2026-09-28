# Cá nhân hóa món quà

Cá nhân hóa là lớp tùy chọn, giữ game chơi được khi tắt. data/personalization.json có enabled=false, recipientName rỗng và các nội dung riêng rỗng. Đây là trạng thái hợp lệ, không phải lỗi cần AI bịa để điền.

Có thể đặt tên nhân vật/pet, hoa kỷ niệm, trang thư cuối, bảng tên vườn và ngày quan trọng. Không yêu cầu ảnh thật; nếu có phải được chủ dự án cung cấp và đồng ý đưa vào gói game. Mọi file phân phối offline đều có thể đọc từ bundle; không giấu bí mật nhạy cảm hoặc API key trong đó.

Tên nhập tối đa 24 ký tự hiển thị; lưu Unicode, render textContent; không coi chữ người dùng nhập là HTML. Không giới hạn chỉ chữ Latin. Có nút đổi tên trong settings.

Secret letter mở bằng flag late_story, không yêu cầu người chơi đoán thông tin đời tư. Dùng templates/PERSONAL_LETTER.md để chủ dự án điền. Lời AI viết phải là gợi ý, không khẳng định kỷ niệm có thật.

QA: bật/tắt giữa game không reset save; tên dài/emoji/dấu tiếng Việt không tràn; nội dung rỗng dùng bản chung; không hiện câu {{placeholder}} trên UI.
