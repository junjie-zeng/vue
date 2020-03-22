/**
 * 
 * 工具对象
 *  -- 向外暴露一个函数（只有一个功能）
 *  -- 向外暴露一个对象（包含多个功能）
 */

const TODO_KEY = "todo_key"

 export default {
     setTodos:function(todo){
        localStorage.setItem(TODO_KEY,JSON.stringify(todo)); // 设置本地存储数据
     },
     getTodos:function(){
         return JSON.parse(localStorage.getItem(TODO_KEY) || '[]') //读取localStorage保存的数据
     }
 }