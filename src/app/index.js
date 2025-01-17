import '@/shared/styles/index.scss'
import App from './App.vue'

import { createApp } from 'vue'
import { store } from './store'

const app = createApp(App)
app.use(store)

export default app