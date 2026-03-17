<script setup>
const year = new Date().getFullYear();

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];
</script>

<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <div
        class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h3 class="text-lg font-semibold text-white">Ashik Ahmed</h3>
          <p class="text-sm text-slate-400">Full Stack Developer</p>
        </div>
        <nav class="flex flex-wrap items-center gap-5 text-sm">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="transition hover:text-emerald-400"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Social -->
        <div class="flex items-center gap-3">
          <!-- Facebook -->
          <a
            href="https://facebook.com/ashikahmed.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-emerald-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition group-hover:scale-110"
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
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-emerald-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition group-hover:scale-110"
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
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-emerald-500 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.5 6.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C16.7 2.5 12 2.5 12 2.5h0s-4.7 0-8.2.3c-.5.1-1.5.1-2.4 1C.7 4.5.5 6.2.5 6.2S0 8 .5 9.8v4.4C0 16 .5 17.8.5 17.8s.2 1.7.9 2.4c.9.9 2 .9 2.5 1 1.8.2 7.6.3 7.6.3s4.7 0 8.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.5-1.8.5-3.6V9.8c0-1.8-.5-3.6-.5-3.6zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="mt-8 border-t border-slate-800 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-slate-500"
      >
        <p>© {{ year }} Ashik Ahmed. All rights reserved.</p>

        <div class="flex gap-4">
          <NuxtLink to="/privacy" class="hover:text-emerald-400 transition"
            >Privacy Policy</NuxtLink
          >
          <NuxtLink to="/terms" class="hover:text-emerald-400 transition"
            >Terms & Conditions</NuxtLink
          >
          <NuxtLink to="/cookies" class="hover:text-emerald-400 transition"
            >Cookie Policy</NuxtLink
          >
          <NuxtLink to="/disclaimer" class="hover:text-emerald-400 transition"
            >Disclaimer</NuxtLink
          >
        </div>
      </div>
    </div>
  </footer>
</template>
