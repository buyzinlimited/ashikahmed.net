<script setup>
const route = useRoute();
const supabase = useSupabaseClient();

const loading = ref(true);
const error = ref(null);
const project = ref(null);

const loadProject = async () => {
  const slug = route.params.slug;

  const { data, error: err } = await supabase
    .from("projects")
    .select(
      `
      *,
      category:categories (
        id,
        name,
        slug
      )
    `,
    )
    .eq("slug", slug)
    .single();

  if (err) {
    console.error(err);
    error.value = "Project not found";
  } else {
    project.value = data;
  }

  loading.value = false;
};

onMounted(() => {
  loadProject();
});
</script>

<template>
  <main class="bg-white/70">
    <div class="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <template v-if="loading">
        <div class="space-y-6 animate-pulse">
          <div class="h-8 w-2/3 bg-slate-200 rounded"></div>
          <div class="h-4 w-1/3 bg-slate-200 rounded"></div>
          <div class="h-64 w-full bg-slate-200 rounded-2xl"></div>
          <div class="space-y-3">
            <div class="h-4 bg-slate-200 rounded"></div>
            <div class="h-4 w-5/6 bg-slate-200 rounded"></div>
            <div class="h-4 w-4/6 bg-slate-200 rounded"></div>
          </div>
        </div>
      </template>

      <template v-else-if="project">
        <div class="py-4">
          <span
            class="text-sm text-emerald-600 font-medium uppercase tracking-wide"
          >
            {{ project.category?.name }}
          </span>

          <h1
            class="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
          >
            {{ project.title }}
          </h1>

          <p class="mt-4 text-slate-600 max-w-2xl">
            {{ project.summary }}
          </p>

          <!-- Tags -->
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tech in project.tech_stack || []"
              :key="tech"
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl py-6">
          <NuxtImg
            :src="project.cover_url"
            :alt="project.title"
            class="w-full object-cover"
          />
        </div>

        <div class="grid md:grid-cols-3 gap-10 items-start">
          <div class="md:col-span-2">
            <div class="prose max-w-none prose-slate">
              <h2 class="py-2">Project Overview</h2>
              <div v-html="project.description"></div>
            </div>
          </div>

          <aside class="space-y-6 md:sticky md:top-24 h-fit">
            <div
              class="p-6 rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-sm"
            >
              <h3 class="text-lg font-semibold text-slate-900 mb-5">
                Technologies Used
              </h3>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech_stack || []"
                  :key="tech"
                  class="px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-600"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="my-6 h-px bg-slate-200"></div>

              <div class="space-y-3">
                <a
                  v-if="project.live_url"
                  :href="project.live_url"
                  target="_blank"
                  class="flex items-center justify-center w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold"
                >
                  Live Preview
                </a>

                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  class="flex items-center justify-center w-full border py-3 rounded-xl font-semibold"
                >
                  View Code
                </a>
              </div>
            </div>
          </aside>
        </div>
      </template>

      <template v-else>
        <div class="text-center py-20">
          <h2 class="text-2xl font-semibold text-red-500">{{ error }}</h2>
          <a href="/" class="mt-4 inline-block text-emerald-600">
            ← Back to Home
          </a>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped></style>
