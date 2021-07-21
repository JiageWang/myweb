import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home')
const Blog = () => import('views/blog/Blog')
const Life = () => import('views/life/Life')

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/life',
    name: 'Life',
    component: Life
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
