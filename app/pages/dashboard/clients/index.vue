<script setup>
definePageMeta({
  layout: "dashboard",
});

const supabase = useSupabaseClient();
const clients = ref([]);

const fetchClients = async () => {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error(error);
  else clients.value = data;
};

onMounted(() => fetchClients());
</script>

<template>
  <main class="py-16 bg-slate-50">
    <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center">
      What Clients Say
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="client in clients"
        :key="client.id"
        class="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
      >
        <!-- Star Rating -->
        <div class="flex mb-2 text-amber-400">
          <span v-for="i in 5" :key="i">
            <svg
              v-if="i <= client.rating"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.785.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.402c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.975z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-slate-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.386-2.462a1 1 0 00-1.176 0l-3.386 2.462c-.785.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.049 9.402c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.975z"
              />
            </svg>
          </span>
        </div>

        <!-- Testimonial -->
        <p class="text-slate-600 mb-4">{{ client.testimonial }}</p>

        <!-- Client Info -->
        <div class="flex items-center gap-3 mt-2">
          <div
            class="h-10 w-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold"
          >
            {{ client.name.charAt(0) }}
          </div>
          <div>
            <p class="font-semibold">{{ client.name }}</p>
            <p class="text-sm text-slate-400">{{ client.role }}</p>
          </div>
          <span class="ml-auto text-sm text-slate-500">{{ client.tech }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
