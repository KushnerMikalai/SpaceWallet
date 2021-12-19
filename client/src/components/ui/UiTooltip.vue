<script setup lang="ts">
import {computePosition, flip, shift, offset, arrow} from '@floating-ui/dom'
import { ref, useSlots, computed} from 'vue'

const slots = useSlots()

const button = ref(null)
const tooltip = ref(null)
const uiArrow = ref(null)

const showToolpit = ref(false)

interface Props {
  arrow?: boolean
  hover?: boolean
  content?: string
  placement?: 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
}

const props = withDefaults(defineProps<Props>(), {
  arrow: false,
  hover: true,
  placement: 'top',
})

const placementLocal = ref(props.placement)
const placementClass = computed(() => `pf-m-${placementLocal.value}`)

const update = () => {
  const buttonElement: any = button.value
  const tooltipElement: any = tooltip.value
  const arrowElement: any = uiArrow.value

  if (buttonElement && tooltipElement && arrowElement) {
    computePosition(buttonElement, tooltipElement, {
        placement: props.placement,
        middleware: [
          offset(6),
          flip(),
          shift(),
          arrow({element: arrowElement}),
        ],
      }).then(({x, y, placement, middlewareData}) => {

        Object.assign(tooltipElement.style, {
          left: `${x}px`,
          top: `${y}px`,
          opacity: 1,
        });

        if (props.arrow) {
          const arrowX = middlewareData?.arrow?.x
          const arrowY = middlewareData?.arrow?.y


          // const staticSide = {
          //   top: 'bottom',
          //   right: 'left',
          //   bottom: 'top',
          //   left: 'right',
          // }[placement.split('-')[0]];

          placementLocal.value = placement

          Object.assign(arrowElement.style, {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            // [staticSide]: '-4px',
          });
        }
      })
  }

}

const open = (e: any) => {
  console.log(e.type); // TODO hover or click check

  showToolpit.value = true
  setTimeout(() => {
    update()
  })
}
const close = () => {
  showToolpit.value = false

  if (tooltip.value) {
    tooltip.value.style.opecity = 0
  }
}
addEventListener('scroll', update);
addEventListener('resize', update);

</script>

<template>
  <!-- if you need focus - use button -->
  <span
    class="ui-tooltip-action"
    ref="button"
    aria-describedby="tooltip"
    @mouseenter="open"
    @focus="open"
    @mouseleave="close"
    @blur="close"
  >
    <slot></slot>
  </span>

  <teleport
    v-if="showToolpit"
    to="body"
  >
    <div
      class="ui-tooltip"
      ref="tooltip"
    >
      <div
        class="pf-c-tooltip"
        :class="[placementClass]"
        role="tooltip"
      >
        <div ref="uiArrow" class="pf-c-tooltip__arrow"></div>
        <div class="pf-c-tooltip__content">
          <slot v-if="slots.content" name="content"></slot>
          <div v-else v-html="content"></div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.ui-tooltip-action {
  display: inline-block;
  background-color: initial;
  border: none;
  padding: 0;
}

.ui-tooltip {
  top: 0;
  left: 0;
  position: absolute;
  display: inline-block;
  opacity: 0;
}
</style>
