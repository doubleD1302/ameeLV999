# batch — category prompt

Turn the approved request list into per-asset generation prompts and a manifest. Reuse system/style/category references, keep unique stable asset IDs and preserve phase priorities. Do not generate new content categories or silently mark assets approved. Each row needs ID, prompt path, target size, alpha, expected output count, status and reference IDs. Group batches small enough for visual review.

Request inputs: {{ASSET_ID}}, {{SUBJECT}}, {{STATE}}, {{DIRECTION_IF_ANY}}, {{TARGET_SIZE}}, {{ALPHA}}, {{ANCHOR}}, {{APPROVED_REFERENCES}}. Apply the global system/style before this category. Keep output limited to the request.
