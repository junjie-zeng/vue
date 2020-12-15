<template>
    <div style="border:solid 1px gray;margin:10px 0;width:200px;">
        <div>假如我是一个模态框</div>
        <button @click="close">关闭</button>
    </div>
</template>
<script>
export default {
    model:{
        prop:'ifShow',
        event:'ipt'
    },
    props:['ifShow'],
    data(){
        return {

        }
    },
    methods:{
        close(){
            this.$emit('ipt',false)
        }
    }
}
</script>

<style>

</style>