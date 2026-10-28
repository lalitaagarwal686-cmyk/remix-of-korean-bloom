import { createFileRoute } from "@tanstack/react-router";

import { KeywordLanding } from "@/components/seo/KeywordLanding";
import { landingFor } from "@/lib/seo-landings";

const landing = landingFor("/interactive-korean-learning");

export const Route = createFileRoute("/interactive-korean-learning")({
  head: () => ({
    meta: [
      { title: landing.metaTitle },
      { name: "description", content: landing.metaDescription },
      { property: "og:title", content: landing.metaTitle },
      { property: "og:description", content: landing.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://korean-harmony-path.lovable.app/interactive-korean-learning" },
    ],
    links: [{ rel: "canonical", href: "https://korean-harmony-path.lovable.app/interactive-korean-learning" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <KeywordLanding landing={landing} />;
}
