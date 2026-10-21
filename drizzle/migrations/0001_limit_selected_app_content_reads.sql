DROP POLICY "Leaderboard readable by signed-in users" ON public.leaderboard_entries;
CREATE POLICY "Learners can read own leaderboard entry" ON public.leaderboard_entries FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY "curriculum steps readable" ON public.lesson_steps;
CREATE POLICY "curriculum steps readable by signed-in users" ON public.lesson_steps FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum tutors readable" ON public.tutors;
CREATE POLICY "curriculum tutors readable by signed-in users" ON public.tutors FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY "curriculum lessons readable" ON public.lessons;
CREATE POLICY "curriculum lessons readable by signed-in users" ON public.lessons FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);