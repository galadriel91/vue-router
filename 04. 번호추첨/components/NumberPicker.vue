<template>
  <div class="container">
    <h2 class="title">버튼을 눌러서 번호를 뽑아보세요</h2>
    <button class="start-btn" v-if="start" @click="showBall"><i class="fas fa-play"></i></button>
    <div class="contents" v-else>
      <div class="ball-wrap">
        <number-ball v-for="(item , i) in pickball" :key="i" :number="item"></number-ball>
      </div>
      <div v-if="redo">
        <div class="bonus">보너스 숫자</div>
        <number-ball :number="bonus"></number-ball>
        <button @click="onClickRepick" class="reset"><i class="fas fa-redo-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
const getNumber = () => {
    // 번호를 뽑자.
    const candidate = Array(45).fill().map((v,i)=>v=i+1);
    const shupple = []    
    while(0 < candidate.length){
      const choice = candidate.splice(Math.floor(Math.random()*candidate.length) ,1)[0]
      shupple.push(choice)
    }
    const numberPick = [...shupple.slice(0,6) , shupple[shupple.length - 1]]
    return numberPick
}
let timeout = []

import NumberBall from './NumberBall'
export default {
  components:{
    NumberBall,
  },
  data(){
    return{
      number : getNumber(),
      pickball : [],
      bonus : '',
      redo:false,
      start:true
    }
  },
  methods:{
    showBall(){
      this.start = false
      for(let i = 0; i < this.number.length - 1 ; i++){
        timeout[i] = setTimeout(()=>{
          this.pickball.push(this.number[i])
        },(i+1)*1000)
      }
      timeout[6] = setTimeout(()=>{
        this.bonus = this.number[this.number.length - 1]
        this.redo = true
      },7000)
    },
    onClickRepick(){
      this.number = getNumber(),
      this.pickball = [],
      this.bonus = ''
      this.redo = false
      this.showBall()
    }
  },
  beforeDestroy(){
    timeout.forEach(v=>{
      clearTimeout(v)
    })
  }
}
</script>

<style scoped>
    button{cursor: pointer;}
    .container{display: flex; height: calc(100vh - 50px); justify-content: center; align-items: center; flex-direction: column;}
    .title{font-size: 20px; color: #495464;}
    .contents{padding: 20px 0; text-align: center;}
    .start-btn{margin: 10px 0 0; background: none; font-size: 40px; color: #3797a4;}
    .contents{padding: 20px 0; text-align: center;}
    .contents .bonus{padding: 10px 0; font-size: 14px; color: #000;}
    .contents .reset{margin: 10px auto; display: block; background: none; color: #000; font-size: 30px;}


</style>