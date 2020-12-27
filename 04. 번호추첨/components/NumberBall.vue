<template>
  <div class="container-wrap">
      <div class="ball" :style="{background:styleBackground}">{{number}}</div>
  </div>
</template>

<script>
export default {
    props:{
        number:{
            type:Number,
        }
    },
    computed:{  
        styleBackground(){
            let background = null
            if(this.number < 10){
                return background = '#ec524b'
            }else if(this.number < 20){
                return background = '#f5b461'
            }else if(this.number < 30){
                return background = '#f3eac2'
            }else if(this.number < 40){
                return background = '#9ad3bc'
            }else{
                return background ='#fcf876'
            } 
        }
    }
}
</script>

<style scoped>
    .container-wrap {display: inline-block; margin: 0 5px; color: #000; font-size: 15px;}
    .ball{width: 45px; height: 45px; border: 1px solid #000; border-radius: 50%; line-height: 45px; text-align: center;}
</style>