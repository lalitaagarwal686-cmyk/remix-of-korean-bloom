// Groupings for the HTML sitemap page (/sitemap).
// Categories list known public paths; any public page NOT listed is appended
// automatically under "More pages", so new routes appear without edits here and
// deleted routes drop out (grouping is filtered against the live route set).

export interface SitemapCategory {
  title: string;
  korean: string;
  description: string;
  paths: readonly string[];
}

export const sitemapCategories: readonly SitemapCategory[] = [
  {
    title: "Main pages",
    korean: "기본",
    description: "The core pages of Urinara Academy.",
    paths: ["/", "/learn", "/courses", "/practice", "/topik", "/progress", "/profile"],
  },
  {
    title: "Learn Korean online",
    korean: "온라인 학습",
    description: "Guides to learning Korean online, from beginner lessons to interactive study.",
    paths: [
      "/learn-korean-online",
      "/learn-korean-language",
      "/korean-learning-website",
      "/interactive-korean-learning",
      "/korean-language-app",
      "/beginner-korean-lessons",
    ],
  },
  {
    title: "Free lessons & courses",
    korean: "무료 강의",
    description: "Free ways to start learning Korean today.",
    paths: ["/free-courses", "/free-korean-lessons", "/learn-korean-online-free"],
  },
  {
    title: "Certificates & exams",
    korean: "시험 준비",
    description: "Certified courses, degrees and TOPIK exam preparation.",
    paths: [
      "/certificates",
      "/korean-courses-with-certificate",
      "/korean-degree-online",
      "/exam-prep",
    ],
  },
  {
    title: "Classes & alternatives",
    korean: "클래스 비교",
    description: "Local classes and how Urinara compares with other platforms.",
    paths: [
      "/korean-classes-near-me",
      "/class-101-alternative",
      "/king-sejong-institute-alternative",
    ],
  },
];

const wordFixes: Record<string, string> = {
  topik: "TOPIK",
  ai: "AI",
  hangul: "Hangul",
};

export function prettifyPath(path: string): string {
  if (path === "/") return "Home";
  return path
    .replace(/^\//, "")
    .split("-")
    .map((word) => wordFixes[word] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function groupSitemapPaths(
  paths: readonly string[],
): { category: SitemapCategory; links: string[] }[] {
  const available = new Set(paths);
  const groups: { category: SitemapCategory; links: string[] }[] = [];
  for (const category of sitemapCategories) {
    const links = category.paths.filter((p) => available.has(p));
    if (links.length > 0) groups.push({ category, links });
  }
  const known = new Set(sitemapCategories.flatMap((c) => [...c.paths]));
  const extra = paths.filter((p) => !known.has(p));
  if (extra.length > 0) {
    groups.push({
      category: {
        title: "More pages",
        korean: "더 보기",
        description: "Every other public page on the site.",
        paths: [],
      },
      links: extra,
    });
  }
  return groups;
}
