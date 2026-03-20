<script setup>
const supabase = useSupabaseClient();
const featured = ref([]);
const posts = ref([]);
const loading = ref(true);

const loadFeatured = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      category:categories (id, name, slug)
    `,
    )
    .eq("is_featured", true)
    .order("created_at", { ascending: false });

  if (error) console.error(error);
  else featured.value = data;

  loading.value = false;
};

const loadPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      category:categories (id, name, slug)
    `,
    )
    .eq("is_featured", false)
    .order("created_at", { ascending: false });

  if (error) console.error(error);
  else posts.value = data;

  loading.value = false;
};

onMounted(() => {
  loadFeatured();
  loadPosts();
});
</script>

<template>
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
            Thoughts, tutorials, and insights on web development, UI design, and
            building scalable applications.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          View all articles
        </NuxtLink>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article
          v-if="!loading"
          v-for="post in featured"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-emerald-200"
        >
          <div class="relative aspect-auto overflow-hidden">
            <NuxtLink :to="`/article/${post?.slug}`">
              <NuxtImg
                :src="post.cover_url"
                :alt="post.title"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </NuxtLink>

            <div
              class="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 backdrop-blur"
            >
              {{ post?.category?.name }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-2xl font-semibold text-slate-900 line-clamp-2">
              {{ post?.title }}
            </h3>

            <p class="mt-3 text-slate-600 leading-7 line-clamp-4">
              {{ post?.summary }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-500">
                <IconsClock class="size-5" />
                <span class="text-sm">{{ $date(post?.created_at) }}</span>
              </div>
              <NuxtLink
                :to="`/article/${post?.slug}`"
                class="mt-5 inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700"
              >
                Read full article →
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- Skeleton -->
        <div v-else class="space-y-6">
          <div
            class="animate-pulse rounded-2xl border border-slate-200 bg-slate-100 h-96 w-full"
          ></div>
          <div class="flex-1 space-y-2 py-1">
            <div class="h-10 bg-slate-200 rounded w-1/2"></div>
            <div class="h-8 bg-slate-200 rounded w-3/4"></div>
            <div class="h-6 bg-slate-200 rounded w-1/4"></div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <article
            v-if="!loading"
            v-for="post in posts"
            :key="post.title"
            class="group flex flex-col md:flex-row gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-emerald-200"
          >
            <div
              class="w-full md:w-40 h-auto md:h-32 shrink-0 overflow-hidden rounded-xl"
            >
              <NuxtLink :to="`/article/${post?.slug}`">
                <NuxtImg
                  :src="post.cover_url"
                  :alt="post.title"
                  class="h-full w-full object-cover transition group-hover:scale-105"
                />
              </NuxtLink>
            </div>

            <div class="flex flex-col flex-1">
              <div class="flex items-center justify-between gap-2 flex-wrap">
                <span class="text-xs text-emerald-600 font-medium">
                  {{ post.category?.name }}
                </span>
                <span class="text-xs text-slate-400">
                  {{ $date(post.created_at) }}
                </span>
              </div>

              <h3
                class="mt-2 text-base md:text-sm font-semibold text-slate-900 leading-5"
              >
                {{ post.title }}
              </h3>

              <p class="mt-1 text-sm text-slate-500 line-clamp-2">
                {{ post.summary }}
              </p>
            </div>
          </article>
          <!-- Skeleton -->
          <div v-else class="space-y-4">
            <div v-for="i in 4" class="flex gap-4 animate-pulse">
              <div class="h-32 w-32 bg-slate-200 rounded-xl"></div>
              <div class="flex-1 space-y-2 py-1">
                <div class="h-4 bg-slate-200 rounded w-1/2"></div>
                <div class="h-4 bg-slate-200 rounded w-3/4"></div>
                <div class="h-3 bg-slate-200 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
