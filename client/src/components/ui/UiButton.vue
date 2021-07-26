<template>
  <button
    class="button"
    :disabled="disabled"
    @click="handleClick"
  >
     <span
       v-if="$slots.default"
       class="button__value"
     >
       <slot></slot>
     </span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type { PropType } from 'vue'

type IButtonNativeType = PropType<'button' | 'submit' | 'reset'>

interface IButtonProps {
  nativeType: string
  loading: boolean
  disabled: boolean
  autofocus: boolean
}

export default defineComponent({
  name: 'UiButton',
  props: {
    nativeType: {
      type: String as IButtonNativeType,
      default: 'button',
      validator: (val: string) => ['button', 'submit', 'reset'].includes(val),
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
  },
  emits: ['click'],
  setup(props: IButtonProps, ctx) {
    const handleClick = (event: MouseEvent) => {
      ctx.emit('click', event)
    }

    return {
      handleClick,
    }
  }
})
</script>

<style scoped>
.button {
  padding: 0 16px;
  display: inline-block;
  border: none;
  min-height: 1rem;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  text-align: center;
  border-radius: 2px;
  min-width: 80px;
  user-select: none;
  -webkit-font-smoothing: antialiased;
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

.button:hover:not(:disabled) {
  filter: brightness(95%);
}

.button:active:not(:disabled) {
  background-color: #e1dfdd;
}
</style>
