<template>
    <div>
        <h1>bootstrap vue</h1>
        <hr>
        <h3>按钮</h3>
        <div class="btn-box">
            <b-button variant="light" size="sm">按钮</b-button>
        </div>
        
        <hr>
        <h3>下拉框</h3>
        <div class="dropdown-box">
            <div class="">
                <b-dropdown  text="微信" size="sm" class="__dropdown" toggle-class="__toggle"  menu-class ="__menu" >
                    <b-dropdown-item>微信</b-dropdown-item>
                    <b-dropdown-item>qq</b-dropdown-item>
                    <b-dropdown-item>地区</b-dropdown-item>
                    <b-dropdown-divider>职位</b-dropdown-divider>
                    <b-dropdown-item active>邮箱</b-dropdown-item>
                    <b-dropdown-item disabled>城市</b-dropdown-item>
                </b-dropdown>
            </div>

            <div class="we-item-search">
                <b-dropdown    class="drop-item" variant = "light"  toggle-class="we-select-box"  menu-class ="we-drop-list">
                    <template v-slot:button-content>
                        <em>姓名</em>
                        <i class="iconfont iconsanjiao"></i>
                    </template>
                    <b-dropdown-item>微信</b-dropdown-item>
                    <b-dropdown-item>qq</b-dropdown-item>
                    <b-dropdown-item>地区</b-dropdown-item>
                    <b-dropdown-divider>职位</b-dropdown-divider>
                    <b-dropdown-item active>邮箱</b-dropdown-item>
                    <b-dropdown-item disabled>城市</b-dropdown-item>
                </b-dropdown>
            </div>
            
        </div>
        <hr>
        <h3>模态框基本使用</h3>
        <div class="modal-box">
            <b-button v-b-modal.modal-1>v-b-modal方式打开模态框</b-button>
            <!-- 默认 -->
            <b-modal id="modal-1" title="Test模态框">
                <div>
                    ...
                </div>
            </b-modal>
            <!-- $bvModal对象 -->
            <b-button @click="$bvModal.show('modal-2')">bvModal对象方式打开模态框</b-button>
            <b-modal 
                id="modal-2" 
                title="Test模态框"
                centered
                hide-footer
                hide-header
                modal-class="custom-modal"
                >

                <div style="border:solid 1px red;padding:5px">
                    自己的内容<br>
                    <b-button @click="$bvModal.hide('modal-2')">隐藏</b-button>
                    <b-button @click="$bvModal.hide('modal-2')">确定</b-button>
                </div>

            </b-modal>
        
            <!-- ref -->
            <b-button @click="setModal('modal3','show')">$refs打开模态框</b-button>
            <b-modal ref = "modal3" title="Test模态框">
                <div>
                    ...
                    <b-button @click="setModal('modal3','hide')">关闭模态框</b-button>
                </div>
            </b-modal>

            <!-- v-model -->
            <b-button @click="setModalShow(true)">v-model打开方式</b-button>

            <b-modal v-model="modalShow" hide-header hide-footer>
                Hello word
                <b-button @click="setModalShow(false)">关闭</b-button>
            </b-modal>

            <!-- $root方式 -->
            <b-button @click="modal4('bv::show::modal','modal4')">$root打开方式</b-button>

            <b-modal id = "modal4" >
                Hello word
                <b-button @click="modal4('bv::hide::modal','modal4')">关闭</b-button>
            </b-modal>

            <!-- 插槽 -->
            <b-button @click="$bvModal.show('modal-5')">插槽自定义模态框</b-button>
            <b-modal 
                id="modal-5" 
                title="Test模态框"
                @ok="_ok"
                @show="_show"
                @hidden="_hidden"
                centered
                modal-class="custom-modal"
                >


                ......插槽
                <template v-slot:modal-footer="{ hide, ok }">
                    
                    <b-button @click="hide">隐藏</b-button>
                    <b-button @click="ok">确定</b-button>
                </template>

            </b-modal>

            <!--
                消息框

                this.$bvModal对象上提供了一些内置的消息框方法。 
                这些方法提供了一种从应用程序中的任何位置生成简单的“确定”和“确认”样式模式消息的方法，
                而无需在页面中显式放置<b-modal>组

            -->
            <br>
            <b-button @click="customMsg1">包含内容与按钮</b-button>
            <b-button @click="customMsg2">包含内容和基本样式</b-button>
            <br>
            <b-button @click="customMsg3">包含内容和确定与取消按钮</b-button>
            <b-button @click="customMsg4">包含内容和确定与取消按钮和基本样式</b-button>

            <!-- 

                
                模态框打开方式
                    使用v-b-modal 指令
                    $bvModal对象：当BootstrapVue作为插件安装或使用ModalPlugin插件时， BootstrapVue将向每个Vue实例（组件、应用程序）注入$bvModal对象
                    使用ref属性访问modal，然后调用show(), hide()或 toggle()方法
                    v-model属性，注：不要同时使用visible属性
                    $root
                    

                    注:建议使用this.$bvModal.show()和 this.$bvModal.hide()，而不要使用$ref方法。

                
                常用属性

                    hide-header:隐藏头部
                    hide-footer：隐藏页脚
                    hide-header-close：隐藏关闭按钮
                    hide-backdrop：取消遮罩
                    visible：设置模态框默认可见状态
                    scrollable:创建一个可滚动的模态框
                    centered：模态框在视口中垂直居中
                    no-fade:取消打开和关闭的动画

                自定义类
                    
                    modal-class：模态css类
                    body-class：body csss类
                    content-class：内容css类
                    title-class：标题css类
                    header-class:头部css类
                   
                使用插槽
                    default：主体内容
                    modal-title：设置标题中的内容
                    modal-header：设置头部内容
                    modal-footer：设置底部内容
                    modal-ok：设置确定按钮内容
                    modal-cancel：设置取消按钮内容
                    modal-header-close：设置关闭按钮内容


                常用事件    

                    @ok：模态框点击ok按钮触发
                    @hideen:模态框隐藏触发
                    @show：模态框显示触发

            -->
        </div>
        
    </div>
    
</template>

<script>
import { BModal,BButton ,BDropdown,BDropdownItem}  from 'bootstrap-vue'
export default {
    data(){
        return {
            modalShow:false
        }
    },
    methods:{
        _ok(ev){


        },
        _show(){

        },
        _hidden(){

        },
        setModal(e,type){
            // console.log(this.$refs)
            this.$refs[e][type]()
        },
        setModalShow(modalShow){
            this.modalShow = modalShow
        },
        modal4(e,id){
            this.$root.$emit(e,id)
        },
        customMsg1(){
            this.$bvModal.msgBoxOk('hello word', {

            }).then((res)=>{
                console.log(res)
            })
        },
        customMsg2(){
            this.$bvModal.msgBoxOk('hello word', {
                title: '标题',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'success',
                headerClass: 'p-2 border-bottom-0',
                footerClass: 'p-2 border-top-0',
                centered: true
            }).then((res)=>{
                console.log(res)
            })
        },
        customMsg3(){
            this.$bvModal.msgBoxConfirm('您确定吗',{}).then((res)=>{
                console.log(res)
            })
        },
        customMsg4(){
            this.$bvModal.msgBoxConfirm('您确定吗',{
                title: '请确定',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'YES',
                cancelTitle: 'NO',
                footerClass: 'p-2',
                modalClass:'hhhhhhhhhhhhh',
                hideHeaderClose: false,
                centered: true,
                busy:true
            }).then((res)=>{
                console.log(res)
            })
        }
    },
    components:{
        'b-button':BButton,
        'b-modal':BModal,
        'b-dropdown':BDropdown,
        'b-dropdown-item':BDropdownItem
    }
}
</script>

<style >
    .custom-modal .modal-content{
        width: 300px;
        height: 200px;
        margin: 0 auto;
    }
    .modal-box button{
        margin: 5px 0;
    }

    .dropdown-box>div{
        margin: 5px 0;
    }
    /* dropdown */
    .__dropdown{

    }
    .__menu{

    }

    .__toggle{

    }


    
</style>