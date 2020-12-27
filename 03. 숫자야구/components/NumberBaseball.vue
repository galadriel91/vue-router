<template>
  <div>
      <div class="container">
        <div class="title">4자리의 숫자를 입력해주세요</div>
        <div class="result" v-if="result">{{result}}</div>
        <form @submit.prevent="onClickSubmit">
            <div>
                <input type="text" v-model="value" ref="input" minlength="4" maxlength="4">
                <button><i class="fas fa-arrow-right right"></i></button>
            </div>
        </form>
        <!-- 이 부분은 컴포넌트를 따로 만들어도 될 것 같다. -->
        <ul>
            <li class="result-list" v-for="(item,index) in tries" :key="index">
                <div>
                    <span>{{index + 1 }}</span>
                    <div>
                        <p>입력숫자 : <span class="input-value">{{item.try}}</span></p>
                        <p>{{item.result}}</p>
                    </div>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
const getNumber = () => {
    const shupple = [];
    const candidate = [1,2,3,4,5,6,7,8,9];
    for(let i = 0; i < 4; i++ ){
        // const choice = candidate.splice(Math.floor(Math.random() * (9 - i))  ,1)[0]
        const choice = candidate.splice(Math.floor(Math.random() * candidate.length)  ,1)[0]
        shupple.push(choice) 
    }
    return shupple
}

export default {
    data(){
        return{
            number:getNumber(),
            value:'',
            result:'',
            tries:[]
        }
    },
    methods:{
        onClickSubmit(){
            if(this.number.join('') === this.value){
                this.result = "정답입니다 !"
                this.number = getNumber()
                this.value = ''
                this.tries = []
                this.$refs.input.focus()
            }else{
                if(this.tries.length >= 9){
                    this.result = `10회를 초과하여 초기화 합니다. 정답은 ${this.number}였습니다.`
                    this.number = getNumber()
                    this.value = ''
                    this.tries = []
                    this.$refs.input.focus()
                }
                else{
                    let strike = 0;
                    let ball = 0;
                    const valueArray = this.value.split('').map(v=>parseInt(v)) ;
                    // split()은 분리 , join()은 합침
                    for(let i = 0; i < 4; i++){
                        if(valueArray[i] === this.number[i]){
                            strike++
                        }else if(this.number.includes(valueArray[i])){
                            ball++
                        }
                    }
                    this.tries.push({
                        try:this.value,
                        result:`${strike}스트라이크 ${ball}볼 입니다.`
                    })
                    this.value = '';
                    this.result = '';
                    this.$refs.input.focus()
                }
            }
        }
    }
}
</script>

<style scoped>
    .container{display: flex; height: calc(100vh - 50px); justify-content: flex-start; align-items: center; flex-direction: column; }
    .title{padding: 15px 0; font-size: 14px; color: #000;}
    .result{padding: 0 0 15px 0; font-size: 14px; color: #000;}

    form div{display: flex; border: 1px solid #000; border-radius: 5px;}
    form div input{border:none; font-size: 14px; color: #000;}
    form div input:focus{outline: none;}
    form div button{background: none; width: 40px;}
    form div .right{font-size: 17px;}
    
    .result-list{padding: 10px 0;}
    .result-list > div{display: flex; height: 50px; justify-content: center; color: #000; align-items: center;}
    .result-list > div > span{width: 40px; font-size: 14px;}
    .result-list > div div p{font-size: 14px;}
    .result-list > div div .input-value{color: #214252; font-weight: bold;}
    
</style>