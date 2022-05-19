
"use strict";


const User = require('../../models/User');
// get일때와 post일때의 라우터가 잘 구분되지 않아 가독성 있게 변경

// const UserStorage = require('../../models/UserStorage');  //login()함수 만들면 controller는 더이상 userstorage에 접근하지 않음

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
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        console.log(response);
        
        // const id = req.body.id,
        // password = req.body.password;
        
        // const users = UserStorage.getUsers("id", "password");
     
        // const response = {}
        // if ( users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx] == password){
        //         response.success = true;
        //         return res.json(response)

        //     }

        // }
        // response.success = false;
        // response.msg = '로그인에 실패했습니다';
        // return res.json(response);
    }
}




module.exports = {output, process};