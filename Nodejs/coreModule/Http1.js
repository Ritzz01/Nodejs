const http = require("http");

http.createServer((req,res)=>{
    if(req.url=='/home')
    {
        res.write('<h1>Hello World</h1>')
        res.end()
    }
}).listen(4000)