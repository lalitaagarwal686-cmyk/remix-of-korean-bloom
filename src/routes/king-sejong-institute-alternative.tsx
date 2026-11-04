import { createFileRoute } from "@tanstack/react-router";

import { KeywordLanding } from "@/components/seo/KeywordLanding";
import { landingFor } from "@/lib/seo-landings";

const landing = landingFor("/king-sejong-institute-alternative");

export const Route = createFileRoute("/king-sejong-institute-alternative")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: landing.metaTitle },
      { name: "description", content: landing.metaDescription },
      { property: "og:title", content: landing.metaTitle },
      { property: "og:description", content: landing.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://urinara.in/king-sejong-institute-alternative" },
    ],
    links: [{ rel: "canonical", href: "https://urinara.in/king-sejong-institute-alternative" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <KeywordLanding landing={landing} />;
}
