<template>
    <div style="padding:10px">
        <h2>vuex 实现简单的计数器</h2>
        <span>当前 （{{$store.state.count}}） 是{{countType}}</span>
        <button @click = "increase">+</button>
        <button @click = "decrease">-</button>
        <button @click = "oddNumber">奇数+</button>
        <button @click = "asyncAdd">异步+</button>
    </div>
</template>
<script>
export default {
    mounted(){
        //console.log(this.$store)
    },
    methods:{
        // 增加
        increase(){
            this.$store.dispatch('increase')
        },
        // 减少
        decrease(){
            this.$store.dispatch('decrease')
        },
        // 奇数增加
        oddNumber(){
            this.$store.dispatch('oddNumber')
        },
        // 异步增加
        asyncAdd(){
            this.$store.dispatch('asyncAdd')
        }
    },
    computed:{
        // 数字类型
        countType(){
            //console.log(this.$store.getters)
            // 获取store中getters中定义的计属性
            return this.$store.getters.getCountType
        }
    }
}
</script>
<style>

</style>