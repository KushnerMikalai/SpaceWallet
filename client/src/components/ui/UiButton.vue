<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()

const computedInputAttributes: any = computed(() => ({
  ...attrs,
}))
</script>

<template>
  <button v-bind="computedInputAttributes">
    <slot></slot>
  </button>
</template>
