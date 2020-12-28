<template>
  <div class="container">
    <h2 class="title">가위 바위 보 !</h2>
    <!-- <div id="screen" :style="{background: `url(/rsp.png) ${rspCode} -100px`}"> -->
    <div id="screen" :style="{background: `url(${require('@/assets/rsp.png')}) ${rspCode} -100px`}">


    </div>
    <div class="check-btn">
      <button @click="onClickBtn('가위')">가위</button>
      <button @click="onClickBtn('바위')">바위</button>
      <button @click="onClickBtn('보')">보</button>
    </div>
    <div class="score">현재 점수 : <strong>{{point}}</strong>점</div>
    <div class="result">{{this.result}}</div>
  </div>
</template>


<script>
const rspCode = {
  바위 : '-50px',
  보 : '-350px',
  가위 : '-650px'
}
const point = {
  바위 : -1,
  가위 : 0,
  보 : 1
}
let interval;

const cpuPick = (cpuPick) => {
  return Object.entries(rspCode).find(v=>v[1]===cpuPick)[0]
}

export default {
  data(){
    return{
      rspCode : rspCode.바위,
      point : 0,
      result:''
    }
  },
  methods:{
    onChangeScreen(){
      interval = setInterval(() => {
        if(this.rspCode === rspCode.바위){
        this.rspCode = rspCode.가위
        }else if(this.rspCode === rspCode.가위){
          this.rspCode = rspCode.보
        }else if(this.rspCode === rspCode.보){
          this.rspCode = rspCode.바위
        }
      }, 100);
    },
    onClickBtn(name){
      const playerPick = point[name]
      const cpuChoice = point[cpuPick(this.rspCode)] 
      const diff = playerPick - cpuChoice
    //   // 이기는 경우 , 가위 > 보 , 보 > 바위 , 바위 > 가위 (-1 , 2)
    //   // 비기는 경우  = 0
    //   // 지는 경우 , 보 < 가위 , 바위 < 보 , 가위 < 바위 (1 , -2)
     if(diff === 0){
       this.result = "비겼습니다."
     }else if([-1,2].includes(diff)){
       this.result = "이겼습니다"
       this.point += 1
     }else{
        this.result = "졌습니다"
        this.point -= 1
     }

      clearInterval(interval)
      setTimeout(this.onChangeScreen, 1500);

    }
  },
  mounted(){
    this.onChangeScreen()
  },
  beforeDestroy(){
    clearInterval(interval)
  }
}
</script>

<style scoped>
  .container{height: calc(100vh - 50px); display: flex; justify-content: center; align-items: center; flex-direction: column;}
  .title{color: #000; font-size: 18px;}
  .score{font-size: 14px; color: #000;}
  .result{font-size: 14px; color: #000;}
  #screen{width: 300px; height: 300px;  border-radius: 10px;}
  .check-btn{margin: 0 0 15px 0;}
  .check-btn button{width: 50px; height: 30px; background: none; border-radius: 10px; color: #000; cursor: pointer; font-size: 14px;}
  .check-btn button:nth-child(1){background: #9ad3bc;}
  .check-btn button:nth-child(2){margin: 0 5px; background: #ec524b;}
  .check-btn button:nth-child(3){background: #f5b461;}
</style>