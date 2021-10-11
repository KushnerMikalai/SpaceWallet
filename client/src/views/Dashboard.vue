<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { key } from '../store'
import AppLayout from '../components/AppLayout.vue'
const router = useRouter()
const store = useStore(key)
const app = computed(() => store.state.app);
const isAuth = computed(() => store.getters.isAuth)

onMounted(async () => {
  if (!isAuth.value) {
    router.push({ name: 'index' })
  }
})
</script>

<template>
  <AppLayout>
    <h1>Dashboard</h1>
    <p>{{ app }}</p>
  </AppLayout>
</template>
