<script setup>
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Vue/Nuxt",
  "React",
  "Node.js",
  "Laravel",
  "MySQL",
  "Git/GitHub",
];

const services = [
  {
    title: "Website Development",
    desc: "Modern, fast, SEO-ready websites with clean UI.",
    icon: "💻",
  },
  {
    title: "App Development",
    desc: "Dashboard, admin panels, and web apps with auth.",
    icon: "📱",
  },
  {
    title: "API & Integrations",
    desc: "Payment, OAuth, third-party APIs, and microservices.",
    icon: "🔌",
  },
];

const projects = [
  {
    title: "LMS Platform (Courses + Dashboard)",
    tags: ["Nuxt", "Laravel", "Sanctum", "Tailwind"],
    desc: "Student dashboard, course player, orders, profile & secure API.",
    image: "/projects/lms.png",
    github: "https://github.com/yourname/lms",
    live: "https://yourdomain.com/lms",
  },
  {
    title: "SaaS Landing Page",
    tags: ["Tailwind", "Vue", "UI/UX"],
    desc: "Conversion-focused landing with hero, features, pricing & CTA.",
    image: "/projects/saas.png",
    github: "https://github.com/yourname/saas-landing",
    live: "https://yourdomain.com/saas",
  },
  {
    title: "Movie Titles API",
    tags: ["Node", "Express", "REST", "MongoDB"],
    desc: "Search, filter, pagination, caching, and clean API structure.",
    image: "/projects/movie.png",
    github: "https://github.com/yourname/movie-api",
    live: "https://yourdomain.com/movie-api",
  },
  {
    title: "E-commerce Mini Shop",
    tags: ["Laravel", "MySQL", "Stripe/Bkash", "Admin Panel"],
    desc: "Product listing, cart, checkout, order tracking, admin manage.",
    image: "/projects/shop.png",
    github: "https://github.com/yourname/mini-shop",
    live: "https://yourdomain.com/shop",
  },
];
</script>

<template>
  <main>
    <SeoMeta
      title="Ashik Ahmed | Full-Stack Developer (Nuxt, Vue, Laravel)"
      description="Ashik Ahmed is a Full-Stack Developer specializing in Nuxt.js, Vue.js, Laravel, and modern web application architecture. Building scalable, high-performance web solutions with clean UI and AI integration."
      keywords="Ashik Ahmed, Full Stack Developer, Nuxt Developer, Vue Developer, Laravel Developer, Web Developer Bangladesh, AI Web Developer"
    />

    <!-- Hero -->
    <section id="home" class="relative overflow-x-hidden">
      <div class="mx-auto max-w-7xl px-4 pt-14 pb-10 md:pt-20 md:pb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <!-- Left -->
          <div>
            <div
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <span
                class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.8)]"
              />
              <span class="text-sm text-white/70">
                Available for freelance & full-time
              </span>
            </div>

            <h1 class="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              The future of
              <span class="block text-white/70">development is</span>
              <span
                class="bg-gradient-to-r from-emerald-300 to-cyan-200 bg-clip-text text-transparent"
              >
                human + AI
              </span>
            </h1>

            <p class="mt-5 text-white/70 max-w-xl">
              I build modern web apps with clean UI, scalable backend, and fast
              performance. Nuxt/Vue + Laravel/Node + Tailwind.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-emerald-500 text-[#06110D] hover:opacity-95 transition shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_18px_60px_rgba(16,185,129,0.22)]"
              >
                Got a project?
              </a>
              <a
                href="#projects"
                class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                See projects →
              </a>
              <a
                href="#"
                class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold border border-emerald-500/25 text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/15 transition"
              >
                Download Resume
              </a>
            </div>

            <!-- Skills row -->
            <div class="mt-10 flex flex-wrap gap-2">
              <span
                v-for="s in skills"
                :key="s"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:text-white transition"
              >
                {{ s }}
              </span>
            </div>
          </div>

          <!-- Right -->
          <div class="relative isolate">
            <div class="relative mx-auto w-full max-w-md">
              <!-- glow (kept but safe) -->
              <div
                aria-hidden="true"
                class="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-emerald-500/15 via-white/5 to-transparent blur-2xl"
              />

              <div
                class="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 overflow-hidden"
              >
                <!-- ring glow -->
                <div
                  aria-hidden="true"
                  class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-emerald-500/25"
                />
                <div
                  aria-hidden="true"
                  class="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-emerald-500/20"
                />
                <div
                  aria-hidden="true"
                  class="pointer-events-none absolute -right-2 -top-2 h-28 w-28 rounded-full border border-emerald-500/15"
                />

                <!-- avatar placeholder -->
                <div class="flex items-center gap-4">
                  <div
                    class="h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 border border-white/10 shrink-0"
                  />
                  <div class="min-w-0">
                    <p class="text-sm text-white/70">Hello, I’m</p>
                    <p class="text-xl font-semibold truncate">Ashik Ahmed</p>
                    <p class="text-sm text-emerald-200/80">
                      Full-Stack Developer
                    </p>
                  </div>
                </div>

                <!-- stats -->
                <div class="mt-6 grid grid-cols-3 gap-3">
                  <div
                    class="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p class="text-2xl font-bold">120+</p>
                    <p class="text-xs text-white/60 mt-1">Completed</p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p class="text-2xl font-bold">95%</p>
                    <p class="text-xs text-white/60 mt-1">Satisfaction</p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p class="text-2xl font-bold">10+</p>
                    <p class="text-xs text-white/60 mt-1">Years</p>
                  </div>
                </div>

                <!-- CTA -->
                <div class="mt-6">
                  <a
                    href="#contact"
                    class="inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    Join the community
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- /Right -->
        </div>
      </div>
    </section>

    <!-- Services + About -->
    <section id="about" class="relative">
      <div class="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <!-- Services (left) -->
          <div class="lg:col-span-5 space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold">What I do</h2>
            <p class="text-white/70">
              From landing pages to full web applications—clean architecture and
              production-quality UI.
            </p>

            <div class="space-y-3">
              <div
                v-for="s in services"
                :key="s.title"
                class="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition"
              >
                <div class="flex gap-4">
                  <div
                    class="h-11 w-11 rounded-2xl border border-white/10 bg-black/20 grid place-items-center group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25)] transition"
                  >
                    <span class="text-lg">{{ s.icon }}</span>
                  </div>
                  <div>
                    <p class="font-semibold">{{ s.title }}</p>
                    <p class="mt-1 text-sm text-white/70">{{ s.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- About card (right) -->
          <div class="lg:col-span-7">
            <div
              class="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 relative overflow-hidden"
            >
              <div
                class="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-emerald-500/12 blur-[80px]"
              />
              <div class="relative">
                <h3 class="text-2xl md:text-3xl font-bold">About me</h3>
                <p class="mt-4 text-white/70 leading-relaxed">
                  I build modern web experiences—from design systems to scalable
                  APIs. Strong focus on performance, accessibility, and
                  maintainable code.
                </p>

                <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    class="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p class="text-3xl font-bold text-emerald-200">120+</p>
                    <p class="mt-1 text-sm text-white/60">Projects delivered</p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p class="text-3xl font-bold text-emerald-200">95%</p>
                    <p class="mt-1 text-sm text-white/60">
                      Client satisfaction
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p class="text-3xl font-bold text-emerald-200">10+</p>
                    <p class="mt-1 text-sm text-white/60">Years experience</p>
                  </div>
                </div>

                <div class="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-emerald-500 text-[#06110D] hover:opacity-95 transition"
                  >
                    See my work
                  </a>
                  <a
                    href="#contact"
                    class="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    Let’s talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="relative">
      <div class="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <div class="flex items-end justify-between gap-6">
          <div>
            <p class="text-emerald-200/80 text-sm">Selected work</p>
            <h2 class="text-3xl md:text-4xl font-bold mt-1">Projects</h2>
          </div>
          <a
            href="#contact"
            class="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            Need similar? →
          </a>
        </div>

        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="p in projects"
            :key="p.title"
            class="group rounded-[2rem] border border-white/10 bg-white/5 hover:bg-white/7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_18px_60px_rgba(0,0,0,0.35)]"
          >
            <!-- Thumbnail -->
            <div
              class="relative aspect-[16/10] overflow-hidden rounded-t-[2rem]"
            >
              <img
                :src="p.image"
                :alt="p.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              />
            </div>

            <!-- Content -->
            <div class="p-7 flex flex-col">
              <h3 class="text-xl font-semibold">
                {{ p.title }}
              </h3>

              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="t in p.tags"
                  :key="t"
                  class="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
                >
                  {{ t }}
                </span>
              </div>

              <p class="mt-4 text-white/70">
                {{ p.desc }}
              </p>

              <!-- FIX: remove h-full, use mt-auto -->
              <div class="mt-6">
                <a
                  :href="p.live"
                  target="_blank"
                  class="block w-full text-center rounded-xl px-5 py-3 text-sm font-semibold bg-emerald-500 text-black hover:opacity-90 transition"
                >
                  View Live →
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="relative">
      <div class="mx-auto max-w-7xl px-4 pb-20">
        <div
          class="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-12 overflow-hidden relative"
        >
          <div
            class="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-emerald-500/12 blur-[90px]"
          />
          <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div class="lg:col-span-5">
              <p class="text-emerald-200/80 text-sm">Have a project?</p>
              <h2 class="text-3xl md:text-4xl font-bold mt-2">Let’s talk!</h2>
              <p class="mt-4 text-white/70">
                Tell me your idea—scope, timeline, budget—and I’ll reply with a
                plan.
              </p>

              <div class="mt-6 space-y-3 text-sm text-white/70">
                <p>📩 email@example.com</p>
                <p>📍 Dhaka, Bangladesh</p>
                <p>⏱︎ Response within 24–48 hours</p>
              </div>
            </div>

            <form class="lg:col-span-7 space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-sm text-white/70">Name</label>
                  <input
                    type="text"
                    class="mt-2 w-full rounded-2xl bg-black/25 border border-white/10 px-4 py-3 outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/15"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label class="text-sm text-white/70">Email</label>
                  <input
                    type="email"
                    class="mt-2 w-full rounded-2xl bg-black/25 border border-white/10 px-4 py-3 outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/15"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="text-sm text-white/70">Message</label>
                <textarea
                  rows="5"
                  class="mt-2 w-full rounded-2xl bg-black/25 border border-white/10 px-4 py-3 outline-none focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/15"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="button"
                class="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold bg-emerald-500 text-[#06110D] hover:opacity-95 transition shadow-[0_0_0_1px_rgba(16,185,129,0.3),0_18px_60px_rgba(16,185,129,0.22)]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
