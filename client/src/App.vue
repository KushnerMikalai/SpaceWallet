<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import { key } from './store'
import { ActionTypes } from './store/actions'

const store = useStore(key)

onMounted(() => {
  store.dispatch(ActionTypes.FETCH_APP)
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

a {
  background-color: transparent;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.container {
  margin: 0 auto;
  max-width: 980px;
  width: 100%;
  padding-left: 14px;
  padding-right: 14px;
}

#app {
  /* font-family: 'Ubuntu', Avenir, Helvetica, Arial, sans-serif; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
