<template>
    <div style = "border:solid 1px gray;width:600px;height:200px;">
        <div>孙子组件方式$attrs：{{$attrs}}</div>
        <div>孙子组件方式：{{current.text}}</div>
    </div>
</template>

<script>
    export default {
        inject:['current'],
        data(){
            return {

            }
        },
        mounted(){
            this.$listeners.updateNmae()
            console.log(this.$listeners)

            
        }

    }

    
</script>