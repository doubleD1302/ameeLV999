# Công nghệ và cách khóa phiên bản

Baseline: TypeScript strict, Vite, Phaser cho world/puzzle render; HTML/CSS cho UI; IndexedDB native qua một adapter Promise nhỏ; vite-plugin-pwa/Workbox cho cache; Vitest cho domain; Playwright cho browser flows. Không chọn React mặc định để tránh hai cây state; chỉ thêm bằng ADR nếu cần về sau.

Không khóa số phiên bản framework trong bộ tài liệu này. Tại T001, đối chiếu tài liệu chính thức và package/template hiện hành, ghi ngày kiểm tra cùng phiên bản đã chọn vào ADR, rồi chạy scene + texture + input + resize smoke test trước khi khóa dependency. Không giả định API giữa các major tương thích. Nếu major đang được hỗ trợ không đạt pilot, ghi ADR cùng bằng chứng để chọn phương án khác.

Chưa cung cấp package.json/lockfile vì đây là bộ tài liệu và chưa chạy bootstrap. T001 phải ghi phiên bản exact dependency (không latest/*), Node runtime, package manager, commit lockfile. Từ đó dùng npm ci. Lệnh dev/build/test chuẩn trong README phải tồn tại và được kiểm tra.

Cấu trúc future src/: domain/, application/, adapters/storage/, adapters/clock/, adapters/random/, content/, scenes/, ui/, pwa/. Content validator dùng JSON Schema 2020-12 với thư viện phù hợp; không dùng script Python mẫu như validator runtime.

Bất kỳ dependency mới phải có mục đích, kích thước bundle, tác động offline và khả năng bảo trì. Không thêm backend, Firebase hay dịch vụ AI chỉ để lưu một game local. Nguồn kỹ thuật: REFERENCE_SOURCES.md; mọi lựa chọn kiến trúc ở đây là đề xuất dự án.
