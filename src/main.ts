import { createApp } from 'vue'

import App from './App.vue'
import router from "./router/router"
import './assets/icomoon/style.css'  
import './assets/scss/styles.scss'   


     
const app = createApp(App)
    app.use(router)
app.mount('#app')