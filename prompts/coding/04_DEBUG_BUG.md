# Prompt tìm và sửa lỗi

Lỗi: {{OBSERVED}}. Hành vi đúng: {{EXPECTED}}. Bước tái hiện: {{STEPS}}.
Môi trường/save fixture: {{ENVIRONMENT}}.

Đọc đặc tả trước, tái hiện bằng case nhỏ và kiểm nguyên nhân gốc. Nếu chưa tái hiện được, nói rõ bằng chứng đang có; không sửa ngẫu nhiên nhiều hệ thống.
Sửa phạm vi tối thiểu, thêm regression test khi nó bảo vệ hành vi thật. Không xóa save, bỏ schema validation hoặc tắt test để che lỗi. Kiểm lại các luồng liên quan và báo root cause, thay đổi, test, giới hạn.
