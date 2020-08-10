import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routesMap: { [key: string]: RouteConfig } = {
  root: {
    path: '/',
    name: 'root',
    redirect: {name: 'home'}
  },
  home: {
    path: '/home',
    name: 'home',
    component: Home
  }
}

const routes: Array<RouteConfig> = [
  routesMap.root,
  routesMap.home
]

const router = new VueRouter({
  routes
})

export default router
export {routesMap}
