// middleware/auth.js
export default defineNuxtRouteMiddleware(async (to, from) => {
  const supabase = useSupabaseClient();
  const user = supabase.auth.user();
  if (!user) return navigateTo("/login");
});
