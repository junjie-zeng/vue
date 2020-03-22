<template>
    <div class="container">
        <router-link to = "/routerApp/page1" class="btn btn-default">页面一</router-link>
        <router-link to = "/routerApp/page2" class="btn btn-primary">页面二</router-link>
        <!-- 用来显示路由组件页面 -->
        
        <router-view></router-view>
        
    </div>
</template>
<script>
export default {
    
}

/*
    --- $router : 代表路由器（功能对象）
    --- $route  : 代表当前路由组件（只存储了一些数据）
    --- <router-link> 用于生成路由链接
    --- <router-view> 以用来显示路由组件页面
    --- <keep-alive> 缓存路由（如果对数据的实时性没有太大的要求可采用路由缓存）
    -- 路由嵌套
        -- 根据路由传递param参数，根据参数模拟获取详情数据
    
    -- 编程式路由
        - push : 可以返回当前路由
        - replace ：不可返回当前路由

    -- watch 监视路由组件数据的变化：参数变化，参数变化后重新获取数据
    -- 数组find()方法 根据参数去过滤数据并返回

*/
</script>
<style>
    /* 根据选中的路由自定义一个选中效果 */
    .router-link-exact-active{
        border: solid;
    }
    .container{
        margin: 0px auto;
        width: 500px;
        margin-top: 20px;
    }
    .page{
        margin-top: 20px;
    }
</style>