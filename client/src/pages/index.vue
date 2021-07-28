<template>
  <h1 v-if="isAuthenticated">Hello Bro!</h1>
  <AuthForm v-else />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'index',
  components: {
    AuthForm: defineAsyncComponent(() => import('../components/AuthForm.vue'))
  },
  setup() {
    const store = useStore()

    return {
      isAuthenticated: computed(() => store.getters.isAuthenticated)
    }
  }
})
</script>

<style scoped></style>
