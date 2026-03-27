<script setup>
const route = useRoute();
const postStore = usePostStore();

const { post, loading, errors } = storeToRefs(postStore);

const loadPost = async () => {
  await postStore.getPostBySlug(route.params.slug);
};

onMounted(() => {
  loadPost();
});
</script>

<template>
  <main class="min-h-screen bg-[#f8fafc]">
    <SeoMeta
      :title="post?.title"
      :description="post?.meta_description || post?.short_description"
      :keywords="post?.meta_keywords"
      :image="post?.cover_url"
    />

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Loading -->
      <template v-if="loading">
        <div class="animate-pulse space-y-8">
          <div class="space-y-4">
            <div class="h-4 w-24 rounded-full bg-slate-200"></div>
            <div class="h-12 w-3/4 rounded-2xl bg-slate-200"></div>
            <div class="h-5 w-2/3 rounded-lg bg-slate-200"></div>
          </div>

          <div
            class="h-[260px] md:h-[480px] w-full rounded-[28px] bg-slate-200"
          ></div>

          <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
            <div class="space-y-4">
              <div class="h-8 w-56 rounded-lg bg-slate-200"></div>
              <div class="h-4 w-full rounded bg-slate-200"></div>
              <div class="h-4 w-11/12 rounded bg-slate-200"></div>
              <div class="h-4 w-9/12 rounded bg-slate-200"></div>
            </div>
            <div class="h-72 rounded-[28px] bg-slate-200"></div>
          </div>
        </div>
      </template>

      <!-- Post Content -->
      <template v-else-if="post">
        <!-- Hero -->
        <section
          class="relative overflow-hidden rounded-[32px] bg-slate-900 text-white"
        >
          <div class="absolute inset-0">
            <NuxtImg
              v-if="post.cover_url"
              :src="post.cover_url"
              :alt="post.title"
              class="h-full w-full object-cover opacity-70"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-emerald-900/70"
            ></div>
          </div>

          <div class="relative px-6 py-10 sm:px-8 lg:px-12 lg:py-16">
            <div class="max-w-4xl">
              <span
                class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur"
              >
                {{ post.category?.name || "Article" }}
              </span>

              <h1
                class="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-6xl"
              >
                {{ post.title }}
              </h1>

              <div
                class="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-300"
              >
                <span class="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  Published: {{ $date(post.created_at) }}
                </span>

                <span
                  v-if="post.author?.name"
                  class="rounded-full bg-white/10 px-3 py-1 backdrop-blur"
                >
                  Author: {{ post.author.name }}
                </span>
              </div>

              <p
                v-if="post.short_description"
                class="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg lg:leading-8"
              >
                {{ post.short_description }}
              </p>
            </div>
          </div>
        </section>

        <!-- Main Layout -->
        <section class="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div class="space-y-8">
            <div
              class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
            >
              <div class="mb-6 flex items-center gap-3">
                <div class="h-10 w-10 rounded-2xl bg-emerald-100"></div>
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600"
                  >
                    Blog Details
                  </p>
                  <h2 class="text-2xl font-bold text-slate-900">
                    Article Overview
                  </h2>
                </div>
              </div>

              <div
                v-if="post.cover_url"
                class="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200"
              >
                <NuxtImg
                  :src="post.cover_url"
                  :alt="post.title"
                  class="w-full object-cover"
                />
              </div>

              <MarkdownPreview :content="post.content" class="post-markdown" />
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="space-y-6 lg:sticky lg:top-24 h-fit">
            <div
              class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div
                class="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-5 text-white"
              >
                <h3 class="text-lg font-bold">Post Info</h3>
                <p class="mt-1 text-sm text-white/85">
                  Quick information about this article
                </p>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"
                  >
                    Category
                  </p>
                  <p class="mt-1 text-sm font-medium text-slate-700">
                    {{ post.category?.name || "General" }}
                  </p>
                </div>

                <div class="h-px bg-slate-200"></div>

                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"
                  >
                    Published Date
                  </p>
                  <p class="mt-1 text-sm font-medium text-slate-700">
                    {{ $date(post.created_at) }}
                  </p>
                </div>

                <template v-if="post.author?.name">
                  <div class="h-px bg-slate-200"></div>

                  <div>
                    <p
                      class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"
                    >
                      Author
                    </p>
                    <p class="mt-1 text-sm font-medium text-slate-700">
                      {{ post.author.name }}
                    </p>
                  </div>
                </template>
              </div>
            </div>

            <div class="rounded-xl bg-slate-900 p-6 text-white shadow-sm">
              <h3 class="text-lg font-bold">Enjoyed this article?</h3>
              <p class="mt-2 text-sm leading-6 text-slate-300">
                Explore more insights, guides, and updates from our latest
                posts.
              </p>

              <a
                href="/blog"
                class="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                View All Posts
              </a>
            </div>
          </aside>
        </section>
      </template>

      <!-- Empty / Error -->
      <template v-else>
        <div
          class="rounded-xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-red-100"
        >
          <h2 class="text-2xl font-bold text-red-500">
            {{ errors || "Post not found" }}
          </h2>

          <a
            href="/blog"
            class="mt-5 inline-flex items-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Blog
          </a>
        </div>
      </template>
    </div>
  </main>
</template>

<style scoped>
:deep(.post-markdown) {
  color: #334155;
  font-size: 16px;
  line-height: 1.9;
}

:deep(.post-markdown .md-editor-preview) {
  background: transparent;
  padding: 0;
}

:deep(.post-markdown .md-editor-preview),
:deep(.post-markdown .md-editor-preview *) {
  word-break: break-word;
  overflow-wrap: anywhere;
}

:deep(.post-markdown h1),
:deep(.post-markdown h2),
:deep(.post-markdown h3),
:deep(.post-markdown h4),
:deep(.post-markdown h5),
:deep(.post-markdown h6) {
  margin-top: 1.5em;
  margin-bottom: 0.7em;
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
}

:deep(.post-markdown h1) {
  font-size: 2rem;
}

:deep(.post-markdown h2) {
  font-size: 1.65rem;
}

:deep(.post-markdown h3) {
  font-size: 1.35rem;
}

:deep(.post-markdown p) {
  margin: 1rem 0;
  color: #475569;
}

:deep(.post-markdown ul),
:deep(.post-markdown ol) {
  margin: 1rem 0;
  padding-left: 1.25rem;
}

:deep(.post-markdown li) {
  margin: 0.45rem 0;
}

:deep(.post-markdown a) {
  color: #059669;
  font-weight: 600;
  text-decoration: none;
}

:deep(.post-markdown a:hover) {
  text-decoration: underline;
}

:deep(.post-markdown blockquote) {
  margin: 1.25rem 0;
  padding: 1rem 1.25rem;
  border-left: 4px solid #10b981;
  border-radius: 1rem;
  background: #f8fafc;
  color: #475569;
}

:deep(.post-markdown pre) {
  overflow-x: auto;
  margin: 1.25rem 0;
  padding: 1rem;
  border-radius: 1rem;
}

:deep(.post-markdown code) {
  word-break: break-word;
  white-space: pre-wrap;
}

:deep(.post-markdown img) {
  margin: 1rem 0;
  border-radius: 1rem;
}

:deep(.post-markdown table) {
  display: block;
  width: 100%;
  overflow-x: auto;
  margin: 1.25rem 0;
  border-collapse: collapse;
}

:deep(.post-markdown th),
:deep(.post-markdown td) {
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  text-align: left;
}

:deep(.post-markdown th) {
  background: #f8fafc;
  color: #0f172a;
}
</style>
