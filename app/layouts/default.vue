<script setup></script>

<template>
  <div class="min-h-screen bg-[#060A0F] text-white selection:bg-emerald-500/30">
    <!-- Background Glow -->
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-0 overflow-hidden"
    >
      <div
        class="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-[120px]"
      />
      <div
        class="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <div
        class="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-[120px]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(transparent_1px,#060A0F_1px)] [background-size:18px_18px] opacity-[0.18]"
      />
    </div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
