<script setup lang="ts">
import Popper from 'vue3-popper'

interface Props {
  arrow?: boolean
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  arrow: true,
  hover: true,
})

</script>

<template>
  <Popper
    :class="'ui-tooltip'"
    :arrow="arrow"
    :hover="hover"
  >
    <button>Trigger element</button>
    <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.
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
