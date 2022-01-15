<template>
  <div class="Home">
    <div class="intro">
      <h1 class="introfont">한 줄 일기를 적고,<br> 인공지능에게 위로를 받아보세요🤗</h1>
    </div>
    <div class="desc">
        <p class= "descfont">인공지능에게 오늘의 여러분의 감정을 솔직하게 말해보세요<br>인공지능이 여러분의 마음에 공감하여 도와 줄 수 있을 거에요!</p>
    </div>
    <div class="colordesc">
        <p class= "descfont">모든 개인정보는 익명으로 처리됨을 보장합니다!<br>마음 편히 대화해주세요 😊</p>
    </div>
    <div class="desc">
        <p class= "regfont"> <b> 지금 로그인하고 일기를 적어보세요 😉 </b> </p>
        <router-link to="/login"><b-button squared class="registerbutton"> 로그인하기 </b-button></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
a{
  font-family: 'Noto Sans KR', sans-serif;
  text-align:center;
  color:black;
  font-size: 1vh;
}
.desc{
  height:20vh;
  background-color: white;
}
.colordesc{
  height:20vh;
  background-color: #FFF5EB;
}
.intro{
  background-color:#FFF5EB;
  height:30vh;
  width:100%;
  text-align:left;
}
.introfont{
  font-family: 'Gowun Batang', serif;
  font-size: 2.5vh;
  padding-top:10vh;
  padding-left:calc(5vw + env(safe-area-inset-left));
  padding-right:calc(5vw + env(safe-area-inset-right));

}
.descfont{
  font-family: 'Gowun Batang', serif;
  padding-top: 7vh;
  font-size: 1.5vh;
}
.regfont{
  padding-top:7vh;
  font-size:2vh;
  text-align: left;
  padding-left:calc(5vw + env(safe-area-inset-left));
  padding-right:calc(5vw + env(safe-area-inset-right));
}
.registerbutton{
  font-size: 1vh;
  margin-left:2vh;
  float:left;
  background-color:#B2B8A3;
  border:0cm;
}
</style>
