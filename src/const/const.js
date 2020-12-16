import { TITLE } from './type'

export default {
    install(Vue, options) {
        Vue.prototype.global = {
            title: '我是全局的  ' + TITLE
        }
    }
}