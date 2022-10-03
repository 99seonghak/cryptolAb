"use strict";

const fs = require("fs");
// static이라고 정적변수를 선언해주면 class 자체에서 users라는 것을 참조할 수 있음.
class UserStorage { // #users로 음닉화하고 메서드 getUsers로 받아와야된다.
    
     
    static getUsers(...fields) { // ...~~하면 배열 형태로 들어온다.
        //const users = this.#users; 
        const newUsers = fields.reduce((newUsers, field) => { // reduce 배열 메서드
            if(users.hasOwnProperty(field)) {// users에 해당하는 키 값(field)이 있는지 확인
                newUsers[field] = users[field]; // newUsers는 {}임, users는 값들
            }
            return newUsers;
        }, {});
        return newUsers; 
    }

    static getUserInfo(id) {
        //const users = this.#users;
        fs.readFile("./src/databases/users.json", (err,data) => {
            if(err) throw err;
            // JSON.parse(data)를 이용해서 버퍼 0x16 값들을 읽을 수 있는 값들로 바꿈
            const users =JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users); // => [id, psword, name]
            const userInfo = usersKeys.reduce((newUser,info) => {
                newUser[info] = users[info][idx];
                return newUser;
            },{});

            return userInfo;  
        });      
    }
    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);
        return { success: true };
    }
}

module.exports = UserStorage; // 밖으로 보냄