<script setup></script>

<template>
  <main>
    <SeoMeta
      title="Pricing — Affordable Web Development Packages by Ashik Ahmed"
      description="Explore flexible and affordable pricing plans for web development services. Get high-performance Nuxt.js, Vue.js, and Laravel solutions tailored to your business needs."
      keywords="Web Development Pricing, Website Cost Bangladesh, Nuxt.js Pricing, Vue.js Developer Cost, Laravel Development Price, Full Stack Developer Rates, Software Development Packages"
    />

    <section class="relative overflow-hidden py-8 md:py-12">
      <div class="mx-auto max-w-7xl px-4 md:px-6">
        <!-- Header -->
        <div class="mx-auto max-w-3xl text-center">
          <span
            class="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
          >
            Pricing Plans
          </span>

          <h1
            class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
          >
            Web Development Pricing for Every Stage of Your Business
          </h1>

          <p class="mt-5 text-lg leading-8 text-slate-600">
            Whether you need a simple business website, a professional company
            platform, or a fully custom web application — I offer flexible
            pricing tailored to your project goals.
          </p>
        </div>

        <!-- Pricing Toggle UI -->
        <div class="mt-10 flex justify-center">
          <div
            class="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1"
          >
            <button
              type="button"
              class="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              One Time Project
            </button>
            <button
              type="button"
              class="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Monthly Support
            </button>
          </div>
        </div>

        <!-- Pricing Cards -->
        <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <!-- Basic -->
          <article
            class="group relative rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-200"
          >
            <div class="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 class="text-2xl font-bold text-slate-900">Basic</h3>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                  Ideal for personal brands, portfolios, and small businesses.
                </p>
              </div>

              <div
                class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z"
                  />
                </svg>
              </div>
            </div>

            <div class="border-b border-slate-100 pb-6">
              <div class="flex items-end gap-2">
                <span
                  class="text-4xl font-extrabold tracking-tight text-slate-900"
                >
                  ৳15,000
                </span>
                <span class="pb-1 text-sm text-slate-500">starting from</span>
              </div>
              <p class="mt-2 text-sm text-slate-500">
                Fast, clean, and professional website setup.
              </p>
            </div>

            <ul class="mt-6 space-y-4 text-sm text-slate-600">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>1–5 pages website</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Responsive mobile-friendly design</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Contact form integration</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Basic SEO setup</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Fast loading layout</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>1 round revision</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Delivery in 5–7 days</span>
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Get Started
            </NuxtLink>
          </article>

          <!-- Standard -->
          <article
            class="group relative rounded-3xl bg-slate-900 p-8 text-white ring-1 ring-slate-900/10 transition duration-300 hover:-translate-y-2"
          >
            <div
              class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-lg"
            >
              Most Popular
            </div>

            <div class="mb-6 flex items-start justify-between gap-4 pt-4">
              <div>
                <h3 class="text-2xl font-bold">Standard</h3>
                <p class="mt-2 text-sm leading-6 text-slate-300">
                  Best for growing businesses that need a strong online
                  presence.
                </p>
              </div>

              <div class="rounded-2xl bg-white/10 p-3 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <div class="border-b border-white/10 pb-6">
              <div class="flex items-end gap-2">
                <span class="text-4xl font-extrabold tracking-tight"
                  >৳30,000</span
                >
                <span class="pb-1 text-sm text-slate-300">starting from</span>
              </div>
              <p class="mt-2 text-sm text-slate-300">
                Custom UI with more business-focused features.
              </p>
            </div>

            <ul class="mt-6 space-y-4 text-sm text-slate-200">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>5–10 pages website</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>Custom UI design</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>Admin panel / CMS</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>Blog or service pages</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>On-page SEO optimization</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>Speed optimization</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>2 rounds revision</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-amber-400">✔</span
                ><span>Delivery in 7–14 days</span>
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Choose Plan
            </NuxtLink>
          </article>

          <!-- Premium -->
          <article
            class="group relative rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-200"
          >
            <div class="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 class="text-2xl font-bold text-slate-900">Premium</h3>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                  For advanced platforms, dashboards, SaaS, and custom web apps.
                </p>
              </div>

              <div
                class="rounded-2xl border border-indigo-100 bg-indigo-50 p-3 text-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M12 8c-1.657 0-3 1.343-3 3v8h6v-8c0-1.657-1.343-3-3-3z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.8"
                    d="M17 11V9a5 5 0 10-10 0v2"
                  />
                </svg>
              </div>
            </div>

            <div class="border-b border-slate-100 pb-6">
              <div class="flex items-end gap-2">
                <span
                  class="text-4xl font-extrabold tracking-tight text-slate-900"
                >
                  ৳80,000+
                </span>
                <span class="pb-1 text-sm text-slate-500">custom pricing</span>
              </div>
              <p class="mt-2 text-sm text-slate-500">
                Scalable architecture for serious business needs.
              </p>
            </div>

            <ul class="mt-6 space-y-4 text-sm text-slate-600">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span>

                <span>Fully custom web application</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Dashboard & user authentication</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>API integrations</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Payment gateway integration</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Database architecture design</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Advanced security implementation</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Priority support</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 text-emerald-500">✔</span
                ><span>Timeline based on project scope</span>
              </li>
            </ul>

            <NuxtLink
              to="/contact"
              class="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Contact Me
            </NuxtLink>
          </article>
        </div>

        <!-- Extra Info -->
        <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 class="text-lg font-semibold text-slate-900">
              What’s Included
            </h4>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Every project includes clean code structure, responsive layout,
              performance optimization, and modern UI best practices.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 class="text-lg font-semibold text-slate-900">
              Need Something Custom?
            </h4>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              If your project needs custom features, API connections, or a
              special workflow, I can create a tailored plan just for you.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-6">
            <h4 class="text-lg font-semibold text-slate-900">
              Support & Maintenance
            </h4>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Ongoing support, bug fixing, updates, and future feature
              enhancements can also be added after project delivery.
            </p>
          </div>
        </div>

        <!-- CTA -->
        <div
          class="mt-16 rounded-3xl bg-slate-900 px-8 py-12 text-center text-white shadow-xl md:px-12"
        >
          <h3 class="text-3xl font-bold md:text-4xl">
            Need a custom quote for your project?
          </h3>
          <p class="mx-auto mt-4 max-w-2xl text-slate-300">
            Let’s discuss your idea, business goals, and required features to
            build the right website or web application for your brand.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get Free Consultation
            </NuxtLink>

            <NuxtLink
              to="/projects"
              class="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View My Work
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
