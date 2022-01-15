<template >
  <div id="app">
    <b-navbar toggleable="sm" type="white" variant="">
      <b-navbar-brand href="#">
        <router-link to="/"><img class="logoimg" src="@/assets/diarylogotrans.png" alt="Kitten"></router-link>
      </b-navbar-brand>

        <b-navbar-nav v-if="isloggedin==true" @click="isloggedin=false"><router-link to="/" class="navtext">로그아웃</router-link></b-navbar-nav>
        <b-navbar-nav v-else><router-link to="/login" class="navtext">로그인</router-link></b-navbar-nav>

        <b-navbar-toggle target="nav-text-collapse"><b-icon-list></b-icon-list></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text ><router-link to="/writediary" class="collapsetext">일기 쓰기</router-link></b-nav-text>
            <b-nav-text class="collapsetext">내 일기 보기</b-nav-text>
            <b-nav-text class="collapsetext">분석 데이터 보기</b-nav-text>
            <b-nav-text class="collapsetext">연락하기</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isloggedin : true,
    }
  },
  mounted: function () { 
    this.$root.$on('whenlogin', (text) => { // here you need to use the arrow function
     this.isloggedin= true;
     console.log(text);
    })
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap%27');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

.logoimg{
  height:40px;
  width:40px;
  object-fit: scale-down;
}
.navtext{
  font-family: 'Gowun Batang', serif;
  font-size: 15px;
  color:#B1B1B1;
  text-decoration:none;
  float:right;
  position:absolute;
  left:50%;
  transform: translate(-50%, -50%);
}
.collapsetext{
  font-family: 'Gowun Batang', serif;
  font-size: 15px;
  color:#B1B1B1;
  text-decoration:none;
}

.navtext:hover{
  color:#B1B1B1;
  text-decoration:none;
}
.collapsetext.hover{
  color:#B1B1B1;
  text-decoration:none;
}
#body{
  color: #B2B8A3;
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
