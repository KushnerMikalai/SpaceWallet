<script setup lang="ts">
// import { computed } from 'vue'

const emit = defineEmits([
  'update:modelValue',
  'blur'
])

type Option = {
  value: string | number
  content: string
}

interface Props {
  value?: number | string
  options?: Option[]
}

withDefaults(defineProps<Props>(), {
  value: '',
})


const input = (e: Event) => {
  const target = e.target as HTMLInputElement

  emit('update:modelValue', target.value)
};

const blur = (e: any) => emit('blur', e)

</script>

<template>
  <select
    class="pf-c-form-control"
    :value="value"
    @input="input"
    @blur="blur"
  >
    <option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
    >
      {{ item.content }}
    </option>
  </select>
</template>

<style lang="scss"></style>
