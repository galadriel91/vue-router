import Vue from 'vue'
import VueRouter from 'vue-router'

import WordGame from '../../../02. 끝말잇기/components/WordGame'
import NumberBaseball from '../../../03. 숫자야구/components/NumberBaseball'
import NumberPicker from '../../../04. 번호추첨/components/NumberPicker'
import ResponsiveTest from '../../../05. 반응속도/components/ResponsiveTest'
import TikTakToe from '../../../08. 틱택토 Vuex/TikTakToe'
import RspGame from '../../../07. 가위바위보/components/RspGame'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/responsive'
        },
        {
            path:'/wordgame',
            component:WordGame
        },
        {
            path:'/numberbaseball',
            component:NumberBaseball
        },
        {
            path:'/numberpicker',
            component:NumberPicker
        },
        {
            path:'/responsive',
            component:ResponsiveTest
        },
        {
            path:'/rspgame',
            component:RspGame
        },
        {
            path:'/tiktaktoe',
            component:TikTakToe
        },
    ]
})