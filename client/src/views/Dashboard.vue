<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import { key } from '../store'

const store = useStore(key)
const app = computed(() => store.state.app);
</script>

<template>
  <h1>Dashboard</h1>
  <p>{{ app }}</p>
</template>
