# Bảng logic hoa

**Giai đoạn:** P2.


Bảng Latin 4 × 4 với 4 symbol: mỗi hàng và mỗi cột chứa mỗi symbol đúng một lần. Không tự thêm quy tắc khối Sudoku nếu đề không nói. Ô fixed không sửa. Bảng 6 × 6 chỉ đưa vào P3 sau khi kiểm solver và khả năng đọc.

Move đặt hoặc xóa symbol tại ô trống. Thắng khi mọi hàng/cột thỏa luật, không bắt buộc giống một đáp án mẫu. Nếu level hứa chỉ có một nghiệm, solver phải đếm được đúng một; một certificate chỉ chứng minh tồn tại.

Hint mức 1 chỉ chỗ trùng; mức 2 cho candidates của một ô; mức 3 giải thích một bước suy luận. Một thao tác sai không reset toàn bảng. Lưu cell inputs và notes nếu có.

Các hoa khác nhau bằng silhouette và label, không chỉ màu. QA: sửa ô fixed, symbol lạ, bảng đầy nhưng sai, nhiều nghiệm có chủ ý, resize và điều khiển bàn phím.
