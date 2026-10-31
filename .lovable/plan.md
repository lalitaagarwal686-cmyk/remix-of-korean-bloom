# Urinara Academy — Phase 1: Seed the curriculum & activate the student app

The learning system is built (auth, AI tutor, voice pipeline, gamification, spaced repetition) but the curriculum tables in the backend are all empty and 15 of the student pages still show "coming soon". Phase 1 fills the content and turns every student page into a working screen. No existing features are changed or removed.

## 1. Seed the curriculum tables (migrations with literal INSERT rows)

Content is original, written for Indian learners, with Hindi meanings and romanization throughout.

- **tutors** — 3 tutors: Seo-yeon (friendly daily-conversation partner), Teacher Min-ji (민지쌤, encouraging conversation tutor), Prof. Park (박교수님, formal evaluator tone) — each with personality, tagline, bio and accent color.
- **lessons** — ~12 lessons across the TOPIK I (Levels 1–2) → TOPIK II (Levels 3–4) tracks: self-introduction, Hangul warm-ups, café & food, numbers & shopping, directions, daily routine, weather & plans, past experiences, honorifics, small talk at work, weekend plans, opinion talk. First lessons free; XP/coin rewards set per lesson.
- **lesson_steps** — 4–6 steps per lesson (warm-up → vocabulary → grammar → speaking drill → quiz) with Korean + English + Hindi prompts and romanization.
- **scenarios** — ~10 first-person role-plays (Teuida-style): order at a café, ask for directions in the subway, bargain at Gwangjang market, pharmacy visit, hotel check-in, buy a SIM card, job interview, meet a K-pop fan friend, bank visit, birthday gathering — each with learner/tutor roles, objective, target grammar & vocabulary and opening lines.
- **grammar_topics** — ~24 patterns spanning Levels 1–6 (은/는, 이/가, -아/어요, -고 싶어요, -아/어야 해요, -지만, -고 있어요, -(으)ㄹ 거예요, -았/었었어요, -(으)면, -(으)니까, -기 때문에, -(으)ㄴ 적이 있어요, -게 되다, -(으)ㄹ 뿐만 아니라 …) with English + Hindi explanations and examples.
- **vocabulary** — ~200 curated starter words across TOPIK levels 1–6 (daily life + exam core), each with Hangul, romanization, English, Hindi, part of speech, example sentences — feeding the existing flashcards, AI explainer and wordbook.
- **mission_templates** — 7 daily missions (speak N times, review N words, finish a lesson…).
- **badges** — 10 badges (Hangul Master, streak milestones, word milestones, mock-test pro…).
- **topik_categories** — TOPIK I & II skill categories with item counts.

## 2. Activate the 15 placeholder student pages

Each page wires to the queries and server functions that already exist — no new business logic:

- **/app/scenarios** and **/app/scenarios/$slug** — scenario cards from the database; detail starts the existing voice conversation.
- **/app/speak** — conversation launcher: tutor picker, topic choice, daily-limit state, opens VoiceConversation.
- **/app/freetalk** — free-talk launcher on the same conversation pipeline.
- **/app/shadowing** — listen-and-repeat drill using the existing pronunciation scoring.
- **/app/lesson/$slug** — lesson player walking the seeded steps, saving progress and awarding completion rewards through the existing server functions.
- **/app/learn** — already live; only polish if a seeded lesson reveals a gap.
- **/app/grammar** — level-filterable pattern grid from grammar_topics with examples and audio.
- **/app/topik** — TOPIK I/II level overview, category list and the learner's category progress.
- **/app/progress** — streak, weekly minutes, skill scores and lesson progress from real data.
- **/app/leaderboard** — authenticated leaderboard (own-row privacy rules stay intact).
- **/app/achievements** — badges grid with earned state.
- **/app/history** — past conversation sessions with scores and summaries.
- **/app/profile** — settings: display name, daily goal, speech speed, preferred tutor, explanation language, hints.
- **/app/onboarding** — first-run flow (level pick, daily goal, tutor) that updates the profile and marks onboarding done.
- **/app/pricing** — stays as the honest "awaiting payment provider" state until you confirm the payment plan (roadmap item; not part of Phase 1).

## 3. Verification

- Build passes; Playwright walk-through signed in: dashboard → scenario → voice conversation (demo mode) → grammar → TOPIK → progress, plus the same pages at mobile width.
- Curriculum reads stay authenticated-only, matching the current security posture; no RLS changes needed since the tables and policies already exist.

## Later phases (unchanged roadmap)

Phase 2 vocabulary/Hanja + dark mode, Phase 3 mock-test engine, Phase 4 Prof. Park 원고지 evaluator + library, Phase 5 leaderboard polish + payments/Stripe test checkout (still needs your pricing decision).
