# Thông số asset và anchor

| Loại | Master đề xuất | Hiển thị gợi ý | Anchor / alpha |
|---|---|---|---|
| Character/NPC frame | 768 ×768 | Cao96 px world | Bottom-center tại chân; RGBA |
| Pet frame | 512 ×512 | Cao48–64 px | Chân chạm ground, RGBA |
| Flower stage | 512 ×512 | Cao48–80 px | Gốc cây bottom-center |
| Item/decor icon | 512 ×512 | 48–96 px UI | Center, padding10–15% |
| Building stage | 1536 ×1536 | Footprint theo map | Anchor cửa/ground line cố định |
| Terrain tile | 512 ×512 | 64 ×64 world cell | Seamless edges nếu dùng tile |
| Story illustration | 1600 ×1000 | Fit panel | Opaque được, không chữ baked |
| UI panel texture | 512 ×512 | 9-slice | Margin/corners ghi metadata |

Các size là đích sau chuẩn hóa, không giả định tool AI xuất pixel đúng. Nếu tool chỉ hỗ trợ size khác, sinh gần nhất rồi normalize có kiểm tra; không stretch nhân vật.

Tên asset: category_subject_state_direction_frame_vNN.png. Ví dụ pet_momo_idle_s_00_v01.png. Registry ID độc lập tên file; thayversion không đổi semantic assetId. File build có thể hash nhưng catalog dùng assetId.

Atlas cap2048 theo budget. Padding atlas2–4 px và extrude mép do packer, không yêu cầu AI tự pack. Không ghép nhiều frame và mong mỗi cell đúng tự động. Alpha edge thử trên nền đen/trắng; reject viền nền giả/checkerboard baked.
