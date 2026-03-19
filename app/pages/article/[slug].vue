<script setup>
const route = useRoute();
const supabase = useSupabaseClient();

const post = ref(null);
const loading = ref(true);
const error = ref(null);

const loadPost = async () => {
  const slug = route.params.slug;

  const { data, error: err } = await supabase
    .from("posts")
    .select(
      `
      *,
      category:categories (
        id,
        name,
        slug
      )
    `,
    )
    .eq("slug", slug)
    .single();

  if (err) {
    console.error(err);
    error.value = "Post not found";
  } else {
    post.value = data;
  }

  loading.value = false;
};

onMounted(() => {
  loadPost();
});
</script>

<template>
  <main class="bg-white/70">
    <section class="max-w-3xl mx-auto px-4 py-12">
      <div v-if="loading" class="animate-pulse space-y-4">
        <div class="h-8 bg-slate-200 rounded"></div>
        <div class="h-4 bg-slate-200 rounded"></div>
        <div class="h-64 bg-slate-200 rounded"></div>
      </div>

      <div v-else-if="post">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">{{ post.title }}</h1>

        <p class="text-sm text-slate-500 mb-6">
          {{ post.category?.name }} • {{ $date(post.created_at) }}
        </p>

        <NuxtImg
          v-if="post.cover_url"
          :src="post.cover_url"
          alt="Cover Image"
          class="w-full h-auto mb-6 rounded-lg"
        />

        <div class="prose lg:prose-xl text-slate-700">
          <!-- raw HTML content -->
          <div v-html="post.content"></div>
        </div>
      </div>

      <div v-else class="text-center text-slate-500">
        {{ error }}
      </div>
    </section>
  </main>
</template>

<style scoped></style>
