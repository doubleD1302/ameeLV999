# Thứ tự sản xuất asset

P0 có thể dùng placeholder để kiểm luật game. Song song, tạo golden references trước khi batch. Không sinh gần300 frame/asset một lần rồi mới phát hiện sai camera.

Batch A: player đứng, Momo đứng, Lily đứng, house S0/S1,5 stage Daisy, bench và composite. Batch B: nền cottage/debris, flower stage còn lại P0 và icons. Batch C: player/pet movement; NPC có thể dùng ít animation trước. Batch D: UI, story,3 puzzle skins, P1 buildings/decor. Batch E: audio sau khi cue timing đã rõ.

Registry hiện có các request ảnh/frame và cue âm thanh được gắn planned. Số lượng request không phải số lượng file đã sinh. Có thể reuse frame/atlas phù hợp nhưng phải giữ manifest và clip references đúng.

Chỉ sinh một batch nhỏ khoảng12 đầu ra rồi review. Ghi reject reason có thể sửa như “pivot chân lệch12 px” thay vì “chưa cute”. Nếu công cụ không giữ animation tốt, giảm chuyển động có chủ ý, không tăng complexity để che lỗi.
