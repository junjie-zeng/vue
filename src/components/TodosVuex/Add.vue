<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="name" @keyup.enter="addTodo"/>
    </div>
</template>
<script>
import { mapActions} from 'vuex'
export default {
    props:{
        
    },
    data(){
        return {
            name:''
        }
    },
    methods:{
        //...mapActions(['addTodo'])
        addTodo(){
            const { name,add}  = this;
            if(!name){
                alert("任务名称不能为空")
                return
            }
            // 组装数据
            const obj = {
                name,
                complete:false
            }
            // 添加方法
            //add(obj)
            //this.$emit('add',obj)
            this.$store.dispatch('addTodo',obj)
            this.name = '';
        }
    }
}
</script>
<style >
.todo-header input {
  width: 578px;
  height: 35px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}


</style>