import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import MovieDetail from "@/views/MovieDetail";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/movie/:id',
    name:'Movie Detail',
    component:MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
