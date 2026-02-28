<script setup>
const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/5 bg-[#060A0F]/70 backdrop-blur-xl"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <div class="flex items-center gap-3">
        <div
          class="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center shadow-[0_0_0_1px_rgba(16,185,129,0.2)]"
        >
          <span class="text-lg">⚡</span>
        </div>
        <div class="leading-tight">
          <p class="text-sm text-white/70">Portfolio</p>
          <p class="font-semibold tracking-wide">Ashik Ahmed</p>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a
          v-for="n in nav"
          :key="n.href"
          :href="n.href"
          class="hover:text-white transition"
        >
          {{ n.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="#contact"
          class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-emerald-500/15 text-emerald-200 border border-emerald-500/25 hover:bg-emerald-500/20 transition"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          class="hidden sm:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
        >
          View Work
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
