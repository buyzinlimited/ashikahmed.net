<script setup>
const props = defineProps({
  title: String,
  description: String,
  keywords: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "/logo.png",
  },
  url: {
    type: String,
    default: () => useRequestURL().href,
  },
});
</script>

<template>
  <Head>
    <Title>{{ props.title }}</Title>

    <Meta name="description" :content="props.description" />
    <Meta name="keywords" :content="props.keywords" />

    <Meta property="og:title" :content="props.title" />
    <Meta property="og:description" :content="props.description" />
    <Meta property="og:image" :content="props.image" />
    <Meta property="og:url" :content="props.url" />
    <meta property="og:type" content="website" />

    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" :content="props.title" />
    <Meta name="twitter:description" :content="props.description" />
    <Meta name="twitter:image" :content="props.image" />
  </Head>
</template>

<style scoped></style>
