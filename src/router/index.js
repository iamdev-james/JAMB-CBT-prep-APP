import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mock from '../views/mock_examination.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mock_examination',
    name: 'mock_examination',
    component: Mock
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
