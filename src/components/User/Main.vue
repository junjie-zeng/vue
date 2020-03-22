<template>
    <div>
        <h2 v-if="firstView">请输入搜索关键字</h2>
        <h2 v-if="loading">搜索中，请稍后....</h2>
        <h2 v-if="errMsg">{{errMsg}}</h2>
        <div class="row" v-if="users.length">
            
            <div class="card" v-for="(user,index) in users" :key = "index">
                <a :href="user.url" target="_blank">
                <img :src="user.img" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import PubSub from 'pubsub-js'
export default {
    data(){
        return{
            firstView:true,
            loading:false,
            users:[],
            errMsg:''
        }
    },
    mounted(){
        this._searchUser()
    },
    methods:{
         _searchUser(){
            // 订阅（接收消息） 
            PubSub.subscribe('searchName',(msg,searchName)=>{

                // 搜索前
                this.firstView = false
                this.loading = true
                // 搜索前清空前一次保留的数据
                this.users = []
                this.errMsg = ''
                // todo 接口有问题
                const url = `https://api.github.com/search/users?q=${searchName}`
                // 发送ajax请求进行搜索
                axios.get(url).then((data)=>{
                    console.log(data)
                    // 更新数据成功后
                    this.loading = false;
                    // 搜索成功后通过map组装自己想要的数据(直接返回一个对象需要用；一个大括号抱起来不然会被当做一个函数体)
                    this.users = data.data.map((item)=>({
                        name:item.name,
                        url:item.url,
                        img:item.img

                    }))
                }).catch((err)=>{
                    //console.log(err)
                    // 更新数据失败后
                    this.loading = false;
                    this.errMsg = err
                })
            })
         }
    },
   
}
</script>
<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>