<script setup>
const route = useRoute();
const postStore = usePostStore();
const { post } = storeToRefs(postStore);

const loadPost = async () => {
  await postStore.getPostBySlug(route.params.slug);
};

onMounted(() => {
  loadPost();
});
</script>

<template>
  <main class="bg-white/90">
    <SeoMeta :title="post.title" />
    <section class="max-w-5xl mx-auto px-4 py-12">
      <div v-if="postStore.loading" class="animate-pulse space-y-4">
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
          <div v-html="post.content"></div>
        </div>
      </div>

      <div v-else class="text-center text-slate-500">Post Not found!</div>
    </section>
  </main>
</template>

<style scoped></style>
