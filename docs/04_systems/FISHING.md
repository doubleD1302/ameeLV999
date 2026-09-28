# Câu cá

**Giai đoạn:** P2. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Unlock sau khôi phục ao/cầu và nhận cần miễn phí; không tiêu hao bait bắt buộc. Flow: chọn điểm nước → thả câu → chờ bite 2–6 s → giữ vùng chỉ báo bằng tap/hold → kết quả. Có chế độ thư giãn: bắt bằng một xác nhận sau bite; cùng cá cơ bản, không huy hiệu kỹ năng.

RNG cá được chốt lúc bắt đầu cast bằng counter/seed lưu; cancel không trừ tài nguyên và không thưởng. Không roll mới khi reload màn kết quả. Cần đặc tả save fishing attempt: pending/claimed/abandoned trước khi bật feature.

Cá theo pond/season flavor/time, nhưng loài cần main quest có chế độ mọi mùa hoặc nguồn trao đổi. Catch fail cho thử lại ngay. Fish collection ghi first catch một lần; selling cá dùng inventory chuẩn.

Độ khó tăng qua khoảng vùng và hành vi chỉ báo, không bắt reaction dưới ngưỡng playtest hay phụ thuộc FPS. Không yêu cầu âm thanh để nhận bite.

QA: tab hidden giữa cast/hold/result; spam confirm; loss focus không trừ phí; scaled UI; seed replay ổn định; collection/reward atomic.
