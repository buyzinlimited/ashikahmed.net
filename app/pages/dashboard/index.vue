<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <main>
    <!-- Posts -->
    <section class="bg-white rounded-2xl shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Posts</h2>
      <ul class="space-y-3">
        <li class="p-3 bg-slate-100 rounded">Post 1</li>
        <li class="p-3 bg-slate-100 rounded">Post 2</li>
        <li class="p-3 bg-slate-100 rounded">Post 3</li>
      </ul>
    </section>

    <!-- Projects -->
    <section class="bg-white rounded-2xl shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Projects</h2>
      <ul class="space-y-3">
        <li class="p-3 bg-slate-100 rounded">Project A</li>
        <li class="p-3 bg-slate-100 rounded">Project B</li>
        <li class="p-3 bg-slate-100 rounded">Project C</li>
      </ul>
    </section>

    <!-- Clients -->
    <section class="bg-white rounded-2xl shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Clients</h2>
      <ul class="space-y-3">
        <li class="p-3 bg-slate-100 rounded">Client X</li>
        <li class="p-3 bg-slate-100 rounded">Client Y</li>
        <li class="p-3 bg-slate-100 rounded">Client Z</li>
      </ul>
    </section>
  </main>
</template>

<style scoped></style>
