import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'

import './assets/styles/fabric-icons.css'
import './assets/styles/normalize.css'
import './assets/styles/animation.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
