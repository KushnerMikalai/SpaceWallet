<script setup lang="ts">
import { useStore, } from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted, onBeforeMount, computed } from 'vue'
import { key } from './store'
import { ActionTypes } from './store/actions'
import authService from './api/services/authService'
import { setTokens } from './api/apiClient'
import { MutationTypes } from './store/mutations'
const store = useStore(key)
const router = useRouter()
const isAuth = computed(() => store.getters.isAuth)
const loadingPage = computed(() => store.state.loadingPage)

onBeforeMount(() => {
  store.commit(MutationTypes.SET_LOADING_PAGE, true)
})

onMounted(async () => {
  try {
    const resCheckToken = await authService.checkTokens()
    if (resCheckToken && resCheckToken.access_token) {
      setTokens(resCheckToken.access_token)
    }
    await store.dispatch(ActionTypes.FETCH_APP)

    if (isAuth.value) {
      router.push({ name: 'dashboard' })
    }
    store.commit(MutationTypes.SET_LOADING_PAGE, false)
  } catch (e) {
    console.log(e, 'Error mount App');
  }
})
</script>

<template>
  <div v-if="loadingPage">Loading page...</div>
  <router-view v-else></router-view>
</template>

<style>
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
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
