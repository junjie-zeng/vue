<template>
    <div>
        <p class="text-primary">详情</p>
        <p class="text-muted">{{user.detail}}</p>
        <p class="text-muted">{{user.age}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:{}
        }
    },
    mounted(){
        console.log("detail mounted ...",this)
        // $route 代表路由组件（从该路由组件中获取param参数）*1是因为取出来的是一个字符串，所以进行隐式转换
        const id = this.$route.params.id * 1
        this._getData(id);
    },
    methods:{
        _getData(id){
            // 模拟数据来自后台
            setTimeout(()=>{
                const  users = [
                    {id:1,age:15,detail:'content。。。。'},
                    {id:2,age:10,detail:'Hello 。。。。'},
                    {id:3,age:12,detail:'why 。。。。'}
                ]
                // find 根据id去查找某一个并返回
                this.user = users.find(item=>item.id === id)

            },100)

        }
    },
    beforeRouteUpdate (to,form,next){ // 守卫
        console.log(to.params.id)
    },
    watch:{
        $route:{
            handler:function(route){
                const id = route.params.id * 1
                this._getData(id)
            }
        }
    }

}
</script>
<style >

</style>