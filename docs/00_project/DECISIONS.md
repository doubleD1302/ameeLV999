# Quyết định và giả định thiết kế

Tất cả hàng D là baseline đề xuất để AI triển khai mà không phải hỏi lại mỗi chi tiết; chưa hàng nào được xem là yêu cầu đã xác nhận trừ khi chủ dự án xác nhận riêng. Chủ dự án có thể thay; ghi thay đổi vào ADR và cập nhật các file phụ thuộc.

| ID | Mặc định | Vì sao / hệ quả |
|---|---|---|
| D01 | Blooming Home / Khu Vườn Đợi Nở là tên làm việc | Không phải tên thương hiệu đã chốt |
| D02 | Người thân là bà ngoại, sống ở nơi khác | Giữ không khí ấm áp, không áp đặt mất mát |
| D03 | Phaser + TypeScript + Vite; DOM/CSS cho UI | Một domain store; canvas lo thế giới, HTML lo điều khiển dễ tiếp cận |
| D04 | Tại T001, xác minh major Phaser còn được hỗ trợ từ tài liệu chính thức; pin phiên bản chính xác sau smoke test | Phiên bản framework thay đổi theo thời gian; không dựa vào số phiên bản trong snapshot tài liệu hoặc giả định API giữa các major tương thích |
| D05 | Lưới vuông 64 đơn vị; camera chếch nhìn từ trên, không isometric diamond | Dễ va chạm, placement và asset consistency |
| D06 | Idle tối đa 8 giờ/lần resume; cây không chết, không tự thu hoạch/replant | Hạn chế vòng lặp vô hạn và áp lực online |
| D07 | Puzzle có hint miễn phí, hỗ trợ hoàn thành; không chặn main story bằng kỹ năng cao | Thử thách nằm ở huy hiệu tùy chọn |
| D08 | 1 slot save chính, 3 bản quay vòng, export/import JSON | Đơn giản cho người chơi và phục hồi |
| D09 | 60 phút simulation cho chu kỳ sáng/tối; cooldown quan hệ 6 giờ simulation | Lịch NPC mang tính không khí, không khóa truyện theo giờ thật |
| D10 | Việt ngữ trước, UI text tách theo key | Không ghép chữ vào ảnh |
| D11 | AI tạo asset lúc phát triển; runtime không dùng model/API | Chơi offline và tránh phụ thuộc dịch vụ |
| D12 | Chưa chọn hosting cụ thể | BUILD_AND_DEPLOY đưa yêu cầu portable; chỉ publish khi được yêu cầu |

Số giá/timer trong data/config.json và catalog là đề xuất, phải được cân bằng qua playtest. Chọn chủ thể/thư/ngày cá nhân hóa theo dữ liệu thật của chủ dự án; khi chưa có thì tắt tính năng. Không biến thông tin còn thiếu thành ký ức giả.
