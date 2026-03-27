<script setup></script>

<template>
  <div
    class="min-h-screen bg-white text-slate-900 selection:bg-emerald-500/20 selection:text-slate-900"
  >
    <!-- Background Glow -->
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <!-- top glow -->
      <div
        class="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-200/50 blur-[120px]"
      />

      <!-- left glow -->
      <div
        class="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-200/40 blur-[120px]"
      />

      <!-- bottom glow -->
      <div
        class="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-emerald-100/50 blur-[120px]"
      />

      <!-- light grid -->
      <div
        class="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:18px_18px] opacity-30"
      />
    </div>

    <div class="relative z-10">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
