<script setup>
const contactInfo = [
  {
    title: "Email",
    value: "info@ashikahmed.net",
    desc: "For project discussion, quotation, and business inquiries.",
  },
  {
    title: "Location",
    value: "Bangladesh",
    desc: "Available for remote work and international projects.",
  },
  {
    title: "Availability",
    value: "Freelance & Contract",
    desc: "Open for websites, dashboards, and custom web applications.",
  },
];

const services = [
  "Business Website",
  "Portfolio Website",
  "Admin Dashboard",
  "Custom Web Application",
  "eCommerce Website",
  "API Integration",
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Contact | Ashik Ahmed - Full Stack Developer"
      description="Contact Ashik Ahmed for business websites, dashboards, custom web applications, and modern full-stack development projects."
      keywords="Contact Ashik Ahmed, Full Stack Developer Contact, Web Developer Bangladesh, Hire Vue Developer, Hire Laravel Developer"
    />

    <!-- Hero -->
    <section class="relative py-20 md:py-24">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Contact Me
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Let’s discuss your next website or web application project.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              Need a business website, custom dashboard, portfolio site, or a
              full-stack application? Share your project idea and I’ll help you
              plan the right solution.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@ashikahmed.dev"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                Send Email
              </a>

              <NuxtLink
                to="/projects"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View My Work
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div
              class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div
                class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
              ></div>

              <div class="relative">
                <span
                  class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  Quick Contact
                </span>

                <div class="mt-6 space-y-4">
                  <div
                    v-for="item in contactInfo"
                    :key="item.title"
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-sm font-semibold text-slate-900">
                      {{ item.title }}
                    </p>
                    <p class="mt-2 text-base font-medium text-emerald-600">
                      {{ item.value }}
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      {{ item.desc }}
                    </p>
                  </div>
                </div>

                <div
                  class="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                >
                  <p class="text-sm leading-6 text-slate-700">
                    I usually respond to serious project inquiries with a clear
                    next step, scope discussion, or quotation direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form + Info -->
    <section class="bg-white/70 md:py-20">
      <div class="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div class="grid gap-8 lg:grid-cols-12">
          <!-- Form -->
          <div class="lg:col-span-7">
            <div
              class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div class="max-w-2xl">
                <span class="text-sm font-semibold text-emerald-600">
                  Project Inquiry
                </span>
                <h2
                  class="mt-3 text-3xl font-bold tracking-tight text-slate-900"
                >
                  Send your message
                </h2>
                <p class="mt-4 leading-7 text-slate-600">
                  Tell me about your project, required features, and business
                  goals. The more details you share, the better I can guide you.
                </p>
              </div>

              <form class="mt-8 space-y-5">
                <div class="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      class="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      class="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div class="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      class="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Budget Range
                    </label>
                    <select
                      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                    >
                      <option>Select budget range</option>
                      <option>৳15,000 - ৳30,000</option>
                      <option>৳30,000 - ৳60,000</option>
                      <option>৳60,000 - ৳100,000</option>
                      <option>৳100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      class="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Project Type
                    </label>
                    <select
                      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                    >
                      <option>Select project type</option>
                      <option v-for="service in services" :key="service">
                        {{ service }}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project subject"
                    class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-slate-700">
                    Project Details
                  </label>
                  <textarea
                    rows="7"
                    placeholder="Tell me about your project, features, goals, timeline, or any important details..."
                    class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          <!-- Side Info -->
          <div class="lg:col-span-5">
            <div class="space-y-6">
              <div
                class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <span class="text-sm font-semibold text-emerald-600">
                  Services
                </span>
                <h2
                  class="mt-3 text-2xl font-bold tracking-tight text-slate-900"
                >
                  What you can contact me for
                </h2>

                <div class="mt-6 flex flex-wrap gap-3">
                  <span
                    v-for="service in services"
                    :key="service"
                    class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {{ service }}
                  </span>
                </div>
              </div>

              <div
                class="rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
              >
                <span class="text-sm font-semibold text-emerald-600">
                  Response
                </span>
                <h2
                  class="mt-3 text-2xl font-bold tracking-tight text-slate-900"
                >
                  What happens next?
                </h2>

                <div class="mt-6 space-y-4">
                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p class="text-sm font-semibold text-slate-900">
                      1. Project Review
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      I review your message, goals, features, and technical
                      needs.
                    </p>
                  </div>

                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p class="text-sm font-semibold text-slate-900">
                      2. Scope Discussion
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      We discuss pricing, timeline, required pages, features,
                      and workflow.
                    </p>
                  </div>

                  <div
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p class="text-sm font-semibold text-slate-900">
                      3. Start the Project
                    </p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">
                      Once everything is clear, I begin design and development
                      with a proper delivery plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <div
          class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-10 md:px-10 md:py-14"
        >
          <div
            class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
          ></div>

          <div
            class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <div class="max-w-2xl">
              <span class="text-sm font-semibold text-emerald-600">
                Let’s Build Something Great
              </span>
              <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Have a project idea ready to discuss?
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                I help businesses, startups, and individuals build modern,
                reliable, and user-focused digital products.
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <a
                href="mailto:hello@ashikahmed.dev"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition hover:bg-emerald-600"
              >
                Email Me
              </a>

              <NuxtLink
                to="/pricing"
                class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Pricing
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
