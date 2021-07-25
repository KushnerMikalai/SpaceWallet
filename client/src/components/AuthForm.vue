<template>
  <form
    class="auth-form"
  >
    <div class="auth-form__title">{{ authFormTitle }}</div>
    <UiInput
      class="auth-form__item"
      :label="'Email'"
    />
    <UiInput
      class="auth-form__item"
      :label="'Password'"
      :type="'password'"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import UiInput from './ui/UiInput.vue'

export default defineComponent({
  name: 'AuthForm',
  components: {
    UiInput
  },
  data() {
    return {
      isLoginForm: true,
    };
  },
  computed: {
    ...mapState({
      isAuth: (state: any) => state.account.isAuth,
    }),
    authFormTitle() {
      return this.isLoginForm ? 'Login' : 'Registration';
    },
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
