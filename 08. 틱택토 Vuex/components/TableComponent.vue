<template>
  <table>
      <tr-component v-for="(rowItem,rowIndex) in GAMETABLE" :key="rowIndex" :rowIndex="rowIndex"></tr-component>
  </table>
</template>

<script>
import TrComponent from './TrComponent'
export default {
    components:{
        TrComponent,
    },
    computed:{
        GAMETABLE(){
            return this.$store.state.gameTable
        }
    }
}
</script>

<style scoped>
    table{width: 300px; height: 300px; border: 1px solid #000; text-align: center;}
</style>