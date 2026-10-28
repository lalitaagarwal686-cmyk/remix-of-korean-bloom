import { createFileRoute } from "@tanstack/react-router";

import { KeywordLanding } from "@/components/seo/KeywordLanding";
import { landingFor } from "@/lib/seo-landings";

const landing = landingFor("/exam-prep");

export const Route = createFileRoute("/exam-prep")({
  head: () => ({
    meta: [
      { title: landing.metaTitle },
      { name: "description", content: landing.metaDescription },
      { property: "og:title", content: landing.metaTitle },
      { property: "og:description", content: landing.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://korean-harmony-path.lovable.app/exam-prep" },
    ],
    links: [{ rel: "canonical", href: "https://korean-harmony-path.lovable.app/exam-prep" }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return <KeywordLanding landing={landing} />;
}
