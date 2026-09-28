# Hợp đồng chung cho puzzle

Mọi engine triển khai createState(definition, seed), applyMove(state, move), isSolved(state), getHint(state, tier), serialize(state) và validateSavedState(state, definition). Domain trả state mới; renderer chỉ hiển thị, không quyết định thắng bằng animation.

PuzzleSession lưu puzzleId, engineVersion, state, moves, hintTier và status=in_progress/solved/assisted. Khi thoát lưu trạng thái; khi reset giữ cùng board/seed. Không reroll để tìm puzzle dễ hơn bằng reload.

isSolved phải kiểm luật thật, không chỉ so với một ảnh hoặc chuỗi thao tác mẫu. COMPLETE_PUZZLE kiểm state bằng engine rồi lưu completion + claim trong transaction. Chứng cứ solution trong data dùng cho validation/QA; người dùng có thể đọc bundle offline, đây không phải bí mật bảo mật.

Hint ba mức: nêu quy tắc → chỉ vùng liên quan → một bước cụ thể. Assist hoàn thành có xác nhận, miễn phí. Solved/assisted đều mở main flag và phần thưởng chính; chỉ huy hiệu tự giải cần không assist. Replay không thưởng chính lần nữa.

Dữ liệu đi kèm chỉ 3 engine MVP: memory, sliding, pipe_rotation. Bảy loại khác có đặc tả P2/P3, cần schema riêng và solver/fixtures trước khi thêm vào build.
