
"use strict";
// const hello = (req,res) =>{
//     res.render("home/index");
// };


// const login = (req,res) =>{
//     res.render("home/login")
// };

// module.exports = {
//     hello,
//     login
// }

// //object에서 키 하나만 넣을 경우 키와 같은값의 value를 자동으로 넣어준다
// // {hello : hello, login : login}과 같다

// get일때와 post일때의 라우터가 잘 구분되지 않아 가독성 있게 변경

const output = {
    hello : (req,res) =>{
            res.render("home/index");
        },
        
        
    login : (req,res) =>{
            res.render("home/login")
        }
};

const process = {
    login : (req,res)=>{
        console.log(req.body);  //front의 fetch에서 내용을 body에 넣어 보냈으므로 req.body
                                //이상태에서는 콘솔에 undefined로 보일 것
                                //app.js에서 parser설정해주기
    }
}

module.exports = {output, process};