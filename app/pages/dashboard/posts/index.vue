<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const postStore = usePostStore();
const { posts } = storeToRefs(postStore);

const loadPosts = async () => {
  await postStore.all();
};

const deletePost = async (id) => {
  if (!confirm("Are you sure you want to delete this post?")) return;

  await postStore.delete(id);
  await loadPosts();
};

onMounted(() => {
  loadPosts();
});
</script>

<template>
  <main>
    <Head>
      <Title>Manage Posts</Title>
    </Head>
    <nav
      class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Posts</h1>
        <p class="mt-1 text-sm text-slate-500">
          Manage and publish your blog posts
        </p>
      </div>

      <NuxtLink
        to="/dashboard/posts/create"
        class="inline-flex items-center justify-center rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Create New
      </NuxtLink>
    </nav>

    <div
      v-if="posts.length"
      class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="post in posts"
        :key="post.id"
        class="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="relative">
          <NuxtImg
            v-if="post.cover_url"
            :src="post.cover_url"
            :alt="post.title"
            class="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div
            v-else
            class="flex h-56 w-full items-center justify-center bg-gradient-to from-slate-100 via-slate-50 to-emerald-50 text-sm font-medium text-slate-400"
          >
            No Cover Available
          </div>

          <div
            class="absolute inset-x-0 bottom-0 bg-gradient-to from-slate-900/70 to-transparent p-4"
          >
            <div class="flex items-center justify-between gap-3">
              <span
                class="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur"
              >
                Blog Post
              </span>

              <span
                v-if="post.category"
                class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700"
              >
                {{ post.category?.name }}
              </span>
            </div>
          </div>
        </div>

        <div class="p-5">
          <div class="mb-3">
            <h2 class="line-clamp-1 text-xl font-bold text-slate-900">
              {{ post.title }}
            </h2>

            <p class="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
              {{ post.summary || "No summary added for this post yet." }}
            </p>
          </div>

          <div
            class="flex items-center justify-between gap-3 border-t border-slate-100 pt-4"
          >
            <NuxtLink
              :to="`/dashboard/posts/${post.id}`"
              class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Edit Post
            </NuxtLink>

            <button
              @click="deletePost(post.id)"
              class="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      class="flex min-h-96 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center"
    >
      <div class="max-w-md px-6">
        <h3 class="text-xl font-semibold text-slate-900">No posts found</h3>
        <p class="mt-2 text-sm leading-6 text-slate-500">
          Start writing your first blog post and manage everything from here.
        </p>

        <NuxtLink
          to="/dashboard/posts/create"
          class="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Create Post
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
