<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:{
        rowIndex:{
            type:Number
        },
        cellIndex:{
            type:Number
        },
        cellData:{
            type:String
        }
    },
    computed:{
        ...mapState(['gameTable' , 'turn'])
    },
    methods:{
        onClickTd(){
            if(this.cellData){
                return
            }
            this.$store.commit('SET_FILLTURN' , {row:this.rowIndex , cell:this.cellIndex})
            let win = false    
            // 가로가 같을 경우 승리
            if(this.gameTable[this.rowIndex][0] === this.turn &&
               this.gameTable[this.rowIndex][1] === this.turn &&
               this.gameTable[this.rowIndex][2] === this.turn){
                   win = true
               }
            // 세로가 같을 경우 승리
            if(this.gameTable[0][this.cellIndex] === this.turn &&
               this.gameTable[1][this.cellIndex] === this.turn &&
               this.gameTable[2][this.cellIndex] === this.turn){
                   win = true
               }
            // 좌대각선이 같을 경우 승리
            if(this.gameTable[0][0] === this.turn &&
               this.gameTable[1][1] === this.turn &&
               this.gameTable[2][2] === this.turn){
                   win = true
               }
            // 우대각선이 같을 경우 승리
            if(this.gameTable[0][2] === this.turn &&
               this.gameTable[1][1] === this.turn &&
               this.gameTable[2][0] === this.turn){
                   win = true
               }
            if(win){
                this.$store.commit('SET_GAME')
            }else{
                let all = true
                this.gameTable.forEach(row => row.forEach(cell => {
                    if(!cell){
                        all = false
                    }
                }));
                if(all){
                    this.$store.commit('SET_DRAW')
                }else{
                    this.$store.commit('SET_TURN')
                }
            }               
        }
    }
}
</script>

<style scoped>
    td{border: 1px solid #000; border-collapse: collapse; font-size: 20px; width: 33.333%; height: 33.333%; color: #000;} 
</style>