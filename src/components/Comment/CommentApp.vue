<template>
    <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- Add -->
      <Add :add = "add"/>
      <!-- List -->
      <List :comments = "comments" :deleted = "deleted"/>

    </div>
  </div>
</template>

<script>
import Add from './Add'
import List from './List'
export default {
    data(){
      return{
        comments:[
          {name:'Tom',title:'react 还不错'},
          {name:'jack',title:'react ....'}
        ]
      }
    },
    methods:{
      add(obj){
        this.comments.unshift(obj)
      },
      deleted(index){
        this.comments.splice(index,1)

      }
    },
    components:{
        Add,
        List
    }
    
}


/*
  -- 数组在哪个组件，更新数据行为就因该在哪里蒂尼
  -- 组件化，使用组件必须通过components进行映射
  -- v-model 表单数据自动收集（双向数据绑定）
  -- 组件通信：一个组件接收父组件传递的数据声明接收属性props,接收过来的属性成为组件对象的属性
  -- 

*/
</script>

<style>

</style>