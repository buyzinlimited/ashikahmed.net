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
  const Quill = (await import("quill")).default;
  await import("quill/dist/quill.snow.css");

  // 👉 Import font format
  const Font = Quill.import("formats/font");

  Quill.register(Font, true);

  quillInstance = new Quill(editor.value, {
    theme: "snow",
    placeholder: props.placeholder,
    readOnly: props.readOnly,
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image", "video", "formula"],

        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
    },
  });

  quillInstance.clipboard.dangerouslyPasteHTML(props.modelValue || "");

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
