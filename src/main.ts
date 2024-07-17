import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router/router"
import './assets/icomoon/style.css'  
import './assets/scss/styles.scss'   
const pinia = createPinia()

     
const app = createApp(App)
    app.use(router)
    app.use(pinia)
app.mount('#app')