import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/FormRequisicaoSaidaAntecipada',
    name: 'FormRequisicaoSaidaAntecipada',
    component: () => import(/* webpackChunkName: "about" */ '../views/SaidaAntecipada/FormRequisicao.vue')
  },
  {
    path: '/ListaPedidosSaida',
    name: 'ListaPedidosSaida',
    component: () => import(/* webpackChunkName: "about" */ '../views/SaidaAntecipada/ListaPedidos.vue')
  },
  {
    path: '/ListaPedidosHome',
    name: 'ListaPedidosHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeOffice/ListaPedidos.vue')
  },
  {
    path: '/FormRequisicaoHomeOffice',
    name: 'FormRequisicaoHomeOffice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeOffice/FormRequisicao.vue')
  },
  {
    path: '/ListaPedidosFerias',
    name: 'ListaPedidosFerias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ferias/ListaPedidos.vue')
  },
  {
    path: '/FormRequisicaoFerias',
    name: 'FormRequisicaoFerias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ferias/FormRequisicao.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
