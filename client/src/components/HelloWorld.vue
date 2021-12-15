<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import UiButton from './ui/UiButton.vue'
import UiInput from './ui/UiInput.vue'
const counter = useCounterStore()

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <UiButton @click="counter.increment()">count is: {{ counter.count }}</UiButton>
  <UiButton @click="counter.$reset">reset</UiButton>
  <UiButton @click="counter.$patch({ count: counter.count + 123 })">patch (+ 123)</UiButton>
  <UiButton
    :type-style="'primary'"
    @click="counter.incrementAsync()"
  >
    async increment
  </UiButton>
  {{count}}
  <UiInput v-model="count"/>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
