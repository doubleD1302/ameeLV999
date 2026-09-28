# ADR 001: Khởi tạo Tech Stack và Khóa Dependency (Task T001)

- **Ngày kiểm tra & xác minh:** 28/09/2026
- **Trạng thái:** Chấp nhận (Accepted)
- **Phạm vi:** Khởi tạo kiến trúc nền tảng T001 theo đặc tả TECH_STACK.md và REFERENCE_SOURCES.md

## 1. Bối cảnh và Nguồn đối chiếu chính thức

Tại thời điểm triển khai task T001 (28/09/2026), nhóm phát triển đã tra cứu tài liệu và repository chính thức từ Phaser Studio và cộng đồng:
- **Phaser project template:** https://docs.phaser.io/phaser/getting-started/project-templates và https://github.com/phaserjs/template-vite-ts. Template chính thức đang sử dụng Phaser 4 và Vite 6 với TypeScript.
- **Phaser package on npm:** Phiên bản được gắn tag `latest` hiện hành là `4.2.1`.
- **Node runtime môi trường:** Node `v24.12.0`, npm `11.6.2`.

## 2. Quyết định kỹ thuật

1. **Khóa dependency chính xác (Exact Pinning):**
   - Tuyệt đối không dùng ký tự `^`, `~`, hoặc `latest/*` trong `package.json`.
   - Node runtime được khóa tại `.node-version` (`24.12.0`).
   - Tạo và cam kết `package-lock.json` để mọi cài đặt về sau tuân thủ `npm ci`.

2. **Danh mục phiên bản đã khóa:**
   - `phaser`: `4.2.1`
   - `vite`: `6.3.1`
   - `typescript`: `5.7.3`
   - `terser`: `5.39.0`
   - `vitest`: `3.0.7`
   - `@playwright/test`: `1.63.0`
   - `eslint`: `9.21.0`
   - `typescript-eslint`: `8.26.0`
   - `@types/node`: `22.13.9`

3. **Cấu trúc kiến trúc phân tầng (Clean Architecture):**
   - `src/domain/`: Mô hình thuần (Pure domain), reducer, state, luật chơi, không phụ thuộc framework UI hay browser API.
   - `src/application/`: Store trung tâm quản lý GameState, điều phối command và dispatching.
   - `src/adapters/`: Trừu tượng hóa clock (SystemClock), số ngẫu nhiên có seed (SeededRandom), lưu trữ (MemoryStorage, nền móng cho IndexedDB).
   - `src/content/`: Khung nạp và kiểm chuẩn nội dung.
   - `src/scenes/`: Phaser scenes (BootScene khởi tạo texture procedural, GardenScene hiển thị thế giới, xử lý tap/click và resize).
   - `src/ui/`: DOM/CSS HUD theo quyết định D03 (canvas vẽ thế giới, DOM xử lý điều khiển hỗ trợ tiếp cận).
   - `src/pwa/`: Khung đăng ký service worker offline.

4. **Kết quả Pilot Smoke Test:**
   - Scene placeholder + procedural texture + tap/click input + resize event: Đã kiểm chứng qua Playwright E2E browser test (`tests/e2e/smoke.spec.ts`) thành công.
   - Domain smoke test: Đã kiểm chứng qua Vitest (`tests/unit/domain.spec.ts`) đạt 5/5 test pass.
