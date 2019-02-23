import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/list',
      children:[
        {
          path:':id',
          props:true,
          component:()=>import('./components/TodoItem.vue')
        }
      ],
      name:'list',
      component:()=>import('./views/List.vue')
    }
  ]
})
