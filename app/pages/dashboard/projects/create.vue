<script setup>
const supabase = useSupabaseClient();
const router = useRouter();

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const loading = ref(false);
const message = ref("");
const categories = ref([]);

const form = reactive({
  title: "",
  slug: "",
  summary: "",
  description: "",
  cover_url: "",
  live_url: "",
  github_url: "",
  tech_stack_input: "",
  tech_stack: [],
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
  if (!form.title || !form.summary || !form.description) {
    message.value = "Title, Summary, and Description are required!";
    return;
  }

  // Convert tech_stack_input to array
  form.tech_stack = form.tech_stack_input
    ? form.tech_stack_input
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  message.value = "";
  loading.value = true;

  const { data, error } = await supabase.from("projects").insert([
    {
      title: form.title,
      slug: form.slug,
      summary: form.summary,
      description: form.description,
      cover_url: form.cover_url || null,
      live_url: form.live_url || null,
      github_url: form.github_url || null,
      tech_stack: form.tech_stack,
      category_id: form.category_id,
      is_featured: form.is_featured,
      status: form.status,
      meta_title: form.meta_title,
      meta_description: form.meta_description,
      meta_keywords: form.meta_keywords,
      canonical_url: form.canonical_url,
    },
  ]);

  loading.value = false;

  if (error) {
    message.value = error.message;
  } else {
    message.value = "Project created successfully!";
    router.push("/dashboard/projects");
  }
};
</script>

<template>
  <main>
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
      @submit.prevent="createPost"
      class="max-w-5xl mx-auto p-6 bg-white rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-4">Create New Project</h2>

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
          <BaseInput label="Github URL" v-model="form.github_url" />
        </div>

        <BaseInput
          label="Tech Stack (comma separated)"
          v-model="form.tech_stack_input"
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
