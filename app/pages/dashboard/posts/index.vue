<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();
const posts = ref([]);

const loadPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("id", { ascending: false });
  if (error) console.error(error);
  else posts.value = data;
};

// Delete post function
const deletePost = async (id) => {
  const confirmed = confirm("Are you sure you want to delete this post?");
  if (!confirmed) return;

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    alert(error.message);
  } else {
    posts.value = posts.value.filter((p) => p.id !== id);
  }
};

onMounted(() => loadPosts());
</script>

<template>
  <main>
    <nav class="flex items-center justify-between">
      <h1 class="text-3xl font-bold mb-6">Posts</h1>
      <NuxtLink
        to="/dashboard/posts/create"
        class="bg-emerald-400 px-4 py-2 rounded inline-block text-white hover:underline"
        >Create New</NuxtLink
      >
    </nav>

    <div class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white rounded-xl overflow-hidden transition"
        >
          <NuxtImg
            :src="post.cover_url"
            :alt="post.title"
            class="object-cover"
          />

          <div class="p-4">
            <h2 class="font-bold text-lg text-slate-900 mb-2 truncate">
              {{ post.title }}
            </h2>
            <p class="text-slate-600 line-clamp-3">{{ post.summary }}</p>

            <div class="mt-4 flex justify-between items-center">
              <NuxtLink
                :to="`/dashboard/posts/${post.id}`"
                class="text-emerald-500 hover:text-emerald-600 font-semibold transition"
              >
                Edit
              </NuxtLink>

              <button
                @click="deletePost(post.id)"
                class="text-red-500 hover:text-red-600 font-semibold transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
