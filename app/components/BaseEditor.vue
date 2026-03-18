<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "Write something..." },
  readOnly: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);
const editor = ref(null);
let quillInstance = null;

onMounted(async () => {
  // Import Quill only in the client
  const Quill = (await import("quill")).default;
  await import("quill/dist/quill.snow.css");

  quillInstance = new Quill(editor.value, {
    theme: "snow",
    placeholder: props.placeholder,
    readOnly: props.readOnly,
    modules: {
      formula: true,
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],
        [{ script: "sub" }, { script: "super" }],
        ["clean"],
      ],
    },
  });

  // Set initial content
  quillInstance.clipboard.dangerouslyPasteHTML(props.modelValue || "");

  // Listen for changes
  quillInstance.on("text-change", () => {
    emit("update:modelValue", quillInstance.root.innerHTML);
  });
});

// Sync external updates
watch(
  () => props.modelValue,
  (val) => {
    if (quillInstance && val !== quillInstance.root.innerHTML) {
      const selection = quillInstance.getSelection();
      quillInstance.clipboard.dangerouslyPasteHTML(val || "");
      if (selection) quillInstance.setSelection(selection);
    }
  },
);

// Optional: watch readOnly dynamically
watch(
  () => props.readOnly,
  (val) => quillInstance && quillInstance.enable(!val),
);
</script>

<template>
  <div class="quill-editor">
    <div ref="editor"></div>
  </div>
</template>

<style scoped>
.quill-editor :deep(.ql-editor) {
  min-height: 300px;
}
</style>
