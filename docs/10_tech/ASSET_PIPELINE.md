# Từ AI asset đến game

1. Tạo request theo templates/ASSET_REQUEST.md với assetId, category, footprint, output size, anchor, phase và references.
2. Ghép system → style → category → request → negative. Dùng cùng golden references đã duyệt; ghi model/tool, prompt revision và seed nếu công cụ hỗ trợ.
3. Sinh asset, kiểm alpha/padding/perspective/palette/silhouette. Regenerate hoặc chỉnh có ghi version nếu không đạt; không đánh dấu approved chỉ vì sinh xong.
4. Chuẩn hóa kích thước, crop/pivot, tách shadow, nén; tạo atlas bằng công cụ deterministic. Map collision, socket và label viết bằng data/code.
5. Điền file/hash/bytes/license metadata vào registry; QA trên nền sáng/tối ở kích thước hiển thị thật.
6. Build runtime manifest chỉ từ approved assets; check missing reference, duplicate ID và budget; cache gói PWA.

Không kỳ vọng AI đặt các frame/ô sprite đúng tuyệt đối trong một ảnh. Với animation, tạo keyframes riêng rồi căn chỉnh; chỉ pack sau khi tất cả frame kiểm đạt. Character cutout/skeletal là nhánh tùy chọn P2, không mặc định ép rig trong MVP.

Nguồn hình ảnh cao phân giải không đưa vào public. Không bỏ qua metadata vì game tặng riêng; cần biết file nào tái tạo được nếu mất hoặc phải chỉnh đồng bộ.
