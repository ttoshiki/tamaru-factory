import Vue from 'vue'
import Router from 'vue-router'

import tfHome from '@/components/tfHome.vue'
import About from '@/components/About.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: tfHome
    },
    {
      path: '/about',
      component: About
    }
  ]
})
