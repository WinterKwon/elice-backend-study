
"use strict";
const hello = (req,res) =>{
    res.render("home/index");
};


const login = (req,res) =>{
    res.render("home/login")
};

module.exports = {
    hello,
    login
}

//object에서 키 하나만 넣을 경우 키와 같은값의 value를 자동으로 넣어준다
// {hello : hello, login : login}과 같다