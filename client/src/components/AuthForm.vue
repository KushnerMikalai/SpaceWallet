<template>
  <form class="auth-form" @submit="handleSubmit">
    <div class="auth-form__title">{{ authFormTitle }}</div>
    <ui-input class="auth-form__item" :label="'Email'" v-model="inputEmail" />
    <ui-input
      class="auth-form__item"
      :label="'Password'"
      :type="'password'"
      v-model="inputPassword"
    />
    <ui-button class="auth-form__item" type="submit">
      {{ authFormTitle }}
    </ui-button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import UiInput from './ui/UiInput.vue'
import UiButton from './ui/UiButton.vue'
import api from '../api/api'

export default defineComponent({
  name: 'AuthForm',
  components: {
    UiInput,
    UiButton
  },
  setup() {
    const isLoginForm = ref(true)
    const inputEmail = ref('')
    const inputPassword = ref('')

    const store = useStore()

    const handleSubmit = async (event: any) => {
      event.preventDefault()

      try {
        const res = await api.auth.login({
          email: inputEmail.value,
          password: inputPassword.value
        })

        if (res && res?.access_token && res?.refresh_token) {
          localStorage.setItem('accessToken', res.access_token)
          localStorage.setItem('refreshToken', res.refresh_token)

          inputEmail.value = ''
          inputPassword.value = ''

          store.dispatch('getAppData')
        }
      } catch (e) {
        console.log('error_login')
      }
    }

    return {
      inputEmail,
      inputPassword,
      isLoginForm,
      authFormTitle: computed(() => (isLoginForm ? 'Login' : 'Registration')),
      handleSubmit
    }
  }
})
</script>

<style>
.auth-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background: #fff;
  text-align: center;
}

.auth-form__title {
  margin-bottom: 26px;
  text-align: center;
  font-weight: 500;
  font-size: 26px;
}

.auth-form__item {
  margin-bottom: 20px;
  max-width: 300px;
  width: 100%;
}
</style>
