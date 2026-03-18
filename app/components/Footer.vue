<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950 text-slate-300">
    <div class="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div class="grid gap-10 md:grid-cols-2 md:items-start">
        <!-- Brand Content -->
        <div class="max-w-2xl">
          <div class="mb-4">
            <h3 class="text-xl font-semibold tracking-tight text-white">
              Ashik Ahmed
            </h3>
            <p class="mt-1 text-sm font-medium text-emerald-400">
              Full Stack Developer
            </p>
          </div>

          <p class="max-w-xl text-sm leading-7 text-slate-400 md:text-[15px]">
            I develop premium web experiences that combine elegant design,
            robust backend systems, and optimized performance. From business
            websites to custom web applications, I build solutions that are
            scalable, secure, and tailored to real business goals.
          </p>
        </div>

        <!-- Social Links -->
        <div class="flex flex-col items-start gap-4 md:items-end">
          <p class="text-sm font-medium text-slate-500">Connect with me</p>

          <div class="flex items-center gap-3">
            <!-- Facebook -->
            <a
              href="https://facebook.com/ashikahmed.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              class="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8H17l-.4 2.9h-2.6v7A10 10 0 0022 12z"
                />
              </svg>
            </a>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/ashikahmed-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.45 20.45h-3.55v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.35V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.34 2.4 4.34 5.52v6.23zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a
              href="https://www.youtube.com/@ashik-ahmed-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              class="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h0s-4.7 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 4.5.5 6.2.5 6.2S0 8 .5 9.8v4.4C0 16 .5 17.8.5 17.8s.2 1.7.9 2.4c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.7 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.5-1.8.5-3.6V9.8c0-1.8-.5-3.6-.5-3.6zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"
                />
              </svg>
            </a>
            <!-- Email -->
            <a
              href="mailto:info@ashikahmed.net"
              aria-label="Email"
              class="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-10 flex flex-col gap-4 border-t border-slate-800/80 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
      >
        <p>
          © {{ year }} Ashik Ahmed. Designed and developed with a focus on
          quality, usability, and long-term scalability.
        </p>

        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <NuxtLink to="/privacy" class="transition hover:text-emerald-400">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms" class="transition hover:text-emerald-400">
            Terms & Conditions
          </NuxtLink>
          <NuxtLink to="/cookies" class="transition hover:text-emerald-400">
            Cookie Policy
          </NuxtLink>
          <NuxtLink to="/disclaimer" class="transition hover:text-emerald-400">
            Disclaimer
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
