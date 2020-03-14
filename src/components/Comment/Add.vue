<template>
    <div class="col-md-4">
    <form class="form-horizontal">
        <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model = "name">
        </div>
        <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model = "title"></textarea>
        </div>
        <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default pull-right" @click="addItem">提交</button>
        </div>
        </div>
    </form>
    </div>
</template>

<script>
export default {
    props:{
        add:Function,
        
    },
    data(){
        return{
            name:'',
            title:''
        }
    },
    methods:{
        // 添加
        addItem(){
            //取出表单内容
            const {name, title,add } = this;
            if(!name || !title){
                alert("内容不能为空");
                return 
            }
            // 组合对象
            const obj = {
                name,
                title
            }
            // 调用添加方法
            add(obj);
            // 清除表单数据
            this.name = '';
            this.title = '';



        }
    }
    
}
</script>

<style>

</style>