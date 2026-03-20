<script setup>
const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "I understand the business goal, target users, required features, and project scope before starting development.",
    icon: "/icons/analysis.png",
  },
  {
    step: "02",
    title: "UI Planning & Architecture",
    desc: "I plan layout structure, component hierarchy, database flow, and application architecture for clean development.",
    icon: "/icons/wireframe.png",
  },
  {
    step: "03",
    title: "Frontend Development",
    desc: "I build responsive, fast, and modern user interfaces using Vue, Nuxt, Tailwind CSS, and reusable components.",
    icon: "/icons/frontend-development.png",
  },
  {
    step: "04",
    title: "Backend & API Integration",
    desc: "I develop secure backend systems, authentication, dashboards, and API integrations using Laravel or Node.js.",
    icon: "/icons/server-api.png",
  },
  {
    step: "05",
    title: "Testing & Optimization",
    desc: "I test functionality, responsiveness, performance, SEO basics, and fix issues before final delivery.",
    icon: "/icons/performance-test.png",
  },
  {
    step: "06",
    title: "Deployment & Support",
    desc: "I deploy the project, connect domain/hosting, and provide support for updates, fixes, and improvements.",
    icon: "/icons/cloud-deploy.png",
  },
];
</script>

<template>
  <section class="relative bg-white/70 py-16 md:py-20">
    <div class="relative max-w-7xl mx-auto px-4 md:px-6">
      <div class="max-w-2xl">
        <span
          class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
        >
          Development Workflow
        </span>

        <h2 class="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
          My Web Development Process
        </h2>

        <p class="mt-4 text-slate-600 leading-7">
          I follow a structured development workflow to build fast, scalable,
          and user-friendly websites—from planning and UI implementation to
          backend development, testing, and deployment.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <div
            v-for="(item, i) in process"
            :key="i"
            class="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
          >
            <div
              class="absolute right-4 top-4 text-5xl font-bold text-slate-100 transition group-hover:text-emerald-50"
            >
              {{ item.step }}
            </div>

            <div
              class="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50"
            >
              <img :src="item.icon" alt="icon" class="size-10 object-contain" />
            </div>

            <div class="relative z-10 mt-5">
              <h3 class="text-lg font-semibold text-slate-900">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="rounded-3xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24 h-fit"
        >
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-sm font-medium text-emerald-600">Tech Stack</p>
              <h3 class="mt-1 text-xl font-bold text-slate-900">Tools I Use</h3>
            </div>

            <div
              class="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-lg"
            >
              <img
                src="/icons/tools.png"
                alt="icon"
                class="h-10 w-10 object-contain"
              />
            </div>
          </div>

          <p class="mt-4 text-sm leading-6 text-slate-600">
            My core stack for building modern full-stack web applications.
          </p>

          <div class="mt-6 space-y-4">
            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">Vue / Nuxt</span>
                <span class="text-slate-500">95%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[95%] rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">Laravel</span>
                <span class="text-slate-500">92%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[92%] rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">WordPress</span>
                <span class="text-slate-500">95%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[92%] rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">Tailwind CSS</span>
                <span class="text-slate-500">96%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[96%] rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">Node.js</span>
                <span class="text-slate-500">85%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[85%] rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">MySQL</span>
                <span class="text-slate-500">90%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[90%] rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <div>
              <div class="mb-2 flex items-center justify-between text-sm">
                <span class="font-medium text-slate-700">API Integration</span>
                <span class="text-slate-500">88%</span>
              </div>
              <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                <div class="h-full w-[88%] rounded-full bg-emerald-500"></div>
              </div>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-2">
            <span
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              Responsive UI
            </span>
            <span
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              SEO Friendly
            </span>
            <span
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              Clean Code
            </span>
            <span
              class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              Fast Performance
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
