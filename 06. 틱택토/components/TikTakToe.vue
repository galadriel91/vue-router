<template>
  <div class="container">
    <h2 class="title">틱택토!</h2>
    <table-component :GAMETABLE="gameTable"></table-component>
    <div class="turn"><strong>{{turn}}</strong>님의 차례입니다.</div>
    <div v-if="result" class="result">{{result}}</div>
  </div>
</template>

<script>
import TableComponent from './TableComponent'
export default {
    components:{
      TableComponent
    },
    data(){
        return{
            gameTable:[
                ["","",""],
                ["","",""],
                ["","",""]
                ],
            turn:"O",
            result:''
        }
    }
}
</script>

<style scoped>
    .title{padding: 10px 0; font-size: 20px; color: #000;}
    .container{display: flex; height: calc(100vh - 50px); justify-content: center; align-items: center; flex-direction: column;}
    .turn{padding: 10px 0; font-size: 20px; color: #000;}
    .result{padding: 10px 0; font-size: 14px; color: #000;}
</style>