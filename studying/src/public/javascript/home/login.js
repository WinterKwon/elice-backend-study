"use strict"

//front처리
// 로그인 버튼 클릭시 서버로 데이터 보내기

const id = document.querySelector('#id'),
 pw = document.querySelector('#password'),
 loginBtn = document.querySelector('#button');

// console.log(id); //defer 기능 확인하기
loginBtn.addEventListener('click', login);

async function login(){
        // console.log("bye");
    const req = await {
        id : id.value,
        password : pw.value
    }

    // console.log(req);
    // console.log(JSON.stringify(req));
    // console.log(req,JSON.stringify(req) ); //json객체는 문자열로 감싸져 있음 확인

    //서버에 데이터 보내기 -> fetch 이용
    //서버개발자가 어떤 경로에서 주고 받을지 미리 설계해야함
    fetch('/login', {
        method : 'POST',
        headers : {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(req)  
    }).then(res => res.json())
    .then( res => {
        if(res.success){
            location.href = '/';
        } else {
            alert(res.msg);
        }
    })
    .catch(err=>{
        console.error(new Error('로그인중 에러발생'));  // 그냥 console.error('로그인중 에러발생') 하면 콘솔에서 ERROR이란 지시어가 없이 나온다
        //이 에러메시지 확인하려면 라우팅에서 이 경로를 주석처리하고 실행해보면 된다
    })
    


}