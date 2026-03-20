<script setup></script>

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
            class="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center col-span-2 sm:col-span-1"
          >
            <p class="text-2xl font-bold text-slate-900">5★</p>
            <p class="mt-1 text-xs text-slate-500">Service Quality</p>
          </div>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article
          v-for="item in [
            {
              name: 'John Doe',
              role: 'CEO, Startup Inc.',
              review:
                'Great design sense and very professional delivery. The whole process was smooth, and the final product exceeded expectations.',
              initials: 'JD',
            },
            {
              name: 'Jane Smith',
              role: 'Product Manager',
              review:
                'Amazing communication and impressive creative direction throughout the project. Everything was delivered with care and strong attention to detail.',
              initials: 'JS',
            },
            {
              name: 'Alex Martin',
              role: 'Founder',
              review:
                'He transformed our idea into a polished, modern, and engaging product very quickly. Highly reliable and easy to work with.',
              initials: 'AM',
            },
          ]"
          :key="item.name"
          class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl md:p-7"
        >
          <div
            class="absolute right-5 top-4 text-6xl font-bold leading-none text-emerald-100 transition group-hover:text-emerald-200"
          >
            “
          </div>

          <div class="relative z-10 flex items-center gap-1">
            <span class="text-emerald-500">★</span>
            <span class="text-emerald-500">★</span>
            <span class="text-emerald-500">★</span>
            <span class="text-emerald-500">★</span>
            <span class="text-emerald-500">★</span>
          </div>

          <p class="relative z-10 mt-5 text-[15px] leading-7 text-slate-600">
            {{ item.review }}
          </p>

          <div
            class="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-5"
          >
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-sm font-bold text-emerald-700"
            >
              {{ item.initials }}
            </div>

            <div class="min-w-0">
              <h3 class="truncate text-base font-semibold text-slate-900">
                {{ item.name }}
              </h3>
              <p class="mt-1 text-sm text-slate-500">
                {{ item.role }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
