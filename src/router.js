import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import ForgotPassword from './components/ForgotPassword.vue'
import sh_fh010 from './components/Startseite-Haushalte-FH010.vue'
import fa_010 from './components/Startseite-Admin-FA010.vue'
import fs_010 from './components/Startseite-Solarteur-FS010.vue'
import fn_010 from './components/Startseite-Netzbetreiber-FN010.vue'
import fe_010 from './components/Startseite-Energieberatende-FE010.vue'
import FN060 from './components/FN060.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/FN060',
    name: 'DashboardNetzbetreiber',
    component: FN060
  },
  {
    path: '/startseite-haushalte',
    name: 'StartseiteHaushalte',
    component: sh_fh010
  },
  {
    path: '/startseite-admin',
    name: 'StartseiteAdmin',
    component: fa_010
  },
  {
    path: '/startseite-solarteur',
    name: 'SolarteurStartseite',
    component: fs_010
  },
  {
    path: '/startseite-netzbetreiber',
    name: 'NetzbetreiberStartseite',
    component: fn_010
  },
  {
    path: '/startseite-energieberatende',
    name: 'EnergieberatendeStartseite',
    component: fe_010
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router