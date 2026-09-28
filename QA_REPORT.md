# Kiểm tra bộ tài liệu — 28/09/2026

**Kết quả:** PASS cho các kiểm tra bộ tài liệu/dữ liệu được liệt kê bên dưới; đã chạy lại sau lần rà soát tài liệu 1.0.1.
Đây là kiểm tra package kiến thức, không phải chứng nhận một game đã được triển khai.

## Kết quả đã chạy

| Kiểm tra | Kết quả |
|---|---|
| tools/validate_pack.py | PASS; 31 file được kiểm theo schema subset của bộ mẫu |
| Puzzle proof | PASS; 9/9 level memory/sliding/pipe có chứng cứ lời giải hợp lệ |
| Invalid save fixtures | PASS; 5/5 bị từ chối, bao gồm JSON hỏng/phiên bản lạ/item lạ/coins âm/claim trùng |
| Map navigation tĩnh | PASS; 2 map đi từ spawn tới các điểm tương tác/plot được |
| Quest/upgrade/task dependencies | PASS; ID hợp lệ và không có vòng lặp trong graph được kiểm |
| Backlog | 40 task có spec và dependency hợp lệ; trạng thái code đều todo |
| Asset/animation references | 297 request ảnh/frame, 40 clip, 14 cue audio; tất cả vẫn planned |
| tools/reference_checks.py | PASS; 7 boundary thời gian, resume lặp, migration giữ tài sản, mốc cây chín, không auto-harvest, claim một lần và negative pipe case |
| tools/economy_report.py | PASS; đã xuất CSV lợi nhuận lý thuyết mỗi lứa |
| tools/compose_asset_prompt.py | PASS; mẫu prompt ghép không còn biến category chưa điền |
| Markdown links / UTF-8 | PASS; 348 link tương đối tồn tại, không ký tự thay thế lỗi encoding |

## Chưa được kiểm trên game

Runtime game, IndexedDB transaction/concurrency thật, PWA trên browser/thiết bị thật, art alpha/animation, audio loop, hiệu năng và trải nghiệm chơi: **NOT_RUN** vì chưa có source game hoặc asset đã sinh.
TypeScript contracts: **chưa typecheck** trong môi trường này vì không có compiler; phải kiểm tại T001 sau bootstrap.
Validator Python chỉ triển khai các keyword schema được dùng trong bộ mẫu, không phải toàn bộ JSON Schema Draft 2020-12.

## Phạm vi nội dung

Có 302 file, trong đó 222 Markdown và 76 tài liệu/prompt về asset. Folder gồm đặc tả cả P0–P3; data mẫu chủ yếu cho MVP và một số catalog minh họa tương lai. Chưa có đủ 48 hoa / 8 chương thoại hoàn chỉnh của bản P3, chưa có hình/nhạc đã duyệt, chưa có bản build hay deploy.

Tên làm việc, stack, số liệu và nội dung mới là baseline đề xuất. Nội dung cá nhân hóa tắt khi chưa có dữ liệu thật. Quyền quyết định thiết kế thuộc chủ dự án.

Xem logs trong reports/ và công cụ trong tools/. Khi chỉnh bộ tài liệu, chạy kiểm lại rồi cập nhật report; không giữ nhãn PASS cũ cho nội dung đã thay.
