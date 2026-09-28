# Bàn giao 28/09/2026

Phase/task/branch: P0 / T001 Khởi tạo TypeScript/Vite/Phaser / main

Đã hoàn thành:
- Xác minh tài liệu chính thức hiện hành: Phaser 4 (`4.2.1`), Vite 6 (`6.3.1`), TypeScript (`5.7.3`), Vitest (`3.0.7`), Playwright (`1.63.0`), Node runtime `v24.12.0`.
- Khóa toàn bộ dependency chính xác (exact versions) trong `package.json` và cam kết `package-lock.json`; ghi nhận Node runtime tại `.node-version`.
- Tạo cấu trúc thư mục source game theo kiến trúc `FOLDER_STRUCTURE.md` (`domain`, `application`, `adapters`, `content`, `scenes`, `ui`, `pwa`).
- Xây dựng composition root và prototype scene: `BootScene` tạo procedural placeholder texture; `GardenScene` hiển thị lưới thế giới, plot và hoa mẫu; xử lý tap/click input và co giãn màn hình (`resize`).
- Xây dựng DOM/CSS HUD theo quyết định D03 (canvas render thế giới, HTML/CSS lo điều khiển), hiển thị tiền vàng, lượt tương tác, thời gian mô phỏng và nút chăm sóc kết nối qua application store.
- Viết domain smoke test có ý nghĩa (5 test cases) kiểm tra trạng thái khởi tạo, reducer, luật credit thời gian offline 8h, và seeded RNG.
- Viết browser e2e smoke test với Playwright kiểm tra khởi tạo canvas, render HUD, tap input trực tiếp và co giãn màn hình.
- Thêm đầy đủ 8 npm scripts: `dev`, `build`, `preview`, `typecheck`, `lint`, `test`, `test:e2e`, `validate:data`.
- Soạn thảo ADR 001 tại `docs/10_tech/ADR_001_BOOTSTRAP_STACK.md`.
- Đánh dấu hoàn thành task T001 trong `docs/13_production/BACKLOG.csv`.

Đang làm: Chuẩn bị chuyển sang task tiếp theo T002.

File thay đổi:
- `package.json`
- `package-lock.json`
- `.node-version`
- `.gitignore`
- `tsconfig.json`
- `vite.config.ts`
- `eslint.config.js`
- `playwright.config.ts`
- `index.html`
- `public/style.css`
- `src/domain/types.ts`
- `src/domain/initial-state.ts`
- `src/domain/reducer.ts`
- `src/application/store.ts`
- `src/adapters/clock/system-clock.ts`
- `src/adapters/random/seeded-random.ts`
- `src/adapters/storage/memory-storage.ts`
- `src/content/loader.ts`
- `src/scenes/boot-scene.ts`
- `src/scenes/garden-scene.ts`
- `src/ui/hud.ts`
- `src/pwa/register.ts`
- `src/main.ts`
- `tests/unit/domain.spec.ts`
- `tests/e2e/smoke.spec.ts`
- `tools/validate_pack.py` (loại trừ `node_modules`, `.git`, `dist` khi kiểm tra link markdown)
- `docs/10_tech/ADR_001_BOOTSTRAP_STACK.md` (mới)
- `docs/13_production/BACKLOG.csv` (T001 -> done)
- `docs/11_ai/CURRENT_STATUS.md` (cập nhật bàn giao)
- `README.md` (cập nhật lệnh thực tế)

Lệnh đã chạy/kết quả:
- `npm run typecheck`: **PASS** (`tsc --noEmit` không có lỗi)
- `npm run lint`: **PASS** (`eslint .` đạt chuẩn)
- `npm run test`: **PASS** (Vitest: 5/5 unit test domain pass)
- `npm run test:e2e`: **PASS** (Playwright Chromium: canvas, input, HUD, resize đạt)
- `npm run validate:data`: **PASS** (`validate_pack.py` và `reference_checks.py` pass 100%)
- `npm run build`: **PASS** (đóng gói production thành công)
- `npm ci`: **PASS** (cài đặt sạch từ lockfile thành công)

Lệnh chưa chạy:
- `npm run dev`: **NOT_RUN** (tiến trình máy chủ phát triển nền, chạy khi dev tương tác).
- `npm run preview`: **NOT_RUN** (tiến trình máy chủ xem trước, đã kiểm chứng gián tiếp qua build và e2e test).
- `git push`: **NOT_RUN** (chưa có chỉ thị publish từ chủ dự án, tuân thủ quy tắc AGENTS.md).

Lỗi chưa giải quyết: Không có. Đã thỏa mãn toàn bộ tiêu chí nghiệm thu của T001 theo DoD.

Quyết định mới: [ADR 001](../10_tech/ADR_001_BOOTSTRAP_STACK.md).

Bước tiếp theo: Nhận lệnh thực hiện task T002 trong [BACKLOG](../13_production/BACKLOG.csv) (Load và validate content: schema và reference checks, chặn content không hợp lệ theo [DATA_CONTRACTS](../10_tech/DATA_CONTRACTS.md)).
