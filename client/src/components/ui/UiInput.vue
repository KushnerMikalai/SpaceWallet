<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits([
  'update:modelValue',
  'blur'
])

defineProps({
  label: { type: String, default: '' },
})

const input = (e: Event) => {
  const target = e.target as HTMLInputElement

  emit('update:modelValue', target.value)
};

const blur = (e: any) => emit('blur', e)

// TODO
// click: this.onClick,
// focus: this.onFocus,
// keyup: this.onKeyup,
// keydown: this.onKeydown,
</script>

<template>
  <div class="tm-input">
    <label
      v-if="label"
      class="tm-input__label"
    >
      {{ label }}
    </label>
    <input
      class="tm-input__inner"
      @input="input"
      @blur="blur"
    />
  </div>
</template>

<style lang="scss">
.tm-input {
  display: inline-block;
  width: 100%;

  &__inner {
    display: block;
    width: 100%;
  }
}
</style>
