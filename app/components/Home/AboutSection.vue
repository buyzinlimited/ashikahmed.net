<script setup>
const services = [
  {
    title: "Website Development",
    desc: "High-performance, SEO-optimized websites with modern UI/UX, fast loading speed, and scalable architecture. Perfect for businesses, portfolios, and landing pages that convert visitors into customers.",
    icon: "/icons/website.png",
  },
  {
    title: "Web App Development",
    desc: "Custom web applications including dashboards, admin panels, and SaaS platforms with secure authentication, role-based access, and clean, maintainable code architecture.",
    icon: "/icons/app.png",
  },
  {
    title: "API & System Integrations",
    desc: "Robust API development and third-party integrations including payment gateways, OAuth authentication, and microservices to ensure seamless system communication and scalability.",
    icon: "/icons/api.png",
  },
];
</script>

<template>
  <section class="relative py-6">
    <div class="relative mx-auto max-w-7xl px-4 py-14 md:py-16">
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div class="space-y-4">
          <h2 class="text-2xl font-bold text-slate-900 md:text-3xl">
            What I do
          </h2>

          <p class="max-w-xl text-slate-600">
            From landing pages to full web applications—clean architecture and
            production-quality UI.
          </p>

          <div class="space-y-4">
            <div
              v-for="s in services"
              :key="s.title"
              class="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/60"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50"
                >
                  <img
                    :src="s.icon"
                    :alt="s.title"
                    class="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div class="min-w-0">
                  <h3
                    class="text-base font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-600"
                  >
                    {{ s.title }}
                  </h3>
                  <p class="mt-1.5 text-sm leading-6 text-slate-600">
                    {{ s.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="block">
          <div class="relative overflow-hidden rounded-xl bg-white p-8 md:p-10">
            <div
              class="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-emerald-100/70 blur-xs"
            ></div>

            <div class="relative">
              <h3
                class="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
              >
                About Me
              </h3>

              <p
                class="mt-4 max-w-2xl leading-relaxed text-slate-600 md:text-[15px]"
              >
                I design and develop premium web experiences that combine modern
                UI/UX, scalable backend architecture, and high-performance
                engineering. My goal is to build digital products that are not
                only visually refined but also fast, secure, and built for
                long-term growth.
              </p>

              <p
                class="mt-3 max-w-2xl leading-relaxed text-slate-600 md:text-[15px]"
              >
                Whether it's a business website, SaaS platform, or custom web
                application, I deliver clean, maintainable solutions using Nuxt,
                Vue, Laravel, Node.js, and Tailwind CSS — tailored to real
                business needs.
              </p>

              <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-3xl font-bold text-emerald-600">120+</p>
                  <p class="mt-1 text-sm text-slate-500">Projects delivered</p>
                </div>

                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-3xl font-bold text-emerald-600">95%</p>
                  <p class="mt-1 text-sm text-slate-500">Client satisfaction</p>
                </div>

                <div
                  class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p class="text-3xl font-bold text-emerald-600">8+</p>
                  <p class="mt-1 text-sm text-slate-500">Years experience</p>
                </div>
              </div>

              <div class="mt-8 flex flex-wrap gap-3">
                <NuxtLink
                  to="/projects"
                  class="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  See my work
                </NuxtLink>

                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Let’s talk
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
