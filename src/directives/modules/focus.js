
// 获取焦点
export default{
    // 只调用一次，指令第一次绑定元素时调用。在这里可以进行初始化设置
    bind(el,binding,vnode){
       
    },
    // 被绑定的元素插入父节点时调用
    inserted(el,binding,vnode){
        el.focus()
    },
    // 所在组件的vnode更新时调用
    update(el,binding,vnode){

    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated(el,binding,vnode){

    },
    // 只调用一次，指令与元素解绑时调用
    unbind(el,binding,vonde){

    }
}