import { createApp } from 'vue'
import App from './App.vue'
import VueCanvasPoster from '../dist/vue3-canvas-poster'
// import '@/assets/style.css'
const app = createApp(App)

app.use(VueCanvasPoster,{})
app.mount('#app')
