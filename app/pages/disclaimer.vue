<script setup>
const disclaimerHighlights = [
  {
    title: "General Information",
    desc: "Content on this website is provided for general information and business communication purposes.",
  },
  {
    title: "No Guarantees",
    desc: "While every effort is made to keep information accurate and current, no absolute guarantee is provided.",
  },
  {
    title: "External Links",
    desc: "This website may contain external links, and third-party content is subject to its own terms and policies.",
  },
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Disclaimer | Ashik Ahmed - Full Stack Developer"
      description="Read the disclaimer for Ashik Ahmed's portfolio website and web development services."
      keywords="Disclaimer, Web Development Disclaimer, Ashik Ahmed"
    />

    <section class="relative py-20 md:py-24">
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute left-0 top-10 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"
        ></div>
        <div
          class="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl"
        ></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Disclaimer
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Important notes about website content and service information.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              This Disclaimer explains the limits of responsibility regarding
              website content, service information, and third-party references.
            </p>
          </div>

          <div class="relative">
            <div
              class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div class="relative">
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-lg font-bold text-emerald-700"
                  >
                    DS
                  </div>

                  <div>
                    <h2 class="text-xl font-semibold text-slate-900">
                      Disclaimer Overview
                    </h2>
                    <p class="text-sm text-emerald-600">
                      Important legal notice
                    </p>
                  </div>
                </div>

                <div class="mt-8 space-y-4">
                  <div
                    v-for="item in disclaimerHighlights"
                    :key="item.title"
                    class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <p class="text-sm font-semibold text-slate-900">
                      {{ item.title }}
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
                    Last updated:
                    <span class="font-semibold">March 17, 2026</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-5xl px-4 md:px-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 md:p-10">
          <div class="space-y-10">
            <section>
              <h2 class="text-3xl font-bold tracking-tight text-slate-900">
                Disclaimer
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600">
                The information provided on this website is for general
                informational and business purposes only.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                1. General Information Only
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Content on this website is presented in good faith for general
                information about services, portfolio work, contact details, and
                related content. It should not be considered legal, financial,
                or professional advice outside the context of direct project
                engagement.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                2. No Guarantees
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                While efforts are made to keep content accurate, complete, and
                updated, no guarantees are made regarding the accuracy,
                reliability, or completeness of any information on the website.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                3. Project Estimates
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Any pricing, timeline, service description, or scope indication
                on the website is general in nature and may change depending on
                the actual project requirements, technical needs, and client
                goals.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                4. External Links
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                This website may contain links to external websites, platforms,
                or third-party tools. I do not control those websites and am not
                responsible for their content, availability, or privacy
                practices.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                5. Limitation of Responsibility
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                I am not responsible for any losses, damages, or disruptions
                that may result from reliance on website content, third-party
                services, temporary downtime, technical issues, or use of
                information provided on the website.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                6. Portfolio and Example Content
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Project samples, design previews, pricing examples, and other
                demonstration content may be presented for illustrative
                purposes. Actual project outcomes may vary based on scope,
                requirements, and collaboration.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                7. Changes to This Disclaimer
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                This Disclaimer may be changed or updated at any time without
                prior notice. The latest version will always be available on
                this page.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">8. Contact</h3>
              <p class="mt-3 leading-7 text-slate-600">
                If you need clarification about any part of this Disclaimer, you
                may contact me directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
