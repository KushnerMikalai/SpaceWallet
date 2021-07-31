<template>
  <button class="button" :class="buttonViewClass" :disabled="disabled" @click="handleClick">
    <span v-if="$slots.default" class="button__value">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'

type UiButtonNativeType = PropType<'button' | 'submit' | 'reset'>

interface UiButtonProps {
  nativeType: string
  view: string // primary, ...
  loading: boolean
  disabled: boolean
  autofocus: boolean
}

export default defineComponent({
  name: 'UiButton',
  props: {
    nativeType: {
      type: String as UiButtonNativeType,
      default: 'button',
      validator: (val: string) => ['button', 'submit', 'reset'].includes(val)
    },
    view: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  emits: ['click'],
  setup(props: UiButtonProps, ctx) {
    const handleClick = (event: MouseEvent) => {
      ctx.emit('click', event)
    }

    return {
      handleClick,
      buttonViewClass: computed(() => (props.view ? `button_${props.view}` : ''))
    }
  }
})
</script>

<style scoped>
.button {
  position: relative;

  padding: 0 16px;
  display: inline-block;
  box-sizing: border-box;

  min-height: 1rem;
  min-width: 80px;
  height: 32px;

  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  outline: transparent;

  border-radius: 2px;
  border: 1px solid rgb(138, 136, 134);
  background-color: rgb(255, 255, 255);
  color: rgb(50, 49, 48);

  -webkit-font-smoothing: antialiased;
  user-select: none;
}

.button:focus {
  outline: 1px solid #8a92a0;
}

.button:hover {
  cursor: pointer;
}

.button:disabled {
  cursor: default;
}

.button:active:not(:disabled) {
  background-color: #e1dfdd;
}

.button:hover:not(:disabled) {
  filter: brightness(95%);
}

.button_primary {
  border: 1px solid var(--themePrimary);
  background-color: var(--themePrimary);
  color: rgb(255, 255, 255);
}
.button_primary:active:not(:disabled) {
  background-color: rgb(0, 90, 158);
  border: 1px solid rgb(0, 90, 158);
  color: rgb(255, 255, 255);
}
</style>
