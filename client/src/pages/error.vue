<template>
  <h1>Error</h1>
  <p>{{ text }}</p>
  <router-link to="/">
    <ui-button view="primary">Go to main page</ui-button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import UiButton from '../components/ui/UiButton.vue'

interface MapErrorCodesText {
  401: string
  404: string
}

export default defineComponent({
  name: 'error',
  components: {
    UiButton
  },
  setup() {
    const route = useRoute()
    const errorCode = Number(route.params.code) || 404

    const mapErrorCodesText: MapErrorCodesText = {
      401: '401 Unauthorized',
      404: '404 Not Found'
    }

    return {
      text: computed(() => mapErrorCodesText[errorCode])
    }
  }
})
</script>

<style scoped>
</style>
