import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/app/AppShell";

export const Route = createFileRoute("/app/freetalk")({
  head: () => ({
    meta: [
      { title: "Free talk — Urinara Academy" },
      { name: "description", content: "Free talk in Urinara Academy, the speaking-first AI Korean tutor for Indian learners." },
      { property: "og:title", content: "Free talk — Urinara Academy" },
      { property: "og:description", content: "Free talk in Urinara Academy, the speaking-first AI Korean tutor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader title="Free talk" korean="자유대화" description="This area is being wired to your live learning data." />
      <div className="surface-card p-6 text-sm text-muted-foreground">
        Coming up next: full Free talk experience connected to your Urinara Academy account.
      </div>
    </>
  );
}
