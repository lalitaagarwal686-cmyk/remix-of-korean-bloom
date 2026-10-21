DROP POLICY "curriculum grammar readable" ON public.grammar_topics;
CREATE POLICY "curriculum grammar readable by signed-in users" ON public.grammar_topics FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum topik readable" ON public.topik_categories;
CREATE POLICY "curriculum topik readable by signed-in users" ON public.topik_categories FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum missions readable" ON public.mission_templates;
CREATE POLICY "curriculum missions readable by signed-in users" ON public.mission_templates FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum scenarios readable" ON public.scenarios;
CREATE POLICY "curriculum scenarios readable by signed-in users" ON public.scenarios FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum vocab readable" ON public.vocabulary;
CREATE POLICY "curriculum vocab readable by signed-in users" ON public.vocabulary FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum badges readable" ON public.badges;
CREATE POLICY "curriculum badges readable by signed-in users" ON public.badges FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);