# Quy chuẩn hình ảnh

Phong cách: chibi cartoon 2D, hình khối tròn, nét sạch, màu pastel ấm, tối đa2 mức đổ bóng, không pixel art và không anime painting. Đọc rõ ở kích thước nhỏ; cảm giác handmade đến từ hình dáng, không texture nhiễu.

Camera: orthographic nhìn chếch từ trên khoảng45 độ, trục nền thẳng theo grid vuông, thấy mặt trước công trình; không isometric diamond. Luồng sáng từ trên trái. Ground shadows tách riêng khi cần, không bóng đổ dài trong sprite.

Nhân vật khoảng2.5 đầu, đầu40%chiều cao. Tool/accessory tối đa2 điểm nhận diện. Hoa/đồ vật cường điệu silhouette để nhận ra trong 96 px. Hỏng/cũ dùng sơn bong, dây leo và hình khối thiếu một phần; không grim horror.

World palette là cream/sage/mint/pink/yellow/sky/warm brown. UI text dùng màu đậm đạt contrast, không pastel trên pastel. Vật có thể tương tác được nhấn viền/marker nhất quán, không chỉ saturation.

Asset AI là đầu vào cần QA. Golden reference gồm 1 player,1 pet,1 NPC,1 houseS0/S2,3 hoa,1 decor,1 screen composite. Chốt bộ này trước batch; nếu đổi camera/style phải đánh giá lại tất cả category.

Không dùng ảnh background duy nhất để thay map có thể chơi. Collision/đường/portal/plot/decor sockets ở JSON. Chữ UI, journal và icon cần chính xác có thể render bằng code; art chỉ cung cấp vật liệu hình ảnh.
