<template>
    <div>
        <!-- 自定义v-model -->
        {{name}}
        <input-custom v-model="name"></input-custom>
        <hr>
        <h4>插槽</h4>
       
        <slotDemo ref="slotDome">
            <!-- 1. 普通插槽 -->
            <p>1. 默认插槽</p>
            <!-- 2.作用域插槽 -->
            <template v-slot:zuoyongyu = "slotProps">
                2. {{slotProps.slotData.title}}:作用域插槽
            </template>
            <!-- 3. 具名插槽 -->
            <template v-slot:putong>
                3.具名插槽
            </template>
        </slotDemo>
        <hr>
        <h4>nextTick 和 refs演示</h4>
        <ul ref="list">
            <li v-for = "(item,index) in list" :key = "index">{{item}}</li>
        </ul>
        <button @click="addItem">添加</button>
        <hr>
        <h4>Mixin</h4>
        {{mixinTitle}}
        <button @click="run">Run</button>
    </div>
</template>
<script>

    import slotDemo from './slotDemo'
    import inputCustom from './inputCustom'
    import myMixin from './myMixin.js'
    export default {
        mixins:[myMixin],
        data(){
            return{
                name:'自定义v-model',
                list:[1,2,3]
            }
        },
        created(){
            console.log("parent component...")
        },
        methods:{
           addItem(){
               this.list.push(Date.now())
                // vue是异步渲染的，也就说data改变Dom不会立即更新，$nextTick会在Dom渲染之后触发获取最新的Dom节点
               this.$nextTick(()=>{
                   let ul = this.$refs.list
                   console.log(ul.childNodes.length)
               })
           }
        },
        components:{
            slotDemo,
            inputCustom
        }
    }
</script>