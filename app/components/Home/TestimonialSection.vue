<script setup>
const testimonialStore = useTestimonialStore();
const { testimonials, loading, error } = storeToRefs(testimonialStore);

const loadTestimonials = async () => {
  await testimonialStore.getTestimonials();
};

const getRating = (rating) => {
  const parsed = Number(rating);
  if (Number.isNaN(parsed)) return 5;
  return Math.max(0, Math.min(5, Math.round(parsed)));
};

onMounted(() => {
  loadTestimonials();
});
</script>

<template>
  <section class="relative bg-white/70 py-12 md:py-16">
    <div class="relative mx-auto max-w-7xl px-4 md:px-6">
      <div
        class="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between"
      >
        <div class="max-w-2xl">
          <span
            class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
          >
            Client Feedback
          </span>

          <h2
            class="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Trusted by Clients Who Value Quality
          </h2>

          <p class="mt-4 text-base leading-7 text-slate-600">
            I focus on clear communication, clean development, and reliable
            delivery—so every project feels smooth from planning to launch.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center"
          >
            <p class="text-2xl font-bold text-slate-900">95%</p>
            <p class="mt-1 text-xs text-slate-500">Client Satisfaction</p>
          </div>
          <div
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center"
          >
            <p class="text-2xl font-bold text-slate-900">120+</p>
            <p class="mt-1 text-xs text-slate-500">Projects Delivered</p>
          </div>
          <div
            class="col-span-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center sm:col-span-1"
          >
            <p class="text-2xl font-bold text-slate-900">5★</p>
            <p class="mt-1 text-xs text-slate-500">Service Quality</p>
          </div>
        </div>
      </div>

      <!-- Skeleton -->
      <div v-if="loading" class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article
          v-for="n in 3"
          :key="n"
          class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7"
        >
          <div class="animate-pulse">
            <div class="flex items-center gap-1">
              <div
                v-for="star in 5"
                :key="star"
                class="h-4 w-4 rounded bg-slate-200"
              />
            </div>

            <div class="mt-5 space-y-3">
              <div class="h-4 w-full rounded bg-slate-200" />
              <div class="h-4 w-11/12 rounded bg-slate-200" />
              <div class="h-4 w-8/12 rounded bg-slate-200" />
            </div>

            <div
              class="mt-8 flex items-center gap-4 border-t border-slate-100 pt-5"
            >
              <div class="h-14 w-14 rounded bg-slate-200" />
              <div class="flex-1 space-y-2">
                <div class="h-4 w-40 rounded bg-slate-200" />
                <div class="h-3 w-24 rounded bg-slate-200" />
              </div>
            </div>
          </div>
        </article>
      </div>

      <div v-else-if="error" class="mt-10 text-center text-red-500">
        Failed to load testimonials.
      </div>

      <div
        v-else-if="testimonials.length"
        class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        <article
          v-for="item in testimonials.slice(0, 6)"
          :key="item.id"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl md:p-7"
        >
          <div
            class="absolute right-5 top-4 text-6xl font-bold leading-none text-emerald-100 transition group-hover:text-emerald-200"
          >
            “
          </div>

          <!-- Dynamic rating -->
          <div class="relative z-10 flex items-center gap-1">
            <template v-for="star in 5" :key="star">
              <IconsStar
                class="size-5"
                :class="
                  star <= getRating(item.rating)
                    ? ' text-emerald-500'
                    : 'text-slate-300'
                "
              />
            </template>

            <span class="ml-2 text-sm font-medium text-slate-500">
              {{ getRating(item.rating) }}/5
            </span>
          </div>

          <p
            class="relative z-10 mt-5 text-base leading-7 text-slate-600 line-clamp-3"
          >
            {{ item.message || "No feedback message available." }}
          </p>

          <div
            class="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-5"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100"
            >
              <NuxtImg
                :src="item.avatar_url || '/default-avatar.png'"
                :alt="item.name || 'Client avatar'"
                class="h-full w-full object-cover"
              />
            </div>

            <div class="min-w-0">
              <h3 class="truncate text-base font-semibold text-slate-900">
                {{ item.name || "Anonymous" }}
                <span v-if="item.company"> - {{ item.company }}</span>
              </h3>
              <p class="mt-1 text-sm text-slate-500">
                {{ item.designation || "Client" }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div v-else class="mt-10 text-center text-slate-500">
        No testimonials found.
      </div>
    </div>
  </section>
</template>

<style scoped></style>
