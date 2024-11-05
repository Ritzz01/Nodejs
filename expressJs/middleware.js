const express = require("express");
const app = express();

// const details = (req, res, next) => {
//   console.log("details");
//   //next ni call kroge toh page load hote rhega

//   let a = req.query.age;
//   if (a < 18) {
//     res.send("Underage")
//   }
//   else{

//       next();
//   }
// };

// app.use(details);  //application level middleware
// app.get("/", (req, res) => {
//   res.send("hey");
// });

// app.get("/user", (req, res) => {
//   res.send("hey user");
// });



//route level middleware


//put it in seperate file
// const details = (req, res, next) => {
//   console.log("details");
//   //next ni call kroge toh page load hote rhega

//   let a = req.query.age;
//   if (a < 18) {
//     res.send("Underage")
//   }
//   else{

//       next();
//   }
// };

const details=require('./route-middleware')
const route=express.Router()

// app.get("/", (req, res) => {
//   res.send("hey");
// });

// app.get("/user", details, (req, res) => { //route level middleware
//   res.send("hey user");
// });


route.use(details)
route.get("/", (req, res) => {
  res.send("hey");
});

route.get("/user",  (req, res) => { //route level middleware
  res.send("hey user");
});

app.use('/',route)


app.listen(4000);
