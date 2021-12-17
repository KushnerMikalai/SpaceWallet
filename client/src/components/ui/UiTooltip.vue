<script setup lang="ts">
import Popper from 'vue3-popper'
import { useSlots, computed } from 'vue'

const slots = useSlots()

interface Props {
  arrow?: boolean
  hover?: boolean
  content?: string
  placement?: string
}

const props = withDefaults(defineProps<Props>(), {
  arrow: true,
  hover: true,
  placement: 'top',
})

const isShowContent = computed(() => slots.content || props.content)

</script>

<template>
  <Popper
    v-if="isShowContent"
    :class="'ui-tooltip'"
    :arrow="arrow"
    :hover="hover"
    :placement="placement"
  >
    <slot></slot>
    <template #content>
      <slot v-if="slots.content" name="content"></slot>
      <div v-else v-html="content"></div>
    </template>
  </Popper>
</template>

<style lang="scss" scoped>
.ui-tooltip {
  --tooltip--MaxWidth: 18.75rem;
  --tooltip--BoxShadow: var(--global--BoxShadow--md);
  --tooltip__content--PaddingTop: var(--global--spacer--sm);
  --tooltip__content--PaddingRight: var(--global--spacer--sm);
  --tooltip__content--PaddingBottom: var(--global--spacer--sm);
  --tooltip__content--PaddingLeft: var(--global--spacer--sm);
  --tooltip__content--Color: var(--global--Color--light-100);
  --tooltip__content--BackgroundColor: var(--global--BackgroundColor--dark-100);
  --tooltip__content--FontSize: var(--global--FontSize--sm);

  --popper-theme-background-color: var(--tooltip__content--BackgroundColor);
  --popper-theme-background-color-hover: var(--tooltip__content--BackgroundColor);
  --popper-theme-text-color: var(--tooltip__content--Color);
  --popper-theme-border-width: 1px;
  --popper-theme-border-radius: 0;
  --popper-theme-border-style: 'solid';
  --popper-theme-border-color: var(--tooltip__content--BackgroundColor);
  --popper-theme-padding: var(--tooltip__content--PaddingTop) var(--tooltip__content--PaddingRight) var(--tooltip__content--PaddingBottom) var(--tooltip__content--PaddingLeft);
  --popper-theme-box-shadow: var(--tooltip--BoxShadow)
}

:deep(.popper) {
  font-size: var(--tooltip__content--FontSize);
  color: var(--tooltip__content--Color);
  text-align: center;
  word-break: break-word;
  max-width: var(--tooltip--MaxWidth);
}
</style>
