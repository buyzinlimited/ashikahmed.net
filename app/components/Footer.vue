<script setup></script>

<template>
  <footer class="relative">
    <div
      class="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
    />

    <div class="mx-auto max-w-7xl px-4 py-14">
      <div
        class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10"
      >
        <!-- glow -->
        <div
          class="pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-emerald-500/12 blur-[90px]"
        />
        <div
          class="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]"
        />

        <!-- MAIN GRID -->
        <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-10">
          <!-- LEFT: Brand -->
          <div class="lg:col-span-5 text-center lg:text-left">
            <div
              class="flex items-center justify-center lg:justify-start gap-3"
            >
              <div
                class="h-11 w-11 rounded-2xl border border-white/10 bg-black/25 grid place-items-center"
              >
                ⚡
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Ashik Ahmed</h3>
                <p class="text-sm text-white/60">
                  Full-Stack Developer • Nuxt/Vue • Laravel
                </p>
              </div>
            </div>

            <p class="mt-5 text-sm text-white/60 max-w-md mx-auto lg:mx-0">
              I build modern, fast, and scalable web applications.
            </p>

            <!-- CTA -->
            <div
              class="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                class="inline-flex items-center justify-center text-center rounded-xl px-6 py-3 text-sm font-semibold bg-emerald-500 text-black"
              >
                Let’s Work Together →
              </a>

              <a
                href="#projects"
                class="inline-flex items-center justify-center text-center rounded-xl px-6 py-3 text-sm font-semibold bg-white/5 border border-white/10"
              >
                View Projects
              </a>
            </div>
          </div>

          <!-- RIGHT SIDE -->
          <div class="lg:col-span-7">
            <!-- MOBILE: 2 COLUMN -->
            <div class="grid grid-cols-2 gap-8">
              <!-- Quick Links -->
              <div>
                <p class="text-sm font-semibold text-white/80 mb-4">
                  Quick Links
                </p>
                <div class="space-y-3 text-sm text-white/60">
                  <a href="#home" class="block hover:text-emerald-300">Home</a>
                  <a href="#about" class="block hover:text-emerald-300"
                    >About</a
                  >
                  <a href="#projects" class="block hover:text-emerald-300"
                    >Projects</a
                  >
                  <a href="#contact" class="block hover:text-emerald-300"
                    >Contact</a
                  >
                </div>
              </div>

              <!-- Contact -->
              <div>
                <p class="text-sm font-semibold text-white/80 mb-4">Contact</p>
                <div class="space-y-3 text-sm text-white/60">
                  <a
                    href="mailto:ashik@example.com"
                    class="block hover:text-emerald-300"
                  >
                    ✉️ ashik@example.com
                  </a>
                  <span class="block">📍 Dhaka, Bangladesh</span>
                  <a href="#" class="block hover:text-emerald-300">
                    🔗 LinkedIn
                  </a>
                  <a href="#" class="block hover:text-emerald-300">
                    🌐 Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- bottom -->
      <div class="text-xs text-white/40 py-6 text-center">
        © {{ new Date().getFullYear() }} Ashik Ahmed. All rights reserved.
      </div>
    </div>
  </footer>
</template>
