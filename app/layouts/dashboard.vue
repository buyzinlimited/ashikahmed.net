<script setup>
const supabase = useSupabaseClient();

const user = ref(null);

onMounted(async () => {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
});
</script>

<template>
  <header class="bg-slate-900 sticky top-0 z-20">
    <div class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <nav class="flex items-center gap-6">
        <NuxtLink
          href="/dashboard/posts"
          class="text-white hover:text-emerald-100 font-medium"
          >Posts</NuxtLink
        >
        <NuxtLink
          href="/dashboard/projects"
          class="text-white hover:text-emerald-100 font-medium"
          >Projects</NuxtLink
        >
        <NuxtLink
          href="/dashboard/clients"
          class="text-white hover:text-emerald-100 font-medium"
          >Clients</NuxtLink
        >
      </nav>

      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2 cursor-pointer">
          <span class="text-white font-medium">{{ user?.email }}</span>
        </div>
      </div>
    </div>
  </header>

  <main class="w-full min-h-screen bg-slate-100 px-6 py-6">
    <slot />
  </main>
</template>
