import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        gameTable:[
            ["","",""],
            ["","",""],
            ["","",""]
        ],
        turn:"O",
        result:''
    },
    mutations:{
        SET_TURN(state){
            state.result = ""
            state.turn = state.turn === "O" ? "X" : "O"
        },
        SET_GAME(state){
            state.result = `승자는${state.turn}님 입니다.`
            state.turn = "O",
            state.gameTable = [
                ["","",""],
                ["","",""],
                ["","",""]
            ]
        },
        SET_FILLTURN(state, {row, cell}){
            Vue.set(state.gameTable[row] , cell , state.turn)
        },
        SET_DRAW(state){
            state.result = "무승부 입니다"
            state.turn = "O",
            state.gameTable = [
                ["","",""],
                ["","",""],
                ["","",""]
            ]
        }
    }
})
