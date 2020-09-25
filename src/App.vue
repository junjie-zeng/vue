<template>
  <div id="app">
    <!-- 导航 -->
    <div class="nav">
      <router-link to = "/todosApp">todosApp</router-link>
      <router-link to = "/todosAppVuex">todosAppVuex</router-link>
      <router-link to = "/userApp">userApp</router-link>
      <router-link to = "/countAppVuex">countAppVuex</router-link>
      <router-link to = "/routerApp/page1">嵌套路由</router-link>
      <router-link to = "/advancedFeatures">高级特性</router-link>
    </div>
    <!--  -->
    <div style="padding:20px">
       <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .nav{
    height: 60px;
    line-height: 60px;
    padding: 0 5px;
    background: rgb(60, 175, 252);
  }

  .nav a{
    padding: 0 8px;
    color: #fff;
    text-decoration: none;
  }
</style>
