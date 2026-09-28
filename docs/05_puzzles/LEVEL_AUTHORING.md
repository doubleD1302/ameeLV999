# Biên soạn và xác minh level

Quy trình: chọn mục tiêu suy luận → tạo lời giải hợp lệ → biến đổi thành đề → chạy solver/verifier → thử bằng mắt → playtest → duyệt. AI có thể đề xuất đề và manh mối ở giai đoạn phát triển; không tin câu “có lời giải” nếu chưa kiểm.

Memory: mỗi symbol đúng 2 lần, seed/deck ổn định. Sliding: scramble từ goal bằng move hợp lệ, certificate inverse replay tới goal; kiểm initial chưa solved. Pipe: certificate rotations cho board đạt source-target và leak rule, locked cells không bị đổi.

Logic/deduction: nếu đề hứa một đáp án, solver đếm đúng 1; nếu nhiều đáp án hợp lệ thì chấp nhận mọi đáp án thỏa constraints. Light/gear/flow cần simulator đúng, không dùng hình AI để đo hình học. Mystery/hidden object cần biên tập thủ công và vùng hit authored.

Mỗi level có id, engine, tier, instructionsKey, rewardCoins, seed, board, solutionCertificate và hint text. Tên ID không đổi khi chỉ sửa typo. Thay luật/board trên save đang chơi cần engineVersion và chiến lược restart rõ không mất reward.

tools/validate_pack.py xác minh level mẫu bằng luật engine tương ứng. Đây là bằng chứng nội dung mẫu có nghiệm, không chứng minh chất lượng trải nghiệm hay thời lượng mục tiêu.
