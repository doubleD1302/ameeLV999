# Schema và kiểm tra

Các schema dùng Draft2020-12, strict object properties trong catalog. JSON trong schemas/catalog.json map từng file mẫu tới schema. Các schema không tải remote $ref; giá trị $schema chỉ là identifier chuẩn.

tools/validate_pack.py có validator subset cho đúng các keyword bộ này dùng: type/enum/const/oneOf,properties/required/additionalProperties/propertyNames,items/length/unique/min/max/pattern. Nó không phải implementation toàn bộ JSON Schema. Khi xây game, tích hợp thư viện chuẩn tương thích2020-12 và thêm kiểm reference/invariant riêng.

Save v2 chỉ chứa hệ thống đã định nghĩa. Feature mới thay save phải version/migrate nếu cấu trúc không còn tương thích. maxLength96 cho tên bảo vệ giới hạn bytes/codepoints sơ bộ; UI/domain còn cần giới hạn24 grapheme như đặc tả, không đồng nhất hai khái niệm.
