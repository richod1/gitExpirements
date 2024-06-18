import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import Toast,{POSITION} from "vue-toastification"
const app=createApp(App);
app.use(createPinia())

app.use(Toast,{
    position:POSITION.TOP_CENTER
})


app.mount('#app')