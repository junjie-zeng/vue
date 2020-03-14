import Vue from 'vue'
import Router from 'vue-router'
import CommentApp from '../components/Comment/CommentApp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'commentApp',
      component: CommentApp
    }
  ]
})
