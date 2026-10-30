import { generateText } from "ai";

import { createLovableAiGatewayProvider, TUTOR_MODEL } from "./ai-gateway.server";

export type WordExplanation = {
  term: string;
  romanization: string;
  hanja: string;
  partOfSpeech: string;
  meaningEn: string;
  meaningHi: string;
  topikLevel: number;
  topikReason: string;
  usage: string;
  formality: string;
  collocations: string[];
  examples: { ko: string; romanization: string; en: string }[];
  related: string[];
  demoMode: boolean;
  error?: string;
};

function demo(term: string, error?: string): WordExplanation {
  return {
    term,
    romanization: "",
    hanja: "",
    partOfSpeech: "—",
    meaningEn: "AI explanation is unavailable right now. Try the Naver Dictionary link below.",
    meaningHi: "",
    topikLevel: 0,
    topikReason: "",
    usage: "",
    formality: "",
    collocations: [],
    examples: [],
    related: [],
    demoMode: true,
    error,
  };
}

export async function explainTerm(term: string): Promise<WordExplanation> {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key) return demo(term);
  const system =
    "You are a Korean lexicographer and TOPIK examiner teaching Indian learners (English + Hindi). " +
    "Explain the given Korean word or phrase. Estimate its TOPIK level 1-6 using the NIIED vocabulary tiers (1-2 = TOPIK I everyday basics, 3-4 = intermediate social/work, 5-6 = abstract, academic, news, idioms). " +
    'Reply with strict JSON only: {"term":"","romanization":"","hanja":"","partOfSpeech":"","meaningEn":"","meaningHi":"","topikLevel":1,"topikReason":"","usage":"","formality":"","collocations":[""],"examples":[{"ko":"","romanization":"","en":""}],"related":[""]}. ' +
    "Give 3 examples, 3-5 collocations (with particles), 3-5 related words. hanja empty if native Korean. If the input is not Korean, translate it to the most common Korean word and explain that.";
  try {
    const gateway = createLovableAiGatewayProvider(key);
    const { text } = await generateText({ model: gateway(TUTOR_MODEL), system, prompt: term });
    const cleaned = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/, "");
    const s = cleaned.indexOf("{");
    const e = cleaned.lastIndexOf("}");
    const parsed = JSON.parse(cleaned.slice(s, e + 1)) as Partial<WordExplanation>;
    const level = Math.min(6, Math.max(1, Math.round(Number(parsed.topikLevel) || 1)));
    return {
      ...demo(term),
      ...parsed,
      term: parsed.term || term,
      topikLevel: level,
      collocations: parsed.collocations ?? [],
      examples: parsed.examples ?? [],
      related: parsed.related ?? [],
      demoMode: false,
    };
  } catch (error) {
    console.error("explain term failed", error);
    const status = (error as { statusCode?: number }).statusCode;
    const msg =
      status === 402
        ? "AI credits are used up for this workspace."
        : status === 429
          ? "Too many requests — please wait a moment and try again."
          : undefined;
    return demo(term, msg);
  }
}
