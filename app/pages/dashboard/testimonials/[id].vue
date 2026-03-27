<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const route = useRoute();
const testimonialStore = useTestimonialStore();
const { loading, error } = storeToRefs(testimonialStore);

const form = reactive({
  name: "",
  designation: "",
  company: "",
  rating: 5,
  message: "",
  avatar_url: "",
});

const loadTestimonial = async () => {
  const response = await testimonialStore.show(route.params.id);

  form.name = response.name;
  form.designation = response.designation;
  form.company = response.company;
  form.rating = response.rating;
  form.message = response.message;
  form.avatar_url = response.avatar_url;
};

onMounted(() => {
  loadTestimonial();
});

const update = async () => {
  await testimonialStore.update(route.params.id, form);

  setTimeout(() => {
    navigateTo("/dashboard/testimonials");
  }, 3000);
};
</script>

<template>
  <main>
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
          Add a client testimonial with rating, profile details, and feedback
          message to showcase on your website.
        </p>
      </div>

      <NuxtLink
        to="/dashboard/testimonials"
        class="inline-flex items-center justify-center rounded bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
      >
        Back to Testimonials
      </NuxtLink>
    </nav>

    <div class="mt-6">
      <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <!-- Form Section -->
        <section class="xl:col-span-2">
          <div class="rounded-3xl border border-slate-200 bg-white p-6">
            <div class="mb-8">
              <h2 class="text-xl font-semibold text-slate-900">
                Testimonial Information
              </h2>
              <p class="mt-2 text-sm text-slate-500">
                Fill in the information below to create a new testimonial entry.
              </p>
            </div>

            <form @submit.prevent="update" class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-slate-700">
                    Client Name
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Enter client name"
                    class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-slate-700">
                    Designation
                  </label>
                  <input
                    v-model="form.designation"
                    type="text"
                    placeholder="e.g. CEO, Founder, Manager"
                    class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-slate-700">
                    Company
                  </label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Enter company name"
                    class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-slate-700">
                    Rating
                  </label>
                  <select
                    v-model="form.rating"
                    class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  >
                    <option :value="1">1 Star</option>
                    <option :value="2">2 Stars</option>
                    <option :value="3">3 Stars</option>
                    <option :value="4">4 Stars</option>
                    <option :value="5">5 Stars</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">
                  Avatar URL
                </label>
                <input
                  v-model="form.avatar_url"
                  type="url"
                  placeholder="https://example.com/avatar.jpg"
                  class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">
                  Feedback Message
                </label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Write the client's testimonial message here..."
                  class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div
                v-if="error"
                class="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {{ error }}
              </div>

              <div class="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  :disabled="loading"
                  class="inline-flex items-center justify-center rounded bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span v-if="loading">Saving...</span>
                  <span v-else>Update</span>
                </button>

                <button
                  type="reset"
                  class="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </section>

        <!-- Preview Section -->
        <aside class="xl:col-span-1">
          <div
            class="sticky top-6 rounded-3xl border border-slate-200 bg-white p-6"
          >
            <div class="mb-6">
              <h2 class="text-xl font-semibold text-slate-900">Live Preview</h2>
              <p class="mt-2 text-sm text-slate-500">
                This is how the testimonial card may appear.
              </p>
            </div>

            <article
              class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div
                class="absolute right-4 top-2 text-6xl font-bold leading-none text-emerald-100"
              >
                “
              </div>

              <div class="relative z-10 flex items-center gap-1">
                <span
                  v-for="star in 5"
                  :key="star"
                  class="text-lg"
                  :class="
                    star <= Number(form.rating)
                      ? 'text-emerald-500'
                      : 'text-slate-300'
                  "
                >
                  ★
                </span>
              </div>

              <p class="relative z-10 mt-4 text-sm leading-7 text-slate-600">
                {{
                  form.message ||
                  "Your testimonial preview will appear here once you start writing the client feedback."
                }}
              </p>

              <div
                class="relative z-10 mt-6 flex items-center gap-4 border-t border-slate-100 pt-5"
              >
                <div
                  class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100"
                >
                  <img
                    v-if="form.avatar_url"
                    :src="form.avatar_url"
                    alt="Preview Avatar"
                    class="h-full w-full object-cover"
                  />
                  <span v-else class="text-sm font-semibold text-slate-400">
                    {{ form.name ? form.name.charAt(0).toUpperCase() : "A" }}
                  </span>
                </div>

                <div class="min-w-0">
                  <h3 class="truncate text-base font-semibold text-slate-900">
                    {{ form.name || "Anonymous Client" }}
                    <span v-if="form.company"> - {{ form.company }}</span>
                  </h3>
                  <p class="mt-1 text-sm text-slate-500">
                    {{ form.designation || "Client" }}
                  </p>
                </div>
              </div>
            </article>

            <div
              class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <h3 class="text-sm font-semibold text-slate-800">Quick Tips</h3>
              <ul class="mt-3 space-y-2 text-sm leading-6 text-slate-500">
                <li>Use a real client name for authenticity.</li>
                <li>Keep the feedback short, clear, and impactful.</li>
                <li>Add a proper avatar URL for better presentation.</li>
                <li>Ratings between 4 and 5 work best for trust building.</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
