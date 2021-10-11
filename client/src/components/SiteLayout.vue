<script setup lang="ts">
import { computed } from 'vue'
import Logo from './Logo.vue'

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a class="logo" href="/">
            <Logo />
          </a>
          <div class="auth">
            <!-- <router-link class="nav-item" to="/">Home</router-link> -->
            <router-link class="nav-item" to="/login">Login</router-link>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="footer container">
      <div class="footer__content">
        <span class="copy">Copyright © {{ year }}. All rights reserved.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.layout :focus,
.layout * :focus {
  outline: 4px solid rgba(0, 125, 250, 0.6);
}

.nav {
  display: flex;
}

.logo {
  display: flex;
  align-items: center;
  height: 44px;
  outline-offset: -7px;
  margin-right: 10px;
}

.header {
  position: sticky;
  top: 0;
  background-color: #323232;
  background: rgba(0, 0, 0, 0.8);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}

.footer {
  padding: 32px 14px 20px;
}

.footer__content {
  padding-top: 10px;
  border-top: 1px solid #d2d2d7;
}

.copy {
  font-size: 12px;
  color: #86868b;
}

.nav-item {
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 3.14286;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: #f5f5f7;
  padding: 0 10px;
  height: 44px;
  opacity: 0.8;
  background: no-repeat;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline-offset: -7px;
  box-sizing: content-box;
}

.nav-item:hover {
  opacity: 1;
}

.auth {
  margin-left: auto;
}
</style>
