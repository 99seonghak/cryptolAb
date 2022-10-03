"use strict";

const app = require("../app");
const PORT2 = 3000;

app.listen(process.env.PORT||PORT2,()=> { // [function()] == [()=>]
    console.log("서버 가동");
});