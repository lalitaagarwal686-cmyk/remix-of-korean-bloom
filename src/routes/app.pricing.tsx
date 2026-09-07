import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/app/AppShell";

export const Route = createFileRoute("/app/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Urinara Academy" },
      { name: "description", content: "Pricing in Urinara Academy, the speaking-first AI Korean tutor for Indian learners." },
      { property: "og:title", content: "Pricing — Urinara Academy" },
      { property: "og:description", content: "Pricing in Urinara Academy, the speaking-first AI Korean tutor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader title="Pricing" korean="요금제" description="This area is being wired to your live learning data." />
      <div className="surface-card p-6 text-sm text-muted-foreground">
        Coming up next: full Pricing experience connected to your Urinara Academy account.
      </div>
    </>
  );
}
