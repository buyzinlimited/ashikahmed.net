<script setup>
import { defineProps } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  error: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
  },
});
</script>

<template>
  <div class="relative block mb-2">
    <label v-if="label" class="block mb-2 text-black capitalize font-medium">{{
      label
    }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="[
        'w-full px-4 py-2 rounded border border-gray-200 focus:border-primary  disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none',
        error ? 'border-dander' : 'border-border',
      ]"
    />
    <small v-if="error" class="text-red-600">{{ error[0] }}</small>
  </div>
</template>

<style scoped></style>
