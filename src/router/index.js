import Vue from 'vue'
import Router from 'vue-router'
// 评论
import CommentApp from '../components/Comment/CommentApp'
// todo
import TodosApp from '../components/Todos/TodosApp.vue'
import TodosAppVuex from '../components/TodosVuex/TodosAppVuex.vue'
// user
import UserApp from '../components/User/UserApp'
// 模拟嵌套路由
import RouterApp from  '../components/Router/RouterApp'
import Page1 from '../components/Router/Page1'
import Page1Detail from '../components/Router/Page1Detail'
import Error from '../components/Router/Error'
import Page2 from '../components/Router/Page2'
import Details from '../components/Router/Details'
import CountVuexApp from '../components/CountVuex/CountVuexApp.vue'
import AdvancedFeatures from '../components/AdvancedFeatures'
import Directive from '../components/Directive'


Vue.use(Router)

export default new Router({
  // mode: 'history',
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
      path: '/todosAppVuex',
      name: 'todosAppVuex',
      component: TodosAppVuex
    },
    {
      path: '/userApp',
      name: 'userApp',
      component: UserApp
    },
    {
      path:'/countAppVuex',
      component:CountVuexApp
    },
    {
      path:'/advancedFeatures',
      component:AdvancedFeatures 
    },
    {
      path:'/directive',
      name:'directive',
      component:Directive 
    },
    {
      path:'/routerApp',
      name:'模拟嵌套路由',
      component:RouterApp,
      children:[
        {
          path:'/routerApp/page1', // path最左侧的/永远代表根路由 
          component:Page1,
          children:[
            {
              path:'page1Detail',
              name:'page1Detail',
              component:Page1Detail
            }
          ]
        },
        {
          path:'page2/:name',     // 简单写法（直接省略父路由）
          name:'page2',
          props:true, // 如果 props 被设置为 true，route.params 将会被设置为组件属性
          // props:(route)=>( // 创建一个函数返回props
          //   {
          //     name:'哈哈',
          //     age:18
          //   }
          // ),
          component:Page2,
          children:[
            {
              path:'details/:id', // id占位 【pramam参数】
              name:'details',
              component:Details
            }
          ]
        },
        {
          path:'',
          redirect:Page1
        }
      ]
    },
    {
      path:'*',
      component:Error
    }
  ]
})
