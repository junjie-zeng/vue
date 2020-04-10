// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// CountVuex组件需要的store
import countVuexStore from './components/CountVuex/countVuexStore'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store:countVuexStore // CountVuex组件需要的store
})


/*
    -- vuex通过store选项，提供了一种机制将状态从根组件注入到每一个子组件中（需调用Vue.use(Vuex)）
      - 把storeNmae(store)对象提供给store选项，这可以把store的实例注入所有的组件
      - 通过在根实例中注册store选项，该store实例会注入到根组件下所有子组件中（子组件通过 this.$store.state访问到）

      -- mapState
        - 当一个组件需要获取多个状态的时候可以通过mapState进行映射

      
      -- 

*/