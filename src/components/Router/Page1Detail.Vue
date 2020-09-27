<template>
    <div>
        <p>{{msg ? msg :'普通路径跳转'}}</p>
        <p>{{$route.params }}</p>
        <p>{{$route.query }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:null
        }
    },
    mounted(){
        console.log(this)
    }
}
</script>
<style>

</style>