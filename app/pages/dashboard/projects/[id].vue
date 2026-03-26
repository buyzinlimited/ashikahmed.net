<script setup>
const route = useRoute();
const router = useRouter();

const categoryStore = useCategoryStore();
const projectStore = useProjectStore();
const { categories } = storeToRefs(categoryStore);

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const loading = ref(false);
const message = ref("");

const form = reactive({
  title: "",
  slug: "",
  summary: "",
  description: "",
  cover_url: "",
  live_url: "",
  video_url: "",
  tech_stack: "", // string for input field
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
    form.slug =
      val
        ?.toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") || "";
  },
);

// Load Categories
const loadCategories = async () => {
  await categoryStore.all();
};

// Load Project
const loadProject = async () => {
  const response = await projectStore.show(route.params.id);

  form.title = response?.title || "";
  form.slug = response?.slug || "";
  form.summary = response?.summary || "";
  form.description = response?.description || "";
  form.meta_title = response?.meta_title || "";
  form.meta_description = response?.meta_description || "";
  form.meta_keywords = response?.meta_keywords || "";
  form.canonical_url = response?.canonical_url || "";
  form.cover_url = response?.cover_url || "";
  form.live_url = response?.live_url || "";
  form.video_url = response?.video_url || "";
  form.tech_stack = Array.isArray(response?.tech_stack)
    ? response.tech_stack.join(", ")
    : response?.tech_stack || "";
  form.category_id = response?.category_id || null;
  form.is_featured = response?.is_featured ?? false;
  form.status = response?.status || "draft";
};

onMounted(async () => {
  await Promise.all([loadCategories(), loadProject()]);
});

const update = async () => {
  loading.value = true;
  message.value = "";

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

    await projectStore.update(route.params.id, payload);
    message.value = "Project updated successfully";
    return navigateTo("/dashboard/projects");
  } catch (error) {
    message.value = error?.data?.message || error?.message || "Update failed";
    console.error("Update failed:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main>
    <nav class="flex items-center justify-between py-4">
      <ul class="flex items-center gap-2">
        <li><NuxtLink to="/dashboard/projects">Dashboard</NuxtLink></li>
        /
        <li><NuxtLink to="/dashboard/projects">Update Project</NuxtLink></li>
      </ul>

      <NuxtLink
        to="/dashboard/projects"
        class="bg-emerald-400 px-4 py-2 rounded inline-block text-white hover:underline"
      >
        All Projects
      </NuxtLink>
    </nav>

    <form
      @submit.prevent="update"
      class="max-w-5xl mx-auto p-6 bg-white rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-4">Update Project</h2>

      <p v-if="message" class="mb-4 text-sm text-emerald-600">
        {{ message }}
      </p>

      <div class="space-y-4">
        <BaseInput label="Title" v-model="form.title" />
        <BaseInput label="Slug" v-model="form.slug" />
        <BaseTextarea label="Summary" v-model="form.summary" />

        <div>
          <label class="block font-semibold mb-1">Description</label>
          <ClientOnly>
            <BaseEditor v-model="form.description" />
          </ClientOnly>
        </div>

        <BaseInput label="Meta Title" v-model="form.meta_title" />
        <BaseTextarea
          label="Meta Description"
          v-model="form.meta_description"
        />
        <BaseTextarea label="Meta Keyword" v-model="form.meta_keywords" />
        <BaseInput label="Canonical URL" v-model="form.canonical_url" />
        <BaseInput label="Cover Image URL" v-model="form.cover_url" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseInput label="Live URL" v-model="form.live_url" />
          <BaseInput label="Video URL" v-model="form.video_url" />
        </div>

        <BaseInput
          label="Tech Stack (comma separated)"
          v-model="form.tech_stack"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BaseSelect
            label="Category"
            v-model="form.category_id"
            placeholder="Select Category"
            :options="categories"
          />

          <BaseSelect
            label="Featured"
            v-model="form.is_featured"
            placeholder="Select Featured"
            :options="[
              { id: true, name: 'Yes' },
              { id: false, name: 'No' },
            ]"
          />

          <BaseSelect
            label="Status"
            v-model="form.status"
            placeholder="Select Status"
            :options="[
              { id: 'draft', name: 'Draft' },
              { id: 'published', name: 'Published' },
            ]"
          />
        </div>

        <BaseButton :loading="loading">Update Project</BaseButton>
      </div>
    </form>
  </main>
</template>
