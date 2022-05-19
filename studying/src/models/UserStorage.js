"user strict"

class UserStorage {
    //데이터는 은닉화시키고 getter로 접근할 수 있게 만듦
    //home.ctrl에서 부를 수 있게 getUsers로 static으로
    static #users = {     //#로 private 선언
        id : ["wayo7813", "pjkwon","doctor","ceoKwon","dragonKwon"],
        password : ["1234","1111","2345","3456","4567"],
        name : ["Steve", "Angela","Elice","Scarlet","Daniel"]
    }

    static getUsers(...fields){  
       
        const users =  this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
       
        return newUsers;
    }

    static getUserInfo (id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;


    }

}



module.exports = UserStorage;