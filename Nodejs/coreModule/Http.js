const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.method, req.url);
    if (req.url == "/index") {
      res.write("hello world");

      res.end();
    }
  })
  .listen(4000);
