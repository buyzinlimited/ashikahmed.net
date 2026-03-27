<script setup>
const route = useRoute();
const projectStore = useProjectStore();

const { loading, project, errors } = storeToRefs(projectStore);

const loadProject = async () => {
  await projectStore.getProjectBySlug(route.params.slug);
};

onMounted(() => {
  loadProject();
});
</script>

<template>
  <main class="min-h-screen bg-[#f8fafc]">
    <SeoMeta
      :title="project?.title"
      :description="project?.meta_description"
      :keywords="project?.meta_keywords"
      :image="project?.cover_url"
    />

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <template v-if="loading">
        <div class="animate-pulse space-y-8">
          <div class="space-y-4">
            <div class="h-4 w-24 rounded-full bg-slate-200"></div>
            <div class="h-12 w-3/4 rounded-2xl bg-slate-200"></div>
            <div class="h-5 w-2/3 rounded-lg bg-slate-200"></div>
          </div>

          <div
            class="h-[260px] md:h-[480px] w-full rounded-[28px] bg-slate-200"
          ></div>

          <div class="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
            <div class="space-y-4">
              <div class="h-8 w-56 rounded-lg bg-slate-200"></div>
              <div class="h-4 w-full rounded bg-slate-200"></div>
              <div class="h-4 w-11/12 rounded bg-slate-200"></div>
              <div class="h-4 w-9/12 rounded bg-slate-200"></div>
            </div>
            <div class="h-80 rounded-[28px] bg-slate-200"></div>
          </div>
        </div>
      </template>

      <template v-else-if="project">
        <!-- Hero -->
        <section
          class="relative overflow-hidden rounded-xl bg-slate-900 text-white"
        >
          <div class="absolute inset-0">
            <NuxtImg
              :src="project.cover_url"
              :alt="project.title"
              class="h-full w-full object-cover opacity-70"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-emerald-900/70"
            ></div>
          </div>

          <div class="relative px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
            <div class="max-w-4xl">
              <span
                class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur"
              >
                {{ project.category?.name || "Project" }}
              </span>

              <h1
                class="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-6xl"
              >
                {{ project.title }}
              </h1>

              <p
                v-if="project.summary"
                class="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg lg:leading-8"
              >
                {{ project.summary }}
              </p>

              <div class="mt-8 flex flex-wrap gap-3">
                <a
                  v-if="project.live_url"
                  :href="project.live_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Live Preview
                </a>

                <a
                  v-if="project.video_url"
                  :href="project.video_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Main layout -->
        <section class="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <!-- Content -->
          <div class="space-y-8">
            <div class="rounded-xl bg-white p-4 ring-1 ring-slate-200">
              <div class="mb-6 flex items-center gap-3">
                <div class="h-10 w-10 rounded-2xl bg-emerald-100"></div>
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600"
                  >
                    Details
                  </p>
                  <h2 class="text-2xl font-bold text-slate-900">
                    Project Overview
                  </h2>
                </div>
              </div>

              <NuxtImg
                :src="project.cover_url"
                :alt="project.title"
                class="w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200"
              />

              <MarkdownPreview
                :content="project.description"
                class="project-markdown"
              />
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-6 lg:sticky lg:top-24 h-fit">
            <div
              class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div
                class="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-5 text-white"
              >
                <h3 class="text-lg font-bold">Tech Stack</h3>
                <p class="mt-1 text-sm text-white/85">
                  Tools and technologies used in this project
                </p>
              </div>

              <div class="p-6">
                <div
                  v-if="project.tech_stack?.length"
                  class="flex flex-wrap gap-2"
                >
                  <span
                    v-for="tech in project.tech_stack"
                    :key="tech"
                    class="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {{ tech }}
                  </span>
                </div>

                <p v-else class="text-sm text-slate-500">
                  No technologies added yet.
                </p>
              </div>
            </div>

            <div class="rounded-xl bg-slate-900 p-6 text-white shadow-sm">
              <h3 class="text-lg font-bold">Need a similar project?</h3>
              <p class="mt-2 text-sm leading-6 text-slate-300">
                This project highlights design, performance, and practical
                implementation.
              </p>

              <a
                href="/contact"
                class="mt-5 inline-flex w-full items-center justify-center rounded bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Now
              </a>
            </div>
          </aside>
        </section>
      </template>

      <template v-else>
        <div
          class="rounded-[28px] bg-white px-6 py-16 text-center shadow-sm ring-1 ring-red-100"
        >
          <h2 class="text-2xl font-bold text-red-500">
            {{ errors || "Project not found" }}
          </h2>

          <a
            href="/"
            class="mt-5 inline-flex items-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Home
          </a>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped>
:deep(.project-markdown) {
  color: #334155;
  font-size: 16px;
  line-height: 1.9;
}

:deep(.project-markdown .md-editor-preview) {
  background: transparent;
  padding: 0;
}

:deep(.project-markdown .md-editor-preview),
:deep(.project-markdown .md-editor-preview *) {
  word-break: break-word;
  overflow-wrap: anywhere;
}

:deep(.project-markdown h1),
:deep(.project-markdown h2),
:deep(.project-markdown h3),
:deep(.project-markdown h4),
:deep(.project-markdown h5),
:deep(.project-markdown h6) {
  margin-top: 1.5em;
  margin-bottom: 0.7em;
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
}

:deep(.project-markdown h1) {
  font-size: 2rem;
}

:deep(.project-markdown h2) {
  font-size: 1.65rem;
}

:deep(.project-markdown h3) {
  font-size: 1.35rem;
}

:deep(.project-markdown p) {
  margin: 1rem 0;
  color: #475569;
}

:deep(.project-markdown ul),
:deep(.project-markdown ol) {
  margin: 1rem 0;
  padding-left: 1.25rem;
}

:deep(.project-markdown li) {
  margin: 0.45rem 0;
}

:deep(.project-markdown a) {
  color: #059669;
  font-weight: 600;
  text-decoration: none;
}

:deep(.project-markdown a:hover) {
  text-decoration: underline;
}

:deep(.project-markdown blockquote) {
  margin: 1.25rem 0;
  padding: 1rem 1.25rem;
  border-left: 4px solid #10b981;
  border-radius: 1rem;
  background: #f8fafc;
  color: #475569;
}

:deep(.project-markdown pre) {
  overflow-x: auto;
  margin: 1.25rem 0;
  padding: 1rem;
  border-radius: 1rem;
}

:deep(.project-markdown code) {
  word-break: break-word;
  white-space: pre-wrap;
}

:deep(.project-markdown img) {
  margin: 1rem 0;
  border-radius: 1rem;
}

:deep(.project-markdown table) {
  display: block;
  width: 100%;
  overflow-x: auto;
  margin: 1.25rem 0;
  border-collapse: collapse;
}

:deep(.project-markdown th),
:deep(.project-markdown td) {
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  text-align: left;
}

:deep(.project-markdown th) {
  background: #f8fafc;
  color: #0f172a;
}
</style>
