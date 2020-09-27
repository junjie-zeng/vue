<template>
  <div class="page">
    <p class="text-muted">我是页面一</p>
    <hr />
    <router-link active-class="page1Active"  tag="button" :to="{path:'/routerApp/page1/page1Detail'}"  class="btn btn-default"> 声明式导航使用path路径</router-link>
    <router-link active-class="page1Active"  :to="{name:'page1Detail',params:{id:123}}"  class="btn btn-default"> 声明式导航传参</router-link>
    <router-link active-class="page1Active"  :to="{name:'page1Detail',query:{id:'带查询参数'}}"  class="btn btn-default"> 声明式导航带查询的参数</router-link>
    <hr>
    <button  @click="jump1">编程式导航普通</button>
    <button  @click="jump2">编程式导航传参</button>
    <button  @click="jump3">编程式导航带查询的参数</button>

    <hr>
    <!-- 渲染路径匹配到的视图组件 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  return() {
    data: {
    }
  },
  methods: {
    jump1() {
        this.$router.push({
            path:'/routerApp/page1/page1Detail'
        })
    },
    jump2() {
        this.$router.push({
            name:'page1Detail',
            params:{
                id:123
            }
        })
    },
    jump3() {
         this.$router.push({
            name:'page1Detail',
            query:{
                id:'查询参数'
            }
        })
    },
  }
};
</script>
<style>
    .page1Active{
        color: orangered;
    }
</style>