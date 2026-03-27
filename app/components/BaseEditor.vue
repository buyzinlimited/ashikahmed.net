<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  modelValue: { type: String, default: "" },
  required: { type: Boolean, default: false },
  placeholder: { type: String, default: "Write something..." },
  readOnly: { type: Boolean, default: false },
  error: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);
const editor = ref(null);
let quillInstance = null;

onMounted(async () => {
  const Quill = (await import("quill")).default;
  await import("quill/dist/quill.snow.css");

  // 👉 Import font format
  const Font = Quill.import("formats/font");

  Quill.register(Font, false);

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
  <div class="relative block mb-2">
    <label v-if="label" class="block mb-2 capitalize">
      {{ label }} <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="quill-editor">
      <div ref="editor" class="font-sans"></div>
    </div>
  </div>
</template>

<style scoped>
.quill-editor :deep(.ql-toolbar.ql-snow),
.quill-editor :deep(.ql-container.ql-snow) {
  border-color: #d1d5db;
}

.quill-editor :deep(.ql-toolbar.ql-snow) {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.quill-editor :deep(.ql-container.ql-snow) {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.quill-editor :deep(.ql-editor) {
  font-size: 16px;
  min-height: 300px;
  font-family: "Noto Sans", sans-serif;
}

.quill-editor :deep(.ql-font-noto-sans) {
  font-family: "Noto Sans", sans-serif;
}

.quill-editor
  :deep(
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="noto-sans"]::before
  ),
.quill-editor
  :deep(
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="noto-sans"]::before
  ) {
  content: "Noto Sans";
  font-family: "Noto Sans", sans-serif;
}

.quill-editor :deep(.ql-snow .ql-picker.ql-font .ql-picker-label::before) {
  content: "Font";
}

.quill-editor :deep(.ql-editor.ql-blank::before) {
  font-style: normal;
  color: #9ca3af;
  font-family: "Noto Sans", sans-serif;
}
</style>
