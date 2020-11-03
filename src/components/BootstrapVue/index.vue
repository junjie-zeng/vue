<template>
    <div>
        bootstrap vue
        <hr>

        <b-button v-b-modal.modal-1>打开模态框</b-button>
        <!-- 默认 -->
        <b-modal id="modal-1" title="Test模态框">
            <div>
                ...
            </div>
        </b-modal>
        <!-- $bvModal对象 -->
        <b-button @click="$bvModal.show('modal-2')">打开模态框</b-button>
        <!-- 自定义 -->
        <b-modal 
            id="modal-2" 
            title="Test模态框"
            @ok="_ok"
            @show="_show"
            @hidden="_hidden"
            centered
            hide-footer
             
            modal-class="custom-modal"
            >
            <!-- deafult 放置主要内容 -->
            <template v-slot:default="{ hide, ok }">
                ...
                <b-button @click="hide">hide</b-button>
                <b-button @click="ok">ok</b-button>
            </template>


            
        </b-modal>
        <!-- 

            $bvModal对象
            centered：模态框在视口中垂直居中
            常用属性

                hide-header:隐藏头部
                hide-footer：隐藏页脚
                hide-header-close：隐藏关闭按钮
                hide-backdrop：取消遮罩
                visible：设置模态框默认可见状态

            常用插槽    
                default
            常用事件    

                @ok：模态框点击ok按钮触发
                @hideen:模态框隐藏触发
                @show：模态框显示触发

         -->
    </div>
    
</template>

<script>
import { BModal,BButton }  from 'bootstrap-vue'
export default {
    data(){
        return {

        }
    },
    methods:{
        _ok(){

        },
        _show(){

        },
        _hidden(){

        }
    },
    components:{
        'b-button':BButton,
        'b-modal':BModal
    }
}
</script>

<style >
    .custom-modal .modal-content{
        width: 300px;
        height: 200px;
        margin: 0 auto;
    }
</style>