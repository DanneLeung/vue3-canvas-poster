import { createApp } from 'vue'
import App from './App.vue'
import VueCanvasPoster from './lib'

const app = createApp(App)

app.use(VueCanvasPoster,{})
app.mount('#app')
