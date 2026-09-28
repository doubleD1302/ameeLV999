# Animation và sprite

MVP dùng frame animation, không yêu cầu skeletal rig. Player/NPC idle4 frames ở4 fps, walk6 frames/hướng ở8 fps; pet idle4/walk6/sleep4; action tool2–4 keypose. Đây là baseline cần playtest, không số FPS simulation.

Cùng canvas/feet anchor giữa frame; không đổi chiều cao hoặc đầu quá2% trừ squash có chủ ý. Ground motion thuộc code, walk cycle không chạy lệch khỏi tâm. Loop seam so frame cuối/đầu và bật onion-skin.

Pipeline: tạo pose chuẩn → tạo keyframes dùng reference → căn chỉnh thủ công/công cụ → QA → pack deterministic. Tool imagegen không bảo đảm layout hoặc temporal consistency. Chỉ dùng một sheet sinh sẵn nếu đã kiểm từng frame.

Footstep phát theo event animation có throttle, không mỗi render frame. Reduced-motion dùng static/ít frame và tắt bounce/sparkle mạnh; vẫn có phản hồi bằng màu/label.

P2 cutout: đầu/tóc/thân/tay/chân/phụ kiện riêng, chồng khớp có padding, bone pivots trong metadata, không coi illustration modular là rig đã chạy. Chỉ bật sau pilot một nhân vật.

Danh sách frame và clip tại data/animation_specs.json. Mỗi frame là một planned asset riêng; normalized frame 256 × 256, pack atlas sau QA. Frame master 768 × 768 không phải kích thước atlas.
