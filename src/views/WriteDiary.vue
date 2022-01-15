<template>
    <div class="bg">
        <h1 class="writediaryfont"> 일기 쓰기 </h1>
        <h4 class="smalldiaryfont"> 오늘 당신의 하루는 어땠나요? </h4>
        <center>
        <b-form-textarea
            id="textarea"
            v-model="diary"
            placeholder=""
            rows="10"
            max-rows="10"
            class="inputtext"
    ></b-form-textarea>
        <div v-if="showresult == true">
            <div>
                <img :src='moong' class="aiimg">
            </div>
            <div>
                <b-form-textarea id="textarea-auto-height" rows="3" max-rows="10" plaintext :value="aianswer" class="aitext"></b-form-textarea>
            </div>
            <div v-if=" recommend_res == 'music' ">
                <iframe v-bind:src='plink'  width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        </div>
            <b-button pill class="submitbutton" @click="return_diary_data"> <b>Enter</b> </b-button>
        </center>
    </div>    
</template>
<script>

import axios from 'axios'

const headers = {
  'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': '*/*',
  'Access-Control-Allow-Origin': '*',
}

export default {
    data() {
        return {
            showresult : false,
            diary : '',
            predict_res : '',
            recommend_res : '',
            title : '',
            author : '',
            plink : '' ,
            emotion : '',
            aianswer : '',
            moong : ''
        }
    },
    methods: {
        return_recommend_data : function(){
            this.aianswer = '';
            axios.post('http://localhost:5000/recommend', {res: this.predict_res }, {headers})
            .then(res => { 
                // console.log(res.data);
                this.recommend_res = res.data["res"]
                this.emotion = res.data["emotion"]
                this.title = res.data["title"],
                this.author = res.data["author"]
                console.log(this.emotion)
                if(this.recommend_res == "music")
                {
                    this.plink = "https://open.spotify.com/embed/track/" + res.data["link"];
                    if(this.emotion == 'positive'){
                        this.aianswer += "행복한 당신을 위하여 '" + this.author + "'의 '" + this.title + "'라는 노래를 준비했어요! 한번 들어보세요!"
                        this.moong = require("../assets/happymoong.png")
                    }
                    else{
                        this.aianswer += "지금같이 우울한 상황에는 '" + this.author + "'의 '" + this.title + "'이란 곡이 위로가 될 거에요!"
                        this.moong = require("../assets/sadmoong.png")
                    }
                }
                if(this.recommend_res == "book")
                {
                    if(this.emotion == 'positive'){
                        this.aianswer += "긍정적인 삶에 더 활력을 불어넣을 '" + this.author + "'의 '" + this.title + "'란 책을 준비했어요! 꼭 읽어보시는 걸 추천합니다!"
                        this.moong = require("../assets/happymoong.png")
                    }
                    else{
                        this.aianswer += "위로가 될 만한 책을 준비했어요. '" + this.author + "'의 '" + this.title + "'이란 책을 읽고 힘을 내보세요!"
                        this.moong = require("../assets/sadmoong.png")
                    }
                }
            })
        },
        return_diary_data : function(){
            axios.post('http://localhost:5000/predict', {text: this.diary }, {headers})
            .then(res => { 
                // console.log(res.data);
                this.predict_res = res.data["res"]            
                this.return_recommend_data()
                this.showresult = true;
            })
        }
    },
}
</script>
<style scoped>
.aitext{

    align-content:center;
    width:80%;
    border-radius:25px;
    background-color: white;
    margin-top : 5vh;
    padding:3vh;
}
.aiimg{
    float:left;
    margin-top : 3vh;
    margin-bottom: 3vh;
}
.bg{
    height:100%;
    background-color: #FFF5EB;
}
.writediaryfont{
    font-family: 'Gowun Batang', serif;
  font-size: 5vh;
  padding-top: 5vh;
 padding-left:calc(10vw + env(safe-area-inset-left));
  padding-right:calc(10vw + env(safe-area-inset-right));
  text-align: left;
}
.smalldiaryfont{
    font-family: 'Gowun Batang', serif;
    font-size: 2vh;
    padding-left:calc(10vw + env(safe-area-inset-left));
    padding-right:calc(10vw + env(safe-area-inset-right));
    text-align: left;
}
.inputtext{
    align-content:center;
    width:80%;
    border-radius:25px;
    background-color: white;
    margin-top : 3vh;
}
.submitbutton{
  font-family: 'Gowun Batang', serif;
  font-size: 4vh;
  height:7vh;
  width:80%;
  margin-top:5vh;
  margin-bottom: 5vh;
  background-color: #000000;
  border:0;

}
</style>