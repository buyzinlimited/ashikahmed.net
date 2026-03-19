// middleware/auth.js
export default defineNuxtRouteMiddleware(async (to, from) => {
  const supabase = useSupabaseClient();
  const user = supabase.auth.getUser();
  if (!user) return navigateTo("/login");
});
