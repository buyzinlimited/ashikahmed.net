<script setup>
const projectStore = useProjectStore();
const { loading, projects } = storeToRefs(projectStore);

const loadProjects = async () => {
  await projectStore.getProjects();
};

const projectStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10+", label: "Industries Served" },
  { value: "24/7", label: "Project Support" },
];

const featuredProject = {
  title: "LMS Platform – Courses, Dashboard & Secure API",
  category: "Featured Case Study",
  desc: "A complete learning management system with course access, student dashboard, authentication, secure backend API, profile management, and scalable architecture for future growth.",
  image: "/projects/lms.png",
  tags: ["Nuxt.js", "Laravel", "Sanctum", "Tailwind CSS", "MySQL"],
  live: "https://yourdomain.com/lms",
  github: "https://github.com/yourname/lms",
};

const techStack = [
  "Nuxt.js",
  "Vue.js",
  "Laravel",
  "Node.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "REST API",
  "MySQL",
  "MongoDB",
];

onMounted(() => {
  loadProjects();
});
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Projects — Web Applications & Digital Solutions by Ashik Ahmed"
      description="Explore high-quality web applications and digital Projects built with Nuxt.js, Vue.js, and Laravel. Scalable, performance-driven solutions designed for modern businesses and startups."
      keywords="Web Projects, Digital Projects, SaaS Applications, Nuxt.js Projects, Vue.js Apps, Laravel Systems, Web Solutions Bangladesh, Software Products, Full Stack Projects"
    />

    <!-- Hero -->
    <section class="relative py-8 md:py-16">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              My Projects
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Selected work built with clean UI and scalable development.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              A collection of websites, dashboards, APIs, and full-stack
              applications designed to solve real business problems with strong
              focus on performance, usability, and maintainable architecture.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                Start a Project
              </NuxtLink>

              <NuxtLink
                to="/pricing"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Pricing
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div
              class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div
                class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
              ></div>

              <div class="relative">
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-16 w-16 shrink-0 items-center justify-center bg-emerald-100"
                  >
                    <NuxtImg
                      src="/logo.jpg"
                      alt="Ashik Ahmed - Full Stack web developer in bangladesh"
                      class="rounded-2xl overflow-hidden ring-4 ring-primary"
                    />
                  </div>

                  <div>
                    <h2 class="text-xl font-semibold text-slate-900">
                      Project Overview
                    </h2>
                    <p class="text-sm text-emerald-600">
                      Modern Web Development Portfolio
                    </p>
                  </div>
                </div>

                <div class="mt-8 grid grid-cols-2 gap-4">
                  <div
                    v-for="item in projectStats"
                    :key="item.label"
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-2xl font-bold text-slate-900">
                      {{ item.value }}
                    </p>
                    <p class="mt-1 text-sm text-slate-500">
                      {{ item.label }}
                    </p>
                  </div>
                </div>

                <div
                  class="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                >
                  <p class="text-sm leading-6 text-slate-700">
                    From business websites to custom dashboards and scalable
                    APIs, each project is built with a practical approach to
                    design, functionality, and long-term maintainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-8 bg-slate-50/80">
      <div class="mx-auto max-w-7xl px-4">
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-emerald-600">
            Project Collection
          </span>
          <h2
            class="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            Web Development Projects & Case Studies
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            Discover my portfolio of web applications and software projects
            built using modern technologies, featuring responsive UI design,
            robust backend systems, and scalable architecture for real-world use
            cases.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="project in projects"
            :key="project.id"
            class="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200"
          >
            <div class="relative aspect-auto overflow-hidden bg-slate-100">
              <NuxtLink :to="`/project/${project.slug}`" :title="project.title">
                <NuxtImg
                  :src="project.cover_url"
                  :alt="project.title"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </NuxtLink>

              <div
                class="absolute inset-x-0 top-0 flex items-center justify-between p-4"
              >
                <span
                  class="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm backdrop-blur"
                >
                  {{ project.category?.name || "Uncategorized" }}
                </span>

                <span
                  v-if="project.is_featured"
                  class="inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-sm"
                >
                  Featured
                </span>
              </div>
            </div>

            <div class="p-6">
              <NuxtLink :to="`/project/${project.slug}`" :title="project.title">
                <h3
                  class="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 transition group-hover:text-emerald-600 line-clamp-2"
                >
                  {{ project.title }}
                </h3>
              </NuxtLink>

              <p class="mb-3 text-sm leading-7 text-slate-600 line-clamp-3">
                {{ project.summary }}
              </p>

              <div
                v-if="project.tech_stack?.length"
                class="flex flex-wrap gap-2"
              >
                <span
                  v-for="tech in project.tech_stack || []"
                  :key="tech"
                  class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-8 md:py-12">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <span class="text-sm font-semibold text-emerald-600">
              Technologies
            </span>
            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Tools used across projects
            </h2>
            <p class="mt-4 leading-7 text-slate-600">
              My core stack for building modern interfaces, APIs, business
              platforms, and custom web systems.
            </p>
          </div>

          <div class="lg:col-span-8">
            <div
              class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="item in techStack"
                  :key="item"
                  class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {{ item }}
                </span>
              </div>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    Frontend Development
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    Responsive layouts, reusable components, smooth user
                    experience, and clean visual structure.
                  </p>
                </div>

                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    Backend Development
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    Secure APIs, authentication, integrations, database systems,
                    and scalable logic for real-world applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-8 md:py-16">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 md:px-10 md:py-14"
        >
          <div
            class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
          ></div>

          <div
            class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div class="max-w-2xl">
              <span class="text-sm font-semibold text-emerald-600">
                Let’s Build Something
              </span>
              <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Need a website, dashboard, or custom web application?
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                I help businesses and individuals turn ideas into modern,
                reliable, and production-ready digital products.
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                Start a Project
              </NuxtLink>

              <NuxtLink
                to="/pricing"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Pricing
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
