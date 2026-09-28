# Ma trận thiết bị để điền khi có build

| Môi trường | Core loop | Offline cold start | Import/migration | Audio/resume | Trạng thái hiện tại |
|---|---|---|---|---|---|
| Windows Chrome | Bắt buộc P0 | Bắt buộc | Bắt buộc | Bắt buộc | NOT_RUN |
| Windows Edge | P1 | P1 | P1 | P1 | NOT_RUN |
| Android Chrome thật | P1 | P1 | P1 | P1 | NOT_RUN |
| iPhone Safari/PWA thật | Trước khi công bố hỗ trợ iOS | Bắt buộc | Bắt buộc | Bắt buộc | NOT_RUN |
| Firefox desktop | Bổ sung | Bổ sung | Bổ sung | Bổ sung | NOT_RUN |

Ghi browser/OS version và device cụ thể tại mỗi lần test, đừng thay NOT_RUN bằng PASS do đọc tài liệu hỗ trợ API. Emulation desktop của viewport mobile không phải thiết bị thật.
