<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | string
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <span
    class="pf-c-spinner"
    role="progressbar"
    aria-label="Loading..."
  >
    <span class="pf-c-spinner__clipper"></span>
    <span class="pf-c-spinner__lead-ball"></span>
    <span class="pf-c-spinner__tail-ball"></span>
  </span>
</template>

<style lang="scss"></style>
