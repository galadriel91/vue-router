<template>
  <header>
    <div class="header-wrap">
        <h1 class="title"><router-link to="/">Vue-Router</router-link></h1>
        <button class="whole-btn" @click="onClickOpen">
          <i v-if="state" class="fas fa-times"></i>
          <i v-else class="fas fa-bars"></i>
        </button>
        <nav :class="state">
          <ul>
              <li @click="onClickRemove"><router-link to="/wordrelay">끝말잇기</router-link></li>
              <li @click="onClickRemove"><router-link to="/numberbaseball">숫자야구</router-link></li>
              <li @click="onClickRemove"><router-link to="/numberpicker" >번호추첨</router-link></li>
              <li @click="onClickRemove"><router-link to="/responsive" >반응속도</router-link></li>
              <li @click="onClickRemove"><router-link to="/tiktaktoe" >틱택토</router-link></li>
          </ul>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      state:''
    }
  },
  methods:{
    onClickOpen(){
      this.state = this.state === "" ? "open" : ""
    },
    onClickRemove(){
      this.state = ""
    }
  }
}
</script>

<style scoped>
    header{height: 5rem; background: #41b883;}
    .header-wrap{margin: 0 auto; width: 120rem;}
    .title{float: left; line-height: 5rem;}
    .title a{display: block; font-size: 16px; color: #fff; text-decoration: none; }
    .header-wrap nav{float: right;}
    .header-wrap ul{font-size: 0;}
    .header-wrap ul li{display: inline-block;}
    .header-wrap ul li a{position: relative; padding: 0 1rem; display: block; line-height: 5rem; font-size: 1.4rem; color: #fff;}
    .header-wrap ul li:last-child a::after{display: none;}
    .header-wrap ul li a::after{content: ''; position: absolute; top: 50%; right: 0; transform: translateY(-40%); width: 1px; height: 1rem; background: #fff;}
    .router-link-exact-active{text-decoration: underline;}
    .whole-btn{float: right; display: none; background: none; font-size: 3rem; color: #fff; line-height: 5rem; cursor: pointer;}
    .whole-btn:focus{outline: none;}

    @media all and (max-width: 1240px){
       .header-wrap{position: relative; width: 100%;}
       .whole-btn{position: relative; display: block; margin-right: 1.5rem; z-index: 200;}
       .title{margin-left: 1.5rem ;}
       .header-wrap nav{float: none; display: none; position: absolute; right: -110%; width: 100vw; height: 100vh; background: rgba(0,0,0,.6); transition: all .1s; z-index: 100; }
       .header-wrap nav.open{right: 0; display: block;}
       .header-wrap ul{position: relative; top: 50%; transform: translateY(-50%);}
       .header-wrap ul li{display: block; text-align: center;}
       .header-wrap ul li:hover a {text-decoration: underline;}
       .header-wrap ul li a{padding: 1rem 0; font-size: 1.5rem;}
       .header-wrap ul li a::after{display: none;}
    }
</style>