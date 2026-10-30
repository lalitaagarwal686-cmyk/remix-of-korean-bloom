import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { explainTerm } from "./explain.server";

export const explainKoreanTerm = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ term: z.string().trim().min(1).max(80) }).parse(input))
  .handler(async ({ data }) => explainTerm(data.term));
