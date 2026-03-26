<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

definePageMeta({
  middleware: "auth",
});

const loading = ref(false);
const message = ref("");
const categories = ref([]);

const form = reactive({
  title: "",
  slug: "",
  summary: "",
  content: "",
  meta_title: "",
  meta_description: "",
  meta_keyword: "",
  canonical_url: "",
  status: "draft",
  is_featured: false,
  category_id: "",
  cover_url: "",
});

// Auto slug generate
watch(
  () => form.title,
  (val) => {
    form.slug = val
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  },
);

// Load Categories
const loadCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name")
    .order("name", { ascending: true });

  if (error) {
    console.error(error);
  } else {
    categories.value = data;
  }
};

onMounted(() => {
  loadCategories();
});

// Create Post
const createPost = async () => {
  if (!form.title || !form.summary || !form.content) {
    message.value = "Title, Summary, and Content are required!";
    return;
  }

  message.value = "";
  loading.value = true;

  const { data, error } = await supabase.from("posts").insert([
    {
      title: form.title,
      slug: form.slug,
      summary: form.summary,
      content: form.content,
      meta_title: form.meta_title,
      meta_description: form.meta_description,
      meta_keyword: form.meta_keyword,
      canonical_url: form.canonical_url,
      status: form.status,
      is_featured: form.is_featured,
      category_id: form.category_id || null,
      cover_url: form.cover_url || null,
    },
  ]);

  loading.value = false;

  if (error) {
    message.value = error.message;
  } else {
    message.value = "Post created successfully";

    router.push("/dashboard/posts");
  }
};
</script>

<template>
  <main class="max-w-5xl mx-auto px-4">
    <nav class="flex items-center justify-between py-4">
      <NuxtLink to="/dashboard/posts">All Posts</NuxtLink>
      <NuxtLink
        to="/dashboard/posts/create"
        class="bg-emerald-400 px-4 py-2 rounded inline-block text-white hover:underline"
        >Create New</NuxtLink
      >
    </nav>

    <form
      @submit.prevent="createPost"
      class="max-w-5xl mx-auto p-6 bg-white rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-4">Create New Post</h2>

      <div class="space-y-4">
        <BaseInput label="Title" v-model="form.title" />
        <BaseInput label="Slug" v-model="form.slug" />
        <BaseInput label="Meta Title" v-model="form.meta_title" />
        <BaseTextarea
          label="Meta Description"
          v-model="form.meta_description"
        />
        <BaseTextarea label="Meta Keyword" v-model="form.meta_keyword" />
        <BaseInput label="canonical url" v-model="form.canonical_url" />

        <BaseTextarea label="Summary" v-model="form.summary" />

        <div>
          <label class="block font-semibold mb-1">Content</label>
          <ClientOnly>
            <BaseEditor v-model="form.content" />
          </ClientOnly>
        </div>
        <BaseInput label="Image" v-model="form.image_url" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BaseSelect
            label="Categories"
            v-model="form.category_id"
            placeholder="Select Categories"
            :options="categories"
          />

          <BaseSelect
            label="Featired"
            v-model="form.is_featured"
            placeholder="Select featured"
            :options="[
              {
                id: true,
                name: 'Yes',
              },
              {
                id: false,
                name: 'No',
              },
            ]"
          />

          <BaseSelect
            label="Status"
            placeholder="Select status"
            :options="[
              {
                id: 'draft',
                name: 'Draft',
              },
              {
                id: 'published',
                name: 'Published',
              },
            ]"
          />
        </div>

        <span class="text-red-500">{{ message }}</span>

        <BaseButton :loading="loading">Create Post</BaseButton>
      </div>
    </form>
  </main>
</template>
