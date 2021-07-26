<template>
  <form
    class="auth-form"
  >
    <div class="auth-form__title">{{ authFormTitle }}</div>
    <UiInput
      class="auth-form__item"
      :label="'Email'"
      v-model="inputEmail"
    />
    <UiInput
      class="auth-form__item"
      :label="'Password'"
      :type="'password'"
      v-model="inputPassword"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
import UiInput from './ui/UiInput.vue'

export default defineComponent({
  name: 'AuthForm',
  components: {
    UiInput
  },
  setup() {
    const store = useStore()
    const isLoginForm = ref(true)

    return {
      inputEmail: ref(''),
      inputPassword: ref(''),
      isLoginForm,
      authFormTitle: computed(() => isLoginForm ? 'Login' : 'Registration'),
      isAuth: computed(() => store.state.account.isAuth),
    }
  },
})
</script>

<style>
.auth-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 2px;
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
