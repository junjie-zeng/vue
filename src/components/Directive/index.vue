<template>
    <ul v-is-select>
        <!-- <li v-for="(item,index) in colors" :key = "index" :class = "[{'active':currentIndex==index}]" @click="currentIndex = index">{{item}}</li> -->
        <li v-for="(item,index) in colors" :key = "index" >{{item}}</li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            currentIndex:0,
            colors:['blue','pink','red']
        }
    },
    directives:{
        isSelect:{
            bind(el,binding){
                console.log(el)
                console.log(binding)

                el.childNodes.forEach((element,index) => {
                    element.currentIndex = index
                });

                el.childNodes[0].classList.add('active')

                el.addEventListener('click',(ev)=>{
                    // console.log(el.childNodes[ev.target.currentIndex])
                    // el.childNodes[ev.target.currentIndex].classList.add('active')
                    el.childNodes.forEach((element,index) => {
                        if(element.classList.contains('active')){
                            element.classList.remove('active')
                        }
                    });
                    ev.target.classList.add('active')
                })

            },
            update(el,binding){
                console.log(el)
                console.log(binding)
            },
            componentUpdated(el,binding){
                console.log(el)
                console.log(binding)
            }
        }
    }
}
</script>
<style >
    .active{
        color: orangered;
    }
</style>