<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const categoryStore = useCategoryStore();
const projectStore = useProjectStore();

const { categories } = storeToRefs(categoryStore);

const loading = ref(false);

const form = reactive({
  title: "",
  slug: "",
  summary: "",
  description: "",
  cover_url: "",
  live_url: "",
  video_url: "",
  tech_stack: "",
  category_id: null,
  is_featured: false,
  status: "draft",
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
});

// Auto slug generate
watch(
  () => form.title,
  (val) => {
    form.slug = val
      ?.toLowerCase()
      .trim()
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

const submit = async () => {
  loading.value = true;
  try {
    const payload = {
      ...form,
      tech_stack: form.tech_stack
        ? form.tech_stack
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [],
    };

    const response = await projectStore.store(payload);

    if (response) {
      await navigateTo("/dashboard/projects");
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
      <Title>Project Create</Title>
    </Head>
    <nav
      class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-slate-900">Create Project</h1>
        <p class="mt-1 text-sm text-slate-500">
          Add a new project to your portfolio with details, features, and links
        </p>
      </div>

      <NuxtLink
        to="/dashboard/projects"
        class="inline-flex items-center justify-center rounded bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Back to Projects
      </NuxtLink>
    </nav>

    <form
      @submit.prevent="submit"
      class="max-w-5xl mx-auto p-6 bg-white rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-4">Create New Project</h2>

      <div class="space-y-4">
        <BaseInput
          label="Title"
          v-model="form.title"
          placeholder="Enter title"
        />
        <BaseInput label="Slug" v-model="form.slug" placeholder="Enter sug" />
        <BaseTextarea
          label="Summary"
          v-model="form.summary"
          placeholder="Enter summary"
        />

        <div>
          <label class="block font-semibold mb-1">Description</label>

          <BaseEditor
            v-model="form.description"
            placeholder="Enter description"
          />
        </div>

        <BaseInput
          label="Meta Title"
          v-model="form.meta_title"
          placeholder="Enter meta keyword"
        />
        <BaseTextarea
          label="Meta Description"
          v-model="form.meta_description"
          placeholder="Enter meta description"
        />
        <BaseTextarea
          label="Meta Keyword"
          v-model="form.meta_keywords"
          placeholder="Enter keywords url"
        />
        <BaseInput
          label="Canonical URL"
          v-model="form.canonical_url"
          placeholder="Enter canonical url"
        />

        <BaseInput
          label="Cover Image URL"
          v-model="form.cover_url"
          placeholder="Enter cover url"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseInput
            label="Live URL"
            v-model="form.live_url"
            placeholder="Enter live url"
          />
          <BaseInput
            label="Video URL"
            v-model="form.video_url"
            placeholder="Enter video url"
          />
        </div>

        <BaseInput
          label="Tech Stack (comma separated)"
          v-model="form.tech_stack"
          placeholder="Vue, Nuxt, Tailwind, Laravel"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BaseSelect
            label="Category"
            v-model="form.category_id"
            placeholder="Select Category"
            :options="categories"
            option-value="id"
            option-label="name"
          />

          <BaseSelect
            label="Featured"
            v-model="form.is_featured"
            placeholder="Select Featured"
            :options="[
              { id: true, name: 'Yes' },
              { id: false, name: 'No' },
            ]"
            option-value="id"
            option-label="name"
          />

          <BaseSelect
            label="Status"
            v-model="form.status"
            placeholder="Select Status"
            :options="[
              { id: 'draft', name: 'Draft' },
              { id: 'published', name: 'Published' },
            ]"
            option-value="id"
            option-label="name"
          />
        </div>

        <span class="text-red-500">{{ message }}</span>

        <BaseButton :loading="loading">Create Project</BaseButton>
      </div>
    </form>
  </main>
</template>
