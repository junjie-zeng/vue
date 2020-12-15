<template>
    <div>
        <input type="text" :value="name" @input = "$emit('ipt',$event.target.value)">
    </div>
</template>
<script>
export default {
    model:{
        prop:'name',
        event:'ipt'
    }, 
    props:['name'],
    data(){
        return{
            
        }
    },
    created(){
        console.log(this.name)
    }
}
</script>>