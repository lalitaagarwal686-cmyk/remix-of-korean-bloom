import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { BookmarkPlus, ExternalLink, Loader2, Search, Sparkles, Volume2 } from "lucide-react";
import { toast } from "sonner";

import { PageHeader } from "@/components/app/AppShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { naverHanjaUrl, naverKoEnUrl, naverKoKoUrl } from "@/lib/naver";
import { explainKoreanTerm } from "@/lib/vocab.functions";
import type { WordExplanation } from "@/lib/explain.server";

export const Route = createFileRoute("/app/vocabulary")({
  head: () => ({
    meta: [
      { title: "TOPIK 1–6 Vocabulary Explorer & AI Word Explainer — Urinara Academy" },
      {
        name: "description",
        content:
          "Look up any Korean word or phrase: AI explains meaning, usage, Hindi translation and its TOPIK level 1–6, with Naver Dictionary links.",
      },
      { property: "og:title", content: "TOPIK 1–6 Vocabulary Explorer — Urinara Academy" },
      { property: "og:description", content: "AI explains any Korean word with its TOPIK level, usage and examples." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

/** Editable starter words per TOPIK level (tap to explain). */
const LEVEL_WORDS: Record<number, string[]> = {
  1: ["안녕하세요", "학교", "먹다", "물", "친구", "가족", "사과", "어디"],
  2: ["약속", "주말", "편하다", "고향", "여행하다", "취미", "날씨", "준비"],
  3: ["경험", "다행이다", "설레다", "환경", "참석하다", "눈치를 보다", "부담"],
  4: ["추진하다", "효율적", "갈등", "인식", "발전", "영향을 미치다", "근거"],
  5: ["양극화", "모색하다", "불가피하다", "지속 가능성", "타당하다", "파급 효과"],
  6: ["일석이조", "역지사지", "패러다임", "간과하다", "도모하다", "귀추가 주목되다"],
};

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ko-KR";
  u.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

function Page() {
  const explain = useServerFn(explainKoreanTerm);
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WordExplanation | null>(null);

  async function run(term: string) {
    const t = term.trim();
    if (!t) return;
    setQuery(t);
    setLoading(true);
    try {
      const r = await explain({ data: { term: t } });
      setResult(r);
      if (r.error) toast.error(r.error);
    } catch {
      toast.error("Please sign in to use the AI explainer.");
    } finally {
      setLoading(false);
    }
  }

  async function save() {
    if (!result) return;
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) {
      toast.error("Sign in to save words.");
      return;
    }
    const { error } = await supabase.from("user_vocabulary").insert({
      user_id: auth.user.id,
      custom_hangul: result.term,
      custom_english: result.meaningEn,
    });
    if (error) toast.error("Could not save this word.");
    else toast.success(`Saved ${result.term} to your wordbook`);
  }

  return (
    <>
      <PageHeader
        title="Vocabulary Explorer"
        korean="어휘 사전"
        description="Type any Korean word or phrase — AI explains its meaning, usage and TOPIK level (1–6)."
      />

      <form
        className="surface-card flex gap-2 p-3"
        onSubmit={(e) => {
          e.preventDefault();
          void run(query);
        }}
      >
        <label htmlFor="vocab-q" className="sr-only">
          Korean word or phrase
        </label>
        <Input
          id="vocab-q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. 설레다, 눈치를 보다, 학교"
          className="h-12 font-kr text-base"
          maxLength={80}
        />
        <Button type="submit" className="h-12 shrink-0" disabled={loading || !query.trim()}>
          {loading ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
          <span className="hidden sm:inline">Explain</span>
        </Button>
      </form>

      <section className="mt-6" aria-labelledby="levels-h">
        <h2 id="levels-h" className="text-sm font-semibold text-muted-foreground">
          Browse by TOPIK level
        </h2>
        <div className="mt-2 flex flex-wrap gap-2" role="tablist">
          {[1, 2, 3, 4, 5, 6].map((l) => (
            <Button
              key={l}
              role="tab"
              aria-selected={level === l}
              size="sm"
              variant={level === l ? "default" : "outline"}
              onClick={() => setLevel(l)}
            >
              Level {l}
              <span className="text-xs opacity-70">{l <= 2 ? "TOPIK I" : "TOPIK II"}</span>
            </Button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {LEVEL_WORDS[level]!.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => void run(w)}
              className="rounded-full border border-border bg-card px-4 py-2 font-kr text-sm hover:bg-secondary"
            >
              {w}
            </button>
          ))}
        </div>
      </section>

      {loading && (
        <div className="surface-card mt-6 flex items-center gap-3 p-6 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Explaining {query}…
        </div>
      )}

      {result && !loading && <ResultCard r={result} onSave={save} />}
    </>
  );
}

function ResultCard({ r, onSave }: { r: WordExplanation; onSave: () => void }) {
  return (
    <article className="surface-card mt-6 p-5 sm:p-6" aria-live="polite">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="font-kr text-3xl font-semibold">{r.term}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {[r.romanization, r.hanja && `漢 ${r.hanja}`, r.partOfSpeech].filter(Boolean).join(" · ")}
          </p>
        </div>
        {r.topikLevel > 0 && (
          <Badge className="gap-1 text-sm">
            <Sparkles className="size-3.5" /> TOPIK Level {r.topikLevel}
          </Badge>
        )}
      </div>

      <p className="mt-4 text-base">{r.meaningEn}</p>
      {r.meaningHi && <p className="mt-1 text-sm text-muted-foreground">हिंदी: {r.meaningHi}</p>}
      {r.topikReason && <p className="mt-3 rounded-xl bg-secondary/70 p-3 text-sm">{r.topikReason}</p>}

      {r.usage && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold">How to use it</h3>
          <p className="mt-1 text-sm text-muted-foreground">{r.usage}</p>
          {r.formality && <p className="mt-1 text-sm text-muted-foreground">Formality: {r.formality}</p>}
        </div>
      )}

      {r.collocations.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Common pairings</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {r.collocations.map((c) => (
              <Badge key={c} variant="secondary" className="font-kr">
                {c}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {r.examples.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Example sentences</h3>
          <ul className="mt-2 grid gap-2">
            {r.examples.map((ex) => (
              <li key={ex.ko} className="flex items-start gap-2 rounded-xl border border-border p-3">
                <button
                  type="button"
                  aria-label={`Listen: ${ex.ko}`}
                  onClick={() => speak(ex.ko)}
                  className="mt-0.5 text-primary"
                >
                  <Volume2 className="size-4" />
                </button>
                <div className="min-w-0">
                  <p className="font-kr">{ex.ko}</p>
                  <p className="text-xs text-muted-foreground">{ex.romanization}</p>
                  <p className="text-sm text-muted-foreground">{ex.en}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {r.related.length > 0 && (
        <p className="mt-4 text-sm text-muted-foreground">
          Related: <span className="font-kr">{r.related.join(", ")}</span>
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => speak(r.term)}>
          <Volume2 className="size-4" /> Listen
        </Button>
        {!r.demoMode && (
          <Button size="sm" onClick={onSave}>
            <BookmarkPlus className="size-4" /> Save to wordbook
          </Button>
        )}
        <Button size="sm" variant="outline" asChild>
          <a href={naverKoEnUrl(r.term)} target="_blank" rel="noopener noreferrer">
            Naver Ko–En <ExternalLink className="size-3.5" />
          </a>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <a href={naverKoKoUrl(r.term)} target="_blank" rel="noopener noreferrer">
            Naver 국어사전 <ExternalLink className="size-3.5" />
          </a>
        </Button>
        {r.hanja && (
          <Button size="sm" variant="outline" asChild>
            <a href={naverHanjaUrl(r.hanja)} target="_blank" rel="noopener noreferrer">
              Naver 한자 <ExternalLink className="size-3.5" />
            </a>
          </Button>
        )}
      </div>
    </article>
  );
}
