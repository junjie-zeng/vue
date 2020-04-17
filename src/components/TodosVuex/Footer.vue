<template>
    <div class="todo-footer">
            <label>
            <input type="checkbox" v-model="selectAll"/>
            </label>
            <span>
            <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
            </span>
            <button class="btn btn-danger" @click="deleteAllComplete">清除已完成任务</button>
        </div>
</template>
<script>
export default {
    props:{
        deleteAllTodos:Function,
        checkAll:Function,
        todos:Array
    },
    computed:{
        completeSize(){
            return  this.todos.reduce((total,todo)=> total + (todo.complete ? 1 :0 ),0)
        },
        selectAll:{
            // 决定是否勾选
            get(){
                return this.completeSize == this.todos.length && this.completeSize > 0;
            },
            // 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
            set(value){
                this.checkAll(value)
            }
        }
    },
    methods:{
        deleteAllComplete(){
            if(window.confirm('确定清除已完成的任务？')){
                this.deleteAllTodos()
            }
        }
    }
}
</script>
<style >
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>