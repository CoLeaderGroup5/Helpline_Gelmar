import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import the router
import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
  .use(router) // use the router
  .mount('#app')