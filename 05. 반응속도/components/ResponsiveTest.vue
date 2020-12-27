<template>
  <div class="container">
      <h2>반응속도 체크</h2>
      <div id="screen" :class="state" @click="onClickScreen">
          <p class="message">{{message}}</p>
      </div>
      <div>
          <div class="status"><span>횟수 : <strong>{{time.length}}</strong>회,</span> <span>반응속도 : <strong>{{Average}}ms</strong></span></div>
          <button class="reset" @click="onClickReset">초기화</button>
      </div>
  </div>
</template>

<script>
let timeout;
let startTime;
let endTime;
export default {
    data(){
        return{
            state:'waiting',
            message:'클릭해서 시작하세요',
            time:[]
        }
    },
    computed:{
        Average(){
            return this.time.reduce((a,b)=>a+b , 0) / this.time.length || 0
        }
    },
    methods:{
        onClickScreen(){
            if(this.state === 'waiting'){
                this.state = 'ready'
                this.message = "노란색으로 바뀌면 클릭하세요"
                timeout = setTimeout(()=>{
                    startTime = Date.now()
                    this.state = "now",
                    this.message = "지금 클릭!"
                },Math.floor(Math.random()*1000)+2000)
            }else if(this.state === "ready"){
                clearTimeout(timeout)   
                this.state = "waiting"
                this.message = "빨리 클릭하셨습니다! 눌러서 다시 시작하세요"    
            }else if(this.state === "now"){
                endTime = Date.now()
                this.state = "waiting"
                this.message = "클릭해서 시작하세요"
                this.time.push(endTime - startTime)
            }
        },
        onClickReset(){
            this.time = []
        }
    }
}
</script>

<style scoped>
    .container{display: flex; justify-content: center; align-items: center; height: calc(100vh - 50px); flex-direction: column;}
    .container h2{padding: 10px 0; color: #000;}
    .message{padding: 7px 0; text-align: center;  font-size:14px; font-weight: bold; }
    .status{padding: 8px 0; font-size: 14px;}
    .reset{margin: 0 auto; padding: 5px; display: block; width: 50px; background: #f3eac2; text-align: center; color: #000; border-radius: 5px;}
    #screen{width: 300px; height: 300px; border-radius: 10px; color: #495464;}
    #screen.waiting{background: #9ad3bc;}
    #screen.ready{background: #ec524b; color: #fff;}
    #screen.now{background: #f5b461;}
</style>