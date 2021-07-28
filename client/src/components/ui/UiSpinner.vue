<template>
  <div class="ui-spinner">
    <div class="ui-spinner__inner"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'UiSpinner',
  setup() {}
})
</script>

<style scoped>
.ui-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ui-spinner__inner {
  box-sizing: border-box;
  border-radius: 50%;
  border-width: 1.5px;
  border-style: solid;
  border-color: rgb(0, 120, 212) rgb(199, 224, 244) rgb(199, 224, 244);
  border-image: initial;
  animation-name: spin;
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
  width: 32px;
  height: 32px;
}
</style>
