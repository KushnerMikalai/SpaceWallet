<template>
  <div class="layout">
    <header class="header">
      <div class="header__content">
        <nav>
          <router-link class="link" to="/">Home</router-link>
          <router-link class="link" to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout'
})
</script>

<style scoped>
.layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';
  background-color: #faf9f8;
}

.header {
  grid-area: header;
  color: #000;
  background-color: #fff;
}

.header__content {
  height: 54px;
  padding: 0 20px;
}

.link {
  position: relative;
  border: 1px solid transparent;
  color: #262626;
  display: inline-block;
  margin-top: 1px;
  padding: 16px 8px 10px;
  height: 48px;
  outline-offset: -2px;
  text-decoration: none;
}

.link::before {
  background: currentColor;
  content: '';
  display: none;
  height: 2px;
  position: absolute;
  bottom: 9px;
  width: calc(100% - 16px);
  box-sizing: inherit;
}

.link.router-link-active::before,
.link:hover::before {
  display: block;
}

.link:hover::before {
  background: rgb(0, 120, 212);
}
</style>
