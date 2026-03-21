<script setup>
const skills = [
  "Vue/Nuxt",
  "Node.js",
  "Laravel",
  "WordPress",
  "VPS Server",
  "Nginx",
  "Apache",
  "Cloud Hosting",
  "AWS",
  "DigitalOcean",
  "cPanel / WHM",
  "Git/GitHub",
  "Docker",
];
</script>

<template>
  <section class="relative overflow-x-hidden bg-white/50">
    <div class="relative mx-auto max-w-7xl px-4 py-8 md:py-10">
      <div class="grid items-center gap-14 md:grid-cols-2">
        <div>
          <div
            class="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-4 py-2 text-sm text-emerald-700"
          >
            <span
              class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
            ></span>
            Available for freelance & full-time
          </div>
          <h1
            class="mt-6 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl"
          >
            Building modern
            <span class="block text-2xl md:text-5xl text-slate-500"
              >web experiences with</span
            >
            <span
              class="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent text-2xl md:text-5xl"
            >
              performance & scalability
            </span>
          </h1>

          <p class="mt-6 max-w-xl text-slate-600 md:text-lg">
            I help startups and businesses build fast, scalable, and
            user-friendly web applications using modern technologies like Nuxt,
            Vue, Laravel, Node.js, and Tailwind CSS.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 shadow-lg shadow-emerald-500/20"
            >
              Start a Project
            </NuxtLink>

            <NuxtLink
              to="/projects"
              class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View My Work →
            </NuxtLink>
          </div>

          <div class="mt-10 flex flex-wrap gap-2">
            <span
              v-for="s in skills"
              :key="s"
              class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 transition hover:border-emerald-200 hover:text-emerald-600"
            >
              {{ s }}
            </span>
          </div>
        </div>

        <div class="relative isolate">
          <div class="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              class="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-emerald-100 via-cyan-50 to-transparent blur-2xl"
            />
            <div
              class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
            >
              <div
                class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-emerald-200"
              />
              <div
                class="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-emerald-100"
              />
              <div
                class="pointer-events-none absolute -right-2 -top-2 h-28 w-28 rounded-full border border-emerald-100/80"
              />

              <div class="flex items-center gap-4">
                <div
                  class="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-100 to-cyan-100"
                >
                  <img
                    src="/ashik-ahmed.jpg"
                    alt="Ashik Ahmed"
                    class="h-full w-full object-cover"
                  />
                </div>

                <div class="min-w-0">
                  <p class="text-sm text-slate-500">Hello, I’m</p>
                  <p class="truncate text-xl font-semibold text-slate-900">
                    Ashik Ahmed
                  </p>
                  <p class="text-sm font-medium text-emerald-600">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              <div class="mt-6 grid grid-cols-3 gap-3">
                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p class="text-xl font-bold text-slate-900">120+</p>
                  <p class="mt-1 text-xs text-slate-500">Projects</p>
                </div>

                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p class="text-xl font-bold text-slate-900">95%</p>
                  <p class="mt-1 text-xs text-slate-500">Client Satisfaction</p>
                </div>

                <div
                  class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                >
                  <p class="text-xl font-bold text-slate-900">8+</p>
                  <p class="mt-1 text-xs text-slate-500">Years Experience</p>
                </div>
              </div>

              <div class="mt-6">
                <NuxtLink
                  to="/contact"
                  class="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Let’s Work Together
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
