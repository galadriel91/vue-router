import Vue from 'vue'
import VueRouter from 'vue-router'

import WordGame from '../../../02. 끝말잇기/components/WordGame'
import NumberBaseball from '../../../03. 숫자야구/components/NumberBaseball'
import NumberPicker from '../../../04. 번호추첨/components/NumberPicker'
import ResponsiveTest from '../../../05. 반응속도/components/ResponsiveTest'
import TikTakToe from '../../../06. 틱택토/components/TikTakToe'
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
            path:'/tiktaktoe',
            component:TikTakToe
        },
    ]
})