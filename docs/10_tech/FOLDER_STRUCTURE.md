# Cấu trúc repo khi bắt đầu code

Bộ tài liệu hiện có giữ nguyên tại root. Coding agent thêm source game vào cùng repo:

~~~text
src/
  domain/        state, commands, reducers, rules, puzzle engines
  application/   command queue, lifecycle, selectors
  adapters/      indexeddb, wall clock, monotonic clock, seeded RNG
  content/       loaders and runtime validation
  scenes/        boot, garden, puzzle; shared render components
  ui/            HUD, dialogs, journal, settings, focus management
  pwa/           registration and offline readiness
public/
  assets/        approved runtime assets only
tests/
  unit/
  integration/
  e2e/
~~~

data/ và schemas/ hiện có trở thành input build. Có thể copy/chuyển sang src/content bằng task rõ ràng và sửa mọi link/import; không để hai catalog cùng được chỉnh.

Asset nguồn và bản bị loại đặt ngoài public/; registry planned được giữ như kế hoạch, chỉ approved đi vào runtime manifest. Không đưa file source đồ họa, prompt riêng tư hoặc toàn transcript ý tưởng vào bundle.

Tên file code dùng kebab-case; type PascalCase; ID content snake_case. Có một entrypoint composition root tạo adapter và state store. Test đặt cùng convention, không lẫn script kiểm tra tài liệu với tests runtime.
