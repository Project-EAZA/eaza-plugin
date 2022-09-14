<script setup lang="ts">
const props = defineProps({
  text: String,
  color: String,
})
</script>

<template>
  <span class="eaza-tag-span" :style="{ background: props.color }">{{ props.text }}</span>
</template>
