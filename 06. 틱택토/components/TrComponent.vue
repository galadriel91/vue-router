<template>
  <tr>
      <td-component v-for="(cellData , cellIndex) in rowItem" :key="cellIndex" :cellIndex="cellIndex" :rowIndex="rowIndex" :cellData="cellData"></td-component>
  </tr>
</template>

<script>
import TdComponent from './TdComponent'
export default {
    props:{
        rowIndex:{
            type:Number
        },
        rowItem:{
            type:Array
        }
    },
    components:{
        TdComponent,
    },
}
</script>

<style>

</style>