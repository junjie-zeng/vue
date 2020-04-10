/*
    -- store 仓库，就是一个容器
    -- 流程
        - 读取流程
            -- $store.state.count --->view
        - 更新流程
            -- view事件（increase调用dispatch('actionName')） --> actions(commit('mutationsName')更新state) ---> 页面显示
    
    -- mutations必须是一个通过的函数
        - 因为当mutations被触发的时候，回调函数还没有被调用（devtools不知道回调函数什么时候调用，实质上任何在回调函数中进行状态的改变都是不可追踪的）

    -- actions
        - 提交的是mutation,而不是直接变更状态
        - 可以包含任意异步操作
 */
import Vue from 'vue'
import Vuex from 'vuex'
// 挂载vuex
Vue.use(Vuex)


const state = {
    count:0
}

// 更新state的状态
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
        //console.log("getter中",state)
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
