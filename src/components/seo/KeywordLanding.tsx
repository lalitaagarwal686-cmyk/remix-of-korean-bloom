import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { getRelatedLandings, type SeoLanding } from "@/lib/seo-landings";

export function KeywordLanding({ landing }: { landing: SeoLanding }) {
  const related = getRelatedLandings(landing.slug);

  return (
    <>
      <Section className="pb-8 pt-12 sm:pt-16">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            <span className="font-kr text-primary">{landing.korean}</span>
            {landing.eyebrow}
          </span>
          <h1 className="mt-4 text-4xl leading-tight font-semibold text-balance sm:text-5xl">
            {landing.h1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{landing.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="min-h-11">
              <Link to={landing.ctaPrimary.to}>
                {landing.ctaPrimary.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-11">
              <Link to={landing.ctaSecondary.to}>{landing.ctaSecondary.label}</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeading align="left" eyebrow="Why Urinara" korean="우리나라" title={landing.bulletsHeading} />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {landing.bullets.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 60} className="surface-card flex gap-3 p-5">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {landing.sections.map((s, i) => (
        <Section key={s.heading} tone={i % 2 === 1 ? "muted" : "default"}>
          <Reveal className="max-w-2xl">
            <h2 className="text-2xl leading-tight font-semibold text-balance sm:text-3xl">{s.heading}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        </Section>
      ))}

      <Section tone="muted">
        <SectionHeading align="left" eyebrow="Keep exploring" korean="더 보기" title="Related guides" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={r.slug}
              className="surface-card group flex flex-col p-5 transition-colors hover:border-primary/40"
            >
              <span className="font-kr text-sm text-primary">{r.korean}</span>
              <span className="mt-1 font-display font-semibold">{r.h1}</span>
              <span className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                Read the guide
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
