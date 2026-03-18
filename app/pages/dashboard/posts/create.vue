<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

const supabase = useSupabaseClient();
const router = useRouter();

definePageMeta({
  layout: "dashboard",
});

const message = ref("");
const uploading = ref(false);

const form = reactive({
  title: "",
  summary: "",
  content: "",
  image_url: "",
});

// Upload image to Supabase Storage
const handleImageUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  uploading.value = true;

  // Create a unique file path
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `posts/${fileName}`;

  const { data, error } = await supabase.storage
    .from("posts") // Your storage bucket name
    .upload(filePath, file);

  if (error) {
    message.value = error.message;
    uploading.value = false;
    return;
  }

  // Get public URL
  const { publicUrl, error: urlError } = supabase.storage
    .from("posts")
    .getPublicUrl(filePath);

  if (urlError) {
    message.value = urlError.message;
  } else {
    form.image_url = publicUrl;
  }

  uploading.value = false;
};

const createPost = async () => {
  // Basic validation
  if (!form.title || !form.summary || !form.content) {
    message.value = "Title, Summary, and Content are required!";
    return;
  }

  const { data, error } = await supabase.from("posts").insert([
    {
      title: form.title,
      summary: form.summary,
      content: form.content,
      image_url: form.image_url || null,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    message.value = error.message;
  } else {
    router.push("/dashboard/posts");
  }
};
</script>

<template>
  <main>
    <nav class="flex items-center justify-between">
      <NuxtLink to="/dashboard/posts">All Posts</NuxtLink>
      <NuxtLink
        to="/dashboard/posts/create"
        class="bg-emerald-400 px-4 py-2 rounded inline-block text-white hover:underline"
        >Create New</NuxtLink
      >
    </nav>

    <div class="max-w-5xl mx-auto p-6 bg-white rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Create New Post</h2>

      <div class="space-y-4">
        <div>
          <label class="block font-semibold mb-1">Title</label>
          <input
            v-model="form.title"
            type="text"
            class="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label class="block font-semibold mb-1">Summary</label>
          <textarea
            v-model="form.summary"
            class="w-full border border-gray-300 rounded px-3 py-2"
            rows="2"
          ></textarea>
        </div>

        <div>
          <label class="block font-semibold mb-1">Content</label>
          <ClientOnly>
            <BaseEditor />
          </ClientOnly>
        </div>
        <div>
          <label class="block font-semibold mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            @change="handleImageUpload"
            class="w-full"
          />
          <p v-if="uploading" class="text-blue-500 mt-1">Uploading...</p>

          <div v-if="form.image_url" class="mt-2">
            <img
              :src="form.image_url"
              alt="Preview"
              class="h-40 rounded shadow"
            />
          </div>
        </div>

        <p v-if="message" class="text-red-500">{{ message }}</p>

        <button
          @click="createPost"
          class="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
        >
          Create Post
        </button>
      </div>
    </div>
  </main>
</template>
