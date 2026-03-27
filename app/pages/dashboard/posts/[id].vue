<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const categoryStore = useCategoryStore();
const postStore = usePostStore();
const { categories } = storeToRefs(categoryStore);

const route = useRoute();
const loading = ref(false);
const message = ref("");

const form = reactive({
  title: "",
  slug: "",
  summary: "",
  content: "",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
  cover_url: "",
  is_featured: false,
  category_id: "",
  status: "draft",
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
  await categoryStore.all();
};

// Load post
const loadPost = async () => {
  const response = await postStore.show(route.params.id);

  form.title = response?.title || "";
  form.slug = response?.slug || "";
  form.summary = response?.summary || "";
  form.content = response?.content || "";
  form.meta_title = response?.meta_title || "";
  form.meta_description = response?.meta_description || "";
  form.meta_keywords = response?.meta_keywords || "";
  form.canonical_url = response?.canonical_url || "";
  form.cover_url = response?.cover_url || "";
  form.is_featured = response?.is_featured ?? false;
  form.category_id = response?.category_id || null;
  form.status = response?.status;
};

onMounted(() => {
  loadCategories();
  loadPost();
});

const update = async () => {
  loading.value = true;

  try {
    const response = await postStore.update(route.params.id, form);

    if (response) {
      await navigateTo("/dashboard/posts");
    }
  } catch (error) {
    message.value = error.message || "Post insert failed";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main>
    <Head>
      <Title>Update Post</Title>
    </Head>
    <nav
      class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Posts</h1>
        <p class="mt-1 text-sm text-slate-500">
          Manage your blog posts, articles, and published content
        </p>
      </div>

      <NuxtLink
        to="/dashboard/posts/create"
        class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Update Post
      </NuxtLink>
    </nav>

    <form
      @submit.prevent="update"
      class="max-w-5xl mx-auto p-6 bg-white rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-4">Update Post</h2>

      <div class="space-y-4">
        <BaseInput label="Title" v-model="form.title" />
        <BaseInput label="Slug" v-model="form.slug" />
        <BaseInput label="Meta Title" v-model="form.meta_title" />
        <BaseTextarea
          label="Meta Description"
          v-model="form.meta_description"
        />
        <BaseTextarea label="Meta Keyword" v-model="form.meta_keywords" />
        <BaseInput label="canonical url" v-model="form.canonical_url" />

        <BaseTextarea label="Summary" v-model="form.summary" />

        <BaseEditor label="Content" v-model="form.content" />
        <BaseInput label="Cover" v-model="form.cover_url" />

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
              { id: true, name: 'Yes' },
              { id: false, name: 'No' },
            ]"
          />

          <BaseSelect
            label="Status"
            placeholder="Select status"
            :options="[
              { id: 'draft', name: 'Draft' },
              { id: 'published', name: 'Published' },
            ]"
          />
        </div>

        <BaseButton :loading="postStore.loading">Update Post</BaseButton>
      </div>
    </form>
  </main>
</template>
