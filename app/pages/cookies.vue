<script setup>
const cookieHighlights = [
  {
    title: "Essential Cookies",
    desc: "Help the website function properly and support basic user experience.",
  },
  {
    title: "Analytics Cookies",
    desc: "May be used to understand traffic, page views, and website performance.",
  },
  {
    title: "User Control",
    desc: "You can control or disable cookies through your browser settings.",
  },
];
</script>

<template>
  <main class="relative overflow-hidden">
    <SeoMeta
      title="Cookie Policy | Ashik Ahmed - Full Stack Developer"
      description="Learn how cookies are used on this website to improve user experience, analyze traffic, and personalize content."
      keywords="Cookie Policy, Website Cookies, Tracking Cookies, User Data, Privacy Cookies"
    />

    <section class="relative py-20 md:py-24">
      <div class="relative mx-auto max-w-7xl px-4 md:px-6">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              class="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700"
            >
              Cookie Policy
            </span>

            <h1
              class="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              How cookies may be used on this website.
            </h1>

            <p
              class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              This Cookie Policy explains what cookies are, how they may be used
              on this website, and how you can control them.
            </p>
          </div>

          <div class="relative">
            <div
              class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8"
            >
              <div
                class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/80 blur-3xl"
              ></div>

              <div class="relative">
                <div class="flex items-center gap-4">
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-lg font-bold text-emerald-700"
                  >
                    CK
                  </div>

                  <div>
                    <h2 class="text-xl font-semibold text-slate-900">
                      Cookie Overview
                    </h2>
                    <p class="text-sm text-emerald-600">
                      Simple and transparent
                    </p>
                  </div>
                </div>

                <div class="mt-8 space-y-4">
                  <div
                    v-for="item in cookieHighlights"
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
                Cookie Policy
              </h2>
              <p class="mt-4 text-base leading-7 text-slate-600">
                Cookies are small text files stored on your device when you
                visit a website. They can help improve site functionality, user
                experience, and analytics.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                1. What Are Cookies?
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Cookies are small data files placed on your browser or device to
                remember certain information about your visit, preferences, or
                behavior on the website.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                2. How Cookies May Be Used
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                This website may use cookies to support basic website operation,
                improve performance, understand visitor behavior, and analyze
                how users interact with pages and content.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                3. Types of Cookies
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Cookies used on this website may include essential cookies,
                performance or analytics cookies, and functionality cookies.
                These categories help improve browsing experience and site
                performance.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                4. Third-Party Cookies
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                Third-party services such as analytics providers, embedded
                content, or marketing tools may place cookies through this
                website. These third parties operate under their own privacy and
                cookie policies.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                5. Managing Cookies
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                You can usually manage, block, or delete cookies through your
                browser settings. Please note that disabling some cookies may
                affect site functionality or user experience.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">
                6. Policy Updates
              </h3>
              <p class="mt-3 leading-7 text-slate-600">
                This Cookie Policy may be updated to reflect changes in website
                functionality, tools, or legal requirements. Any updates will be
                posted on this page.
              </p>
            </section>

            <section>
              <h3 class="text-2xl font-semibold text-slate-900">7. Contact</h3>
              <p class="mt-3 leading-7 text-slate-600">
                If you have any questions about this Cookie Policy, you can
                reach out through the contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
