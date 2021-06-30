import {createApp} from 'vue'
import App from './App.vue'
import {store, key} from './store'
import router from './router'
import {VueCookieNext} from 'vue-cookie-next'

const app = createApp(App)
app.use(store, key)
app.use(router)
app.use(VueCookieNext)
app.mount('#app')
