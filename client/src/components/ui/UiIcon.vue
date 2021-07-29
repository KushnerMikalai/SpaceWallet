<template>
  <i class="ui-icon ms-Icon" :class="[iconClass]"></i>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'UiIcon',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return {
      iconClass: computed(() => `ms-Icon--${props.icon}`)
    }
  }
})
</script>

<style scoped>
.ui-icon {
  display: inline-block;
  font-size: 16px;
}
</style>
