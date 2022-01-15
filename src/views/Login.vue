<template>
  <div class="loginbg">
    <h1 class="loginfont">로그인하기</h1>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder=""
      rows="1"
      max-rows="1"
      class="inputtext rounded-pill"
    ></b-form-textarea>
      <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder=""
      rows="1"
      max-rows="1"
      class="inputtext rounded-pill"
    ></b-form-textarea>
    <router-link to="/"><b-button pill class="loginbutton" @click="this.$root.$emit('whenlogin', 'logged in!');"> <b>Login</b> </b-button></router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.loginbg{
  background-color:#FFF5EB;
  height:100vh;
}
.loginfont{
  font-family: 'Gowun Batang', serif;
  font-size: 6vh;
  padding-top: 20vh;
}
.inputtext{
  height:7vh;
  width:80%;
  position:relative;
  margin-top:3vh;
  left:50%;
  transform: translate(-50%, 0);
  background-color: #F4C7AB;
  border:0;
  text-align: center;
}
.loginbutton{
  font-family: 'Gowun Batang', serif;
  font-size: 4vh;
  height:7vh;
  width:80%;
  position:absolute;
  margin-top:5vh;
  left:50%;
  transform: translate(-50%, 0);
  background-color: #000000;
  border:0;
}
</style>
