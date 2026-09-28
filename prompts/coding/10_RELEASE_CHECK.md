# Prompt kiểm tra phát hành

Chuẩn bị bản {{RELEASE_PHASE}}. Đọc RELEASE_RUNBOOK, DEFINITION_OF_DONE, PLATFORM_SUPPORT và QA_REPORT mới nhất.
Xác nhận commit/build/content/schema versions; chạy checks và build; kiểm offline cold start, save migration/import, asset completeness, responsive/audio.

Tạo RELEASE_REPORT có pass/fail/not_run và bằng chứng. Xác định rollback có tương thích save không. Không ghi mọi thiết bị pass nếu chỉ emulation. Chỉ publish nếu yêu cầu hiện tại của tôi có bao gồm publish; nếu chưa, dừng ở gói build đã kiểm.
