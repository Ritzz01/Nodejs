const express = require("express");
const app = express();

//This initializes an instance of an Express application. The app object will be used to define routes, middleware, and other functionalities.

app.get("/home", (req, res) => {
  // res.send("hello")
  console.log(req.query.name);
  res.send(`
        <h1>Hello</h1>
        <a href="http://localhost:4000/user">User Page</a>
        `);
});

app.get("/about", (req, res) => {
  let a = req.query.name;
  res.send(`
        
        <input type="text" placeholder="username" value=${a}/>
        <button>Click </button>
        `);
  console.log(a);
});

app.get("/user", (req, res) => {
  res.send({
    name: "ritika",
  });
});
app.listen(4000);
