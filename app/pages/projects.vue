<script setup>
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

const projects = [
  {
    title: "SaaS Landing Page",
    category: "Business Website",
    desc: "A modern conversion-focused landing page designed for startups and SaaS products with clean UI, strong CTA sections, and responsive layout.",
    image: "/projects/saas.png",
    tags: ["Vue.js", "Tailwind CSS", "UI/UX"],
    live: "https://yourdomain.com/saas",
    github: "https://github.com/yourname/saas-landing",
  },
  {
    title: "Movie Titles API",
    category: "Backend Development",
    desc: "A REST API for searching, filtering, and managing movie data with pagination, clean structure, and scalable endpoint design.",
    image: "/projects/movie.png",
    tags: ["Node.js", "Express", "REST API", "MongoDB"],
    live: "https://yourdomain.com/movie-api",
    github: "https://github.com/yourname/movie-api",
  },
  {
    title: "E-commerce Mini Shop",
    category: "eCommerce Platform",
    desc: "A complete mini eCommerce system with product listing, cart, checkout flow, order management, and admin control panel.",
    image: "/projects/shop.png",
    tags: ["Laravel", "MySQL", "Payment Gateway", "Admin Panel"],
    live: "https://yourdomain.com/shop",
    github: "https://github.com/yourname/mini-shop",
  },
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    desc: "A clean and professional personal portfolio website built to showcase services, projects, skills, and contact flow for client conversion.",
    image: "/projects/lms.png",
    tags: ["Nuxt.js", "Tailwind CSS", "SEO"],
    live: "https://yourdomain.com/portfolio",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "Admin Dashboard UI",
    category: "Dashboard System",
    desc: "A reusable admin dashboard interface with charts, tables, cards, analytics blocks, and modern component-based design.",
    image: "/projects/movie.png",
    tags: ["Vue.js", "Tailwind CSS", "Dashboard"],
    live: "https://yourdomain.com/dashboard",
    github: "https://github.com/yourname/dashboard-ui",
  },
  {
    title: "Business Service Website",
    category: "Corporate Website",
    desc: "A service-based company website with pricing, testimonials, about page, lead generation form, and responsive business layout.",
    image: "/projects/shop.png",
    tags: ["Nuxt.js", "Tailwind CSS", "Business"],
    live: "https://yourdomain.com/business",
    github: "https://github.com/yourname/business-site",
  },
];

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
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Projects | Ashik Ahmed - Full Stack Developer"
      description="Explore projects built by Ashik Ahmed including modern websites, dashboards, APIs, business platforms, and full-stack web applications."
      keywords="Projects, Portfolio, Ashik Ahmed, Full Stack Developer, Vue Projects, Nuxt Projects, Laravel Projects, Web Development Portfolio"
    />

    <!-- Hero -->
    <section class="relative py-20 md:py-24">
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
                    class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-lg font-bold text-emerald-700"
                  >
                    PR
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

    <!-- Featured Project -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-emerald-600">
            Featured Work
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Highlighted case study
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            One of my selected projects with modern UI, backend structure, and
            production-ready implementation.
          </p>
        </div>

        <div
          class="mt-10 grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 lg:grid-cols-2 lg:p-8"
        >
          <div
            class="overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
          >
            <img
              :src="featuredProject.image"
              :alt="featuredProject.title"
              class="h-full w-full object-cover"
            />
          </div>

          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              {{ featuredProject.category }}
            </span>

            <h3
              class="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              {{ featuredProject.title }}
            </h3>

            <p class="mt-4 leading-7 text-slate-600">
              {{ featuredProject.desc }}
            </p>

            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in featuredProject.tags"
                :key="tag"
                class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                {{ tag }}
              </span>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                :href="featuredProject.live"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Live Preview
              </a>

              <a
                :href="featuredProject.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-16 md:py-20 bg-slate-50/80">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-emerald-600">
            Project Collection
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            More selected projects
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            A curated selection of development work across different business
            needs, platforms, and technologies.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="project in projects"
            :key="project.title"
            class="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-emerald-200"
          >
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div class="p-6">
              <span
                class="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600"
              >
                {{ project.category }}
              </span>

              <h3 class="mt-3 text-xl font-semibold text-slate-900">
                {{ project.title }}
              </h3>

              <p class="mt-3 text-sm leading-7 text-slate-600">
                {{ project.desc }}
              </p>

              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {{ tag }}
                </span>
              </div>

              <div class="mt-6 flex items-center gap-4">
                <a
                  :href="project.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Live Preview →
                </a>

                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-16 md:py-20">
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
