<script setup lang="ts">
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
import { key } from '../store'

const store = useStore(key)

defineProps<{ msg: string }>()

const count = ref(0)
const app = computed(() => store.state.app);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ app }}</p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
