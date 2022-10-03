"use strict";


/*
function hello(req, res){
    res.render("home/index");
}
function login(req,res){
    res.render("home/login");
}
*/

const User = require("../../models/User");

const output = {
     hello: (req, res)=> {
        res.render("home/index");
    },
     login: (req, res)=> {
        res.render("home/login");
    },
    register: (req,res)=> {
        res.render("home/register");
    },
};

const process = {
    login:(req,res)=> {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req,res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
        // const id = req.body.id,
        //   psword = req.body.psword;
        //   // const userStorage = new UserStorage(); class라는 함수를 사용했기 때문에  new UserStorage() 불러낸다.
        // const users = UserStorage.getUsers("id","psword");
    
        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인 실패하였습니다.";
        // return res.json(response);