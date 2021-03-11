<template>
    <div>
        <!-- 自定义v-model -->
        {{name}}
        <input-custom v-model="name"></input-custom>
        <model-vue  v-if="ifShow"  v-model="ifShow" ></model-vue>
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
        <hr>
        <h4>在组件中使用全局常量</h4>
        {{global.title}}
        <hr>
        <h5>计算属性</h5>
        {{getName}}
        <hr>
        <h5>指令</h5>
        <input v-focus type="text" placeholder="自动会获取光标"/>
        <input type="text" placeholder="不会获取光标">
        <h5>动态增加属性</h5>
        {{obj.name}}
        <input type="text" v-model="obj.name">
        <h5>modelVue</h5>
        <modelVue @hook:mounted = "getLife"/>
    </div>
</template>
<script>

    import slotDemo from './slotDemo'
    import inputCustom from './inputCustom'
    import modelVue from './modelVue'
    import myMixin from './myMixin.js'
    export default {
        mixins:[myMixin],
        data(){
            return{
                ifShow:true,
                name:'自定义v-model',
                list:[1,2,3],
                obj:{}
            }
        },
        computed:{
            getName(){
                console.log("...... ",this.name)
                return this.name
            }
        },
        beforeCreate(){
            console.log("beforeCreate",this.data)
        },
        created(){
            console.log("parent component...")
        },
        mounted(){
            // this.obj.name = '测试动态添加的属性'
            // this.$set(this.obj,'name','测试动态添加的属性')
           this.obj = Object.assign({},this.obj,{name:'测试动态添加的属性'})
        },
        methods:{
           addItem(){
               this.list.push(Date.now())
                // vue是异步渲染的，也就说data改变Dom不会立即更新，$nextTick会在Dom渲染之后触发获取最新的Dom节点
               this.$nextTick(()=>{
                   let ul = this.$refs.list
                   console.log(ul.childNodes.length)
               })
           },
           getLife(){
               console.log("触发 ...")
           }
        },
        components:{
            slotDemo,
            inputCustom,
            modelVue
        },
        beforeRouteEnter(to,form,next){
            console.log('beforeRouteEnter ...') 
            next()
        },
        beforeRouteUpdate(to,form,next){
            console.log('beforeRouteUpdate ...')
            next()
        },
        beforeRouteLeave(to,form,next){
            console.log('beforeRouteLeave ...')
            next()
        }
    }
</script>