<script setup lang="ts">
import { computed, useAttrs } from "vue";

const attrs = useAttrs()

// const props = defineProps({
//   type: { type: String, default: 'text' }
// })

const computedInputAttributes = computed(() => ({
  ...attrs,
}))

</script>

<template>
  <!-- <label> -->
  <!-- </label> -->
  <input v-bind="computedInputAttributes" />
</template>

<style>
input {
  display: inline-block;
}
</style>
