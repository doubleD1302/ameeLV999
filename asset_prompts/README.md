# Cách dùng hệ thống prompt asset

Folder này chứa system prompt, khóa style, prompt theo nhóm và yêu cầu mẫu đã điền. Prompt không phải asset hình ảnh đã sinh. Không cần nạp toàn bộ: chọn đúng category.

Chuỗi chuẩn: 00_SYSTEM/ASSET_GENERATION_SYSTEM_PROMPT.md → 01_GLOBAL_STYLE/MASTER_STYLE_PROMPT.md → category master → request cụ thể → 01_GLOBAL_STYLE/NEGATIVE_PROMPT.md. Với animation/building cần thêm quy tắc chuyên biệt tương ứng.

~~~sh
python tools/compose_asset_prompt.py asset_prompts/example_request.json
~~~

Lệnh in prompt đã ghép để bạn đưa vào công cụ tạo ảnh, không gọi API và không tốn phí. Gắn golden references thật khi đã được duyệt; chưa có thì tạo pilot, không giả vờ reference đã tồn tại.

Bắt đầu golden set: player, Momo, Lily, houseS0/S1, Daisy5 stages, bench, một composite. Chốt camera/tỷ lệ trước sinh hàng loạt. Phần19_QA hỗ trợ review nhưng người/công cụ phải thực sự xem/đo ảnh.

Âm thanh dùng21_AUDIO riêng, không nhét prompt nhạc vào image model. Chữ tiếng Việt của UI/journal render bằng code. Map metadata/collision và sprite packing làm bằng công cụ deterministic, không tin AI đã xuất chính xác lưới.
