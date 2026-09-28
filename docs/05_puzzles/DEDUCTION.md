# Suy luận vị trí

**Giai đoạn:** P3.


Ví dụ bốn chậu xếp hàng với clue “Tulip ở bên trái Lavender” hoặc “Rose không cạnh Daisy”. Clue được biên dịch từ JSON rule left_of, adjacent, not_adjacent, at_position; lời văn phải giữ đúng nghĩa của rule.

Move đổi hai chậu; thắng khi mọi constraint đúng. Với tối đa 8 đối tượng, solver có thể duyệt permutation có giới hạn để đếm nghiệm. Không chạy tìm kiếm vô hạn trên thiết bị. Reject đề mâu thuẫn hoặc nhiều nghiệm nếu tác giả hứa nghiệm duy nhất.

Hint giải thích một clue đang bị vi phạm, không bịa thêm clue mới. Giữ danh sách clue cạnh bảng; tăng khó bằng quan hệ suy luận chứ không yêu cầu nhớ toàn bộ câu.

Lưu permutation bằng instanceId. QA: phân biệt thứ tự hiển thị 1-based và index 0-based, hai chậu cùng loài vẫn có ID riêng, bản dịch không đổi nghĩa trái/phải, mọi đáp án hợp lệ đều được nhận.
