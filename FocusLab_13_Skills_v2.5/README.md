# FocusLab v2.5 — Visual Excellence

Bộ định nghĩa hợp nhất trên GitHub, kế thừa commit 0d1e19ddc263c83a85dd14391b8d226c675fadff. Đọc `policy/EXECUTION_AND_HANDOFF.md` và ba policy v2.5; chạy Skills 01–13 theo thứ tự với registry và schema hiện hành. 13 Skill gồm đầy đủ định nghĩa gốc và bổ sung v2.5. Giữ gate NEEDS_REVIEW cho đến khi kiểm định độc lập và chạy thử bài giảng.

Tài nguyên tham chiếu nhị phân không được chép lên nhánh: tải gói đầy đủ [Google Drive](https://drive.google.com/file/d/1dJedOdaeeOQn4-tGufHQ4or7huNESW64/view), giải nén thư mục `references/` vào thư mục này. Đối chiếu `SOURCE_LEDGER.json` trước khi dùng. Bộ kiểm tra overlay cũ `tests/test_v25.py` yêu cầu tài nguyên đó; QA đã có là lịch sử, không phải retest bản hợp nhất. Xem `QA_CONSOLIDATION_V2_5.md`.

## Active validation (v2.5)
- `python tests/check_consolidation.py` verifies the consolidated files and original hashes.
- `python tests/check_handoff.py <run/output_manifest.json>` validates v2.5 handoff and actual output bytes. `templates/output_manifest.schema.json` now requires version 2.5. Use the v2.4.1 directory to validate historical runs.
- `python tests/check_scene_contract.py <canonical-scene-contract.json>` uses the v2.5 schema. The default fixture is `v25_scene.valid.json`.
- `python tests/test_v25.py` after restoring the binary references. `tests/test_consistency.py`, `tests/test_definitions.py` and older DNS fixtures/reports are historical v2.4.1 regression materials; run the original suite in the original v2.4.1 folder, not as v2.5 acceptance. Active regression: `python tests/test_active_v25.py`. No browser or field claim.

Bản v2.4.1 gốc vẫn tồn tại ở thư mục riêng trên nhánh này. Không sửa nguồn cũ.
