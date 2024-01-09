import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Authorization from '../views/Authorization.vue'
import CreateGAme from '../views/CreateGame.vue'
import Join from '../views/JoinGame.vue'
import Createfield from '../views/CreateField.vue'
import Choosefield from '../views/ChooseField.vue'

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
    },
    {
      path: '/createfield',
      name: 'create a field',
      component: Createfield
    },
    {
      path: '/choosefield',
      name: 'choose a field',
      component: Choosefield
    }
  ]
})

export default router
