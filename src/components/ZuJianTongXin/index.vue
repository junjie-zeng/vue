<template>
    <div style = "border:solid 1px gray;width:900px;height:300px;padding:20px;">
        父组件
        <div>姓名：{{info.name}}</div>
        
        <Child :info = "info" title="哈哈哈" @updateNmae="updateNmae" @updateAge = "updateAge"/>
    </div>
</template>

<script>
    import Child from './Child'
    export default {
        provide:{
            current:{
                text:'provide/inject',
            }
        },
        data(){
            return {
                info:{
                    name:'小明',
                    age:18
                }
            }
        },
        methods:{
            updateNmae(){
                this.info.name = '小明真浪 。。。。'
            },
            updateAge(){
                this.info.age = 20
            }
        },
        components:{
            Child
        }
    }
</script>