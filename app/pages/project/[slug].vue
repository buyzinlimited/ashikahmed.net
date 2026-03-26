<script setup>
const route = useRoute();
const projectStore = useProjectStore();

const { loading, project } = storeToRefs(projectStore);

const loadProject = async () => {
  await projectStore.getProjectBySlug(route.params.slug);
};

onMounted(() => {
  loadProject();
});
</script>

<template>
  <main class="bg-white/70">
    <SeoMeta
      :title="project?.title"
      :description="project?.meta_description"
      :keywords="project?.meta_keywords"
      :image="project?.cover_url"
    />
    <div class="max-w-6xl mx-auto px-4 py-6">
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
            class="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
          >
            {{ project.title }}
          </h1>

          <p class="mt-4 text-slate-600 max-w-2xl">
            {{ project.summary }}
          </p>
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
              <h2 class="font-semibold text-2xl py-2">Project Overview</h2>
              <div v-html="project.description"></div>
            </div>
          </div>

          <aside class="space-y-6 md:sticky md:top-24 h-fit">
            <div
              class="p-6 rounded-2xl border border-emerald-100 bg-gradient-to from-white to-emerald-50 shadow-sm"
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

              <div class="space-y-4">
                <a
                  :href="project.live_url"
                  target="_blank"
                  class="group bg-primary flex items-center justify-center gap-2 w-full text-white py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  <span>Live Preview</span>
                </a>

                <a
                  :href="project.video_url"
                  target="_blank"
                  class="group flex items-center justify-center gap-2 w-full border border-slate-300 bg-white py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </template>

      <template v-else>
        <div class="text-center py-20">
          <h2 class="text-2xl font-semibold text-red-500">{{ errors }}</h2>
          <a href="/" class="mt-4 inline-block text-emerald-600">
            Back to Home
          </a>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped></style>
