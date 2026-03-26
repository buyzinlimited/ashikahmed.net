<script setup>
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
});

const supabase = useSupabaseClient();

const user = ref(null);

onMounted(async () => {
  const { data } = await supabase.auth.getUser();
  user.value = data.user;
});
const overviewCards = [
  { title: "Projects", value: "24", subtitle: "4 active now", icon: "📁" },
  {
    title: "Blog Posts",
    value: "18",
    subtitle: "2 drafts pending",
    icon: "📝",
  },
  { title: "Messages", value: "37", subtitle: "8 unread", icon: "📨" },
  { title: "Testimonials", value: "12", subtitle: "3 pending", icon: "⭐" },
];

const contactItems = [
  {
    name: "Rahim Uddin",
    subject: "Need a business website",
    email: "rahim@example.com",
    status: "Unread",
  },
  {
    name: "Sarah Khan",
    subject: "Dashboard redesign inquiry",
    email: "sarah@example.com",
    status: "Replied",
  },
  {
    name: "Mizanur",
    subject: "Want to hire for SaaS app",
    email: "mizan@example.com",
    status: "Unread",
  },
];

const testimonialItems = [
  {
    name: "Imran Hossain",
    company: "CEO, TechNest",
    text: "Ashik delivered an outstanding dashboard with great performance.",
    status: "Approved",
  },
  {
    name: "Nusrat Jahan",
    company: "Founder, Bloom Studio",
    text: "Very professional, fast communication, and excellent design quality.",
    status: "Pending",
  },
];

const statusClass = (status) => {
  const map = {
    Published: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    Approved: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    Replied: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    Draft: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    Review: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
    Unread: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
  };

  return map[status] || "bg-slate-100 text-slate-700 ring-1 ring-slate-200";
};
</script>

<template>
  <main>
    <section class="space-y-6">
      <!-- Header -->
      <div
        class="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-gradient-to from-white via-slate-50 to-cyan-50 p-6 lg:flex-row lg:items-center"
      >
        <div class="flex items-center gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-bold text-cyan-700"
          >
            A
          </div>

          <div class="max-w-2xl">
            <span
              class="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
            >
              Welcome Back
            </span>

            <h1 class="mt-3 text-2xl font-bold text-slate-900 md:text-4xl">
              Welcome, Administrator 👋
            </h1>

            <p class="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              Logged in as
              <span class="font-semibold text-slate-800">
                {{ user?.email }}
              </span>
            </p>

            <p class="mt-1 text-sm leading-6 text-slate-500 md:text-base">
              Manage your projects, blog posts, contact messages, and
              testimonials from one place.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="card in overviewCards"
          :key="card.title"
          class="rounded-3xl border border-slate-200 bg-white p-5"
        >
          <div class="flex items-center justify-between">
            <span class="text-2xl">{{ card.icon }}</span>
            <span class="text-sm text-slate-500">{{ card.title }}</span>
          </div>
          <h3 class="mt-4 text-3xl font-bold text-slate-900">
            {{ card.value }}
          </h3>
          <p class="mt-2 text-sm text-cyan-700">{{ card.subtitle }}</p>
        </div>
      </section>

      <!-- Content -->
      <section class="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <!-- Contacts -->
        <div class="rounded-3xl border border-slate-200 bg-white p-5">
          <div class="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-slate-900">
                Contact Messages
              </h2>
              <p class="text-sm text-slate-500">Track new client inquiries</p>
            </div>
            <button
              class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              Inbox
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="contact in contactItems"
              :key="contact.email"
              class="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center"
            >
              <div>
                <h3 class="text-base font-semibold text-slate-900">
                  {{ contact.name }}
                </h3>
                <p class="mt-1 text-sm text-slate-600">{{ contact.subject }}</p>
                <span class="mt-2 block text-xs text-slate-500">
                  {{ contact.email }}
                </span>
              </div>

              <div class="flex items-center gap-3">
                <span
                  :class="statusClass(contact.status)"
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {{ contact.status }}
                </span>
                <button
                  class="rounded-xl bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                >
                  Open
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="rounded-3xl border border-slate-200 bg-white p-5">
          <div class="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold text-slate-900">Testimonials</h2>
              <p class="text-sm text-slate-500">
                Approve and manage client reviews
              </p>
            </div>
            <button
              class="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              Add New
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="testimonial in testimonialItems"
              :key="testimonial.name"
              class="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center"
            >
              <div>
                <h3 class="text-base font-semibold text-slate-900">
                  {{ testimonial.name }}
                </h3>
                <p class="mt-1 text-sm text-cyan-700">
                  {{ testimonial.company }}
                </p>
                <span class="mt-2 block text-sm leading-6 text-slate-600">
                  “{{ testimonial.text }}”
                </span>
              </div>

              <div class="flex items-center gap-3">
                <span
                  :class="statusClass(testimonial.status)"
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {{ testimonial.status }}
                </span>
                <button
                  class="rounded-xl bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                >
                  Manage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
