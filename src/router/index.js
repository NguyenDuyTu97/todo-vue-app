import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'
import PdfView from '../views/PdfView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/users',
      name: 'Users',
      component: UserView
    },
    {
      path: '/pdf-viewer',
      name: 'PDF',
      component: PdfView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
