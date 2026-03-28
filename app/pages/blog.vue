<script setup>
const categoryStore = useCategoryStore();
const postStore = usePostStore();
const { posts } = storeToRefs(postStore);
const { categories } = storeToRefs(categoryStore);

const loadPosts = async () => {
  await postStore.getPosts();
};

const loadCategories = async () => {
  await categoryStore.getCategories();
};

onMounted(() => {
  loadPosts();
  loadCategories();
});
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Blog — Web Development, Nuxt.js, Vue.js & Laravel Insights"
      description="Read the latest articles on web development, Nuxt.js, Vue.js, and Laravel. Tutorials, best practices, performance tips, and insights on building modern, scalable applications."
      keywords="Web Development Blog, Nuxt.js Tutorials, Vue.js Guide, Laravel Tips, Programming Blog, Full Stack Development Articles, JavaScript Tutorials, Software Engineering Blog"
    />

    <!-- Hero -->
    <section class="relative py-8 md:py-12">
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

              <article v-for="post in posts.slice(0, 1)" class="relative">
                <span
                  class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  Featured Article
                </span>

                <NuxtLink :to="`article/${post.slug}`">
                  <h2
                    class="mt-4 text-primary text-2xl font-bold tracking-tight"
                  >
                    {{ post.title }}
                  </h2>
                </NuxtLink>

                <div
                  class="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500"
                >
                  <span>{{ post.category?.name }}</span>
                  <span>•</span>
                  <span>{{ $date(post.created_at) }}</span>
                </div>

                <p class="mt-4 text-sm leading-7 text-slate-600">
                  {{ post.summary }}
                </p>

                <NuxtLink
                  :to="`article/${post.slug}`"
                  class="mt-6 inline-flex items-center text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
                >
                  Read article
                </NuxtLink>
              </article>
            </div>
          </div>
        </div>
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
                  :key="item.id"
                  class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {{ item.name }}
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
    <section class="py-8 md:py-12">
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
            <div class="aspect-auto overflow-hidden bg-slate-100">
              <NuxtLink :to="`article/${post.slug}`">
                <NuxtImg
                  :src="post.cover_url"
                  :alt="post.title"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </NuxtLink>
            </div>

            <div class="p-6">
              <div
                class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase mb-2 text-emerald-600"
              >
                <span>{{ post.category?.name }}</span>
              </div>

              <NuxtLink :to="`article/${post.slug}`">
                <h3
                  class="text-xl font-semibold text-slate-900 line-clamp-2 mb-2"
                >
                  {{ post.title }}
                </h3>
              </NuxtLink>

              <p class="text-sm leading-7 text-slate-600 line-clamp-3">
                {{ post.summary }}
              </p>

              <NuxtLink
                :to="`/article/${post.slug}`"
                class="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
              >
                Read More
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-8">
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
