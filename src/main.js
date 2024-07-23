import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(vue3GoogleLogin, {
  clientId: '840559433704-iobvec3lult0r7kq4cqhuirjfe39gaq7.apps.googleusercontent.com'
})

app.mount('#app')
