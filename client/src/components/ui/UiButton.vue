<script setup lang="ts">
// import { computed } from 'vue'
interface Props {
  typeStyle?: 'primary' | string
  active?: boolean
  disabled?: boolean
  type?: 'submit' | 'button' | 'reset' | undefined
}

withDefaults(defineProps<Props>(), {
  type: 'button',
})

// defineEmits([])
</script>

<template>
  <button
    class="ui-button"
    :class="{
        'ui-button_active': active,
        'ui-button_disabled': disabled,
      },
      [typeStyle ? `ui-button_${typeStyle}` : '']
    "
    :disabled="disabled"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
.ui-button {
  --button--after--BorderWidth: var(--global--BorderWidth--sm);
  --button--hover--after--BorderWidth: var(--global--BorderWidth--md);
  --button--focus--after--BorderWidth: var(--global--BorderWidth--md);
  --button--active--after--BorderWidth: var(--global--BorderWidth--md);

  --button--m-primary--BackgroundColor: var(--global--primary-color--100);
  --button--m-primary--Color: var(--global--Color--light-100);
  --button--m-primary--hover--BackgroundColor: var(--global--primary-color--200);
  --button--m-primary--hover--Color: var(--global--Color--light-100);
  --button--m-primary--focus--BackgroundColor: var(--global--primary-color--200);
  --button--m-primary--focus--Color: var(--global--Color--light-100);
  --button--m-primary--active--BackgroundColor: var(--global--primary-color--200);
  --button--m-primary--active--Color: var(--global--Color--light-100);

  position: relative;
  display: inline-block;
  padding: var(--global--spacer--form-element) var(--global--spacer--md) var(--global--spacer--form-element) var(--global--spacer--md);
  font-size: var(--global--FontSize--md);
  font-weight: var(--global--FontWeight--normal);
  line-height: var(--global--LineHeight--md);
  text-align: center;
  white-space: nowrap;
  user-select: none;
  border: 0;
  border-radius: var(--global--BorderRadius--sm);

  &:hover {
    --button--after--BorderWidth: var(--button--hover--after--BorderWidth);
    text-decoration: none;
  }

  &_primary {
    color: var(--button--m-primary--Color);
    background-color: var(--button--m-primary--BackgroundColor);

    &:hover {
      --button--m-primary--Color: var(--button--m-primary--hover--Color);
      --button--m-primary--BackgroundColor: var(--button--m-primary--hover--BackgroundColor);
    }

    &:focus {
      --button--m-primary--Color: var(--button--m-primary--focus--Color);
      --button--m-primary--BackgroundColor: var(--button--m-primary--focus--BackgroundColor);
    }

    &:active,
    &.ui-button_active {
      --button--m-primary--Color: var(--button--m-primary--active--Color);
      --button--m-primary--BackgroundColor: var(--button--m-primary--active--BackgroundColor);
    }
  }
}
</style>
