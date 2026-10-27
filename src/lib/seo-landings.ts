// SEO keyword landing pages — one entry per target keyword category.
// Meta titles/descriptions come from the Urinara SEO keyword sheet (21 categories).
// Edit copy here; each route file in src/routes pulls its head tags from this file.

export type SeoLanding = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  korean: string;
  h1: string;
  intro: string;
  bulletsHeading: string;
  bullets: { title: string; text: string }[];
  sections: { heading: string; body: string }[];
  ctaPrimary: { label: string; to: string };
  ctaSecondary: { label: string; to: string };
};

export const seoLandings: SeoLanding[] = [
  {
    slug: "/free-courses",
    metaTitle: "Learn Korean Free Online | Free Lessons & Study - Urinara",
    metaDescription:
      "Start your learning journey today! Learn Korean free with comprehensive study guides, audio lessons, and beginner-friendly digital resources on Urinara.",
    eyebrow: "Free resources",
    korean: "무료 학습",
    h1: "Learn Korean free — structured lessons, not scattered videos",
    intro:
      "Start at zero cost and still follow a real curriculum: Hangul foundations, daily vocabulary, grammar patterns and speaking drills, all in short lessons you can finish today.",
    bulletsHeading: "What you get for free",
    bullets: [
      { title: "A complete beginner path", text: "Hangul reading and writing through to everyday conversation, in a set order that builds on itself." },
      { title: "Study guides, not just apps", text: "Reference sheets for particles, verb endings and numbers that you can revisit any time." },
      { title: "Audio and listening drills", text: "Every vocabulary item and dialogue is paired with native-speed Korean audio you can replay." },
      { title: "No credit card needed", text: "Create a free account, take the placement test and start your first mission in minutes." },
    ],
    sections: [
      {
        heading: "Free lessons that still feel like a course",
        body: "Most free Korean material is a pile of disconnected videos. Urinara gives you free access to the same structured missions paid learners use: vocabulary with audio, one grammar focus, and a speaking task at the end of every lesson.",
      },
      {
        heading: "When you are ready for more",
        body: "The free track covers Hangul and beginner conversation. When you want TOPIK preparation, pronunciation scoring and an unlimited AI tutor, the full academy unlocks the rest of the path.",
      },
    ],
    ctaPrimary: { label: "Start a free lesson", to: "/learn" },
    ctaSecondary: { label: "Take the placement test", to: "/topik" },
  },
  {
    slug: "/certificates",
    metaTitle: "Korean Language Certificate Course Online | Urinara",
    metaDescription:
      "Enroll in an accredited Korean language certificate course today. Gain official credentials and boost your language profile with online studies at Urinara!",
    eyebrow: "Certificates",
    korean: "인증 과정",
    h1: "A Korean certificate course built on proof, not attendance",
    intro:
      "Level-by-level certificate tracks where each certificate is earned by what you can actually do: read Hangul, hold a conversation, and pass timed level checks.",
    bulletsHeading: "How the certificate track works",
    bullets: [
      { title: "Six levels, six milestones", text: "Each level ends with a speaking, listening and reading check — pass it and the level certificate is recorded on your profile." },
      { title: "Speaking is mandatory", text: "You cannot certificate out of speaking. Every level check includes a live conversation task scored for pronunciation and fluency." },
      { title: "Progress you can share", text: "Your profile keeps a verifiable record of completed levels, XP and streaks you can show to employers or universities." },
      { title: "Aligned to TOPIK levels", text: "Certificate levels map onto TOPIK 1–6, so your preparation doubles as exam preparation." },
    ],
    sections: [
      {
        heading: "Credentials for jobs, visas and study",
        body: "Indian learners use Korean certificates for Korea-facing employers, higher study applications and cultural exchange programmes. Urinara's level records give you structured evidence of what you have mastered, level by level.",
      },
      {
        heading: "Start with the placement test",
        body: "Not sure which certificate level to aim for? The free six-minute placement test places you on the path, and your first level check is included with your course.",
      },
    ],
    ctaPrimary: { label: "View course levels", to: "/courses" },
    ctaSecondary: { label: "Take the placement test", to: "/topik" },
  },
  {
    slug: "/exam-prep",
    metaTitle: "Exam Korean Language & TOPIK Prep Courses | Urinara",
    metaDescription:
      "Prepare for your exam Korean language tests with confidence! Master TOPIK vocabulary, practice mock exams, and achieve top scores online with Urinara.",
    eyebrow: "Exam preparation",
    korean: "시험 준비",
    h1: "Korean exam preparation with timed mocks and real strategy",
    intro:
      "TOPIK-style mock papers, listening strategy, writing templates and vocabulary drills — a preparation plan that tells you exactly what to do each week before exam day.",
    bulletsHeading: "What exam prep includes",
    bullets: [
      { title: "Timed TOPIK mock papers", text: "TOPIK I and TOPIK II mocks with the real section structure and time pressure, so exam day holds no surprises." },
      { title: "Listening strategy", text: "How to catch the question before the audio finishes, and what to do when you miss a line." },
      { title: "Writing templates", text: "Sentence frames for TOPIK II short and long writing that fit the rubric, not memorised essays." },
      { title: "Weekly study plan", text: "A week-by-week schedule that balances vocabulary, grammar, listening and mock papers." },
    ],
    sections: [
      {
        heading: "Preparation that starts from your level",
        body: "Your placement test result sets your starting mock paper and study plan. Weak areas from practice feed back into your daily missions, so revision targets what you actually get wrong.",
      },
      {
        heading: "Speaking still counts",
        body: "TOPIK does not test speaking, but strong speaking makes every other section easier — faster reading aloud, better listening prediction and more natural writing. Practice sessions keep your ear sharp.",
      },
    ],
    ctaPrimary: { label: "Try a free mock", to: "/topik" },
    ctaSecondary: { label: "Explore courses", to: "/courses" },
  },
  {
    slug: "/learn-korean-online",
    metaTitle: "Learn Korean Online | Interactive Smart Classes - Urinara",
    metaDescription:
      "Learn Korean online with AI-driven interactive lessons, vocabulary drills, and real-time speaking practice. Transform your language skills with Urinara!",
    eyebrow: "Online classes",
    korean: "온라인 학습",
    h1: "Learn Korean online with interactive smart classes",
    intro:
      "Browser-based Korean classes with audio, instant quiz feedback, pronunciation scoring and an AI tutor — study from home, on your phone, on your schedule.",
    bulletsHeading: "Why learners study online with Urinara",
    bullets: [
      { title: "Interactive by default", text: "Every lesson ends with you answering, tapping, recording or speaking — never just watching." },
      { title: "AI speaking practice", text: "Hold real conversations with an AI tutor that responds in Korean and gently corrects you." },
      { title: "Progress that persists", text: "Streaks, XP, completed missions and spaced-repetition reviews are saved to your account." },
      { title: "Made for Indian learners", text: "Explanations draw on Hindi and English sound patterns to make Hangul pronunciation click faster." },
    ],
    sections: [
      {
        heading: "A full class in 2–5 minutes",
        body: "Each online mission is a compact class: warm-up, vocabulary with native audio, one grammar pattern and a speaking task. Short enough for a commute, structured enough to compound week after week.",
      },
      {
        heading: "Study anywhere, stay consistent",
        body: "Your streak, daily missions and review queue follow you across devices. Consistency — not marathon sessions — is what carries learners from Hangul to real conversation.",
      },
    ],
    ctaPrimary: { label: "Start learning online", to: "/learn" },
    ctaSecondary: { label: "Browse courses", to: "/courses" },
  },
  {
    slug: "/free-korean-lessons",
    metaTitle: "Free Korean Lessons & Online Study Courses | Urinara",
    metaDescription:
      "Access curated free Korean lessons for beginners and advanced learners. Practice daily grammar, essential vocabulary, and conversation skills with Urinara!",
    eyebrow: "Free lessons",
    korean: "무료 레슨",
    h1: "Free Korean lessons for beginners and beyond",
    intro:
      "Curated free lessons with native audio, grammar notes and conversation drills — the fastest honest way to find out whether Urinara's method works for you.",
    bulletsHeading: "Inside the free lessons",
    bullets: [
      { title: "Greetings and introductions", text: "Your first real conversation: hello, who you are, where you are from — with audio to copy." },
      { title: "Hangul in small steps", text: "Consonants, vowels and syllable blocks taught as reading drills, not alphabet memorisation." },
      { title: "Essential daily vocabulary", text: "High-frequency words with spaced-repetition review so they actually stick." },
      { title: "Grammar you will use today", text: "One pattern per lesson with clear English explanations and instant practice." },
    ],
    sections: [
      {
        heading: "Free, but not watered down",
        body: "The free lessons come from the same curriculum as the full academy. Nothing is a demo or a teaser — if a lesson is free, it is complete, with audio, quiz and speaking task.",
      },
      {
        heading: "Keep the streak alive",
        body: "Sign up free to save progress, earn XP and unlock daily missions. Your streak is the single best predictor of whether free study turns into real fluency.",
      },
    ],
    ctaPrimary: { label: "Open the first lesson", to: "/learn" },
    ctaSecondary: { label: "Practice for free", to: "/practice" },
  },
  {
    slug: "/learn-korean-online-free",
    metaTitle: "Learn Korean Online Free | Interactive Lessons - Urinara",
    metaDescription:
      "Want to learn Korean online free? Explore rich self-study courses, pronunciation guides, and interactive exercises designed to build real fluency on Urinara!",
    eyebrow: "Free access",
    korean: "무료 시작",
    h1: "Learn Korean online, free — self-study that actually sticks",
    intro:
      "Self-study courses, pronunciation guides and interactive exercises you can start right now, no payment, no trial countdown — just the first steps of real fluency.",
    bulletsHeading: "What free self-study looks like here",
    bullets: [
      { title: "Interactive exercises", text: "Quizzes, flashcards and fill-in-the-blank drills that check your answer instantly." },
      { title: "Pronunciation guides", text: "Hangul sounds explained against English and Hindi sound patterns you already know." },
      { title: "Self-paced missions", text: "2–5 minute lessons you can fit into any day, in the order the curriculum prescribes." },
      { title: "Saved progress", text: "A free account keeps your streak, XP and review queue across sessions." },
    ],
    sections: [
      {
        heading: "Self-study with a spine",
        body: "Free online Korean study usually fails for one reason: no order. Urinara's free track is a sequence — each lesson assumes only what the previous ones taught — so you always know what to do next.",
      },
      {
        heading: "Upgrade only when you outgrow it",
        body: "When you want the AI tutor, pronunciation scoring and TOPIK mocks without limits, the full academy is there. Until then, the free track is a complete beginner course on its own.",
      },
    ],
    ctaPrimary: { label: "Start free, right now", to: "/learn" },
    ctaSecondary: { label: "Take the placement test", to: "/topik" },
  },
  {
    slug: "/korean-learning-website",
    metaTitle: "Top Korean Learning Website for All Levels | Urinara",
    metaDescription:
      "Discover the best Korean learning website for fast progress. Access smart AI tools, structured Hangul courses, and free study materials at Urinara today!",
    eyebrow: "The academy",
    korean: "우리나라 아카데미",
    h1: "A Korean learning website for every level — Hangul to TOPIK II",
    intro:
      "One website that takes you from your first syllable block to timed TOPIK mocks: structured courses, smart AI tools and free study materials in between.",
    bulletsHeading: "What makes it work for all levels",
    bullets: [
      { title: "A placement test first", text: "A free six-minute test puts you on the right rung of the curriculum from day one." },
      { title: "Structured Hangul courses", text: "Reading and writing taught as skills with drills and feedback, not an alphabet chart." },
      { title: "Smart AI tools", text: "An AI tutor for conversation, pronunciation scoring, and mistake tracking that resurfaces your weak spots." },
      { title: "Free study materials", text: "Study guides, vocabulary lists and listening drills available without payment." },
    ],
    sections: [
      {
        heading: "Built mobile-first",
        body: "Most Korean study happens on a phone. Urinara is designed for small Android screens first — thumb-friendly buttons, bottom navigation and lessons sized for one hand.",
      },
      {
        heading: "One place, no juggling",
        body: "Courses, practice, TOPIK prep, progress tracking and the AI tutor live under one login. Your mistakes, streak and level history follow you across every section of the site.",
      },
    ],
    ctaPrimary: { label: "See how it works", to: "/courses" },
    ctaSecondary: { label: "Take the placement test", to: "/topik" },
  },
  {
    slug: "/beginner-korean-lessons",
    metaTitle: "Beginner Korean Lessons Online | Learn Hangul - Urinara",
    metaDescription:
      "Master the basics with structured beginner Korean lessons. Learn step-by-step Hangul reading, writing, and daily conversation easily online with Urinara!",
    eyebrow: "Beginner track",
    korean: "입문 과정",
    h1: "Beginner Korean lessons: step-by-step Hangul to first conversation",
    intro:
      "Structured beginner lessons that take you from zero to daily conversation — step-by-step Hangul reading and writing, then the words and patterns you will use every day.",
    bulletsHeading: "The beginner path, step by step",
    bullets: [
      { title: "Step 1 — Hangul reading", text: "Consonant and vowel sounds, syllable blocks, and reading drills with native audio." },
      { title: "Step 2 — Hangul writing", text: "Stroke order and spelling practice so you can type and hand-write Korean correctly." },
      { title: "Step 3 — Daily vocabulary", text: "Greetings, numbers, food, directions and time — reviewed with spaced repetition." },
      { title: "Step 4 — First conversations", text: "Simple sentence patterns for introducing yourself, ordering food and asking questions." },
    ],
    sections: [
      {
        heading: "Hangul in days, not months",
        body: "Hangul was designed to be learnable. With sound-by-sound explanations pitched to English and Hindi speakers and daily reading drills, most learners read their first Korean sentences within a week.",
      },
      {
        heading: "Speaking from lesson one",
        body: "Beginners here do not stay silent. Every lesson ends with a speaking task — repeat after audio at first, then answer real questions — so confidence grows with vocabulary.",
      },
    ],
    ctaPrimary: { label: "Start beginner lessons", to: "/learn" },
    ctaSecondary: { label: "Practice Hangul", to: "/practice" },
  },
  {
    slug: "/korean-courses-with-certificate",
    metaTitle: "Online Korean Language Courses with Certificate | Urinara",
    metaDescription:
      "Earn recognized credentials with online Korean language courses with certificate options. Build professional language fluency flexibly online with Urinara!",
    eyebrow: "Certificate courses",
    korean: "수료증",
    h1: "Online Korean language courses with certificate options",
    intro:
      "Flexible online courses where each completed level earns a certificate — built for working learners who need credentials and professional fluency on their own schedule.",
    bulletsHeading: "Built for working learners",
    bullets: [
      { title: "Flexible schedule", text: "2–5 minute missions fit around a job or full-time studies; evenings, commutes, lunch breaks." },
      { title: "Level certificates", text: "Pass the level check — speaking included — and your certificate is recorded on your profile." },
      { title: "Professional vocabulary tracks", text: "Business Korean modules for workplace emails, meetings and interviews." },
      { title: "TOPIK-aligned levels", text: "Course levels map to TOPIK 1–6 so certificates double as exam milestones." },
    ],
    sections: [
      {
        heading: "Fluency you can point to",
        body: "A certificate matters only if the skill behind it is real. Level checks here test live speaking, listening and reading — so the credential on your profile represents what you can do in a room with a Korean speaker.",
      },
      {
        heading: "Start from your real level",
        body: "The placement test keeps experienced learners out of beginner material and gives true beginners a clean starting line. Certificates then follow at the pace you actually study.",
      },
    ],
    ctaPrimary: { label: "Browse certificate courses", to: "/courses" },
    ctaSecondary: { label: "Take the placement test", to: "/topik" },
  },
  {
    slug: "/interactive-korean-learning",
    metaTitle: "Interactive Korean Learning & Smart AI Coaching | Urinara",
    metaDescription:
      "Experience interactive Korean learning powered by smart AI tools. Get instant feedback on grammar, pronunciation, and vocabulary in real-time on Urinara!",
    eyebrow: "AI coaching",
    korean: "AI 코칭",
    h1: "Interactive Korean learning with instant AI feedback",
    intro:
      "Grammar corrections, pronunciation scores and vocabulary feedback in real time — a smart AI coach that reacts to what you say, not a playlist of videos.",
    bulletsHeading: "Real-time feedback, every session",
    bullets: [
      { title: "Pronunciation scoring", text: "Speak and get scored on pronunciation, fluency and confidence — with the exact syllables to fix." },
      { title: "Grammar corrections", text: "The AI tutor flags particle and ending mistakes as you make them, with a short explanation." },
      { title: "Vocabulary coaching", text: "Words you miss are tracked and resurfaced by the spaced-repetition engine until they stick." },
      { title: "Mistake memory", text: "Your weak spots persist across sessions, so coaching targets your patterns, not generic ones." },
    ],
    sections: [
      {
        heading: "A coach, not a chatbot",
        body: "The AI tutor keeps the conversation at your level, introduces one new pattern at a time and remembers what you struggled with last session — the way a good human tutor would.",
      },
      {
        heading: "Feedback loops that shorten",
        body: "The gap between making a mistake and fixing it is where learning happens. Interactive lessons collapse that gap to seconds instead of the next day's class.",
      },
    ],
    ctaPrimary: { label: "Meet the AI tutor", to: "/learn" },
    ctaSecondary: { label: "Try the practice hub", to: "/practice" },
  },
  {
    slug: "/learn-korean-language",
    metaTitle: "I Want to Learn Korean Language Online | Urinara Prep",
    metaDescription:
      "Saying 'I want to learn Korean language' is your first step to fluency! Join Urinara today for fun, effective, and structured online lessons made for you.",
    eyebrow: "First steps",
    korean: "한국어 배우기",
    h1: "'I want to learn Korean' — here is exactly how to start",
    intro:
      "You said it, now do it: take the free placement test, start your first 5-minute lesson today, and let a structured path carry you from Hangul to real conversation.",
    bulletsHeading: "Your first week, planned for you",
    bullets: [
      { title: "Day 1 — Placement", text: "A free six-minute test finds your true starting point, even if that is zero." },
      { title: "Days 2–3 — Hangul", text: "First sounds and syllable blocks with audio you can replay until reading clicks." },
      { title: "Days 4–5 — First words", text: "Greetings and survival phrases, spoken out loud in every lesson." },
      { title: "Days 6–7 — First conversation", text: "Introduce yourself to the AI tutor and finish week one having spoken Korean." },
    ],
    sections: [
      {
        heading: "Motivation is not the plan — structure is",
        body: "Everyone starts excited; most quit by lesson ten. Urinara's streaks, daily missions and 2–5 minute lessons are designed so the plan survives the days motivation does not.",
      },
      {
        heading: "Fun and effective, not either",
        body: "XP, coins, badges and a leaderboard keep it game-like; timed level checks and TOPIK mocks keep it honest. You need both to reach fluency.",
      },
    ],
    ctaPrimary: { label: "Start your first lesson", to: "/learn" },
    ctaSecondary: { label: "Take the placement test", to: "/topik" },
  },
  {
    slug: "/korean-classes-near-me",
    metaTitle: "Korean Language Classes Near Me | Online Study - Urinara",
    metaDescription:
      "Searching for top Korean language classes near me? Experience flexible, world-class online learning from the comfort of your home anytime with Urinara!",
    eyebrow: "Online classes",
    korean: "온라인 수업",
    h1: "Searching Korean classes near you? Take them from home instead",
    intro:
      "No commute, no fixed timetable, no waiting for the next batch: live-quality Korean classes online, from your home, any hour that suits you.",
    bulletsHeading: "Better than the nearest classroom",
    bullets: [
      { title: "Any hour, any day", text: "Classes are recorded lessons and live AI conversation — available at 6 am or midnight." },
      { title: "No batch waiting", text: "Offline institutes start new batches on their calendar; you start today." },
      { title: "Speaking guaranteed", text: "Many local classes run 40 students wide and rarely hear you speak. Here, every lesson ends with you talking." },
      { title: "India-friendly pricing", text: "A free tier to start, and paid plans priced for Indian learners rather than imported syllabi." },
    ],
    sections: [
      {
        heading: "The classroom comes to you",
        body: "Structured lessons with native audio, instant quizzes, pronunciation scoring and an AI tutor give you what a good offline class would — minus the travel, the schedule and the batch of forty.",
      },
      {
        heading: "Try it before you decide",
        body: "Take the free placement test and complete your first lesson tonight. If the format works for you, continue for free as long as you like before considering the full academy.",
      },
    ],
    ctaPrimary: { label: "Start from home tonight", to: "/learn" },
    ctaSecondary: { label: "See course levels", to: "/courses" },
  },
  {
    slug: "/korean-language-app",
    metaTitle: "Korean Language App Free | Mobile Study Tools - Urinara",
    metaDescription:
      "Learn on the go with our Korean language app free access! Practice Hangul, memorize essential vocabulary, and master conversation daily with Urinara online.",
    eyebrow: "Mobile study",
    korean: "모바일 학습",
    h1: "A free Korean study app experience in your browser",
    intro:
      "No install, no storage squeeze: Urinara runs like a mobile app in your phone's browser — Hangul practice, vocabulary review and daily conversation on the go.",
    bulletsHeading: "Made for your phone",
    bullets: [
      { title: "Mobile-first design", text: "Thumb-sized buttons, bottom navigation and one-handed lesson layouts on every screen." },
      { title: "Free access on the go", text: "Open the site and study — the free tier works fully in any mobile browser." },
      { title: "Streaks and reminders", text: "Daily missions and streak tracking keep your practice alive between commutes." },
      { title: "Speak into your phone", text: "Microphone-based speaking tasks and pronunciation scoring, right in the browser." },
    ],
    sections: [
      {
        heading: "App feel, zero download",
        body: "Urinara installs nothing: open the site, add it to your home screen, and it behaves like an app. Updates are instant — you are always on the latest version.",
      },
      {
        heading: "Five minutes is a real session",
        body: "Mobile study wins by frequency, not duration. Missions are sized for a metro ride or a tea break, and every one of them counts toward your streak and level.",
      },
    ],
    ctaPrimary: { label: "Open it on your phone", to: "/learn" },
    ctaSecondary: { label: "Try a practice drill", to: "/practice" },
  },
  {
    slug: "/class-101-alternative",
    metaTitle: "Class 101 Korean Alternative | Smart Online Study - Urinara",
    metaDescription:
      "Searching for Class 101 Korean lessons? Discover Urinara's interactive AI-powered platform with structured learning paths and free study guides today!",
    eyebrow: "Comparison",
    korean: "비교",
    h1: "Looking for Class 101 Korean? Compare Urinara Academy",
    intro:
      "If you are considering Class 101 for Korean, see what a speaking-first, India-focused alternative offers: structured paths, an AI tutor and a free starting tier.",
    bulletsHeading: "How Urinara differs",
    bullets: [
      { title: "Speaking-first method", text: "Every lesson ends with you speaking Korean out loud, scored for pronunciation and fluency." },
      { title: "Built for Indian learners", text: "Sound explanations and examples pitched to English and Hindi speakers, with INR-friendly pricing." },
      { title: "Structured level paths", text: "A placement test, level checks and TOPIK-aligned milestones instead of browsing loose class videos." },
      { title: "Free starting tier", text: "Study the beginner track free before paying for anything." },
    ],
    sections: [
      {
        heading: "Classes vs a learning system",
        body: "Marketplace platforms sell you class videos made by many creators. Urinara is a single structured system — placement, missions, review, level checks — where every part knows what you struggled with yesterday.",
      },
      {
        heading: "Try both fairly",
        body: "Start free here, finish the Hangul module and one conversation with the AI tutor, and judge the method on results rather than marketing.",
      },
    ],
    ctaPrimary: { label: "Start free and compare", to: "/learn" },
    ctaSecondary: { label: "Explore the curriculum", to: "/courses" },
  },
  {
    slug: "/king-sejong-institute-alternative",
    metaTitle: "King Sejong Institute Online Classes Alternative | Urinara",
    metaDescription:
      "Complement your King Sejong Institute online classes with Urinara's smart AI study tools, vocabulary drills, and interactive speaking practice online!",
    eyebrow: "Comparison",
    korean: "비교",
    h1: "King Sejong Institute classes + Urinara's AI study tools",
    intro:
      "King Sejong Institute is a respected way to learn Korean. Urinara fits alongside it — daily speaking practice, vocabulary drills and AI feedback between your online classes.",
    bulletsHeading: "Where Urinara fits your week",
    bullets: [
      { title: "Daily speaking reps", text: "Institute classes meet a few times a week; your pronunciation needs reps every day." },
      { title: "Vocabulary between classes", text: "Spaced-repetition drills keep new words alive until the next lesson recycles them." },
      { title: "Instant pronunciation feedback", text: "Hear yourself scored immediately — something even the best classroom cannot do per student." },
      { title: "Exam-aligned practice", text: "TOPIK-style mocks and timed drills that mirror what institute curricula build toward." },
    ],
    sections: [
      {
        heading: "A complement, not a replacement",
        body: "Many learners keep their King Sejong Institute enrolment and add Urinara for the daily practice layer: 2–5 minute missions, AI conversation and mistake tracking on the days between classes.",
      },
      {
        heading: "Or study fully online with us",
        body: "If there is no Sejong campus near you or the timetable does not fit, Urinara's full path from Hangul to TOPIK prep runs entirely online, on your schedule.",
      },
    ],
    ctaPrimary: { label: "Start daily practice", to: "/practice" },
    ctaSecondary: { label: "See the full path", to: "/courses" },
  },
  {
    slug: "/korean-degree-online",
    metaTitle: "Korean Degree Online & Academic Language Study | Urinara",
    metaDescription:
      "Preparing for a Korean degree online? Build strong academic Korean skills, advanced grammar, and TOPIK test readiness with interactive tools at Urinara!",
    eyebrow: "Academic prep",
    korean: "학술 한국어",
    h1: "Preparing for a Korean degree online? Build the base here",
    intro:
      "University Korean programmes and TOPIK-level entry requirements demand advanced grammar and academic reading. Urinara is the interactive tool that gets you there.",
    bulletsHeading: "Academic readiness tools",
    bullets: [
      { title: "Advanced grammar track", text: "Complex endings, formal registers and academic sentence patterns beyond beginner conversation." },
      { title: "TOPIK II readiness", text: "Timed mocks and writing templates aimed at the levels universities ask for." },
      { title: "Academic vocabulary", text: "High-register words and news-style reading practice for formal contexts." },
      { title: "Consistent daily reps", text: "Degree prep takes years; streaks, missions and spaced review are what keep daily study alive." },
    ],
    sections: [
      {
        heading: "Before the degree, the foundation",
        body: "A Korean degree programme assumes you arrive reading comfortably and speaking at an intermediate level. Urinara's intermediate and advanced tracks build exactly that base, on your schedule.",
      },
      {
        heading: "Score the entry requirement",
        body: "Most Korean university programmes ask for TOPIK II level 3 or higher. Targeted mock practice and writing feedback aim your preparation at that number.",
      },
    ],
    ctaPrimary: { label: "Build your base", to: "/courses" },
    ctaSecondary: { label: "Try a TOPIK mock", to: "/topik" },
  },
];

export function landingFor(slug: string): SeoLanding {
  const landing = seoLandings.find((l) => l.slug === slug);
  if (!landing) throw new Error(`No SEO landing data for ${slug}`);
  return landing;
}

// Deterministic interlinking: every landing page links to the next three.
export function getRelatedLandings(slug: string): SeoLanding[] {
  const i = seoLandings.findIndex((l) => l.slug === slug);
  if (i === -1) return seoLandings.slice(0, 3);
  return [1, 2, 3].map((k) => seoLandings[(i + k) % seoLandings.length]!);
}
