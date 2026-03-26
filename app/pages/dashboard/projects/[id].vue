<script setup>
const supabase = useSupabaseClient();
const router = useRouter();
const route = useRoute();

definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const loading = ref(false);
const message = ref("");
const categories = ref([]);
const project = ref(null);

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
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  },
);

// tech stack input -> array
watch(
  () => form.tech_stack_input,
  (val) => {
    form.tech_stack = val
      ? val
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : [];
  },
);

// Load Categories
const loadCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name")
    .order("name", { ascending: true });

  if (error) {
    console.error("Category load error:", error.message);
  } else {
    categories.value = data || [];
  }
};

// Load Project
const loadProject = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", route.params.id)
    .single();

  project.value = data;

  if (error) {
    console.error("Project load error:", error.message);
    message.value = error.message;
    return;
  }

  if (!data) return;

  form.title = data.title || "";
  form.slug = data.slug || "";
  form.summary = data.summary || "";
  form.description = data.description || "";
  form.meta_title = data.meta_title || "";
  form.meta_description = data.meta_description || "";
  form.meta_keywords = data.meta_keywords || "";
  form.canonical_url = data.canonical_url || "";
  form.cover_url = data.cover_url || "";
  form.live_url = data.live_url || "";
  form.github_url = data.github_url || "";
  form.tech_stack = data.tech_stack || [];
  form.tech_stack_input = Array.isArray(data.tech_stack)
    ? data.tech_stack.join(", ")
    : "";
  form.category_id = data.category_id || null;
  form.is_featured = data.is_featured ?? false;
  form.status = data.status || "draft";
};

onMounted(() => {
  loadCategories();
  loadProject();
});

// Update Project
const updateProject = async () => {
  loading.value = true;
  message.value = "";

  const { error } = await supabase
    .from("projects")
    .update({
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
      canonical_url: form.canonical_url || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", route.params.id);

  loading.value = false;

  if (error) {
    message.value = error.message;
  } else {
    message.value = "Project updated successfully!";
    router.push("/dashboard/projects");
  }
};
</script>

<template>
  <main>
    <nav class="flex items-center justify-between py-4">
      <ul class="flex items-center gap-2">
        <li><NuxtLink to="/dashboard/projects">Dashboard</NuxtLink></li>
        /
        <li><NuxtLink to="/dashboard/projects">Edit Project</NuxtLink></li>
      </ul>

      <NuxtLink
        to="/dashboard/projects"
        class="bg-emerald-400 px-4 py-2 rounded inline-block text-white hover:underline"
      >
        All Projects
      </NuxtLink>
    </nav>

    <form
      @submit.prevent="updateProject"
      class="max-w-5xl mx-auto p-6 bg-white rounded-lg"
    >
      <h2 class="text-2xl font-bold mb-4">Update Project</h2>

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

        <BaseButton :loading="loading">Update Project</BaseButton>
      </div>
    </form>
  </main>
</template>
