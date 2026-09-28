# Nguồn kỹ thuật và phạm vi sử dụng

Các URL dưới đây là nguồn chính thức để xác minh cơ chế nền tảng; việc ghi URL không bảo đảm phiên bản hoặc API hiện tại. Tại T001, coding agent phải mở và kiểm tra nguồn trước khi chọn dependency, ghi ngày kiểm tra và phiên bản đã pin trong ADR. Các budget/luật game là lựa chọn của dự án.

- Phaser project templates: https://docs.phaser.io/phaser/getting-started/project-templates — chọn template phù hợp, kiểm API theo major thực.
- Phaser API: https://docs.phaser.io/ — xác minh major/API được hỗ trợ tại thời điểm bootstrap; pin và smoke test trước khi triển khai hệ thống.
- Service Worker API: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API — offline cache qua worker và secure context; không coi worker là tiến trình game luôn chạy.
- IndexedDB: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API — lưu dữ liệu có cấu trúc phía client.
- IDBTransaction: https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction — commit/abort transaction cho thao tác dữ liệu.
- Storage quota/eviction: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria — browser có thể giới hạn/thu hồi dữ liệu; cần đường export.
- Web Locks: https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API — điều phối cùng origin, kiểm capability.
- Vite PWA prompt update: https://vite-pwa-org.netlify.app/guide/prompt-for-update — chọn thời điểm cập nhật có kiểm soát.
- JSON Schema: https://json-schema.org/draft/2020-12/schema — identifier của chuẩn schema dùng trong bộ dữ liệu, chưa tải library runtime.

Không có benchmark hoặc cam kết tương thích trình duyệt trong các link này cho riêng game. T001 và release QA phải xác minh môi trường thực tế; ghi nguồn/version mới vào đây khi thay.
