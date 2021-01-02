<template>
  <tr>
      <td-component v-for="(cellData , cellIndex) in GAMETABLE[rowIndex]" :key="cellIndex" :cellIndex="cellIndex" :rowIndex="rowIndex" :cellData="cellData"></td-component>
  </tr>
</template>

<script>
import TdComponent from './TdComponent'
export default {
    props:{
        rowIndex:{
            type:Number
        }
    },
    components:{
        TdComponent,
    },
    computed:{
        GAMETABLE(){
            return this.$store.state.gameTable
        }
    }
}
</script>

<style>

</style>