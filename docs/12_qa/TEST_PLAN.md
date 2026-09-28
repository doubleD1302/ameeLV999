# Chiến lược kiểm thử

Unit: reducer kinh tế, timer, puzzle rules, migration, validation. Integration: command→transaction→event, quest reward, two-tab revision. Browser: load/import/export, cold offline, update, modal/input. Manual: art, tone, readability, real-device audio/storage và cảm giác puzzle.

Gate P0 cần core loop/save/idle/memory/offline; P1 thêm 3 engine/decor/NPC/UI/assets. P2/P3 bổ sung schema/migration cùng feature; không dùng thiếu tính năng tương lai để báo P0 fail.

Ưu tiên S0 mất dữ liệu và S1 blocker trước polish. Regression bắt buộc sau sửa save, inventory, command reducer, PWA hoặc puzzle reward. Không cần full suite sau chỉnh một câu thoại nếu schema/reference và view kiểm đủ.

Mỗi test có ID, requirement, fixture, steps, expected, phase, automation và evidence. Case mẫu ở TEST_CASES.csv. Pass có build/version/lệnh; chưa chạy là NOT_RUN, không “dự kiến pass”.
