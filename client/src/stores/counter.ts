import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    async incrementAsync() {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.increment()
    },
  },
})