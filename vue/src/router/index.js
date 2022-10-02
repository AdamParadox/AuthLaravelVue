import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      Auth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      Auth: false
    }

  },
 
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      Auth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.Auth && !store.state.user.token) {
    next('login')
  } else  if (store.state.user.token && (to.name === 'login' || to.name === 'register')) {
    next('/')

  } else {
    next()
  }
})
export default router
