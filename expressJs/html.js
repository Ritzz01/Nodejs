const express = require("express");
const app = express();
const path = require("path");

// let a = path.join(__dirname, "public");
// console.log(a);

// // app.use(express.static(a)) creates html extension //build in middleware
// app.get("/", (req, res) => {
//   res.sendFile(`${a}/index.html`);
// });

// app.get("/about", (req, res) => {
//   res.sendFile(`${a}/about.html`);
// });

// app.get("*", (req, res) => {
//   res.sendFile(`${a}/error.html`);
// });

//ejs

app.set("view engine", "ejs");
app.get("/profile", (req, res) => {
    const details={
        name:"Alu",
        age:12,
        hobbies:['movie','coding','games']
    }
  res.render("profile",{details});
});

app.listen(4001);
