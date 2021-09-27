<script setup lang="ts">
import { ref } from 'vue'
import UiInput from '../components/ui/UiInput.vue'

const email = ref('');
const password = ref('');

const onSubmit = (e: any) => {
  e.preventDefault();
  // TODO send form
}
</script>

<template>
  <div class="login">
    <div class="login__main">
      <header class="login__header">// todo</header>
      <form class="login__content" @submit="onSubmit">
        <ui-input type="email" />
        <input type="password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
  <h1>Login</h1>
</template>
