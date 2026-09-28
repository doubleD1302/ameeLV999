# Kiểm soát thay đổi và lệch thiết kế

Thay đổi nhỏ không chạm contract: thực hiện trong task và ghi changelog. Thay luật timer/kinh tế: cập nhật data, economy report và test liên quan. Thay schema/ID: phải có migration và fixture. Thay camera/style: golden references và batch review. Thay scope/stack: ADR ghi lý do, lựa chọn và tác động.

Nếu AI nhận thấy tài liệu mâu thuẫn, xác định hai file và ảnh hưởng cụ thể; giải quyết theo DOCS_GOVERNANCE. Không tạo “phiên bản đúng” thứ ba ở file mới rồi bỏ cả hai file cũ.

Không tự phê duyệt kết quả thị giác chưa nhìn, không ghi “production-ready” khi asset mới generated. Khi milestone trễ, giảm scope tùy chọn bằng quyết định rõ, không bỏ test bảo vệ save.

Task kết thúc khi outcome đạt hoặc blocker đã mô tả đủ tái hiện. Giữ bản chơi được trước refactor lớn và không xóa fixture cũ để làm migration pass.
