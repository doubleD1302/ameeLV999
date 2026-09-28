# Kiến trúc runtime

## Luồng chuẩn

UI/Phaser phát command → application kiểm phiên bản và quyền hành động → domain reducer tạo nextState → persistence commit một transaction → phát event để UI/render cập nhật. Domain không import Phaser, DOM, IndexedDB hoặc Date.now. Content catalog chỉ đọc.

Nguồn sự thật bền vững là snapshot đã commit. UI giữ view model; không có kho coins thứ hai trong scene. Quest tiến triển và reward claims cùng transaction với hành động gốc; event bus chỉ để thông báo sau commit, không âm thầm phát thưởng.

## Các lớp

| Lớp | Sở hữu | Không được làm |
|---|---|---|
| domain | Trạng thái, phép tính timer, luật kinh tế, validator puzzle | I/O, fetch, tác dụng phụ |
| application | Command queue, kiểm tra revision, lifecycle, use cases | Render trực tiếp |
| adapters | IndexedDB, clock, RNG, import/export | Tự quyết định cân bằng |
| scenes | Camera, sprite, animation, hit zones | Sửa save trực tiếp |
| ui | Dialog, HUD, focus, văn bản, thông báo | Sở hữu luật thưởng |
| content | Catalog đã schema/reference validate | Gọi code từ chuỗi JSON |
| pwa | Cache phiên bản và update flow | Tính tiến trình gameplay trong background |

## Ranh giới thực hiện

T001 tạo khung; T003 tạo domain và tests với clock giả. Adapter lỗi phải trả lỗi có kiểu; command không được thành công nửa phần. Persist trước rồi mới toast “Đã lưu”. Rendering thất bại không rollback tiền đã commit; UI rehydrate.

Dùng module nhỏ theo hệ thống, không một GameManager chứa tất cả. Chỉ thêm abstraction khi có hai use case thật. Không cần ECS, microservices, event sourcing hoặc CQRS cho MVP.
