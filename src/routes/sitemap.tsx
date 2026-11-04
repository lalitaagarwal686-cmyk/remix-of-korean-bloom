import { useMemo } from "react";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { sitemapStaticPaths } from "@/lib/sitemap";
import { groupSitemapPaths, prettifyPath } from "@/lib/sitemap-pages";

export const Route = createFileRoute("/sitemap")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Sitemap — Urinara Academy" },
      {
        name: "description",
        content:
          "An organised list of every public page on Urinara Academy: lessons, courses, speaking practice, TOPIK preparation and study guides for Korean learners in India.",
      },
      { property: "og:title", content: "Sitemap — Urinara Academy" },
      {
        property: "og:description",
        content:
          "Browse every public page of Urinara Academy — lessons, courses, practice, TOPIK prep and study guides.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://urinara.in/sitemap" },
    ],
    links: [{ rel: "canonical", href: "https://urinara.in/sitemap" }],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  const router = useRouter();
  const groups = useMemo(() => groupSitemapPaths(sitemapStaticPaths(router)), [router]);
  const total = groups.reduce((sum, g) => sum + g.links.length, 0);

  return (
    <>
      <Section className="pb-4 pt-12 sm:pt-16">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            <span className="font-kr text-primary">사이트맵</span>
            Site map
          </span>
          <h1 className="mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            Every page, one place
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            All {total} public pages of Urinara Academy, organised by topic. This page updates
            automatically as pages are added or removed, and the machine-readable version lives at{" "}
            <a
              href="/sitemap.xml"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              /sitemap.xml
            </a>
            .
          </p>
        </Reveal>
      </Section>

      {groups.map((group, i) => (
        <Section key={group.category.title} tone={i % 2 === 1 ? "muted" : "default"}>
          <SectionHeading
            align="left"
            eyebrow="Public pages"
            korean={group.category.korean}
            title={group.category.title}
          />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {group.category.description}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.links.map((path, j) => (
              <Reveal as="li" key={path} delay={j * 40}>
                <Link
                  to={path}
                  className="surface-card group flex items-center justify-between gap-3 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="font-display font-medium">{prettifyPath(path)}</span>
                  <ExternalLink
                    className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Section>
      ))}
    </>
  );
}
