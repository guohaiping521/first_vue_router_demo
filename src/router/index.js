import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/views/movie/index'
import Cinema from '@/views/cinema/index'
import Mine from '@/views/mine/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})
