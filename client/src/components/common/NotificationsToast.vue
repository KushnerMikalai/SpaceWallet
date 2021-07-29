<template>
  <div class="notifications-toast">
    <UiMessageBox
      class="notifications-toast__item"
      v-for="item in items"
      :key="item.id"
      v-bind="item"
      @close="handleClose"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiMessageBox from '../ui/UiMessageBar.vue'

export default defineComponent({
  name: 'NotificationsToast',
  components: {
    UiMessageBox
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, ctx) {
    const handleClose = (id: string) => {
      ctx.emit('close', { id, key: 'itemsToast' })
    }

    return {
      handleClose
    }
  }
})
</script>

<style scoped>
.notifications-toast {
  max-width: 300px;
  width: 100%;
}
.notifications-toast__item:not(:last-child) {
  margin-bottom: 10px;
}
</style>
