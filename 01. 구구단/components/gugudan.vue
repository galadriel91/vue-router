<template>
  <div class="container">
    <div class="game-wrap">
      <span class="first">{{first}}</span>
      곱하기
      <span class="second">{{second}}</span>는?
    </div>
    <form @submit.prevent="getCheck">
      <div>
        <input type="text" v-model.number="answer" ref="input">
        <button><i class="fas fa-arrow-right right"></i></button>
      </div>
    </form>
    <p class="result">{{result}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      answer : '',
      result: '',
    }
  },
  methods:{
    getCheck(){
      if(this.first * this.second === this.answer){
        this.answer = '';
        this.first = Math.ceil(Math.random() * 9);
        this.second = Math.ceil(Math.random() * 9);
        this.result = "정답입니다."
        this.$refs.input.focus()
      }else{
        this.answer = '';
        this.result = "다시 생각해보세요."
        this.$refs.input.focus()
      }
    }
  }
}
</script>

<style scoped>
  .container{display: flex; height: 100vh; justify-content: center; align-items: center; flex-direction: column;}
  .game-wrap{padding: 1rem 0; font-size: 17px; font-weight: bold; color: #1b262c;}
  .first , .second{color: #3282b8;}
  form div{display: flex; border: 1px solid #000; border-radius: 5px;}
  form div input{border:none; font-size: 14px; color: #000;}
  form div button{background: none; width: 40px;}
  form div .right{font-size: 17px;}
  .result{padding: 13px 0; color: #000; font-size: 15px;}
</style>