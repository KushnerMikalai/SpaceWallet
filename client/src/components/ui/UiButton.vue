<script setup lang="ts">
import UiSpinner from './UiSpinner.vue'

interface Props {
  typeStyle?: 'primary' | string
  active?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset' | undefined
  progress?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  typeStyle: 'primary',
})
</script>

<template>
  <button
    class="pf-c-button"
    :class="{
        'pf-m-in-progress': progress,
      },
      [typeStyle ? `pf-m-${typeStyle}` : '']
    "
    :disabled="disabled"
    :type="type"
  >
    <span
      v-if="progress"
      class="pf-c-button__progress"
    >
      <UiSpinner class="pf-m-md"/>
    </span>
    <slot></slot>
  </button>
</template>

<style lang="scss">
</style>
