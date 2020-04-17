<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- 添加 -->
            <Add  />
            <!-- 列表 -->
            <List />
            <!-- 底部 -->
            <Footer   />
        </div>
    </div>
</template>
<script>
import Add from './Add'
import List from './List'
import Footer from './Footer'


import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
           
        }
    },
    mounted(){
        this.$store.dispatch('getTodos')
    },
    computed:{
    },
    components:{
        Add,
        List,
        Footer
    }
    
}

/*
    
    -- 流程
        -- 首先分为两个部分，一个是组件一个是vuex
        -- vuex中有以下结构，核心数据state，用于数据显示，getters将计算好的属性显示到页面上，更新mutations的actions
           ,更新state的mutations

        -- 更新：页面中发生行为通过dispatch调用action,action通过commit触发mutations，mutations更新页面（当数据改变时对应的页面也会发生改变）

    -- watch 深度监视数据改变
    -- localStorage本地存储，本地数据读取
    -- styel 动态绑定数据，鼠标移入移除样式修改
    -- 封装本地存储工具函数

    -- vuex写法顺序（根据自己的喜好来吧）
        - 首先写用户行为（事件）
        - 接着写actions (actions中可以异步调用后台数据)
        - 然后写mutations-types
        - 最后写mutations（确定需要更新哪些数据）



*/
</script>
<style >
.todo-container {
  width: 600px;
  margin: 50px auto 10px auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>