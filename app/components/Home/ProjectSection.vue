<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);
const projects = ref([]);

const loadProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      *,
      category:categories (id, name, slug)
    `,
    )
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) console.error(error);
  else projects.value = data;

  loading.value = false;
};

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <section class="relative py-10 md:py-16">
    <div class="relative mx-auto max-w-7xl px-4 md:px-6">
      <div
        class="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"
      >
        <div class="max-w-2xl">
          <span
            class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
          >
            Portfolio
          </span>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Selected Projects & Case Studies
          </h2>

          <p class="mt-4 text-base leading-7 text-slate-600">
            A selection of web applications, business platforms, and modern user
            interfaces I’ve built with a focus on performance, usability, and
            scalable architecture.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            href="/contact"
            class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
          >
            Start a project
          </a>

          <a
            href="/projects"
            class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Need similar work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5 ml-1"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
        <template v-if="loading">
          <div
            v-for="i in 4"
            :key="i"
            class="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <div class="h-56 w-full bg-slate-200"></div>

            <div class="p-6 space-y-4">
              <div class="h-5 w-2/3 rounded bg-slate-200"></div>

              <div class="h-4 w-1/3 rounded bg-slate-200"></div>

              <div class="space-y-2">
                <div class="h-3 w-full rounded bg-slate-200"></div>
                <div class="h-3 w-5/6 rounded bg-slate-200"></div>
                <div class="h-3 w-4/6 rounded bg-slate-200"></div>
              </div>

              <div class="flex gap-2">
                <div class="h-6 w-16 rounded-full bg-slate-200"></div>
                <div class="h-6 w-14 rounded-full bg-slate-200"></div>
                <div class="h-6 w-12 rounded-full bg-slate-200"></div>
              </div>

              <div class="flex justify-between pt-4">
                <div class="h-4 w-1/3 rounded bg-slate-200"></div>
                <div class="h-4 w-16 rounded bg-slate-200"></div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <article
            v-for="project in projects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200"
          >
            <div class="relative aspect-auto overflow-hidden bg-slate-100">
              <NuxtLink :to="`/project/${project.slug}`">
                <NuxtImg
                  :src="project.cover_url"
                  :alt="project.title"
                  class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </NuxtLink>
            </div>

            <div class="p-6 md:p-7">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3
                    class="text-xl font-semibold leading-tight text-slate-900 md:text-2xl"
                  >
                    {{ project.title }}
                  </h3>
                </div>
              </div>

              <p class="mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                {{ project.summary }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech_stack || []"
                  :key="tech"
                  class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {{ tech }}
                </span>
              </div>

              <div
                class="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div class="flex items-center gap-2 text-sm text-slate-500">
                  <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <p class="text-sm text-slate-500">
                    {{ project.category?.name }}
                  </p>
                </div>

                <div class="flex items-center gap-4">
                  <a
                    :href="project.live_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5 ml-1"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>

                  <a
                    :href="project.github_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
