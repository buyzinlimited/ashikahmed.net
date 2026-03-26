<script setup>
const supabase = useSupabaseClient();

const logout = async () => {
  await supabase.auth.signOut();
};
</script>

<template>
  <div class="min-h-screen bg-slate-100">
    <Header />

    <div class="flex items-start">
      <aside
        class="bg-white h-screen fixed top-16 left-0 w-64 md:block hidden z-50"
      >
        <nav class="flex-1 px-4 py-6 overflow-y-auto">
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/dashboard"
                active-class="bg-emerald-50 text-emerald-600 font-medium"
                exact-active-class="bg-emerald-50 text-emerald-700 font-semibold"
                class="flex items-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <LazyIconsHome class="size-5 mr-2" />
                <span>Dashboard</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/dashboard/projects"
                active-class="bg-emerald-50 text-emerald-600 font-medium"
                exact-active-class="bg-emerald-50 text-emerald-700 font-semibold"
                class="flex items-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <LazyIconsProject class="size-5 mr-2" />
                <span>Projects</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/dashboard/posts"
                active-class="bg-emerald-50 text-emerald-600 font-medium"
                exact-active-class="bg-emerald-50 text-emerald-700 font-semibold"
                class="flex items-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <LazyIconsEdit class="size-5 mr-2" />
                <span>Posts</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/dashboard/clients"
                active-class="bg-emerald-50 text-emerald-600 font-medium"
                exact-active-class="bg-emerald-50 text-emerald-700 font-semibold"
                class="flex items-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <LazyIconsClients class="size-5 mr-2" />
                <span>Clients</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/dashboard/settings"
                active-class="bg-emerald-50 text-emerald-600 font-medium"
                exact-active-class="bg-emerald-50 text-emerald-700 font-semibold"
                class="flex items-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <LazyIconsSettings class="size-5 mr-2" />
                <span>Settings</span>
              </NuxtLink>
            </li>

            <li>
              <button
                type="button"
                @click="logout"
                class="w-full flex items-center p-2 rounded-lg hover:bg-gray-50 transition"
              >
                <IconsLogout class="size-5 mr-2" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="flex-1 md:ml-64 p-6 overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
