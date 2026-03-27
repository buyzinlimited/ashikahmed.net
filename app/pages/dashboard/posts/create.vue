<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const categoryStore = useCategoryStore();
const postStore = usePostStore();
const { categories } = storeToRefs(categoryStore);

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

onMounted(() => {
  loadCategories();
});

const create = async () => {
  loading.value = true;

  try {
    const response = await postStore.store(form);

    if (response) {
      await navigateTo("/dashboard/posts");
    }
  } catch (error) {
    message.value = error.message || "Project insert failed";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main>
    <Head>
      <Title>Create Post</Title>
    </Head>

    <div class="card">
      <div class="card__header">
        <div class="card__header__content">
          <h2 class="card__title">Posts</h2>
          <p class="card__description">
            Manage your blog posts, articles, and published content
          </p>
        </div>

        <div class="card__header-action">
          <NuxtLink to="/dashboard/posts/create" class="card__button">
            Create Post
          </NuxtLink>
        </div>
      </div>

      <div class="card__body">
        <form @submit.prevent="create" class="bg-white rounded-lg">
          <h2 class="text-2xl font-bold mb-4">Create New Post</h2>

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

            <MarkdownEditor
              v-model="form.content"
              placeholder="Enter content"
            />

            <BaseButton :loading="postStore.loading">Create Post</BaseButton>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
