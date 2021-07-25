<template>
    <h1>Testing API</h1>
    <UiButton class="button" @click="login">Login</UiButton>
    <UiButton class="button" @click="userGetOne">userGetOne</UiButton>
    <AuthForm/>
</template>

<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue'
import UiButton from '../components/ui/UiButton.vue'
import api from '../api/api'

export default defineComponent({
    name: 'index',
    components: {
        UiButton,
        AuthForm: defineAsyncComponent(() => import('../components/AuthForm.vue'))
    },
    methods: {
      async login() {
        try {
          const res = await api.auth.login({
            email: 'admin@admin.io',
            password: '111111'
          })

          if (res && res?.access_token && res?.refresh_token) {
            localStorage.setItem('accessToken', res.access_token)
            localStorage.setItem('refreshToken', res.refresh_token)
          }
        } catch(e) {
          console.log('Error Login')
        }
      },
      async userGetOne() {
        try {
          await api.user.getOne({id: 1})
        } catch(e) {
          console.log('Error Get User')
        }
      },
    },
})
</script>

<style scoped>
.button:not(:last-child) {
  margin-right: 10px;
}
</style>
