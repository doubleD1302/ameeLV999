# Đặc tả các màn hình

| Màn | Thông tin/chính | Trống/khóa/lỗi | Tiêu chí |
|---|---|---|---|
| Boot/recovery | loading, tiếp tục, phục hồi | Không save≠save lỗi | Không ghi save trắng lên lỗi |
| Garden HUD | coins, journal, inventory, settings | Marker vật khóa có lý do | Không che plot/NPC |
| Plot picker | loài, hạt, thời gian, giá | Không hạt→shop/rescue | Trồng đúng plot qua confirm |
| Inventory | item,quantity,filter | Trống có CTA về vườn | Focus/sort ổn định |
| Shop | giá và total | Thiếu coins hiển thị cụ thể | Không mua lặp khi busy |
| Restoration | before/after,cost,unlock | Thiếu vật liệu/tiền và nguồn kiếm | Cancel không trừ |
| Decor mode | ghost,rotate,confirm,store | Đường bị chắn giải thích | Có thểthoát touch/keyboard |
| Journal/quests | mục tiêu,reward,claim | Locked không spoil quá mức | Claim1 lần |
| Puzzle | board,hint,reset,assist,back | Resumestate hợp lệ | Không mất tiến độ khi đóng |
| Pet | tên,tương tác,follow | Chưa nhận nuôi có hướngdẫn | Không hunger guilt |
| Neighbor | thoại,gift,tier | Cooldown có thời gian còn lại | Main thoại truy cập được |
| Collection | discovered/total | Unknown có silhouette | Không yêu cầu mạng |
| Settings | audio,text,motion,backup | Saveerror/unsupported import | Export dễ tìm |
| Offline/update | readiness,update | Cache thiếu nói rõ | Không auto reload |

Mỗi màn phải có loading/busy,empty,error,success tương ứng khi hợp lý; không tạo spinner cho action đồng bộ tức thì. Microcopy ở data/localization/vi.json; màn P2/P3 như fishing/barn dùng mẫu screen spec khi task đó bắt đầu.
