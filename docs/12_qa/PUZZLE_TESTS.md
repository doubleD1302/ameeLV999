# Kiểm thử puzzle

Tất cả9 level mẫu phải có certificate hợp lệ; script kiểm và runtime test phải dùng cùng win rules nhưng không copy bug từ một implementation. Unit kiểm thêm trạng thái sai tưởng đúng.

Memory: chọn cùng index2 lần, tamper matched, restore2 cardđang mở, deck lẻ/symbol không cặp.
Sliding: đi ngoài board/đi chéo, permutation sai, initial solved, scramble inverse đúng; sau player đi khác, hint tính từ state mới.
Pipe: target reached nhưng leak vẫn fail; sourceport bị chặn; lockedrotation đổi fail; disconnected extra tiles được phép; nghiệm khác certificate vẫn win.

Chung: solve/assist/replay reward ledger; reset sau nhận thưởng không nhận lại; tabhidden; keyboard/touch; tỷ lệ màn hình; text/tone hint. No timer bắt buộc.

Engine tương lai phải có solver proof hoặc authored review theo loại. Unique-solution logic cần đếm nghiệm, một certificate không đủ. Không ghi difficulty “đã cân bằng” chỉ vì validator xanh.
