import { createFileRoute } from "@tanstack/react-router";

import { KeywordLanding } from "@/components/seo/KeywordLanding";
import { landingFor } from "@/lib/seo-landings";

const landing = landingFor("/beginner-korean-lessons");

export const Route = createFileRoute("/beginner-korean-lessons")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: landing.metaTitle },
      { name: "description", content: landing.metaDescription },
      { property: "og:title", content: landing.metaTitle },
      { property: "og:description", content: landing.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://urinara.in/beginner-korean-lessons" },
    ],
    links: [{ rel: "canonical", href: "https://urinara.in/beginner-korean-lessons" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <KeywordLanding landing={landing} />;
}
