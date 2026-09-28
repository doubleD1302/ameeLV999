# Cách dùng fixtures

save_new_v2: save mới có8 record plot nhưng4 plot khóa theo map/flag.
save_growing_v2: đã trồng1 cúc, trừ1 hạt, ready ở120000 simMs.
save_legacy_v1 và save_migrated_v2_expected: hợp đồng migration đề xuất.
time_cases: boundary âm/0/chín/cap/3 ngày.
invalid/: có chủ ý sai, phải được reject; không nạp vào game phát hành.

Fixture dùng đồng hồ tổng hợp. Tests runtime phải inject clock và RNG, không đợi8 giờ thật. Migration v1 là kịch bản chuẩn bị cho dự án mới, không khẳng định người chơi đã có save v1.
