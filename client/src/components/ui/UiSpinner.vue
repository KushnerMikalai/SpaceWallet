<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | string
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <span
    class="ui-spinner pf-m-md"
    role="progressbar"
    aria-label="Loading..."
    :class="
      [size ? `ui-spinner_size-${size}` : '']
    "
  >
    <span class="ui-spinner__clipper"></span>
    <span class="ui-spinner__lead-ball"></span>
    <span class="ui-spinner__tail-ball"></span>
  </span>
</template>

<style lang="scss" scoped>
.ui-spinner {
  --spinner--diameter: var(--global--icon--FontSize--xl);
  --spinner--Width: var(--spinner--diameter);
  --spinner--Height: var(--spinner--diameter);
  --spinner--Color: var(--global--primary-color--100);
  --spinner--m-sm--diameter: var(--global--icon--FontSize--sm);
  --spinner--m-md--diameter: var(--global--icon--FontSize--md);
  --spinner--m-lg--diameter: var(--global--icon--FontSize--lg);
  --spinner--m-xl--diameter: var(--global--icon--FontSize--xl);
  width: var(--spinner--Width);
  height: var(--spinner--Height);
  overflow: hidden;

  &_size-sm {
    --spinner--diameter: var(--spinner--m-sm--diameter);
  }

  &_size-md {
    --spinner--diameter: var(--spinner--m-md--diameter);
  }

  &_size-lg {
    --spinner--diameter: var(--spinner--m-lg--diameter);
  }

  &_size-xl {
    --spinner--diameter: var(--spinner--m-xl--diameter);
  }
}

span.ui-spinner {
  --spinner--AnimationDuration: 1.5s;
  --spinner--AnimationTimingFunction: cubic-bezier(.77, .005, .315, 1);
  --spinner--stroke-width-multiplier: .1;
  --spinner--stroke-width: calc(var(--spinner--diameter) * var(--spinner--stroke-width-multiplier));
  --spinner__clipper--Width: var(--spinner--diameter);
  --spinner__clipper--Height: var(--spinner--diameter);
  --spinner__clipper--after--BoxShadowColor: var(--spinner--Color);
  --spinner__clipper--after--Width: var(--spinner--diameter);
  --spinner__clipper--after--Height: var(--spinner--diameter);
  --spinner__clipper--after--BoxShadowSpreadRadius: var(--spinner--stroke-width);
  --spinner__lead-ball--after--BackgroundColor: var(--spinner--Color);
  --spinner__ball--after--Width: var(--spinner--stroke-width);
  --spinner__ball--after--Height: var(--spinner--stroke-width);
  --spinner__tail-ball--after--BackgroundColor: var(--spinner--Color);
  position: relative;
  display: inline-block;
  text-align: left;
  animation: animation-spinner-parent calc(var(--spinner--AnimationDuration) * 2) var(--spinner--AnimationTimingFunction) infinite;

  &__clipper {
    position: absolute;
    width: var(--spinner__clipper--Width);
    height: var(--spinner__clipper--Height);
    clip-path: inset(0 0 50% 50%);
    animation: animation-spinner__clipper var(--spinner--AnimationDuration) linear infinite;

    &::after {
      position: absolute;
      width: var(--spinner__clipper--after--Width);
      height: var(--spinner__clipper--after--Height);
      clip-path: inset(0 0 0 50%);
      content: "";
      border-radius: 50%;
      box-shadow: inset 0 0 0 var(--spinner__clipper--after--BoxShadowSpreadRadius) var(--spinner__clipper--after--BoxShadowColor);
      animation: animation-spinner__clipper-after var(--spinner--AnimationDuration) linear infinite;
    }
  }

  &__lead-ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: animation-spinner__lead-ball var(--spinner--AnimationDuration) linear infinite;

    &::after {
      position: absolute;
      top: calc(50% - (var(--spinner__ball--after--Height) / 2));
      right: 0;
      width: var(--spinner__ball--after--Width);
      height: var(--spinner__ball--after--Height);
      content: "";
      background-color: var(--spinner__lead-ball--after--BackgroundColor);
      border-radius: 50%;
      transform-origin: top right;
    }
  }

  &__tail-ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: animation-spinner__tail-ball var(--spinner--AnimationDuration) linear infinite;

    &::after {
      position: absolute;
      top: calc(50% - (var(--spinner__ball--after--Height) / 2));
      right: 0;
      width: var(--spinner__ball--after--Width);
      height: var(--spinner__ball--after--Height);
      content: "";
      background-color: var(--spinner__tail-ball--after--BackgroundColor);
      border-radius: 50%;
      transform-origin: top right;
    }
  }
}

@keyframes animation-spinner-parent {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-540deg);
  }
  100% {
    transform: rotate(-1080deg);
  }
}

@keyframes animation-spinner__clipper {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-270deg);
  }
}

@keyframes animation-spinner__clipper-after {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(-180deg);
  }
}

@keyframes animation-spinner__lead-ball {
  0% {
    transform: rotate(0deg);
  }
  34% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes animation-spinner__tail-ball {
  0% {
    transform: rotate(0deg);
  }
  67.5% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
