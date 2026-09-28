# Nhiệm vụ và phần thưởng

**Giai đoạn:** P0–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Quest có prerequisiteQuestIds, condition kind/target/count và rewards; counter tích lũy từ command nghiệp vụ. Chỉ một transaction cập nhật action+counter. UI event không trực tiếp sửa counter hay phát thưởng.

State: locked → active → ready_to_claim → claimed. Counter có thể tích lũy trước khi quest active nếu condition retroactive=true; ví dụ người chơi đã trồng/thu hoạch trước tutorial. Không ép bán lại một vật duy nhất.

CLAIM kiểm điều kiện và claim key quest:<id>, cộng reward và flags nguyên tử. Xử lý double click/reload bằng ledger. Có nút nhận tất cả P2 nhưng mỗi reward vẫn chỉ một claim.

Quests chính không time limit. Các puzzle bắt buộc chấp nhận solved hoặc assisted. Optional medal không chặn chapter. Nếu catalog update gỡ quest cũ, migration bảo toàn reward đã nhận.

QA: quest đã đủ trước mở; prerequisite thiếu; claim hai tab; rewards item sai; event subscriber chạy2 lần không dup; tất cả main quest có nguồn tài nguyên reachable.
