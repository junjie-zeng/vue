<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- 添加 -->
            <!-- 父子通信 普通方法 -->
            <!-- <Add :add = "add"/> -->
            <!-- 父子通信自定义事件 @add = "add" -->
            <Add  @add = "add"/>
            <!-- 列表 -->
            <List :todos = "todos" :deleted = "deleted"/>
            <!-- 底部 -->
            <Footer :deleteAllTodos = "deleteAllTodos" :checkAll = "checkAll" :todos = "todos"/>
        </div>
    </div>
</template>
<script>
import Add from './Add'
import List from './List'
import Footer from './Footer'
import storageUtils from './utils/storageUtil'
export default {
    data(){
        return {
            // 方式1
            // todos:[
            //     {name:'写周报....',complete:true},
            //     {name:'keep....',complete:false},
            // ]
            // 方式二（不利于维护）
            //todos:JSON.parse(localStorage.getItem('todo_key') || '[]') //读取localStorage保存的数据
            // 方式三 （将功能函数进行封装，统一管理）
            todos:storageUtils.getTodos()
        }
    },
    methods:{
        add(obj){
            this.todos.unshift(obj)
        },
        deleted(index){
            this.todos.splice(index,1)
        },
        // 删除已完成的任务
        deleteAllTodos(){
            this.todos = this.todos.filter((todo)=> !todo.complete) // 过滤未完成的任务
            console.log(this.todos)
        },
        // 全选/全不选
        checkAll(isSelectAll){
            this.todos.forEach((todo)=>{
                todo.complete = isSelectAll
            })

        }
    },
    watch:{
        todos:{
            deep:true, // 深度监视
            // 该方式不利于统一管理
            // handler:function(val){
            //     localStorage.setItem('todo_key',JSON.stringify(val));
            // }
            // 将工具函数封装进行统一管理
            handler:storageUtils.setTodos
        }

    },
    components:{
        Add,
        List,
        Footer
    }
    
}

/*
    -- 组件通信
        - 普通方法：通过属性传递
        - 自定义事件：@事件名 = “事件名” $emit('事件名')
    -- watch 深度监视数据改变
    -- localStorage本地存储，本地数据读取
    -- styel 动态绑定数据，鼠标移入移除样式修改
    -- 封装本地存储工具函数


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