# Hợp đồng dữ liệu nhiều chủ đề

Đầu vào tối thiểu (`session_contract.json`):

```json
{
  "session_id":"SESSION-ID", "total_seconds":7200,
  "time_approval":{"status":"DEMO_APPROVED_FOR_TEST_ONLY"},
  "topics":[{"topic_id":"TP-1","name":"...","section_ids":["SEC-1"]}],
  "sections":[{"section_id":"SEC-1","topic_id":"TP-1","kind":"CORE_LEARNING","objective_ids":["OBJ-1"],"ku_ids":["KU-1"],"prerequisites":[],"teach_scene_ids":["S1-A"],"recall_scene_id":"S1-R","review_scene_id":"S1-Q","recall_cue_ids":["C-1","C-2"],"review_question_ids":["Q-1","Q-2"],"duration_seconds":1200}],
  "scenes":[{"scene_id":"S1-A","role":"TEACH","section_id":"SEC-1","duration_seconds":500},{"scene_id":"S1-R","role":"ACTIVE_RECALL","section_id":"SEC-1","duration_seconds":200},{"scene_id":"S1-Q","role":"REVIEW_QUIZ","section_id":"SEC-1","duration_seconds":300}],
  "bridges":[{"scene_id":"BR1","from_section_id":"SEC-1","to_section_id":"SEC-2","prompt":"...","prior_knowledge":"...","next_question":"..."}],
  "integrated_transfer":{"scene_id":"TRANSFER","objective_ids":["OBJ-1","OBJ-2"]}
}
```

`teacher_review_bank.json` và `teacher_recall_bank.json` có nội dung đáp án; `student_review_bank.json` bị loại `correct_answer`, `teacher_key`, `rubric_secret`, `exit_key`. Chỉ công bố student bank khi đã lọc.

**Không tự đánh số ID theo vị trí trang**; thay đổi thứ tự không đổi ID.
