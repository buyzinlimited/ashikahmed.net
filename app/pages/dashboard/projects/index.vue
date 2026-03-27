<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const projectStore = useProjectStore();
const { projects } = storeToRefs(projectStore);

const loadProjects = async () => {
  await projectStore.all();
};

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <main>
    <Head>
      <Title>All Projects</Title>
    </Head>
    <nav
      class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Projects</h1>
        <p class="mt-1 text-sm text-slate-500">
          Manage and showcase your portfolio projects
        </p>
      </div>

      <NuxtLink
        to="/dashboard/projects/create"
        class="inline-flex items-center justify-center rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Create Project
      </NuxtLink>
    </nav>

    <div
      v-if="projects.length"
      class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="group overflow-hidden rounded border border-slate-200 bg-white transition duration-300 hover:-translate-y-1"
      >
        <div class="relative">
          <img
            v-if="project.cover_url"
            :src="project.cover_url"
            :alt="project.title"
            class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div
            v-else
            class="flex h-56 w-full items-center justify-center bg-gradient-to from-slate-100 via-slate-50 to-cyan-50 text-sm font-medium text-slate-400"
          >
            No Preview Available
          </div>

          <div
            class="absolute inset-x-0 bottom-0 bg-gradient-to from-slate-900/70 to-transparent p-4"
          >
            <div class="flex items-center justify-between gap-3">
              <span
                class="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur"
              >
                Project
              </span>

              <span
                v-if="project.featured"
                class="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700"
              >
                Featured
              </span>
            </div>
          </div>
        </div>

        <div class="p-5">
          <div class="mb-3">
            <h2 class="line-clamp-1 text-xl font-bold text-slate-900">
              {{ project.title }}
            </h2>

            <p
              v-if="project.summary"
              class="mt-2 line-clamp-2 text-sm leading-6 text-slate-600"
            >
              {{ project.summary }}
            </p>
          </div>

          <div
            v-if="project.tech_stack?.length"
            class="mb-5 flex flex-wrap gap-2"
          >
            <span
              v-for="tech in project.tech_stack"
              :key="tech"
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {{ tech }}
            </span>
          </div>

          <div
            class="flex items-center justify-between gap-3 border-t border-slate-100 pt-4"
          >
            <NuxtLink
              :to="`/dashboard/projects/${project.id}`"
              class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Details
            </NuxtLink>

            <NuxtLink
              v-if="project.live_url"
              :to="project.live_url"
              target="_blank"
              class="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
            >
              Live Preview
            </NuxtLink>

            <span v-else class="text-sm font-medium text-slate-400">
              No Live Link
            </span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center"
    >
      <div class="max-w-md px-6">
        <h3 class="text-xl font-semibold text-slate-900">No projects found</h3>
        <p class="mt-2 text-sm leading-6 text-slate-500">
          Start by creating your first portfolio project and showcase it here.
        </p>

        <NuxtLink
          to="/dashboard/projects/create"
          class="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Create Project
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
