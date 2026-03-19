<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();
const projects = ref([]);

const loadProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error(error);
  else projects.value = data;
};

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <main>
    <nav class="flex items-center justify-between">
      <h1 class="text-3xl font-bold mb-6">Projects</h1>
      <NuxtLink
        to="/dashboard/projects/create"
        class="bg-emerald-400 px-4 py-2 rounded inline-block text-white hover:underline"
        >Create New</NuxtLink
      >
    </nav>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
      >
        <img
          v-if="project.cover_url"
          :src="project.cover_url"
          :alt="project.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ project.title }}</h2>
          <p class="text-gray-600 mb-3">{{ project.summary }}</p>

          <div class="flex flex-wrap gap-2 mb-3">
            <span
              v-for="tech in project.tech_stack || []"
              :key="tech"
              class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex justify-between items-center">
            <NuxtLink
              :to="`/dashboard/projects/${project.id}`"
              class="text-blue-500 hover:underline text-sm"
            >
              View
            </NuxtLink>
            <NuxtLink
              :to="project.live_url"
              target="_blank"
              class="text-green-500 hover:underline text-sm"
              v-if="project.live_url"
            >
              Live
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
