/*
    -- store 仓库，就是一个容器
    -- 流程
        - 读取流程
            -- $store.state.count --->view
        - 更新流程
            -- view事件（increase调用dispatch('actionName')） --> actions(commit('mutationsName')更新state) ---> 页面显示
*/
import Vue from 'vue'
import Vuex from 'vuex'
// 挂载vuex
Vue.use(Vuex)


const state = {
    count:0
}

// 更新state的方法
const mutations = {
    // 增加
    INCREASE(state){
        state.count ++
    },
    // 减少
    DECREASE(state){
        state.count --
    }
}

// 
const actions = {
    // 增加
    increase({commit}){
        commit('INCREASE')
    },
    // 减少
    decrease({commit}){
        commit('DECREASE')
    },
    // 奇数增加
    oddNumber({commit,state}){
        if(state.count % 2 != 0){
            commit('INCREASE')
        }
    },
    // 异步增加
    asyncAdd({commit}){
        setTimeout(() => {
            commit('INCREASE')
        }, 1000);
    }
}

// 计算属性
const getters = {
    getCountType(state){
        console.log("getter中",state)
        return state.count % 2 == 0 ? '偶数' : '奇数'
    }
}

// 创建vuex对象
const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters

})

// 在main.js中引入了
export default store
