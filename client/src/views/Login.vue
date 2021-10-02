<script setup lang="ts">
import { ref } from 'vue'
import UiInput from '../components/ui/UiInput.vue'
import Logo from '../components/Logo.vue'
import UiButton from '../components/ui/UiButton.vue'

const showLoginCode = ref(false)
const email = ref('')
const loginCode = ref('');

const onSubmit = (e: any) => {
  e.preventDefault();
  // TODO send form
  console.log(email.value);
}

</script>

<template>
  <div class="login">
    <div class="login__main">
      <header class="login__header">
        <router-link to="/">
          <logo color-type="dark" />
        </router-link>
      </header>
      <form class="login__content" @submit="onSubmit">
        <ui-input placeholder="Email" type="email" v-model="email" />
        <div v-if="showLoginCode">
          <ui-input placeholder="Login Code" type="password" v-model="loginCode" />
        </div>
        <ui-button type="submit">Login</ui-button>
      </form>
    </div>
  </div>
</template>

<style>
.login {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.login__main {
  max-width: 400px;
  width: 100%;
}
</style>
