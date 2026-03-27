<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const testimonialStore = useTestimonialStore();
const { testimonials } = storeToRefs(testimonialStore);

const loading = ref(false);

const loadReviews = async () => {
  try {
    loading.value = true;
    await testimonialStore.all();
  } finally {
    loading.value = false;
  }
};

const deleteItem = async (id) => {
  if (confirm("Are you sure you went to deleted?")) {
    await testimonialStore.delete(id);
  }

  await loadReviews();
};

onMounted(() => {
  loadReviews();
});
</script>

<template>
  <main class="space-y-8">
    <Head>
      <Title>Manage Testimonials</Title>
    </Head>

    <nav
      class="flex flex-col gap-4 rounded-3xl sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-slate-900">
          Testimonials
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          Manage client feedback, featured reviews, and publish testimonials.
        </p>
      </div>

      <NuxtLink
        to="/dashboard/testimonials/create"
        class="inline-flex items-center justify-center rounded bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
      >
        Create Testimonial
      </NuxtLink>
    </nav>

    <div
      v-if="loading"
      class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="n in 6"
        :key="n"
        class="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div class="animate-pulse space-y-4">
          <div class="flex items-center gap-4">
            <div class="h-14 w-14 rounded-full bg-slate-200"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 w-32 rounded bg-slate-200"></div>
              <div class="h-3 w-24 rounded bg-slate-200"></div>
            </div>
          </div>
          <div class="h-4 w-20 rounded bg-slate-200"></div>
          <div class="space-y-2">
            <div class="h-3 w-full rounded bg-slate-200"></div>
            <div class="h-3 w-full rounded bg-slate-200"></div>
            <div class="h-3 w-4/5 rounded bg-slate-200"></div>
          </div>
          <div class="h-9 w-full rounded-xl bg-slate-200"></div>
        </div>
      </div>
    </div>

    <div
      v-else-if="testimonials.length"
      class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      <article
        v-for="item in testimonials"
        :key="item.id"
        class="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-4">
            <img
              :src="item.avatar_url || 'https://placehold.co/100x100'"
              :alt="item.name"
              class="h-14 w-14 rounded-full border border-slate-200 object-cover"
            />

            <div>
              <h3 class="text-lg font-semibold text-slate-900">
                {{ item.name }}
              </h3>
              <p class="text-sm text-slate-500">
                {{ item.designation || "Client" }}
                <span v-if="item.company">· {{ item.company }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="mt-5 flex items-center gap-1 text-amber-500">
          <span v-for="star in 5" :key="star" class="text-base">
            {{ star <= (item.rating || 5) ? "★" : "☆" }}
          </span>
        </div>

        <p class="mt-4 line-clamp-4 text-sm leading-6 text-slate-600">
          {{ item.message }}
        </p>

        <div
          class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4"
        >
          <span
            class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
            :class="
              item.status === 'approved'
                ? 'bg-emerald-100 text-emerald-700'
                : item.status === 'pending'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-rose-100 text-rose-700'
            "
          >
            {{ item.status }}
          </span>

          <div class="flex items-center gap-2">
            <NuxtLink
              :to="`/dashboard/testimonials/${item.id}`"
              class="inline-flex items-center justify-center rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Edit
            </NuxtLink>
            <button
              @click="deleteItem(item.id)"
              class="inline-flex items-center justify-center rounded border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </div>

    <div
      v-else
      class="flex min-h-28 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center shadow-sm"
    >
      <div class="max-w-md px-6">
        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-2xl"
        >
          💬
        </div>

        <h3 class="mt-5 text-xl font-semibold text-slate-900">
          No testimonials found
        </h3>
        <p class="mt-2 text-sm leading-6 text-slate-500">
          Start adding your first testimonial and showcase client feedback from
          this dashboard.
        </p>

        <NuxtLink
          to="/dashboard/testimonials/create"
          class="mt-6 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          Create Testimonial
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
