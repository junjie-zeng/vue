<template>
    <div class="container">
        <Search/>
        <Main/>
    </div>
</template>
<script>
import Main from './Main'
import Search from './Search'
export default {
    components:{
        Search,
        Main
    }
}

/*
    -- pubsub 组件通信
        - pubsub组件通信没有位置的要求
        - publish 分发一个消息
        - subscribe 订阅一个消息
    -- axios ajax请求
    -- map方法过滤得到自己需要的数据
*/
</script>
<style>

</style>