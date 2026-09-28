# Duyệt và ghi nguồn asset

Registry có assetId, category, phase, status, relativeFile, styleVersion, promptPath, referenceIds, sourceTool, generatedAt, rightsNote, sha256 và QA. Planned có file=null; approved bắt buộc có file/hash và kết quả QA.

Kiểm tự động: kích thước/format/alpha, tên/reference tồn tại, duplicate ID, bytes/budget, frame count, pivot range. Kiểm bằng mắt: identity, camera, scale, silhouette, loop, UI text contrast. Không gán điểm thị giác bằng script nếu không thực sự xem ảnh.

Provenance ghi điều khoản công cụ và quyền các reference tại thời điểm tạo. Không tự ghi “commercial rights verified” khi chưa kiểm. Không dùng nhãn AI-generated như bằng chứng bản quyền thuộc mình.

Phân biệt rejected với draft; không lén đưa rejected vào runtime khi thiếu ảnh. Placeholder hình khối có thể dùng trong prototype nếu ghi rõ và có task thay asset; không tính là asset art cuối cùng.

Release chỉ đóng gói approved file cùng manifest. File nguồn/prompt/private personalization nằm ngoài bundle công khai trừ phần được chọn để xuất.
