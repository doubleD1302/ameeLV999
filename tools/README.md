# Công cụ đi kèm

Các script Python3.10+ chỉ dùng thư viện chuẩn, chạy từ root bộ tài liệu. Không kết nối mạng hay gọi AI.

validate_pack.py kiểm schema subset, ID/references, dependency DAG,9 puzzle certificates, map reachability, valid/invalid save fixtures, asset prompt references và Markdown links.
reference_checks.py minh họa phép tính thời gian/migration/claim của thiết kế; không phải test cho runtime chưa được viết.
economy_report.py in CSV lợi nhuận mỗi lứa, không giả định tự trồng lại offline.
compose_asset_prompt.py ghép prompt ảnh từ request JSON, không sinh ảnh và không tiêu phí.

JSON Schema chuẩn trong schemas/ vẫn cần validator thực trong game. Công cụ không xem ảnh/đo âm thanh và không chứng minh asset art đã đạt. Kiểm hiện tại được ghi tại QA_REPORT.md.
