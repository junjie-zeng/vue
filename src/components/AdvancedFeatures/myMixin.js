

export default {
    data(){
        return{
            mixinTitle:'hello mixin'
        }
    },
    created(){
        console.log('hello mixin...')
    },
    methods:{
        run(){
            console.log('mixin run ...')
        }
    }
}