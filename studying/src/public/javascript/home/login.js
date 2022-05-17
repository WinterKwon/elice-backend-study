"use strict"

//front처리
// 로그인 버튼 클릭시 서버로 데이터 보내기

const id = document.querySelector('#id'),
 pw = document.querySelector('#password'),
 loginBtn = document.querySelector('button');

// console.log(id); //defer 기능 확인하기
loginBtn.addEventListener('click', login);

async function login(){
        // console.log("bye");
    const req = await {
        id : id.value,
        password : pw.value
    }

    console.log(req);
}