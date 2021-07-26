<template>
  <div class="ui-input">
    <label class="ui-input__label">
      <span class="ui-input__label-text">{{ label }}</span>
      <div class="ui-input__content">
        <input
          class="ui-input__field"
          ref="input"
          :type="type"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          @input="handleInput"
          @change="handleChange"
          @keydown="handleKeydown"
        >
        <i class="ui-input__field-after"></i>
      </div>
    </label>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  nextTick,
  computed,
  ref
} from 'vue'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'

export default defineComponent({
  name: 'UiInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val: string) => ['on', 'off'].includes(val),
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    maxlength: {
      type: [Number, String],
    },
  },
  emits: [UPDATE_MODEL_EVENT, 'input', 'change', 'keydown'],
  setup(props, ctx) {
    const input = ref(null)
    const textarea = ref(null)

    const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue))
    const inputOrTextarea = computed(() => input.value || textarea.value)

    const handleInput = event => {
      let { value } = event.target
      if (value === nativeInputValue.value ) return

      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit('input', value)
      nextTick(setNativeInputValue)
    }

    const setNativeInputValue = () => {
      const input = inputOrTextarea.value
      if (!input || input.value === nativeInputValue.value) return

      input.value = nativeInputValue.value
    }

    const handleChange = event => {
      ctx.emit('change', event.target.value)
    }

    const handleKeydown = e => {
      ctx.emit('keydown', e)
    }

     return {
      input,
      textarea,
      handleInput,
      handleChange,
      handleKeydown,
    }
  },
})
</script>

<style scoped>
.ui-input {
  display: inline-block;
}

.ui-input__label-text {
  text-align: left;
  display: inline-block;
  width: 100%;
  margin-bottom: 3px;
  font-size: 14px;
}

.ui-input__content {
  box-shadow: none;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  cursor: text;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: relative;
}

.ui-input__field {
  position: relative;
  z-index: 2;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  font-weight: 400;
  box-shadow: none;
  margin: 0px;
  padding: 0px 8px;
  box-sizing: border-box;
  border-radius: 0px;
  border: none;
  background: none transparent;
  color: rgb(50, 49, 48);
  width: 100%;
  min-width: 0px;
  text-overflow: ellipsis;
  outline: 0px;
}

.ui-input__field:focus {
  outline: 0px;
}

.ui-input__field:focus + .ui-input__field-after {
  border: 2px solid rgb(0, 120, 212);
}

.ui-input__field-after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border: 1px solid rgb(96, 94, 92);
  border-radius: 2px;
  background: rgb(255, 255, 255);
  box-sizing: border-box;
}
</style>
