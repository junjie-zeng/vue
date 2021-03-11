<template>
    <div style = "border:solid 1px pink;width:800px;height:300px;padding:20px;">
        子组件：{{info}}
        <Grandson v-bind = "$attrs" v-on = "$listeners" :info2 = "info2" style="color:red"/>
    </div>
</template>

<script>
  
    import Grandson from './Grandson'
    export default {
        props:['info'],
        inheritAttrs: false,
        data(){
            return {
                info2:{name:'child'}
            }
        },
        components:{
            Grandson
        }
    }
</script>