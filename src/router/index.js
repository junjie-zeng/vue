import Vue from 'vue'
import Router from 'vue-router'
// 评论
import CommentApp from '../components/Comment/CommentApp'
// todo
import TodosApp from '../components/Todos/TodosApp.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'commentApp',
      component: CommentApp
    },
    {
      path: '/todosApp',
      name: 'todosApp',
      component: TodosApp
    }
  ]
})
