<script setup lang="ts">
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()
const emit = defineEmits(['update:modelValue', 'blur'])

defineProps({
  label: { type: String, default: '' }
})

const computedInputAttributes = computed(() => ({
  ...attrs,
}))

const eventListeners = computed(() => ({
  input: (e: Event) => {
    const target = e.target as HTMLInputElement

    emit('update:modelValue', target.value)
  },
  blur: (e: any) => emit('blur', e),
  // click: this.onClick,
  // focus: this.onFocus,
  // keyup: this.onKeyup,
  // keydown: this.onKeydown,
}))

</script>

<template>
  <div class="ui-input">
    <label
      v-if="label"
      class="ui-input__label"
    >
      {{ label }}
    </label>
    <input
      class="ui-input__inner"
      v-bind="computedInputAttributes"
      v-on="eventListeners"
    />
  </div>
</template>

<style>
.ui-input {
  display: inline-block;
  width: 100%;
}

.ui-input__inner {
  display: block;
  width: 100%;
}
</style>
