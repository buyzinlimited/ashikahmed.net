<script setup>
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <MdPreview
    id="preview-only"
    :modelValue="props.content || ''"
    previewTheme="github"
    codeTheme="atom"
  />
</template>

<style scoped></style>
