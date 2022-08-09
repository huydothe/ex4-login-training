const http = require("http");

http.createServer((req,res)=>{
    let txt = "";
    if(req.url === "/login"){
        txt = "Login Success";
    }else {
        txt = "Login fail";
    }
    res.end(txt);
})

.listen(8080,"localhost");