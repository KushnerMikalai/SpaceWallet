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
const loading = ref(false)

const onChengeEmail = async (e: any) => {
  showLoginCode.value = false;
}

const onSubmit = async (e: any) => {
  loading.value = true
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
      loading.value = false
      router.push({ name: 'dashboard' })
    } else {
      const resAuth = await authService.auth({ email: email.value })

      if (resAuth) {
        showLoginCode.value = true;
      }
      loading.value = false
    }
  } catch (e) {
    loading.value = false
    console.log(e, 'Error Login');
  }
}

</script>

<template>
  <div class="login">
    <div class="login__main">
      <div v-if="loading" class="loading">
        <span>Loading ...</span>
      </div>
      <header class="login__header">
        <router-link to="/">
          <logo color-type="dark" />
        </router-link>
        <p>nickminskwdf@gmail.com</p>
      </header>
      <form class="login__content" @submit="onSubmit">
        <ui-input placeholder="Email" type="email" v-model="email" @input="onChengeEmail" />
        <div v-if="showLoginCode">
          <ui-input placeholder="Login Code" type="password" v-model="loginCode" />
        </div>
        <ui-button type="submit">Login</ui-button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.login__main {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 2;
}
.loading span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}
</style>
