-- Revoke direct execution of SECURITY DEFINER trigger functions from API roles
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.sync_leaderboard_entry() FROM anon, authenticated;

-- Restrict leaderboard reads to signed-in users only
DROP POLICY IF EXISTS "leaderboard readable" ON public.leaderboard_entries;
CREATE POLICY "Leaderboard readable by signed-in users"
ON public.leaderboard_entries
FOR SELECT
TO authenticated
USING (true);