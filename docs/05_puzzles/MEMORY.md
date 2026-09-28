# Memory — mở hộp hạt

**Giai đoạn:** P0/P1.


Board là deck 8/12/16 card (4/6/8 pairs). Symbol vừa có hình vừa có label khác nhau. Move chọn một index chưa matched và chưa face-up; tối đa2 card lật. Cặp bằng nhau matched vĩnh viễn, sai thì lật lại sau delay hiển thị; domain phải lưu cặp đang mở để resume nhất quán.

Win khi mọi index matched. Deck tạo trước và lưu seed; không shuffle sau mỗi lần lật. Click card matched hoặc double cùng index không thành pair. Hinttier2 lật ngắn một cặp chưa matched; tier 3 giữ dấu cặp cho lượt tiếp.

Khó tăng bằng số cặp và bố cục, không chỉ màu giống nhau. Không âm thanh-only cue. Back khi2 card mở có thể giữ state rồi resume hoặc đóng cặp theo luật cố định, không shuffle.

Validator: mỗi symbol có2 index; certificate là cặp index khác nhau và phủ toàn deck. Runtime still verify match moves, không nhận client “solved=true”.
