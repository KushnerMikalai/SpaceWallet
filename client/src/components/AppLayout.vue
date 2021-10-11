<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
