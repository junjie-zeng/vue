<template>
    <ul class="todo-main">
        <!-- 列表项 -->
        <Item v-for = "(todo,index) in todos" :todo = "todo" :index = "index" :key = "index" />
    </ul>
</template>
<script>

import {mapState} from 'vuex'
import Item from './Item'
export default {
    props:{
      
    },
    computed:{
        ...mapState(['todos'])
    },
    components:{
        Item
    }
    
}
</script>
<style >
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  margin-top: 20px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>