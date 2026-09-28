# Chăn nuôi

**Giai đoạn:** P2. Command/transaction theo docs/10_tech/COMMANDS_EVENTS.md; số liệu lấy từ data/.


Chuồng mở sau ao, không đưa vào P1. Loài khởi đầu gà; cừu và bò mở dần. Mỗi con có animalId, species, name, productionReadyAtSimMs, feedUnits, storedProducts. Không chết/bệnh nặng hoặc bỏ đi khi vắng.

Cho feed tối đa3 chu kỳ; một chu kỳ dùng1 feed, tạo1 sản phẩm theo species. Cộng offline không quá credit8 h và cap kho3; không tiếp tục tiêu hao feed khi kho đầy. Thu sản phẩm cùng inventory trong transaction. Nếu thiếu feed, ngừng sản xuất và hiện biểu tượng nhẹ, không phạt.

Mua/nhận nuôi preview số ô chuồng, chi phí và feed. Có đường nhận con đầu miễn phí theo quest. Sản phẩm trứng/sữa/lông dùng craft/cooking; không đòi bán con vật. Không breeding ngẫu nhiên trong baseline.

QA: cap sản lượng, nhiều resume, đúng boundary, thiếu feed, fullbarn, rename, offline72 h không vượt cap; mỗi animalId duy nhất; mọi sản phẩm có item catalog.
