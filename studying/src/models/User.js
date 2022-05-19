"use strict"
const UserStorage = require('./UserStorage');
class User {
    constructor(body){
        this.body = body;
    }

    login() {
        const {id, password} = UserStorage.getUsers("id","password");
        // console.log(id, password);

        if(id ===this.body.id && password === this.body.password) {
            
        }
    }
}

module.exports = User;