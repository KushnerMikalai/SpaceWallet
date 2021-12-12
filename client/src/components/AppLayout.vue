<template>
  <div class="layout">
    <main>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="'/login'">Login</router-link>
      </nav>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
