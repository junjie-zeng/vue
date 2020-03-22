import Vue from 'vue'
import Router from 'vue-router'
// 评论
import CommentApp from '../components/Comment/CommentApp'
// todo
import TodosApp from '../components/Todos/TodosApp.vue'
// user
import UserApp from '../components/User/UserApp'

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
    },
    {
      path: '/userApp',
      name: 'userApp',
      component: UserApp
    }
  ]
})
