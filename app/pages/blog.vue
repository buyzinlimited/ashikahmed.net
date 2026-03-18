<script setup>
const featuredPost = {
  title: "Modern Web Development Trends in 2026",
  category: "Web Development",
  date: "January 10, 2026",
  readTime: "5 min read",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  excerpt:
    "Explore the latest technologies, frameworks, and UI patterns shaping the future of modern web applications, performance, and scalable product development.",
  slug: "/blog/modern-web-development-trends-2026",
};

const posts = [
  {
    title: "Why Performance Matters in Modern Web Apps",
    category: "Performance",
    date: "January 05, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop",
    excerpt:
      "Learn how website speed affects user experience, conversion rate, and search visibility in modern digital products.",
    slug: "/blog/why-performance-matters",
  },
  {
    title: "Building Scalable APIs with Laravel",
    category: "Backend",
    date: "December 28, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop",
    excerpt:
      "A practical overview of structuring Laravel APIs for security, maintainability, and future growth.",
    slug: "/blog/building-scalable-apis-with-laravel",
  },
  {
    title: "How to Design a Better Portfolio Website",
    category: "UI/UX",
    date: "December 20, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
    excerpt:
      "Key sections, hierarchy, and design decisions that make a portfolio website look professional and convert better.",
    slug: "/blog/better-portfolio-website",
  },
  {
    title: "Nuxt.js vs Traditional Frontend Setup",
    category: "Frontend",
    date: "December 12, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=900&auto=format&fit=crop",
    excerpt:
      "A quick comparison of why Nuxt can improve developer workflow, SEO, and performance for production projects.",
    slug: "/blog/nuxt-vs-traditional-frontend",
  },
  {
    title: "Best Practices for Responsive Web Design",
    category: "Responsive Design",
    date: "December 04, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
    excerpt:
      "Build layouts that feel polished across mobile, tablet, and desktop with a practical responsive design strategy.",
    slug: "/blog/responsive-web-design-best-practices",
  },
  {
    title: "Improving Website Conversion with Better UI",
    category: "Business",
    date: "November 26, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    excerpt:
      "Discover how layout, typography, CTA placement, and content structure can improve conversions and trust.",
    slug: "/blog/improving-website-conversion-ui",
  },
];

const categories = [
  "Web Development",
  "Frontend",
  "Backend",
  "Performance",
  "UI/UX",
  "Business",
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Blog — Web Development, Nuxt.js, Vue.js & Laravel Insights"
      description="Read the latest articles on web development, Nuxt.js, Vue.js, and Laravel. Tutorials, best practices, performance tips, and insights on building modern, scalable applications."
      keywords="Web Development Blog, Nuxt.js Tutorials, Vue.js Guide, Laravel Tips, Programming Blog, Full Stack Development Articles, JavaScript Tutorials, Software Engineering Blog"
    />

    <!-- Hero -->
    <section class="relative py-20 md:py-24">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Blog & Insights
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Articles on web development, UI, performance, and digital growth.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              I share practical insights, development ideas, and useful content
              around modern websites, scalable systems, responsive design, and
              better user experiences.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                Work With Me
              </NuxtLink>

              <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Projects
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
                <span
                  class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  Featured Article
                </span>

                <h2
                  class="mt-4 text-2xl font-bold tracking-tight text-slate-900"
                >
                  {{ featuredPost.title }}
                </h2>

                <div
                  class="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500"
                >
                  <span>{{ featuredPost.category }}</span>
                  <span>•</span>
                  <span>{{ featuredPost.date }}</span>
                  <span>•</span>
                  <span>{{ featuredPost.readTime }}</span>
                </div>

                <p class="mt-4 text-sm leading-7 text-slate-600">
                  {{ featuredPost.excerpt }}
                </p>

                <NuxtLink
                  :to="featuredPost.slug"
                  class="mt-6 inline-flex items-center text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Read article →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-emerald-600">
            Editor’s Pick
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Featured blog post
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            A highlighted article covering important ideas in modern web
            development and digital product building.
          </p>
        </div>

        <article
          class="mt-10 grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 lg:grid-cols-2 lg:p-8"
        >
          <div
            class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
          >
            <img
              :src="featuredPost.image"
              :alt="featuredPost.title"
              class="h-full w-full object-cover"
            />
          </div>

          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              {{ featuredPost.category }}
            </span>

            <h3
              class="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              {{ featuredPost.title }}
            </h3>

            <div
              class="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500"
            >
              <span>{{ featuredPost.date }}</span>
              <span>•</span>
              <span>{{ featuredPost.readTime }}</span>
            </div>

            <p class="mt-4 leading-7 text-slate-600">
              {{ featuredPost.excerpt }}
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink
                :to="featuredPost.slug"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Read Full Article
              </NuxtLink>

              <NuxtLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Need Similar Help?
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-16 md:py-20 bg-slate-50/80">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <span class="text-sm font-semibold text-emerald-600">
              Categories
            </span>
            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Topics I write about
            </h2>
            <p class="mt-4 leading-7 text-slate-600">
              Explore articles across web development, frontend engineering,
              backend systems, performance, design, and business growth.
            </p>
          </div>

          <div class="lg:col-span-8">
            <div
              class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="item in categories"
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
                    Practical Content
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    Articles focused on real-world web development, cleaner
                    workflows, better UI, and scalable implementation.
                  </p>
                </div>

                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-sm font-semibold text-slate-900">
                    Developer Insights
                  </p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">
                    Notes on frontend, backend, performance, and business-driven
                    product building with modern tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Posts Grid -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div class="max-w-2xl">
          <span class="text-sm font-semibold text-emerald-600">
            Latest Posts
          </span>
          <h2
            class="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Recent articles and resources
          </h2>
          <p class="mt-4 leading-7 text-slate-600">
            A curated collection of articles for developers, businesses, and
            anyone building better digital products.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="post in posts"
            :key="post.title"
            class="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="aspect-[16/10] overflow-hidden bg-slate-100">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div class="p-6">
              <div
                class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600"
              >
                <span>{{ post.category }}</span>
              </div>

              <h3 class="mt-3 text-xl font-semibold text-slate-900">
                {{ post.title }}
              </h3>

              <div
                class="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500"
              >
                <span>{{ post.date }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>

              <p class="mt-4 text-sm leading-7 text-slate-600">
                {{ post.excerpt }}
              </p>

              <div class="mt-6">
                <NuxtLink
                  :to="post.slug"
                  class="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Read More →
                </NuxtLink>
              </div>
            </div>
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
                Stay Connected
              </span>
              <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Want a modern website or custom web application?
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                Alongside writing about development, I also help businesses and
                individuals build clean, scalable, and professional digital
                products.
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
                View Portfolio
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
