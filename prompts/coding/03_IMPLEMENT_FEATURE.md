# Prompt triển khai một tính năng

Thực hiện task {{TASK_ID}} theo đặc tả {{SPEC_PATH}} và tiêu chí {{ACCEPTANCE_CRITERIA}}.
Đọc AGENTS.md và code liên quan; sử dụng data nguồn. Phạm vi được sửa: {{ALLOWED_SCOPE}}.
Ràng buộc cần giữ: {{INVARIANTS}}.

Triển khai thay đổi nhỏ hoàn chỉnh từ input đến persist/render. Logic domain phải test được với clock/RNG inject. Bảo vệ transaction, reward claims và compatibility. Nếu scope thiếu file cần đổi để task chạy đúng, nêu lý do và chỉ mở rộng phạm vi cần thiết.

Chạy {{VALIDATION_COMMANDS}}, kiểm UI nếu thay giao diện, cập nhật tài liệu bị ảnh hưởng. Báo rõ kết quả và test chưa chạy; không chỉ trả code rời để tôi tự ghép.
