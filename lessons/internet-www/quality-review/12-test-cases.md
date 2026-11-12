# Skill 12 – Runtime Acceptance Tests

**Automated Chromium tests:** 23/23 PASS, 0 FAIL.

| # | Test | Status | Evidence |
|---:|---|---|---|
| 1 | All 15 knowledge slides + 1 break | PASS | Playwright assertion passed |
| 2 | Language toggle keeps learner answer | PASS | Playwright assertion passed |
| 3 | Research card opens | PASS | Playwright assertion passed |
| 4 | Concept diagram opens after learner choice | PASS | Playwright assertion passed |
| 5 | Real browser task checklist and notes | PASS | Playwright assertion passed |
| 6 | URL segment labeling | PASS | Playwright assertion passed |
| 7 | DNS-A cache miss lookup log | PASS | Playwright assertion passed |
| 8 | DNS-B valid cache avoids resolver | PASS | Playwright assertion passed |
| 9 | DNS-C NXDOMAIN is not HTTP 404 | PASS | Playwright assertion passed |
| 10 | Successful DNS branch hands sample IP to HTTP | PASS | Playwright assertion passed |
| 11 | HTTP 200 request and response | PASS | Playwright assertion passed |
| 12 | HTTP 404 after server response | PASS | Playwright assertion passed |
| 13 | HTTP/HTTPS comparison preserves reasoning | PASS | Playwright assertion passed |
| 14 | Rendering modes and working JS button | PASS | Playwright assertion passed |
| 15 | Browser data matching and revision | PASS | Playwright assertion passed |
| 16 | Journey reorder + conditional branch | PASS | Playwright assertion passed |
| 17 | Notebook export and Escape to close | PASS | Playwright assertion passed |
| 18 | Flashcards learner recall controls | PASS | Playwright assertion passed |
| 19 | Exit ticket self-assessment and language persistence | PASS | Playwright assertion passed |
| 20 | Keyboard slide navigation | PASS | Playwright assertion passed |
| 21 | 360px all slides fit + reduced-motion mode | PASS | Playwright assertion passed |
| 22 | DNS play/pause/reset is live | PASS | Playwright assertion passed |
| 23 | No uncaught JavaScript errors | PASS | Playwright assertion passed |

## Explicitly NOT RUN / Not verified

- Navigating to `file://` on Windows with Chrome/Edge/Firefox: NOT RUN (tool-managed Chromium blocks `file://`).
- Navigation to local HTTP loopback in managed Chromium: NOT RUN (blocked by administrator).
- Independent testing on actual student laptop / browser settings: NOT RUN.
- Screen reader announcements and use of browser zoom by real users: NOT RUN.
- Educational learning gains in a live tutoring session: NOT RUN.
- Full homework assessment from Skill08: NOT RUN because Skill08 was deliberately skipped.

## Interpretation

Tests used Playwright `page.set_content()` to load the complete HTML/JS/CSS into Chromium. They validate dynamic page behavior; they do **not** prove that the file opens without restrictions in every `file://` browser configuration.