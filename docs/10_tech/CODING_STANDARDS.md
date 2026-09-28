# Quy ước code

TypeScript strict; tránh any không giải thích; runtime validation cho JSON nhập ngoài. Dùng discriminated union cho state/command/error. Tiền là integer; input count phải Number.isSafeInteger và >0; phép cộng có guard overflow.

Domain pure, time/RNG inject; không Date.now/Math.random rải trong reducer. Scene init/dispose đăng ký và hủy event rõ ràng. UI mở modal phải quản focus; không listener leak khi chuyển scene.

Một task đổi đủ nhỏ để review. Không thêm framework hoặc abstraction chung cho tính năng chưa có. Comment giải thích lý do/invariant, không lặp câu lệnh. Ưu tiên tên nghiệp vụ như readyAtSimMs thay vì x1/time2.

Test hành vi/rủi ro thực: idempotency, negative inventory, save rollback, solver. Không snapshot test hàng nghìn dòng mà không kiểm outcome. Không dùng skip để báo green. Mỗi lỗi sửa thêm regression khi có thể tái hiện ổn định.

Lint/typecheck không thay runtime schema. Test đơn vị không thay PWA cold launch hoặc mobile input. Lệnh chạy ghi ở README; agent báo rõ lệnh nào chưa thể chạy và nguyên nhân.
