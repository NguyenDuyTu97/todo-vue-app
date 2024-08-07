import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
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
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

export default router
