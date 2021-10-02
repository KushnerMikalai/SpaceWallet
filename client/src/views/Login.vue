<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { setTokens } from '../api/apiClient'
import authService from '../api/services/authService'
import { ActionTypes } from '../store/actions'
import { key } from '../store'

import UiInput from '../components/ui/UiInput.vue'
import Logo from '../components/Logo.vue'
import UiButton from '../components/ui/UiButton.vue'

const store = useStore(key)
const router = useRouter()
const showLoginCode = ref(false)
const email = ref('')
const loginCode = ref('');

const onSubmit = async (e: any) => {
  e.preventDefault();
  try {
    if (showLoginCode.value) {
      const resLoginCode = await authService.loginCode({
        email: email.value,
        password: loginCode.value
      })

      if (resLoginCode && resLoginCode.access_token) {
        setTokens(resLoginCode.access_token)
      }

      await store.dispatch(ActionTypes.FETCH_APP)
      router.push({ name: 'dashboard' })
    } else {
      const resAuth = await authService.auth({ email: email.value })

      if (resAuth) {
        showLoginCode.value = true;
      }
    }
  } catch (e) {
    console.log(e, 'Error Login');
  }
}

</script>

<template>
  <div class="login">
    <div class="login__main">
      <header class="login__header">
        <router-link to="/">
          <logo color-type="dark" />
        </router-link>
        <p>nickminskwdf@gmail.com</p>
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
