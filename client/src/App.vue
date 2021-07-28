<template>
  <Layout>
    <main class="main">
      <section class="section">
        <div v-if="loading" class="section__loader">
          <UiSpinner />
        </div>
        <router-view v-else />
      </section>
      <footer class="footer">Legal notices and such</footer>
    </main>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import Layout from './components/Layout.vue'
import UiSpinner from './components/ui/UiSpinner.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout,
    UiSpinner
  },
  setup() {
    const store = useStore()
    const loading = computed(() => store.state.loading)

    return {
      loading
    }
  }
})
</script>

<style>
@import './assets/styles/normalize.css';
@import './assets/styles/animation.css';

:root {
  --theme: #b0bec5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  grid-area: main;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr minmax(0, 600px) 1fr;
}

.section {
  grid-area: 1 / 1 / 1 / 4;
  width: 100%;
  padding: 20px;
}

.footer {
  padding: 0 20px;
  height: 54px;
  grid-area: 2 / 1 / 2 / 4;
  background: #fff;
}

.section__loader {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
