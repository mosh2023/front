import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Authorization from '../views/Authorization.vue'
import CreateGAme from '../views/CreateGame.vue'
import Join from '../views/JoinGame.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authorization',
      name: 'authorization',
      component: Authorization
    },
    {
      path: '/creategame',
      name: 'create a game',
      component: CreateGAme
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }
  ]
})

export default router
