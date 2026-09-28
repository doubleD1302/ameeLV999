# Quy trình làm việc với AI

1. Chọn task có prerequisites hoàn thành trong BACKLOG.csv. Viết task brief từ template; mặc định dựa vào baseline đã có.
2. AI khảo sát file/code, nhắc lại outcome và tiêu chí chấp nhận trong vài dòng. Chỉ hỏi khi thiếu quyết định lớn không có mặc định.
3. Triển khai một phần nhỏ có thể chạy. Không gộp refactor toàn repo và feature mới.
4. Chạy test phù hợp rồi integration/build khi cần. Nếu không có môi trường, báo rõ chưa kiểm, không tự đánh dấu done.
5. Review diff đối chiếu đặc tả: reward/save/offline/asset budget/accessibility. Sửa lỗi liên quan trực tiếp.
6. Cập nhật docs/data/schema nếu contract đổi, ghi handoff và bước tiếp. Chỉ task đạt DoD mới done.

Một phiên không cần tạo nhiều agent. Các vai designer/developer/reviewer có thể là từng lượt cùng công cụ. Nếu muốn giao song song sau này, phải chia ownership file và có integration review riêng; không có yêu cầu tự spawn trong bộ này.

Chủ dự án nên kiểm build định kỳ sau một vertical slice thay vì chờ toàn game. Sau mỗi playtest, chuyển phản hồi thành bug/feature có outcome, tránh prompt “đẹp hơn” không tiêu chí.
