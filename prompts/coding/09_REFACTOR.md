# Prompt refactor có giới hạn

Refactor {{TARGET_MODULE}} để giải quyết {{CONCRETE_PROBLEM}}. Giữ hành vi công khai, data IDs và save schema.
Đọc test/spec hiện có, mô tả ranh giới thay đổi. Thực hiện từng bước kiểm được, ưu tiên xóa duplication cụ thể thay vì thêm framework.

Chạy regression liên quan và build; so outcome trước/sau bằng fixture. Không gộp feature mới hoặc cân bằng kinh tế. Nếu cần đổi contract, dừng phần đó để lập ADR cụ thể, còn thay đổi an toàn được tiếp tục.
