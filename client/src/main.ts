import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'

import './assets/styles/var.css'
import './assets/styles/main.css'
import './assets/styles/spacing.css'

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
