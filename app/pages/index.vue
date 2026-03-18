<script setup>
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Vue/Nuxt",
  "React",
  "Node.js",
  "Laravel",
  "MySQL",
  "Git/GitHub",
];

const services = [
  {
    title: "Website Development",
    desc: "High-performance, SEO-optimized websites with modern UI/UX, fast loading speed, and scalable architecture. Perfect for businesses, portfolios, and landing pages that convert visitors into customers.",
    icon: "/icons/website.png",
  },
  {
    title: "Web App Development",
    desc: "Custom web applications including dashboards, admin panels, and SaaS platforms with secure authentication, role-based access, and clean, maintainable code architecture.",
    icon: "/icons/app.png",
  },
  {
    title: "API & System Integrations",
    desc: "Robust API development and third-party integrations including payment gateways, OAuth authentication, and microservices to ensure seamless system communication and scalability.",
    icon: "/icons/api.png",
  },
];

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

const projects = [
  {
    title: "LMS Platform (Courses + Dashboard)",
    tags: ["Nuxt", "Laravel", "Sanctum", "Tailwind"],
    desc: "Student dashboard, course player, orders, profile & secure API.",
    image: "/projects/lms.png",
    github: "https://github.com/yourname/lms",
    live: "https://yourdomain.com/lms",
  },
  {
    title: "SaaS Landing Page",
    tags: ["Tailwind", "Vue", "UI/UX"],
    desc: "Conversion-focused landing with hero, features, pricing & CTA.",
    image: "/projects/saas.png",
    github: "https://github.com/yourname/saas-landing",
    live: "https://yourdomain.com/saas",
  },
  {
    title: "Movie Titles API",
    tags: ["Node", "Express", "REST", "MongoDB"],
    desc: "Search, filter, pagination, caching, and clean API structure.",
    image: "/projects/movie.png",
    github: "https://github.com/yourname/movie-api",
    live: "https://yourdomain.com/movie-api",
  },
  {
    title: "E-commerce Mini Shop",
    tags: ["Laravel", "MySQL", "Stripe/Bkash", "Admin Panel"],
    desc: "Product listing, cart, checkout, order tracking, admin manage.",
    image: "/projects/shop.png",
    github: "https://github.com/yourname/mini-shop",
    live: "https://yourdomain.com/shop",
  },
];
</script>

<template>
  <main class="relative text-slate-900">
    <SeoMeta
      title="Ashik Ahmed — Full-Stack Developer (Nuxt.js, Vue.js, Laravel)"
      description="Full-Stack Developer specializing in Nuxt.js, Vue.js, and Laravel. I build scalable, high-performance web applications with modern UI, clean architecture, and AI-powered features."
      keywords="Ashik Ahmed, Full Stack Developer, Nuxt.js Developer, Vue.js Developer, Laravel Developer, Web Developer Bangladesh, Frontend Developer, Backend Developer, AI Integration"
    />

    <!-- Hero -->
    <section class="relative overflow-x-hidden bg-white">
      <div class="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div class="grid items-center gap-14 md:grid-cols-2">
          <!-- Left Content -->
          <div>
            <!-- Availability Badge -->
            <div
              class="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/70 px-4 py-2 text-sm text-emerald-700"
            >
              <span
                class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
              ></span>
              Available for freelance & full-time
            </div>

            <!-- Heading -->
            <h1
              class="mt-6 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl"
            >
              Building modern
              <span class="block text-slate-500">web experiences with</span>
              <span
                class="bg-gradient-to-r from-emerald-600 to-cyan-500 bg-clip-text text-transparent"
              >
                performance & scalability
              </span>
            </h1>

            <!-- Description -->
            <p class="mt-6 max-w-xl text-slate-600 md:text-lg">
              I help startups and businesses build fast, scalable, and
              user-friendly web applications using modern technologies like
              Nuxt, Vue, Laravel, Node.js, and Tailwind CSS.
            </p>

            <!-- CTA -->
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

            <!-- Skills -->
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

          <!-- Right Card -->
          <div class="relative isolate">
            <div class="relative mx-auto w-full max-w-md">
              <!-- Glow -->
              <div
                aria-hidden="true"
                class="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-emerald-100 via-cyan-50 to-transparent blur-2xl"
              />

              <!-- Card -->
              <div
                class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg"
              >
                <!-- Decorative Rings -->
                <div
                  class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-emerald-200"
                />
                <div
                  class="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-emerald-100"
                />
                <div
                  class="pointer-events-none absolute -right-2 -top-2 h-28 w-28 rounded-full border border-emerald-100/80"
                />

                <!-- Profile -->
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

                <!-- Stats -->
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
                    <p class="mt-1 text-xs text-slate-500">
                      Client Satisfaction
                    </p>
                  </div>

                  <div
                    class="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <p class="text-xl font-bold text-slate-900">8+</p>
                    <p class="mt-1 text-xs text-slate-500">Years Experience</p>
                  </div>
                </div>

                <!-- CTA -->
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

    <!-- Services + About -->
    <section class="relative py-6">
      <div class="relative mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-slate-900 md:text-3xl">
              What I do
            </h2>

            <p class="max-w-xl text-slate-600">
              From landing pages to full web applications—clean architecture and
              production-quality UI.
            </p>

            <div class="space-y-4">
              <div
                v-for="s in services"
                :key="s.title"
                class="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/60"
              >
                <div class="flex items-start gap-4">
                  <!-- Icon -->
                  <div
                    class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50"
                  >
                    <img
                      :src="s.icon"
                      :alt="s.title"
                      class="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <!-- Content -->
                  <div class="min-w-0">
                    <h3
                      class="text-base font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600"
                    >
                      {{ s.title }}
                    </h3>
                    <p class="mt-1.5 text-sm leading-6 text-slate-600">
                      {{ s.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block">
            <div
              class="relative overflow-hidden rounded-xl bg-white p-8 md:p-10"
            >
              <div
                class="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-emerald-100/70 blur-[80px]"
              ></div>

              <div class="relative">
                <h3
                  class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
                >
                  About Me
                </h3>

                <p
                  class="mt-4 max-w-2xl leading-relaxed text-slate-600 md:text-[15px]"
                >
                  I design and develop premium web experiences that combine
                  modern UI/UX, scalable backend architecture, and
                  high-performance engineering. My goal is to build digital
                  products that are not only visually refined but also fast,
                  secure, and built for long-term growth.
                </p>

                <p
                  class="mt-3 max-w-2xl leading-relaxed text-slate-600 md:text-[15px]"
                >
                  Whether it's a business website, SaaS platform, or custom web
                  application, I deliver clean, maintainable solutions using
                  Nuxt, Vue, Laravel, Node.js, and Tailwind CSS — tailored to
                  real business needs.
                </p>

                <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-3xl font-bold text-emerald-600">120+</p>
                    <p class="mt-1 text-sm text-slate-500">
                      Projects delivered
                    </p>
                  </div>

                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-3xl font-bold text-emerald-600">95%</p>
                    <p class="mt-1 text-sm text-slate-500">
                      Client satisfaction
                    </p>
                  </div>

                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-3xl font-bold text-emerald-600">8+</p>
                    <p class="mt-1 text-sm text-slate-500">Years experience</p>
                  </div>
                </div>

                <div class="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                  >
                    See my work
                  </a>

                  <a
                    href="#contact"
                    class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Let’s talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process -->
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
                class="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50"
              >
                <img
                  :src="item.icon"
                  alt="icon"
                  class="h-10 w-10 object-contain"
                />
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

          <!-- Right stack card -->
          <div
            class="rounded-3xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24 h-fit"
          >
            <div class="flex items-center justify-between gap-3">
              <div>
                <p class="text-sm font-medium text-emerald-600">Tech Stack</p>
                <h3 class="mt-1 text-xl font-bold text-slate-900">
                  Tools I Use
                </h3>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-lg"
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

            <!-- stack list -->
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
                  <span class="font-medium text-slate-700"
                    >API Integration</span
                  >
                  <span class="text-slate-500">88%</span>
                </div>
                <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div class="h-full w-[88%] rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </div>

            <!-- bottom badges -->
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

    <!-- Projects -->
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
              A selection of web applications, business platforms, and modern
              user interfaces I’ve built with a focus on performance, usability,
              and scalable architecture.
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
              href="#contact"
              class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Need similar work →
            </a>
          </div>
        </div>

        <!-- Project Grid -->
        <div class="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
          <article
            v-for="(p, i) in projects"
            :key="p.title"
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            <div class="relative aspect-auto overflow-hidden bg-slate-100">
              <img
                :src="p.image"
                :alt="p.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            </div>

            <div class="p-6 md:p-7">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3
                    class="text-xl font-semibold leading-tight text-slate-900 md:text-2xl"
                  >
                    {{ p.title }}
                  </h3>
                  <p class="mt-2 text-sm text-slate-500">
                    Web Development Project
                  </p>
                </div>
              </div>

              <p class="mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                {{ p.desc }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="t in p.tags"
                  :key="t"
                  class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {{ t }}
                </span>
              </div>

              <div
                class="mt-6 flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div class="flex items-center gap-2 text-sm text-slate-500">
                  <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <span>Responsive • Clean UI • Scalable Build</span>
                </div>

                <div class="flex items-center gap-3">
                  <a
                    :href="p.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                  >
                    View Project →
                  </a>

                  <a
                    :href="p.github"
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
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="relative bg-white/70 py-12 md:py-16">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div class="max-w-2xl">
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Client Feedback
            </span>

            <h2
              class="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Trusted by Clients Who Value Quality
            </h2>

            <p class="mt-4 text-base leading-7 text-slate-600">
              I focus on clear communication, clean development, and reliable
              delivery—so every project feels smooth from planning to launch.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div
              class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm"
            >
              <p class="text-2xl font-bold text-slate-900">95%</p>
              <p class="mt-1 text-xs text-slate-500">Client Satisfaction</p>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm"
            >
              <p class="text-2xl font-bold text-slate-900">120+</p>
              <p class="mt-1 text-xs text-slate-500">Projects Delivered</p>
            </div>
            <div
              class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm col-span-2 sm:col-span-1"
            >
              <p class="text-2xl font-bold text-slate-900">5★</p>
              <p class="mt-1 text-xs text-slate-500">Service Quality</p>
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <article
            v-for="item in [
              {
                name: 'John Doe',
                role: 'CEO, Startup Inc.',
                review:
                  'Great design sense and very professional delivery. The whole process was smooth, and the final product exceeded expectations.',
                initials: 'JD',
              },
              {
                name: 'Jane Smith',
                role: 'Product Manager',
                review:
                  'Amazing communication and impressive creative direction throughout the project. Everything was delivered with care and strong attention to detail.',
                initials: 'JS',
              },
              {
                name: 'Alex Martin',
                role: 'Founder',
                review:
                  'He transformed our idea into a polished, modern, and engaging product very quickly. Highly reliable and easy to work with.',
                initials: 'AM',
              },
            ]"
            :key="item.name"
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl md:p-7"
          >
            <div
              class="absolute right-5 top-4 text-6xl font-bold leading-none text-emerald-100 transition group-hover:text-emerald-200"
            >
              “
            </div>

            <div class="relative z-10 flex items-center gap-1">
              <span class="text-emerald-500">★</span>
              <span class="text-emerald-500">★</span>
              <span class="text-emerald-500">★</span>
              <span class="text-emerald-500">★</span>
              <span class="text-emerald-500">★</span>
            </div>

            <p class="relative z-10 mt-5 text-[15px] leading-7 text-slate-600">
              {{ item.review }}
            </p>

            <div
              class="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-5"
            >
              <div
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-sm font-bold text-emerald-700"
              >
                {{ item.initials }}
              </div>

              <div class="min-w-0">
                <h3 class="truncate text-base font-semibold text-slate-900">
                  {{ item.name }}
                </h3>
                <p class="mt-1 text-sm text-slate-500">
                  {{ item.role }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section class="relative py-12 md:py-16">
      <div class="relative max-w-7xl mx-auto px-4 md:px-6">
        <div
          class="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div class="max-w-2xl">
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Insights
            </span>

            <h2
              class="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Latest Articles & Resources
            </h2>

            <p class="mt-4 text-base leading-7 text-slate-600">
              Thoughts, tutorials, and insights on web development, UI design,
              and building scalable applications.
            </p>
          </div>

          <a
            href="#"
            class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            View all articles →
          </a>
        </div>

        <!-- Content -->
        <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <!-- Featured Blog -->
          <article
            class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-emerald-200"
          >
            <div class="relative aspect-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div
                class="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur"
              >
                Web Development
              </div>
            </div>

            <div class="p-6 md:p-7">
              <div class="text-sm text-slate-500">
                Jan 10, 2026 • 5 min read
              </div>

              <h3 class="mt-3 text-2xl font-semibold text-slate-900">
                Modern Web Development Trends in 2026
              </h3>

              <p class="mt-3 text-slate-600 leading-7">
                Explore the latest technologies, frameworks, and design
                approaches shaping the future of web applications.
              </p>

              <a
                href="#"
                class="mt-5 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Read full article →
              </a>
            </div>
          </article>

          <!-- Side Blogs -->
          <div class="flex flex-col gap-6">
            <article
              v-for="post in [
                {
                  title: 'Why Performance Matters in Web Apps',
                  desc: 'Learn how performance impacts user experience and SEO ranking.',
                  img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900',
                  category: 'Performance',
                  date: 'Jan 05, 2026',
                },
                {
                  title: 'Building Scalable APIs with Laravel',
                  desc: 'Best practices for secure and scalable backend systems.',
                  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900',
                  category: 'Backend',
                  date: 'Dec 28, 2025',
                },
                {
                  title: 'Why Performance Matters in Web Apps',
                  desc: 'Learn how performance impacts user experience and SEO ranking.',
                  img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900',
                  category: 'Performance',
                  date: 'Jan 05, 2026',
                },
                {
                  title: 'Building Scalable APIs with Laravel',
                  desc: 'Best practices for secure and scalable backend systems.',
                  img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900',
                  category: 'Backend',
                  date: 'Dec 28, 2025',
                },
              ]"
              :key="post.title"
              class="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-200"
            >
              <div class="h-24 w-28 shrink-0 overflow-hidden rounded-xl">
                <img
                  :src="post.img"
                  class="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>

              <div class="flex flex-col">
                <span class="text-xs text-emerald-600 font-medium">
                  {{ post.category }}
                </span>

                <h3 class="mt-1 text-sm font-semibold text-slate-900 leading-5">
                  {{ post.title }}
                </h3>

                <p class="mt-1 text-xs text-slate-500 line-clamp-2">
                  {{ post.desc }}
                </p>

                <span class="mt-2 text-xs text-slate-400">
                  {{ post.date }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-16 bg-white/70">
      <div class="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 class="text-3xl font-bold text-emerald-600 mb-8">
            Let’s Talk Business
          </h2>

          <div class="space-y-4">
            <div class="bg-white rounded-2xl p-5 border border-slate-200">
              <h3 class="font-semibold text-slate-800">Address</h3>
              <p class="text-slate-600 mt-1">
                Rowmari, Kurigram 5640, Bangladesh
              </p>
            </div>
            <div class="bg-white rounded-2xl p-5 border border-slate-200">
              <h3 class="font-semibold text-slate-800">Phone Number</h3>
              <p class="text-slate-600 mt-1">+880 1911742233</p>
            </div>
            <div class="bg-white rounded-2xl p-5 border border-slate-200">
              <h3 class="font-semibold text-slate-800">Email Address</h3>
              <p class="text-slate-600 mt-1">info@ashikahmed.net</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-3xl font-bold text-emerald-600 mb-8">
            Contact Information
          </h2>

          <form class="space-y-4">
            <div class="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-emerald-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-emerald-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-emerald-500"
            />
            <textarea
              rows="4"
              placeholder="Write your message..."
              class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-emerald-500"
            ></textarea>

            <button
              type="submit"
              class="rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
