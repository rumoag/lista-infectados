import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Region from '../views/Region.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/region',
    name: 'region',

    component: Region
  }
]

const router = new VueRouter({
  routes
})

export default router
