<script setup>
const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Technologies Used" },
];

const skills = [
  "Vue.js",
  "Nuxt.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "Node.js",
  "REST API",
  "MySQL",
  "Git & GitHub",
  "Responsive Design",
  "Performance Optimization",
];

const experience = [
  {
    title: "Full Stack Web Development",
    desc: "Building modern business websites, dashboards, admin panels, and scalable web applications with clean UI and secure backend systems.",
  },
  {
    title: "Frontend Engineering",
    desc: "Creating responsive, user-friendly, and performance-focused interfaces using Vue, Nuxt, Tailwind CSS, and reusable component architecture.",
  },
  {
    title: "Backend & API Integration",
    desc: "Developing secure backend logic, authentication systems, payment integration, database design, and third-party API connections.",
  },
];

const values = [
  {
    title: "Clean Code",
    desc: "I focus on maintainable structure, reusable components, and scalable code architecture.",
  },
  {
    title: "User Experience",
    desc: "Every project is designed with usability, performance, and responsiveness in mind.",
  },
  {
    title: "Business Focus",
    desc: "I build solutions that not only look good, but also support real business goals and growth.",
  },
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="About Ashik Ahmed — Full-Stack Developer (Nuxt.js, Vue.js, Laravel)"
      description="Learn more about Ashik Ahmed, a Full-Stack Developer specializing in Nuxt.js, Vue.js, and Laravel. Passionate about building scalable, high-performance web applications with modern UI, clean architecture, and AI-driven solutions."
      keywords="About Ashik Ahmed, Ashik Ahmed Developer, Full Stack Developer Bangladesh, Nuxt.js Developer, Vue.js Developer, Laravel Developer, Web Developer Portfolio, Software Engineer Bangladesh"
    />

    <!-- Hero -->
    <section class="relative py-8 md:py-12">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              About Me
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Building modern digital products with clean design and scalable
              development.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              I’m Ashik Ahmed, a Full Stack Developer focused on creating
              high-performance websites and web applications using modern
              technologies like Vue, Nuxt, Laravel, Node.js, and Tailwind CSS. I
              combine clean UI, strong backend logic, and practical business
              thinking to build products that are both functional and impactful.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                View My Projects
              </NuxtLink>

              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Let’s Talk
              </NuxtLink>
            </div>
          </div>

          <!-- Right -->
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
                    class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-lg font-bold text-emerald-700"
                  >
                    AA
                  </div>

                  <div>
                    <h2 class="text-xl font-semibold text-slate-900">
                      Ashik Ahmed
                    </h2>
                    <p class="text-sm text-emerald-600">Full Stack Developer</p>
                  </div>
                </div>

                <div class="mt-8 grid grid-cols-2 gap-4">
                  <div
                    v-for="item in stats"
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
                    I specialize in building portfolio sites, business websites,
                    dashboards, admin panels, and custom web applications with a
                    strong focus on performance, usability, and maintainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story / Bio -->
    <section class="py-8 md:py-12">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <div class="sticky top-28">
              <span class="text-sm font-semibold text-emerald-600">
                My Story
              </span>
              <h2
                class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
              >
                Passion for development, focus on real-world results.
              </h2>
            </div>
            <div class="py-6 overflow-hidden">
              <img src="/about.png" alt="about" class="rounded-2xl" />
            </div>
          </div>

          <div class="space-y-6 lg:col-span-7">
            <div class="rounded-3xl border border-slate-200 bg-white p-7">
              <p class="leading-8 text-slate-600">
                My journey in web development started with a strong interest in
                creating useful and visually polished digital experiences. Over
                time, that interest grew into building full-stack applications
                that solve real business problems and help brands establish a
                stronger online presence.
              </p>
            </div>

            <div class="rounded-3xl border border-slate-200 bg-white p-7">
              <p class="leading-8 text-slate-600">
                I enjoy working across both frontend and backend—designing
                elegant interfaces, structuring reusable components, building
                secure APIs, and optimizing systems for speed and scalability.
                My goal is always to deliver solutions that are clean,
                practical, and production-ready.
              </p>
            </div>

            <div class="rounded-3xl border border-slate-200 bg-white p-7">
              <p class="leading-8 text-slate-600">
                Whether it’s a personal portfolio, business website, SaaS
                dashboard, eCommerce platform, or custom admin panel, I approach
                every project with attention to quality, communication, and
                long-term usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="py-16 md:py-20 bg-slate-50/80">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-emerald-600">
            Expertise
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            What I do best
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            I work on both user-facing experiences and backend systems to
            deliver complete web solutions.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in experience"
            :key="item.title"
            class="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-emerald-200"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"
            >
              ●
            </div>

            <h3 class="mt-5 text-xl font-semibold text-slate-900">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-600">
              {{ item.desc }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <span class="text-sm font-semibold text-emerald-600">
              Skills & Stack
            </span>
            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Tools I use to build modern products
            </h2>
            <p class="mt-4 leading-7 text-slate-600">
              My core stack for creating high-quality web interfaces, backend
              systems, APIs, and responsive digital products.
            </p>
          </div>

          <div class="lg:col-span-8">
            <div
              class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="skill in skills"
                  :key="skill"
                  class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {{ skill }}
                </span>
              </div>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    Frontend Focus
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    Vue.js, Nuxt.js, Tailwind CSS, responsive layouts, UI
                    structure, performance optimization.
                  </p>
                </div>

                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    Backend Focus
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    Laravel, Node.js, REST API, authentication, database design,
                    integrations, and admin systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 md:py-20 bg-slate-50/80">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="text-center max-w-2xl mx-auto">
          <span class="text-sm font-semibold text-emerald-600">
            Work Values
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Principles behind every project
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            I focus on quality, usability, and business value in every build.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article
            v-for="item in values"
            :key="item.title"
            class="rounded-2xl border border-slate-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-emerald-200"
          >
            <div
              class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"
            >
              ●
            </div>

            <h3 class="mt-5 text-xl font-semibold text-slate-900">
              {{ item.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-600">
              {{ item.desc }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-20">
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
                Let’s Work Together
              </span>
              <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Need a modern website or custom web application?
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                I help businesses, brands, and individuals build clean,
                scalable, and professional digital products.
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
                to="/projects"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                See Portfolio
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
