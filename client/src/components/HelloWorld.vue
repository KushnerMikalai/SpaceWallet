<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import UiButton from './ui/UiButton.vue'
import UiInput from './ui/UiInput.vue'
import UiSelect from './ui/UiSelect.vue'
import UiSpinner from './ui/UiSpinner.vue'
import UiTooltip from './ui/UiTooltip.vue'

const counter = useCounterStore()

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <UiButton
    class="u-mr-md"
    @click="counter.increment()"
  >
    count is: {{ counter.count }}
  </UiButton>

  <UiButton
    class="u-mr-md"
    @click="counter.$reset()"
  >
    reset
  </UiButton>

  <UiButton
    class="u-mr-md"
    @click="counter.$patch({ count: counter.count + 123 })"
  >
    patch (+ 123)
  </UiButton>

  <UiButton
    class="u-mr-md"
    :type-style="'primary'"
    @click="counter.incrementAsync()"
  >
    async increment
  </UiButton>

  <div style="width: 300px">
    <UiSelect
      component="select"
      :options="[
        {
          value: 1,
          content: 'option_1',
        },
        {
          value: 2,
          content: 'option_2',
        }
      ]"
    />
  </div>
  <div style="width: 300px">
    <UiInput
      v-model="count"
      :value="count"
    />
    {{count}}
  </div>


  <!-- <div>
    <UiSpinner :size="'lg'"/>
  </div> -->

  <div style="overflow: hidden; padding: 4rem;">
    <UiTooltip
      :content="'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, est.'"
      :hover="false"
      :arrow="true"
      :placement="'bottom-start'"
    >
      i
    </UiTooltip>
  </div>
</template>

<style>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
