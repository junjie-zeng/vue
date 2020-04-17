// 包含多个更新状态的mutations

import {ADD_TODO,DELETE_TODO,DELETE_ALL_COMPLETE,CHECK_ALL,GET_TODOS} from './mutation-types'
export default {
    [GET_TODOS](state,{todos}){
        state.todos = todos
    },
    // 添加
    [ADD_TODO](state,{todo}){
        // console.log(state)
        // console.log(todo)
        state.todos.unshift(todo)
    },
    // 删除
    [DELETE_TODO](state,{index}){
        state.todos.splice(index,1)
    },
    // 删除已完成
    [DELETE_ALL_COMPLETE](state){
        state.todos = state.todos.filter(todo=>!todo.complete) // 过滤未完成的任务
    },
    // 全选/全不选
    [CHECK_ALL](state,{check}){
        state.todos.forEach(element => {
            element.complete = check
        });

    }
}