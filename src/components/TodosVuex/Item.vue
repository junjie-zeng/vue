<template>
    <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style = '{background:bgColor}'>
        <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{todo.name}}</span>
        </label>
        <button v-show="isShow" class="btn btn-danger" @click="deleteItem">删除</button>
    </li>
</template>
<script>
export default {
    props:{// 指定属性名和属性值的类型
        todo:Object,
        index:Number,
        deleted:Function
    },
    data(){
        return{
            bgColor:'white',
            isShow:false,
        }
    },
    methods:{
        handleEnter(isEnter){
            if(isEnter){
                this.bgColor = 'gray';
                this.isShow = true;
            }else{
                 this.bgColor = 'white';
                this.isShow = false;
            }

        },
        // 删除
        deleteItem(){
            const { todo,deleted,index} = this
            if(window.confirm( `确定删除${todo.name}?`)){
                deleted(index);
            }
        }
    }
}
</script>
<style >
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  /* float: left; */
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>