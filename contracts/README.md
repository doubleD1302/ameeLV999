# Hợp đồng TypeScript tham khảo

domain.ts và puzzle.ts là định nghĩa kiểu để coding agent đưa vào source phù hợp; chưa phải runtime implementation. Phải đồng bộ với JSON Schema và đặc tả command. Dùng typecheck trong repo game sau T001.

ID đang là string để dễ đọc, production có thể dùng branded types nếu hữu ích. Runtime vẫn phải kiểm reference/range; TypeScript không kiểm JSON import thay bạn. Repository commit phải atomic, không chỉ clone object rồi setTimeout ghi.
