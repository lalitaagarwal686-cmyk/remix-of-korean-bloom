# Urinara Academy — AI Korean + TOPIK Platform Upgrade

Upgrade urinara.in into a self-contained Korean learning and TOPIK prep platform covering TOPIK I (Levels 1–2) through TOPIK II (Levels 3–6). The existing app already has auth, gamification, an AI tutor, spaced repetition and the `/app/*` shell — we extend it rather than rebuild.

## 1. Vocabulary & Lexicon Database

- New scalable `vocabulary_entries` table (designed for 100k+ rows) with: `hangul`, `hanja`, `english_meaning`, `hindi_meaning`, `part_of_speech`, `topik_level` (1–6), `example_sentence_kr`, `example_sentence_en`, `romanization`, `frequency_rank`, `category`.
- New `hanja_roots` reference table (radical → meaning → on'yomi/eumhun, e.g. 학/學 "to learn") linked to Sino-Korean entries for root-based retention.
- Seeded in this pass: curated NIIED-core starter sets per level (TOPIK I L1–L2 and TOPIK II L3–L6), each word with example sentences and Hindi meaning where applicable. Full 6,000-word NIIED tier fills in through a bulk-import server function (JSON/CSV upload path) so the database scales to 100k+ without page-load seeding.
- **Vocabulary Explorer** upgrade at `/app/vocabulary`: search + filters (level, POS, hanja-root), Web Speech audio button on every card, "Save to my deck" feeding the existing spaced-repetition engine, and a Hanja Root Builder view (learn roots → decode unknown Sino-Korean words).

## 2. Mock Test Engine & Practice Exams

- New tables: `mock_exams`, `mock_sections`, `mock_questions`, `mock_attempts`, `attempt_answers` — all original content in the exact official format.
- **TOPIK I Simulator**: timed 100-minute environment — 30 Listening + 40 Reading, 200-point scoring, auto grade.
- **TOPIK II Simulator**: timed 180-minute environment — Session 1 (50 Listening + 4 Writing) then Session 2 (50 Reading), 300-point scoring.
- Listening audio generated in-browser via the existing Korean speech pipeline (adjustable speed), so no audio files to host.
- Instant grading, per-question review with AI-generated step-by-step explanations (Lovable AI, structured output), section-wise analytics stored on the attempt and surfaced on the results page and dashboard.
- **Past papers**: hosting full NIIED PDFs is third-party content the project avoids; instead every mock is built in the official format and the Past Papers page links out to the official NIIED archive for the released papers. (Say the word if you want full papers uploaded instead.)
- Split-screen layout on desktop (question left, answer sheet / navigation right); single-column tap-through on mobile. Auto-save answers, resume within the timer window.

## 3. Dual AI Tutors

- **Teacher Min-ji (민지쌤)** — conversation tutor at `/app/tutor/minji`: roleplays, daily conversation, grammar Q&A, level-aware difficulty, corrections in plain English/Hindi. Built on the existing AI tutor pipeline and VoiceConversation screen.
- **Prof. Park (박교수님)** — TOPIK II Writing evaluator at `/app/tutor/professor-park`:
  - Real-time **원고지 manuscript grid** UI (20×20 cells, automatic character flow, spacing counted per official rules).
  - Dedicated evaluators for Q51/Q52 (short-answer fill-in) and Q53/Q54 (essay 200–300 / 600–700자).
  - Scoring: spelling/spacing error detection with highlighted cells, official rubric (Content & Task, Structure & Organization, Grammar & Vocabulary, 400-point scale for Q54), model rewrite, and mistakes saved to the AI memory for future review.

## 4. UI / UX

- Dark/Light mode toggle in the header and app shell (dark tokens already exist; add a persisted theme state, no flash on load).
- Navigation updated: Dashboard, Vocabulary Explorer (100k), Grammar Matrix, Past Papers, Mock Tests, AI Tutors — desktop header + mobile bottom nav + mobile menu all updated.
- Grammar Matrix at `/app/grammar`: level-1-to-6 filterable pattern grid with examples and drill links.
- Mock-test and flashcard screens mobile-first; split-screen only ≥ lg breakpoint.
- No changes to existing analytics (GTM, Meta Pixel, Clarity, gtag), SEO landings, or brand.

## Technical notes

- All schema changes via the database migration tool; every new table gets RLS (owner-only writes; curriculum reads authenticated, matching the current security posture) plus GRANTs.
- AI features use the existing Lovable AI gateway server modules with the current model and demo fallback; the writing evaluator returns strict JSON (rubric scores, errors, model answer).
- Rewards/anti-abuse rules stay intact; mock attempts award XP/coins only once per attempt.
- New routes: `/app/tutor/minji`, `/app/tutor/professor-park`, `/app/mock-tests`, `/app/mock-tests/$examId`, `/app/past-papers`, `/app/hanja`. Existing routes keep their URLs.

## Order of work

1. Database migrations (vocabulary, hanja roots, mock-exam tables) + seed data.
2. Vocabulary Explorer + Hanja Builder + dark mode toggle + navigation.
3. Mock test engine (TOPIK I first, then TOPIK II) with grading and analytics.
4. Dual tutors + 원고지 writing evaluator.
5. Build check, preview verification of each new screen on mobile and desktop.

## Honest scope notes

- "100,000+ words" is an architecture promise: the table and import pipeline support it, and this pass seeds the curated starter tiers (~1,500–2,000 words) — full NIIED 6,000 and beyond fills in through staged imports, not one giant insert.
- Past-paper PDFs are linked, not re-hosted (copyright); the mock engine uses original official-format questions.
- Full NIIED-format question bank depth grows over time; this pass ships working seeded exams for both TOPIK I and TOPIK II formats.
