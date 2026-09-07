import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/app/AppShell";

export const Route = createFileRoute("/app/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Urinara Academy" },
      { name: "description", content: "Profile in Urinara Academy, the speaking-first AI Korean tutor for Indian learners." },
      { property: "og:title", content: "Profile — Urinara Academy" },
      { property: "og:description", content: "Profile in Urinara Academy, the speaking-first AI Korean tutor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader title="Profile" korean="프로필" description="This area is being wired to your live learning data." />
      <div className="surface-card p-6 text-sm text-muted-foreground">
        Coming up next: full Profile experience connected to your Urinara Academy account.
      </div>
    </>
  );
}
