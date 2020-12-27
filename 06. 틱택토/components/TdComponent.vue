<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
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
    methods:{
        onClickTd(){
            if(this.cellData){
                return
            }
            const rootData = this.$root.$data;
            this.$set(rootData.gameTable[this.rowIndex] , [this.cellIndex] , rootData.turn)
            let win = false    
            // 가로가 같을 경우 승리
            if(rootData.gameTable[this.rowIndex][0] === rootData.turn &&
               rootData.gameTable[this.rowIndex][1] === rootData.turn &&
               rootData.gameTable[this.rowIndex][2] === rootData.turn){
                   win = true
               }
            // 세로가 같을 경우 승리
            if(rootData.gameTable[0][this.cellIndex] === rootData.turn &&
               rootData.gameTable[1][this.cellIndex] === rootData.turn &&
               rootData.gameTable[2][this.cellIndex] === rootData.turn){
                   win = true
               }
            // 좌대각선이 같을 경우 승리
            if(rootData.gameTable[0][0] === rootData.turn &&
               rootData.gameTable[1][1] === rootData.turn &&
               rootData.gameTable[2][2] === rootData.turn){
                   win = true
               }
            // 우대각선이 같을 경우 승리
            if(rootData.gameTable[0][2] === rootData.turn &&
               rootData.gameTable[1][1] === rootData.turn &&
               rootData.gameTable[2][0] === rootData.turn){
                   win = true
               }
            if(win){
               rootData.result=`${rootData.turn}님의 승리입니다!`,
               rootData.gameTable = [
                        ["","",""],
                        ["","",""],
                        ["","",""]
                    ],
                rootData.turn="O"
            }else{
                let all = true
                rootData.gameTable.forEach(row => row.forEach(cell => {
                    if(!cell){
                        all = false
                    }
                }));
                if(all){
                    rootData.result="무승부 입니다",
                    rootData.gameTable = [
                                ["","",""],
                                ["","",""],
                                ["","",""]
                            ],
                    rootData.turn="O"
                }else{
                    rootData.result = ''
                    rootData.turn = rootData.turn === "O" ? "X" : "O"
                }
            }               
        }
    }
}
</script>

<style scoped>
    td{border: 1px solid #000; border-collapse: collapse; font-size: 20px; width: 33.333%; height: 33.333%; color: #000;} 
</style>