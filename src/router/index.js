import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nosotros from '../views/Nosotros.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: '/Inicio',
    component: Inicio
  },
  {
    path: '/Contacto',
    name: '/Contacto',
    component: Contacto
  },
  {
    path: '/Nosotros',
    name: 'nosotros',
    component: Nosotros
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
