"use strict"

//login 화면만들기
//express 서버 만든 것 가져오기



const express = require("express");
const app = express();

//앱 세팅
// views/home 폴더 만들고 그 안에 index.ejs, login.ejs 파일만들기
//npm install ejs -s 

app.set("views", "studying/views"); //views는 studying/views를 기본 경로로 하겠다
app.set("view engine", "ejs");  //뷰 엔진은 ejs로 하겠다 -> npm install  필요

const home = require("studying/routes/home");  // 루트 경로로 오면 home으로 이동하도록 경로 설정
app.use("/", home);  //.use()는 middleware등록 매서드

app.listen(3003, ()=> {
    console.log("서버 가동");
});

