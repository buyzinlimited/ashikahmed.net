<script setup>
definePageMeta({
  layout: "dashboard",
});

const supabase = useSupabaseClient();
const projects = ref([]);

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error(error);
  else projects.value = data;
};

onMounted(() => fetchProjects());
</script>

<template>
  <div></div>
</template>

<style scoped></style>
