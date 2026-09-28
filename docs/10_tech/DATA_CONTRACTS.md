# Hợp đồng dữ liệu nội dung

data/ có contentVersion=0.1.0 trong config.json. Mọi file JSON có schema tương ứng hoặc được mô tả như fixture/template. Validate schema rồi validate quan hệ giữa các catalog, rồi kiểm điều kiện gameplay.

ID ASCII snake_case, ổn định và duy nhất trong namespace. Item id seed_daisy khác flower id daisy. Giá/counter là số nguyên không âm; durationSeconds là giây, timestamps/simTime là milliseconds. Không lưu NaN/Infinity, không dùng decimal cho coins.

Không đưa hàm JavaScript, URL tùy ý hoặc HTML vào content. Chỉ engineType và rule enum từ allowlist. Điều kiện quest dùng condition có kind và target/count; không eval chuỗi. Unknown field trong schema chính bị từ chối để bắt typo.

Mỗi flower liên kết seedItemId, harvestItemId, unlockFlag và assetPrefix. Mỗi recipe trỏ tới item có thật, không tạo vòng craft sinh lời vô hạn. Upgrade có prerequisites, costs, grantsFlags; graph không cycle. Decor có footprint và hợp lệ trên một layer. Puzzle trỏ engine, board và chứng cứ lời giải.

Registry planned chỉ là kế hoạch asset; runtime build fail nếu một asset bắt buộc chưa có file approved. Các file của bản mở rộng chưa triển khai có thể ở planning catalog riêng, không lẫn vào catalog release đang bật.

Schema và TypeScript ở contracts/domain.ts cần đồng bộ. tests kiểm invalid fixture để validator thật sự bắt lỗi, không chỉ chấp nhận mọi JSON.
