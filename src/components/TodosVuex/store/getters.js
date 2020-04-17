
// 计算属性
export default {
    completeSize({todos}){
        return  todos.reduce((total,todo)=> total + (todo.complete ? 1 :0 ),0)
    },

    // check({todos},gettes){
    //     //console.log(gettes)
    //     gettes.completeSize == todos.length && gettes.completeSize > 0
    // }
}