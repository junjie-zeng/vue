import Vue from 'vue'
import Router from 'vue-router'
// 评论
import CommentApp from '../components/Comment/CommentApp'
// todo
import TodosApp from '../components/Todos/TodosApp.vue'
// user
import UserApp from '../components/User/UserApp'
// 模拟嵌套路由
import RouterApp from  '../components/Router/RouterApp'
import Page1 from '../components/Router/Page1'
import Page2 from '../components/Router/Page2'
import Details from '../components/Router/Details'

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
    },
    {
      path:'/routerApp',
      name:'模拟嵌套路由',
      component:RouterApp,
      children:[
        {
          path:'/routerApp/page1', // path最左侧的/永远代表根路由
          component:Page1
        },
        {
          path:'page2',     // 简单写法（直接省略父路由）
          component:Page2,
          children:[
            {
              path:'details/:id', // id占位 【pramam参数】
              component:Details
            }
          ]
        },
        {
          path:'',
          redirect:Page1
        }
      ]
    }
  ]
})
