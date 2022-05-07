//login 화면만들기
//express 서버 만든 것 가져오기



const express = require("express");
const app = express();

//앱 세팅
//npm install ejs -s 
app.set("views", "studying/views");
app.set("view engine", "ejs");


app.get('/', (req, res )=>{
    res.render("home/index")   

});

app.get('/login', (req,res) =>{
    res.render("home/login")
});

app.listen(3003, ()=> {
    console.log("서버 가동");
});