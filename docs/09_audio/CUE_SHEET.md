# Danh sách cue âm thanh

| Cue ID | Trigger | Độ dài / quy tắc |
|---|---|---|
| sfx_plant | PLANT committed | ≤0.4 s, âm đất mềm |
| sfx_water | tưới cosmetic | ≤0.8 s, throttle |
| sfx_harvest | HARVEST committed | ≤0.5 s, có thể2 biếnthể |
| sfx_coin | SELL committed | ≤0.4 s, một lần/transaction |
| sfx_repair | RESTORE committed | ≤1.5 s, gõ gỗ nhẹ |
| sfx_puzzle_success | first completion | ≤1.2 s, không chồngmusic |
| sfx_ui_tap | UI kíchhoạt | ≤0.15 s, subtle |
| sfx_ui_error | hành động không hợp lệ | ≤0.3 s, không giật mình |
| sfx_momo | tương tác pet | ≤1 s, cooldown 3 s |
| sfx_page | trang journal | ≤0.4 s |
| music_garden_day | vào vườn ban ngày | loop 60–90 sđề xuất |
| music_garden_night | đêm | loop 60–90 s |
| music_puzzle | puzzle | loop 60 s |

Một cue map một assetId hoặc tập biến thể đã duyệt. Không dùng sound loading xong làm gameplay event. Pause/resume đổi tab không bắt đầu hai loop cùng lúc. Giảm SFX đồng thời tối đa8 voice đề xuất.
