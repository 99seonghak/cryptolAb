"use strict";

 // login.js와 /views/home/login.ejs 연결
// DOM -> Document Object Model
// 버튼이 눌릴때 데이터가 서버로 이동한다.

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req= {
    id:id.value,
    psword:psword.value
    };

    /* Restful API
    [Restful : API = 자원의 표현을 가지고 상태를 전달한다.]
    자원: 모든 URL는 자원으로 나타낸다.
    ex) GET /sports/soccer/show -> GET /sports/soccer
        GET /sports/soccer/players/11/delete -> DELETE /sports/soccer/players/11

    상태: 모든 동작은 Method로 나타낸다.
    ex) GET 조회, POST 생성, PUT 수정, DELETE 삭제

    표현: 리소스의 응답 타입은 Header로 나타낸다.
    같은 메서드, 같은 경로인데 자기가 받고 싶은 응답 타입을 명시할 수 있다.
    ex) Content-Type: text/html; charset=utf-8
    */
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";
            } else{
                alert(res.msg);
            }
        })
        .catch((err) =>{
            console.error(new Error("로그인 중 에러 발생")); // new Error()를 입력하면 출력값에 Error: 이 나옴.
        });
}
