# Bắt đầu với Blooming Home

**Tên làm việc:** Blooming Home — Khu Vườn Đợi Nở. **Phiên bản bộ tài liệu:** 1.0.1, ngày 28/09/2026.

Đây là bộ đặc tả, dữ liệu mẫu và công cụ chuẩn bị phát triển; chưa phải game chạy được. Các quyết định chưa xuất hiện trong [yêu cầu đã xác nhận](docs/00_project/REQUIREMENTS.md) là baseline đề xuất, có thể đổi theo chỉ dẫn của chủ dự án và bằng chứng chơi thử.

## Bắt đầu theo thứ tự

1. Giải nén bộ tài liệu vào repo game hoặc một thư mục làm việc riêng. Nếu repo đã có code, kiểm tra trạng thái repo và không ghi đè source hiện tại.
2. Đọc [quy tắc cho coding agent](AGENTS.md), [trạng thái hiện tại](docs/11_ai/CURRENT_STATUS.md), [yêu cầu](docs/00_project/REQUIREMENTS.md), [phạm vi](docs/00_project/SCOPE.md) và [quyết định/giả định](docs/00_project/DECISIONS.md). Dùng [bản đồ ngữ cảnh](docs/11_ai/CONTEXT_ROUTING.md) để chỉ nạp tài liệu liên quan đến task.
3. Chạy `python3 tools/validate_pack.py` và `python3 tools/reference_checks.py`. Các lệnh này kiểm tra bộ tài liệu/dữ liệu và một số luật tham chiếu; chúng không kiểm tra game.
4. Giao [prompt khởi tạo dự án](prompts/coding/01_BOOTSTRAP_PROJECT.md) để coding agent làm task T001 trong [backlog](docs/13_production/BACKLOG.csv). Chưa chạy lệnh `npm` cho đến khi T001 tạo `package.json` và lockfile.
5. Làm từng task nhỏ trong P0. Yêu cầu agent báo file thay đổi, lệnh đã chạy, kết quả và phần chưa kiểm chứng. Chỉ mở rộng sau khi vertical slice qua cổng nghiệm thu trong SCOPE và các test tương ứng trong docs/12_qa/TEST_PLAN.md.

## Chọn tài liệu theo việc đang làm

- Muốn hiểu trải nghiệm game: [GDD](docs/01_design/GDD_MASTER.md), [cốt truyện](docs/06_story/STORY_BIBLE.md), [bản đồ](docs/02_world/WORLD_MAP.md).
- Muốn giao code: [quy trình AI](docs/11_ai/WORKFLOW.md), [kiến trúc](docs/10_tech/ARCHITECTURE.md), [định nghĩa hoàn thành](docs/13_production/DEFINITION_OF_DONE.md).
- Muốn tạo asset: [Art Bible](docs/07_art/ART_BIBLE.md), [pipeline asset](docs/10_tech/ASSET_PIPELINE.md) và [hướng dẫn prompt](asset_prompts/README.md). Prompt asset bằng tiếng Anh; tài liệu thiết kế bằng tiếng Việt.
- Muốn sửa số liệu: chỉnh JSON trong `data/`, kiểm tra [hợp đồng dữ liệu](docs/10_tech/DATA_CONTRACTS.md), rồi chạy validator.
- Muốn tìm file: dùng [FILE_INDEX](FILE_INDEX.md).

Không nạp cả bộ tài liệu vào mọi prompt. Asset có trạng thái `planned` chưa phải asset đã sinh hoặc được duyệt; hãy hoàn thành P0 và duyệt hình mẫu trước khi tạo theo lô.

## Baseline cần nhớ

Mục tiêu là web app một người chơi, hoạt động offline sau khi tải/cài cache, dùng tiếng Việt, hình 2D chibi cartoon và điều khiển chuột/chạm. Game không gọi AI khi người chơi đang chơi; AI hỗ trợ phát triển và tạo asset. Các thông số kinh tế cần playtest.

Không tự bịa tên người nhận, thư riêng hoặc ngày kỷ niệm. Cá nhân hóa mặc định tắt cho đến khi có nội dung thật.

## Nội dung có trong gói

Gói gồm đặc tả P0–P3, dữ liệu khởi đầu, schema, save mẫu, chứng cứ lời giải puzzle, prompt thiết kế/code/art/audio, tiêu chí nghiệm thu, backlog và công cụ kiểm tra. Chưa có source game, asset được duyệt, bản build hay kết quả chơi thử. Xem [báo cáo QA của bộ tài liệu](QA_REPORT.md) để biết phạm vi đã và chưa kiểm.
