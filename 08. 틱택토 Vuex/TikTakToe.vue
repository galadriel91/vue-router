<template>
  <div class="container">
    <h2 class="title">틱택토!</h2>
    <table-component></table-component>
    <div class="turn"><strong>{{turn}}</strong>님의 차례입니다.</div>
    <div v-if="result" class="result">{{result}}</div>
  </div>
</template>

<script>
import { store }  from './store/index'
import TableComponent from './components/TableComponent'
import { mapState } from 'vuex'
export default {
    components:{
      TableComponent
    },
    computed:{
      ...mapState(['turn' , 'result'])
    },    
    store,
}
</script>

<style scoped>
    .container{display: flex; height: calc(100vh - 50px); justify-content: center; align-items: center; flex-direction: column;}
    .title{padding: 10px 0; font-size: 20px; color: #000;}
    .turn{padding: 10px 0; font-size: 20px; color: #000;}
    .result{padding: 10px 0; font-size: 14px; color: #000;}
</style>