<template>
  <div>
      <header-nav></header-nav>
      <div class="router-container">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import router from './routes/index'
import HeaderNav from './components/HeaderNav'
export default {
    components:{
        HeaderNav
    },
    router,
}
</script>

<style>
    @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    html{font-size: 10px;}
    body{font-size: 1rem; font-family: 'GmarketSansMedium';}
    
</style>