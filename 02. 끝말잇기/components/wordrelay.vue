<template>
  <div class="container">
    <p class="main-word">{{word}}</p>
    <form @submit.prevent="wordCheck">
      <div>
        <input type="text" v-model="input" ref="answer">
        <button><i class="fas fa-arrow-right right"></i></button>
      </div>
    </form>
    <p class="result" :class="{correct:redo}">{{result}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      word:'김병우',
      input:'',
      result:'',
      redo:true
    }
  },
  methods:{
    wordCheck(){
      if(this.word[this.word.length - 1] === this.input[0]){
        this.word = this.input;
        this.input = ''
        this.result = "정답! 계속하세요"
        this.$refs.answer.focus()
        this.redo = true
      }else{
        this.input = ''
        this.result = "다시 생각해보세요"
        this.$refs.answer.focus()
        this.redo = false
      }
    },
  }
}
</script>

<style scoped>
  .container{display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;}
  .main-word{padding: 1rem 0; font-size: 17px; font-weight: bold; color: #1b262c;}
  form div{display: flex; border: 1px solid #000; border-radius: 5px;}
  form div input{border:none; font-size: 14px; color: #000;}
  form div button{background: none; width: 40px;}
  form div .right{font-size: 17px;}
  .result{padding: 13px 0; color: red; font-size: 15px;}
  .result.correct{color: #000;}
</style>