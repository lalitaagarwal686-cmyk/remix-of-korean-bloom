import { createFileRoute } from "@tanstack/react-router";

import { KeywordLanding } from "@/components/seo/KeywordLanding";
import { landingFor } from "@/lib/seo-landings";

const landing = landingFor("/class-101-alternative");

export const Route = createFileRoute("/class-101-alternative")({
  head: () => ({
    meta: [
      { title: landing.metaTitle },
      { name: "description", content: landing.metaDescription },
      { property: "og:title", content: landing.metaTitle },
      { property: "og:description", content: landing.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://korean-harmony-path.lovable.app/class-101-alternative" },
    ],
    links: [{ rel: "canonical", href: "https://korean-harmony-path.lovable.app/class-101-alternative" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <KeywordLanding landing={landing} />;
}
