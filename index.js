// // 멀티쓰레드 경쟁상태 예시 코드
// // 정보 불일치 일어나게 된다.
// // lock 또는 mutex (mutuallly exclude?)
// // lock을 건다는 건 계좌 정보를 내가 소유하겠다

const { ftruncate } = require("fs");

// let lock = 0; //0(unlock) or 1(lock)

// function deposit(amount){
//     while(lock === 1){}
//     lock = 1;
//     let value = getDataFromAccout();
//     value += amount;
//     saveDataToAccount(value);
//     lock = 0;
// };

// function withdraw(amount){
//     while(lock === 1){}
//     lock = 1;
//     let value = getDataFromAccout();
//     value -= amount;
//     saveDataToAccount(value);
//     lock = 0;
// }


//blocking 연습
function foo(){
        return 1;
};

function bar(){
    return "something";
};

function main(){
    foo();
    bar();
}

main();



// queue priority
function funcA(){
    console.log('script starts')

    funcB()

    funcE()
}

function funcB(){
    Promise.resolve()
        .then(console.log('promise'))
    setTimeout(()=>{
        console.log('setTimeout')
    },0)
}

function funcE(){
    console.log('script ends')
}