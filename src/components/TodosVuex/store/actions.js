// 包含提交mutions的函数对象

import {ADD_TODO,DELETE_TODO,DELETE_ALL_COMPLETE,CHECK_ALL,GET_TODOS} from './mutation-types'
// 工具
import storageUtils from '../utils/storageUtil'
export default {
    // 模拟数据来自后台
    getTodos({commit}){
        var todos = storageUtils.getTodos()
        setTimeout(()=>{
            commit(GET_TODOS,{todos})
        },1000)
    },
    // 添加
    addTodo({commit},todo){
        //console.log(todo)
        commit(ADD_TODO,{todo})
    },
    // 删除
    deleteItem({commit},index){
        //console.log(index)
        commit(DELETE_TODO,{index})
    },
    // 删除所有已完成
    deleteAllComplete({commit}){
        commit(DELETE_ALL_COMPLETE)
    },
    // 全选/全不选
    checkAll({commit},check){
        commit(CHECK_ALL,{check})
    }
}