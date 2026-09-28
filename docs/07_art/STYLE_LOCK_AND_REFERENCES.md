# Khóa style và reference

Trước sinh hàng loạt, tạo một bộ golden references có trạng thái approved và ảnh composite đặt các đối tượng cạnh nhau ở kích thước game. Không dùng seed như bảo đảm identity; tool có thể không hỗ trợ hoặc thay model.

Mỗi request phải ghi reference IDs, phiên bản style, palette, camera, scale và điểm nhận diện chủ thể. Khi công cụ không đọc reference, không giả vờ đã dùng; dùng text consistency nhưng gắn cần kiểm thêm.

Tiêu chí duyệt: cùng hướng sáng/camera; đầu-body ratio phù hợp; texture ít; silhouette rõ; không chữ/rác; không crop; số chi đúng; state restoration có cùng footprint. Chỉ một lỗi identity/geometry nghiêm trọng là reject.

Khi thay style: tạo revision mới, thử lại golden set, so sánh12 asset đại diện, đánh giá chi phí regenerate. Không cho một batch mới tự đổi toàn game. Ghi prompt/model/seed/edits để tái tạo gần đúng; tái tạo bit-identical không được hứa.
