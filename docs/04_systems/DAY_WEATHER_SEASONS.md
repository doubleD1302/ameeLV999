# Sáng tối, thời tiết và mùa

**Giai đoạn:** P1–P3. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Một ngày thị giác =3.600.000 ms simulation. Phase day=(simTime mod dayLength)/dayLength; sáng0–0.25, ngày0.25–0.6, chiều0.6–0.8, đêm0.8–1. HUD dùng icon và tên, không bắt đọc giờ thật.

MVP thời tiết sunny/rain/cloudy cosmetic; không thay timer hoa. Weather được chọn bằng seed + dayIndex và lưu/derive ổn định. Đêm vẫn đủ contrast, không tắt vùng tương tác. Rain có reduced effects.

Season P3 là theme theo chương hoặc lựa chọn sau story, không khóa vào ngày dương lịch. Flower seasonal không là nguồn duy nhất cho main quest. Các ngày kỷ niệm cá nhân chỉ là nội dung tùy chọn khi được điền thật.

NPC lịch chạy theo phase ngày thị giác; shop/quest vẫn truy cập qua journal. Không grant friendship theo số lần ngày thị giác đi qua khi offline.

QA: animation layer không che input, đổi phase/resume ổn định, muted audio, low-spec, reduced motion, reload cùng seed cho cùng weather.
